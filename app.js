/* =========================================================
   révision brevet — logique de l'application

   Version alternative du site « llm révision » (llmrevision.com) :
   même moteur et même style, avec en plus
   - des zones thématiques dans chaque matière,
   - les fiches méthode (rédaction, analyse de documents…),
   - la zone « Révision » : une session par chapitre
     (l'essentiel, QCM, exercices, corrigé) reliée au cours,
   - l'export pour l'impression (PDF A4 recto verso) des
     chapitres et des sessions.

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
const AVIS = "Version révision brevet du site llm révision. Pour les élèves, par les élèves. Non affilié au LLM.";
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

/* ---------- révision : sessions et liens avec le cours ---------- */
const BREVET = DATA.brevet || { sessions: [], methodes: [], epreuves: [], mode: [] };
const session = id => BREVET.sessions.find(s => s.id === id);
const sessionsDe = cid => BREVET.sessions.filter(s =>
  (s.cours || []).includes(cid) || (s.methodes || []).includes(cid));
/* les sessions d'une matière, dans l'ordre du fichier */
const sessionsMatiere = id => BREVET.sessions.filter(s => s.matiere === id);
const LETTRES = 'abcd';
const ICONE_IMP = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="2"/><path d="M7 14h10v6.5H7z"/></svg>';

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
function carteRevision() {
  const S = BREVET.sessions;
  if (!S.length) return '';
  const faites = S.filter(s => Fait.lire(s.id)).length;
  const pct = Math.round(faites / S.length * 100);
  const mats = [...new Set(S.map(s => matiere(s.matiere).nom))];
  return `
    <a class="glass hero" href="#/revision">
      <span class="flag"><i class="dot" style="background:var(--indigo)"></i>Zone révision · ${S.length} sessions</span>
      <h3>${esc(BREVET.titre || 'Révision')}</h3>
      <p class="chapline">${esc(BREVET.sousTitre || '')}</p>
      <div class="prog"><i style="width:${pct}%"></i></div>
      <p class="when">${faites} session${faites > 1 ? 's' : ''} faite${faites > 1 ? 's' : ''} sur ${S.length} · ${esc(mats.join(', '))}</p>
    </a>`;
}

function vueAccueil() {
  const prochaines = evalsAvenir();
  let html = `<h1 class="title">Révisions</h1>
              <p class="subtitle">${dateLongue(today())}</p>`;

  html += carteRevision();
  html += carteExamens();

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

/* une ligne de session, version courte (page chapitre, autres sessions) */
function ligneSessionCourte(s, etiquette) {
  const m = matiere(s.matiere);
  const fait = Fait.lire(s.id);
  const sc = Score.lire('s:' + s.id);
  return `<button class="row" onclick="go('#/session/${s.id}')">
    <span class="pill" style="${pastille(m)}">${fait ? '✓' : esc(m.nom[0])}</span>
    <span class="txt"><b>${esc(s.titre)}</b><small>${[esc(etiquette || 'Révision · ' + m.nom), sc ? 'QCM ' + sc.pct + '%' : '', fait ? 'faite' : ''].filter(Boolean).join(' · ')}</small></span>
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

  const cartes = cartesMatiere(id);
  if (cartes.length) {
    html += `<nav class="sommaire-s mm-autres" aria-label="Cartes mentales"><span class="lbl">${ICONE_CARTE}Cartes mentales</span>${
      cartes.map(c => `<a href="#/carte/${c.id}">${esc(c.numero)}</a>`).join('')}</nav>`;
  }
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
    html += `<h2 class="section">Révision <small>· l'essentiel, QCM, exercices, corrigé</small></h2>
             <div class="glass sesslist">${sess.map(lienSession).join('')}</div>`;
  }
  const exs = examensDe(id);
  if (exs.length) {
    html += `<h2 class="section">Examens blancs <small>· format du brevet 2027</small></h2>
             <div class="glass sesslist">${exs.map(ligneExamen).join('')}</div>`;
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
  if (c.ajout) html += `<p class="note-ajout">${c.fiche ? 'Fiche ajoutée' : 'Chapitre ajouté'} d'après le programme de ${c.programme || '3<sup>e</sup>'}. Si le cahier emploie d'autres mots ou d'autres exemples, garder ceux du cahier.</p>`;

  html += `<div class="chap"><div class="chap-main">`;

  if (c.essentiel && c.essentiel.length) {
    html += `<div class="glass card keycard"><h3>${c.fiche ? 'Les réflexes' : `L'essentiel en ${c.essentiel.length} points`}</h3><ul>`
          + c.essentiel.map(p => `<li>${p}</li>`).join('') + `</ul></div>`;
  }

  html += `<div class="actions">
             ${aQuiz ? `<button class="btn" onclick="go('#/quiz/${c.id}')">${c.fiche ? "S'entraîner" : 'Faire les exercices'}</button>` : ''}
             <button class="btn quiet" onclick="versLeCours()">${c.fiche ? 'Lire la méthode en entier' : 'Lire le cours en entier'}</button>
             ${CARTES[c.id] ? `<button class="btn quiet imp carte" onclick="go('#/carte/${c.id}')">${ICONE_CARTE}Carte mentale</button>` : ''}
             <button class="btn quiet imp" onclick="go('#/imprimer/chapitre/${c.id}')">${ICONE_IMP}Imprimer / PDF</button>
           </div>`;
  if (s) html += `<p class="record">Ton record sur ce ${c.fiche ? 'quiz' : 'chapitre'} : ${s.pct}%
    <button class="lienclair" onclick="effacerRecord('${c.id}')">réinitialiser</button></p>`;

  html += `<h2 class="section" id="cours">${c.fiche ? 'La méthode' : 'Le cours'}</h2>`;
  html += (c.sections || []).map(sectionCours).join('');

  html += `</div><aside class="chap-side">`;

  const sess = sessionsDe(c.id);
  if (sess.length) {
    html += c.fiche
      ? `<h2 class="section">S'entraîner en révision</h2><div class="glass list sidelist">`
          + sess.map(x => ligneSessionCourte(x)).join('') + `</div>`
      : `<h2 class="section">Réviser ce chapitre</h2><div class="glass sesslist sidelist">`
          + sess.map(lienSession).join('') + `</div>`;
  }

  const exs = examensChapitre(c.id);
  if (exs.length) {
    html += `<h2 class="section">En conditions d'examen</h2><div class="glass list sidelist">`
          + exs.map(ligneExamenCourte).join('') + `</div>`;
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
   RÉVISION — les sessions, rangées par matière
   ========================================================= */
let filtreBrevet = '';

/* les pastilles d'une session : ses quatre parties, puis le cours et la méthode */
function pastillesSession(s, cours, meths) {
  return `<a class="p-ess" href="#/session/${s.id}/essentiel">L'essentiel</a><a class="p-qcm" href="#/session/${s.id}/qcm">QCM</a><a class="p-exo" href="#/session/${s.id}/exercices">Exercices</a><a class="p-cor" href="#/session/${s.id}/corrige">Corrigé</a>${
    cours.map(c => `<a class="cours" href="#/chapitre/${c.id}">Cours · ${esc(c.titre)}</a>`).join('')}${
    meths.map(c => `<a class="meth" href="#/chapitre/${c.id}">Méthode · ${esc(c.titre)}</a>`).join('')}`;
}

function lienSession(s) {
  const m = matiere(s.matiere);
  const fait = Fait.lire(s.id);
  const sc = Score.lire('s:' + s.id);
  const cours = (s.cours || []).map(chapitre).filter(Boolean);
  const meths = (s.methodes || []).slice(0, 1).map(chapitre).filter(Boolean);
  const sous = cours.length ? cours.map(c => c.numero).filter(Boolean).join(', ') : m.nom;
  return `<div class="sess${fait ? ' fait' : ''}">
    <a class="row" href="#/session/${s.id}">
      <span class="pill" style="${pastille(m)}">${fait ? '✓' : esc(m.nom[0])}</span>
      <span class="txt"><b>${esc(s.titre)}</b><small>${[esc(m.nom + (sous !== m.nom ? ' · ' + sous : '')), sc ? 'QCM ' + sc.pct + '%' : '', fait ? 'faite' : ''].filter(Boolean).join(' · ')}</small></span>
      ${chevron}</a>
    <nav class="sesslinks" aria-label="Parties de la session">${pastillesSession(s, cours, meths)}<a class="imp" href="#/imprimer/session/${s.id}">${ICONE_IMP}PDF</a></nav>
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

function vueRevision() {
  const S = BREVET.sessions;
  const faites = S.filter(s => Fait.lire(s.id)).length;
  const mats = DATA.matieres.filter(m => S.some(s => s.matiere === m.id)).map(m => m.id);
  const pct = S.length ? Math.round(faites / S.length * 100) : 0;

  let html = `<h1 class="title">${esc(BREVET.titre || 'Révision')}</h1>
    <p class="subtitle">${esc(BREVET.sousTitre || '')}</p>
    <div class="glass card">
      <div class="prog"><i style="width:${pct}%"></i></div>
      <p class="progtxt">${faites} session${faites > 1 ? 's' : ''} faite${faites > 1 ? 's' : ''} sur ${S.length}. Coche une session à la fin de sa page.</p>
    </div>`;

  html += `<div class="chap"><div class="chap-main">`;

  html += `<div class="filtres" role="group" aria-label="Filtrer par matière">` +
    ['', ...mats].map(id => `<button class="chipf${filtreBrevet === id ? ' on' : ''}" onclick="filtrer('${id}')"${id ? ` style="--c:${matiere(id).couleur}"` : ''}>${id ? esc(matiere(id).nom) : 'Toutes les matières'}</button>`).join('') +
    `</div>`;

  for (const id of mats) {
    if (filtreBrevet && filtreBrevet !== id) continue;
    const l = sessionsMatiere(id);
    html += `<h2 class="section" id="m-${id}">${esc(matiere(id).nom)} <small>· ${l.length} session${l.length > 1 ? 's' : ''}</small></h2>
      <div class="glass sesslist">${l.map(lienSession).join('')}</div>`;
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
    <a href="#/revision" style="color:var(--blue)">Retour à la révision</a></p></div>`;
  const m = matiere(s.matiere);
  const memes = sessionsMatiere(s.matiere);
  const i = memes.indexOf(s);
  const prec = memes[i - 1], suiv = memes[i + 1];
  const cours = (s.cours || []).map(chapitre).filter(Boolean);
  const meths = (s.methodes || []).map(chapitre).filter(Boolean);
  const fait = Fait.lire(s.id);
  const ancre = b => b.type === 'qcm' ? 'qcm' : /essentiel/i.test(b.titre) ? 'essentiel' : 'exercices';
  const classe = { essentiel: 'p-ess', qcm: 'p-qcm', exercices: 'p-exo' };

  let html = fil([['Accueil', '#/'], ['Révision', '#/revision'], [m.nom, null]])
    + `<span class="flag chapflag" style="margin:12px 0 0"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)} · Révision${cours.length ? ' · ' + esc(cours.map(c => c.numero).join(', ')) : ''}</span>
    <h1 class="title">${esc(s.titre)}</h1>
    <p class="subtitle">L'essentiel du cours, un QCM, des exercices, et le corrigé à ouvrir à la fin.</p>
    <nav class="sommaire-s">${s.blocs.map(b => `<button class="${classe[ancre(b)]}" onclick="allerA('${ancre(b)}')">${esc(b.titre)}</button>`).join('')}<button class="p-cor" onclick="allerA('corrige')">Corrigé</button>${
      cours.map(c => `<a class="cours" href="#/chapitre/${c.id}">Cours · ${esc(c.titre)}</a>`).join('')}${
      meths.map(c => `<a class="meth" href="#/chapitre/${c.id}">Méthode · ${esc(c.titre)}</a>`).join('')}<a class="imp" href="#/imprimer/session/${s.id}">${ICONE_IMP}Imprimer / PDF</a></nav>`;

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
  html += `<h2 class="section">Les autres sessions de ${esc(m.nom)}</h2><div class="glass list sidelist">`
    + (prec ? ligneSessionCourte(prec, 'Précédente') : '')
    + (suiv ? ligneSessionCourte(suiv, 'Suivante') : '')
    + `<button class="row" onclick="go('#/revision')"><span class="pill" style="background:linear-gradient(160deg,var(--indigo),#7d7bf0)">≡</span><span class="txt"><b>Toute la révision</b><small>${BREVET.sessions.length} sessions</small></span>${chevron}</button>`
    + `</div>`;
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
  html += `<div class="actions" style="margin-top:14px"><button class="btn ghost" onclick="go('#/revision')">Ouvrir la zone révision</button></div>`;
  html += `</aside></div>`;
  return html;
}

/* =========================================================
   CALENDRIER — les évaluations
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
    const cls = ['', evs.length ? 'has' : '',
                 (t.getFullYear() === y && t.getMonth() === mo && t.getDate() === d) ? 'today' : '',
                 calSel === jour ? 'sel' : ''].join(' ').trim();
    const col = evs.length ? ` style="--ev-color:${matiere(evs[0].matiere).couleur}"` : '';
    cases += `<button class="${cls}"${col} data-jour="${jour}" onclick="choisirJour('${jour}')">${d}</button>`;
  }
  const reste = (7 - ((decalage + nb) % 7)) % 7;
  for (let d = 1; d <= reste; d++) cases += `<button class="out" disabled>${d}</button>`;

  const prefixe = `${y}-${String(mo+1).padStart(2,'0')}`;
  const combien = DATA.evaluations.filter(e => e.date.startsWith(prefixe)).length;

  return `<header>
      <button onclick="moisSuivant(-1)" aria-label="Mois précédent">‹</button>
      <b>${MOIS[mo]} ${y}</b>
      <button onclick="moisSuivant(1)" aria-label="Mois suivant">›</button>
    </header>
    <div class="dow"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
    <div class="grid">${cases}</div>
    <p class="legend"><i></i>${combien ? 'Les jours en couleur sont des évaluations. Appuie dessus.' : 'Aucune évaluation ce mois-ci.'}</p>`;
}

function detailJour() {
  if (!calSel) return '';
  const evs = DATA.evaluations.filter(e => e.date === calSel);
  return `<div class="popin"><h2 class="section">${dateLongue(parseDate(calSel))}</h2>`
       + (evs.length ? evs.map(carteEval).join('') : `<div class="glass"><p class="empty">Rien de prévu ce jour-là.</p></div>`)
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
        ${BREVET.sessions.length ? `<h2 class="section">Révision</h2>${carteRevision()}` : ''}
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
   CARTES MENTALES — une carte par chapitre (DATA.cartes,
   dans cours/cartes-*.js). Au centre le chapitre, autour ses
   grandes idées, au bout les mots-clés. La mise en page est
   en CSS ; les liaisons sont dessinées en SVG ensuite, et
   redessinées quand la largeur change ou à l'impression.
   Grand écran : les branches rayonnent à gauche et à droite.
   Téléphone et tablette en hauteur : un arbre vertical.
   ========================================================= */
const CARTES = DATA.cartes || {};
const COULEURS_CARTE = ['#0A6FE0', '#1E9E50', '#E07800', '#9B3FD0', '#E0245E', '#128A9E'];
const ICONE_CARTE = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M9.6 10.4 5.6 6.6M14.4 10.4l4-3.8M9.6 13.6l-4 3.8M14.4 13.6l4 3.8"/></svg>';
const LARGEUR_CARTE = 900;   // en dessous : arbre vertical
const cartesMatiere = mid => Object.keys(CARTES).map(chapitre).filter(c => c && c.matiere === mid);

function vueCarte(id) {
  const c = chapitre(id), carte = CARTES[id];
  if (!c || !carte) return `<div class="glass"><p class="empty">Cette carte mentale n'existe pas.<br><a href="#/" style="color:var(--blue)">Retour à l'accueil</a></p></div>`;
  const m = matiere(c.matiere);
  const br = carte.branches || [];
  const moitie = Math.ceil(br.length / 2);
  const bloc = (b, i) => `<div class="mm-br" style="--c:${COULEURS_CARTE[i % COULEURS_CARTE.length]}">
      <div class="mm-noeud">${esc(b.titre)}</div>
      <ul class="mm-feuilles">${(b.feuilles || []).map(f => `<li><span class="f">${f}</span></li>`).join('')}</ul></div>`;
  const liste = cartesMatiere(c.matiere);
  const i = liste.indexOf(c);
  const large = (app.clientWidth || window.innerWidth) >= LARGEUR_CARTE;
  return fil([['Accueil', '#/'], [m.nom, '#/matiere/' + m.id], [c.numero, '#/chapitre/' + c.id], ['Carte mentale', null]])
    + `<span class="flag chapflag" style="margin:12px 0 0"><i class="dot" style="background:${m.couleur}"></i>${esc(m.nom)} · ${esc(c.numero)} · carte mentale</span>
    <h1 class="title">${esc(c.titre)}</h1>
    <p class="subtitle">Les idées clés du chapitre en un coup d'œil. Pour réviser : cacher les mots-clés et les retrouver à partir des branches.</p>
    <div class="actions mm-actions">
      <button class="btn quiet" onclick="go('#/chapitre/${c.id}')">Lire le cours</button>
    </div>
    <div class="mm-page" id="mmpage">
      <header class="mm-ptete"><span><b>${esc(m.nom)} · ${esc(c.numero)}</b> · carte mentale<span class="mm-acompleter"> à compléter</span></span><span>${esc(c.titre)}</span></header>
      <div class="mm-zone" id="mmzone">
        <div class="mm${large ? ' large' : ''}" id="mm" style="--mc:${m.couleur}">
          <svg class="mm-liens" id="mmliens" aria-hidden="true"></svg>
          <div class="mm-cote gauche">${br.slice(0, moitie).map(bloc).join('')}</div>
          <div class="mm-centre" id="mmcentre"><small>${esc(m.nom)} · ${esc(c.numero)}</small><b>${esc(carte.centre || c.titre)}</b></div>
          <div class="mm-cote droite">${br.slice(moitie).map((b, j) => bloc(b, j + moitie)).join('')}</div>
        </div>
      </div>
      <footer class="mm-ppied"><span>révision brevet · ${SITE}/#/carte/${c.id}</span><span>Le cours complet : ${SITE}/#/chapitre/${c.id}</span></footer>
    </div>

    ${liste.length > 1 ? `<nav class="sommaire-s mm-autres" aria-label="Les autres cartes">${
      liste.map(x => x === c ? `<span class="on">${esc(x.numero)}</span>` : `<a href="#/carte/${x.id}">${esc(x.numero)} · ${esc(x.titre)}</a>`).join('')}</nav>` : ''}
    <div class="actions mm-nav">
      ${liste[i - 1] ? `<button class="btn ghost" onclick="go('#/carte/${liste[i - 1].id}')">‹ ${esc(liste[i - 1].numero)}</button>` : ''}
      ${liste[i + 1] ? `<button class="btn ghost" onclick="go('#/carte/${liste[i + 1].id}')">${esc(liste[i + 1].numero)} ›</button>` : ''}
    </div>`;
}

const ICONE_OEIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const ICONE_OEIL_BARRE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 4l16 16"/></svg>';

/* les boutons flottants vivent hors de la vue animée (#app .view a une transformation :
   un position: fixed à l'intérieur suivrait la page au lieu de rester à l'écran) */
const fabCarte = () => `<div class="mm-fab" role="group" aria-label="Actions de la carte">
  <button class="fab" id="mmcache" onclick="cacherFeuilles()" aria-pressed="false">${ICONE_OEIL}<span>Cacher les mots-clés</span></button>
  <button class="fab principal" onclick="imprimerCarte()">${ICONE_IMP}<span>PDF</span></button>
</div>`;
function flottant(html) {
  let f = document.getElementById('flottant');
  if (!f) { f = document.createElement('div'); f.id = 'flottant'; document.body.appendChild(f); }
  f.innerHTML = html || '';
}

function cacherFeuilles() {
  const mm = document.getElementById('mm');
  if (!mm) return;
  const cache = mm.classList.toggle('cache');
  if (!cache) mm.querySelectorAll('.mm-feuilles li.vu').forEach(li => li.classList.remove('vu'));
  const page = document.getElementById('mmpage');
  if (page) page.classList.toggle('vierge', cache);
  const b = document.getElementById('mmcache');
  if (b) {
    b.innerHTML = cache ? `${ICONE_OEIL_BARRE}<span>Montrer les mots-clés</span>` : `${ICONE_OEIL}<span>Cacher les mots-clés</span>`;
    b.classList.toggle('on', cache);
    b.setAttribute('aria-pressed', String(cache));
  }
}

/* ---------- impression de la carte : une page A4 paysage ----------
   La carte est posée dans une boîte aux dimensions de la page
   (277 × 186 mm), puis agrandie ou réduite pour la remplir :
   on cherche l'échelle s telle que, mise en page sur une largeur
   W / s, sa hauteur × s tienne dans la zone. Les liaisons sont
   dessinées avant la mise à l'échelle. Si les mots-clés sont
   cachés, on imprime une carte à compléter (cases vides). */
let carteImprimee = false;
function preparerImpressionCarte() {
  const zone = document.getElementById('mmzone');
  const mm = document.getElementById('mm');
  if (!zone || !mm) return false;
  document.body.classList.add('impression');
  carteImprimee = true;
  mm.style.transform = '';
  mm.classList.add('large');
  const W = zone.clientWidth, H = zone.clientHeight;
  /* hauteur occupée à l'échelle s : la carte est mise en page sur W / s, puis réduite ou agrandie de s.
     Elle croît avec s (une carte plus étroite est plus haute) : on cherche s par dichotomie. */
  const hauteur = s => { mm.style.width = (W / s) + 'px'; return mm.offsetHeight * s; };
  let s, bas = 0.45, haut = 1.3;
  if (hauteur(haut) <= H) s = haut;
  else {
    for (let k = 0; k < 14; k++) { const mil = (bas + haut) / 2; if (hauteur(mil) <= H) bas = mil; else haut = mil; }
    s = bas;
  }
  mm.style.width = (W / s) + 'px';
  dessinerCarte(true);
  mm.style.transformOrigin = '0 0';
  mm.style.transform = `scale(${s.toFixed(4)})`;
  mm.style.top = Math.max(0, (H - mm.offsetHeight * s) / 2) + 'px';
  return true;
}
function finImpressionCarte() {
  if (!carteImprimee) return;
  carteImprimee = false;
  document.body.classList.remove('impression');
  const mm = document.getElementById('mm');
  if (mm) { mm.style.width = mm.style.transform = mm.style.top = mm.style.transformOrigin = ''; dessinerCarte(); }
}
let titreAvantImpression = null;
function imprimerCarte() {
  const id = (location.hash.split('/')[2] || '');
  const c = chapitre(id);
  const mm = document.getElementById('mm');
  if (c) {
    titreAvantImpression = document.title;
    document.title = `${matiere(c.matiere).nom} - ${c.numero} - carte mentale${mm && mm.classList.contains('cache') ? ' à compléter' : ''}`;
  }
  preparerImpressionCarte();
  window.print();
}
/* en mode « caché », toucher une feuille la révèle */
document.addEventListener('click', e => {
  const li = e.target.closest && e.target.closest('.mm.cache .mm-feuilles li');
  if (li) li.classList.toggle('vu');
});

const courbe = (x1, y1, x2, y2) => {
  const dx = (x2 - x1) * 0.5;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} C${(x1 + dx).toFixed(1)} ${y1.toFixed(1)} ${(x2 - dx).toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
};
const coude = (x, y1, y2, x2) => {   // descend en x, puis tourne vers la droite jusqu'à x2
  const r = Math.min(10, Math.max(0, y2 - y1));
  return `M${x.toFixed(1)} ${y1.toFixed(1)} V${(y2 - r).toFixed(1)} Q${x.toFixed(1)} ${y2.toFixed(1)} ${(x + r).toFixed(1)} ${y2.toFixed(1)} H${x2.toFixed(1)}`;
};

function dessinerCarte(forcerLarge) {
  const mm = document.getElementById('mm');
  const svg = document.getElementById('mmliens');
  const ce = document.getElementById('mmcentre');
  if (!mm || !svg || !ce) return;
  const large = forcerLarge || mm.clientWidth >= LARGEUR_CARTE - 40;
  mm.classList.toggle('large', large);
  const R = mm.getBoundingClientRect();
  const pos = el => { const b = el.getBoundingClientRect(); return { x: b.left - R.left, y: b.top - R.top, w: b.width, h: b.height }; };
  const C = pos(ce);
  let traits = '';
  mm.querySelectorAll('.mm-br').forEach(br => {
    const col = br.style.getPropertyValue('--c');
    const n = pos(br.querySelector('.mm-noeud'));
    const ny = n.y + n.h / 2;
    const gauche = br.parentElement.classList.contains('gauche');
    if (large) {
      traits += `<path d="${courbe(gauche ? C.x : C.x + C.w, C.y + C.h / 2, gauche ? n.x + n.w : n.x, ny)}" stroke="${col}" stroke-width="3.2"/>`;
      br.querySelectorAll('.mm-feuilles li').forEach(li => {
        const f = pos(li);
        traits += `<path d="${courbe(gauche ? n.x : n.x + n.w, ny, gauche ? f.x + f.w : f.x, f.y + f.h / 2)}" stroke="${col}" stroke-width="1.6" stroke-opacity=".7"/>`;
      });
    } else {
      traits += `<path d="${coude(C.x + 18, C.y + C.h, ny, n.x)}" stroke="#C3CAD6" stroke-width="2.4"/>`;
      const xb = n.x + 16;
      br.querySelectorAll('.mm-feuilles li').forEach(li => {
        const f = pos(li);
        traits += `<path d="${coude(xb, n.y + n.h, f.y + f.h / 2, f.x)}" stroke="${col}" stroke-width="1.6" stroke-opacity=".75"/>`;
      });
    }
  });
  svg.setAttribute('width', R.width);
  svg.setAttribute('height', R.height);
  svg.setAttribute('viewBox', `0 0 ${R.width} ${R.height}`);
  svg.innerHTML = `<g fill="none" stroke-linecap="round">${traits}</g>`;
}
let dessinPrevu = 0;
window.addEventListener('resize', () => {
  if (!document.getElementById('mm') || carteImprimee) return;
  cancelAnimationFrame(dessinPrevu);
  dessinPrevu = requestAnimationFrame(() => dessinerCarte());
});
/* Ctrl+P ou menu du navigateur : même mise en page que le bouton PDF */
window.addEventListener('beforeprint', () => { if (document.getElementById('mm') && !carteImprimee) preparerImpressionCarte(); });
window.addEventListener('afterprint', () => {
  if (titreAvantImpression !== null) { document.title = titreAvantImpression; titreAvantImpression = null; }
  finImpressionCarte();
});

/* =========================================================
   EXAMENS BLANCS — trois sujets par matière, au format des
   épreuves du DNB 2027, sur les chapitres du 1er trimestre.
   Le contenu est dans examens/*.js (DATA.examens).
   ========================================================= */
const EXAMENS = DATA.examens || [];
const examen = id => EXAMENS.find(x => x.id === id);
const ORDRE_EX = ['francais', 'maths', 'histoire', 'svt', 'physique', 'techno'];
const NOM_EX = { francais: 'Français', maths: 'Mathématiques', histoire: 'Histoire-géographie et EMC',
                 svt: 'Sciences · SVT', physique: 'Sciences · physique-chimie', techno: 'Sciences · technologie' };
const examensDe = mid => EXAMENS.filter(x => x.matiere === mid).sort((a, b) => a.numero - b.numero);
const examensChapitre = cid => EXAMENS.filter(x => (x.cours || []).includes(cid) || (x.methodes || []).includes(cid));
const fmtPts = n => `${String(n).replace('.', ',')} point${n >= 2 ? 's' : ''}`;
/* maths : les 2 points de rédaction s'ajoutent à la dernière partie (14 = 12 + 2) */
function ptsPartie(x, i) {
  const p = x.parties[i];
  const r = x.pointsRedaction && i === x.parties.length - 1 ? x.pointsRedaction : 0;
  return r ? `${fmtPts(p.points + r)}, dont ${fmtPts(r)} pour la rédaction` : fmtPts(p.points);
}
let filtreEx = '';

/* la note que l'élève se met après avoir corrigé sa copie */
const NoteEx = {
  lire(id) { try { const v = parseFloat(localStorage.getItem('exnote:' + id)); return isFinite(v) ? v : null; } catch { return null; } },
  ecrire(id, v) { try { if (v === null) localStorage.removeItem('exnote:' + id); else localStorage.setItem('exnote:' + id, String(v)); } catch { /* ignoré */ } }
};
function noteSur20(x, v) { return Math.round(v / x.points * 200) / 10; }

const EPREUVES_2027 = [
  ['francais', 'Français', '3 h · 100 points', "Texte littéraire et image : compréhension (32 points) et grammaire avec réécriture (18 points), 1 h 10. Dictée (10 points, 20 minutes). Rédaction (40 points, 1 h 30) : sujet de réflexion ou d'imagination, dictionnaire autorisé."],
  ['maths', 'Mathématiques', '2 h · 20 points', "Partie 1 : automatismes, 6 points en 20 minutes, sans calculatrice, réponses courtes. Partie 2 : problèmes, 14 points en 1 h 40, avec calculatrice, dont 2 points pour la clarté des raisonnements et la rédaction."],
  ['histoire', 'Histoire-géographie et EMC', '2 h · 40 + 20 points', "Histoire-géographie sur 40 : analyse de documents (15 points), développement construit d'au moins trente lignes (18 points) et repères : frise, croquis ou schéma (7 points). EMC sur 20 : une situation pratique et des questions."],
  ['svt', 'Sciences', '1 h · 20 points', "Deux disciplines sur trois (physique-chimie, SVT, technologie), annoncées deux mois avant : 30 minutes et 10 points chacune, sur la même copie."]
];

function ligneExamen(x) {
  const m = matiere(x.matiere);
  const n = NoteEx.lire(x.id);
  const chs = (x.cours || []).map(chapitre).filter(Boolean);
  return `<div class="sess${n !== null ? ' fait' : ''}">
    <a class="row" href="#/examen/${x.id}">
      <span class="pill" style="${pastille(m)}">${n !== null ? '✓' : x.numero}</span>
      <span class="txt"><b>Sujet ${x.numero} · ${esc(x.titre)}</b><small>${[esc(x.duree), fmtPts(x.points), chs.map(c => esc(c.numero)).join(', '), n !== null ? `ma note ${String(noteSur20(x, n)).replace('.', ',')}/20` : ''].filter(Boolean).join(' · ')}</small></span>
      ${chevron}</a>
    <nav class="sesslinks" aria-label="Sujet ${x.numero}"><a class="p-ess" href="#/examen/${x.id}">Sujet</a><a class="p-cor" href="#/corrige/${x.id}">Corrigé et méthode</a>${
      chs.map(c => `<a class="cours" href="#/chapitre/${c.id}">${esc(c.numero)} · ${esc(c.titre)}</a>`).join('')}<a class="imp" href="#/examen/${x.id}/imprimer">${ICONE_IMP}PDF</a></nav>
  </div>`;
}
function ligneExamenCourte(x) {
  const m = matiere(x.matiere);
  return `<button class="row" onclick="go('#/examen/${x.id}')">
    <span class="pill" style="${pastille(m)}">${x.numero}</span>
    <span class="txt"><b>${esc(NOM_EX[x.matiere] || m.nom)} · sujet ${x.numero}</b><small>${esc(x.titre)} · ${esc(x.duree)}</small></span>
    ${chevron}</button>`;
}

function carteExamens() {
  if (!EXAMENS.length) return '';
  const faits = EXAMENS.filter(x => NoteEx.lire(x.id) !== null).length;
  const mats = ORDRE_EX.filter(id => examensDe(id).length).map(id => matiere(id).nom);
  return `<a class="glass hero" href="#/examens">
      <span class="flag"><i class="dot" style="background:#FF9F0A"></i>Examens blancs · ${EXAMENS.length} sujets</span>
      <h3>Examens blancs du brevet</h3>
      <p class="chapline">Trois sujets par matière, au format officiel 2027, sur les chapitres du 1er trimestre. Corrigés et méthode de rédaction.</p>
      <p class="when">${faits} sujet${faits > 1 ? 's' : ''} corrigé${faits > 1 ? 's' : ''} sur ${EXAMENS.length} · ${esc(mats.join(', '))}</p>
    </a>`;
}

function vueExamens() {
  const mats = ORDRE_EX.filter(id => examensDe(id).length);
  let html = `<h1 class="title">Examens blancs</h1>
    <p class="subtitle">Trois sujets par matière, au format des épreuves du brevet 2027, sur les chapitres du 1<sup>er</sup> trimestre.</p>`;
  if (!mats.length) return html + `<div class="glass"><p class="empty">Les sujets arrivent bientôt.</p></div>`;
  html += `<div class="chap"><div class="chap-main">`;
  html += `<div class="filtres" role="group" aria-label="Filtrer par matière">` +
    ['', ...mats].map(id => `<button class="chipf${filtreEx === id ? ' on' : ''}" onclick="filtrerEx('${id}')"${id ? ` style="--c:${matiere(id).couleur}"` : ''}>${id ? esc(matiere(id).nom) : 'Toutes les matières'}</button>`).join('') + `</div>`;
  for (const id of mats) {
    if (filtreEx && filtreEx !== id) continue;
    const l = examensDe(id);
    const x0 = l[0];
    html += `<h2 class="section" id="ex-${id}">${esc(NOM_EX[id])} <small>· ${esc(x0.duree)} · ${fmtPts(x0.points)}</small></h2>
      <div class="glass sesslist">${l.map(ligneExamen).join('')}</div>`;
  }
  html += `</div><aside class="chap-side">
    <h2 class="section">Passer un examen blanc</h2>
    <div class="glass card keycard"><ol class="etapes">
      <li>Se mettre <b>en conditions réelles</b> : sans le cours, une copie, et le chronomètre de la page du sujet.</li>
      <li>Lire <b>tout le sujet</b> avant de commencer, puis traiter les questions dans l'ordre.</li>
      <li>Rédiger des <b>phrases complètes</b> : la maîtrise de la langue compte dans toutes les épreuves.</li>
      <li>Ouvrir le <b>corrigé</b> seulement à la fin, se corriger avec le barème, puis noter sa note.</li>
      <li>Relire le <b>cours</b> et la <b>méthode</b> liés à chaque erreur (liens sous chaque sujet).</li>
    </ol></div>
    <h2 class="section">Les épreuves du brevet 2027</h2>
    <div class="glass card epreuves">${EPREUVES_2027.map(([mid, nom, d, t]) =>
      `<div><b><i class="dot" style="background:${matiere(mid).couleur}"></i>${esc(nom)} <span>${esc(d)}</span></b><p>${esc(t)}</p></div>`).join('')}</div>
    <p class="note-ajout">Format d'après la note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026), qui définit les épreuves à partir de la session 2027, les sujets officiels de 2026 et les sujets de référence publiés sur Éduscol. La maîtrise de la langue (orthographe, syntaxe, lexique, organisation du propos) compte dans chaque épreuve, pour 2 points au moins. Sujets d'entraînement, non officiels.</p>
  </aside></div>`;
  return html;
}
function filtrerEx(id) { filtreEx = id; rendre(); }

/* ---------- la page de garde et le sujet ---------- */
function minutesDuree(t) {
  const h = /(\d+)\s*h\s*(\d*)/.exec(t || '');
  return h ? Number(h[1]) * 60 + Number(h[2] || 0) : parseInt(t, 10) || 0;
}

function vueExamen(id) {
  const x = examen(id);
  if (!x) return `<div class="glass"><p class="empty">Ce sujet n'existe pas.<br><a href="#/examens" style="color:var(--blue)">Retour aux examens blancs</a></p></div>`;
  const m = matiere(x.matiere);
  const chs = (x.cours || []).map(chapitre).filter(Boolean);
  const meths = (x.methodes || []).map(chapitre).filter(Boolean);
  const total = x.matiere === 'histoire' ? 'Histoire-géographie : 40 points · EMC : 20 points' : `Sujet noté sur ${fmtPts(x.points)}`;
  let html = fil([['Accueil', '#/'], ['Examens blancs', '#/examens'], [`${NOM_EX[x.matiere] || m.nom} · sujet ${x.numero}`, null]])
    + `<div class="ex-outils">
        <div class="chrono" id="chrono" data-min="${minutesDuree(x.duree)}"><span id="chronotxt">0:00:00 / ${esc(x.duree)}</span>
          <button onclick="chrono('go')" id="chronobtn">Démarrer</button><button onclick="chrono('raz')">Remettre à zéro</button></div>
        <div class="actions">
          <button class="btn quiet imp" onclick="window.print()">${ICONE_IMP}Imprimer / PDF</button>
          <button class="btn ghost" onclick="go('#/corrige/${x.id}')">Corrigé et méthode</button>
        </div>
      </div>
      <article class="copie-sujet" style="--mc:${m.couleur}">
        <header class="garde">
          <p class="g-dnb">DIPLÔME NATIONAL DU BREVET</p>
          <p class="g-sess">Sujet d'entraînement · format de la session 2027</p>
          <h1>${esc(x.epreuve)}</h1>
          <p class="g-serie">Série générale</p>
          <p class="g-titre">Sujet ${x.numero} : ${esc(x.titre)}</p>
          <p class="g-duree">Durée : ${esc(x.duree)} · ${esc(total)}</p>
          <ul class="g-lignes">${(x.garde || []).map(l => `<li>${esc(l)}</li>`).join('')}</ul>
        </header>
        ${x.parties.map((p, i) => `<section class="ex-partie${p.type === 'dictee' ? ' dictee' : ''}" id="p${i + 1}">
          <h2>${esc(p.titre)}${p.points && !/\bpoints?\b/.test(p.titre) ? ` <span class="pts">(${ptsPartie(x, i)})</span>` : ''}</h2>
          ${p.type === 'dictee' ? outilDictee(x) : ''}${p.html}</section>`).join('')}
        ${x.annexe ? `<section class="ex-partie annexe" id="annexe"><h2>ANNEXE <span class="pts">(à rendre avec la copie)</span></h2>${x.annexe}</section>` : ''}
        <p class="ex-fin">Fin du sujet</p>
      </article>
      <div class="actions ex-bas"><button class="btn" onclick="go('#/corrige/${x.id}')">Voir le corrigé et la méthode</button></div>`;
  if (chs.length || meths.length) {
    html += `<h2 class="section">Revoir avant ou après</h2><div class="glass list">${[...chs, ...meths].map(ligneChapitre).join('')}</div>`;
  }
  return html;
}

/* ---------- le chronomètre ---------- */
const Chrono = { debut: 0, cumul: 0, marche: false, tic: null };
function chronoAffiche() {
  const z = document.getElementById('chronotxt');
  const box = document.getElementById('chrono');
  if (!z || !box) { clearInterval(Chrono.tic); Chrono.tic = null; return; }
  const s = Math.floor((Chrono.cumul + (Chrono.marche ? Date.now() - Chrono.debut : 0)) / 1000);
  const h = Math.floor(s / 3600), mi = Math.floor(s / 60) % 60, se = s % 60;
  const max = Number(box.dataset.min) * 60;
  z.textContent = `${h}:${String(mi).padStart(2, '0')}:${String(se).padStart(2, '0')} / ${duree2(max / 60)}`;
  box.classList.toggle('depasse', max > 0 && s > max);
}
const duree2 = n => n >= 60 ? `${Math.floor(n / 60)} h ${String(n % 60).padStart(2, '0')}` : `${n} min`;
function chrono(action) {
  const b = document.getElementById('chronobtn');
  if (action === 'raz') { Chrono.marche = false; Chrono.cumul = 0; }
  else if (action === 'affiche') { /* retour sur la page : on remet juste l'affichage */ }
  else if (Chrono.marche) { Chrono.cumul += Date.now() - Chrono.debut; Chrono.marche = false; }
  else { Chrono.debut = Date.now(); Chrono.marche = true; }
  if (b) b.textContent = Chrono.marche ? 'Pause' : Chrono.cumul ? 'Reprendre' : 'Démarrer';
  if (!Chrono.tic) Chrono.tic = setInterval(chronoAffiche, 1000);
  chronoAffiche();
}

/* ---------- la dictée, lue par la synthèse vocale du navigateur ---------- */
const PONCT = { ',': 'virgule', '.': 'point', ';': 'point-virgule', ':': 'deux-points', '!': "point d'exclamation",
  '?': "point d'interrogation", '…': 'points de suspension', '«': 'ouvrez les guillemets', '»': 'fermez les guillemets',
  '(': 'ouvrez la parenthèse', ')': 'fermez la parenthèse', '—': 'tiret' };
let jetonDictee = 0;
function outilDictee(x) {
  if (!x.dictee) return '';
  const peut = 'speechSynthesis' in window;
  return `<div class="dictee-outil">
    <p><b>Mots écrits au tableau :</b> ${(x.dictee.mots || []).map(esc).join(' · ') || '—'}<br><span class="source">${esc(x.dictee.source || '')}</span></p>
    ${peut ? `<div class="actions">
        <button class="btn quiet" onclick="dicter('${x.id}', 1)">1. Lecture</button>
        <button class="btn" onclick="dicter('${x.id}', 2)">2. Dictée</button>
        <button class="btn quiet" onclick="dicter('${x.id}', 3)">3. Relecture</button>
        <button class="btn ghost" onclick="arreterDictee()">Arrêter</button></div>
      <p class="aide">Le navigateur lit le texte comme le surveillant : d'abord une lecture complète, puis la dictée groupe par groupe en annonçant la ponctuation, enfin une relecture. Écris une ligne sur deux. Le texte est sur la page du corrigé.</p>`
      : `<p class="aide">Demande à quelqu'un de te dicter le texte : il est sur la page du corrigé.</p>`}
  </div>`;
}
function voixFr() {
  const v = window.speechSynthesis.getVoices();
  return v.find(x => /^fr[-_]FR/i.test(x.lang) && /google|amélie|thomas|audrey|marie/i.test(x.name)) || v.find(x => /^fr[-_]FR/i.test(x.lang)) || v.find(x => /^fr/i.test(x.lang)) || null;
}
/* groupes de 3 à 6 mots, coupés à la ponctuation */
function groupesDictee(texte) {
  const jetons = texte.replace(/\s+/g, ' ').match(/[«»()—…]|[.,;:!?]|[^\s.,;:!?«»()—…]+/g) || [];
  const groupes = [];
  let mots = [];
  const pousser = p => { if (mots.length || p) groupes.push({ mots: mots.join(' '), ponct: p || '' }); mots = []; };
  for (const j of jetons) {
    if (PONCT[j]) pousser(j);
    else { mots.push(j); if (mots.length >= 5) pousser(''); }
  }
  pousser('');
  return groupes.filter(g => g.mots || g.ponct);
}
function dire(txt, vitesse) {
  return new Promise(ok => {
    const u = new SpeechSynthesisUtterance(txt);
    u.lang = 'fr-FR'; u.rate = vitesse;
    const v = voixFr(); if (v) u.voice = v;
    u.onend = ok; u.onerror = ok;
    window.speechSynthesis.speak(u);
  });
}
const pause = ms => new Promise(ok => setTimeout(ok, ms));
async function dicter(id, etape) {
  const x = examen(id);
  if (!x || !x.dictee || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const moi = ++jetonDictee;
  const texte = x.dictee.texte;
  if (etape !== 2) { await dire(texte, etape === 1 ? 0.9 : 0.8); return; }
  for (const g of groupesDictee(texte)) {
    if (moi !== jetonDictee) return;
    if (g.mots) await dire(g.mots, 0.72);
    if (moi !== jetonDictee) return;
    if (g.ponct) await dire(PONCT[g.ponct], 0.9);
    const n = g.mots ? g.mots.split(' ').length : 0;
    await pause(900 + n * 750);
  }
}
function arreterDictee() { jetonDictee++; if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

/* ---------- le corrigé ---------- */
function vueCorrige(id) {
  const x = examen(id);
  if (!x) return `<div class="glass"><p class="empty">Ce corrigé n'existe pas.<br><a href="#/examens" style="color:var(--blue)">Retour aux examens blancs</a></p></div>`;
  const m = matiere(x.matiere);
  const chs = (x.cours || []).map(chapitre).filter(Boolean);
  const meths = (x.methodes || []).map(chapitre).filter(Boolean);
  const n = NoteEx.lire(x.id);
  let html = fil([['Accueil', '#/'], ['Examens blancs', '#/examens'], [`${NOM_EX[x.matiere] || m.nom} · sujet ${x.numero}`, '#/examen/' + x.id], ['Corrigé', null]])
    + `<span class="flag chapflag" style="margin:12px 0 0"><i class="dot" style="background:${m.couleur}"></i>${esc(NOM_EX[x.matiere] || m.nom)} · sujet ${x.numero} · corrigé</span>
    <h1 class="title">${esc(x.titre)}</h1>
    <p class="subtitle">Réponses attendues, explications et méthode de rédaction. Barème : ${fmtPts(x.points)}${x.pointsRedaction ? `, dont ${fmtPts(x.pointsRedaction)} pour la clarté des raisonnements et la rédaction` : ''}.</p>
    <nav class="sommaire-s">${x.corrige.map((c, i) => `<a class="p-ess" href="#/corrige/${x.id}/c${i + 1}">${esc(c.titre)}</a>`).join('')}<a class="p-cor" href="#/corrige/${x.id}/methode">Méthode de rédaction</a><a class="imp" href="#/examen/${x.id}">Revoir le sujet</a></nav>
    <div class="chap"><div class="chap-main corrige-ex" style="--mc:${m.couleur}">`;
  x.corrige.forEach((c, i) => {
    const p = x.parties[i] || {};
    html += `<h2 class="section" id="c${i + 1}">${esc(c.titre)}${p.points && !/\bpoints?\b/.test(c.titre) ? ` <small>· ${ptsPartie(x, i)}</small>` : ''}</h2>`;
    if (p.type === 'dictee' && x.dictee) {
      html += `<div class="glass card dictee-texte"><p class="mots">Au tableau : ${(x.dictee.mots || []).map(esc).join(' · ')}</p><p class="dtexte">${esc(x.dictee.texte)}</p><p class="source">${esc(x.dictee.source)}</p></div>`;
    }
    html += `<div class="glass card fiche-c">${c.html}</div>`;
  });
  html += `<h2 class="section" id="methode">Méthode de rédaction</h2><div class="glass card keycard fiche-c">${x.methode}</div>`;
  html += `<h2 class="section">Ma note</h2><div class="glass card">
      <p class="progtxt">Corrige ta copie avec le barème, puis note ta note sur ${fmtPts(x.points)} : elle s'affiche dans la liste des examens.</p>
      <div class="note-ex"><input id="noteex" type="number" inputmode="decimal" min="0" max="${x.points}" step="0.5" value="${n !== null ? n : ''}" aria-label="Ma note"> <span>/ ${x.points}</span>
      <button class="btn" onclick="enregistrerNote('${x.id}')">Enregistrer</button>${n !== null ? `<button class="btn quiet" onclick="enregistrerNote('${x.id}', true)">Effacer</button>` : ''}</div>
      <p class="progtxt" id="notemsg">${n !== null ? `Soit ${String(noteSur20(x, n)).replace('.', ',')} sur 20.` : ''}</p></div>`;
  html += `</div><aside class="chap-side">`;
  if (chs.length) html += `<h2 class="section">Le cours à revoir</h2><div class="glass list sidelist">${chs.map(ligneChapitre).join('')}</div>`;
  if (meths.length) html += `<h2 class="section">Les fiches méthode</h2><div class="glass list sidelist">${meths.map(ligneChapitre).join('')}</div>`;
  const autres = examensDe(x.matiere).filter(y => y.id !== x.id);
  if (autres.length) html += `<h2 class="section">Les autres sujets</h2><div class="glass list sidelist">${autres.map(ligneExamenCourte).join('')}</div>`;
  html += `</aside></div>`;
  return html;
}
function enregistrerNote(id, effacer) {
  const x = examen(id);
  const z = document.getElementById('noteex');
  if (!x || !z) return;
  if (effacer) { NoteEx.ecrire(id, null); rendre(); return; }
  const v = parseFloat(String(z.value).replace(',', '.'));
  const msg = document.getElementById('notemsg');
  if (!isFinite(v) || v < 0 || v > x.points) { if (msg) msg.textContent = `Entre une note entre 0 et ${x.points}.`; return; }
  NoteEx.ecrire(id, v);
  if (msg) msg.textContent = `Enregistré : ${String(noteSur20(x, v)).replace('.', ',')} sur 20.`;
}

/* =========================================================
   IMPRESSION — une feuille A4 recto verso, à imprimer ou à
   enregistrer en PDF depuis la fenêtre d'impression.
   Recto : le rappel de cours. Verso : le QCM (et les exercices
   pour une session). Le corrigé reste à l'écran.
   Chaque face est ajustée pour tenir sur une page : la taille
   du texte baisse jusqu'à ce que tout rentre.
   ========================================================= */
const SITE = 'flav256.github.io/revision-brevet';
const QCM_IMP_MAX = 20;   // questions de quiz imprimées au plus pour un chapitre

function teteFeuille(m, sur, titre, face) {
  return `<header class="f-tete">
    <div><span class="f-mat">${esc(m.nom)} · ${esc(sur)}</span><h1>${esc(titre)}</h1></div>
    <span class="f-face">${esc(face)}</span></header>`;
}
function feuille(m, tete, corps, pied, opts = {}) {
  return `<section class="feuille" style="--mc:${m.couleur}" data-max="${opts.max || 11}" data-min="${opts.min || 7.5}">
    ${tete}<div class="f-corps">${corps}</div>
    <footer class="f-pied"><span>${pied}</span><span>révision brevet · ${SITE}</span></footer></section>`;
}
/* brut : le texte des QCM de session contient du HTML ; celui des quiz de chapitre est du texte simple */
function qcmImprime(questions, brut, coupe) {
  const t = x => brut ? x : esc(x);
  return `<ol class="f-qcm"${coupe ? ' data-coupe' : ''}>${questions.map(q => `<li><p>${t(q.q)}</p><ul>${
    q.choix.map((c, k) => `<li><i></i><b>${LETTRES[k]}</b><span>${t(c)}</span></li>`).join('')}</ul></li>`).join('')}</ol>`;
}

function feuillesSession(s) {
  const m = matiere(s.matiere);
  const cours = (s.cours || []).map(chapitre).filter(Boolean);
  const sur = 'Révision' + (cours.length ? ' · ' + cours.map(c => c.numero).join(', ') : '');
  const ess = s.blocs.find(b => b.type === 'html' && /essentiel/i.test(b.titre));
  const exo = s.blocs.find(b => b.type === 'html' && !/essentiel/i.test(b.titre));
  const q = qcmDe(s);
  const recto = feuille(m, teteFeuille(m, sur, s.titre, "Recto · L'essentiel du cours"),
    `<div class="f-cle fiche-b">${ess ? ess.html : ''}</div>`,
    cours.length ? 'Le cours complet : ' + cours.map(c => esc(c.titre)).join(' · ') : 'Le cours complet sur le site', { max: 12.5 });
  const verso = feuille(m, teteFeuille(m, sur, s.titre, 'Verso · QCM et exercices'),
    (q ? `<h2>QCM <small>une seule bonne réponse : cocher la case</small></h2>${qcmImprime(q.questions, true)}` : '')
    + (exo ? `<h2>${esc(exo.titre)} <small>au brouillon ou sur une copie</small></h2><div class="fiche-b f-exo">${exo.html}</div>` : ''),
    `Corrigé à l'écran : ${SITE}/#/session/${s.id}/corrige`, { max: 11.5 });
  return recto + verso;
}

function feuillesChapitre(c) {
  const m = matiere(c.matiere);
  const sur = c.fiche ? 'Méthode' : [c.numero, c.zone].filter(Boolean).join(' · ');
  let corps = `<h2>${c.fiche ? 'Les réflexes' : "L'essentiel"}</h2><div class="f-cle"><ul>${(c.essentiel || []).map(p => `<li>${p}</li>`).join('')}</ul></div>`;
  if (c.fiche) {
    corps += `<h2>La méthode</h2><div class="f-sections">${(c.sections || []).map(sec =>
      `<div class="f-sec"><h3>${esc(sec.titre)}</h3>${sec.etapes
        ? `<ol>${sec.points.map(p => `<li>${p}</li>`).join('')}</ol>`
        : `<ul>${sec.points.map(p => `<li>${p}</li>`).join('')}</ul>`}</div>`).join('')}</div>`;
  } else {
    if (c.mots && c.mots.length) corps += `<h2>Le vocabulaire</h2><div class="f-mots">${c.mots.map(([mot, def]) =>
      `<p><b>${esc(mot)}</b> : ${esc(def)}</p>`).join('')}</div>`;
    if (c.dates && c.dates.length) corps += `<h2>Les dates</h2><div class="f-mots f-dates">${c.dates.map(([d, t]) =>
      `<p><b>${esc(d)}</b> ${esc(t)}</p>`).join('')}</div>`;
  }
  const recto = feuille(m, teteFeuille(m, sur, c.titre, c.fiche ? 'Recto · La méthode' : 'Recto · Rappel de cours'),
    corps, `Le cours complet : ${SITE}/#/chapitre/${c.id}`, { max: 12 });
  const qs = (c.quiz || []).slice(0, QCM_IMP_MAX);
  if (!qs.length) return recto;
  const verso = feuille(m, teteFeuille(m, sur, c.titre, 'Verso · QCM'),
    `<h2>QCM <small>une seule bonne réponse : cocher la case · <span class="f-nq">${qs.length} questions</span></small></h2>${qcmImprime(qs, false, true)}`,
    `Corrigé à l'écran : ${SITE}/#/imprimer/chapitre/${c.id}/corrige`, { max: 11.5, min: 8 });
  return recto + verso;
}

function vueImprimer(type, id) {
  const s = type === 'session' ? session(id) : null;
  const c = type === 'chapitre' ? chapitre(id) : null;
  if (!s && !c) return { html: `<div class="glass"><p class="empty">Cette fiche n'existe pas.<br>
    <a href="#/" style="color:var(--blue)">Retour à l'accueil</a></p></div>`, titre: NOM, retour: '#/' };
  const m = matiere((s || c).matiere);
  const retour = s ? '#/session/' + s.id : '#/chapitre/' + c.id;
  const verso = s ? 'le QCM et les exercices' : (c.quiz && c.quiz.length ? 'le QCM' : '');
  const html = fil([['Accueil', '#/'], [s ? 'Révision' : m.nom, s ? '#/revision' : '#/matiere/' + m.id], [(s || c).titre, retour], ['Imprimer', null]])
    + `<div class="glass card imp-outils">
      <h1 class="title">Imprimer ou enregistrer en PDF</h1>
      <p>Une feuille A4 : au recto ${s ? "l'essentiel du cours" : c.fiche ? 'la méthode' : 'le rappel de cours'}${verso ? ', au verso ' + verso : ''}. Le corrigé n'est pas imprimé : il reste à l'écran, en bas de cette page.</p>
      <div class="actions">
        <button class="btn" onclick="window.print()">${ICONE_IMP}Imprimer / Enregistrer en PDF</button>
        <button class="btn quiet" onclick="go('${retour}')">Retour à la fiche</button>
      </div>
      <p class="aide">Dans la fenêtre d'impression : choisir « Enregistrer au format PDF » pour obtenir le fichier, format A4, échelle 100 %, et « recto verso » si l'imprimante le permet.</p>
    </div>
    <div class="apercu"><div class="feuilles">${s ? feuillesSession(s) : feuillesChapitre(c)}</div></div>
    <div class="imp-corr">
      <h2 class="section" id="corrige">Corrigé <small>· à l'écran seulement, non imprimé</small></h2>
      <div class="glass card fiche-b corrige" id="corrimp"><p class="cache">Fais d'abord le QCM${s ? ' et les exercices' : ''} sur la feuille, puis affiche le corrigé.</p>
        <button class="btn ghost" onclick="montrerCorrImp()">Afficher le corrigé</button></div>
    </div>`;
  return { html, retour, titre: `${m.nom} - ${(s || c).titre} - fiche ${s ? 'de révision' : c.fiche ? 'méthode' : 'de cours'}` };
}

function montrerCorrImp() {
  const z = document.getElementById('corrimp');
  if (!z) return;
  const [, type, id] = (location.hash || '').replace(/^#\/?/, '').split('/');
  if (type === 'session') { const s = session(id); if (s) z.innerHTML = corrigeHTML(s); return; }
  const c = chapitre(id);
  if (!c) return;
  /* seulement les questions imprimées (la feuille a pu en retirer pour tenir sur une page) */
  const n = document.querySelectorAll('.f-qcm > li').length || Math.min((c.quiz || []).length, QCM_IMP_MAX);
  z.innerHTML = `<h4>QCM</h4><ol class="repqcm">${(c.quiz || []).slice(0, n).map(q =>
    `<li><b>${LETTRES[q.bonne]})</b> ${esc(q.choix[q.bonne])}${q.why ? ` <span class="pourquoi">· ${esc(q.why)}</span>` : ''}</li>`).join('')}</ol>`;
}

function ajusterFeuilles() {
  document.querySelectorAll('.feuille').forEach(f => {
    const corps = f.querySelector('.f-corps');
    const deborde = () => corps.scrollHeight > corps.clientHeight + 1;
    let t = Number(f.dataset.max) || 11;
    const min = Number(f.dataset.min) || 7.5;
    f.style.fontSize = t + 'pt';
    while (deborde() && t > min) { t = Math.round((t - 0.25) * 100) / 100; f.style.fontSize = t + 'pt'; }
    /* un quiz trop long : on retire les dernières questions */
    const qs = [...corps.querySelectorAll('.f-qcm[data-coupe] > li')];
    let n = qs.length;
    while (deborde() && n > 6) qs[--n].remove();
    if (n < qs.length) { const z = f.querySelector('.f-nq'); if (z) z.textContent = n + ' questions'; }
    f.classList.toggle('deborde', deborde());
  });
  echelleApercu();
}

/* à l'écran, l'aperçu A4 est réduit pour tenir dans la largeur */
function echelleApercu() {
  const a = document.querySelector('.apercu');
  const fs = a && a.querySelector('.feuilles');
  if (!fs) return;
  fs.style.transform = '';
  const k = Math.min(1, a.clientWidth / fs.offsetWidth);
  if (k < 1) fs.style.transform = `scale(${k})`;
  a.style.height = Math.ceil(fs.offsetHeight * k) + 'px';
}
window.addEventListener('resize', () => { if (document.querySelector('.apercu')) echelleApercu(); });

/* =========================================================
   ROUTEUR
   ========================================================= */
const PROFONDEUR = { '': 0, 'calendrier': 0, 'revision': 0, 'brevet': 0, 'examens': 0, 'methodes': 0, 'matiere': 1, 'session': 1, 'examen': 1, 'corrige': 2, 'chapitre': 2, 'quiz': 3, 'imprimer': 3, 'carte': 3 };
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
  } else if (vue === 'revision' || vue === 'brevet') {   // « brevet » : ancienne adresse, gardée
    html = vueRevision(); onglet = 'revision';
    titre = 'Révision · ' + NOM;
  } else if (vue === 'carte') {
    const c = chapitre(parts[1]);
    html = vueCarte(parts[1]); retour = c ? '#/chapitre/' + c.id : '#/';
    if (c) titre = `Carte mentale - ${c.titre} · ${NOM}`;
    apres = () => { dessinerCarte(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => dessinerCarte()); };
  } else if (vue === 'examens') {
    html = vueExamens(); onglet = 'examens';
    titre = 'Examens blancs · ' + NOM;
  } else if (vue === 'examen') {
    const x = examen(parts[1]);
    html = vueExamen(parts[1]); onglet = 'examens'; retour = '#/examens';
    if (x) titre = `${matiere(x.matiere).nom} - sujet ${x.numero} - ${x.titre}`;
    if (parts[2] === 'imprimer') apres = () => setTimeout(() => window.print(), 400);
    else if (Chrono.marche || Chrono.cumul) apres = () => { chrono('affiche'); };
  } else if (vue === 'corrige') {
    const x = examen(parts[1]);
    html = vueCorrige(parts[1]); onglet = 'examens'; retour = x ? '#/examen/' + x.id : '#/examens';
    if (x) titre = `${matiere(x.matiere).nom} - sujet ${x.numero} - corrigé`;
    if (parts[2]) apres = () => allerA(parts[2]);
  } else if (vue === 'imprimer') {
    const r = vueImprimer(parts[1], parts[2]);
    html = r.html; titre = r.titre; retour = r.retour;
    onglet = parts[1] === 'session' ? 'revision' : 'accueil';
    apres = () => { ajusterFeuilles(); if (parts[3] === 'corrige') { montrerCorrImp(); allerA('corrige'); } };
  } else if (vue === 'methodes') {
    html = vueMethodes(); onglet = 'methodes';
    titre = 'Méthodes · ' + NOM;
  } else if (vue === 'session') {
    const s = session(parts[1]);
    html = vueSession(parts[1]); onglet = 'revision'; retour = '#/revision';
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
    if (/^#\/(session\/[^/]+|methodes|brevet|revision)/.test(hashPrecedent)) {
      retour = hashPrecedent.replace(/^(#\/session\/[^/]+).*$/, '$1');
      onglet = /^#\/methodes/.test(hashPrecedent) ? 'methodes' : 'revision';
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
  /* marges de la page imprimée : aucune pour les fiches A4 (déjà mises en page), normales sinon */
  let stylePage = document.getElementById('stylepage');
  if (!stylePage) { stylePage = document.createElement('style'); stylePage.id = 'stylepage'; document.head.appendChild(stylePage); }
  stylePage.textContent = vue === 'imprimer' ? '@page { size: A4; margin: 0; }'
    : vue === 'carte' ? '@page { size: A4 landscape; margin: 10mm; }' : '@page { size: A4; margin: 14mm 13mm; }';
  if (vue !== 'examen') arreterDictee();
  carteImprimee = false;   // la classe « impression » du body est effacée juste en dessous
  flottant(vue === 'carte' && CARTES[parts[1]] ? fabCarte() : '');
  const btn = document.getElementById('back');
  btn.style.display = retour ? 'inline-flex' : 'none';
  btn.onclick = () => { if (retour) location.hash = retour; };
  document.querySelectorAll('.tabbar a, .topnav a').forEach(a => a.classList.toggle('on', a.dataset.tab === onglet));
  if (document.body) document.body.className = 'vue-' + (vue || 'accueil') + (vue === '' ? ' accueil' : '');

  peindre(html, dir, apres, vue === '');
}

window.addEventListener('hashchange', rendre);
const barreHaut = document.querySelector('.topbar');
/* bouton flottant « haut de page » : il apparaît quand on est descendu.
   Il est posé directement dans le body, hors de la vue animée, pour rester fixe à l'écran. */
const btnHaut = document.createElement('button');
btnHaut.type = 'button';
btnHaut.className = 'haut-page';
btnHaut.title = 'Haut de page';
btnHaut.setAttribute('aria-label', 'Revenir en haut de la page');
btnHaut.tabIndex = -1;
btnHaut.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5.5M5.5 12 12 5.5 18.5 12"/></svg>';
btnHaut.onclick = () => window.scrollTo({ top: 0, behavior: SOBRE ? 'auto' : 'smooth' });
document.body.appendChild(btnHaut);
function majBtnHaut() {
  const visible = window.scrollY > Math.max(450, window.innerHeight * 0.75);
  if (visible !== btnHaut.classList.contains('visible')) {
    btnHaut.classList.toggle('visible', visible);
    btnHaut.tabIndex = visible ? 0 : -1;   // caché : on ne peut pas l'atteindre au clavier
  }
}

window.addEventListener('scroll', () => {
  if (barreHaut) barreHaut.classList.toggle('scrolled', window.scrollY > 4);
  majBtnHaut();
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
