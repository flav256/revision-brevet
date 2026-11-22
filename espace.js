/* =========================================================
   ESPACE — la zone protégée de l'élève : travail à faire,
   contrôles, emploi du temps, notes et notifications, lus dans
   Pronote deux fois par jour (dépôt privé espace-3c).

   Les données arrivent chiffrées (AES-256-GCM) depuis un relais
   Cloudflare. La clé est tirée du mot de passe de l'espace
   (PBKDF2-SHA-256, 600 000 tours) et ne quitte jamais l'appareil :
   gardée dans IndexedDB comme clé « non extractible ».
   Tant que la zone est verrouillée, la page ne montre aucun nom.
   ========================================================= */
const Espace = (() => {
  const API_DEFAUT = 'https://espace-3c.flav256.workers.dev';
  const API = (() => { try { return localStorage.getItem('espace:api') || API_DEFAUT; } catch { return API_DEFAUT; } })();
  const VAPID = 'BD88O73v72-C6dEa5AtoFGY5gv4sx0hwtzweGFVg4l20KR7mYHRIZTjw4B7EEKu5Zf0XP5JawoLrVhkunG9svAA';
  const SEL = 'espace-3c/cle/v1';     // le même que dans collecte.py
  const TOURS = 600000;
  const ONGLETS = [['resume', 'Résumé'], ['controles', 'Contrôles'], ['calendrier', 'Calendrier'], ['reglages', 'Réglages']];
  const TYPES = [
    ['resume', 'Résumé du soir', 'Vers 18 h : les devoirs et les contrôles du lendemain.'],
    ['rappel', 'Rappel la veille d\'un contrôle', 'Le soir, pour réviser à temps.'],
    ['controles', 'Contrôle annoncé', 'Dès qu\'un contrôle apparaît dans Pronote.'],
    ['devoirs', 'Nouveaux devoirs', 'Ce que les professeurs ont ajouté depuis le dernier passage.'],
    ['edt', 'Cours annulé ou modifié', 'Le matin pour la journée, le soir pour le lendemain.'],
    ['notes', 'Nouvelles notes', 'Chaque note qui arrive dans Pronote.']
  ];
  const DEFAUT = { resume: true, rappel: true, controles: true, devoirs: true, edt: true, notes: false };
  const VERS_SITE = [[/fran/i, 'francais'], [/math/i, 'maths'], [/hist|g[ée]o|emc/i, 'histoire'], [/svt/i, 'svt'],
    [/phys/i, 'physique'], [/techn/i, 'techno'], [/angl/i, 'anglais'], [/espa/i, 'espagnol']];
  const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const MOIS_C = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  let cle = null, jeton = null, donnees = null, dernierAppel = 0, jourChoisi = null;

  /* ---------- stockage sur l'appareil (IndexedDB) ---------- */
  function idb(mode, action) {
    return new Promise((ok, ko) => {
      const r = indexedDB.open('espace', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('kv');
      r.onerror = () => ko(r.error);
      r.onsuccess = () => {
        const t = r.result.transaction('kv', mode);
        const q = action(t.objectStore('kv'));
        t.oncomplete = () => { ok(q && q.result); r.result.close(); };
        t.onerror = () => ko(t.error);
      };
    });
  }
  const lire = k => idb('readonly', s => s.get(k)).catch(() => null);
  const ecrire = (k, v) => idb('readwrite', s => s.put(v, k)).catch(() => null);
  const effacer = k => idb('readwrite', s => s.delete(k)).catch(() => null);
  const local = {
    get(k, d) { try { const v = localStorage.getItem('espace:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('espace:' + k, JSON.stringify(v)); } catch { /* ignoré */ } }
  };

  /* ---------- chiffrement ---------- */
  const octets = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  async function deriver(phrase) {
    const enc = new TextEncoder();
    const base = await crypto.subtle.importKey('raw', enc.encode(phrase), 'PBKDF2', false, ['deriveBits']);
    const bits = new Uint8Array(await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: enc.encode(SEL), iterations: TOURS, hash: 'SHA-256' }, base, 512));
    const k = await crypto.subtle.importKey('raw', bits.slice(0, 32), 'AES-GCM', false, ['decrypt']);
    const j = [...bits.slice(32)].map(b => b.toString(16).padStart(2, '0')).join('');
    return { k, j };
  }
  async function ouvrir(boite, k) {
    const clair = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: octets(boite.iv) }, k, octets(boite.donnees));
    return JSON.parse(new TextDecoder().decode(clair));
  }
  async function telecharger() {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 9000);
    try {
      const r = await fetch(API + '/donnees', { cache: 'no-store', signal: ctl.signal });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error('relais ' + r.status);
      return await r.json();
    } finally { clearTimeout(t); }
  }
  /* → 'ok' | 'verrou' (pas de clé) | 'cle' (mot de passe changé) | 'vide' | 'horsligne' */
  async function charger() {
    if (!cle) { const s = await lire('cle'); if (s && s.k) { cle = s.k; jeton = s.j; } }
    if (!cle) return 'verrou';
    let boite = null, horsLigne = false;
    try { boite = await telecharger(); if (boite) ecrire('boite', boite); }
    catch { horsLigne = true; boite = await lire('boite'); }
    if (!boite) return horsLigne ? 'horsligne' : 'vide';
    try {
      donnees = await ouvrir(boite, cle);
      donnees._horsLigne = horsLigne;
      dernierAppel = Date.now();
      return 'ok';
    } catch { cle = null; return 'cle'; }
  }

  /* ---------- dates ---------- */
  const deux = n => String(n).padStart(2, '0');
  const iso = d => `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}`;
  const jour = s => { const [a, m, j] = s.slice(0, 10).split('-').map(Number); return new Date(a, m - 1, j); };
  const ajoute = (s, n) => { const d = jour(s); d.setDate(d.getDate() + n); return iso(d); };
  const ecart = (a, b) => Math.round((jour(b) - jour(a)) / 864e5);
  const lundiDe = s => ajoute(s, -((jour(s).getDay() + 6) % 7));
  const auj = () => iso(new Date());
  const heure = s => { const [h, m] = s.slice(11, 16).split(':'); return `${+h} h ${m}`; };
  const dateLongue = s => { const d = jour(s); return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`; };
  const dateCourte = s => { const d = jour(s); return `${JOURS[d.getDay()].slice(0, 3)}. ${d.getDate()} ${MOIS_C[d.getMonth()]}`; };
  function quand(s, a = auj()) {
    const n = ecart(a, s);
    if (n === 0) return 'aujourd\'hui';
    if (n === 1) return 'demain';
    if (n === -1) return 'hier';
    if (n > 1 && n < 7) return JOURS[jour(s).getDay()];
    return dateCourte(s);
  }
  function dans(s, a = auj()) {
    const n = ecart(a, s);
    return n === 0 ? 'aujourd\'hui' : n === 1 ? 'demain' : n > 1 ? `dans ${n} jours` : n === -1 ? 'hier' : `il y a ${-n} jours`;
  }
  function prochainJour(d, a) {
    const js = [...new Set(d.cours.map(l => l.debut.slice(0, 10)))].filter(j => j > a).sort();
    if (js.length) return js[0];
    let j = ajoute(a, 1);
    while ([0, 6].includes(jour(j).getDay())) j = ajoute(j, 1);
    return j;
  }

  /* ---------- petits morceaux ---------- */
  const idSite = nom => (VERS_SITE.find(([r]) => r.test(nom || '')) || [])[1];
  function couleur(x) {
    if (/^#[0-9a-f]{6}$/i.test(x.couleur || '')) return x.couleur;
    const id = idSite(x.matiere);
    return id ? matiere(id).couleur : '#8A93A3';
  }
  const texte = t => esc(t || '')
    .replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
    .replace(/\n/g, '<br>');
  const lienSite = (nom, libelle) => { const id = idSite(nom); return id ? `<a class="esp-lien" href="#/matiere/${id}">${libelle || 'Réviser sur le site'}</a>` : ''; };
  const elision = p => p ? (/^[aeiouyhéèêàâîïôû]/i.test(p) ? 'd’' : 'de ') + esc(p) : '';
  const faitLocal = c => local.get('fait:' + c, false);
  const ICONE_COCHE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  function ligneDevoir(h, avecDate) {
    const fait = h.fait || faitLocal(h.cle);
    const long = (h.texte || '').length > 180;
    return `<div class="esp-dev${fait ? ' fait' : ''}" style="--c:${couleur(h)}">
      <button class="esp-coche" aria-pressed="${fait}" aria-label="Marquer comme fait" onclick="Espace.cocher('${h.cle}', this)"${h.fait ? ' disabled title="Marqué fait dans Pronote"' : ''}>${ICONE_COCHE}</button>
      <div class="esp-dev-txt">
        <p class="esp-dev-tete"><b>${esc(h.matiere)}</b>${h.controle ? '<span class="esp-badge ds">Contrôle</span>' : ''}${avecDate ? `<small>pour ${esc(quand(h.date))}</small>` : ''}</p>
        <p class="esp-dev-corps${long ? ' long' : ''}"${long ? ' onclick="this.classList.toggle(\'ouvert\')"' : ''}>${texte(h.texte) || '<i>(sans consigne)</i>'}</p>
        ${h.controle ? lienSite(h.matiere) : ''}
      </div>
    </div>`;
  }
  function ligneControle(c, complet) {
    const d = jour(c.date);
    return `<div class="esp-ctrl" style="--c:${couleur(c)}">
      <div class="esp-date"><small>${JOURS[d.getDay()].slice(0, 3)}.</small><b>${d.getDate()}</b><small>${MOIS_C[d.getMonth()]}</small></div>
      <div class="esp-ctrl-txt">
        <p class="esp-dev-tete"><b>${esc(c.matiere)}</b><span class="esp-dans">${esc(dans(c.date))}</span></p>
        <small>${c.heure ? esc(heure(c.heure)) + ' · ' : ''}${c.source === 'edt' ? 'noté dans l\'emploi du temps' : 'annoncé dans le travail à faire'}</small>
        ${complet && c.texte ? `<p class="esp-dev-corps long" onclick="this.classList.toggle('ouvert')">${texte(c.texte)}</p>` : ''}
        ${complet ? lienSite(c.matiere, 'Réviser cette matière sur le site') : ''}
      </div>
    </div>`;
  }
  function modifications(liste, a) {
    const parJour = {};
    liste.forEach(l => { (parJour[l.debut.slice(0, 10)] ||= []).push(l); });
    /* regroupé par motif : « Demain : classe absente (Français 7 h 58, Anglais 10 h 08) ; cours annulé (SVT 13 h 15) » */
    return Object.keys(parJour).sort().map(j => {
      const motifs = {};
      parJour[j].forEach(l => { (motifs[(l.statut || 'annulé').toLowerCase()] ||= []).push(`${esc(l.matiere)} ${esc(heure(l.debut))}`); });
      return `<p><b>${esc(quand(j, a).replace(/^./, c => c.toUpperCase()))}</b> : ${Object.entries(motifs).map(([m, ls]) =>
        `<span class="esp-statut">${esc(m)}</span> (${ls.join(', ')})`).join(' ; ')}</p>`;
    }).join('');
  }
  function fraicheur(d) {
    const maj = d.maj || '';
    const heures = maj ? (Date.now() - new Date(maj).getTime()) / 36e5 : 99;
    const txt = maj ? `mis à jour ${quand(maj.slice(0, 10))} à ${heure(maj)}` : '';
    return `<span class="${heures > 20 ? 'esp-vieux' : ''}">${esc(txt)}${d._horsLigne ? ' · hors ligne' : ''}</span>`;
  }
  const note20 = n => { const v = parseFloat(String(n.note).replace(',', '.')), s = parseFloat(String(n.sur).replace(',', '.')); return isFinite(v) && isFinite(s) && s > 0 ? v / s * 20 : null; };
  const nombre = v => String(Math.round(v * 10) / 10).replace('.', ',');

  /* ---------- Résumé ---------- */
  function vueResume(d) {
    const a = auj(), p = prochainJour(d, a);
    let h = '';
    const modifs = d.cours.filter(l => (l.statut || l.annule) && (l.debut.slice(0, 10) === a || l.debut.slice(0, 10) === p));
    if (modifs.length) h += `<div class="glass esp-alerte"><p class="esp-alerte-titre">Emploi du temps modifié</p>${modifications(modifs, a)}<a class="esp-lien" href="#/espace/calendrier">Voir le calendrier</a></div>`;

    const pourAuj = d.devoirs.filter(x => x.date === a && !(x.fait || faitLocal(x.cle)));
    if (pourAuj.length && new Date().getHours() < 17) {
      h += `<h2 class="section">Pour aujourd'hui</h2><div class="glass esp-liste">${pourAuj.map(x => ligneDevoir(x)).join('')}</div>`;
    }
    const aRendre = d.devoirs.filter(x => x.date === p);
    const ctrlP = d.controles.filter(c => c.date === p);
    h += `<h2 class="section">Pour ${esc(quand(p, a))} <small class="esp-date-sec">${esc(dateLongue(p))}</small></h2>`;
    h += aRendre.length || ctrlP.length
      ? `<div class="glass esp-liste">${ctrlP.map(c => ligneControle(c, true)).join('')}${aRendre.map(x => ligneDevoir(x)).join('')}</div>`
      : `<div class="glass"><p class="esp-vide">Rien à rendre pour ${esc(quand(p, a))}.</p></div>`;

    const ctrlSuite = d.controles.filter(c => c.date > p).slice(0, 3);
    if (ctrlSuite.length) {
      h += `<h2 class="section">Contrôles à venir</h2><div class="glass esp-liste">${ctrlSuite.map(c => ligneControle(c, false)).join('')}
        <a class="esp-plus" href="#/espace/controles">Tous les contrôles</a></div>`;
    }
    const suite = d.devoirs.filter(x => x.date > p);
    if (suite.length) {
      const parJour = {};
      suite.forEach(x => { (parJour[x.date] ||= []).push(x); });
      h += `<h2 class="section">Ensuite</h2>` + Object.keys(parJour).sort().map(j =>
        `<div class="glass esp-liste"><p class="esp-groupe">${esc(dateLongue(j))} <small>${esc(dans(j, a))}</small></p>${parJour[j].map(x => ligneDevoir(x)).join('')}</div>`).join('');
    }
    if (d.notes && d.notes.length) h += blocNotes(d.notes);
    if (d.infos && d.infos.length) {
      h += `<h2 class="section">Informations</h2><div class="glass esp-liste">${d.infos.slice(0, 4).map(i =>
        `<details class="esp-info"><summary><b>${esc(i.titre)}</b><small>${esc(i.date ? dateCourte(i.date) : '')}${i.auteur ? ' · ' + esc(i.auteur) : ''}</small></summary><p>${texte(i.texte)}</p></details>`).join('')}</div>`;
    }
    return h;
  }
  function blocNotes(notes) {
    const recentes = notes.slice(0, 6);
    const parMat = {};
    notes.forEach(n => { (parMat[n.matiere] ||= []).push(n); });
    const moyennes = Object.keys(parMat).sort().map(m => {
      const ns = parMat[m].map(n => [note20(n), parseFloat(String(n.coef || 1).replace(',', '.')) || 1]).filter(([v]) => v !== null);
      const c = ns.reduce((s, [, k]) => s + k, 0);
      return [m, c ? ns.reduce((s, [v, k]) => s + v * k, 0) / c : null, parMat[m]];
    });
    const ligne = n => `<div class="esp-note"><span><b>${esc(n.matiere)}</b><small>${esc(dateCourte(n.date))}${n.moyenne ? ' · moyenne de la classe ' + esc(String(n.moyenne)) : ''}${n.commentaire ? ' · ' + esc(n.commentaire) : ''}</small></span><b class="esp-val">${esc(String(n.note))}<small>/${esc(String(n.sur))}</small></b></div>`;
    return `<h2 class="section">Dernières notes</h2><div class="glass esp-liste">${recentes.map(ligne).join('')}
      <details class="esp-toutes"><summary>Toutes les notes du trimestre (${notes.length})</summary>
        ${moyennes.map(([m, moy, ns]) => `<p class="esp-groupe">${esc(m)}${moy !== null ? ` <small>moyenne indicative ${nombre(moy)}/20</small>` : ''}</p>${ns.map(ligne).join('')}`).join('')}
        <p class="esp-note-bas">Moyennes calculées ici sur 20 avec les coefficients des notes : la moyenne officielle est celle de Pronote.</p>
      </details></div>`;
  }

  /* ---------- Contrôles ---------- */
  function vueControles(d) {
    const a = auj();
    const avenir = d.controles.filter(c => c.date >= a), passes = d.controles.filter(c => c.date < a);
    let h = avenir.length
      ? `<div class="glass esp-liste">${avenir.map(c => ligneControle(c, true)).join('')}</div>`
      : `<div class="glass"><p class="esp-vide">Aucun contrôle annoncé dans Pronote pour les trois prochaines semaines.</p></div>`;
    if (passes.length) h += `<h2 class="section">Cette semaine, déjà passés</h2><div class="glass esp-liste esp-passes">${passes.map(c => ligneControle(c, false)).join('')}</div>`;
    return h + `<p class="esp-note-bas">Un contrôle est repéré quand le professeur coche « devoir surveillé » dans l'emploi du temps, ou quand le travail à faire parle de contrôle, d'évaluation, de test, de DS ou de brevet blanc. Un contrôle annoncé seulement à l'oral n'apparaît pas.</p>`;
  }

  /* ---------- Calendrier ---------- */
  function vueCalendrier(d, arg) {
    const a = auj();
    const lundis = [...new Set(d.cours.map(l => lundiDe(l.debut.slice(0, 10))))].sort();
    if (!lundis.length) return `<div class="glass"><p class="esp-vide">Pas d'emploi du temps dans Pronote pour les semaines à venir.</p></div>`;
    const defaut = [0, 6].includes(jour(a).getDay()) ? lundiDe(prochainJour(d, a)) : lundiDe(a);
    const lundi = lundis.includes(arg) ? arg : lundis.includes(defaut) ? defaut : lundis[0];
    const jours = [0, 1, 2, 3, 4].map(i => ajoute(lundi, i));
    if (!jours.includes(jourChoisi)) jourChoisi = jours.includes(a) ? a : jours.find(j => j >= a) || jours[0];
    const i = lundis.indexOf(lundi);
    const vendredi = jour(jours[4]);
    const titre = `Semaine du ${jour(lundi).getDate()}${jour(lundi).getMonth() !== vendredi.getMonth() ? ' ' + MOIS_C[jour(lundi).getMonth()] : ''} au ${vendredi.getDate()} ${MOIS_C[vendredi.getMonth()]}`;
    const fleche = (j, sens) => j ? `<a class="esp-fl" href="#/espace/calendrier/${j}" aria-label="${sens}">${sens === 'Semaine précédente' ? '‹' : '›'}</a>` : '<span class="esp-fl off">' + (sens === 'Semaine précédente' ? '‹' : '›') + '</span>';
    let h = `<div class="esp-sem">${fleche(lundis[i - 1], 'Semaine précédente')}<b>${titre}</b>${fleche(lundis[i + 1], 'Semaine suivante')}</div>`;
    h += `<div class="esp-jours" role="tablist">${jours.map(j => {
      const dj = jour(j), ds = d.controles.some(c => c.date === j), nb = d.devoirs.filter(x => x.date === j).length;
      return `<button role="tab" class="${j === jourChoisi ? 'on' : ''}${j === a ? ' auj' : ''}" data-j="${j}" onclick="Espace.jour('${j}')" aria-selected="${j === jourChoisi}">
        <small>${JOURS[dj.getDay()].slice(0, 3)}.</small><b>${dj.getDate()}</b><i>${ds ? '<em class="ds"></em>' : ''}${nb ? '<em></em>' : ''}</i></button>`;
    }).join('')}</div>`;
    h += `<div class="esp-grille" id="esp-grille">${jours.map(j => {
      const cours = d.cours.filter(l => l.debut.slice(0, 10) === j);
      const devs = d.devoirs.filter(x => x.date === j);
      return `<section class="esp-jourcol${j === jourChoisi ? ' on' : ''}${j === a ? ' auj' : ''}" data-j="${j}">
        <h3>${esc(dateLongue(j).replace(/^./, c => c.toUpperCase()))}</h3>
        ${cours.length ? cours.map(l => `<div class="esp-cours${l.annule ? ' annule' : ''}" style="--c:${couleur(l)}">
            <span class="esp-h">${esc(heure(l.debut))}<small>${esc(heure(l.fin))}</small></span>
            <span class="esp-m"><b>${esc(l.matiere)}</b><small>${[l.salle, l.prof].filter(Boolean).map(esc).join(' · ')}</small>
              ${l.statut ? `<span class="esp-badge ${l.annule ? 'rouge' : 'orange'}">${esc(l.statut)}</span>` : ''}${l.controle ? '<span class="esp-badge ds">Contrôle</span>' : ''}</span>
          </div>`).join('') : '<p class="esp-vide petit">Pas de cours dans Pronote.</p>'}
        ${devs.length ? `<p class="esp-groupe">À rendre ce jour</p>${devs.map(x => ligneDevoir(x)).join('')}` : ''}
      </section>`;
    }).join('')}</div>`;
    return h;
  }
  function choisirJour(j) {
    jourChoisi = j;
    document.querySelectorAll('.esp-jours button').forEach(b => { b.classList.toggle('on', b.dataset.j === j); b.setAttribute('aria-selected', b.dataset.j === j); });
    document.querySelectorAll('.esp-jourcol').forEach(s => s.classList.toggle('on', s.dataset.j === j));
  }
  /* glisser le doigt sur la journée : jour précédent / suivant (et semaine voisine au bord) */
  function brancherGlisser() {
    const g = document.getElementById('esp-grille');
    if (!g) return;
    let x0 = null, y0 = 0;
    g.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    g.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      const boutons = [...document.querySelectorAll('.esp-jours button')];
      const k = boutons.findIndex(b => b.dataset.j === jourChoisi) + (dx < 0 ? 1 : -1);
      if (k >= 0 && k < boutons.length) return choisirJour(boutons[k].dataset.j);
      const fl = document.querySelectorAll('.esp-sem a.esp-fl');
      const cible = [...fl].find(f => f.getAttribute('aria-label') === (dx < 0 ? 'Semaine suivante' : 'Semaine précédente'));
      if (cible) { jourChoisi = dx < 0 ? cible.getAttribute('href').split('/').pop() : ajoute(cible.getAttribute('href').split('/').pop(), 4); location.hash = cible.getAttribute('href'); }
    });
  }

  /* ---------- Réglages et notifications ---------- */
  const estIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const installe = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const pushPossible = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  const notifOn = () => local.get('notif', false) && pushPossible() && Notification.permission === 'granted';
  const reglages = () => ({ ...DEFAUT, ...local.get('reglages', {}) });
  function nomAppareil() {
    const u = navigator.userAgent;
    return /iPhone/.test(u) ? 'iPhone' : /iPad/.test(u) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ? 'iPad'
      : /Android/.test(u) ? 'Android' : /Mac/.test(u) ? 'Mac' : 'Ordinateur';
  }
  function vueReglages(d) {
    let etat = '';
    if (!pushPossible() && estIOS() && !installe()) {
      etat = `<div class="esp-install"><b>Pour recevoir les notifications sur iPhone ou iPad :</b>
        <ol><li>dans Safari, touche le bouton <b>Partager</b> (le carré avec une flèche) ;</li>
        <li>choisis <b>Sur l'écran d'accueil</b> ;</li><li>ouvre le site depuis la nouvelle icône, puis reviens ici.</li></ol>
        <small>Il faut iOS 16.4 ou plus récent.</small></div>`;
    } else if (!pushPossible()) {
      etat = `<p class="esp-vide petit">Ce navigateur ne permet pas les notifications.</p>`;
    } else if (Notification.permission === 'denied') {
      etat = `<p class="esp-alerte-txt">Les notifications sont bloquées pour ce site. Sur iPhone : Réglages → Notifications → QG 3ᵉ → Autoriser.</p>`;
    }
    const on = notifOn(), r = reglages();
    const possible = pushPossible() && Notification.permission !== 'denied';
    return `<div class="glass esp-reg">
      <p class="esp-reg-titre">Notifications sur cet appareil</p>
      ${etat}
      <div class="esp-ligne"><span><b>Notifications</b><small>${on ? 'Activées sur cet appareil' : 'Désactivées sur cet appareil'}</small></span>
        <button type="button" id="esp-notif" class="rg-switch${on ? ' on' : ''}" role="switch" aria-checked="${on}" aria-label="Notifications"${possible ? '' : ' disabled'} onclick="Espace.basculerNotif()"><i></i></button></div>
      <div class="esp-types${on ? '' : ' off'}">${TYPES.map(([id, nom, aide]) => `<div class="esp-ligne"><span><b>${nom}</b><small>${aide}</small></span>
        <button type="button" class="rg-switch${r[id] ? ' on' : ''}" role="switch" aria-checked="${r[id]}" aria-label="${nom}"${on ? '' : ' disabled'} onclick="Espace.basculerType('${id}')"><i></i></button></div>`).join('')}</div>
      <p class="esp-note-bas">Pronote est lu deux fois par jour : vers 6 h 30 (cours annulés du jour, nouveaux devoirs) et vers 17 h 45 (rappels, nouveaux devoirs, résumé du soir). Chaque appareil garde ses propres réglages.</p>
      <p class="esp-msg" id="esp-msg" role="status"></p>
      ${on ? '<button class="btn quiet" onclick="Espace.testerNotif()">Tester l\'affichage d\'une notification</button>' : ''}
    </div>
    <div class="glass esp-reg">
      <p class="esp-reg-titre">Données</p>
      <p class="esp-reg-txt">Lues dans Pronote (${esc(d.eleve.etablissement || 'établissement')}), ${fraicheur(d)}. Elles sont chiffrées : sans le mot de passe de l'espace, personne ne peut les lire.</p>
      <button class="btn quiet" onclick="Espace.actualiser()">Recharger les données</button>
      <button class="btn ghost" onclick="Espace.verrouiller()">Verrouiller l'espace sur cet appareil</button>
    </div>`;
  }
  function message(t) { const m = document.getElementById('esp-msg'); if (m) m.textContent = t; }
  const cleVapid = () => { const b = atob(VAPID.replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(b, c => c.charCodeAt(0)); };
  async function envoyerAbonnement(sub, methode = 'POST') {
    const r = await fetch(API + '/abonnement', {
      method: methode, headers: { 'Content-Type': 'application/json', 'X-Espace': jeton },
      body: JSON.stringify({ abonnement: sub.toJSON ? sub.toJSON() : sub, reglages: reglages(), appareil: nomAppareil() })
    });
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).erreur || 'relais ' + r.status);
  }
  async function basculerNotif() {
    try {
      if (!notifOn()) {
        const permission = await Notification.requestPermission();      // doit venir directement du toucher
        if (permission !== 'granted') { message('Notifications refusées. Tu peux les autoriser dans les réglages de l\'iPhone.'); return; }
        message('Activation…');
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription() || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: cleVapid() });
        await envoyerAbonnement(sub);
        local.set('notif', true);
      } else {
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        if (sub) { await envoyerAbonnement(sub, 'DELETE').catch(() => {}); await sub.unsubscribe(); }
        local.set('notif', false);
      }
      repeindre();
    } catch (e) { message('Impossible : ' + e.message); }
  }
  async function basculerType(id) {
    const r = reglages();
    r[id] = !r[id];
    local.set('reglages', r);
    repeindre();
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) await envoyerAbonnement(sub);
      message('Réglage enregistré.');
    } catch (e) { message('Réglage gardé sur l\'appareil, mais pas encore envoyé : ' + e.message); }
  }
  async function testerNotif() {
    const reg = await navigator.serviceWorker.ready;
    reg.showNotification('Espace', { body: 'Les notifications s\'affichent bien sur cet appareil.', icon: 'icon-192.png', tag: 'test' });
  }
  /* au retour dans Réglages : l'abonnement existe-t-il vraiment ? */
  async function verifierAbonnement() {
    if (!pushPossible() || !local.get('notif', false)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (!sub || Notification.permission !== 'granted') { local.set('notif', false); repeindre(); }
    } catch { /* ignoré */ }
  }

  /* ---------- écran verrouillé ---------- */
  function vueVerrou(motif) {
    const txt = motif === 'cle' ? 'Le mot de passe de l\'espace a changé : entre le nouveau.' : '';
    return `<h1 class="title">Espace</h1>
      <p class="subtitle">Travail à faire, contrôles et emploi du temps, lus dans Pronote.</p>
      <div class="glass esp-verrou">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2.6"/><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7"/></svg>
        <p class="esp-verrou-titre">Espace protégé</p>
        <form onsubmit="Espace.deverrouiller(event)" autocomplete="on">
          <input type="text" name="username" value="espace" autocomplete="username" hidden>
          <input type="password" id="esp-mdp" name="password" autocomplete="current-password" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Mot de passe de l'espace" required aria-label="Mot de passe de l'espace">
          <label class="esp-souvenir"><input type="checkbox" id="esp-souv" checked> Se souvenir sur cet appareil</label>
          <button class="btn" type="submit" id="esp-ok">Ouvrir</button>
          <p class="esp-err" id="esp-err" role="alert">${esc(txt)}</p>
        </form>
      </div>`;
  }
  async function deverrouiller(ev) {
    ev.preventDefault();
    const champ = document.getElementById('esp-mdp'), err = document.getElementById('esp-err'), bouton = document.getElementById('esp-ok');
    const phrase = champ.value.trim().toLowerCase();
    if (!phrase) return;
    bouton.disabled = true; err.textContent = 'Vérification…';
    try {
      const { k, j } = await deriver(phrase);
      let boite = null;
      try { boite = await telecharger(); } catch { boite = await lire('boite'); }
      if (!boite) { err.textContent = 'Impossible de vérifier : pas de connexion, ou pas encore de données.'; return; }
      try { donnees = await ouvrir(boite, k); } catch { err.textContent = 'Mot de passe incorrect.'; champ.select(); return; }
      cle = k; jeton = j; dernierAppel = Date.now();
      ecrire('boite', boite);
      if (document.getElementById('esp-souv').checked) await ecrire('cle', { k, j });   // clé non extractible : utilisable, jamais lisible
      repeindre();
    } catch (e) {
      err.textContent = 'Erreur : ' + e.message;
    } finally { bouton.disabled = false; }
  }
  async function verrouiller() {
    cle = jeton = donnees = null;
    await effacer('cle'); await effacer('boite');
    if (location.hash !== '#/espace') location.hash = '#/espace'; else repeindre();
  }

  /* ---------- branchement sur le routeur du site ---------- */
  let routeActuelle = [];
  function contenu(parts) {
    const onglet = ONGLETS.some(([id]) => id === parts[1]) ? parts[1] : 'resume';
    const d = donnees;
    const nav = `<nav class="esp-seg" aria-label="Espace">${ONGLETS.map(([id, nom]) =>
      `<a href="#/espace${id === 'resume' ? '' : '/' + id}"${id === onglet ? ' class="on" aria-current="page"' : ''}>${nom}</a>`).join('')}</nav>`;
    const corps = onglet === 'controles' ? vueControles(d) : onglet === 'calendrier' ? vueCalendrier(d, parts[2]) : onglet === 'reglages' ? vueReglages(d) : vueResume(d);
    return `<h1 class="title">Espace ${elision(d.eleve && d.eleve.prenom)}</h1>
      <p class="subtitle">${esc((d.eleve && d.eleve.classe) || '')} · ${fraicheur(d)}</p>${nav}${corps}`;
  }
  function repeindre(etat) {
    const z = document.getElementById('esp');
    if (!z) return;
    z.innerHTML = donnees ? contenu(routeActuelle)
      : etat === 'vide' ? `<h1 class="title">Espace</h1><div class="glass"><p class="esp-vide">Pas encore de données : elles arrivent au prochain passage (vers 6 h 30 ou 17 h 45).</p></div>`
      : etat === 'horsligne' ? `<h1 class="title">Espace</h1><div class="glass"><p class="esp-vide">Pas de connexion. Réessaie dans un moment.<br><button class="btn quiet" onclick="Espace.actualiser()">Réessayer</button></p></div>`
      : vueVerrou(etat);
    brancher();
  }
  function brancher() {
    if (routeActuelle[1] === 'calendrier') brancherGlisser();
    if (routeActuelle[1] === 'reglages') verifierAbonnement();
    const champ = document.getElementById('esp-mdp');
    if (champ && window.matchMedia('(min-width: 900px)').matches) champ.focus();
  }
  function vue(parts) {
    routeActuelle = parts;
    return `<div id="esp" class="esp">${donnees ? contenu(parts) : '<h1 class="title">Espace</h1><div class="glass"><p class="esp-vide">Chargement…</p></div>'}</div>`;
  }
  function apres(parts) {
    routeActuelle = parts;
    if (donnees) {
      brancher();
      if (Date.now() - dernierAppel > 5 * 60e3) {         // données de plus de 5 minutes : on regarde s'il y a du neuf
        const avant = donnees.maj;
        charger().then(e => { if (e === 'ok' && donnees.maj !== avant) repeindre(); });
      }
      return;
    }
    charger().then(repeindre);
  }
  async function actualiser() { dernierAppel = 0; const e = await charger(); repeindre(e); }
  function cocher(c, bouton) {
    const v = !faitLocal(c);
    local.set('fait:' + c, v);
    bouton.closest('.esp-dev').classList.toggle('fait', v);
    bouton.setAttribute('aria-pressed', v);
  }

  return { vue, apres, deverrouiller, verrouiller, actualiser, cocher, jour: choisirJour, basculerNotif, basculerType, testerNotif };
})();
