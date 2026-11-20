/* =========================================================
   zones.js — les zones thématiques de chaque matière

   DATA.zones donne l'ordre d'affichage des zones dans une matière.
   Les chapitres d'origine (data.js, site llm révision) reçoivent
   ici leur zone, sans toucher à data.js. Les chapitres ajoutés
   (dossier cours/) portent leur zone directement.
   ========================================================= */
DATA.zones = {
  francais: ['Étude de la langue', 'Lecture et analyse de textes'],
  maths: ['Nombres et calculs', 'Géométrie', 'Fonctions', 'Algorithmique et programmation'],
  histoire: ['Histoire', 'Géographie'],
  svt: ['Le vivant et son évolution', "La planète Terre, l'environnement et l'action humaine"],
  physique: ['Organisation et transformations de la matière', "L'énergie et ses conversions"],
  techno: ['Informatique et réseaux', 'Design, innovation et conception'],
  espagnol: ['Unités']
};

(function () {
  const zoneOrigine = {
    'hg-ch1': 'Histoire', 'hg-ch2': 'Histoire',
    'fr-ch1': 'Étude de la langue', 'fr-ch3': 'Étude de la langue', 'fr-ch4': 'Étude de la langue',
    'fr-ch2': 'Lecture et analyse de textes', 'fr-ch5': 'Lecture et analyse de textes',
    'fr-ch6': 'Lecture et analyse de textes', 'fr-ch7': 'Lecture et analyse de textes',
    'fr-ch8': 'Lecture et analyse de textes',
    'ma-ch1': 'Nombres et calculs', 'ma-ch2': 'Géométrie', 'ma-ch3': 'Fonctions',
    'es-ch1': 'Unités', 'es-ch2': 'Unités'
  };
  DATA.chapitres.forEach(c => { if (!c.zone && zoneOrigine[c.id]) c.zone = zoneOrigine[c.id]; });
})();
