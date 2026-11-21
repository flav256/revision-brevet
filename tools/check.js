/* Vérifie les fichiers de contenu.
   Usage : node tools/check.js            (tout le site)
           node tools/check.js cours/x.js (data.js + ce fichier seulement)
   Charge les fichiers dans un bac à sable, comme le navigateur, puis
   contrôle le format de chaque chapitre, fiche méthode et session. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const racine = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
let fichiers = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]).filter(f => f !== 'app.js');
if (process.argv.length > 2) fichiers = ['data.js', ...process.argv.slice(2)];

const ctx = vm.createContext({ console });
const absents = [];
for (const f of fichiers) {
  /* un fichier d'examen pas encore écrit : on le signale sans bloquer */
  if (f.startsWith('examens/') && !fs.existsSync(path.join(racine, f))) { absents.push(f); continue; }
  const code = fs.readFileSync(path.join(racine, f), 'utf8');
  try { vm.runInContext(code, ctx, { filename: f }); }
  catch (e) { console.error('ERREUR de syntaxe dans', f, ':', e.message); process.exit(1); }
}
const DATA = vm.runInContext('DATA', ctx);
const erreurs = [];
const err = (id, m) => erreurs.push(`${id} : ${m}`);
const str = v => typeof v === 'string' && v.trim().length > 0;
const ids = new Set();
const matieres = new Set(DATA.matieres.map(m => m.id));

for (const c of DATA.chapitres) {
  const id = c.id || '(sans id)';
  if (!str(c.id)) err(id, 'id manquant');
  if (ids.has(c.id)) err(id, 'id en double');
  ids.add(c.id);
  if (!matieres.has(c.matiere)) err(id, 'matiere inconnue : ' + c.matiere);
  for (const k of ['numero', 'titre']) if (!str(c[k])) err(id, k + ' manquant');
  if (c.ajout && !str(c.zone)) err(id, 'zone manquante');
  if (!Array.isArray(c.essentiel) || !c.essentiel.every(str)) err(id, 'essentiel invalide');
  if (!Array.isArray(c.sections) || !c.sections.length) err(id, 'sections manquantes');
  else c.sections.forEach((s, i) => {
    if (!str(s.titre)) err(id, `section ${i} sans titre`);
    if (!Array.isArray(s.points) || !s.points.length || !s.points.every(str)) err(id, `section ${i} : points invalides`);
    if (s.exemple !== undefined && !str(s.exemple)) err(id, `section ${i} : exemple vide`);
  });
  for (const k of ['mots', 'dates']) if (c[k] !== undefined) {
    if (!Array.isArray(c[k]) || !c[k].every(p => Array.isArray(p) && p.length === 2 && p.every(str))) err(id, k + ' : paires [texte, texte] attendues');
    else if (c[k].some(p => /<[a-z\/]/i.test(p.join('')))) err(id, k + ' : pas de HTML (texte affiché tel quel)');
  }
  if (c.quiz !== undefined) {
    if (!Array.isArray(c.quiz)) err(id, 'quiz invalide');
    else c.quiz.forEach((q, i) => {
      if (!str(q.q) || !str(q.why)) err(id, `quiz ${i + 1} : q ou why manquant`);
      if (!Array.isArray(q.choix) || q.choix.length < 3 || !q.choix.every(str)) err(id, `quiz ${i + 1} : choix invalides`);
      else if (!Number.isInteger(q.bonne) || q.bonne < 0 || q.bonne >= q.choix.length) err(id, `quiz ${i + 1} : bonne hors limites`);
      else if (new Set(q.choix).size !== q.choix.length) err(id, `quiz ${i + 1} : choix en double`);
      if ([q.q, q.why, ...(q.choix || [])].some(t => /<[a-z\/]/i.test(String(t)))) err(id, `quiz ${i + 1} : pas de HTML dans le quiz (texte affiché tel quel)`);
    });
  }
}

const B = DATA.brevet;
if (B) {
  const sids = new Set();
  for (const s of B.sessions) {
    if (sids.has(s.id)) err(s.id, 'session en double');
    sids.add(s.id);
    for (const r of [...(s.cours || []), ...(s.methodes || [])]) if (!ids.has(r)) err(s.id, 'lien vers un chapitre inconnu : ' + r);
    for (const b of s.blocs) if (b.type === 'qcm') b.questions.forEach((q, i) => {
      if (!Number.isInteger(q.bonne)) err(s.id, `QCM ${i + 1} sans bonne réponse`);
    });
  }
  for (const r of B.methodes || []) if (!ids.has(r)) err('brevet', 'méthode inconnue : ' + r);
}

/* ---------- examens blancs ---------- */
const avert = [];
const E = DATA.examens || [];
const eids = new Set();
const MATS_EX = new Set(['francais', 'maths', 'histoire', 'svt', 'physique', 'techno']);
const equilibre = (h, t) => (h.match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length === (h.match(new RegExp('</' + t + '>', 'g')) || []).length;
for (const x of E) {
  const id = x.id || '(examen sans id)';
  if (!str(x.id) || eids.has(x.id)) err(id, 'id manquant ou en double');
  eids.add(x.id);
  if (!MATS_EX.has(x.matiere)) err(id, 'matière inconnue : ' + x.matiere);
  if (!Number.isInteger(x.numero)) err(id, 'numero manquant');
  for (const k of ['titre', 'epreuve', 'duree', 'methode']) if (!str(x[k])) err(id, k + ' manquant');
  if (typeof x.points !== 'number') err(id, 'points manquant');
  for (const r of [...(x.cours || []), ...(x.methodes || [])]) if (!ids.has(r)) err(id, 'chapitre inconnu : ' + r);
  if (!(x.cours || []).length) err(id, 'aucun chapitre couvert (cours)');
  if (!Array.isArray(x.garde) || !x.garde.every(str)) err(id, 'garde : liste de lignes attendue');
  if (!Array.isArray(x.parties) || !x.parties.length) { err(id, 'parties manquantes'); continue; }
  const somme = x.parties.reduce((n, p) => n + (p.points || 0), 0) + (x.pointsRedaction || 0);
  if (Math.abs(somme - x.points) > 1e-9) err(id, `points : parties + rédaction = ${somme}, total annoncé ${x.points}`);
  const tout = [...x.parties.map(p => p.html || ''), x.annexe || '', ...(x.corrige || []).map(c => c.html || ''), x.methode || ''];
  x.parties.forEach((p, i) => {
    if (!str(p.titre) || !str(p.html)) err(id, `partie ${i + 1} : titre ou html manquant`);
    const pts = [...(p.html || '').matchAll(/class="pts">\s*\((\d+(?:[.,]\d+)?)\s*points?\)/g)].map(m => parseFloat(m[1].replace(',', '.')));
    const s2 = pts.reduce((a, b) => a + b, 0);
    if (pts.length && Math.abs(s2 - (p.points || 0)) > 1e-9) avert.push(`${id} partie ${i + 1} : questions = ${s2} pts, partie = ${p.points} pts (vérifier)`);
  });
  tout.forEach((h, i) => { for (const t of ['div', 'table', 'ol', 'ul', 'svg', 'figure', 'blockquote']) if (!equilibre(h, t)) err(id, `bloc ${i + 1} : balises <${t}> non fermées`); });
  if (!Array.isArray(x.corrige) || x.corrige.length !== x.parties.length) err(id, 'corrigé : une entrée par partie attendue');
  else x.corrige.forEach((c, i) => { if (!str(c.titre) || !str(c.html)) err(id, `corrigé ${i + 1} vide`); });
  if (x.matiere === 'francais') {
    const d = x.dictee || {};
    if (!str(d.texte) || !str(d.source)) err(id, 'dictée : texte et source attendus');
    else {
      if (d.texte.length < 400 || d.texte.length > 900) avert.push(`${id} : dictée de ${d.texte.length} signes (≈ 600 attendus)`);
      if (x.parties.some(p => (p.html || '').includes(d.texte.slice(20, 60)))) err(id, 'le texte de la dictée apparaît dans le sujet');
    }
    if (!x.parties.some(p => p.type === 'dictee')) err(id, "aucune partie de type 'dictee'");
  }
  for (const m of tout.join(' ').matchAll(/src="([^"]+)"/g)) {
    if (!/^https?:/.test(m[1]) && !fs.existsSync(path.join(racine, m[1]))) err(id, 'image absente : ' + m[1]);
  }
}
if (absents.length) console.log('Examens pas encore écrits : ' + absents.join(', '));

/* ---------- cartes mentales ---------- */
const CARTES = DATA.cartes || {};
for (const [cid, carte] of Object.entries(CARTES)) {
  if (!ids.has(cid)) err('carte ' + cid, 'chapitre inconnu');
  const br = carte.branches || [];
  if (br.length < 3 || br.length > 6) err('carte ' + cid, `${br.length} branches (3 à 6 attendues)`);
  br.forEach((b, i) => {
    if (!str(b.titre) || !Array.isArray(b.feuilles) || !b.feuilles.length || !b.feuilles.every(str)) err('carte ' + cid, `branche ${i + 1} invalide`);
    else for (const f of b.feuilles) if (f.replace(/<[^>]+>/g, '').length > 60) avert.push(`carte ${cid} : feuille longue (${f.replace(/<[^>]+>/g, '').length} car.) : ${f}`);
  });
}

const nouveaux = DATA.chapitres.filter(c => c.ajout);
console.log(`${DATA.chapitres.length} chapitres (dont ${nouveaux.length} ajoutés), ${B ? B.sessions.length + ' sessions' : 'pas de brevet chargé'}, ${E.length} examens blancs, ${Object.keys(CARTES).length} cartes mentales`);
for (const x of E) console.log(`  ${x.id.padEnd(14)} ${String(x.points).padStart(3)} pts · ${x.parties.length} parties · ${x.cours.join(', ')} · ${x.titre}`);
if (avert.length) console.log('Avertissements :\n  ' + avert.join('\n  '));
for (const c of (process.argv.length > 2 ? nouveaux : [])) {
  const rep = [0, 0, 0, 0];
  (c.quiz || []).forEach(q => rep[q.bonne]++);
  console.log(`  ${c.id.padEnd(10)} ${c.fiche ? 'méthode ' : 'chapitre'} ${(c.zone || '').padEnd(34)} ess ${c.essentiel.length} · sect ${c.sections.length} · mots ${(c.mots || []).length} · dates ${(c.dates || []).length} · quiz ${(c.quiz || []).length} (bonnes a/b/c/d ${rep.join('/')})  ${c.titre}`);
}
if (erreurs.length) { console.error('\n' + erreurs.length + ' problème(s) :\n' + erreurs.join('\n')); process.exit(1); }
console.log('OK');
