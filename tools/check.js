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
for (const f of fichiers) {
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

const nouveaux = DATA.chapitres.filter(c => c.ajout);
console.log(`${DATA.chapitres.length} chapitres (dont ${nouveaux.length} ajoutés), ${B ? B.sessions.length + ' sessions' : 'pas de brevet chargé'}`);
for (const c of (process.argv.length > 2 ? nouveaux : [])) {
  const rep = [0, 0, 0, 0];
  (c.quiz || []).forEach(q => rep[q.bonne]++);
  console.log(`  ${c.id.padEnd(10)} ${c.fiche ? 'méthode ' : 'chapitre'} ${(c.zone || '').padEnd(34)} ess ${c.essentiel.length} · sect ${c.sections.length} · mots ${(c.mots || []).length} · dates ${(c.dates || []).length} · quiz ${(c.quiz || []).length} (bonnes a/b/c/d ${rep.join('/')})  ${c.titre}`);
}
if (erreurs.length) { console.error('\n' + erreurs.length + ' problème(s) :\n' + erreurs.join('\n')); process.exit(1); }
console.log('OK');
