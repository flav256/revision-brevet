/* Aperçu rapide d'un fichier de cours : essentiel, titres de sections, quelques questions. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = vm.createContext({});
vm.runInContext('var DATA = { chapitres: [] };', ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', process.argv[2]), 'utf8'), ctx);
const strip = s => s.replace(/<[^>]+>/g, '');
for (const c of vm.runInContext('DATA', ctx).chapitres) {
  console.log(`\n### ${c.id} — ${c.titre} [${c.zone}] (${c.periode || ''})`);
  c.essentiel.forEach(e => console.log('  • ' + strip(e)));
  c.sections.forEach(s => console.log(`  § ${s.titre} (${s.points.length}${s.etapes ? ', étapes' : ''}${s.exemple ? ', exemple' : ''})`));
  (c.quiz || []).filter((_, i) => i % 4 === 0).forEach(q => console.log(`  ? ${q.q} → ${q.choix[q.bonne]}`));
}
