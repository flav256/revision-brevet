/* =========================================================
   révision brevet — logique de l'application

   Version alternative du site « llm révision » (llmrevision.com) :
   même moteur et même style, avec en plus
   - des zones thématiques dans chaque matière,
   - les fiches méthode (rédaction, analyse de documents…),
   - le programme de révision du brevet blanc : sessions
     (l'essentiel, QCM, exercices, corrigé) reliées au cours.

   Rien à modifier ici : le contenu est dans data.js, cours/
   et brevet/brevet.js.
   ========================================================= */

const app = document.getElementById('app');
const NOM = 'révision brevet';
const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août',
              'septembre','octobre','novembre','décembre'];
const JOURS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

/* on coupe toutes les animations si le téléphone est réglé sur « animations réduites » */
const SOBRE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- utilitaires ---------- */
const esc = s => String(s).replace(/[&<>"']/g,
  c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const matiere = id => DATA.matieres.find(m => m.id === id) || { nom: id, couleur: '#8A93A3' };
const chapitre = id => DATA.chapitres.find(c => c.id === id);
const today = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };
function parseDate(txt) {
  const [y, m, d] = String(txt).split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return isNaN(dt.getTime()) ? null : dt;   // date invalide : on renvoie null
}
const joursRestants = s => { const d = parseDate(s); return d ? Math.round((d - today()) / 86400000) : NaN; };
const dateLongue = d => `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`;
const iso = (y, m, d) => `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
const pastille = m => `background:linear-gradient(160deg,${m.couleur},${m.couleur}cc)`;

const chevron = '<svg class="chev" viewBox="0 0 8 13" fill="none"><path d="M1.5 1.5 6.5 6.5 1.5 11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function evalsAvenir() {
  return (DATA.evaluations || [])
    .filter(e => e && e.date && joursRestants(e.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/* La date est toujours affichée. Le « dans X jours » n'apparaît
   que si l'évaluation est dans moins de 8 jours. */
const PROCHE = 7;
function texteQuand(e) {
  const d = parseDate(e.date);
  if (!d) return '';
  const n = joursRestants(e.date);
  let s = dateLongue(d);
  if (n >= 0 && n <= PROCHE) {
    s += ' · ' + (n === 0 ? "c'est aujourd'hui" : n === 1 ? "c'est demain" : `dans ${n} jours`);
  }
  return s;
}
function badge(e) {
  const n = joursRestants(e.date);
  if (!isFinite(n) || n < 0 || n > PROCHE) return '';
  const b = n === 0 ? 'Auj.' : String(n);
  const s = n === 0 ? 'le jour J' : n === 1 ? 'jour' : 'jours';
  return `<span class="count"><b>${b}</b><small>${s}</small></span>`;
}
function chapitresEval(e) {
  return (e.chapitres || []).map(chapitre).filter(Boolean);
}

/* la ligne qui annonce le chapitre à réviser, affichée sur chaque évaluation */
function ligneChapitreEval(e) {
  const chs = chapitresEval(e);
  if (!chs.length) return '';
  return `<p class="chapline">` + chs.map(c =>
    `${c.numero ? esc(c.numero) + ' · ' : ''}${esc(c.titre)}`).join('<br>') + `</p>`;
}

function lienEval(e) {
  const c = chapitresEval(e)[0];
  return c ? `#/chapitre/${c.id}` : '#/calendrier';
}

/* ---------- fil d'Ariane (affiché sur ordinateur seulement) ---------- */
function fil(etapes) {
  return `<nav class="fil">` + etapes.map(([texte, lien], i) =>
    (i ? '<span>/</span>' : '') +
    (lien ? `<a href="${lien}">${esc(texte)}</a>` : `<b>${esc(texte)}</b>`)
  ).join('') + `</nav>`;
}

/* ---------- avertissement ---------- */
const AVIS = "Version brevet blanc du site llm révision. Pour les élèves, par les élèves. Non affilié au LLM.";
const avisBas = () => `<p class="avis avis-bas">${esc(AVIS)}<br>
  Site d'origine : <a href="https://llmrevision.com/" rel="noopener">llmrevision.com</a></p>`;

/* ---------- scores et sessions faites, enregistrés sur l'appareil ---------- */
const Score = {
  lire(id) {
    try {
      const v = JSON.parse(localStorage.getItem('score:' + id));
      if (!v || typeof v.pct !== 'number' || v.pct < 0 || v.pct > 100) return null;
      return v;
    } catch { return null; }
  },
  ecrire(id, pct) {
    try {
      const old = Score.lire(id);
      if (!old || pct > old.pct) localStorage.setItem('score:' + id, JSON.stringify({ pct, date: Date.now() }));
    } catch { /* mode privé ou stockage plein : on ignore */ }
  },
  effacer(id) { try { localStorage.removeItem('score:' + id); } catch { /* ignoré */ } }
};
const Fait = {
  lire(id) { try { return localStorage.getItem('fait:' + id) === '1'; } catch { return false; } },
  basculer(id) {
    try {
      if (Fait.lire(id)) localStorage.removeItem('fait:' + id);
      else localStorage.setItem('fait:' + id, '1');
    } catch { /* ignoré */ }
  }
};

/* ---------- brevet blanc : sessions et liens avec le cours ---------- */
const BREVET = DATA.brevet || { sessions: [], methodes: [], epreuves: [], mode: [] };
const session = id => BREVET.sessions.find(s => s.id === id);
const sessionsDe = cid => BREVET.sessions.filter(s =>
  (s.cours || []).includes(cid) || (s.methodes || []).includes(cid));
const minutes = txt => {
  const h = /(\d+)\s*h\s*(\d*)/.exec(txt);
  return h ? Number(h[1]) * 60 + Number(h[2] || 0) : parseInt(txt, 10) || 0;
};
const duree = n => n >= 60 ? `${Math.floor(n / 60)} h ${String(n % 60).padStart(2, '0')}` : `${n} min`;
const LETTRES = 'abcd';

/* =========================================================
   MOTEUR DE TRANSITION
   dir : 1 on entre plus profond, -1 on revient, 0 on change d'onglet
   ========================================================= */
let noPeinture = 0;
function peindre(html, dir, apres, estAccueil) {
  const mien = ++noPeinture;          // si une autre peinture démarre, celle-ci s'annule
  const actuel = app.firstElementChild;
  const complet = html + avisBas();
  const poser = () => {
    if (mien !== noPeinture) return;
    const cls = dir > 0 ? 'in-r' : dir < 0 ? 'in-l' : 'in-f';
    app.innerHTML = `<div class="view ${SOBRE ? '' : cls}">${complet}</div>`;
    window.scrollTo(0, 0);
    if (apres) requestAnimationFrame(apres);
  };
  if (SOBRE || !actuel || actuel.classList.contains('seed')) { poser(); return; }
  actuel.classList.remove('in-r', 'in-l', 'in-f');
  actuel.classList.add(dir > 0 ? 'out-l' : dir < 0 ? 'out-r' : 'out-f');
  setTimeout(poser, 145);
}

/* =========================================================
   ACCUEIL
   ========================================================= */
function carteBrevet() {
  const S = BREVET.sessions;
  if (!S.length) return '';
  const faites = S.filter(s => Fait.lire(s.id)).length;
  const auj = iso(today().getFullYear(), today().getMonth(), today().getDate());
  const duJour = S.filter(s => s.date === auj);
  const pct = Math.round(faites / S.length * 100);
  return `
    <a class="glass hero" href="#/brevet">
      <span class="flag"><i class="dot" style="background:var(--indigo)"></i>Programme de révision</span>
      <h3>${esc(BREVET.titre)}</h3>
      <p class="chapline">${esc(BREVET.sousTitre)}</p>
      <div class="prog"><i style="width:${pct}%"></i></div>
      <p class="when">${faites} session${faites > 1 ? 's' : ''} faite${faites > 1 ? 's' : ''} sur ${S.length}${duJour.length
        ? ` · aujourd'hui : ${duJour.map(s => esc(matiere(s.matiere).nom)).join(', ')}` : ''}</p>
    </a>`;
}

function vueAccueil() {
  const prochaines = evalsAvenir();
  let html = `<h1 class="title">Révisions</h1>
              <p class="subtitle">${dateLongue(today())}</p>`;

  html += carteBrevet();

  if (prochaines.length) {
    const e = prochaines[0];
    const m = matiere(e.matiere);
    html += `<h2 class="section">Prochaine éval</h2>
      <a class="glass hero${badge(e) ? ' withbadge' : ''}" href="${lienEval(e)}">
        ${badge(e)}
        <span class="flag"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)}</span>
        <h3>${esc(e.titre)}</h3>
        ${ligneChapitreEval(e)}
        <p class="when">${esc(texteQuand(e))}</p>
        ${e.info ? `<p class="when" style="color:var(--ink-3);font-size:14px">${esc(e.info)}</p>` : ''}
      </a>`;
  }

  html += `<h2 class="section">Matières · zones thématiques</h2><div class="glass list">`;
  const actives = DATA.matieres.filter(m => DATA.chapitres.some(c => c.matiere === m.id));
  const vides = DATA.matieres.filter(m => !DATA.chapitres.some(c => c.matiere === m.id));
  html += [...actives, ...vides].map(m => {
    const tout = DATA.chapitres.filter(c => c.matiere === m.id);
    const n = tout.filter(c => !c.fiche).length;
    const f = tout.length - n;
    const detail = !tout.length ? 'bientôt disponible'
      : [n ? n + (n > 1 ? ' chapitres' : ' chapitre') : '', f ? f + (f > 1 ? ' méthodes' : ' méthode') : '']
          .filter(Boolean).join(' · ');
    return `<button class="row" onclick="go('#/matiere/${m.id}')">
      <span class="pill" style="${pastille(m)}">${esc(m.nom[0])}</span>
      <span class="txt"><b>${esc(m.nom)}</b><small>${detail}</small></span>
      ${chevron}</button>`;
  }).join('');
  html += `</div>`;

  const nbM = DATA.chapitres.filter(c => c.fiche).length;
  if (nbM) {
    html += `<h2 class="section">Savoir-faire</h2><div class="glass list">
      <button class="row" onclick="go('#/methodes')">
        <span class="pill" style="background:linear-gradient(160deg,var(--indigo),#7d7bf0)">✎</span>
        <span class="txt"><b>Les méthodes</b><small>${nbM} fiche${nbM > 1 ? 's' : ''} : rédaction, analyse de documents, démonstration…</small></span>
        ${chevron}</button></div>`;
  }
  return html;
}

function ligneChapitre(c) {
  const m = matiere(c.matiere);
  const s = Score.lire(c.id);
  const pill = c.fiche ? '✎' : (String(c.numero || '').replace(/\D/g, '') || '•');
  return `<button class="row" onclick="go('#/chapitre/${c.id}')">
    <span class="pill" style="${pastille(m)}">${esc(pill)}</span>
    <span class="txt"><b>${esc(c.titre)}</b><small>${[c.fiche ? esc(m.nom) : (c.periode ? esc(c.periode) : ''), s ? 'record ' + s.pct + '%' : ''].filter(Boolean).join(' · ')}</small></span>
    ${chevron}</button>`;
}

/* une ligne de session, version courte (pages chapitre, matière, calendrier) */
function ligneSessionCourte(s, etiquette) {
  const m = matiere(s.matiere);
  const fait = Fait.lire(s.id);
  return `<button class="row" onclick="go('#/session/${s.id}')">
    <span class="pill" style="${pastille(m)}">${fait ? '✓' : esc(m.nom[0])}</span>
    <span class="txt"><b>${esc(s.titre)}</b><small>${esc(etiquette || s.jour)} · ${esc(s.duree)}${fait ? ' · faite' : ''}</small></span>
    ${chevron}</button>`;
}

/* =========================================================
   MATIÈRE — les chapitres rangés par zone thématique
   ========================================================= */
function zonesDe(id) {
  const chs = DATA.chapitres.filter(c => c.matiere === id && !c.fiche);
  const ordre = (DATA.zones && DATA.zones[id]) || [];
  const noms = [...new Set([...ordre, ...chs.map(c => c.zone || 'Chapitres')])];
  return noms.map(z => [z, chs.filter(c => (c.zone || 'Chapitres') === z)]).filter(([, l]) => l.length);
}

function vueMatiere(id) {
  const m = matiere(id);
  const tout = DATA.chapitres.filter(c => c.matiere === id);
  const chs = tout.filter(c => !c.fiche);
  const fiches = tout.filter(c => c.fiche);
  const sess = BREVET.sessions.filter(s => s.matiere === id);

  let html = fil([['Accueil', '#/'], [m.nom, null]])
           + `<h1 class="title">${esc(m.nom)}</h1>
              <p class="subtitle">${[chs.length ? chs.length + (chs.length > 1 ? ' chapitres' : ' chapitre') : '',
                                     fiches.length ? fiches.length + (fiches.length > 1 ? ' méthodes' : ' méthode') : '']
                                     .filter(Boolean).join(' · ')}</p>`;

  if (chs.length) {
    html += zonesDe(id).map(([z, l]) =>
      `<h2 class="section">${esc(z)}</h2><div class="glass list">${l.map(ligneChapitre).join('')}</div>`).join('');
  } else if (!fiches.length) {
    html += `<div class="glass"><p class="empty">Les chapitres de cette matière ne sont pas encore en ligne.<br>Reviens bientôt.</p></div>`;
  }

  if (fiches.length) {
    html += `<h2 class="section">Méthodes</h2>
             <p class="subtitle" style="margin:-4px 0 10px 4px">Les savoir-faire des épreuves : à relire avant de s'entraîner.</p>
             <div class="glass list">${fiches.map(ligneChapitre).join('')}</div>`;
  }

  if (sess.length) {
    html += `<h2 class="section">Sessions du brevet blanc</h2>
             <div class="glass list">${sess.map(s => ligneSessionCourte(s)).join('')}</div>`;
  }
  return html;
}

/* =========================================================
   CHAPITRE (et fiche méthode)
   ========================================================= */
function sectionCours(sec) {
  const liste = sec.etapes
    ? `<ol class="etapes">${sec.points.map(p => `<li>${p}</li>`).join('')}</ol>`
    : `<ul>${sec.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  return `<div class="glass card"><h3>${esc(sec.titre)}</h3>${liste}${sec.exemple
    ? `<div class="exemple"><span>Exemple rédigé</span>${sec.exemple}</div>` : ''}</div>`;
}

function vueChapitre(id) {
  const c = chapitre(id);
  if (!c) return `<div class="glass"><p class="empty">Ce chapitre n'existe pas ou n'est plus disponible.<br>
    <a href="#/" style="color:var(--blue)">Retour à l'accueil</a></p></div>`;
  const m = matiere(c.matiere);
  const s = Score.lire(c.id);
  const aQuiz = c.quiz && c.quiz.length;

  let html = fil([['Accueil', '#/'], [m.nom, '#/matiere/' + m.id], [c.fiche ? 'Méthode' : c.numero, null]])
    + `<span class="flag chapflag" style="margin:12px 0 0"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)} · ${esc(c.numero)}${c.zone && !c.fiche ? ' · ' + esc(c.zone) : ''}</span>
    <h1 class="title">${esc(c.titre)}</h1>
    <p class="subtitle">${esc(c.periode || '')}${c.theme ? ' · ' + esc(c.theme) : ''}</p>`;
  if (c.ajout) html += `<p class="note-ajout">${c.fiche ? 'Fiche' : 'Chapitre'} ajouté d'après le programme de 3<sup>e</sup>. Si le cahier emploie d'autres mots ou d'autres exemples, garder ceux du cahier.</p>`;

  html += `<div class="chap"><div class="chap-main">`;

  if (c.essentiel && c.essentiel.length) {
    html += `<div class="glass card keycard"><h3>${c.fiche ? 'Les réflexes' : `L'essentiel en ${c.essentiel.length} points`}</h3><ul>`
          + c.essentiel.map(p => `<li>${p}</li>`).join('') + `</ul></div>`;
  }

  html += `<div class="actions">
             ${aQuiz ? `<button class="btn" onclick="go('#/quiz/${c.id}')">${c.fiche ? "S'entraîner" : 'Faire les exercices'}</button>` : ''}
             <button class="btn quiet" onclick="versLeCours()">${c.fiche ? 'Lire la méthode en entier' : 'Lire le cours en entier'}</button>
           </div>`;
  if (s) html += `<p class="record">Ton record sur ce ${c.fiche ? 'quiz' : 'chapitre'} : ${s.pct}%
    <button class="lienclair" onclick="effacerRecord('${c.id}')">réinitialiser</button></p>`;

  html += `<h2 class="section" id="cours">${c.fiche ? 'La méthode' : 'Le cours'}</h2>`;
  html += (c.sections || []).map(sectionCours).join('');

  html += `</div><aside class="chap-side">`;

  const sess = sessionsDe(c.id);
  if (sess.length) {
    html += `<h2 class="section">Réviser pour le brevet blanc</h2><div class="glass list sidelist">`
          + sess.map(x => ligneSessionCourte(x)).join('') + `</div>`;
  }

  /* les méthodes utiles depuis un chapitre, les chapitres où appliquer depuis une méthode */
  const liees = [...new Set(sess.flatMap(x => c.fiche ? (x.cours || []) : (x.methodes || [])))]
    .filter(i => i !== c.id).map(chapitre).filter(Boolean);
  const autres = liees.length ? liees
    : DATA.chapitres.filter(x => x.matiere === c.matiere && x.id !== c.id && !!x.fiche !== !!c.fiche);
  if (autres.length) {
    html += `<h2 class="section">${c.fiche ? "Chapitres où l'appliquer" : 'Méthodes utiles'}</h2><div class="glass list sidelist">`
          + autres.map(ligneChapitre).join('') + `</div>`;
  }

  if (c.dates && c.dates.length) {
    html += `<h2 class="section">Les dates à connaître</h2><dl class="glass dates">`
          + c.dates.map(([d, t]) => `<div><dt>${esc(d)}</dt><dd>${esc(t)}</dd></div>`).join('')
          + `</dl>`;
  }

  if (c.mots && c.mots.length) {
    html += `<h2 class="section">Le vocabulaire</h2><div class="glass list vocab">`
          + c.mots.map(([mot, def]) => `
              <div class="word">
                <button class="wsum" onclick="ouvrirMot(this)">${esc(mot)}</button>
                <div class="wbody"><div class="winner"><p>${esc(def)}</p></div></div>
              </div>`).join('')
          + `</div>`;
  }

  html += `</aside></div>`;
  return html;
}

function effacerRecord(id) {
  Score.effacer(id);
  rendre();                 // on réaffiche la page sans le record
}

function ouvrirMot(btn) { btn.parentElement.classList.toggle('open'); }
function versLeCours() {
  const t = document.getElementById('cours');
  if (t) t.scrollIntoView({ behavior: SOBRE ? 'auto' : 'smooth', block: 'start' });
}

/* =========================================================
   QUIZ
   ========================================================= */
const NB_QUESTIONS = 20;
const Quiz = { ch: null, qs: [], i: 0, bonnes: 0, repondu: false, copie: [], barre: 0 };

function melange(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const prepare = q => ({ q: q.q, why: q.why, choix: melange(q.choix.map((texte, i) => ({ texte, ok: i === q.bonne }))) });

function lancerQuiz(id) {
  const c = chapitre(id);
  if (!c || !c.quiz || !c.quiz.length) return false;
  const liste = melange(c.quiz).slice(0, Math.min(NB_QUESTIONS, c.quiz.length));
  Quiz.ch = c; Quiz.qs = liste.map(prepare);
  Quiz.i = 0; Quiz.bonnes = 0; Quiz.repondu = false; Quiz.copie = []; Quiz.barre = 0;
  return true;
}

function filQuiz() {
  if (!Quiz.ch) return '';
  const m = matiere(Quiz.ch.matiere);
  return fil([['Accueil', '#/'], [m.nom, '#/matiere/' + m.id],
              [Quiz.ch.numero, '#/chapitre/' + Quiz.ch.id], ['Exercices', null]]);
}

function vueQuiz() {
  const q = Quiz.qs[Quiz.i];
  if (!q) return vueResultat();
  return filQuiz() + `
    <div class="qmeta"><span>Question ${Quiz.i + 1} sur ${Quiz.qs.length}</span><span>${Quiz.bonnes} bonne${Quiz.bonnes > 1 ? 's' : ''}</span></div>
    <div class="qbar"><i id="jauge" style="width:${Quiz.barre}%"></i></div>
    <p class="qtext">${esc(q.q)}</p>
    <div id="opts">${q.choix.map((ch, i) =>
      `<button class="opt" onclick="repondre(${i})"><span class="mark">✓</span><span>${esc(ch.texte)}</span></button>`).join('')}</div>
    <div id="apres" role="status" aria-live="polite"></div>
    ${Quiz.ch && Quiz.ch.matiere === 'maths' ? `
      <button class="btn quiet" id="calcbtn" style="margin-top:18px" onclick="calcBascule()">${Calc.ouverte ? 'Masquer la calculatrice' : 'Calculatrice'}</button>
      <div id="calczone">${Calc.ouverte ? calcHTML() : ''}</div>` : ''}`;
}

/* la jauge part de la position précédente puis glisse : le mouvement se voit */
function animerJauge() {
  const cible = (Quiz.i / Quiz.qs.length) * 100;
  const j = document.getElementById('jauge');
  if (j) requestAnimationFrame(() => { j.style.width = cible + '%'; });
  Quiz.barre = cible;
}

function repondre(i) {
  if (Quiz.repondu) return;
  Quiz.repondu = true;
  const q = Quiz.qs[Quiz.i];
  const juste = q.choix[i].ok;
  if (juste) Quiz.bonnes++;
  Quiz.copie.push({
    question: q.q,
    choisie: q.choix[i].texte,
    bonne: (q.choix.find(c => c.ok) || {}).texte || '',
    explication: q.why || '',
    juste
  });

  document.querySelectorAll('#opts .opt').forEach((b, k) => {
    b.disabled = true;
    if (q.choix[k].ok) b.classList.add('good');
    else if (k === i) b.classList.add('bad');
    else b.classList.add('dim');
  });

  const dernier = Quiz.i === Quiz.qs.length - 1;
  const zone = document.getElementById('apres');
  zone.innerHTML =
    `<div class="why"><b>${juste ? 'Bonne réponse.' : 'Raté.'}</b> ${esc(q.why || '')}</div>
     <button class="btn" onclick="suivante()">${dernier ? 'Voir mon score' : 'Question suivante'}</button>`;
  setTimeout(() => zone.scrollIntoView({ behavior: SOBRE ? 'auto' : 'smooth', block: 'nearest' }), 120);
}

function suivante() {
  Quiz.i++; Quiz.repondu = false;
  const fini = Quiz.i >= Quiz.qs.length;
  peindre(vueQuiz(), 1, fini ? animerScore : animerJauge);
}

function vueResultat() {
  const total = Quiz.qs.length;
  const pct = Math.round((Quiz.bonnes / total) * 100);
  Score.ecrire(Quiz.ch.id, pct);
  const mot = pct === 100 ? 'Sans faute. Tu peux y aller tranquille.'
            : pct >= 80 ? 'Solide. Relis juste les points ratés.'
            : pct >= 50 ? 'Pas mal, mais il reste des trous. Relis le cours puis recommence.'
            : 'Relis le cours avant de refaire le quiz, ça ira beaucoup mieux.';
  let html = filQuiz() + `<div class="glass score">
      <div class="ring"><span id="compteur">${SOBRE ? Quiz.bonnes : 0}</span><small> / ${total}</small></div>
      <p>${pct}% — ${mot}</p>
      <div class="actions" style="justify-content:center">
        <button class="btn" onclick="go('#/quiz/${Quiz.ch.id}')">Refaire un quiz</button>
        <button class="btn ghost" onclick="go('#/chapitre/${Quiz.ch.id}')">Retourner au cours</button>
      </div>
    </div>`;

  html += `<h2 class="section">La correction</h2><div class="glass corr">`
        + Quiz.copie.map((r, n) => `
            <div class="corrq ${r.juste ? 'ok' : 'ko'}">
              <p class="cq"><span class="cn">${n + 1}</span>${esc(r.question)}</p>
              ${r.juste
                ? `<p class="cb"><i>✓</i>${esc(r.bonne)}</p>`
                : `<p class="cm"><i>✗</i>Ta réponse : ${esc(r.choisie)}</p>
                   <p class="cb"><i>✓</i>Bonne réponse : ${esc(r.bonne)}</p>`}
                ${r.explication ? `<p class="cx">${esc(r.explication)}</p>` : ''}
            </div>`).join('')
        + `</div>`;
  return html;
}

/* le score grimpe au lieu d'apparaître d'un coup */
function animerScore() {
  if (SOBRE) return;
  const el = document.getElementById('compteur');
  if (!el) return;
  const fin = Quiz.bonnes, debut = performance.now(), duree = 850;
  (function tic(t) {
    const p = Math.min((t - debut) / duree, 1);
    el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tic);
  })(debut);
}

/* =========================================================
   CALCULATRICE
   Affichée pendant les exercices de maths. Volontairement
   réduite à ce dont on a besoin en 3e : les puissances
   s'écrivent en petit en haut, les fractions avec une barre.
   ========================================================= */
const Calc = { jetons: [], resultat: '', ouverte: false };

const CALC_TOUCHES = [
  ['AC', 'ac'], ['⌫', 'del'], ['(', 'par('], [')', 'par)'], ['÷', 'op÷'],
  ['7', 'n7'], ['8', 'n8'], ['9', 'n9'], ['x²', 'carre'], ['×', 'op×'],
  ['4', 'n4'], ['5', 'n5'], ['6', 'n6'], ['xⁿ', 'pow'], ['−', 'op−'],
  ['1', 'n1'], ['2', 'n2'], ['3', 'n3'], ['ab', 'frac'], ['+', 'op+'],
  ['±', 'signe'], ['0', 'n0'], [',', 'virg'], ['√', 'rac'], ['=', 'egal']
];

function calcHTML() {
  return `<div class="calc">
    <div class="calcdisp" id="calcdisp">${calcRendu()}</div>
    <div class="calcgrille">` +
    CALC_TOUCHES.map(([texte, code]) => {
      const cls = code === 'egal' ? 'eg' : /^op|^par/.test(code) ? 'op'
                : ['ac','del','signe'].includes(code) ? 'gris'
                : /^(carre|pow|frac|rac|virg)$/.test(code) ? 'fn' : '';
      const lab = code === 'frac' ? '<span class="cfrac"><i>a</i><i>b</i></span>' : esc(texte);
      return `<button class="ct ${cls}" onclick="calcTouche('${code}')">${lab}</button>`;
    }).join('') + `</div></div>`;
}

/* rendu visuel : les puissances en exposant, les fractions empilées */
function calcRendu() {
  const j = Calc.jetons, sortie = [];
  for (let i = 0; i < j.length; i++) {
    const t = j[i];
    if (t.t === 'pow') {
      const e = j[i + 1];
      const val = e && e.t === 'num' ? esc(e.v) : '<span class="vide">n</span>';
      if (e && e.t === 'num') i++;
      sortie.push(`<sup>${val}</sup>`);
    } else if (t.t === 'frac') {
      const haut = sortie.pop() || '<span class="vide">a</span>';
      const b = j[i + 1];
      const bas = b && b.t === 'num' ? esc(b.v) : '<span class="vide">b</span>';
      if (b && b.t === 'num') i++;
      sortie.push(`<span class="cfrac"><i>${haut}</i><i>${bas}</i></span>`);
    } else {
      sortie.push(esc(t.v));
    }
  }
  const expr = sortie.join('') || '0';
  return `<div class="cexpr">${expr}</div>` +
         (Calc.resultat ? `<div class="cres">= ${esc(Calc.resultat)}</div>` : '');
}

function calcTouche(code) {
  const j = Calc.jetons;
  const dernier = j[j.length - 1];

  if (code === 'ac') { Calc.jetons = []; Calc.resultat = ''; }
  else if (code === 'del') {
    if (dernier && dernier.t === 'num' && dernier.v.length > 1) dernier.v = dernier.v.slice(0, -1);
    else j.pop();
    Calc.resultat = '';
  }
  else if (code === 'egal') { Calc.resultat = calcCalculer(); }
  else if (code === 'signe') {
    if (dernier && dernier.t === 'num') {
      dernier.v = dernier.v.startsWith('-') ? dernier.v.slice(1) : '-' + dernier.v;
    }
  }
  else if (code === 'virg') {
    if (dernier && dernier.t === 'num' && !dernier.v.includes(',')) dernier.v += ',';
  }
  else if (code[0] === 'n') {
    const chiffre = code.slice(1);
    if (dernier && dernier.t === 'num') dernier.v += chiffre;
    else j.push({ t: 'num', v: chiffre });
    Calc.resultat = '';
  }
  else if (code.startsWith('op')) { j.push({ t: 'op', v: code.slice(2) }); Calc.resultat = ''; }
  else if (code.startsWith('par')) { j.push({ t: 'par', v: code.slice(3) }); Calc.resultat = ''; }
  else if (code === 'pow') { j.push({ t: 'pow', v: '^' }); Calc.resultat = ''; }
  else if (code === 'carre') { j.push({ t: 'pow', v: '^' }, { t: 'num', v: '2' }); Calc.resultat = ''; }
  else if (code === 'frac') { j.push({ t: 'frac', v: '/' }); Calc.resultat = ''; }
  else if (code === 'rac') { j.push({ t: 'rac', v: '√' }, { t: 'par', v: '(' }); Calc.resultat = ''; }

  const d = document.getElementById('calcdisp');
  if (d) d.innerHTML = calcRendu();
}

/* Analyseur d'expression écrit à la main.
   On n'utilise ni eval ni Function : rien n'est jamais exécuté comme du
   code, ce qui permet d'interdire complètement l'exécution dynamique. */
function calcCalculer() {
  const j = Calc.jetons;
  if (!j.length) return '';
  let i = 0;
  const fini = () => i >= j.length;
  const tete = () => j[i];

  function expression() {
    let v = terme();
    while (!fini() && tete().t === 'op' && (tete().v === '+' || tete().v === '−')) {
      const op = j[i++].v;
      const d = terme();
      v = op === '+' ? v + d : v - d;
    }
    return v;
  }
  function terme() {
    let v = puissance();
    while (!fini() && ((tete().t === 'op' && (tete().v === '×' || tete().v === '÷')) || tete().t === 'frac')) {
      const t = j[i++];
      const d = puissance();
      v = (t.t === 'frac' || t.v === '÷') ? v / d : v * d;
    }
    return v;
  }
  function puissance() {
    const base = facteur();
    if (!fini() && tete().t === 'pow') { i++; return Math.pow(base, puissance()); }
    return base;
  }
  function facteur() {
    if (fini()) throw new Error('incomplet');
    const t = tete();
    if (t.t === 'num') {
      i++;
      const n = parseFloat(t.v.replace(',', '.'));
      if (!isFinite(n)) throw new Error('nombre');
      return n;
    }
    if (t.t === 'rac') { i++; return Math.sqrt(facteur()); }
    if (t.t === 'par' && t.v === '(') {
      i++;
      const v = expression();
      if (!fini() && tete().t === 'par' && tete().v === ')') i++;
      else throw new Error('parenthèse');
      return v;
    }
    if (t.t === 'op' && (t.v === '+' || t.v === '−')) { i++; const v = facteur(); return t.v === '−' ? -v : v; }
    throw new Error('inattendu');
  }

  try {
    const r = expression();
    if (!fini()) return 'erreur';
    if (typeof r !== 'number' || !isFinite(r)) return 'erreur';
    return String(Math.round(r * 1e10) / 1e10).replace('.', ',');
  } catch { return 'erreur'; }
}

function calcBascule() {
  Calc.ouverte = !Calc.ouverte;
  const z = document.getElementById('calczone');
  if (z) z.innerHTML = Calc.ouverte ? calcHTML() : '';
  const b = document.getElementById('calcbtn');
  if (b) b.textContent = Calc.ouverte ? 'Masquer la calculatrice' : 'Calculatrice';
}

/* =========================================================
   BREVET BLANC — le programme
   ========================================================= */
let filtreBrevet = '';

function lienSession(s) {
  const m = matiere(s.matiere);
  const fait = Fait.lire(s.id);
  const sc = Score.lire('s:' + s.id);
  return `<div class="sess${fait ? ' fait' : ''}">
    <a class="row" href="#/session/${s.id}">
      <span class="pill" style="${pastille(m)}">${fait ? '✓' : esc(m.nom[0])}</span>
      <span class="txt"><b>${esc(s.titre)}</b><small>${esc(m.nom)} · ${esc(s.duree)}${sc ? ' · QCM ' + sc.pct + '%' : ''}${fait ? ' · faite' : ''}</small></span>
      ${chevron}</a>
    <nav class="sesslinks" aria-label="Parties de la session">
      <a href="#/session/${s.id}/essentiel">L'essentiel</a><a href="#/session/${s.id}/qcm">QCM</a><a href="#/session/${s.id}/exercices">Exercices</a><a href="#/session/${s.id}/corrige">Corrigé</a>${
      (s.cours || []).map(chapitre).filter(Boolean).map(c => `<a class="cours" href="#/chapitre/${c.id}">Cours · ${esc(c.titre)}</a>`).join('')}${
      (s.methodes || []).slice(0, 1).map(chapitre).filter(Boolean).map(c => `<a class="meth" href="#/chapitre/${c.id}">Méthode · ${esc(c.titre)}</a>`).join('')}
    </nav>
  </div>`;
}

function listeMethodes() {
  const ids = BREVET.methodes && BREVET.methodes.length ? BREVET.methodes : DATA.chapitres.filter(c => c.fiche).map(c => c.id);
  const fiches = ids.map(chapitre).filter(Boolean);
  const autres = DATA.chapitres.filter(c => c.fiche && !ids.includes(c.id));
  const tout = [...fiches, ...autres];
  return tout.length ? `<div class="glass list">${tout.map(ligneChapitre).join('')}</div>`
    : `<div class="glass"><p class="empty">Les fiches méthode arrivent bientôt.</p></div>`;
}

function vueBrevet() {
  const S = BREVET.sessions;
  const faites = S.filter(s => Fait.lire(s.id)).length;
  const total = S.reduce((n, s) => n + minutes(s.duree), 0);
  const mats = [...new Set(S.map(s => s.matiere))];
  const pct = S.length ? Math.round(faites / S.length * 100) : 0;

  let html = `<h1 class="title">${esc(BREVET.titre || 'Brevet blanc')}</h1>
    <p class="subtitle">${esc(BREVET.sousTitre || '')} · ${S.length} sessions · ${duree(total)}</p>
    <div class="glass card">
      <div class="prog"><i style="width:${pct}%"></i></div>
      <p class="progtxt">${faites} session${faites > 1 ? 's' : ''} faite${faites > 1 ? 's' : ''} sur ${S.length}. Coche une session à la fin de sa page.</p>
    </div>`;

  html += `<div class="chap"><div class="chap-main">`;

  html += `<div class="filtres" role="group" aria-label="Filtrer par matière">` +
    ['', ...mats].map(id => `<button class="chipf${filtreBrevet === id ? ' on' : ''}" onclick="filtrer('${id}')"${id ? ` style="--c:${matiere(id).couleur}"` : ''}>${id ? esc(matiere(id).nom) : 'Toutes les matières'}</button>`).join('') +
    `</div>`;

  const jours = [...new Set(S.map(s => s.date))];
  const auj = iso(today().getFullYear(), today().getMonth(), today().getDate());
  for (const d of jours) {
    const duJour = S.filter(s => s.date === d);
    const vis = duJour.filter(s => !filtreBrevet || s.matiere === filtreBrevet);
    if (!vis.length) continue;
    const tot = duJour.reduce((n, s) => n + minutes(s.duree), 0);
    html += `<h2 class="section${d === auj ? ' auj' : ''}" id="j-${d}">${esc(duJour[0].jour)} · ${duree(tot)}${d === auj ? ' · aujourd\'hui' : ''}</h2>
      <div class="glass sesslist">${vis.map(lienSession).join('')}</div>`;
  }

  html += `</div><aside class="chap-side">`;
  html += `<h2 class="section">Comment utiliser une session</h2>
    <div class="glass card keycard"><ol class="etapes">${(BREVET.mode || []).map(t => `<li>${t}</li>`).join('')}</ol></div>`;
  if (BREVET.epreuves && BREVET.epreuves.length) {
    html += `<h2 class="section">Les épreuves</h2><div class="glass card epreuves">` +
      BREVET.epreuves.map(e => {
        const m = matiere(e.matiere);
        return `<div><b><i class="dot" style="background:${e.nom ? 'var(--indigo)' : m.couleur}"></i>${esc(e.nom || m.nom)} <span>${esc(e.duree)}</span></b><p>${esc(e.detail)}</p></div>`;
      }).join('') + `</div>`;
  }
  html += `<h2 class="section" id="methodes">Les méthodes</h2>${listeMethodes()}`;
  if (BREVET.note) html += `<p class="note-ajout">${esc(BREVET.note)}</p>`;
  html += `</aside></div>`;
  return html;
}

function filtrer(id) {
  filtreBrevet = id;
  rendre();
}

/* =========================================================
   SESSION — l'essentiel, le QCM, les exercices, le corrigé
   ========================================================= */
const RepS = {};          // réponses au QCM, par session : { id: { n° question: n° choix } }
const CorrOuvert = {};    // corrigés déjà affichés

function qcmDe(s) { return s.blocs.find(b => b.type === 'qcm'); }

function blocQCM(s, b) {
  const rep = RepS[s.id] || {};
  return `<div class="glass card qcmcard">` + b.questions.map((q, n) => {
    const r = rep[n];
    return `<div class="qq" data-n="${n}">
      <p class="cq"><span class="cn">${n + 1}</span><span>${q.q}</span></p>
      <div class="qq-opts">${q.choix.map((c, k) => {
        const cls = r === undefined ? '' : k === q.bonne ? ' good' : k === r ? ' bad' : ' dim';
        return `<button class="opt lettre${cls}"${r === undefined ? '' : ' disabled'} onclick="repondreS('${s.id}',${n},${k})"><span class="mark">${LETTRES[k]}</span><span>${c}</span></button>`;
      }).join('')}</div>
    </div>`;
  }).join('') + `<div id="qqscore" role="status" aria-live="polite">${scoreQCM(s)}</div></div>`;
}

function scoreQCM(s) {
  const b = qcmDe(s);
  const rep = RepS[s.id] || {};
  const faites = Object.keys(rep).length;
  if (!faites) return '';
  const bonnes = b.questions.filter((q, n) => rep[n] === q.bonne).length;
  const fini = faites === b.questions.length;
  const mot = !fini ? '' : bonnes === b.questions.length ? ' Sans faute.'
    : bonnes >= b.questions.length - 1 ? ' Solide : relis juste la question ratée.'
    : ' Relis l\'essentiel, puis le cours lié aux erreurs.';
  return `<div class="why"><b>${bonnes} / ${faites}</b>${fini ? '' : ` · ${b.questions.length - faites} question${b.questions.length - faites > 1 ? 's' : ''} restante${b.questions.length - faites > 1 ? 's' : ''}`}.${mot}</div>
    ${fini ? `<button class="btn quiet" onclick="refaireQCM('${s.id}')">Refaire le QCM</button>` : ''}`;
}

function repondreS(sid, n, k) {
  const s = session(sid);
  if (!s) return;
  RepS[sid] = RepS[sid] || {};
  if (RepS[sid][n] !== undefined) return;
  RepS[sid][n] = k;
  const q = qcmDe(s).questions[n];
  document.querySelectorAll(`.qq[data-n="${n}"] .opt`).forEach((btn, j) => {
    btn.disabled = true;
    btn.classList.add(j === q.bonne ? 'good' : j === k ? 'bad' : 'dim');
  });
  const b = qcmDe(s);
  if (Object.keys(RepS[sid]).length === b.questions.length) {
    const bonnes = b.questions.filter((x, i) => RepS[sid][i] === x.bonne).length;
    Score.ecrire('s:' + sid, Math.round(bonnes / b.questions.length * 100));
  }
  const z = document.getElementById('qqscore');
  if (z) z.innerHTML = scoreQCM(s);
}

function refaireQCM(sid) {
  delete RepS[sid];
  const s = session(sid);
  const box = document.querySelector('.qcmcard');
  if (s && box) {
    box.outerHTML = blocQCM(s, qcmDe(s));
    allerA('qcm');
  }
}

function corrigeHTML(s) {
  const b = qcmDe(s);
  const qcm = b ? `<h4>QCM</h4><ol class="repqcm">${b.questions.map(q =>
    `<li><b>${LETTRES[q.bonne]})</b> ${q.choix[q.bonne]}</li>`).join('')}</ol>` : '';
  return qcm + `<h4>Exercices</h4>${s.corrige}`;
}

function montrerCorrige(sid) {
  CorrOuvert[sid] = true;
  const s = session(sid);
  const z = document.getElementById('corrbox');
  if (s && z) z.innerHTML = corrigeHTML(s);
}

function basculerFait(sid) {
  Fait.basculer(sid);
  const b = document.getElementById('faitbtn');
  if (b) {
    const fait = Fait.lire(sid);
    b.textContent = fait ? 'Session faite ✓ — annuler' : 'Marquer la session comme faite';
    b.classList.toggle('quiet', fait);
  }
}

function allerA(ancre) {
  const parts = (location.hash || '').split('/');
  if (ancre === 'corrige' && parts[1] === 'session') montrerCorrige(parts[2]);
  const el = document.getElementById(ancre);
  if (el) el.scrollIntoView({ behavior: SOBRE ? 'auto' : 'smooth', block: 'start' });
}

function vueSession(id) {
  const s = session(id);
  if (!s) return `<div class="glass"><p class="empty">Cette session n'existe pas.<br>
    <a href="#/brevet" style="color:var(--blue)">Retour au programme</a></p></div>`;
  const m = matiere(s.matiere);
  const i = BREVET.sessions.indexOf(s);
  const prec = BREVET.sessions[i - 1], suiv = BREVET.sessions[i + 1];
  const cours = (s.cours || []).map(chapitre).filter(Boolean);
  const meths = (s.methodes || []).map(chapitre).filter(Boolean);
  const fait = Fait.lire(s.id);
  const ancre = b => b.type === 'qcm' ? 'qcm' : /essentiel/i.test(b.titre) ? 'essentiel' : 'exercices';

  let html = fil([['Accueil', '#/'], ['Brevet blanc', '#/brevet'], [s.jour, null]])
    + `<span class="flag chapflag" style="margin:12px 0 0"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)} · ${esc(s.jour)}</span>
    <h1 class="title">${esc(s.titre)}</h1>
    <p class="subtitle">Session de ${esc(s.duree)} · ${esc(m.nom)}</p>
    <div class="timing" role="img" aria-label="${esc(s.timing.map(([t, l]) => l + ' ' + t).join(', '))}">${s.timing.map(([t, l]) =>
      `<div style="flex:${minutes(t)} 1 0"><b>${esc(t)}</b><span>${esc(l)}</span></div>`).join('')}</div>
    <nav class="sommaire-s">${s.blocs.map(b => `<button onclick="allerA('${ancre(b)}')">${esc(b.titre)}</button>`).join('')}<button onclick="allerA('corrige')">Corrigé</button>${
      cours.map(c => `<a class="cours" href="#/chapitre/${c.id}">Cours · ${esc(c.titre)}</a>`).join('')}${
      meths.map(c => `<a class="meth" href="#/chapitre/${c.id}">Méthode · ${esc(c.titre)}</a>`).join('')}</nav>`;

  html += `<div class="chap"><div class="chap-main">`;
  for (const b of s.blocs) {
    const a = ancre(b);
    html += `<h2 class="section" id="${a}">${esc(b.titre)}${b.sous ? ` <small>· ${esc(b.sous)}</small>` : ''}</h2>`;
    html += b.type === 'qcm' ? blocQCM(s, b)
      : `<div class="glass card fiche-b${a === 'essentiel' ? ' keycard' : ''}">${b.html}</div>`;
  }
  html += `<h2 class="section" id="corrige">Corrigé</h2>
    <div class="glass card fiche-b corrige" id="corrbox">${CorrOuvert[s.id] ? corrigeHTML(s)
      : `<p class="cache">Fais d'abord les exercices au brouillon, puis affiche le corrigé.</p>
         <button class="btn ghost" onclick="montrerCorrige('${s.id}')">Afficher le corrigé</button>`}</div>
    <div class="actions"><button class="btn${fait ? ' quiet' : ''}" id="faitbtn" onclick="basculerFait('${s.id}')">${fait ? 'Session faite ✓ — annuler' : 'Marquer la session comme faite'}</button></div>`;

  html += `</div><aside class="chap-side">`;
  if (cours.length) html += `<h2 class="section">Revoir le cours</h2><div class="glass list sidelist">${cours.map(ligneChapitre).join('')}</div>`;
  if (meths.length) html += `<h2 class="section">La méthode</h2><div class="glass list sidelist">${meths.map(ligneChapitre).join('')}</div>`;
  if (prec || suiv) {
    html += `<h2 class="section">Les autres sessions</h2><div class="glass list sidelist">`
      + (prec ? ligneSessionCourte(prec, 'Précédente · ' + prec.jour) : '')
      + (suiv ? ligneSessionCourte(suiv, 'Suivante · ' + suiv.jour) : '')
      + `<button class="row" onclick="go('#/brevet')"><span class="pill" style="background:linear-gradient(160deg,var(--indigo),#7d7bf0)">≡</span><span class="txt"><b>Tout le programme</b><small>${BREVET.sessions.length} sessions</small></span>${chevron}</button>`
      + `</div>`;
  }
  html += `</aside></div>`;
  return html;
}

/* =========================================================
   MÉTHODES — toutes les fiches, rangées par matière
   ========================================================= */
function vueMethodes() {
  const fiches = DATA.chapitres.filter(c => c.fiche);
  let html = `<h1 class="title">Méthodes</h1>
    <p class="subtitle">Rédiger, analyser un document, démontrer : les savoir-faire de chaque épreuve.</p>`;
  if (!fiches.length) return html + `<div class="glass"><p class="empty">Les fiches méthode arrivent bientôt.</p></div>`;
  const mats = DATA.matieres.filter(m => fiches.some(c => c.matiere === m.id));
  html += `<div class="chap"><div class="chap-main">`;
  html += mats.map(m => `<h2 class="section">${esc(m.nom)}</h2><div class="glass list">${
    fiches.filter(c => c.matiere === m.id).map(ligneChapitre).join('')}</div>`).join('');
  html += `</div><aside class="chap-side">`;
  if (BREVET.epreuves && BREVET.epreuves.length) {
    html += `<h2 class="section">Les épreuves du brevet</h2><div class="glass card epreuves">` +
      BREVET.epreuves.map(e => {
        const m = matiere(e.matiere);
        return `<div><b><i class="dot" style="background:${e.nom ? 'var(--indigo)' : m.couleur}"></i>${esc(e.nom || m.nom)} <span>${esc(e.duree)}</span></b><p>${esc(e.detail)}</p></div>`;
      }).join('') + `</div>`;
  }
  html += `<div class="actions" style="margin-top:14px"><button class="btn ghost" onclick="go('#/brevet')">Voir le programme du brevet blanc</button></div>`;
  html += `</aside></div>`;
  return html;
}

/* =========================================================
   CALENDRIER — les évaluations et les sessions du brevet blanc
   ========================================================= */
let calMois = new Date(today().getFullYear(), today().getMonth(), 1);
let calSel = null;

function calCarte() {
  const y = calMois.getFullYear(), mo = calMois.getMonth();
  const decalage = (new Date(y, mo, 1).getDay() + 6) % 7;   // semaine commençant le lundi
  const nb = new Date(y, mo + 1, 0).getDate();
  const nbPrec = new Date(y, mo, 0).getDate();
  const t = today();
  let cases = '';

  for (let i = decalage; i > 0; i--) cases += `<button class="out" disabled>${nbPrec - i + 1}</button>`;
  for (let d = 1; d <= nb; d++) {
    const jour = iso(y, mo, d);
    const evs = DATA.evaluations.filter(e => e.date === jour);
    const ses = BREVET.sessions.filter(s => s.date === jour);
    const cls = ['', evs.length ? 'has' : '', !evs.length && ses.length ? 'rev' : '',
                 (t.getFullYear() === y && t.getMonth() === mo && t.getDate() === d) ? 'today' : '',
                 calSel === jour ? 'sel' : ''].join(' ').trim();
    const col = evs.length ? ` style="--ev-color:${matiere(evs[0].matiere).couleur}"` : '';
    cases += `<button class="${cls}"${col} data-jour="${jour}" onclick="choisirJour('${jour}')">${d}</button>`;
  }
  const reste = (7 - ((decalage + nb) % 7)) % 7;
  for (let d = 1; d <= reste; d++) cases += `<button class="out" disabled>${d}</button>`;

  const prefixe = `${y}-${String(mo+1).padStart(2,'0')}`;
  const combien = DATA.evaluations.filter(e => e.date.startsWith(prefixe)).length;
  const revisions = BREVET.sessions.some(s => s.date.startsWith(prefixe));

  return `<header>
      <button onclick="moisSuivant(-1)" aria-label="Mois précédent">‹</button>
      <b>${MOIS[mo]} ${y}</b>
      <button onclick="moisSuivant(1)" aria-label="Mois suivant">›</button>
    </header>
    <div class="dow"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
    <div class="grid">${cases}</div>
    <p class="legend"><i></i>${combien ? 'Les jours en couleur sont des évaluations. Appuie dessus.' : 'Aucune évaluation ce mois-ci.'}</p>
    ${revisions ? `<p class="legend rev"><i></i>Les jours entourés ont des sessions de révision du brevet blanc.</p>` : ''}`;
}

function detailJour() {
  if (!calSel) return '';
  const evs = DATA.evaluations.filter(e => e.date === calSel);
  const ses = BREVET.sessions.filter(s => s.date === calSel);
  return `<div class="popin"><h2 class="section">${dateLongue(parseDate(calSel))}</h2>`
       + (evs.length ? evs.map(carteEval).join('') : '')
       + (ses.length ? `<div class="glass list">${ses.map(s => ligneSessionCourte(s, matiere(s.matiere).nom)).join('')}</div>` : '')
       + (!evs.length && !ses.length ? `<div class="glass"><p class="empty">Rien de prévu ce jour-là.</p></div>` : '')
       + `</div>`;
}

function vueCalendrier() {
  const avenir = evalsAvenir();
  return `<h1 class="title">Calendrier</h1>
    <p class="subtitle">Appuie sur un jour en couleur pour voir ce qu'il faut réviser</p>
    <div class="cols">
      <div class="colA">
        <section class="glass cal" id="calcard">${calCarte()}</section>
        <div id="caldetail">${detailJour()}</div>
      </div>
      <div class="colB">
        ${avenir.length ? `<h2 class="section">Les prochaines évals</h2>` + avenir.map(carteEval).join('') : ''}
        ${BREVET.sessions.length ? `<h2 class="section">Brevet blanc</h2>${carteBrevet()}` : ''}
      </div>
    </div>`;
}

function carteEval(e) {
  const m = matiere(e.matiere);
  const chs = chapitresEval(e);
  return `<div class="glass card">
    <span class="flag"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)}</span>
    <h3 style="margin-top:10px">${esc(e.titre)}</h3>
    ${ligneChapitreEval(e)}
    <p style="color:var(--ink-2);margin:6px 0 ${chs.length ? 14 : 0}px;font-size:15px">
      ${esc(texteQuand(e))}${e.info ? '<br>' + esc(e.info) : ''}</p>
    ${chs.map(c => `<button class="btn ghost" style="margin-top:8px" onclick="go('#/chapitre/${c.id}')">${chs.length > 1 ? 'Réviser : ' + esc(c.titre) : 'Réviser ce chapitre'}</button>`).join('')}
  </div>`;
}

/* on ne redessine que le calendrier, pas toute la page : c'est plus fluide */
function moisSuivant(d) {
  calMois = new Date(calMois.getFullYear(), calMois.getMonth() + d, 1);
  const carte = document.getElementById('calcard');
  if (!carte) { rendre(); return; }
  carte.innerHTML = calCarte();
  const g = carte.querySelector('.grid');
  if (g && !SOBRE) g.classList.add(d > 0 ? 'slide-r' : 'slide-l');
}

function choisirJour(jour) {
  calSel = (calSel === jour ? null : jour);
  document.querySelectorAll('#calcard .grid button').forEach(b =>
    b.classList.toggle('sel', b.dataset.jour === calSel));
  const zone = document.getElementById('caldetail');
  if (zone) {
    zone.innerHTML = detailJour();
    if (calSel && !SOBRE) {
      const p = zone.firstElementChild;
      if (p) setTimeout(() => p.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 160);
    }
  }
}

/* =========================================================
   ROUTEUR
   ========================================================= */
const PROFONDEUR = { '': 0, 'calendrier': 0, 'brevet': 0, 'methodes': 0, 'matiere': 1, 'session': 1, 'chapitre': 2, 'quiz': 3 };
let profPrec = null;
let hashPrecedent = '';

function go(hash) {
  if (location.hash === hash) rendre();   // même adresse : on relance à la main
  else location.hash = hash;
}

function rendre() {
  const hashActuel = location.hash || '#/';
  const parts = hashActuel.replace(/^#\/?/, '').split('/');
  const vue = parts[0] || '';
  let html, titre = NOM, retour = null, onglet = 'accueil', apres = null;

  if (vue === 'calendrier') {
    html = vueCalendrier(); onglet = 'calendrier';
    titre = 'Calendrier · ' + NOM;
    /* si on vient d'une leçon ou d'une matière, un bouton Retour permet d'y revenir */
    if (/^#\/(chapitre|matiere|session)\//.test(hashPrecedent)) retour = hashPrecedent;
  } else if (vue === 'brevet') {
    html = vueBrevet(); onglet = 'brevet';
    titre = 'Brevet blanc · ' + NOM;
  } else if (vue === 'methodes') {
    html = vueMethodes(); onglet = 'methodes';
    titre = 'Méthodes · ' + NOM;
  } else if (vue === 'session') {
    const s = session(parts[1]);
    html = vueSession(parts[1]); onglet = 'brevet'; retour = '#/brevet';
    if (s) titre = s.titre + ' · ' + NOM;
    if (parts[2]) apres = () => allerA(parts[2]);
  } else if (vue === 'matiere') {
    html = vueMatiere(parts[1]); retour = '#/';
    titre = matiere(parts[1]).nom + ' · ' + NOM;
  } else if (vue === 'chapitre') {
    const c = chapitre(parts[1]);
    html = vueChapitre(parts[1]);
    retour = c ? '#/matiere/' + c.matiere : '#/';
    /* venu d'une session ou des méthodes : le bouton Retour y ramène */
    if (/^#\/(session\/[^/]+|methodes|brevet)/.test(hashPrecedent)) {
      retour = hashPrecedent.replace(/^(#\/session\/[^/]+).*$/, '$1');
      onglet = /^#\/methodes/.test(hashPrecedent) ? 'methodes' : 'brevet';
    } else if (c && c.fiche) onglet = 'methodes';
    if (c) titre = c.titre + ' · ' + NOM;
  } else if (vue === 'quiz') {
    retour = '#/chapitre/' + parts[1];
    titre = 'Exercices · ' + NOM;
    if (lancerQuiz(parts[1])) { html = vueQuiz(); apres = animerJauge; }
    else html = `<div class="glass"><p class="empty">Les exercices de ce chapitre arrivent bientôt.</p></div>`;
  } else {
    html = vueAccueil();
  }

  const prof = PROFONDEUR[vue] ?? 0;
  const dir = profPrec === null ? 0 : Math.sign(prof - profPrec);
  profPrec = prof;
  /* on garde l'adresse sans la partie « ancre » pour le bouton Retour */
  hashPrecedent = hashActuel;

  document.title = titre;
  const btn = document.getElementById('back');
  btn.style.display = retour ? 'inline-flex' : 'none';
  btn.onclick = () => { if (retour) location.hash = retour; };
  document.querySelectorAll('.tabbar a, .topnav a').forEach(a => a.classList.toggle('on', a.dataset.tab === onglet));
  if (document.body) document.body.className = 'vue-' + (vue || 'accueil') + (vue === '' ? ' accueil' : '');

  peindre(html, dir, apres, vue === '');
}

window.addEventListener('hashchange', rendre);
const barreHaut = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  if (barreHaut) barreHaut.classList.toggle('scrolled', window.scrollY > 4);
}, { passive: true });

const avisTop = document.getElementById('avisTop');
if (avisTop) avisTop.textContent = AVIS;
rendre();

/* mise en cache pour pouvoir réviser sans connexion */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => reg.update()).catch(() => {});
  });
  /* si une nouvelle version prend la main, on recharge une seule fois
     pour que l'élève voie tout de suite le contenu à jour */
  let recharge = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (recharge) return;
    recharge = true;
    location.reload();
  });
}
