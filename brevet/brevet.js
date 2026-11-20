/* =========================================================
   brevet.js — le programme de révision du brevet blanc

   27 sessions, chacune : l'essentiel, un QCM, des exercices et
   le corrigé. « cours » et « methodes » donnent les id des
   chapitres du site à relire après la session.
   Les blocs sont du HTML : on peut les modifier directement.
   ========================================================= */
DATA.brevet = {
 "titre": "Brevet blanc",
 "sousTitre": "Programme de révision du lundi 16 au dimanche 22 novembre",
 "mode": [
  "Lire <b>l'essentiel</b> pendant le temps indiqué, puis le cacher.",
  "Faire le <b>QCM</b> sans regarder le cours : la correction s'affiche à chaque réponse.",
  "Faire les <b>exercices</b> au brouillon ou sur une copie.",
  "Afficher le <b>corrigé</b> en bas de la session, puis relire la partie du cours liée à chaque erreur (bouton « Revoir le cours »)."
 ],
 "epreuves": [
  {
   "matiere": "francais",
   "duree": "3 h",
   "detail": "Compréhension et analyse d'un texte, grammaire, réécriture, dictée, puis rédaction (imagination ou réflexion)."
  },
  {
   "matiere": "maths",
   "duree": "2 h",
   "detail": "Partie 1 : automatismes, 20 min sans calculatrice. Partie 2 : problèmes, 1 h 40 avec calculatrice. Calculs écrits, propriétés citées, phrase réponse avec unité."
  },
  {
   "matiere": "histoire",
   "duree": "2 h",
   "detail": "Analyse de documents, développement construit, repères et EMC."
  },
  {
   "matiere": "svt",
   "duree": "1 h",
   "nom": "Sciences",
   "detail": "Deux matières parmi physique-chimie, SVT et technologie : environ 30 minutes chacune."
  }
 ],
 "note": "Contenu rédigé d'après le programme de 3e. Si le cahier emploie d'autres mots ou d'autres exemples, garder ceux du cahier. Vérifier les horaires exacts sur la convocation du brevet blanc.",
 "methodes": [
  "fr-m1",
  "fr-m2",
  "fr-m3",
  "ma-m1",
  "ma-m2",
  "hg-m1",
  "hg-m2",
  "hg-m3",
  "svt-m1",
  "pc-m1",
  "te-m1"
 ],
 "sessions": [
  {
   "id": "lun-maths",
   "matiere": "maths",
   "date": "2026-11-16",
   "jour": "Lundi 16 novembre",
   "duree": "40 min",
   "titre": "Calcul numérique : fractions, puissances, écriture scientifique",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "10 min",
     "QCM"
    ],
    [
     "20 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<h4>Fractions</h4>\n<ul>\n<li><b>Additionner ou soustraire</b> : d'abord le même dénominateur. 2/3 + 1/4 = 8/12 + 3/12 = <b>11/12</b>.</li>\n<li><b>Multiplier</b> : numérateurs entre eux, dénominateurs entre eux. 2/3 × 5/7 = <b>10/21</b>.</li>\n<li><b>Diviser</b> : multiplier par l'inverse. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = <b>5/6</b>.</li>\n<li><b>Priorités</b> : parenthèses, puis × et ÷, puis + et −. Toujours simplifier le résultat.</li>\n</ul>\n<h4>Puissances</h4>\n<ul>\n<li>a<sup>n</sup> = a × a × … × a (n facteurs). a<sup>0</sup> = 1 et a<sup>−n</sup> = 1/a<sup>n</sup>.</li>\n<li>10<sup>4</sup> = 10 000 (4 zéros) ; 10<sup>−3</sup> = 0,001 (3 chiffres après la virgule).</li>\n<li>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> · a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup> · (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup>.</li>\n<li>Piège : (−2)<sup>2</sup> = 4 mais −2<sup>2</sup> = −4.</li>\n</ul>\n<h4>Écriture scientifique</h4>\n<ul>\n<li>Forme <b>a × 10<sup>n</sup></b> avec 1 ≤ a &lt; 10 : un seul chiffre non nul avant la virgule.</li>\n<li>45 000 = 4,5 × 10<sup>4</sup> · 0,0032 = 3,2 × 10<sup>−3</sup>.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "10 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "2/3 + 1/6 =",
       "choix": [
        "3/9",
        "5/6",
        "3/6",
        "2/18"
       ],
       "bonne": 1
      },
      {
       "q": "3/4 ÷ 1/2 =",
       "choix": [
        "3/8",
        "2/3",
        "3/2",
        "1/2"
       ],
       "bonne": 2
      },
      {
       "q": "10<sup>−3</sup> =",
       "choix": [
        "0,001",
        "−1 000",
        "0,0001",
        "−0,001"
       ],
       "bonne": 0
      },
      {
       "q": "2<sup>3</sup> × 2<sup>4</sup> =",
       "choix": [
        "2<sup>12</sup>",
        "4<sup>7</sup>",
        "4<sup>12</sup>",
        "2<sup>7</sup>"
       ],
       "bonne": 3
      },
      {
       "q": "L'écriture scientifique de 0,00056 est :",
       "choix": [
        "56 × 10<sup>−5</sup>",
        "5,6 × 10<sup>−4</sup>",
        "5,6 × 10<sup>4</sup>",
        "0,56 × 10<sup>−3</sup>"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "20 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Fractions</h4><p>Calculer et donner le résultat sous forme de fraction irréductible. Écrire les étapes.</p>\n<p>A = 5/6 − 1/3 × 3/4      B = (2/5 + 1/2) ÷ 3/10</p></div><div class=\"ex\"><h4>Exercice 2 — Type brevet : la lumière du Soleil</h4><p>La distance Terre–Soleil est d'environ 150 000 000 km. La lumière parcourt 300 000 km par seconde.</p>\n<ol><li>Écrire ces deux nombres en écriture scientifique.</li>\n<li>Calculer le temps mis par la lumière pour aller du Soleil à la Terre, en secondes, puis en minutes et secondes.</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — A : 1/3 × 3/4 = 3/12 = 1/4, puis 5/6 − 1/4 = 10/12 − 3/12 = <b>7/12</b>. B : 2/5 + 1/2 = 4/10 + 5/10 = 9/10, puis 9/10 × 10/3 = 90/30 = <b>3</b>.</p>\n<p><b>Ex. 2</b> — 1) 1,5 × 10<sup>8</sup> km et 3 × 10<sup>5</sup> km/s. 2) (1,5 × 10<sup>8</sup>) ÷ (3 × 10<sup>5</sup>) = 0,5 × 10<sup>3</sup> = <b>500 s</b>, soit <b>8 min 20 s</b>.</p>",
   "cours": [
    "ma-ch1"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "lun-francais",
   "matiere": "francais",
   "date": "2026-11-16",
   "jour": "Lundi 16 novembre",
   "duree": "25 min",
   "titre": "La formation des mots",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Radical</b> : la partie du mot qui porte le sens. <i>terr</i> dans terre, terrain, enterrer, terrestre.</li>\n<li><b>Famille de mots</b> : les mots construits sur le même radical.</li>\n<li><b>Dérivation</b> : radical + préfixe (avant) et/ou suffixe (après). in-croy-able, re-faire, lente-ment.</li>\n<li>Le <b>préfixe</b> change le sens : in-, im-, il-, ir- (le contraire) · re- (de nouveau) · pré- (avant) · anti- (contre) · mal-, mé- (mal).</li>\n<li>Le <b>suffixe</b> change souvent la classe du mot : -ment → adverbe · -tion, -age, -eur → nom · -able, -eux → adjectif.</li>\n<li><b>Composition</b> : deux mots réunis. chou-fleur, portefeuille, pomme de terre.</li>\n<li><b>Composition savante</b> : racines grecques ou latines. auto (soi-même), bio (vie), graphie (écrire), logie (étude), chrono (temps), géo (terre), phone (son), mètre (mesure). Auto-bio-graphie = écrire sa propre vie.</li>\n</ul>\n<p class=\"tip\">Au brevet : pour comprendre un mot inconnu, le découper en préfixe, radical et suffixe.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Dans « imprévisible », quel élément exprime le contraire ?",
       "choix": [
        "im-",
        "pré-",
        "-ible",
        "vis"
       ],
       "bonne": 0
      },
      {
       "q": "Quel mot n'est PAS de la famille de « terre » ?",
       "choix": [
        "terrain",
        "enterrer",
        "terrible",
        "terrestre"
       ],
       "bonne": 2
      },
      {
       "q": "« Rapidement » est formé par :",
       "choix": [
        "composition",
        "dérivation avec un suffixe",
        "composition savante",
        "abréviation"
       ],
       "bonne": 1
      },
      {
       "q": "« Chronomètre » signifie, d'après ses racines :",
       "choix": [
        "écrire la vie",
        "étudier la Terre",
        "entendre de loin",
        "mesurer le temps"
       ],
       "bonne": 3
      },
      {
       "q": "Dans « chanteur », le suffixe -eur forme :",
       "choix": [
        "un adverbe",
        "un nom",
        "un verbe",
        "un adjectif"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Découper les mots</h4><p>Séparer préfixe, radical et suffixe, puis donner le sens du mot.</p>\n<p>incroyable · relecture · illisible · malheureux</p></div><div class=\"ex\"><h4>Exercice 2 — Type brevet</h4><p>« Ce souvenir demeurait inoubliable. » Expliquer la formation du mot <i>inoubliable</i> et donner son sens. Citer deux mots de la même famille.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — in/croy/able : qu'on ne peut pas croire · re/lect/ure : action de lire à nouveau · il/lis/ible : qu'on ne peut pas lire · mal/heur/eux : qui n'est pas heureux.</p>\n<p><b>Ex. 2</b> — in- (préfixe du contraire) + oubli (radical) + -able (suffixe : qui peut être). Sens : qu'on ne peut pas oublier. Même famille : oublier, oubli, oublieux.</p>",
   "cours": [
    "fr-ch1"
   ],
   "methodes": [
    "fr-m1"
   ]
  },
  {
   "id": "lun-hg",
   "matiere": "histoire",
   "date": "2026-11-16",
   "jour": "Lundi 16 novembre",
   "duree": "25 min",
   "titre": "Civils et militaires dans la Première Guerre mondiale",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<table class=\"reperes\"><tr><th>1914</th><td>Début de la guerre ; à la fin de l'année, le front se fige : guerre de tranchées</td></tr>\n<tr><th>1915–1916</th><td>Génocide des Arméniens par l'Empire ottoman</td></tr>\n<tr><th>1916</th><td>Batailles de Verdun et de la Somme</td></tr>\n<tr><th>11 nov. 1918</th><td>Armistice</td></tr>\n<tr><th>1919</th><td>Traité de Versailles</td></tr></table>\n<ul>\n<li><b>Guerre totale</b> : un pays engage toutes ses forces, armée, économie, civils, colonies et propagande.</li>\n<li><b>Les soldats</b> (les « poilus ») vivent dans les tranchées : boue, rats, froid, bombardements. Armes nouvelles : artillerie lourde, mitrailleuses, gaz, chars. Environ 10 millions de soldats meurent.</li>\n<li><b>Les civils</b> : les femmes remplacent les hommes dans les champs et les usines (les « munitionnettes »). Propagande et censure. Le nord de la France et la Belgique sont occupés.</li>\n<li><b>Violences de masse</b> : plus d'un million d'Arméniens sont exterminés : c'est un génocide.</li>\n<li><b>Bilan</b> : l'Allemagne, jugée responsable au traité de Versailles, perd l'Alsace-Moselle et doit payer des réparations. Mutilés (« gueules cassées »), monuments aux morts.</li>\n</ul>\n<p class=\"tip\">Mots-clés : guerre totale, guerre de position, tranchée, poilu, violence de masse, génocide, armistice, propagande.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "La bataille de Verdun a lieu en :",
       "choix": [
        "1914",
        "1916",
        "1917",
        "1918"
       ],
       "bonne": 1
      },
      {
       "q": "Une guerre totale, c'est :",
       "choix": [
        "une guerre sur tous les continents",
        "une guerre gagnée par un seul pays",
        "une guerre qui mobilise toutes les forces d'un pays, civils compris",
        "une guerre sans armistice"
       ],
       "bonne": 2
      },
      {
       "q": "L'armistice est signé le :",
       "choix": [
        "11 novembre 1918",
        "8 mai 1918",
        "28 juin 1919",
        "14 juillet 1918"
       ],
       "bonne": 0
      },
      {
       "q": "Le génocide des Arméniens est commis par :",
       "choix": [
        "l'Allemagne",
        "la Russie",
        "l'Autriche-Hongrie",
        "l'Empire ottoman"
       ],
       "bonne": 3
      },
      {
       "q": "Les « munitionnettes » sont :",
       "choix": [
        "des femmes qui fabriquent des obus en usine",
        "des soldates",
        "des infirmières",
        "des petites bombes"
       ],
       "bonne": 0
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Repères (2 min)</h4><p>Sans le cours, associer chaque date à son événement : 1916 · 11 novembre 1918 · 1919 · 1915.</p></div><div class=\"ex\"><h4>Exercice 2 — Développement construit (8 min)</h4><p>Sujet : « Montrez que la Première Guerre mondiale est une guerre totale qui touche les soldats et les civils. »</p>\n<p>Faire le plan au brouillon (introduction, deux parties, conclusion), puis rédiger seulement la première partie avec au moins une date et deux mots-clés.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1915 : début du génocide des Arméniens · 1916 : Verdun et la Somme · 11 novembre 1918 : armistice · 1919 : traité de Versailles.</p>\n<p><b>Ex. 2</b> — Introduction : 1914–1918, une guerre qui mobilise tout. Partie 1, les soldats : tranchées, conditions terribles, armes nouvelles, Verdun en 1916, environ 10 millions de morts. Partie 2, les civils : femmes au travail, économie de guerre, propagande, occupation, génocide des Arméniens. Conclusion : une violence de masse qui marque durablement l'Europe.</p>",
   "cours": [
    "hg-ch1"
   ],
   "methodes": [
    "hg-m1",
    "hg-m2"
   ]
  },
  {
   "id": "mar-maths",
   "matiere": "maths",
   "date": "2026-11-17",
   "jour": "Mardi 17 novembre",
   "duree": "40 min",
   "titre": "Le théorème de Thalès et sa réciproque",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "10 min",
     "QCM"
    ],
    [
     "20 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<div class=\"fig-row\">\n<svg aria-label=\"Triangle ABC avec M sur AB, N sur AC et MN parallèle à BC\" class=\"fig\" role=\"img\" viewbox=\"0 0 300 220\">\n<line class=\"ln\" x1=\"150\" x2=\"40\" y1=\"24\" y2=\"196\"></line><line class=\"ln\" x1=\"150\" x2=\"260\" y1=\"24\" y2=\"196\"></line>\n<line class=\"ln\" x1=\"40\" x2=\"260\" y1=\"196\" y2=\"196\"></line><line class=\"ln acc\" x1=\"106\" x2=\"194\" y1=\"93\" y2=\"93\"></line>\n<text text-anchor=\"middle\" x=\"150\" y=\"16\">A</text><text x=\"28\" y=\"204\">B</text><text x=\"264\" y=\"204\">C</text>\n<text x=\"92\" y=\"92\">M</text><text x=\"200\" y=\"92\">N</text>\n<text class=\"sm\" text-anchor=\"middle\" x=\"150\" y=\"86\">(MN) // (BC)</text></svg>\n<div>\n<p><b>Théorème</b> : si A, M, B sont alignés, si A, N, C sont alignés et si (MN) // (BC), alors</p>\n<p class=\"formule\">AM/AB = AN/AC = MN/BC</p>\n<p><b>Réciproque</b> : si A, M, B et A, N, C sont alignés <b>dans le même ordre</b> et si AM/AB = AN/AC, alors (MN) // (BC).</p>\n<p>Si AM/AB ≠ AN/AC, les droites ne sont pas parallèles.</p>\n</div></div>\n<h4>Rédaction type (à savoir par cœur)</h4>\n<p class=\"redac\">Les points A, M, B sont alignés, ainsi que A, N, C. Les droites (MN) et (BC) sont parallèles. D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.</p>\n<p>Puis on remplace par les longueurs connues et on fait un <b>produit en croix</b>. Exemple : 3/5 = AN/7,5 donc AN = 3 × 7,5 ÷ 5 = 4,5.</p>\n<p class=\"tip\">La figure peut aussi être « en papillon » : les deux triangles sont opposés par le sommet A. Le théorème s'écrit de la même façon.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "10 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Pour utiliser le théorème de Thalès, il faut :",
       "choix": [
        "un triangle rectangle",
        "deux droites parallèles",
        "un angle droit",
        "deux triangles égaux"
       ],
       "bonne": 1
      },
      {
       "q": "AM/AB = MN/BC avec AM = 2, AB = 6 et BC = 9. Alors MN =",
       "choix": [
        "4,5",
        "27",
        "3",
        "6"
       ],
       "bonne": 2
      },
      {
       "q": "La réciproque du théorème de Thalès sert à :",
       "choix": [
        "prouver que deux droites sont parallèles",
        "calculer une longueur",
        "prouver qu'un triangle est rectangle",
        "calculer un angle"
       ],
       "bonne": 0
      },
      {
       "q": "Points alignés dans le même ordre, AM/AB = 4/10 et AN/AC = 6/15. (MN) et (BC) sont-elles parallèles ?",
       "choix": [
        "Non",
        "On ne peut pas savoir",
        "Seulement si ABC est rectangle",
        "Oui"
       ],
       "bonne": 3
      },
      {
       "q": "3/5 = x/10. Alors x =",
       "choix": [
        "50/3",
        "6",
        "1,5",
        "15"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "20 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Calculer des longueurs</h4><p>A, M, B sont alignés ; A, N, C sont alignés ; (MN) // (BC). AM = 4 cm, AB = 10 cm, AN = 3 cm, BC = 8 cm.</p>\n<p>Calculer AC puis MN, avec la rédaction type.</p></div><div class=\"ex\"><h4>Exercice 2 — Parallèles ou pas ?</h4><p>A, E, D sont alignés ; A, F, G sont alignés dans le même ordre. AE = 2,5 cm, AD = 7,5 cm, AF = 3 cm, AG = 9 cm.</p>\n<p>Les droites (EF) et (DG) sont-elles parallèles ? Justifier.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — D'après le théorème de Thalès : 4/10 = 3/AC = MN/8. AC = 3 × 10 ÷ 4 = <b>7,5 cm</b>. MN = 4 × 8 ÷ 10 = <b>3,2 cm</b>.</p>\n<p><b>Ex. 2</b> — AE/AD = 2,5/7,5 = 1/3 et AF/AG = 3/9 = 1/3. Les rapports sont égaux et les points sont alignés dans le même ordre : d'après la réciproque du théorème de Thalès, <b>(EF) // (DG)</b>.</p>",
   "cours": [
    "ma-ch2"
   ],
   "methodes": [
    "ma-m1"
   ]
  },
  {
   "id": "mar-francais",
   "matiere": "francais",
   "date": "2026-11-17",
   "jour": "Mardi 17 novembre",
   "duree": "25 min",
   "titre": "Les classes grammaticales et les expansions du nom",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<h4>Classes grammaticales (la nature d'un mot)</h4>\n<ul>\n<li><b>Variables</b> : nom, déterminant, adjectif, pronom, verbe.</li>\n<li><b>Invariables</b> : adverbe, préposition (à, de, dans, pour…), conjonction de coordination (mais, ou, et, donc, or, ni, car), conjonction de subordination (que, quand, si, comme, lorsque…), interjection.</li>\n<li>La <b>classe</b> est ce que le mot est. La <b>fonction</b> est son rôle dans la phrase.</li>\n</ul>\n<h4>Les expansions du nom (on peut les supprimer)</h4>\n<ul>\n<li><b>Adjectif épithète</b> : collé au nom. un <u>vieux</u> château.</li>\n<li><b>Complément du nom</b> : introduit par une préposition. une tasse <u>à café</u>, la maison <u>de mon grand-père</u>.</li>\n<li><b>Apposition</b> : séparée par une virgule. Paris, <u>capitale de la France</u>, … · <u>Fatigué</u>, il s'assit.</li>\n<li><b>Proposition subordonnée relative</b> : commence par un pronom relatif (qui, que, dont, où, lequel). le livre <u>que je lis</u>. Le nom qu'elle complète est l'antécédent.</li>\n</ul>\n<p class=\"tip\">Au brevet : relever une expansion, donner sa nature, puis dire ce qu'elle apporte (elle précise, décrit ou caractérise).</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Dans « une robe en soie », « en soie » est :",
       "choix": [
        "un adjectif épithète",
        "une apposition",
        "une relative",
        "un complément du nom"
       ],
       "bonne": 3
      },
      {
       "q": "« Mais » est :",
       "choix": [
        "un adverbe",
        "une conjonction de coordination",
        "une préposition",
        "un pronom"
       ],
       "bonne": 1
      },
      {
       "q": "Dans « Le chat, affamé, miaulait », « affamé » est :",
       "choix": [
        "apposé",
        "épithète",
        "complément du nom",
        "une relative"
       ],
       "bonne": 0
      },
      {
       "q": "Dans « la ville où je suis né », la relative commence par :",
       "choix": [
        "ville",
        "je",
        "où",
        "né"
       ],
       "bonne": 2
      },
      {
       "q": "La fonction d'un mot, c'est :",
       "choix": [
        "sa classe dans le dictionnaire",
        "son genre",
        "son nombre de syllabes",
        "son rôle dans la phrase"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Relever les expansions</h4><p>« Le vieux pêcheur, homme silencieux, regardait la mer qui grondait sous un ciel de plomb. »</p>\n<p>Relever les quatre expansions du nom et donner la nature de chacune.</p></div><div class=\"ex\"><h4>Exercice 2 — Enrichir une phrase</h4><p>« Un homme marchait dans la rue. » Réécrire la phrase en ajoutant un adjectif épithète, un complément du nom et une proposition relative.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — <i>vieux</i> : adjectif épithète de pêcheur · <i>homme silencieux</i> : groupe nominal apposé à pêcheur · <i>qui grondait</i> : proposition subordonnée relative, antécédent mer · <i>de plomb</i> : complément du nom ciel.</p>\n<p><b>Ex. 2</b> — Exemple : « Un homme âgé au manteau noir marchait dans la rue qui menait au port. » (âgé = épithète ; au manteau noir = complément du nom ; qui menait au port = relative)</p>",
   "cours": [
    "fr-ch3"
   ],
   "methodes": [
    "fr-m1"
   ]
  },
  {
   "id": "mar-svt",
   "matiere": "svt",
   "date": "2026-11-17",
   "jour": "Mardi 17 novembre",
   "duree": "25 min",
   "titre": "Génétique : ADN, chromosomes, gènes",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<p class=\"chaine\">cellule → noyau → chromosomes → ADN → gène → allèles</p>\n<ul>\n<li><b>Chromosome</b> : une très longue molécule d'ADN enroulée, rangée dans le noyau.</li>\n<li><b>ADN</b> : molécule en double hélice qui porte l'information génétique.</li>\n<li><b>Gène</b> : portion d'ADN, à un endroit précis d'un chromosome, qui détermine un caractère héréditaire.</li>\n<li><b>Allèles</b> : versions différentes d'un même gène. On en a deux par gène : un du père, un de la mère.</li>\n<li>Chez l'humain : <b>46 chromosomes = 23 paires</b>. 23e paire : <b>XX</b> fille, <b>XY</b> garçon. Le <b>caryotype</b> est la photo des chromosomes classés par paires.</li>\n<li><b>Gamètes</b> (ovule, spermatozoïde) : 23 chromosomes, un de chaque paire. Fécondation : 23 + 23 = 46.</li>\n<li>Un allèle <b>dominant</b> s'exprime même présent une seule fois ; un allèle <b>récessif</b> seulement s'il est présent deux fois.</li>\n<li><b>Mitose</b> : l'ADN est copié, puis la cellule donne deux cellules avec les mêmes 46 chromosomes.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Une cellule du corps humain contient :",
       "choix": [
        "23 chromosomes",
        "92 chromosomes",
        "46 chromosomes",
        "44 chromosomes"
       ],
       "bonne": 2
      },
      {
       "q": "Un gène, c'est :",
       "choix": [
        "une portion d'ADN qui détermine un caractère",
        "un chromosome entier",
        "une cellule sexuelle",
        "une paire de chromosomes"
       ],
       "bonne": 0
      },
      {
       "q": "Les allèles sont :",
       "choix": [
        "les deux chromosomes d'une paire",
        "des versions différentes d'un même gène",
        "des cellules du sang",
        "des mutations graves"
       ],
       "bonne": 1
      },
      {
       "q": "La 23e paire d'un garçon est :",
       "choix": [
        "XX",
        "YY",
        "un seul X",
        "XY"
       ],
       "bonne": 3
      },
      {
       "q": "Un ovule contient :",
       "choix": [
        "46 chromosomes",
        "23 chromosomes",
        "22 chromosomes",
        "92 chromosomes"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Lire un caryotype</h4><p>Caryotype de Léo : 46 chromosomes, 23e paire = un grand X et un petit Y. Caryotype d'Inès : 47 chromosomes, trois chromosomes n° 21.</p>\n<ol><li>Léo est-il un garçon ou une fille ? Justifier.</li><li>Quelle anomalie présente Inès ? D'où peut venir le chromosome en trop (utiliser le mot gamète) ?</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Groupes sanguins</h4><p>Gène du groupe sanguin : trois allèles A, B et O. A et B sont dominants sur O.</p>\n<ol><li>Léa a les allèles A et O : quel est son groupe ?</li><li>Tom est du groupe O, sa mère du groupe A. Quels allèles a Tom ? Comment est-ce possible ?</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) Garçon : sa 23e paire est XY. 2) Trisomie 21 (47 chromosomes au lieu de 46). Un des gamètes portait deux chromosomes 21 au lieu d'un.</p>\n<p><b>Ex. 2</b> — 1) Groupe A : A est dominant sur O. 2) Tom a O et O (O est récessif). Sa mère a A et O : elle est du groupe A mais lui a transmis son allèle O ; son père lui a aussi transmis un O.</p>",
   "cours": [
    "svt-ch1"
   ],
   "methodes": [
    "svt-m1"
   ]
  },
  {
   "id": "mer-maths",
   "matiere": "maths",
   "date": "2026-11-18",
   "jour": "Mercredi 18 novembre",
   "duree": "35 min",
   "titre": "Notion de fonction",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "10 min",
     "QCM"
    ],
    [
     "15 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<ul>\n<li>Une <b>fonction</b> f associe à chaque nombre x un seul nombre, noté f(x). On écrit f : x ↦ f(x).</li>\n<li><b>Image</b> : f(x) est l'image de x. <b>Antécédent</b> : x est un antécédent de f(x).</li>\n<li>Un nombre a <b>une seule image</b>, mais il peut avoir 0, 1 ou plusieurs antécédents.</li>\n<li>Trois façons de donner une fonction : une <b>formule</b>, un <b>tableau de valeurs</b>, un <b>graphique</b>.</li>\n</ul>\n<h4>Les trois gestes à savoir</h4>\n<ul>\n<li><b>Image par la formule</b> : f(x) = 2x − 3, donc f(4) = 2 × 4 − 3 = 5.</li>\n<li><b>Antécédent par la formule</b> : résoudre f(x) = 7, soit 2x − 3 = 7, donc x = 5.</li>\n<li><b>Sur un graphique</b> : l'image se lit sur l'axe vertical (ordonnées) en partant de x sur l'axe horizontal (abscisses). Pour un antécédent, on fait le chemin inverse.</li>\n</ul>\n<p class=\"tip\">Les phrases équivalentes : « f(4) = 5 » = « l'image de 4 est 5 » = « 4 est un antécédent de 5 ».</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "10 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "f(x) = 3x + 1. L'image de 2 est :",
       "choix": [
        "6",
        "7",
        "5",
        "1/3"
       ],
       "bonne": 1
      },
      {
       "q": "f(x) = 3x + 1. Un antécédent de 10 est :",
       "choix": [
        "31",
        "11/3",
        "9",
        "3"
       ],
       "bonne": 3
      },
      {
       "q": "« f(5) = 2 » signifie :",
       "choix": [
        "2 est l'image de 5",
        "5 est l'image de 2",
        "2 est un antécédent de 5",
        "f vaut 10"
       ],
       "bonne": 0
      },
      {
       "q": "Un nombre peut avoir :",
       "choix": [
        "plusieurs images",
        "aucune image",
        "une seule image",
        "deux images"
       ],
       "bonne": 2
      },
      {
       "q": "Sur un graphique, l'image d'un nombre se lit sur :",
       "choix": [
        "l'axe des abscisses (horizontal)",
        "l'axe des ordonnées (vertical)",
        "l'origine",
        "la légende"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "15 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Avec une formule</h4><p>f(x) = 2x − 5.</p><ol><li>Calculer f(0), f(3) et f(−1).</li><li>Calculer l'antécédent de 7.</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Avec un tableau</h4><table class=\"valeurs\"><tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>\n<tr><th>g(x)</th><td>5</td><td>0</td><td>−3</td><td>−4</td><td>−3</td><td>0</td></tr></table>\n<ol><li>Quelle est l'image de 1 ?</li><li>Quels sont les antécédents de −3 ?</li><li>On sait que g(x) = x² − 2x − 3. Calculer g(4).</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — f(0) = −5 ; f(3) = 2 × 3 − 5 = 1 ; f(−1) = −2 − 5 = −7. 2x − 5 = 7 donc 2x = 12 et <b>x = 6</b>.</p>\n<p><b>Ex. 2</b> — 1) g(1) = <b>−4</b>. 2) Les antécédents de −3 sont <b>0 et 2</b>. 3) g(4) = 16 − 8 − 3 = <b>5</b>.</p>",
   "cours": [
    "ma-ch3"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "mer-francais",
   "matiere": "francais",
   "date": "2026-11-18",
   "jour": "Mercredi 18 novembre",
   "duree": "30 min",
   "titre": "Le présent de l'indicatif + dictée",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "15 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<h4>Conjugaison</h4>\n<ul>\n<li><b>1er groupe</b> (-er) : e, es, e, ons, ez, ent. Nous commen<b>ç</b>ons, nous man<b>ge</b>ons, j'appe<b>ll</b>e, je je<b>tt</b>e.</li>\n<li><b>2e groupe</b> (-ir, nous -issons) : is, is, it, issons, issez, issent. Je finis, nous finissons.</li>\n<li><b>3e groupe</b> : souvent s, s, t (je pars, il part). Verbes en -dre : je prends, il pren<b>d</b>. Pouvoir, vouloir : je peu<b>x</b>, je veu<b>x</b>.</li>\n<li>À connaître : être (suis, es, est, sommes, êtes, sont) · avoir (ai, as, a, avons, avez, ont) · aller (vais, vas, va, allons, allez, vont) · faire (vous faites, ils font) · dire (vous dites).</li>\n</ul>\n<h4>Valeurs du présent</h4>\n<ul>\n<li><b>D'énonciation</b> : ce qui se passe au moment où l'on parle. « Il pleut en ce moment. »</li>\n<li><b>D'habitude</b> : une action répétée. « Je me lève à 7 h tous les jours. »</li>\n<li><b>De vérité générale</b> : vrai tout le temps. « L'eau bout à 100 °C. »</li>\n<li><b>De narration</b> : un fait passé raconté au présent, pour le rendre vivant. « En 1914, la guerre éclate. »</li>\n<li><b>Futur ou passé proche</b> : « Je pars demain. » · « Il sort d'ici. »</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Quelle forme est correcte ?",
       "choix": [
        "nous commencons",
        "nous commenceons",
        "nous commençons",
        "nous commenssons"
       ],
       "bonne": 2
      },
      {
       "q": "« La Terre tourne autour du Soleil. » Valeur du présent :",
       "choix": [
        "vérité générale",
        "énonciation",
        "habitude",
        "narration"
       ],
       "bonne": 0
      },
      {
       "q": "Quelle forme est correcte ?",
       "choix": [
        "il prent",
        "il prends",
        "il prand",
        "il prend"
       ],
       "bonne": 3
      },
      {
       "q": "« En 1789, le peuple prend la Bastille. » Valeur du présent :",
       "choix": [
        "habitude",
        "narration",
        "vérité générale",
        "énonciation"
       ],
       "bonne": 1
      },
      {
       "q": "Quelle forme est correcte ?",
       "choix": [
        "vous disez",
        "vous dîtes",
        "vous dites",
        "vous dit"
       ],
       "bonne": 2
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "15 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Conjuguer au présent (5 min)</h4><p>pouvoir (je) · finir (nous) · aller (ils) · manger (nous) · prendre (tu) · appeler (j')</p></div><div class=\"ex\"><h4>Exercice 2 — Dictée (10 min)</h4><p>Un parent lit la dictée qui se trouve dans les corrigés, à la fin. Écrire, puis relire trois fois : une fois les accords sujet-verbe, une fois les pluriels des noms et des adjectifs, une fois les participes passés.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — je peux · nous finissons · ils vont · nous mangeons · tu prends · j'appelle.</p>\n<p><b>Dictée à lire</b> — « Chaque matin, mon grand-père descend au port. Il salue les pêcheurs qui reviennent de la mer et regarde les bateaux que les vagues font danser. Les mouettes crient au-dessus des filets. Nous l'accompagnons parfois : il nous raconte alors les tempêtes qu'il a traversées. La mer, dit-il, ne pardonne jamais aux imprudents. »</p>\n<p><b>Pièges</b> — il descen<b>d</b> (-dre) · qui revienn<b>ent</b> (sujet : les pêcheurs) · font, crient, accompagnons au pluriel · les tempêtes qu'il a traversé<b>es</b> (avoir + COD placé avant) · dit-il.</p>",
   "cours": [
    "fr-ch4",
    "fr-ch9"
   ],
   "methodes": [
    "fr-m3"
   ]
  },
  {
   "id": "mer-hg",
   "matiere": "histoire",
   "date": "2026-11-18",
   "jour": "Mercredi 18 novembre",
   "duree": "25 min",
   "titre": "Expériences totalitaires et démocraties fragilisées",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<table class=\"reperes\"><tr><th>1917</th><td>Révolution russe : Lénine et les bolcheviks prennent le pouvoir</td></tr>\n<tr><th>1924</th><td>Mort de Lénine ; Staline s'impose peu à peu</td></tr>\n<tr><th>1929</th><td>Krach de Wall Street : début de la grande crise</td></tr>\n<tr><th>30 janv. 1933</th><td>Hitler devient chancelier en Allemagne</td></tr>\n<tr><th>1935</th><td>Lois de Nuremberg</td></tr>\n<tr><th>1936</th><td>Front populaire en France (Léon Blum)</td></tr>\n<tr><th>1938</th><td>Nuit de Cristal</td></tr></table>\n<ul>\n<li><b>Totalitarisme</b> : l'État contrôle tout, la politique, l'économie, la société et même les pensées. Un parti unique, un chef adoré (culte de la personnalité), la propagande, l'embrigadement de la jeunesse, la terreur (police politique, camps).</li>\n<li><b>URSS de Staline</b> : collectivisation forcée des terres (kolkhozes), plans quinquennaux pour l'industrie, Goulag (camps de travail forcé), Grande Terreur (1936–1938), culte de Staline.</li>\n<li><b>Allemagne nazie</b> : parti nazi unique, Gestapo et SS, camps de concentration dès 1933, idéologie raciste et antisémite (lois de Nuremberg en 1935 qui excluent les Juifs, Nuit de Cristal en 1938).</li>\n<li><b>France</b> : la crise des années 1930 et les ligues d'extrême droite (6 février 1934) fragilisent la démocratie. Le Front populaire gagne en 1936 : congés payés, semaine de 40 heures, hausse des salaires. La démocratie résiste.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Hitler devient chancelier en :",
       "choix": [
        "1929",
        "1936",
        "1939",
        "1933"
       ],
       "bonne": 3
      },
      {
       "q": "Le Goulag, c'est :",
       "choix": [
        "l'ensemble des camps de travail forcé en URSS",
        "le parti de Staline",
        "une ferme collective",
        "la police nazie"
       ],
       "bonne": 0
      },
      {
       "q": "Un point commun des régimes totalitaires :",
       "choix": [
        "plusieurs partis",
        "des élections libres",
        "un parti unique et la terreur",
        "la liberté de la presse"
       ],
       "bonne": 2
      },
      {
       "q": "Le Front populaire obtient en 1936 :",
       "choix": [
        "le droit de vote des femmes",
        "les congés payés",
        "la Sécurité sociale",
        "la fin du chômage"
       ],
       "bonne": 1
      },
      {
       "q": "Les lois de Nuremberg (1935) :",
       "choix": [
        "créent les kolkhozes",
        "donnent le pouvoir à Staline",
        "créent les congés payés",
        "excluent les Juifs de la nation allemande"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Analyse de document (voir la fiche méthode)</h4><p>Document : votes pour le parti nazi aux élections législatives allemandes. 1928 : 2,6 % · 1930 : 18,3 % · juillet 1932 : 37,3 %. En 1932, l'Allemagne compte environ 6 millions de chômeurs.</p>\n<ol><li>Décrire l'évolution des votes pour le parti nazi.</li><li>Expliquer cette évolution avec vos connaissances.</li><li>Quand et comment Hitler arrive-t-il au pouvoir ?</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Développement court</h4><p>En cinq ou six lignes, montrer que l'URSS de Staline est un régime totalitaire.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) Les votes nazis passent de 2,6 % à 37,3 % entre 1928 et 1932 : ils sont multipliés par plus de 14. 2) La crise de 1929 provoque un chômage massif ; les Allemands perdent confiance dans la démocratie et sont attirés par les promesses et la propagande nazies. 3) Le 30 janvier 1933, Hitler est nommé chancelier, légalement, par le président Hindenburg ; il installe ensuite la dictature.</p>\n<p><b>Ex. 2</b> — Parti communiste unique, culte de Staline, propagande, collectivisation forcée des terres, Goulag et Grande Terreur : l'État contrôle toute la société et élimine les opposants.</p>",
   "cours": [
    "hg-ch2"
   ],
   "methodes": [
    "hg-m1",
    "hg-m2"
   ]
  },
  {
   "id": "jeu-maths",
   "matiere": "maths",
   "date": "2026-11-19",
   "jour": "Jeudi 19 novembre",
   "duree": "40 min",
   "titre": "Pythagore et réciproque, trigonométrie (cosinus)",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "10 min",
     "QCM"
    ],
    [
     "20 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<ul>\n<li>Dans un triangle rectangle, l'<b>hypoténuse</b> est le côté opposé à l'angle droit : c'est le plus long côté.</li>\n<li><b>Théorème de Pythagore</b> : si ABC est rectangle en A, alors <b>BC² = AB² + AC²</b>.</li>\n<li><b>Réciproque</b> : si BC² = AB² + AC² ([BC] étant le plus long côté), alors ABC est rectangle en A. Si l'égalité est fausse, le triangle n'est pas rectangle.</li>\n</ul>\n<p class=\"redac\">Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC². Puis on remplace, on calcule et on prend la racine carrée.</p>\n<h4>Cosinus</h4>\n<ul>\n<li>Dans un triangle rectangle : <b>cos (angle aigu) = côté adjacent ÷ hypoténuse</b>. Si ABC est rectangle en A : cos B = AB ÷ BC.</li>\n<li>Calculer une longueur : AB = BC × cos B.</li>\n<li>Calculer un angle : on calcule le cosinus, puis la touche <b>cos⁻¹</b> (ou Arccos) de la calculatrice, réglée en degrés.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "10 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "ABC est rectangle en A. Son hypoténuse est :",
       "choix": [
        "[AB]",
        "[AC]",
        "[BC]",
        "la hauteur issue de A"
       ],
       "bonne": 2
      },
      {
       "q": "ABC est rectangle en A, AB = 3 cm et AC = 4 cm. Alors BC =",
       "choix": [
        "7 cm",
        "5 cm",
        "25 cm",
        "12 cm"
       ],
       "bonne": 1
      },
      {
       "q": "Un triangle a pour côtés 6 cm, 8 cm et 11 cm. Est-il rectangle ?",
       "choix": [
        "Non, car 6² + 8² ≠ 11²",
        "Oui, car 6 + 8 > 11",
        "Oui, il est rectangle",
        "On ne peut pas savoir"
       ],
       "bonne": 0
      },
      {
       "q": "Dans un triangle rectangle, le cosinus d'un angle aigu est égal à :",
       "choix": [
        "côté opposé ÷ hypoténuse",
        "hypoténuse ÷ côté adjacent",
        "côté opposé ÷ côté adjacent",
        "côté adjacent ÷ hypoténuse"
       ],
       "bonne": 3
      },
      {
       "q": "Pour trouver un angle à partir de son cosinus, on utilise :",
       "choix": [
        "la touche cos",
        "la touche cos⁻¹ (Arccos)",
        "la touche √",
        "la touche x²"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "20 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Pythagore</h4><ol><li>ABC est rectangle en A, AB = 6 cm et AC = 8 cm. Calculer BC.</li>\n<li>DEF a pour côtés DE = 5 cm, DF = 12 cm et EF = 13 cm. Est-il rectangle ? Justifier.</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Cosinus</h4><ol><li>ABC est rectangle en A, BC = 10 cm et l'angle ABC mesure 35°. Calculer AB, arrondi au dixième.</li>\n<li>MNP est rectangle en M, MN = 4 cm et NP = 5 cm. Calculer l'angle MNP, arrondi au degré.</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) BC² = 6² + 8² = 36 + 64 = 100, donc <b>BC = 10 cm</b>. 2) Le plus long côté est [EF] : EF² = 169 et DE² + DF² = 25 + 144 = 169. L'égalité est vraie : d'après la réciproque du théorème de Pythagore, DEF est <b>rectangle en D</b>.</p>\n<p><b>Ex. 2</b> — 1) cos 35° = AB ÷ BC, donc AB = 10 × cos 35° ≈ <b>8,2 cm</b>. 2) cos MNP = MN ÷ NP = 4 ÷ 5 = 0,8, donc MNP ≈ <b>37°</b>.</p>",
   "cours": [
    "ma-ch4"
   ],
   "methodes": [
    "ma-m1"
   ]
  },
  {
   "id": "jeu-francais",
   "matiere": "francais",
   "date": "2026-11-19",
   "jour": "Jeudi 19 novembre",
   "duree": "20 min",
   "titre": "L'autobiographie et le pacte autobiographique",
   "timing": [
    [
     "7 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "8 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "7 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Autobiographie</b> : récit en prose, écrit après coup, dans lequel une personne réelle raconte sa propre vie et l'histoire de sa personnalité (d'après la définition de Philippe Lejeune).</li>\n<li><b>Pacte autobiographique</b> : l'auteur s'engage à dire la vérité sur sa vie. L'auteur, le narrateur et le personnage principal sont la même personne.</li>\n<li><b>Indices</b> : la 1re personne, les temps du passé pour les souvenirs, le présent pour l'adulte qui écrit.</li>\n<li><b>Le double « je »</b> : le « je » narrateur (l'adulte qui se souvient) et le « je » personnage (l'enfant d'autrefois).</li>\n<li><b>Pourquoi écrire sa vie</b> : se comprendre, témoigner, garder une trace, rendre hommage à quelqu'un.</li>\n<li><b>Genres voisins</b> : les mémoires (sa vie liée aux grands événements), le journal intime (écrit au jour le jour), le roman autobiographique (inspiré de la vie de l'auteur, sans pacte de vérité), la biographie (la vie d'une personne racontée par une autre).</li>\n</ul>\n<p class=\"tip\">Exemples : George Sand, <i>Histoire de ma vie</i> · Marcel Pagnol, <i>La Gloire de mon père</i> · Philippe Grimbert, <i>Un Secret</i>, inspiré de l'histoire de sa famille.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Dans une autobiographie, le narrateur est :",
       "choix": [
        "l'auteur lui-même",
        "un personnage inventé",
        "un témoin extérieur",
        "un historien"
       ],
       "bonne": 0
      },
      {
       "q": "Le pacte autobiographique, c'est :",
       "choix": [
        "un contrat avec l'éditeur",
        "l'engagement de dire la vérité sur sa vie",
        "le résumé du livre",
        "la préface d'un roman"
       ],
       "bonne": 1
      },
      {
       "q": "Un récit écrit au jour le jour s'appelle :",
       "choix": [
        "des mémoires",
        "une autobiographie",
        "un journal intime",
        "une biographie"
       ],
       "bonne": 2
      },
      {
       "q": "Le « double je » désigne :",
       "choix": [
        "deux narrateurs différents",
        "deux personnages qui portent le même nom",
        "le dialogue entre deux amis",
        "le narrateur adulte et l'enfant qu'il était"
       ],
       "bonne": 3
      },
      {
       "q": "Une biographie raconte :",
       "choix": [
        "la vie d'une personne, écrite par quelqu'un d'autre",
        "sa propre vie",
        "une histoire inventée",
        "une journée de vacances"
       ],
       "bonne": 0
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "8 min",
     "html": "<div class=\"ex\"><h4>Exercice — Reconnaître une autobiographie</h4><p>« Je suis né à Lyon, un matin de mars 1971, dans un appartement qui sentait la cire et le café. Aujourd'hui que j'ai passé cinquante ans, je veux raconter cet enfant timide que j'étais, sans rien embellir ni rien cacher. Ce que j'écris ici est vrai : c'est ma vie, telle que je m'en souviens. »</p>\n<ol><li>Relever deux indices qui montrent que c'est une autobiographie.</li><li>Quelle phrase forme le pacte autobiographique ?</li><li>Relever une expression pour le « je » adulte et une pour le « je » enfant.</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex.</b> — 1) La 1re personne (« je ») et le récit de sa propre naissance au passé (« Je suis né à Lyon… »). 2) « Ce que j'écris ici est vrai : c'est ma vie, telle que je m'en souviens » (et « sans rien embellir ni rien cacher »). 3) Adulte : « Aujourd'hui que j'ai passé cinquante ans ». Enfant : « cet enfant timide que j'étais ».</p>",
   "cours": [
    "fr-ch2"
   ],
   "methodes": [
    "fr-m1"
   ]
  },
  {
   "id": "jeu-pc",
   "matiere": "physique",
   "date": "2026-11-19",
   "jour": "Jeudi 19 novembre",
   "duree": "30 min",
   "titre": "La matière : atomes, molécules, ions, transformations chimiques",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "13 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Atome</b> : un noyau chargé positivement et des électrons chargés négativement. Il est électriquement neutre. Symboles : H, C, O, N, Na, Cl, Cu, Fe.</li>\n<li><b>Molécule</b> : un assemblage d'atomes. H₂O = 2 atomes d'hydrogène + 1 d'oxygène. Autres : O₂, CO₂, CH₄.</li>\n<li><b>Ion</b> : un atome (ou un groupe d'atomes) qui a perdu ou gagné des électrons. Na⁺ a perdu 1 électron, Cl⁻ en a gagné 1. Autres : Cu²⁺, H⁺, HO⁻.</li>\n<li><b>pH</b> : acide si pH &lt; 7 (beaucoup d'ions H⁺), neutre si pH = 7, basique si pH &gt; 7 (beaucoup d'ions HO⁻). Diluer rapproche le pH de 7.</li>\n<li><b>Transformation chimique</b> : des réactifs disparaissent, des produits apparaissent. Les atomes se réarrangent : ils se conservent, donc la masse aussi.</li>\n<li>Exemples : C + O₂ → CO₂ · CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>\n<li><b>Tests</b> : l'eau de chaux se trouble → dioxyde de carbone. Le sulfate de cuivre anhydre blanc devient bleu → eau. Une petite détonation avec une flamme → dihydrogène.</li>\n<li>Dissoudre du sucre dans l'eau n'est pas une transformation chimique : c'est un mélange.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Une molécule d'eau H₂O contient :",
       "choix": [
        "2 atomes d'oxygène et 1 d'hydrogène",
        "2 atomes d'hydrogène et 1 d'oxygène",
        "3 atomes d'hydrogène",
        "1 atome d'hydrogène et 1 d'oxygène"
       ],
       "bonne": 1
      },
      {
       "q": "L'ion Cl⁻ est un atome de chlore qui a :",
       "choix": [
        "gagné un électron",
        "perdu un électron",
        "perdu un proton",
        "gagné un noyau"
       ],
       "bonne": 0
      },
      {
       "q": "Une solution de pH 3 est :",
       "choix": [
        "neutre",
        "basique",
        "acide",
        "pure"
       ],
       "bonne": 2
      },
      {
       "q": "Pendant une transformation chimique, ce qui se conserve, c'est :",
       "choix": [
        "les molécules",
        "la couleur",
        "le volume",
        "les atomes et la masse"
       ],
       "bonne": 3
      },
      {
       "q": "L'eau de chaux se trouble en présence de :",
       "choix": [
        "dioxygène",
        "dioxyde de carbone",
        "eau",
        "dihydrogène"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "13 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — La combustion du méthane</h4><p>CH₄ + 2 O₂ → CO₂ + 2 H₂O</p>\n<ol><li>Nommer les réactifs et les produits.</li><li>Compter les atomes de carbone, d'hydrogène et d'oxygène de chaque côté. Que constate-t-on ?</li><li>Quel test montre qu'il se forme du dioxyde de carbone ?</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Ions et pH</h4><ol><li>L'atome de sodium Na perd un électron. Quel ion obtient-on ?</li><li>Le jus de citron a un pH de 2,5. Est-il acide ou basique ? Quels ions y sont nombreux ?</li><li>On ajoute beaucoup d'eau au jus de citron. Comment évolue son pH ?</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) Réactifs : méthane et dioxygène. Produits : dioxyde de carbone et eau. 2) À gauche : 1 C, 4 H, 4 O. À droite : 1 C, 4 H, 2 + 2 = 4 O. Les atomes se conservent. 3) L'eau de chaux se trouble.</p>\n<p><b>Ex. 2</b> — 1) L'ion Na⁺. 2) Acide (pH &lt; 7) : les ions H⁺ sont nombreux. 3) Le pH augmente et se rapproche de 7, sans le dépasser.</p>",
   "cours": [
    "pc-ch1"
   ],
   "methodes": [
    "pc-m1"
   ]
  },
  {
   "id": "ven-maths",
   "matiere": "maths",
   "date": "2026-11-20",
   "jour": "Vendredi 20 novembre",
   "duree": "35 min",
   "titre": "Calcul littéral et équations",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "10 min",
     "QCM"
    ],
    [
     "15 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Développer</b> : k(a + b) = ka + kb · (a + b)(c + d) = ac + ad + bc + bd. Puis <b>réduire</b> en regroupant les termes semblables.</li>\n<li><b>Factoriser</b> : ka + kb = k(a + b) (on cherche le facteur commun). Différence de deux carrés : a² − b² = (a − b)(a + b).</li>\n<li>Attention au signe − devant une parenthèse : −(x − 3) = −x + 3.</li>\n<li><b>Équation</b> : isoler x. 3x − 7 = 2x + 5 → 3x − 2x = 5 + 7 → x = 12. Vérifier en remplaçant.</li>\n<li><b>Équation produit nul</b> : A × B = 0 si A = 0 ou B = 0. (x − 3)(2x + 4) = 0 → x = 3 ou x = −2.</li>\n<li><b>Problème</b> : choisir l'inconnue, écrire l'équation, résoudre, répondre par une phrase.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "10 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "3(x + 4) =",
       "choix": [
        "3x + 4",
        "3x + 12",
        "3x + 7",
        "7x"
       ],
       "bonne": 1
      },
      {
       "q": "(x + 2)(x + 3) =",
       "choix": [
        "x² + 6",
        "x² + 5x + 5",
        "2x + 5",
        "x² + 5x + 6"
       ],
       "bonne": 3
      },
      {
       "q": "La forme factorisée de 5x + 15 est :",
       "choix": [
        "5(x + 3)",
        "5(x + 15)",
        "x(5 + 15)",
        "15(x + 5)"
       ],
       "bonne": 0
      },
      {
       "q": "La solution de 4x + 1 = 13 est :",
       "choix": [
        "x = 3,5",
        "x = 12",
        "x = 3",
        "x = 52"
       ],
       "bonne": 2
      },
      {
       "q": "Les solutions de (x − 5)(x + 1) = 0 sont :",
       "choix": [
        "−5 et 1",
        "5 et −1",
        "5 seulement",
        "0 et 5"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "15 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Développer, factoriser</h4><p>Développer et réduire : A = 2(3x − 1) + 4x    B = (x + 5)(x − 2). Factoriser : C = x² − 9.</p></div><div class=\"ex\"><h4>Exercice 2 — Résoudre</h4><ol><li>3x − 7 = 2x + 5</li><li>(x − 3)(2x + 4) = 0</li><li>Je pense à un nombre. Je le multiplie par 3 puis j'ajoute 4 : j'obtiens 25. Quel est ce nombre ? Écrire l'équation.</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — A = 6x − 2 + 4x = <b>10x − 2</b>. B = x² − 2x + 5x − 10 = <b>x² + 3x − 10</b>. C = <b>(x − 3)(x + 3)</b>.</p>\n<p><b>Ex. 2</b> — 1) <b>x = 12</b>. 2) x − 3 = 0 ou 2x + 4 = 0, donc <b>x = 3 ou x = −2</b>. 3) 3x + 4 = 25, donc 3x = 21 et <b>x = 7</b> : le nombre est 7.</p>",
   "cours": [
    "ma-ch5"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "ven-hg",
   "matiere": "histoire",
   "date": "2026-11-20",
   "jour": "Vendredi 20 novembre",
   "duree": "30 min",
   "titre": "La Seconde Guerre mondiale, une guerre d'anéantissement",
   "timing": [
    [
     "12 min",
     "L'essentiel"
    ],
    [
     "6 min",
     "QCM"
    ],
    [
     "12 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "12 min · lire, puis cacher",
     "html": "<table class=\"reperes\"><tr><th>1er sept. 1939</th><td>L'Allemagne envahit la Pologne : début de la guerre</td></tr>\n<tr><th>juin 1940</th><td>Défaite de la France ; appel du général de Gaulle le 18 juin</td></tr>\n<tr><th>22 juin 1941</th><td>L'Allemagne envahit l'URSS</td></tr>\n<tr><th>7 déc. 1941</th><td>Pearl Harbor : les États-Unis entrent en guerre</td></tr>\n<tr><th>janv. 1942</th><td>Conférence de Wannsee : organisation de la « solution finale »</td></tr>\n<tr><th>févr. 1943</th><td>Victoire soviétique à Stalingrad, première grande défaite allemande</td></tr>\n<tr><th>6 juin 1944</th><td>Débarquement allié en Normandie</td></tr>\n<tr><th>8 mai 1945</th><td>Capitulation de l'Allemagne</td></tr>\n<tr><th>6 et 9 août 1945</th><td>Bombes atomiques sur Hiroshima et Nagasaki</td></tr>\n<tr><th>2 sept. 1945</th><td>Capitulation du Japon : fin de la guerre</td></tr></table>\n<ul>\n<li><b>Guerre mondiale et totale</b> : elle touche l'Europe, l'Afrique, l'Asie et le Pacifique, et mobilise toutes les forces des pays.</li>\n<li><b>Guerre d'anéantissement</b> : le but est de détruire l'ennemi, y compris les civils. Bombardements de villes (Londres, Dresde, Hiroshima), massacres, populations affamées.</li>\n<li><b>La Shoah</b> : le génocide des Juifs d'Europe par les nazis, environ 6 millions de morts. Fusillades par les Einsatzgruppen à l'Est, ghettos, déportation vers les centres de mise à mort comme Auschwitz-Birkenau ou Treblinka. Les Tsiganes sont aussi victimes d'un génocide.</li>\n<li><b>Bilan</b> : environ 60 millions de morts, en majorité des civils.</li>\n</ul>\n<p class=\"tip\">Mots-clés : guerre d'anéantissement, génocide, Shoah, ghetto, camp de concentration, centre de mise à mort, solution finale.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "6 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "La guerre commence en Europe le :",
       "choix": [
        "3 septembre 1938",
        "22 juin 1941",
        "1er septembre 1939",
        "6 juin 1944"
       ],
       "bonne": 2
      },
      {
       "q": "La Shoah, c'est :",
       "choix": [
        "un bombardement",
        "le génocide des Juifs d'Europe",
        "une bataille en URSS",
        "un traité de paix"
       ],
       "bonne": 1
      },
      {
       "q": "La bataille de Stalingrad, c'est :",
       "choix": [
        "le débarquement allié en Italie",
        "une victoire japonaise",
        "la dernière bataille de la guerre",
        "la première grande défaite allemande, en 1943"
       ],
       "bonne": 3
      },
      {
       "q": "Le 6 août 1945 :",
       "choix": [
        "une bombe atomique frappe Hiroshima",
        "l'Allemagne capitule",
        "les Alliés débarquent en Normandie",
        "les États-Unis entrent en guerre"
       ],
       "bonne": 0
      },
      {
       "q": "Une guerre d'anéantissement, c'est :",
       "choix": [
        "une guerre très courte",
        "une guerre sans armes nouvelles",
        "une guerre qui vise à détruire l'ennemi, civils compris",
        "une guerre limitée à l'Europe"
       ],
       "bonne": 2
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "12 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Repères (3 min)</h4><p>Sans le cours, dater : le début de la guerre, l'entrée en guerre des États-Unis, Stalingrad, le débarquement en Normandie, la fin de la guerre en Europe, la fin de la guerre dans le monde.</p></div><div class=\"ex\"><h4>Exercice 2 — Développement construit (9 min)</h4><p>Sujet : « Montrez que la Seconde Guerre mondiale est une guerre d'anéantissement. » Faire le plan, puis rédiger la deuxième partie, sur la Shoah, avec au moins une date et trois mots-clés.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1er septembre 1939 · 7 décembre 1941 · février 1943 · 6 juin 1944 · 8 mai 1945 · 2 septembre 1945.</p>\n<p><b>Ex. 2</b> — Introduction : de 1939 à 1945, une guerre mondiale. Partie 1 : des violences de masse contre les soldats et les civils (front de l'Est, bombardements, Hiroshima). Partie 2 : la Shoah, organisée à Wannsee en 1942 ; fusillades à l'Est, ghettos, centres de mise à mort comme Auschwitz-Birkenau ; environ 6 millions de Juifs tués. Conclusion : environ 60 millions de morts, en majorité des civils.</p>",
   "cours": [
    "hg-ch3"
   ],
   "methodes": [
    "hg-m2",
    "hg-m1"
   ]
  },
  {
   "id": "ven-techno",
   "matiere": "techno",
   "date": "2026-11-20",
   "jour": "Vendredi 20 novembre",
   "duree": "25 min",
   "titre": "Le réseau informatique",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Réseau</b> : des appareils reliés qui échangent des informations, par câble ou sans fil (Wi-Fi).</li>\n<li><b>Réseau local</b> : la maison, le collège. <b>Internet</b> : le réseau mondial qui relie les réseaux entre eux.</li>\n<li><b>Commutateur</b> (switch) : relie les appareils d'un même réseau local.</li>\n<li><b>Routeur</b> : relie des réseaux entre eux et choisit le chemin des données. La box internet en contient un.</li>\n<li><b>Adresse IP</b> : identifie un appareil sur un réseau, par exemple 192.168.1.12. <b>Adresse MAC</b> : l'identifiant unique de la carte réseau.</li>\n<li><b>Serveur</b> : un ordinateur qui rend un service (site web, fichiers, courriels). <b>Client</b> : l'appareil qui demande ce service.</li>\n<li><b>Protocole</b> : des règles communes pour communiquer. TCP/IP découpe les données en paquets et les achemine ; HTTP sert au web, et HTTPS est sa version chiffrée.</li>\n<li><b>DNS</b> : traduit un nom de domaine (exemple.fr) en adresse IP.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Le routeur sert à :",
       "choix": [
        "afficher les pages web",
        "stocker les fichiers",
        "relier des réseaux et orienter les données",
        "chiffrer les mots de passe"
       ],
       "bonne": 2
      },
      {
       "q": "Une adresse IP :",
       "choix": [
        "identifie un appareil sur un réseau",
        "est le nom d'un site web",
        "est un mot de passe",
        "est un câble"
       ],
       "bonne": 0
      },
      {
       "q": "Le DNS sert à :",
       "choix": [
        "accélérer le Wi-Fi",
        "bloquer les virus",
        "relier les appareils d'une salle",
        "traduire un nom de domaine en adresse IP"
       ],
       "bonne": 3
      },
      {
       "q": "Un serveur, c'est :",
       "choix": [
        "l'appareil qui demande un service",
        "un ordinateur qui rend un service à des clients",
        "un câble réseau",
        "un logiciel de dessin"
       ],
       "bonne": 1
      },
      {
       "q": "HTTPS, c'est :",
       "choix": [
        "un réseau local",
        "une adresse IP",
        "la version chiffrée du protocole du web",
        "un type de câble"
       ],
       "bonne": 2
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Schéma d'un réseau</h4><p>Dans la salle de techno, 12 ordinateurs sont reliés à un commutateur, lui-même relié à un routeur connecté à Internet. Dessiner le schéma, nommer chaque élément, puis expliquer le rôle du commutateur et celui du routeur.</p></div><div class=\"ex\"><h4>Exercice 2 — Ce qui se passe quand on ouvre un site</h4><p>Oscar tape « exemple.fr » dans son navigateur. Décrire en quatre étapes ce qui se passe jusqu'à l'affichage de la page.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — Ordinateurs → commutateur → routeur → Internet. Le commutateur relie les ordinateurs de la salle entre eux ; le routeur relie ce réseau local à Internet et oriente les données.</p>\n<p><b>Ex. 2</b> — 1) Le DNS traduit « exemple.fr » en adresse IP. 2) L'ordinateur (le client) envoie une requête HTTP ou HTTPS au serveur. 3) Le serveur renvoie la page, découpée en paquets qui passent par des routeurs. 4) Le navigateur rassemble les paquets et affiche la page.</p>",
   "cours": [
    "te-ch1"
   ],
   "methodes": [
    "te-m1"
   ]
  },
  {
   "id": "sam-maths-prop",
   "matiere": "maths",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "25 min",
   "titre": "Proportionnalité et pourcentages",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li>Deux grandeurs sont <b>proportionnelles</b> si l'on passe de l'une à l'autre en multipliant toujours par le même nombre (le coefficient). Leur graphique est une droite qui passe par l'origine.</li>\n<li><b>Quatrième proportionnelle</b> (produit en croix) : 3 kg coûtent 7,50 €, donc 5 kg coûtent 5 × 7,50 ÷ 3 = 12,50 €.</li>\n<li><b>Prendre t %</b> d'un nombre : le multiplier par t/100. 20 % de 45 = 45 × 0,2 = 9.</li>\n<li><b>Augmenter de t %</b> : multiplier par 1 + t/100 (+5 % → × 1,05). <b>Diminuer de t %</b> : multiplier par 1 − t/100 (−30 % → × 0,7).</li>\n<li><b>Quel pourcentage ?</b> partie ÷ total × 100. 12 élèves sur 30 : 12 ÷ 30 × 100 = 40 %.</li>\n<li><b>Échelle</b> 1/25 000 : 1 cm sur la carte représente 25 000 cm, soit 250 m en réalité.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "20 % de 80 =",
       "choix": [
        "4",
        "20",
        "60",
        "16"
       ],
       "bonne": 3
      },
      {
       "q": "Augmenter un prix de 10 %, c'est le multiplier par :",
       "choix": [
        "1,1",
        "0,1",
        "1,01",
        "10"
       ],
       "bonne": 0
      },
      {
       "q": "Baisser un prix de 25 %, c'est le multiplier par :",
       "choix": [
        "0,25",
        "1,25",
        "0,75",
        "25"
       ],
       "bonne": 2
      },
      {
       "q": "6 cahiers coûtent 9 €. 10 cahiers coûtent :",
       "choix": [
        "13 €",
        "15 €",
        "16 €",
        "90 €"
       ],
       "bonne": 1
      },
      {
       "q": "Le graphique d'une situation de proportionnalité est :",
       "choix": [
        "une courbe",
        "une droite qui ne passe pas par l'origine",
        "un cercle",
        "une droite qui passe par l'origine"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Soldes</h4><ol><li>Un blouson à 60 € est soldé à −30 %. Quel est son nouveau prix ?</li><li>Un vélo passe de 250 € à 200 €. De quel pourcentage a-t-il baissé ?</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Recette</h4><p>Pour 4 personnes : 200 g de farine, 3 œufs, 50 cL de lait. Calculer les quantités pour 6 personnes.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) 60 × 0,7 = <b>42 €</b>. 2) Baisse de 50 € ; 50 ÷ 250 = 0,2, soit <b>20 %</b>.</p>\n<p><b>Ex. 2</b> — Coefficient 6 ÷ 4 = 1,5 : <b>300 g</b> de farine, <b>4,5 œufs</b> (4 ou 5 en pratique), <b>75 cL</b> de lait.</p>",
   "cours": [
    "ma-ch6"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "sam-maths-scratch",
   "matiere": "maths",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "20 min",
   "titre": "Scratch et algorithmique",
   "timing": [
    [
     "6 min",
     "L'essentiel"
    ],
    [
     "6 min",
     "QCM"
    ],
    [
     "8 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "6 min · lire, puis cacher",
     "html": "<ul>\n<li>Le lutin se déplace en pas. Orienté à 90, il regarde vers la droite.</li>\n<li>Blocs à connaître : <code>avancer de 50</code>, <code>tourner ↻ de 90 degrés</code>, <code>répéter 4 fois</code>, <code>stylo en position d'écriture</code> (le lutin laisse une trace), <code>mettre [variable] à</code>, <code>ajouter … à [variable]</code>, <code>demander … et attendre</code> puis <code>réponse</code>, <code>dire</code>, <code>si … alors … sinon</code>.</li>\n<li><b>Polygone régulier à n côtés</b> : répéter n fois (avancer ; tourner de 360 ÷ n degrés). Carré : 90° · triangle équilatéral : 120° · hexagone : 60°.</li>\n<li><b>Programme de calcul</b> : suivre les blocs dans l'ordre, en notant la valeur de chaque variable après chaque bloc.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "6 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Pour tracer un carré, le lutin tourne à chaque fois de :",
       "choix": [
        "45°",
        "90°",
        "120°",
        "360°"
       ],
       "bonne": 1
      },
      {
       "q": "« répéter 3 fois : avancer de 60, tourner de 120 » trace :",
       "choix": [
        "un carré",
        "un hexagone",
        "un cercle",
        "un triangle équilatéral"
       ],
       "bonne": 3
      },
      {
       "q": "Pour un hexagone régulier, le lutin tourne de :",
       "choix": [
        "60°",
        "90°",
        "120°",
        "6°"
       ],
       "bonne": 0
      },
      {
       "q": "n vaut 5. On ajoute 3 à n, puis on met n à n × 2. À la fin, n vaut :",
       "choix": [
        "11",
        "13",
        "16",
        "10"
       ],
       "bonne": 2
      },
      {
       "q": "Le bloc « stylo en position d'écriture » sert à :",
       "choix": [
        "effacer l'écran",
        "laisser une trace quand le lutin avance",
        "changer de couleur",
        "faire parler le lutin"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "8 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Quelle figure ?</h4><p><code>stylo en position d'écriture</code> · <code>répéter 5 fois : avancer de 80, tourner ↻ de 72 degrés</code></p>\n<ol><li>Quelle figure est tracée ?</li><li>Modifier le script pour tracer un octogone régulier.</li></ol></div><div class=\"ex\"><h4>Exercice 2 — Programme de calcul</h4><p><code>demander « Choisis un nombre »</code> · <code>mettre résultat à réponse</code> · <code>mettre résultat à résultat × 4</code> · <code>ajouter −3 à résultat</code> · <code>dire résultat</code></p>\n<ol><li>Qu'affiche le lutin pour 5 ? Pour −2 ?</li><li>Quel nombre faut-il choisir pour obtenir 37 ?</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) Un <b>pentagone régulier</b> de côté 80 (360 ÷ 5 = 72). 2) Répéter <b>8</b> fois et tourner de <b>45</b> degrés.</p>\n<p><b>Ex. 2</b> — 1) 5 × 4 − 3 = <b>17</b> ; (−2) × 4 − 3 = <b>−11</b>. 2) 4x − 3 = 37, donc 4x = 40 et <b>x = 10</b>.</p>",
   "cours": [
    "ma-ch7"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "sam-francais-procedes",
   "matiere": "francais",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "30 min",
   "titre": "Les procédés d'écriture",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "8 min",
     "QCM"
    ],
    [
     "12 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<table class=\"proc\"><tr><th>Champ lexical</th><td>des mots liés à un même thème. La peur : trembler, angoisse, pâle.</td></tr>\n<tr><th>Comparaison</th><td>rapproche deux éléments avec un outil (comme, tel, pareil à). « Rapide comme l'éclair. »</td></tr>\n<tr><th>Métaphore</th><td>le même rapprochement, sans outil. « Cet homme est un lion. »</td></tr>\n<tr><th>Personnification</th><td>donne des traits humains à une chose ou à un animal. « Le vent gémit. »</td></tr>\n<tr><th>Hyperbole</th><td>une exagération. « Je meurs de faim. »</td></tr>\n<tr><th>Gradation</th><td>des termes de plus en plus forts. « Il marchait, courait, volait. »</td></tr>\n<tr><th>Antithèse</th><td>deux idées opposées rapprochées. « Le jour et la nuit. »</td></tr>\n<tr><th>Énumération, anaphore</th><td>une liste de termes ; un mot répété en début de phrase ou de vers.</td></tr>\n<tr><th>Question rhétorique</th><td>une question qui n'attend pas de réponse, pour faire réagir le lecteur.</td></tr>\n<tr><th>Phrase non verbale</th><td>une phrase sans verbe conjugué. « Silence. Nuit noire. »</td></tr>\n<tr><th>Propositions juxtaposées</th><td>des propositions séparées par des virgules, sans mot de liaison : un rythme rapide.</td></tr>\n<tr><th>Pronom « on »</th><td>généralise, inclut le lecteur, ou cache qui agit.</td></tr></table>\n<p class=\"redac\">Méthode du brevet : <b>citer</b> le passage → <b>nommer</b> le procédé → <b>expliquer</b> son effet.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "8 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "« Ses yeux étaient deux étoiles. »",
       "choix": [
        "une comparaison",
        "une métaphore",
        "une hyperbole",
        "une antithèse"
       ],
       "bonne": 1
      },
      {
       "q": "« La ville dormait sous la neige. »",
       "choix": [
        "une personnification",
        "une gradation",
        "une question rhétorique",
        "une énumération"
       ],
       "bonne": 0
      },
      {
       "q": "« Je te l'ai dit mille fois ! »",
       "choix": [
        "une antithèse",
        "une métaphore",
        "une hyperbole",
        "un champ lexical"
       ],
       "bonne": 2
      },
      {
       "q": "« Il marchait, il courait, il volait presque. »",
       "choix": [
        "une comparaison",
        "une phrase non verbale",
        "une personnification",
        "une gradation"
       ],
       "bonne": 3
      },
      {
       "q": "« N'est-il pas temps d'agir ? »",
       "choix": [
        "une hyperbole",
        "une question rhétorique",
        "une métaphore",
        "une antithèse"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "12 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Citer, nommer, expliquer</h4><p>Pour chaque phrase, nommer le procédé et expliquer son effet en une phrase.</p>\n<ol><li>« La forêt gémissait sous le vent. »</li><li>« Froid. Silence. Personne. »</li><li>« Il était rapide comme l'éclair. »</li></ol></div><div class=\"ex\"><h4>Exercice 2 — À toi d'écrire</h4><p>Décrire une tempête en trois ou quatre lignes, avec un champ lexical, une comparaison et une question rhétorique.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) Personnification (« gémissait ») : la forêt semble vivante et souffrante, l'ambiance devient inquiétante. 2) Phrases non verbales et énumération : un rythme haché qui fait sentir le vide et la solitude. 3) Comparaison (« comme l'éclair »), avec une exagération : elle insiste sur une vitesse extraordinaire.</p>\n<p><b>Ex. 2</b> — Exemple : « Le vent hurlait, la pluie fouettait les vitres, le tonnerre grondait. Les vagues se dressaient comme des murs noirs. Qui aurait osé sortir par un temps pareil ? » (champ lexical de la tempête, comparaison, question rhétorique)</p>",
   "cours": [
    "fr-ch8",
    "fr-ch6"
   ],
   "methodes": [
    "fr-m1"
   ]
  },
  {
   "id": "sam-francais-lectures",
   "matiere": "francais",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "25 min",
   "titre": "Un Secret et La Gloire de mon père",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "8 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<h4><i>Un Secret</i>, Philippe Grimbert (2004)</h4>\n<ul>\n<li>Un récit à la 1re personne, inspiré de l'histoire de la famille de l'auteur.</li>\n<li>Le narrateur, enfant unique et fragile dans le Paris de l'après-guerre, s'invente un frère. Ses parents, Maxime et Tania, sont beaux et sportifs.</li>\n<li>À 15 ans, Louise, une amie de la famille, lui révèle le secret : avant la guerre, son père était marié à Hannah, avec qui il avait un fils, Simon.</li>\n<li>Maxime est tombé amoureux de Tania. En 1942, au passage de la ligne de démarcation, Hannah montre aux Allemands ses vrais papiers, qui disent qu'elle est juive. Elle est déportée avec Simon à Auschwitz, où ils meurent.</li>\n<li>Thèmes : le secret de famille, le silence, la culpabilité, la Shoah, la mémoire.</li>\n</ul>\n<h4><i>La Gloire de mon père</i>, Marcel Pagnol (1957)</h4>\n<ul>\n<li>Une autobiographie : le premier tome des <i>Souvenirs d'enfance</i> de Pagnol.</li>\n<li>Marcel raconte son enfance en Provence au début du XXe siècle, à Aubagne puis à Marseille. Son père Joseph est instituteur ; sa mère Augustine, son petit frère Paul, la tante Rose et l'oncle Jules l'entourent.</li>\n<li>Pendant les vacances à la Bastide-Neuve, dans les collines, Joseph et Jules partent à la chasse. Marcel les suit en cachette.</li>\n<li>Joseph abat deux bartavelles, de grosses perdrix, d'un coup double : le « coup du roi ». Marcel les retrouve et les rapporte : c'est la gloire de son père.</li>\n<li>Thèmes : l'admiration pour le père, l'enfance, la nature provençale, l'humour et la tendresse.</li>\n</ul>\n<p class=\"tip\">Revoir aussi dans le cahier l'analyse de l'extrait de la peluche (<i>Un Secret</i>).</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "L'auteur d'<i>Un Secret</i> est :",
       "choix": [
        "Marcel Pagnol",
        "George Sand",
        "Philippe Grimbert",
        "Philippe Lejeune"
       ],
       "bonne": 2
      },
      {
       "q": "Qui révèle le secret au narrateur d'<i>Un Secret</i> ?",
       "choix": [
        "Louise",
        "Tania",
        "Simon",
        "Maxime"
       ],
       "bonne": 0
      },
      {
       "q": "Dans <i>La Gloire de mon père</i>, Joseph est :",
       "choix": [
        "chasseur professionnel",
        "instituteur",
        "curé",
        "médecin"
       ],
       "bonne": 1
      },
      {
       "q": "Les bartavelles sont :",
       "choix": [
        "des lapins",
        "des chiens de chasse",
        "des fusils",
        "de grosses perdrix"
       ],
       "bonne": 3
      },
      {
       "q": "Un point commun entre les deux livres :",
       "choix": [
        "ils se passent pendant la guerre",
        "ce sont des récits d'enfance à la 1re personne",
        "ce sont des pièces de théâtre",
        "ils ont le même auteur"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "8 min",
     "html": "<div class=\"ex\"><h4>Exercice — Résumer et comparer</h4><ol><li>Sans la fiche, résumer chaque livre en trois phrases.</li>\n<li>En cinq lignes, comparer le regard que chaque narrateur porte sur son père.</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex.</b> — 1) Comparer avec l'essentiel : qui raconte, ce qui se passe, comment cela finit. 2) Marcel admire son père et le voit triompher à la chasse : le récit est tendre et drôle. Le narrateur d'<i>Un Secret</i> découvre la part cachée et douloureuse du passé de son père : le récit est grave. Dans les deux cas, l'enfant devenu adulte cherche à comprendre son père.</p>",
   "cours": [
    "fr-ch5",
    "fr-ch7"
   ],
   "methodes": [
    "fr-m1"
   ]
  },
  {
   "id": "sam-hg",
   "matiere": "histoire",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "25 min",
   "titre": "Géographie : les aires urbaines",
   "timing": [
    [
     "10 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "10 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Aire urbaine</b> : un pôle urbain (la ville-centre et ses banlieues) et sa couronne périurbaine, c'est-à-dire les communes où au moins 40 % des actifs travaillent dans le pôle.</li>\n<li>Plus de trois Français sur quatre vivent dans une aire urbaine.</li>\n<li><b>Ville-centre</b> : le centre ancien, les commerces, les administrations. <b>Banlieue</b> : la zone construite en continu autour. <b>Espace périurbain</b> : des communes plus rurales, avec des maisons individuelles, où vivent des actifs qui travaillent en ville.</li>\n<li><b>Périurbanisation</b> : l'étalement de la ville vers les campagnes proches, depuis les années 1970, grâce à la voiture. Elle entraîne des <b>mobilités pendulaires</b> (trajets domicile-travail), des embouteillages et la perte de terres agricoles.</li>\n<li><b>Métropolisation</b> : la population, les activités et les pouvoirs se concentrent dans les grandes villes (Paris, Lyon, Marseille, Toulouse…), reliées par le TGV et les aéroports.</li>\n<li><b>Enjeux</b> : les transports en commun, le logement, l'environnement (tramway, écoquartiers).</li>\n</ul>\n<p class=\"tip\">Croquis à savoir faire : ville-centre, banlieue, couronne périurbaine, axes de transport, flèches des mobilités pendulaires.</p>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "La couronne périurbaine regroupe les communes où :",
       "choix": [
        "vivent surtout des agriculteurs",
        "se trouvent les usines",
        "au moins 40 % des actifs travaillent dans le pôle urbain",
        "il n'y a pas de maisons"
       ],
       "bonne": 2
      },
      {
       "q": "Les mobilités pendulaires sont :",
       "choix": [
        "les déplacements de vacances",
        "les trajets quotidiens entre domicile et travail",
        "les déménagements",
        "les voyages à l'étranger"
       ],
       "bonne": 1
      },
      {
       "q": "La périurbanisation, c'est :",
       "choix": [
        "l'étalement de la ville vers les campagnes proches",
        "la rénovation du centre-ville",
        "la construction de tours",
        "le départ des habitants vers l'étranger"
       ],
       "bonne": 0
      },
      {
       "q": "La métropolisation, c'est :",
       "choix": [
        "la création du métro",
        "le déclin des grandes villes",
        "la fin des transports",
        "la concentration de la population et des activités dans les grandes villes"
       ],
       "bonne": 3
      },
      {
       "q": "La périurbanisation repose surtout sur :",
       "choix": [
        "le train de nuit",
        "la voiture",
        "le vélo",
        "le bateau"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Croquis (5 min)</h4><p>Dessiner trois cercles emboîtés pour la ville-centre, la banlieue et la couronne périurbaine. Ajouter un axe de transport, des flèches pour les mobilités pendulaires, et une légende.</p></div><div class=\"ex\"><h4>Exercice 2 — Expliquer (5 min)</h4><p>En quatre lignes, expliquer pourquoi beaucoup de familles s'installent dans l'espace périurbain, et quels problèmes cela pose.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — Légende attendue : ville-centre (au centre), banlieue (premier anneau), couronne périurbaine (anneau extérieur), une autoroute ou une voie ferrée qui traverse les anneaux, des flèches de la couronne vers le centre le matin.</p>\n<p><b>Ex. 2</b> — Les familles cherchent un logement moins cher, une maison avec jardin et le calme. Mais les trajets sont longs et se font surtout en voiture : embouteillages, pollution, terres agricoles grignotées.</p>",
   "cours": [
    "geo-ch1"
   ],
   "methodes": [
    "hg-m3",
    "hg-m1"
   ]
  },
  {
   "id": "sam-pc",
   "matiere": "physique",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "25 min",
   "titre": "L'énergie et l'électricité",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li><b>Formes d'énergie</b> : cinétique (le mouvement), électrique, thermique, chimique, lumineuse, nucléaire.</li>\n<li>Un <b>convertisseur</b> transforme une forme d'énergie en une autre. Lampe : électrique → lumineuse + thermique (perdue). On le représente par une <b>chaîne énergétique</b>.</li>\n<li>L'énergie se <b>conserve</b> : elle ne disparaît pas, mais une partie est perdue sous forme de chaleur.</li>\n<li>Sources <b>renouvelables</b> : soleil, vent, eau. <b>Non renouvelables</b> : pétrole, gaz, charbon, uranium.</li>\n<li><b>Puissance</b> : P = U × I (P en watts W, U en volts V, I en ampères A).</li>\n<li><b>Énergie</b> : E = P × t (en joules J si t est en secondes ; en wattheures Wh si t est en heures ; 1 kWh = 1 000 Wh).</li>\n<li><b>Loi d'Ohm</b> : U = R × I (R en ohms Ω).</li>\n<li><b>Circuits</b> : en série, l'intensité est la même partout et les tensions s'additionnent ; en dérivation, la tension est la même aux bornes des branches et les intensités s'additionnent.</li>\n<li><b>Énergie cinétique</b> : Ec = ½ × m × v² (m en kg, v en m/s, Ec en J).</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "L'unité de puissance est :",
       "choix": [
        "le volt",
        "le joule",
        "l'ampère",
        "le watt"
       ],
       "bonne": 3
      },
      {
       "q": "Une lampe de 60 W reste allumée 5 h. Elle consomme :",
       "choix": [
        "300 Wh",
        "12 Wh",
        "65 Wh",
        "3 000 Wh"
       ],
       "bonne": 0
      },
      {
       "q": "Une éolienne convertit :",
       "choix": [
        "l'énergie électrique en énergie cinétique",
        "l'énergie chimique en énergie thermique",
        "l'énergie cinétique du vent en énergie électrique",
        "l'énergie lumineuse en énergie chimique"
       ],
       "bonne": 2
      },
      {
       "q": "Dans un circuit en série :",
       "choix": [
        "la tension est la même partout",
        "l'intensité est la même partout",
        "les intensités s'additionnent",
        "il n'y a pas de courant"
       ],
       "bonne": 1
      },
      {
       "q": "R = 100 Ω et I = 0,2 A. D'après la loi d'Ohm, U =",
       "choix": [
        "500 V",
        "0,002 V",
        "100,2 V",
        "20 V"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Le radiateur</h4><p>Un radiateur de 2 000 W fonctionne pendant 3 h, sous une tension de 230 V.</p>\n<ol><li>Calculer l'énergie consommée en kWh.</li><li>Le kWh coûte 0,25 €. Combien coûte cette utilisation ?</li><li>Calculer l'intensité du courant, arrondie au dixième.</li></ol></div><div class=\"ex\"><h4>Exercice 2 — L'énergie cinétique</h4><p>Une voiture de 1 000 kg roule à 20 m/s.</p><ol><li>Calculer son énergie cinétique.</li><li>Que devient cette énergie si la vitesse double ?</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — 1) E = 2 kW × 3 h = <b>6 kWh</b>. 2) 6 × 0,25 = <b>1,50 €</b>. 3) I = P ÷ U = 2 000 ÷ 230 ≈ <b>8,7 A</b>.</p>\n<p><b>Ex. 2</b> — 1) Ec = ½ × 1 000 × 20² = <b>200 000 J</b>. 2) Elle est multipliée par <b>4</b> (la vitesse est au carré) : 800 000 J.</p>",
   "cours": [
    "pc-ch2"
   ],
   "methodes": [
    "pc-m1"
   ]
  },
  {
   "id": "sam-svt",
   "matiere": "svt",
   "date": "2026-11-21",
   "jour": "Samedi 21 novembre",
   "duree": "25 min",
   "titre": "Planète Terre : séismes, volcans, climat",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "7 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li>La surface de la Terre est découpée en <b>plaques</b> qui bougent de quelques centimètres par an. Elles s'écartent, se rapprochent ou glissent l'une contre l'autre.</li>\n<li><b>Séisme</b> : les roches se cassent brutalement le long d'une faille. Le <b>foyer</b> est en profondeur ; l'<b>épicentre</b> est le point de la surface juste au-dessus. Les ondes sismiques se propagent ; la <b>magnitude</b> mesure l'énergie libérée.</li>\n<li><b>Volcan</b> : du magma remonte. Éruption <b>effusive</b> : lave fluide, coulées. Éruption <b>explosive</b> : lave visqueuse, nuées ardentes, plus dangereuse.</li>\n<li>Séismes et volcans se concentrent surtout aux limites des plaques.</li>\n<li><b>Météo</b> : le temps qu'il fait à un endroit, à un moment. <b>Climat</b> : la moyenne du temps sur au moins 30 ans.</li>\n<li><b>Changement climatique</b> : les activités humaines rejettent des gaz à effet de serre (CO₂, méthane). La Terre se réchauffe, les glaces fondent, le niveau des océans monte.</li>\n<li><b>Risque</b> = aléa × enjeux. Se protéger : constructions parasismiques, surveillance des volcans, plans d'évacuation.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "7 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "L'épicentre d'un séisme est :",
       "choix": [
        "le point en profondeur où la roche casse",
        "le point de la surface juste au-dessus du foyer",
        "la limite entre deux plaques",
        "le cratère d'un volcan"
       ],
       "bonne": 1
      },
      {
       "q": "Les plaques se déplacent de :",
       "choix": [
        "quelques mètres par jour",
        "quelques kilomètres par an",
        "quelques centimètres par an",
        "elles ne bougent pas"
       ],
       "bonne": 2
      },
      {
       "q": "Une éruption explosive est liée à :",
       "choix": [
        "une lave visqueuse",
        "une lave très fluide",
        "l'absence de magma",
        "un séisme lointain"
       ],
       "bonne": 0
      },
      {
       "q": "Le climat, c'est :",
       "choix": [
        "le temps qu'il fait aujourd'hui",
        "la prévision pour la semaine",
        "la température de l'eau",
        "la moyenne du temps sur au moins 30 ans"
       ],
       "bonne": 3
      },
      {
       "q": "Le principal gaz à effet de serre rejeté par les activités humaines est :",
       "choix": [
        "le dioxygène",
        "le dioxyde de carbone (CO₂)",
        "l'azote",
        "l'hélium"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Aléa et enjeux</h4><p>Document : deux séismes de magnitude 5. Le séisme A a lieu dans un désert : aucune victime. Le séisme B a lieu sous une grande ville : de nombreuses victimes.</p>\n<p>Expliquer la différence avec les mots « aléa » et « enjeux », en suivant la méthode je vois, je sais, je conclus.</p></div><div class=\"ex\"><h4>Exercice 2 — Le changement climatique</h4><p>En quatre lignes, expliquer le lien entre les activités humaines et le réchauffement climatique.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — Je vois que les deux séismes ont la même magnitude, donc le même aléa, mais des bilans très différents. Je sais que le risque dépend de l'aléa et des enjeux, c'est-à-dire des personnes et des biens exposés. Je conclus que le séisme B est plus grave car les enjeux sont bien plus importants en ville.</p>\n<p><b>Ex. 2</b> — En brûlant du pétrole, du gaz et du charbon, les humains rejettent du CO₂. L'effet de serre se renforce et la température moyenne augmente. Conséquences : fonte des glaces, montée des océans, événements extrêmes plus fréquents.</p>",
   "cours": [
    "svt-ch2"
   ],
   "methodes": [
    "svt-m1"
   ]
  },
  {
   "id": "dim-francais-redac",
   "matiere": "francais",
   "date": "2026-11-22",
   "jour": "Dimanche 22 novembre",
   "duree": "40 min",
   "titre": "La rédaction : sujet d'imagination ou de réflexion",
   "timing": [
    [
     "8 min",
     "L'essentiel"
    ],
    [
     "4 min",
     "QCM"
    ],
    [
     "28 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "8 min · lire, puis cacher",
     "html": "<ul>\n<li>Au brevet, on choisit entre un <b>sujet d'imagination</b> et un <b>sujet de réflexion</b>. Viser environ deux pages.</li>\n<li><b>Gestion du temps</b> : 10 minutes de brouillon et de plan, la rédaction, puis 10 minutes de relecture de l'orthographe.</li>\n</ul>\n<h4>Sujet d'imagination</h4>\n<ul>\n<li>Lire la consigne : qui raconte (je ou il), à quel temps, quel type de texte (récit, lettre, dialogue), quelles contraintes (sentiments, description).</li>\n<li>Plan : situation de départ → élément déclencheur → péripéties → fin.</li>\n<li>Au passé : le passé simple pour les actions, l'imparfait pour les descriptions.</li>\n<li>Utiliser des procédés : champ lexical, comparaison, dialogue bien ponctué.</li>\n</ul>\n<h4>Sujet de réflexion</h4>\n<ul>\n<li>Introduction : amener le sujet, poser la question, annoncer le plan.</li>\n<li>Deux ou trois paragraphes : un argument et un exemple précis chacun (une lecture, un film, un fait historique).</li>\n<li>Des connecteurs : d'abord, de plus, cependant, enfin, ainsi.</li>\n<li>Conclusion : la réponse à la question, puis une ouverture.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "4 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Au brevet, on choisit entre :",
       "choix": [
        "un résumé et une dictée",
        "un sujet d'imagination et un sujet de réflexion",
        "un poème et une lettre",
        "deux sujets de réflexion"
       ],
       "bonne": 1
      },
      {
       "q": "Dans un sujet de réflexion, chaque paragraphe contient :",
       "choix": [
        "un argument et un exemple",
        "un dialogue",
        "une seule phrase",
        "une question"
       ],
       "bonne": 0
      },
      {
       "q": "Le connecteur « cependant » introduit :",
       "choix": [
        "une conséquence",
        "un exemple",
        "une opposition",
        "une conclusion"
       ],
       "bonne": 2
      },
      {
       "q": "Dans un récit au passé, les actions principales sont au :",
       "choix": [
        "présent",
        "futur",
        "conditionnel",
        "passé simple"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "28 min",
     "html": "<div class=\"ex\"><h4>Exercice — Au choix (8 min de plan, 20 min de rédaction)</h4><p><b>Imagination</b> : « Comme le narrateur d'<i>Un Secret</i>, vous découvrez dans un grenier un objet qui révèle une partie oubliée de l'histoire de votre famille. Racontez cette découverte et ce que vous ressentez. »</p>\n<p><b>Réflexion</b> : « Est-il important de connaître l'histoire de sa famille ? »</p>\n<p>Faire le plan au brouillon, puis rédiger l'introduction et le premier paragraphe.</p></div>"
    }
   ],
   "corrige": "<p><b>Imagination</b> — Plan possible : 1) un après-midi de pluie, le grenier poussiéreux ; 2) la découverte d'une boîte avec une photo et une lettre ; 3) les questions, l'émotion, le parent qui raconte ; 4) ce que cette histoire change pour le narrateur. Récit à la 1re personne, au passé, avec des sentiments et une description.</p>\n<p><b>Réflexion</b> — 1) Oui, pour se comprendre et savoir d'où l'on vient (exemple : <i>Un Secret</i>, le narrateur se sent libéré une fois le secret révélé). 2) Pour garder la mémoire des disparus et transmettre (exemple : <i>La Gloire de mon père</i>, un hommage au père). 3) Cependant, certains souvenirs sont douloureux et le silence protège parfois. Conclusion : connaître son histoire aide à grandir, même si cela demande du courage.</p>",
   "cours": [
    "fr-ch2",
    "fr-ch5",
    "fr-ch7"
   ],
   "methodes": [
    "fr-m2"
   ]
  },
  {
   "id": "dim-francais-dictee",
   "matiere": "francais",
   "date": "2026-11-22",
   "jour": "Dimanche 22 novembre",
   "duree": "20 min",
   "titre": "Dictée : accords et homophones",
   "timing": [
    [
     "5 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "5 min · lire, puis cacher",
     "html": "<table class=\"proc\"><tr><th>a / à</th><td>« a » si l'on peut dire « avait » ; sinon « à ».</td></tr>\n<tr><th>et / est</th><td>« est » si l'on peut dire « était ».</td></tr>\n<tr><th>son / sont</th><td>« sont » si l'on peut dire « étaient ».</td></tr>\n<tr><th>on / ont</th><td>« ont » si l'on peut dire « avaient ».</td></tr>\n<tr><th>ou / où</th><td>« où » pour un lieu ou un moment.</td></tr>\n<tr><th>ce / se</th><td>« se » devant un verbe pronominal (il se lève).</td></tr>\n<tr><th>ces / ses / c'est / s'est</th><td>ces = ceux-là ; ses = les siens ; c'est = cela est ; s'est = verbe pronominal.</td></tr>\n<tr><th>-é / -er</th><td>remplacer par « vendre » ou « vendu » : vendre → -er ; vendu → -é.</td></tr></table>\n<ul>\n<li><b>Accord sujet-verbe</b> : chercher le vrai sujet, même placé loin ou après le verbe.</li>\n<li><b>Participe passé avec être</b> : il s'accorde avec le sujet (elles sont parties).</li>\n<li><b>Participe passé avec avoir</b> : il s'accorde avec le COD seulement si celui-ci est placé avant (les lettres qu'il a écrites).</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "« Il ___ parti ___ Paris. »",
       "choix": [
        "a / a",
        "est / à",
        "et / à",
        "est / a"
       ],
       "bonne": 1
      },
      {
       "q": "« Les enfants ___ partis tôt. »",
       "choix": [
        "sont",
        "son",
        "on",
        "ont"
       ],
       "bonne": 0
      },
      {
       "q": "« La ville ___ je suis né. »",
       "choix": [
        "ou",
        "on",
        "ont",
        "où"
       ],
       "bonne": 3
      },
      {
       "q": "« Elle va ___ promener. »",
       "choix": [
        "ce",
        "ces",
        "se",
        "ses"
       ],
       "bonne": 2
      },
      {
       "q": "« Les lettres qu'il a ___. »",
       "choix": [
        "écrit",
        "écrits",
        "écrite",
        "écrites"
       ],
       "bonne": 3
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice — Dictée (10 min)</h4><p>Un parent lit la dictée qui se trouve dans les corrigés, à la fin. Écrire, puis relire trois fois : une fois les homophones, une fois les accords sujet-verbe, une fois les participes passés.</p></div>"
    }
   ],
   "corrige": "<p><b>Dictée à lire</b> — « Lorsque la nuit tombait sur les collines, nous rentrions à la maison en courant. Ma mère nous attendait sur le seuil et allumait la lampe qu'elle avait posée sur la table. Mon père racontait les histoires qu'il avait entendues au village, et mes frères riaient aux éclats. Ces soirées sont restées gravées dans ma mémoire : je les ai souvent racontées à mes enfants. »</p>\n<p><b>Pièges</b> — la lampe qu'elle avait posé<b>e</b> et les histoires qu'il avait entendu<b>es</b> (avoir + COD placé avant) · ces soirées sont resté<b>es</b> gravé<b>es</b> (être) · je les ai racont<b>ées</b> (« les » = les soirées) · ri<b>aient</b>, rentr<b>ions</b>.</p>",
   "cours": [
    "fr-ch9"
   ],
   "methodes": [
    "fr-m3"
   ]
  },
  {
   "id": "dim-maths-auto",
   "matiere": "maths",
   "date": "2026-11-22",
   "jour": "Dimanche 22 novembre",
   "duree": "20 min",
   "titre": "Automatismes : questions flash",
   "timing": [
    [
     "5 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "10 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "5 min · lire, puis cacher",
     "html": "<ul>\n<li>1/2 = 0,5 = 50 % · 1/4 = 0,25 = 25 % · 3/4 = 0,75 = 75 % · 1/5 = 0,2 = 20 % · 1/10 = 0,1 = 10 %.</li>\n<li>Multiplier par 0,5, c'est diviser par 2 ; par 0,25, diviser par 4.</li>\n<li>Conversions : 1 km = 1 000 m · 1 m = 100 cm · 1 h = 60 min · 1 L = 1 dm³ = 1 000 cm³ · 1 m² = 10 000 cm².</li>\n<li>Carrés : 11² = 121 · 12² = 144 · 13² = 169 · 14² = 196 · 15² = 225.</li>\n<li>Aires : rectangle L × l · triangle b × h ÷ 2 · disque π × r². Périmètre du cercle : 2 × π × r. Volume du pavé : L × l × h.</li>\n<li>Vitesse : distance = vitesse × temps.</li>\n<li>Règle des signes : (−) × (−) = (+) ; (−) × (+) = (−).</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "25 % de 80 =",
       "choix": [
        "25",
        "20",
        "40",
        "8"
       ],
       "bonne": 1
      },
      {
       "q": "0,5 × 46 =",
       "choix": [
        "4,6",
        "92",
        "23",
        "46,5"
       ],
       "bonne": 2
      },
      {
       "q": "2,5 h =",
       "choix": [
        "2 h 50 min",
        "2 h 05 min",
        "250 min",
        "2 h 30 min"
       ],
       "bonne": 3
      },
      {
       "q": "13² =",
       "choix": [
        "169",
        "26",
        "139",
        "196"
       ],
       "bonne": 0
      },
      {
       "q": "L'aire d'un triangle de base 6 cm et de hauteur 4 cm est :",
       "choix": [
        "24 cm²",
        "10 cm²",
        "12 cm²",
        "20 cm²"
       ],
       "bonne": 2
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "10 min",
     "html": "<div class=\"ex\"><h4>Exercice — 20 questions en 10 minutes, sans calculatrice</h4><ol class=\"flash\">\n<li>7 × 8</li><li>3,2 × 10</li><li>45 ÷ 100</li><li>1/4 en écriture décimale</li><li>10 % de 350</li>\n<li>3/5 + 1/5</li><li>2/3 × 3/4</li><li>(−3) × (−4)</li><li>−5 + 8</li><li>2³</li>\n<li>10⁻² en écriture décimale</li><li>15²</li><li>√81</li><li>1,5 km en m</li><li>90 min en heures</li>\n<li>Périmètre d'un carré de côté 7 cm</li><li>Aire d'un rectangle de 5 cm sur 8 cm</li><li>Solution de x + 7 = 12</li><li>f(x) = 2x + 1 : f(3)</li><li>Distance parcourue en 30 min à 60 km/h</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Questions flash</b> — 1) 56 · 2) 32 · 3) 0,45 · 4) 0,25 · 5) 35 · 6) 4/5 · 7) 1/2 · 8) 12 · 9) 3 · 10) 8 · 11) 0,01 · 12) 225 · 13) 9 · 14) 1 500 m · 15) 1,5 h · 16) 28 cm · 17) 40 cm² · 18) x = 5 · 19) 7 · 20) 30 km.</p>",
   "cours": [
    "ma-ch1",
    "ma-ch6",
    "ma-ch5"
   ],
   "methodes": [
    "ma-m2"
   ]
  },
  {
   "id": "dim-maths-brevet",
   "matiere": "maths",
   "date": "2026-11-22",
   "jour": "Dimanche 22 novembre",
   "duree": "30 min",
   "titre": "Entraînement type brevet : Thalès et fonctions",
   "timing": [
    [
     "5 min",
     "L'essentiel"
    ],
    [
     "5 min",
     "QCM"
    ],
    [
     "20 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "5 min · lire, puis cacher",
     "html": "<ul>\n<li>Lire tout le sujet d'abord, puis commencer par les exercices les plus sûrs.</li>\n<li>Écrire les calculs, pas seulement les résultats. Citer la propriété utilisée : « d'après le théorème de… ».</li>\n<li>Toujours une unité et une phrase de réponse.</li>\n<li>Bloqué sur une question ? Passer à la suivante, qui est souvent faisable seule, puis revenir.</li>\n<li>Vérifier l'ordre de grandeur : un arbre de 900 m, c'est une erreur.</li>\n<li>Toute trace de recherche compte, même incomplète.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "5 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Pour prouver que deux droites sont parallèles avec des longueurs, on utilise :",
       "choix": [
        "le théorème de Pythagore",
        "la réciproque du théorème de Thalès",
        "le cosinus",
        "le produit nul"
       ],
       "bonne": 1
      },
      {
       "q": "Dans un triangle rectangle, pour calculer un côté à partir des deux autres :",
       "choix": [
        "le théorème de Pythagore",
        "la réciproque de Thalès",
        "la loi d'Ohm",
        "un produit en croix"
       ],
       "bonne": 0
      },
      {
       "q": "g(x) = 1,5x + 6. Alors g(4) =",
       "choix": [
        "10",
        "7,5",
        "12",
        "16"
       ],
       "bonne": 2
      },
      {
       "q": "Bloqué sur une question au brevet :",
       "choix": [
        "rendre la copie",
        "recopier l'énoncé",
        "tout effacer",
        "passer à la suivante et revenir plus tard"
       ],
       "bonne": 3
      },
      {
       "q": "Une réponse complète contient :",
       "choix": [
        "seulement le résultat",
        "le calcul, le résultat, l'unité et une phrase",
        "seulement une phrase",
        "seulement le calcul"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "20 min",
     "html": "<div class=\"ex\"><h4>Partie A — La hauteur de l'arbre (10 min)</h4><p>Léo plante un bâton vertical [BC] de 1,5 m. Le soleil projette les ombres : le bout des ombres est au point O. Les points O, B et A sont alignés au sol ; les points O, C et D sont alignés sur le rayon du soleil. L'ombre du bâton mesure OB = 2 m, celle de l'arbre [AD] mesure OA = 12 m. Le bâton et l'arbre sont verticaux.</p>\n<p>Calculer la hauteur AD de l'arbre. Justifier.</p></div><div class=\"ex\"><h4>Partie B — Louer un vélo (10 min)</h4><p>Tarif A : 3 € par heure. Tarif B : un abonnement de 6 €, puis 1,50 € par heure. On note x le nombre d'heures, f(x) = 3x et g(x) = 1,5x + 6.</p>\n<ol><li>Calculer f(2) et g(2).</li><li>Pour quelle durée les deux tarifs sont-ils égaux ?</li><li>Quel tarif choisir pour 6 heures ?</li></ol></div>"
    }
   ],
   "corrige": "<p><b>Partie A</b> — (BC) et (AD) sont perpendiculaires au sol, donc parallèles. O, B, A et O, C, D sont alignés. D'après le théorème de Thalès : OB/OA = BC/AD, donc 2/12 = 1,5/AD et AD = 1,5 × 12 ÷ 2 = <b>9 m</b>.</p>\n<p><b>Partie B</b> — 1) f(2) = <b>6 €</b> et g(2) = <b>9 €</b>. 2) 3x = 1,5x + 6, donc 1,5x = 6 et <b>x = 4 h</b> (12 € dans les deux cas). 3) f(6) = 18 € et g(6) = 15 € : le <b>tarif B</b> est moins cher.</p>",
   "cours": [
    "ma-ch2",
    "ma-ch3"
   ],
   "methodes": [
    "ma-m1",
    "ma-m2"
   ]
  },
  {
   "id": "dim-techno",
   "matiere": "techno",
   "date": "2026-11-22",
   "jour": "Dimanche 22 novembre",
   "duree": "20 min",
   "titre": "Impression 3D et conception",
   "timing": [
    [
     "6 min",
     "L'essentiel"
    ],
    [
     "6 min",
     "QCM"
    ],
    [
     "8 min",
     "Exercices"
    ]
   ],
   "blocs": [
    {
     "type": "html",
     "titre": "L'essentiel",
     "sous": "6 min · lire, puis cacher",
     "html": "<ol>\n<li><b>Cahier des charges</b> : ce que l'objet doit faire, ses dimensions, ses contraintes.</li>\n<li><b>Croquis</b>, puis <b>modélisation 3D</b> avec un logiciel de conception (CAO).</li>\n<li><b>Export</b> du modèle en fichier <b>STL</b>.</li>\n<li><b>Logiciel trancheur</b> : il découpe l'objet en couches et prépare les instructions pour l'imprimante.</li>\n<li><b>Impression</b> : une buse chauffée, autour de 200 °C pour le PLA, dépose le plastique fondu couche par couche.</li>\n<li><b>Finition</b> : retirer les supports, poncer.</li>\n</ol>\n<ul>\n<li><b>PLA</b> : un plastique fabriqué à partir de plantes (amidon de maïs), le plus utilisé au collège.</li>\n<li><b>Paramètres</b> : la hauteur de couche (qualité contre temps), le taux de remplissage (solidité contre matière et temps), les supports (pour les parties en surplomb).</li>\n<li><b>Avantages</b> : prototypes rapides, pièces sur mesure ou de rechange. <b>Limites</b> : lent, solidité limitée, déchets plastiques.</li>\n</ul>"
    },
    {
     "type": "qcm",
     "titre": "QCM",
     "sous": "6 min · sans le cours, une seule bonne réponse",
     "questions": [
      {
       "q": "Le format de fichier exporté avant l'impression est :",
       "choix": [
        "MP3",
        "STL",
        "JPG",
        "DOCX"
       ],
       "bonne": 1
      },
      {
       "q": "Le logiciel trancheur sert à :",
       "choix": [
        "découper le modèle en couches et préparer l'impression",
        "dessiner le croquis",
        "peindre l'objet",
        "envoyer un courriel"
       ],
       "bonne": 0
      },
      {
       "q": "Le matériau le plus utilisé au collège est :",
       "choix": [
        "l'acier",
        "le verre",
        "le PLA",
        "le bois"
       ],
       "bonne": 2
      },
      {
       "q": "Les supports servent à :",
       "choix": [
        "colorer la pièce",
        "refroidir la buse",
        "accélérer l'impression",
        "soutenir les parties en surplomb"
       ],
       "bonne": 3
      },
      {
       "q": "Augmenter le taux de remplissage rend la pièce :",
       "choix": [
        "plus légère et plus rapide à imprimer",
        "plus solide, mais plus longue à imprimer",
        "transparente",
        "plus petite"
       ],
       "bonne": 1
      }
     ]
    },
    {
     "type": "html",
     "titre": "Exercices",
     "sous": "8 min",
     "html": "<div class=\"ex\"><h4>Exercice 1 — Remettre dans l'ordre</h4><p>impression · logiciel trancheur · cahier des charges · modélisation 3D · export STL · finition</p></div><div class=\"ex\"><h4>Exercice 2 — Une pièce de rechange</h4><p>Il faut imprimer un bouton de placard qui doit résister à l'usage. Proposer deux réglages d'impression et les justifier.</p></div>"
    }
   ],
   "corrige": "<p><b>Ex. 1</b> — Cahier des charges → modélisation 3D → export STL → logiciel trancheur → impression → finition.</p>\n<p><b>Ex. 2</b> — Exemple : un remplissage élevé pour que le bouton soit solide ; une pièce posée à plat sur sa grande face pour éviter les supports et gagner du temps. On peut aussi citer une hauteur de couche moyenne, compromis entre qualité et durée.</p>",
   "cours": [
    "te-ch2"
   ],
   "methodes": [
    "te-m1"
   ]
  }
 ]
};
