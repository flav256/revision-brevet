/* ============================================================
   cours/maths-a.js — chapitres ajoutés en maths
   ma-ch4 : Pythagore et trigonométrie
   ma-ch5 : Calcul littéral et équations
   ma-m1  : Méthode — rédiger une démonstration en géométrie
   ============================================================ */

DATA.chapitres.push(
  {
    id: 'ma-ch4',
    matiere: 'maths',
    ajout: true,
    zone: 'Géométrie',
    numero: 'Chapitre 4',
    titre: "Le théorème de Pythagore et la trigonométrie",
    periode: "Triangle rectangle — calculer des longueurs et des angles",
    theme: "Théorème de Pythagore, sa réciproque et sa contraposée ; cosinus, sinus et tangente d'un angle aigu",

    essentiel: [
      "Dans un triangle rectangle, l'<b>hypoténuse</b> est le côté opposé à l'angle droit : c'est toujours le <b>plus long côté</b>.",
      "<b>Pythagore</b> : si ABC est rectangle en A, alors <b>BC² = AB² + AC²</b>. Il sert à calculer une longueur quand on connaît les deux autres.",
      "<b>Réciproque</b> : si BC² = AB² + AC² ([BC] étant le plus long côté), alors ABC est rectangle en A. <b>Contraposée</b> : si BC² ≠ AB² + AC², alors ABC n'est pas rectangle.",
      "<b>cos = adjacent ÷ hypoténuse</b> ; <b>sin = opposé ÷ hypoténuse</b> ; tan = opposé ÷ adjacent. Uniquement dans un triangle rectangle, pour un angle aigu.",
      "Pour trouver un angle, on utilise <b>arccos, arcsin ou arctan</b> à la calculatrice, réglée en <b>mode degré</b>."
    ],

    sections: [
      {
        titre: "Le vocabulaire du triangle rectangle",
        points: [
          "Un triangle rectangle a un angle droit. Le côté <b>opposé à l'angle droit</b> s'appelle l'<b>hypoténuse</b> : c'est toujours le <b>plus long côté</b>. Les deux autres côtés sont les côtés de l'angle droit.",
          "Un angle se note avec trois lettres, la lettre du milieu étant le <b>sommet</b> : l'angle ABC a pour sommet B. Sur la copie, on met un « chapeau » au-dessus des trois lettres.",
          "Pour un angle aigu, on distingue le <b>côté adjacent</b> (il touche l'angle et ce n'est pas l'hypoténuse) et le <b>côté opposé</b> (il est en face de l'angle, il ne le touche pas).",
          "Exemple : ABC est rectangle en A. Pour l'angle ABC, [AB] est le côté adjacent, [AC] le côté opposé et [BC] l'hypoténuse.",
          "Pour l'autre angle aigu, ACB, les rôles s'échangent : [AC] devient le côté adjacent et [AB] le côté opposé. L'hypoténuse, elle, ne change pas."
        ]
      },
      {
        titre: "Le théorème de Pythagore : calculer une longueur",
        points: [
          "<b>Si un triangle ABC est rectangle en A, alors BC² = AB² + AC².</b> Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",
          "<b>Calculer l'hypoténuse</b> : ABC est rectangle en A, AB = 9 cm et AC = 12 cm. BC² = 9² + 12² = 81 + 144 = 225, donc BC = √225 = <b>15 cm</b>.",
          "<b>Calculer un côté de l'angle droit</b> : on soustrait. ABC est rectangle en A, BC = 10 cm et AB = 7 cm. AC² = BC² − AB² = 100 − 49 = 51, donc AC = √51 ≈ <b>7,1 cm</b> (arrondi au dixième).",
          "Une longueur est positive : on obtient la longueur avec la <b>racine carrée</b> (touche √). Si le résultat ne tombe pas juste, on écrit la valeur exacte (√51) puis l'arrondi demandé.",
          "Erreur classique : écrire BC = AB + AC. Ce sont les <b>carrés</b> des longueurs qui s'additionnent, pas les longueurs.",
          "Le théorème ne s'applique <b>que dans un triangle rectangle</b>, et il faut l'avoir dit avant de l'utiliser."
        ]
      },
      {
        titre: "Réciproque et contraposée : le triangle est-il rectangle ?",
        points: [
          "On repère d'abord le <b>plus long côté</b>. Puis on calcule <b>séparément</b> son carré d'une part, et la somme des carrés des deux autres côtés d'autre part.",
          "<b>Réciproque</b> : si BC² = AB² + AC², alors le triangle ABC est <b>rectangle en A</b>. L'angle droit est au sommet <b>opposé au plus long côté</b>.",
          "<b>Contraposée</b> : si BC² ≠ AB² + AC², avec [BC] le plus long côté, alors le triangle ABC <b>n'est pas rectangle</b>.",
          "Exemple : EFG a pour côtés EF = 8 cm, EG = 15 cm et FG = 17 cm. D'une part FG² = 289 ; d'autre part EF² + EG² = 64 + 225 = 289. L'égalité est vraie : EFG est <b>rectangle en E</b>.",
          "Exemple : un triangle a pour côtés 5 cm, 7 cm et 9 cm. D'une part 9² = 81 ; d'autre part 5² + 7² = 25 + 49 = 74. Comme 81 ≠ 74, le triangle <b>n'est pas rectangle</b>."
        ]
      },
      {
        titre: "Cosinus, sinus et tangente",
        points: [
          "Dans un triangle <b>rectangle</b>, pour un angle <b>aigu</b> : <b>cos = côté adjacent ÷ hypoténuse</b> ; <b>sin = côté opposé ÷ hypoténuse</b> ; <b>tan = côté opposé ÷ côté adjacent</b>.",
          "À savoir par cœur : <b>cos = adjacent / hypoténuse</b> et <b>sin = opposé / hypoténuse</b>. La tangente est la seule qui n'utilise pas l'hypoténuse.",
          "Exemple : ABC est rectangle en A. cos ABC = AB/BC ; sin ABC = AC/BC ; tan ABC = AC/AB.",
          "Le cosinus et le sinus d'un angle aigu sont toujours <b>compris entre 0 et 1</b>, car l'hypoténuse est le plus long côté. La tangente, elle, peut dépasser 1.",
          "Ces formules ne marchent <b>que dans un triangle rectangle</b>. On commence donc toujours par écrire : « Le triangle … est rectangle en … »."
        ]
      },
      {
        titre: "Calculer une longueur avec la trigonométrie",
        points: [
          "On choisit la formule qui relie l'<b>angle connu</b>, la <b>longueur connue</b> et la <b>longueur cherchée</b>. On l'écrit avec les noms des points, on remplace, puis on fait un <b>produit en croix</b>.",
          "<b>Longueur en haut de la fraction</b> : ABC est rectangle en A, BC = 8 cm et l'angle ABC mesure 40°. cos 40° = AB/8, donc AB = 8 × cos 40° ≈ <b>6,1 cm</b>.",
          "<b>Longueur en bas de la fraction</b> : ABC est rectangle en A, AC = 5 cm et l'angle ABC mesure 30°. sin 30° = AC/BC = 5/BC, donc BC = 5 ÷ sin 30° = <b>10 cm</b>.",
          "<b>Avec la tangente</b> : ABC est rectangle en A, AB = 6 cm et l'angle ABC mesure 35°. tan 35° = AC/6, donc AC = 6 × tan 35° ≈ <b>4,2 cm</b>.",
          "Astuce : écrire cos 40° sous la forme cos 40°/1 permet de faire le produit en croix comme avec Thalès."
        ]
      },
      {
        titre: "Calculer un angle avec la trigonométrie",
        points: [
          "On calcule d'abord le cosinus, le sinus ou la tangente de l'angle avec les <b>deux longueurs connues</b>, sous forme de quotient.",
          "Puis on trouve l'angle avec <b>arccos</b>, <b>arcsin</b> ou <b>arctan</b>. Sur la calculatrice, selon le modèle, la touche s'appelle Arccos (ou acos), souvent avec « 2nde » ou « SHIFT ».",
          "Exemple : DEF est rectangle en D, DE = 7 cm et DF = 4 cm. Pour l'angle DEF, [DF] est opposé et [DE] adjacent : tan DEF = 4/7, donc DEF = arctan(4/7) ≈ <b>30°</b>.",
          "Exemple : ABC est rectangle en A, AC = 3 cm et BC = 7 cm. sin ABC = 3/7, donc ABC = arcsin(3/7) ≈ <b>25°</b>.",
          "Dans un triangle rectangle, les deux angles aigus sont <b>complémentaires</b> : leur somme vaut 90°. Dans le dernier exemple, l'angle ACB mesure environ 90° − 25° = 65°."
        ]
      },
      {
        titre: "La calculatrice et les arrondis",
        points: [
          "Au collège, les angles se mesurent en <b>degrés</b>. La calculatrice doit être en <b>mode degré</b> (« D » ou « DEG » à l'écran), pas en radian (R) ni en grade (G).",
          "Test rapide : cos 60 doit donner <b>0,5</b>. Si ce n'est pas le cas, la calculatrice n'est pas en mode degré.",
          "On tape le calcul <b>en une seule fois</b> (par exemple 8 × cos(40)) et on arrondit seulement le résultat final. Arrondir le cosinus au milieu du calcul fausse le résultat.",
          "« Arrondi au dixième » = un chiffre après la virgule ; « arrondi au degré » = un nombre entier. Dès qu'on arrondit, on écrit le signe <b>≈</b>."
        ]
      },
      {
        titre: "Quel outil choisir ?",
        points: [
          "Triangle rectangle, je connais <b>deux longueurs</b> et je cherche la troisième : <b>théorème de Pythagore</b>.",
          "Triangle rectangle, je connais <b>un angle aigu et une longueur</b> et je cherche une autre longueur : <b>cosinus, sinus ou tangente</b>.",
          "Triangle rectangle, je connais <b>deux longueurs</b> et je cherche un <b>angle</b> : trigonométrie, puis arccos, arcsin ou arctan.",
          "Je veux savoir si un triangle <b>est rectangle</b> : <b>réciproque</b> ou <b>contraposée</b> du théorème de Pythagore.",
          "Deux droites <b>parallèles</b> et une longueur à calculer : théorème de <b>Thalès</b> (voir le chapitre 2)."
        ]
      }
    ],

    mots: [
      ["Hypoténuse", "Dans un triangle rectangle, le côté opposé à l'angle droit. C'est le plus long côté."],
      ["Côté adjacent", "Pour un angle aigu d'un triangle rectangle, le côté qui touche l'angle et qui n'est pas l'hypoténuse."],
      ["Côté opposé", "Pour un angle aigu d'un triangle rectangle, le côté situé en face de l'angle."],
      ["Angle aigu", "Angle qui mesure moins de 90°."],
      ["Carré d'un nombre", "Le nombre multiplié par lui-même : 7² = 7 × 7 = 49."],
      ["Racine carrée", "√a est le nombre positif dont le carré vaut a : √49 = 7. Elle sert à retrouver une longueur à partir de son carré."],
      ["Réciproque de Pythagore", "Si le carré du plus long côté est égal à la somme des carrés des deux autres, le triangle est rectangle."],
      ["Contraposée de Pythagore", "Si le carré du plus long côté n'est pas égal à la somme des carrés des deux autres, le triangle n'est pas rectangle."],
      ["Cosinus", "Dans un triangle rectangle, côté adjacent ÷ hypoténuse."],
      ["Sinus", "Dans un triangle rectangle, côté opposé ÷ hypoténuse."],
      ["Tangente", "Dans un triangle rectangle, côté opposé ÷ côté adjacent."],
      ["Arccos", "Donne l'angle dont on connaît le cosinus : si cos x = 0,5, alors x = arccos(0,5) = 60°. De même arcsin pour le sinus et arctan pour la tangente."],
      ["Angles complémentaires", "Deux angles dont la somme vaut 90°, comme les deux angles aigus d'un triangle rectangle."],
      ["Mode degré", "Réglage de la calculatrice indispensable en trigonométrie au collège. Test : cos 60 doit donner 0,5."]
    ],

    quiz: [
      { q: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?",
        choix: ["Le côté adjacent", "La médiane", "L'hypoténuse", "La hauteur"],
        bonne: 2,
        why: "L'hypoténuse est aussi le plus long côté du triangle rectangle." },

      { q: "ABC est rectangle en A. Quelle égalité donne le théorème de Pythagore ?",
        choix: ["BC² = AB² + AC²", "AB² = BC² + AC²", "BC = AB + AC", "AC² = AB² + BC²"],
        bonne: 0,
        why: "L'hypoténuse est [BC], le côté opposé au sommet A de l'angle droit." },

      { q: "ABC est rectangle en A, AB = 9 cm et AC = 12 cm. Combien vaut BC ?",
        choix: ["21 cm", "225 cm", "√63 cm", "15 cm"],
        bonne: 3,
        why: "BC² = 81 + 144 = 225, donc BC = √225 = 15 cm." },

      { q: "ABC est rectangle en A, BC = 17 cm et AB = 8 cm. Combien vaut AC ?",
        choix: ["15 cm", "9 cm", "√353 cm", "25 cm"],
        bonne: 0,
        why: "On cherche un côté de l'angle droit, donc on soustrait : AC² = 289 − 64 = 225, AC = 15 cm." },

      { q: "Pour démontrer qu'un triangle est rectangle, on utilise :",
        choix: ["le théorème de Pythagore", "la réciproque du théorème de Pythagore", "le théorème de Thalès", "le cosinus"],
        bonne: 1,
        why: "Le théorème calcule une longueur ; c'est sa réciproque qui prouve qu'un triangle est rectangle." },

      { q: "Un triangle a pour côtés 6 cm, 9 cm et 11 cm. Que peut-on dire ?",
        choix: ["Il est rectangle, car 6 + 9 > 11", "Il n'est pas rectangle, car 11² ≠ 6² + 9²", "Il est rectangle, en face du côté de 11 cm", "On ne peut rien dire sans mesurer les angles"],
        bonne: 1,
        why: "11² = 121 alors que 6² + 9² = 117 : d'après la contraposée de Pythagore, il n'est pas rectangle." },

      { q: "RST a pour côtés RS = 20, ST = 21 et RT = 29. En quel sommet est-il rectangle ?",
        choix: ["En R", "En T", "En S", "Il n'est pas rectangle"],
        bonne: 2,
        why: "29² = 841 = 20² + 21² : l'angle droit est en S, le sommet opposé au plus long côté [RT]." },

      { q: "Pour savoir si un triangle est rectangle, quel côté élève-t-on au carré seul ?",
        choix: ["Le plus long côté", "Le plus court côté", "N'importe lequel", "Le côté horizontal"],
        bonne: 0,
        why: "Si le triangle est rectangle, le plus long côté est forcément l'hypoténuse." },

      { q: "Dans un triangle rectangle, le sinus d'un angle aigu est égal à :",
        choix: ["côté adjacent ÷ hypoténuse", "côté opposé ÷ hypoténuse", "côté opposé ÷ côté adjacent", "hypoténuse ÷ côté opposé"],
        bonne: 1,
        why: "sin = opposé ÷ hypoténuse, et cos = adjacent ÷ hypoténuse." },

      { q: "Dans un triangle rectangle, le cosinus d'un angle aigu est égal à :",
        choix: ["côté adjacent ÷ hypoténuse", "côté opposé ÷ hypoténuse", "côté opposé ÷ côté adjacent", "hypoténuse ÷ côté adjacent"],
        bonne: 0,
        why: "cos = adjacent ÷ hypoténuse ; c'est le sinus qui utilise le côté opposé." },

      { q: "ABC est rectangle en A. Que vaut cos ABC ?",
        choix: ["AC/BC", "AC/AB", "AB/AC", "AB/BC"],
        bonne: 3,
        why: "Pour l'angle en B, le côté adjacent est [AB] et l'hypoténuse est [BC]." },

      { q: "ABC est rectangle en A. Que vaut tan ABC ?",
        choix: ["AB/AC", "AC/AB", "AC/BC", "BC/AB"],
        bonne: 1,
        why: "Pour l'angle en B, le côté opposé est [AC] et le côté adjacent est [AB]." },

      { q: "ABC est rectangle en A, BC = 8 cm et l'angle ABC mesure 40°. Comment calcule-t-on AB ?",
        choix: ["AB = 8 ÷ cos 40°", "AB = 8 × sin 40°", "AB = 8 × cos 40°", "AB = cos 40° ÷ 8"],
        bonne: 2,
        why: "cos 40° = AB/BC = AB/8, donc AB = 8 × cos 40° ≈ 6,1 cm." },

      { q: "ABC est rectangle en A, AC = 5 cm et l'angle ABC mesure 30°. Combien vaut BC ?",
        choix: ["2,5 cm", "10 cm", "5 cm", "8,7 cm"],
        bonne: 1,
        why: "sin 30° = AC/BC = 5/BC, donc BC = 5 ÷ sin 30° = 5 ÷ 0,5 = 10 cm." },

      { q: "Pour trouver un angle dont on connaît la tangente, on utilise :",
        choix: ["tan", "√", "1/x", "arctan"],
        bonne: 3,
        why: "tan donne la tangente d'un angle ; arctan fait le chemin inverse et donne l'angle." },

      { q: "Dans quel mode doit être la calculatrice pour la trigonométrie au collège ?",
        choix: ["Radian", "Grade", "Degré", "Statistique"],
        bonne: 2,
        why: "Les angles sont en degrés. Pour vérifier : cos 60 doit donner 0,5." },

      { q: "DEF est rectangle en D, DE = 7 cm et DF = 4 cm. Combien mesure l'angle DEF, au degré près ?",
        choix: ["30°", "60°", "35°", "4°"],
        bonne: 0,
        why: "tan DEF = DF/DE = 4/7 (opposé ÷ adjacent), donc DEF = arctan(4/7) ≈ 30°." },

      { q: "Le cosinus d'un angle aigu peut-il valoir 1,2 ?",
        choix: ["Oui, si le triangle est grand", "Oui, si l'angle est petit", "Seulement en mode radian", "Non, il est toujours compris entre 0 et 1"],
        bonne: 3,
        why: "Le côté adjacent est plus court que l'hypoténuse, donc le quotient est inférieur à 1." },

      { q: "Dans un triangle rectangle, un angle aigu mesure 25°. Combien mesure l'autre angle aigu ?",
        choix: ["155°", "75°", "65°", "25°"],
        bonne: 2,
        why: "Les deux angles aigus sont complémentaires : 90° − 25° = 65°." },

      { q: "Je connais deux côtés d'un triangle rectangle et je cherche le troisième. J'utilise :",
        choix: ["la réciproque de Pythagore", "le cosinus", "le théorème de Thalès", "le théorème de Pythagore"],
        bonne: 3,
        why: "Pythagore relie les trois côtés d'un triangle rectangle ; la trigonométrie sert quand un angle intervient." }
    ]
  },

  {
    id: 'ma-ch5',
    matiere: 'maths',
    ajout: true,
    zone: 'Nombres et calculs',
    numero: 'Chapitre 5',
    titre: "Calcul littéral et équations",
    periode: "Développer, factoriser, résoudre",
    theme: "Expressions littérales, distributivité, factorisation, a² − b² = (a − b)(a + b), équations du premier degré et équations produit nul",

    essentiel: [
      "Une <b>expression littérale</b> contient des lettres qui désignent des nombres. On peut supprimer le signe × devant une lettre ou une parenthèse : 3 × x = 3x.",
      "<b>Développer</b>, c'est transformer un produit en somme : k(a + b) = ka + kb et (a + b)(c + d) = ac + ad + bc + bd. Ensuite, on <b>réduit</b>.",
      "<b>Factoriser</b>, c'est transformer une somme en produit : ka + kb = k(a + b). Pour une différence de deux carrés : <b>a² − b² = (a − b)(a + b)</b>.",
      "Pour <b>résoudre une équation</b>, on isole x en faisant la même opération sur les deux membres, puis on <b>vérifie</b> en remplaçant x par la solution trouvée.",
      "<b>Équation produit nul</b> : un produit est nul si et seulement si l'un de ses facteurs est nul. A × B = 0 équivaut à A = 0 ou B = 0."
    ],

    sections: [
      {
        titre: "Les expressions littérales",
        points: [
          "Une <b>expression littérale</b> contient une ou plusieurs lettres. Une lettre désigne un nombre qui peut varier (une <b>variable</b>) ou un nombre que l'on cherche (une <b>inconnue</b>).",
          "On peut <b>supprimer le signe ×</b> devant une lettre ou une parenthèse : 5 × x = 5x ; 3 × (x + 2) = 3(x + 2) ; a × b = ab. Mais on garde le × entre deux nombres : 2 × 3.",
          "x × x = <b>x²</b> (« x au carré ») et x × x × x = <b>x³</b>. Attention : x² ≠ 2x. Pour x = 5, x² = 25 alors que 2x = 10.",
          "<b>Calculer une expression</b> pour une valeur : on remplace la lettre par le nombre et on remet les signes ×. Pour x = −2 : 3x² − 5x + 1 = 3 × (−2)² − 5 × (−2) + 1 = 12 + 10 + 1 = <b>23</b>.",
          "<b>Programme de calcul</b> : « Je choisis un nombre, je lui ajoute 3, puis je multiplie le résultat par 2 » se traduit par <b>2(x + 3)</b>, et non par x + 3 × 2."
        ]
      },
      {
        titre: "Réduire et supprimer des parenthèses",
        points: [
          "<b>Réduire</b>, c'est écrire une expression avec le moins de termes possible, en regroupant les <b>termes semblables</b> : les x² ensemble, les x ensemble, les nombres ensemble.",
          "Exemples : 4x + 7 − x + 2 = <b>3x + 9</b> ; 2x² + 5x − 3 + x² − 8x = <b>3x² − 3x − 3</b>.",
          "On ne regroupe pas des termes différents : 3x + 2 ne fait pas 5x, et x² + x ne fait ni x³ ni 2x². Ne pas confondre : x + x = <b>2x</b> mais x × x = <b>x²</b>.",
          "Un signe <b>+</b> devant une parenthèse : on supprime la parenthèse sans rien changer. 7 + (2x − 5) = 7 + 2x − 5 = <b>2x + 2</b>.",
          "Un signe <b>−</b> devant une parenthèse : on supprime la parenthèse en <b>changeant le signe de chaque terme</b> à l'intérieur. −(x − 3) = −x + 3, donc 4x − (3x − 7) = 4x − 3x + 7 = <b>x + 7</b>."
        ]
      },
      {
        titre: "Développer : la distributivité",
        points: [
          "<b>Développer</b>, c'est transformer un <b>produit</b> en <b>somme</b> (ou en différence).",
          "<b>Distributivité simple</b> : k(a + b) = ka + kb et k(a − b) = ka − kb. Exemples : 5(2x − 3) = <b>10x − 15</b> ; −2(x − 4) = <b>−2x + 8</b>, car (−) × (−) = (+).",
          "<b>Double distributivité</b> : (a + b)(c + d) = ac + ad + bc + bd. Chaque terme de la première parenthèse multiplie chaque terme de la seconde : on obtient 4 produits.",
          "Exemple : (x + 4)(2x − 3) = 2x² − 3x + 8x − 12 = <b>2x² + 5x − 12</b>.",
          "Piège du carré : (x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = <b>x² + 6x + 9</b>, et non x² + 9.",
          "<b>Identités remarquables</b> : <b>(a + b)² = a² + 2ab + b²</b> ; <b>(a − b)² = a² − 2ab + b²</b> ; <b>(a + b)(a − b) = a² − b²</b>. Exemples : (x + 5)² = <b>x² + 10x + 25</b> ; (3x − 2)² = <b>9x² − 12x + 4</b> ; (x + 4)(x − 4) = <b>x² − 16</b>.",
          "Un signe − devant un produit : on développe d'abord le produit <b>en gardant les parenthèses</b>, puis on les supprime. 3(x + 2) − (x + 2)(x − 1) = 3x + 6 − (x² + x − 2) = 3x + 6 − x² − x + 2 = <b>−x² + 2x + 8</b>."
        ]
      },
      {
        titre: "Factoriser",
        points: [
          "<b>Factoriser</b>, c'est transformer une <b>somme</b> en <b>produit</b> : c'est l'inverse de développer. On <b>vérifie</b> une factorisation en redéveloppant.",
          "<b>Facteur commun</b> : ka + kb = k(a + b) et ka − kb = k(a − b). Exemples : 6x + 15 = 3 × 2x + 3 × 5 = <b>3(2x + 5)</b> ; x² − 7x = x × x − 7 × x = <b>x(x − 7)</b>.",
          "Le facteur commun peut être une parenthèse : (x + 1)(2x + 3) + (x + 1)(x − 5) = (x + 1)[(2x + 3) + (x − 5)] = <b>(x + 1)(3x − 2)</b>.",
          "<b>Différence de deux carrés</b> : pour tous nombres a et b, <b>a² − b² = (a − b)(a + b)</b>. Preuve par double distributivité : (a − b)(a + b) = a² + ab − ab − b² = a² − b².",
          "Méthode : on écrit chaque terme comme un carré pour repérer a et b. x² − 25 = x² − 5² = <b>(x − 5)(x + 5)</b> ; 4x² − 9 = (2x)² − 3² = <b>(2x − 3)(2x + 3)</b>.",
          "Attention : une <b>somme</b> de deux carrés, comme x² + 25, ne se factorise pas ainsi. Bonus calcul mental : 101 × 99 = (100 + 1)(100 − 1) = 10 000 − 1 = 9 999."
        ]
      },
      {
        titre: "Tester une égalité",
        points: [
          "Une égalité qui contient des lettres peut être vraie pour certaines valeurs et fausse pour d'autres. Pour la <b>tester</b>, on remplace la lettre et on calcule <b>chaque membre séparément</b>.",
          "Exemple : 3x + 2 = 5x − 4 pour x = 3. D'une part 3 × 3 + 2 = 11 ; d'autre part 5 × 3 − 4 = 11. Les deux membres sont égaux : l'égalité est <b>vraie</b>, donc 3 est une <b>solution</b>.",
          "Pour x = 1 : d'une part 3 × 1 + 2 = 5 ; d'autre part 5 × 1 − 4 = 1. Comme 5 ≠ 1, l'égalité est <b>fausse</b> pour x = 1.",
          "Pour prouver qu'une égalité est <b>fausse en général</b>, un seul <b>contre-exemple</b> suffit : (x + 1)² = x² + 1 est fausse, car pour x = 1 on trouve 4 d'un côté et 2 de l'autre.",
          "Pour prouver qu'une égalité est <b>vraie pour tout x</b>, des exemples ne suffisent pas : on développe et on réduit chaque membre, et on doit trouver la même expression."
        ]
      },
      {
        titre: "Résoudre une équation du premier degré",
        points: [
          "Une <b>équation</b> est une égalité qui contient une <b>inconnue</b>, souvent x. Une <b>solution</b> est une valeur de x qui rend l'égalité vraie. <b>Résoudre</b>, c'est trouver toutes les solutions.",
          "Règles : on peut <b>ajouter ou soustraire</b> un même nombre aux deux membres, et <b>multiplier ou diviser</b> les deux membres par un même nombre <b>non nul</b>. L'égalité reste vraie.",
          "Méthode : on développe et on réduit si besoin ; on regroupe les x d'un côté et les nombres de l'autre ; on divise par le nombre devant x.",
          "Exemple : 5x + 3 = 2x − 9, donc 5x − 2x = −9 − 3, soit 3x = −12 et x = −12 ÷ 3 = <b>−4</b>. Vérification : 5 × (−4) + 3 = −17 et 2 × (−4) − 9 = −17.",
          "Exemple avec parenthèses : 2(x − 3) = 7 − x, donc 2x − 6 = 7 − x, puis 2x + x = 7 + 6, soit 3x = 13 et x = <b>13/3</b>. On garde la valeur exacte en fraction, pas 4,33.",
          "Erreur fréquente : de 3x = 12, on ne passe pas à x = 12 − 3. Le 3 multiplie x, donc on <b>divise</b> par 3 : x = 4."
        ]
      },
      {
        titre: "L'équation produit nul",
        points: [
          "<b>Propriété</b> : un produit de facteurs est nul <b>si et seulement si</b> au moins un de ses facteurs est nul. Autrement dit, A × B = 0 équivaut à A = 0 ou B = 0.",
          "Exemple : (x + 5)(3x − 6) = 0. Un produit est nul si l'un de ses facteurs est nul, donc x + 5 = 0 ou 3x − 6 = 0, soit x = −5 ou x = 2. L'équation a <b>deux solutions</b> : −5 et 2.",
          "Exemple : x(2x − 7) = 0 donne x = 0 ou 2x − 7 = 0, soit <b>x = 0 ou x = 3,5</b>.",
          "Si l'équation n'est pas un produit égal à 0, on <b>factorise d'abord</b>. x² − 16 = 0 s'écrit (x − 4)(x + 4) = 0, donc x = 4 ou x = −4.",
          "Autre exemple : x² = 5x. On ramène tout d'un côté : x² − 5x = 0, soit x(x − 5) = 0, donc x = 0 ou x = 5. Diviser par x ferait perdre la solution 0.",
          "Attention : la propriété ne marche qu'avec <b>0</b>. Avec (x − 1)(x + 2) = 6, on ne peut pas écrire x − 1 = 6 ou x + 2 = 6."
        ]
      },
      {
        titre: "Mettre un problème en équation",
        points: [
          "Méthode en quatre étapes : <b>choisir l'inconnue</b> (« Soit x le nombre de… ») ; <b>traduire</b> l'énoncé par une équation ; <b>résoudre</b> ; <b>vérifier</b> et <b>répondre</b> par une phrase avec l'unité.",
          "Exemple : un rectangle a un périmètre de 38 cm et sa longueur mesure 4 cm de plus que sa largeur. Soit x la largeur en cm : la longueur vaut x + 4.",
          "Équation : 2(x + x + 4) = 38, soit 4x + 8 = 38, donc 4x = 30 et x = 7,5. Vérification : 2 × (7,5 + 11,5) = 38. <b>Réponse : la largeur mesure 7,5 cm et la longueur 11,5 cm.</b>",
          "Comparer deux tarifs : tarif A, 12 € d'inscription puis 2 € par séance ; tarif B, 5 € par séance. Pour x séances : 12 + 2x = 5x, donc 3x = 12 et x = 4. Les deux tarifs coûtent autant (20 €) pour <b>4 séances</b>.",
          "Programme de calcul : « Je choisis un nombre, je lui ajoute 3, je multiplie par 2 et j'obtiens 17. » Soit x ce nombre : 2(x + 3) = 17, donc 2x + 6 = 17, 2x = 11 et <b>x = 5,5</b>."
        ]
      }
    ],

    mots: [
      ["Expression littérale", "Expression qui contient une ou plusieurs lettres désignant des nombres."],
      ["Terme", "Chacun des éléments que l'on additionne ou soustrait dans une somme. Dans 3x + 5, les termes sont 3x et 5."],
      ["Facteur", "Chacun des éléments que l'on multiplie dans un produit. Dans 3(x + 5), les facteurs sont 3 et (x + 5)."],
      ["Réduire", "Regrouper les termes semblables pour écrire une expression avec le moins de termes possible."],
      ["Développer", "Transformer un produit en somme, grâce à la distributivité."],
      ["Factoriser", "Transformer une somme en produit, en mettant en évidence un facteur commun."],
      ["Distributivité", "Propriété k(a + b) = ka + kb. La double distributivité donne (a + b)(c + d) = ac + ad + bc + bd."],
      ["Facteur commun", "Facteur présent dans chaque terme d'une somme. On le met devant une parenthèse pour factoriser."],
      ["Différence de deux carrés", "Expression de la forme a² − b², qui se factorise en (a − b)(a + b)."],
      ["Équation", "Égalité qui contient une inconnue, souvent notée x."],
      ["Membre", "Chacune des deux expressions situées de part et d'autre du signe égal."],
      ["Solution", "Valeur de l'inconnue qui rend l'égalité vraie."],
      ["Équation produit nul", "Équation de la forme A × B = 0. Elle équivaut à A = 0 ou B = 0."],
      ["Contre-exemple", "Exemple qui montre qu'une affirmation est fausse. Un seul suffit."]
    ],

    quiz: [
      { q: "Comment écrit-on plus simplement 4 × x ?",
        choix: ["x + 4", "x⁴", "4x", "4²x"],
        bonne: 2,
        why: "On peut supprimer le signe × devant une lettre : 4 × x = 4x." },

      { q: "Pour x = 5, combien vaut x² ?",
        choix: ["25", "10", "7", "52"],
        bonne: 0,
        why: "x² = x × x = 5 × 5 = 25. Il ne faut pas confondre avec 2x = 10." },

      { q: "Que vaut 3x² − 5x + 1 pour x = −2 ?",
        choix: ["23", "3", "−1", "47"],
        bonne: 0,
        why: "3 × (−2)² − 5 × (−2) + 1 = 12 + 10 + 1 = 23. Attention aux signes avec les nombres négatifs." },

      { q: "Quelle est la forme réduite de 4x + 7 − x + 2 ?",
        choix: ["12x", "5x + 9", "3x + 9", "3x + 5"],
        bonne: 2,
        why: "On regroupe les x (4x − x = 3x) et les nombres (7 + 2 = 9)." },

      { q: "Que vaut 4x − (3x − 7) ?",
        choix: ["x − 7", "7x − 7", "−x + 7", "x + 7"],
        bonne: 3,
        why: "Le signe − devant la parenthèse change le signe de chaque terme : 4x − 3x + 7 = x + 7." },

      { q: "Développer 5(2x − 3) donne :",
        choix: ["10x − 3", "10x − 15", "7x − 15", "10x + 15"],
        bonne: 1,
        why: "Le 5 multiplie les deux termes : 5 × 2x = 10x et 5 × (−3) = −15." },

      { q: "Développer et réduire (x + 4)(2x − 3) donne :",
        choix: ["2x² + 5x − 12", "2x² − 12", "2x² + 11x − 12", "3x + 1"],
        bonne: 0,
        why: "2x² − 3x + 8x − 12 = 2x² + 5x − 12. Il y a bien 4 produits." },

      { q: "Que vaut (x + 3)² ?",
        choix: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "2x + 6"],
        bonne: 1,
        why: "(x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9." },

      { q: "Développer une expression, c'est transformer :",
        choix: ["une somme en produit", "une équation en égalité", "une fraction en nombre décimal", "un produit en somme"],
        bonne: 3,
        why: "Développer transforme un produit en somme ; factoriser fait l'inverse." },

      { q: "Quelle est la forme factorisée de x² − 7x ?",
        choix: ["x(x − 7)", "x²(1 − 7)", "−7x³", "(x − 7)²"],
        bonne: 0,
        why: "Le facteur commun est x : x × x − 7 × x = x(x − 7)." },

      { q: "Quelle est la forme factorisée de 6x + 15 ?",
        choix: ["6(x + 15)", "3(2x + 15)", "2(3x + 5)", "3(2x + 5)"],
        bonne: 3,
        why: "6x = 3 × 2x et 15 = 3 × 5 : le facteur commun est 3. On vérifie en redéveloppant." },

      { q: "Comment factoriser x² − 49 ?",
        choix: ["(x − 7)²", "(x − 49)(x + 49)", "(x − 7)(x + 7)", "x(x − 49)"],
        bonne: 2,
        why: "x² − 49 = x² − 7² = (x − 7)(x + 7), avec a² − b² = (a − b)(a + b)." },

      { q: "Comment factoriser 4x² − 9 ?",
        choix: ["(4x − 3)(4x + 3)", "(2x − 3)(2x + 3)", "(2x − 9)(2x + 9)", "4(x − 3)(x + 3)"],
        bonne: 1,
        why: "4x² = (2x)² et 9 = 3², donc 4x² − 9 = (2x − 3)(2x + 3)." },

      { q: "L'égalité 3x + 2 = 5x − 4 est-elle vraie pour x = 3 ?",
        choix: ["Non, car 11 ≠ 15", "On ne peut pas savoir", "Oui, les deux membres valent 11", "Oui, car 3 + 2 = 5"],
        bonne: 2,
        why: "3 × 3 + 2 = 11 et 5 × 3 − 4 = 11 : les deux membres sont égaux." },

      { q: "Pour prouver qu'une égalité avec x est fausse en général, il suffit de :",
        choix: ["trouver un seul contre-exemple", "la tester avec trois valeurs", "développer le membre de gauche", "tracer une figure"],
        bonne: 0,
        why: "Une seule valeur pour laquelle l'égalité est fausse suffit à prouver qu'elle n'est pas toujours vraie." },

      { q: "Quelle est la solution de 5x + 3 = 2x − 9 ?",
        choix: ["x = 4", "x = −6/7", "x = −12", "x = −4"],
        bonne: 3,
        why: "5x − 2x = −9 − 3, donc 3x = −12 et x = −4. Vérification : les deux membres valent −17." },

      { q: "Quelles sont les solutions de (x + 5)(3x − 6) = 0 ?",
        choix: ["5 et −2", "−5 et 2", "−5 et 6", "5 et 6"],
        bonne: 1,
        why: "x + 5 = 0 donne x = −5 ; 3x − 6 = 0 donne x = 2." },

      { q: "Quelles sont les solutions de x² = 5x ?",
        choix: ["5 seulement", "0 seulement", "√5 seulement", "0 et 5"],
        bonne: 3,
        why: "x² − 5x = 0, soit x(x − 5) = 0 : x = 0 ou x = 5. Diviser par x ferait perdre la solution 0." },

      { q: "Un rectangle a un périmètre de 38 cm ; sa longueur mesure 4 cm de plus que sa largeur x. Quelle équation traduit l'énoncé ?",
        choix: ["x + x + 4 = 38", "2(x + x + 4) = 38", "x(x + 4) = 38", "2x + 4 = 38"],
        bonne: 1,
        why: "Le périmètre vaut 2 × (longueur + largeur), soit 2(x + x + 4)." },

      { q: "« Je choisis un nombre, je lui ajoute 3, puis je multiplie le résultat par 2. » Quelle expression obtient-on ?",
        choix: ["x + 3 × 2", "2x + 3", "2(x + 3)", "x² + 3"],
        bonne: 2,
        why: "On multiplie tout le résultat x + 3 par 2, donc il faut des parenthèses." }
    ]
  },

  {
    id: 'ma-m1',
    matiere: 'maths',
    ajout: true,
    fiche: true,
    zone: 'Méthode',
    numero: 'Méthode',
    titre: "Rédiger une démonstration en géométrie",
    periode: "Géométrie — la rédaction attendue au brevet",
    theme: "Données, propriété, conclusion : Thalès, Pythagore et trigonométrie",

    essentiel: [
      "Une démonstration suit toujours le même ordre : <b>on sait que</b> (les données) → <b>or</b> (la propriété ou le théorème) → <b>donc</b> (la conclusion).",
      "On n'utilise que les <b>données de l'énoncé</b> et les résultats déjà démontrés, jamais ce que l'on « voit » ou mesure sur la figure.",
      "On <b>cite le théorème par son nom</b> (« d'après le théorème de Pythagore… ») et on vérifie que toutes ses conditions sont remplies.",
      "Pour comparer deux nombres, on calcule <b>séparément</b> (« d'une part… d'autre part… ») avant de conclure, avec des valeurs <b>exactes</b>.",
      "On termine par une <b>phrase de réponse</b> avec l'unité : la valeur exacte, puis l'arrondi demandé avec le signe ≈."
    ],

    sections: [
      {
        titre: "La structure d'une démonstration",
        etapes: true,
        points: [
          "<b>Repérer ce que l'on cherche</b> : une longueur, un angle, un parallélisme, un angle droit. Cela décide de l'outil à utiliser.",
          "<b>Écrire les données</b> utiles de l'énoncé : triangle rectangle, droites parallèles, points alignés, longueurs. « On sait que… »",
          "<b>Citer la propriété</b> ou le théorème qui relie les données à ce que l'on cherche. « Or, d'après… »",
          "<b>Conclure</b>, puis faire les calculs si besoin. « Donc… »",
          "<b>Répondre</b> par une phrase qui reprend la question, avec l'unité et l'arrondi demandé."
        ],
        exemple: "<b>On sait que</b> le bâton [BC] et l'arbre [AD] sont tous les deux perpendiculaires au sol.<br><b>Or</b>, si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles.<br><b>Donc</b> les droites (BC) et (AD) sont parallèles. On peut maintenant utiliser le théorème de Thalès."
      },
      {
        titre: "Choisir le bon outil",
        points: [
          "Je cherche une <b>longueur</b> et je sais que deux droites sont <b>parallèles</b> : <b>théorème de Thalès</b>.",
          "Je veux prouver que deux droites sont <b>parallèles</b>, ou qu'elles ne le sont pas, à partir de longueurs : <b>réciproque</b> du théorème de Thalès, ou sa <b>contraposée</b>.",
          "Je cherche une <b>longueur</b> dans un triangle <b>rectangle</b> dont je connais deux côtés : <b>théorème de Pythagore</b>.",
          "Je veux prouver qu'un triangle <b>est rectangle</b>, ou qu'il ne l'est pas : <b>réciproque</b> ou <b>contraposée</b> du théorème de Pythagore.",
          "Je cherche un <b>angle</b>, ou une longueur à partir d'un angle, dans un triangle rectangle : <b>trigonométrie</b> (cosinus, sinus, tangente)."
        ]
      },
      {
        titre: "Rédactions types : Thalès et sa réciproque",
        points: [
          "<b>Thalès (calculer une longueur)</b> : « Les points A, M, B sont alignés, ainsi que les points A, N, C. Les droites (MN) et (BC) sont parallèles. D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC. » Puis on remplace et on fait un produit en croix.",
          "<b>Réciproque (prouver le parallélisme)</b> : « D'une part AM/AB = … ; d'autre part AN/AC = … On constate que AM/AB = AN/AC. De plus, les points A, M, B et A, N, C sont alignés dans le même ordre. Donc, d'après la réciproque du théorème de Thalès, les droites (MN) et (BC) sont parallèles. »",
          "<b>Contraposée (pas parallèles)</b> : « On constate que AM/AB ≠ AN/AC. Donc, d'après la contraposée du théorème de Thalès, les droites (MN) et (BC) ne sont pas parallèles. »",
          "On compare les rapports avec des <b>fractions exactes</b> (simplifiées ou mises au même dénominateur), jamais avec des valeurs arrondies."
        ],
        exemple: "<b>Énoncé</b> : les points A, M, B sont alignés, ainsi que A, N, C ; (MN) // (BC) ; AM = 3 cm, AB = 7,5 cm, AN = 2 cm et MN = 2,4 cm. Calculer AC et BC.<br><b>Rédaction</b> : Les points A, M, B sont alignés, ainsi que les points A, N, C. Les droites (MN) et (BC) sont parallèles. D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 3/7,5 = 2/AC = 2,4/BC.<br>Calcul de AC : AC = 2 × 7,5 ÷ 3 = 5.<br>Calcul de BC : BC = 2,4 × 7,5 ÷ 3 = 6.<br><b>Réponse</b> : AC mesure 5 cm et BC mesure 6 cm."
      },
      {
        titre: "Rédactions types : Pythagore, sa réciproque et sa contraposée",
        points: [
          "<b>Pythagore (calculer une longueur)</b> : « Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC². » On remplace, on calcule, puis on prend la racine carrée.",
          "<b>Réciproque (prouver qu'il est rectangle)</b> : « Dans le triangle ABC, le plus long côté est [BC]. D'une part BC² = … ; d'autre part AB² + AC² = … On constate que BC² = AB² + AC². Donc, d'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en A. »",
          "<b>Contraposée (prouver qu'il n'est pas rectangle)</b> : même début, puis « On constate que BC² ≠ AB² + AC². Donc, d'après la contraposée du théorème de Pythagore, le triangle ABC n'est pas rectangle. »",
          "On n'écrit <b>jamais</b> BC² = AB² + AC² avant de l'avoir vérifié : on calcule les deux membres séparément, puis on compare.",
          "L'angle droit est au sommet <b>opposé au plus long côté</b> : c'est lui qu'on nomme dans la conclusion."
        ],
        exemple: "<b>Énoncé</b> : ABC est rectangle en A, AB = 4 cm et BC = 9 cm. Calculer AC, arrondi au dixième.<br><b>Rédaction</b> : Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC².<br>Donc 9² = 4² + AC², soit 81 = 16 + AC².<br>AC² = 81 − 16 = 65.<br>AC = √65 ≈ 8,1.<br><b>Réponse</b> : AC mesure environ 8,1 cm."
      },
      {
        titre: "Rédaction type : la trigonométrie",
        points: [
          "On commence toujours par : « Le triangle ABC est rectangle en A. » La trigonométrie ne s'utilise que dans un triangle rectangle.",
          "On écrit la formule <b>avec les noms des points</b>, puis on remplace : « cos ABC = AB/BC, soit cos 52° = AB/6. »",
          "<b>Pour une longueur</b>, on l'isole par produit en croix : « AB = 6 × cos 52° ≈ 3,7 cm. »",
          "<b>Pour un angle</b> : « tan ABC = AC/AB = 5/8, donc ABC = arctan(5/8) ≈ 32°. » La calculatrice doit être en <b>mode degré</b>.",
          "On tape le calcul en une seule fois à la calculatrice : on n'arrondit jamais un cosinus au milieu du calcul."
        ],
        exemple: "<b>Énoncé</b> : EFG est rectangle en E, EF = 5 cm et FG = 8 cm. Calculer l'angle EFG, arrondi au degré.<br><b>Rédaction</b> : Le triangle EFG est rectangle en E. Pour l'angle EFG, [EF] est le côté adjacent et [FG] l'hypoténuse.<br>cos EFG = EF/FG = 5/8.<br>Donc EFG = arccos(5/8) ≈ 51°.<br><b>Réponse</b> : l'angle EFG mesure environ 51°."
      },
      {
        titre: "Arrondis, unités et erreurs fréquentes",
        points: [
          "<b>Valeur exacte, puis arrondi</b> : on garde √65 ou 13/3 pendant les calculs et on arrondit seulement à la fin, avec le signe <b>≈</b>. « Au dixième » = un chiffre après la virgule ; « au degré près » = un nombre entier.",
          "<b>Unités</b> : on met toutes les longueurs dans la même unité avant de calculer. Une longueur en cm, une aire en cm², un angle en degrés (°).",
          "<b>Confusions d'outil</b> : utiliser la réciproque au lieu du théorème (ou l'inverse) ; oublier l'alignement « dans le même ordre » ; utiliser Pythagore ou la trigonométrie sans avoir dit que le triangle est rectangle.",
          "<b>Erreurs de calcul</b> : écrire BC = AB + AC sans les carrés ; conclure avec des arrondis (« 0,33 = 0,33 donc parallèles ») ; calculatrice réglée en radians.",
          "<b>Vérifier la vraisemblance</b> : l'hypoténuse est le plus long côté ; un cosinus ou un sinus est entre 0 et 1 ; un angle aigu mesure entre 0° et 90°."
        ]
      }
    ],

    mots: [
      ["Démonstration", "Raisonnement qui prouve un résultat à partir des données et de propriétés du cours."],
      ["Données", "Les informations de l'énoncé, aussi appelées hypothèses. Ce sont les seules que l'on peut utiliser au départ."],
      ["Propriété", "Règle du cours de la forme « si… alors… », qui permet de passer des données à la conclusion."],
      ["Théorème", "Propriété importante, citée par son nom dans la rédaction : théorème de Thalès, de Pythagore."],
      ["Conclusion", "Ce que l'on déduit des données grâce à la propriété. Elle commence par « donc »."],
      ["Réciproque", "Énoncé obtenu en échangeant les données et la conclusion d'un théorème. Elle se cite séparément du théorème."],
      ["Contraposée", "Énoncé « si la conclusion est fausse, alors les données sont fausses ». Elle prouve qu'un triangle n'est pas rectangle ou que des droites ne sont pas parallèles."],
      ["Valeur exacte", "Résultat écrit sans arrondi, par exemple √65 ou 13/3."],
      ["Valeur approchée", "Résultat arrondi, écrit avec le signe ≈, par exemple 8,1."],
      ["Arrondi au dixième", "Valeur approchée avec un seul chiffre après la virgule."]
    ],

    quiz: [
      { q: "Dans quel ordre rédige-t-on une démonstration ?",
        choix: ["Conclusion, propriété, données", "Données, propriété, conclusion", "Propriété, conclusion, données", "Données, conclusion, propriété"],
        bonne: 1,
        why: "On sait que… (données), or… (propriété), donc… (conclusion)." },

      { q: "Je veux prouver que deux droites sont parallèles à partir de longueurs. J'utilise :",
        choix: ["le théorème de Pythagore", "le théorème de Thalès", "la réciproque du théorème de Thalès", "le cosinus"],
        bonne: 2,
        why: "Le théorème de Thalès calcule une longueur ; sa réciproque prouve un parallélisme." },

      { q: "Je veux prouver qu'un triangle n'est pas rectangle. J'utilise :",
        choix: ["la contraposée du théorème de Pythagore", "le théorème de Thalès", "la tangente", "la réciproque du théorème de Thalès"],
        bonne: 0,
        why: "Si le carré du plus long côté n'est pas égal à la somme des carrés des deux autres, le triangle n'est pas rectangle." },

      { q: "Peut-on utiliser une mesure prise sur la figure pour démontrer ?",
        choix: ["Oui, si elle est précise", "Oui, avec un rapporteur", "Seulement pour les angles", "Non, seules les données et les propriétés comptent"],
        bonne: 3,
        why: "Une figure peut être fausse ou imprécise : une démonstration s'appuie sur l'énoncé et le cours." },

      { q: "Pour vérifier si un triangle est rectangle, que faut-il faire ?",
        choix: ["Écrire directement BC² = AB² + AC²", "Calculer BC² et AB² + AC² séparément, puis comparer", "Mesurer l'angle au rapporteur", "Additionner les trois côtés"],
        bonne: 1,
        why: "On ne peut pas écrire l'égalité avant de l'avoir vérifiée : d'une part, d'autre part, puis on compare." },

      { q: "AM/AB ≈ 0,33 et AN/AC ≈ 0,33. Peut-on conclure que (MN) et (BC) sont parallèles ?",
        choix: ["Oui, les arrondis sont égaux", "Oui, si les points sont alignés", "Non, il faut comparer les fractions exactes", "Non, il faut utiliser Pythagore"],
        bonne: 2,
        why: "Deux valeurs arrondies égales ne prouvent pas que les fractions sont égales." },

      { q: "Quelle phrase faut-il écrire avant d'utiliser le cosinus dans le triangle ABC ?",
        choix: ["Le triangle ABC est rectangle en A.", "Les droites (AB) et (BC) sont parallèles.", "Les points sont alignés dans le même ordre.", "La calculatrice est en radians."],
        bonne: 0,
        why: "Le cosinus n'est défini ainsi que dans un triangle rectangle : il faut le dire en premier." },

      { q: "On trouve AC = √65 cm. Que faut-il écrire si on demande un arrondi au dixième ?",
        choix: ["AC = 8,1 cm", "AC ≈ 8,06 cm", "AC = √65 = 8 cm", "AC ≈ 8,1 cm"],
        bonne: 3,
        why: "Au dixième, c'est un chiffre après la virgule, avec le signe ≈ car c'est une valeur approchée." }
    ]
  }
);
