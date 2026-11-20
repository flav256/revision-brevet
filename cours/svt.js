/* ============================================================
   cours/svt.js — SVT : chapitres ajoutés et fiche méthode
   Même format que data.js (voir hg-ch1).
   ============================================================ */

DATA.chapitres.push(

  /* ------------------------------------------------------------
     CHAPITRE 1 — Génétique
  ------------------------------------------------------------ */
  {
    id: 'svt-ch1',
    matiere: 'svt',
    ajout: true,
    zone: 'Le vivant et son évolution',
    numero: 'Chapitre 1',
    titre: "Génétique : ADN, chromosomes, gènes et allèles",
    periode: "Hérédité et diversité génétique",
    theme: "Le vivant et son évolution — stabilité et diversité génétique des individus",

    essentiel: [
      "L'information génétique est rangée ainsi : <b>cellule → noyau → chromosomes → ADN → gène → allèles</b>. Un gène est une portion d'ADN qui détermine un caractère ; ses différentes versions sont les allèles.",
      "Chaque cellule humaine contient <b>46 chromosomes, soit 23 paires</b>. La 23<sup>e</sup> paire est <b>XX</b> chez la fille, <b>XY</b> chez le garçon. Le <b>caryotype</b> permet de les observer, et de repérer une anomalie comme la <b>trisomie 21</b> (47 chromosomes).",
      "La <b>mitose</b> donne deux cellules identiques à 46 chromosomes : l'ADN est copié avant, l'information génétique est <b>conservée</b>.",
      "La <b>méiose</b> produit des <b>gamètes à 23 chromosomes</b> (un de chaque paire). La <b>fécondation</b> réunit 23 + 23 = 46. Ce double <b>brassage</b> rend chaque individu unique.",
      "Un allèle <b>dominant</b> s'exprime même en un seul exemplaire, un allèle <b>récessif</b> seulement en deux. Les <b>mutations</b> créent de nouveaux allèles, et le phénotype dépend aussi de l'<b>environnement</b>."
    ],

    sections: [
      {
        titre: "De la cellule à l'ADN : où se trouve l'information génétique ?",
        points: [
          "Le corps humain est formé de milliards de <b>cellules</b>. La plupart possèdent un <b>noyau</b>, qui contient l'<b>information génétique</b> : les instructions nécessaires au développement et au fonctionnement de l'organisme.",
          "Le noyau contient des <b>chromosomes</b>. Chaque chromosome est formé d'une très longue molécule d'<b>ADN</b> enroulée sur elle-même. Déroulé, l'ADN d'une seule cellule humaine mesure environ 2 mètres.",
          "L'<b>ADN</b> est une molécule en forme de <b>double hélice</b>. C'est le support de l'information génétique chez tous les êtres vivants : on dit qu'il est <b>universel</b>.",
          "Un <b>gène</b> est une portion d'ADN située à un endroit précis d'un chromosome. Il contient l'information pour fabriquer une protéine, qui participe à un <b>caractère héréditaire</b> (le groupe sanguin, par exemple).",
          "Un même gène peut exister en plusieurs versions : ce sont les <b>allèles</b>. Exemple : le gène du groupe sanguin existe sous les allèles A, B et O.",
          "À retenir dans l'ordre : <b>cellule → noyau → chromosomes → ADN → gène → allèles</b>."
        ]
      },
      {
        titre: "Le caryotype : 23 paires de chromosomes",
        points: [
          "Le <b>caryotype</b> est la photographie des chromosomes d'une cellule, <b>classés par paires</b>, du plus grand au plus petit. On l'obtient à partir de cellules en division, quand les chromosomes sont bien visibles.",
          "Chaque cellule du corps humain contient <b>46 chromosomes, soit 23 paires</b>. Les deux chromosomes d'une paire portent les mêmes gènes, aux mêmes endroits, mais pas forcément les mêmes allèles.",
          "Dans chaque paire, un chromosome vient du <b>père</b> et l'autre de la <b>mère</b>.",
          "Les paires 1 à 22 sont les mêmes chez les filles et chez les garçons. La <b>23<sup>e</sup> paire</b> est celle des <b>chromosomes sexuels</b> : <b>XX</b> chez la fille, <b>XY</b> chez le garçon. Le chromosome Y est beaucoup plus petit que le X.",
          "Le nombre de chromosomes est le même pour tous les individus d'une espèce, mais il change d'une espèce à l'autre : 48 chez le chimpanzé, 78 chez le chien."
        ]
      },
      {
        titre: "Les anomalies chromosomiques",
        points: [
          "Un chromosome en plus, en moins ou abîmé modifie l'information génétique. Cela peut avoir des conséquences sur le développement et sur la santé.",
          "La <b>trisomie 21</b> : la personne possède <b>47 chromosomes</b>, avec <b>trois chromosomes 21</b> au lieu de deux. Elle entraîne des difficultés d'apprentissage plus ou moins importantes et certains traits physiques caractéristiques.",
          "Son origine : une erreur lors de la formation d'un <b>gamète</b>. Un ovule ou un spermatozoïde reçoit deux chromosomes 21 au lieu d'un. Après la fécondation avec un gamète normal, la cellule-œuf en possède trois.",
          "Le risque augmente avec l'âge de la mère. Un caryotype du fœtus peut être réalisé pendant la grossesse pour détecter l'anomalie.",
          "Autre exemple : le <b>syndrome de Turner</b> touche des filles qui n'ont qu'un seul chromosome X (45 chromosomes)."
        ]
      },
      {
        titre: "La mitose : conserver l'information génétique",
        points: [
          "Chaque être humain se développe à partir d'une seule cellule, la <b>cellule-œuf</b>, qui se divise un très grand nombre de fois. Toutes nos cellules ont donc la même information génétique.",
          "<b>Avant</b> la division, l'ADN est <b>copié</b> : chaque chromosome se duplique et se retrouve formé de <b>deux chromatides identiques</b>.",
          "<b>Pendant la mitose</b>, les chromosomes se condensent et deviennent visibles. Les deux copies de chaque chromosome se séparent et partent chacune dans une cellule-fille.",
          "Bilan : <b>1 cellule-mère à 46 chromosomes → 2 cellules-filles à 46 chromosomes</b>, identiques entre elles et à la cellule-mère. L'information génétique est <b>conservée</b>.",
          "La mitose permet la <b>croissance</b>, le <b>renouvellement</b> des cellules (peau, sang) et la <b>réparation</b> des tissus (cicatrisation)."
        ]
      },
      {
        titre: "Méiose et fécondation : chaque individu est unique",
        points: [
          "Les <b>gamètes</b> sont les cellules reproductrices : les <b>spermatozoïdes</b>, fabriqués dans les testicules, et les <b>ovules</b>, fabriqués dans les ovaires. Ils sont produits par une division particulière : la <b>méiose</b>.",
          "Pendant la méiose, les chromosomes de chaque paire se séparent : un gamète ne reçoit qu'<b>un chromosome de chaque paire</b>, soit <b>23 chromosomes</b>.",
          "Pour chaque paire, le chromosome qui part dans le gamète est choisi <b>au hasard</b>. Il existe ainsi plus de 8 millions de combinaisons possibles : chaque gamète est différent. C'est un premier <b>brassage</b> des allèles.",
          "La <b>fécondation</b> est l'union d'un spermatozoïde et d'un ovule : <b>23 + 23 = 46 chromosomes</b>. La cellule-œuf retrouve 23 paires. Quels gamètes se rencontrent, c'est aussi le hasard : c'est un second brassage.",
          "Conséquence : chaque individu possède une combinaison d'allèles <b>unique</b>. Seuls les <b>vrais jumeaux</b>, issus de la même cellule-œuf, ont la même information génétique.",
          "Le <b>sexe</b> est décidé à la fécondation : l'ovule porte toujours un X ; le spermatozoïde porte un X (→ fille XX) ou un Y (→ garçon XY). Il y a donc une chance sur deux d'avoir une fille."
        ]
      },
      {
        titre: "Allèles dominants et récessifs : l'exemple des groupes sanguins",
        points: [
          "Pour chaque gène, une cellule possède <b>deux allèles</b>, un sur chaque chromosome de la paire : l'un vient du père, l'autre de la mère. On les note entre parenthèses, par exemple (A//O).",
          "Si les deux allèles sont différents, l'allèle <b>dominant</b> s'exprime et masque l'autre. L'allèle <b>récessif</b> ne s'exprime que s'il est présent <b>en deux exemplaires</b>.",
          "Le gène du groupe sanguin (sur la paire n° 9) existe sous trois allèles : <b>A</b>, <b>B</b> et <b>O</b>. A et B sont <b>dominants sur O</b>. Quand A et B sont ensemble, ils s'expriment tous les deux : on dit qu'ils sont <b>codominants</b>.",
          "Groupe <b>A</b> : (A//A) ou (A//O). Groupe <b>B</b> : (B//B) ou (B//O). Groupe <b>AB</b> : (A//B). Groupe <b>O</b> : seulement (O//O).",
          "Deux parents du groupe A peuvent avoir un enfant du groupe O : s'ils sont tous les deux (A//O), chacun peut lui transmettre son allèle O.",
          "Dans un arbre généalogique, si deux parents non malades ont un enfant malade, l'allèle de la maladie est <b>récessif</b> : chaque parent le porte sans être malade. C'est le cas de la <b>mucoviscidose</b>."
        ]
      },
      {
        titre: "Génotype, phénotype, mutations et environnement",
        points: [
          "Le <b>génotype</b> est l'ensemble des allèles d'un individu. Le <b>phénotype</b> est l'ensemble de ses caractères observables (groupe sanguin, couleur de la peau, taille…).",
          "Une <b>mutation</b> est une modification accidentelle de l'ADN. Elle est rare et se produit au hasard, mais elle peut être favorisée par des agents <b>mutagènes</b> : rayons UV du soleil, rayons X, certaines substances chimiques comme celles de la fumée de tabac.",
          "Une mutation peut créer un <b>nouvel allèle</b>. Les mutations sont à l'origine de la diversité des allèles, donc de la <b>diversité génétique</b> des êtres vivants. Une mutation peut être sans effet, favorable ou défavorable (maladie génétique).",
          "Une mutation n'est transmise aux enfants que si elle touche une cellule à l'origine des <b>gamètes</b>. Dans une autre cellule du corps (la peau, par exemple), elle n'est pas transmise, mais elle peut provoquer un cancer.",
          "Le phénotype dépend des gènes <b>et de l'environnement</b> : le soleil fait bronzer, l'alimentation influe sur la taille, le sport développe les muscles. Ces changements ne modifient pas les allèles et ne se transmettent pas aux enfants.",
          "Ainsi, de vrais jumeaux, qui ont exactement les mêmes allèles, peuvent devenir différents selon leur mode de vie."
        ]
      }
    ],

    mots: [
      ["Chromosome", "Élément du noyau formé d'une très longue molécule d'ADN enroulée. L'être humain en possède 46, soit 23 paires."],
      ["ADN", "Molécule en forme de double hélice qui porte l'information génétique, chez tous les êtres vivants."],
      ["Gène", "Portion d'ADN située à un endroit précis d'un chromosome, qui détermine un caractère héréditaire."],
      ["Allèle", "Version d'un gène. Chaque individu possède deux allèles de chaque gène : un venant du père, un de la mère."],
      ["Caryotype", "Photographie des chromosomes d'une cellule, classés par paires et par taille."],
      ["Trisomie 21", "Anomalie chromosomique : la personne possède trois chromosomes 21 au lieu de deux, soit 47 chromosomes."],
      ["Mitose", "Division d'une cellule en deux cellules-filles identiques, qui gardent les 46 chromosomes."],
      ["Méiose", "Division particulière qui produit les gamètes : chacun ne reçoit qu'un chromosome de chaque paire."],
      ["Gamète", "Cellule reproductrice (spermatozoïde ou ovule) qui contient 23 chromosomes."],
      ["Fécondation", "Union d'un spermatozoïde et d'un ovule, qui donne une cellule-œuf à 46 chromosomes."],
      ["Dominant / récessif", "Un allèle dominant s'exprime même en un seul exemplaire ; un allèle récessif seulement s'il est présent deux fois."],
      ["Mutation", "Modification accidentelle de l'ADN, qui peut donner naissance à un nouvel allèle."],
      ["Génotype", "Ensemble des allèles que possède un individu."],
      ["Phénotype", "Ensemble des caractères observables d'un individu. Il dépend de ses allèles et de l'environnement."]
    ],

    quiz: [
      { q: "Quel est le bon ordre, du plus grand au plus petit ?",
        choix: ["Noyau → cellule → ADN → chromosome", "Cellule → noyau → chromosome → gène", "Chromosome → cellule → noyau → gène", "Gène → ADN → chromosome → noyau"],
        bonne: 1,
        why: "La cellule contient un noyau, qui contient les chromosomes, formés d'ADN dont certaines portions sont des gènes." },

      { q: "Une mutation sera transmise aux enfants si elle touche :",
        choix: ["une cellule à l'origine des gamètes", "une cellule de la peau", "une cellule du foie", "une cellule d'un muscle"],
        bonne: 0,
        why: "Seules les mutations présentes dans les cellules qui fabriquent les gamètes passent à la génération suivante." },

      { q: "Qu'est-ce que l'ADN ?",
        choix: ["Une cellule sexuelle", "Une protéine du sang", "Une paire de chromosomes", "La molécule qui porte l'information génétique"],
        bonne: 3,
        why: "L'ADN est une molécule en double hélice, présente chez tous les êtres vivants." },

      { q: "Un gène, c'est :",
        choix: ["un chromosome entier", "une cellule du noyau", "une portion d'ADN qui détermine un caractère héréditaire", "une version d'un allèle"],
        bonne: 2,
        why: "Un gène est un morceau d'ADN situé à un endroit précis d'un chromosome." },

      { q: "Les allèles sont :",
        choix: ["des versions différentes d'un même gène", "les chromosomes X et Y", "des cellules reproductrices", "des chromosomes en trop"],
        bonne: 0,
        why: "Par exemple, A, B et O sont trois allèles du gène du groupe sanguin." },

      { q: "Combien de chromosomes contient une cellule du corps humain ?",
        choix: ["23", "44", "46", "48"],
        bonne: 2,
        why: "46 chromosomes, soit 23 paires. 48, c'est le nombre du chimpanzé." },

      { q: "Qu'est-ce qu'un caryotype ?",
        choix: ["La photographie des chromosomes d'une cellule, classés par paires", "Une maladie génétique", "Un type de gamète", "La liste des allèles d'une personne"],
        bonne: 0,
        why: "Il permet de compter les chromosomes et de repérer le sexe ou une anomalie." },

      { q: "Sur un caryotype, la 23e paire est formée d'un X et d'un Y. Il s'agit :",
        choix: ["d'une fille", "d'une personne atteinte de trisomie", "d'un gamète", "d'un garçon"],
        bonne: 3,
        why: "XY correspond à un garçon, XX à une fille." },

      { q: "Une personne atteinte de trisomie 21 possède :",
        choix: ["45 chromosomes", "46 chromosomes, dont un chromosome 21 cassé", "47 chromosomes, dont trois chromosomes 21", "trois chromosomes X"],
        bonne: 2,
        why: "Elle a un chromosome 21 en trop : trois au lieu de deux." },

      { q: "D'où vient le plus souvent le chromosome 21 en trop ?",
        choix: ["D'une mutation causée par le soleil", "D'une erreur lors de la formation d'un gamète", "D'une mauvaise alimentation pendant la grossesse", "D'une infection après la naissance"],
        bonne: 1,
        why: "Un gamète a reçu deux chromosomes 21 au lieu d'un ; avec l'autre gamète, cela fait trois." },

      { q: "À la fin d'une mitose, on obtient :",
        choix: ["deux cellules à 23 chromosomes", "quatre gamètes différents", "une cellule-œuf", "deux cellules identiques à 46 chromosomes"],
        bonne: 3,
        why: "La mitose conserve l'information génétique : les cellules-filles sont identiques à la cellule-mère." },

      { q: "Que se passe-t-il juste avant la mitose ?",
        choix: ["Les chromosomes disparaissent", "L'ADN est copié : chaque chromosome se duplique", "Les paires se séparent au hasard", "Le noyau perd la moitié de ses chromosomes"],
        bonne: 1,
        why: "Grâce à cette copie, chaque cellule-fille reçoit les 46 chromosomes complets." },

      { q: "Le génotype d'un individu, c'est :",
        choix: ["l'ensemble de ses allèles", "l'ensemble de ses caractères visibles", "le nombre de ses chromosomes", "la photographie de ses chromosomes"],
        bonne: 0,
        why: "Les caractères observables forment le phénotype ; les allèles forment le génotype." },

      { q: "La fécondation permet :",
        choix: ["de copier l'ADN", "de fabriquer des gamètes", "de réunir 23 + 23 chromosomes dans une cellule-œuf", "de séparer les chromosomes X et Y"],
        bonne: 2,
        why: "Le spermatozoïde et l'ovule apportent chacun 23 chromosomes : la cellule-œuf en a 46." },

      { q: "Qu'est-ce qui détermine le sexe de l'enfant ?",
        choix: ["L'ovule, qui porte un X ou un Y", "Le spermatozoïde, qui porte un X ou un Y", "L'âge de la mère", "L'environnement pendant la grossesse"],
        bonne: 1,
        why: "L'ovule porte toujours un X ; le spermatozoïde (22 chromosomes + X ou Y) décide." },

      { q: "Pourquoi un frère et une sœur, qui ne sont pas jumeaux, sont-ils génétiquement différents ?",
        choix: ["Parce qu'ils n'ont pas le même nombre de chromosomes", "Parce que la mitose crée des cellules différentes", "Parce que leurs parents ont changé d'ADN entre les deux naissances", "Grâce au brassage lors de la formation des gamètes et de la fécondation"],
        bonne: 3,
        why: "Chaque gamète reçoit une combinaison de chromosomes due au hasard, et la rencontre des gamètes est aussi due au hasard." },

      { q: "Léna possède les allèles (A//O). Quel est son groupe sanguin ?",
        choix: ["Groupe O", "Groupe AB", "Groupe B", "Groupe A"],
        bonne: 3,
        why: "L'allèle A est dominant sur l'allèle O, qui est masqué." },

      { q: "Un allèle récessif s'exprime :",
        choix: ["toujours", "seulement s'il est présent en deux exemplaires", "seulement chez les garçons", "jamais"],
        bonne: 1,
        why: "Avec un allèle dominant à côté, il est masqué. Exemple : le groupe O correspond à (O//O)." },

      { q: "Qu'est-ce qu'une mutation ?",
        choix: ["Une modification de l'ADN qui peut créer un nouvel allèle", "Une division de la cellule", "Un chromosome en trop", "Le changement de groupe sanguin au cours de la vie"],
        bonne: 0,
        why: "Rares et dues au hasard, les mutations sont à l'origine de la diversité des allèles." },

      { q: "Deux vrais jumeaux n'ont pas la même masse musculaire. Que montre cet exemple ?",
        choix: ["Leurs allèles sont différents", "Leur génotype a changé", "Le phénotype dépend aussi de l'environnement", "Le sport modifie les chromosomes"],
        bonne: 2,
        why: "Ils ont les mêmes allèles, mais leur mode de vie (sport, alimentation) modifie leur phénotype." }
    ]
  },

  /* ------------------------------------------------------------
     CHAPITRE 2 — Planète Terre
  ------------------------------------------------------------ */
  {
    id: 'svt-ch2',
    matiere: 'svt',
    ajout: true,
    zone: "La planète Terre, l'environnement et l'action humaine",
    numero: 'Chapitre 2',
    titre: "Planète Terre : séismes, volcans et climat",
    periode: "Géologie, risques naturels et changement climatique",
    theme: "La planète Terre, l'environnement et l'action humaine — phénomènes géologiques et climat",

    essentiel: [
      "La surface de la Terre est découpée en <b>plaques lithosphériques</b> rigides qui se déplacent de <b>quelques centimètres par an</b> : elles s'écartent, se rapprochent ou glissent l'une contre l'autre.",
      "<b>Séisme</b> : les roches se cassent brutalement le long d'une <b>faille</b>. Le <b>foyer</b> est en profondeur, l'<b>épicentre</b> en surface juste au-dessus ; la <b>magnitude</b> mesure l'énergie libérée.",
      "<b>Volcan</b> : du magma remonte. Lave fluide → éruption <b>effusive</b> (coulées de lave) ; lave visqueuse → éruption <b>explosive</b> (nuées ardentes), la plus dangereuse. Séismes et volcans se concentrent aux limites des plaques.",
      "<b>Risque = aléa × enjeux</b>. On se protège par la surveillance des volcans, les constructions parasismiques, l'information et les plans d'évacuation.",
      "<b>Météo</b> = le temps à un moment donné ; <b>climat</b> = moyenne sur au moins 30 ans. Les gaz à effet de serre rejetés par les activités humaines (CO₂, méthane) réchauffent la Terre : il faut réduire les émissions (<b>atténuation</b>) et se préparer aux conséquences (<b>adaptation</b>)."
    ],

    sections: [
      {
        titre: "La structure du globe terrestre",
        points: [
          "La Terre est formée d'enveloppes emboîtées : la <b>croûte</b> (continentale, environ 30 km d'épaisseur ; océanique, environ 7 km), le <b>manteau</b> et le <b>noyau</b>, au centre.",
          "La <b>lithosphère</b> est la couche superficielle <b>rigide</b> : la croûte et la partie supérieure du manteau, sur environ 100 km d'épaisseur.",
          "En dessous, l'<b>asthénosphère</b> est une partie du manteau plus <b>déformable</b>. Attention : le manteau est solide, ce n'est pas un océan de lave.",
          "La Terre libère de la <b>chaleur interne</b>. Cette chaleur entretient des mouvements très lents dans le manteau, qui entraînent les plaques."
        ]
      },
      {
        titre: "Les plaques lithosphériques et leurs mouvements",
        points: [
          "La lithosphère est découpée en une douzaine de grandes <b>plaques lithosphériques</b> et de nombreuses petites. Une même plaque peut porter un océan et un continent.",
          "Les plaques se déplacent de <b>quelques centimètres par an</b>, à peu près la vitesse de pousse des ongles. On mesure ces mouvements par GPS.",
          "<b>Divergence</b> : deux plaques s'<b>écartent</b> au niveau d'une <b>dorsale</b> océanique. Du magma remonte et forme une nouvelle lithosphère océanique. Exemple : l'océan Atlantique s'élargit d'environ 2 cm par an.",
          "<b>Convergence</b> : deux plaques se <b>rapprochent</b>. Une plaque océanique peut plonger sous une autre plaque : c'est la <b>subduction</b> (Japon, Andes, Antilles). Deux continents peuvent entrer en <b>collision</b> et former une chaîne de montagnes (Himalaya, Alpes).",
          "<b>Coulissement</b> : deux plaques glissent l'une contre l'autre le long d'une grande faille, comme la faille de San Andreas en Californie.",
          "Les séismes et les volcans se concentrent surtout aux <b>limites des plaques</b> : sur une carte, ils dessinent leurs contours."
        ]
      },
      {
        titre: "Les séismes",
        points: [
          "Les mouvements des plaques déforment les roches, qui accumulent des tensions. Quand elles ne résistent plus, elles se <b>cassent brutalement</b> le long d'une <b>faille</b> : c'est un <b>séisme</b>.",
          "Le <b>foyer</b> est le point, en profondeur, où les roches se cassent. L'<b>épicentre</b> est le point de la surface situé <b>juste au-dessus du foyer</b> : c'est en général là que les secousses sont les plus fortes.",
          "Depuis le foyer, des <b>ondes sismiques</b> se propagent dans toutes les directions. Elles sont enregistrées par des <b>sismographes</b>, qui tracent des sismogrammes.",
          "La <b>magnitude</b> (échelle de Richter) mesure l'<b>énergie libérée</b> au foyer. Quand la magnitude augmente de 1, l'énergie est multipliée par environ 30. Le plus fort séisme enregistré atteint 9,5 (Chili, 1960).",
          "L'<b>intensité</b> (échelle de I à XII) décrit les <b>effets et les dégâts</b> observés en un lieu. Elle diminue en général quand on s'éloigne de l'épicentre.",
          "Un séisme sous la mer peut provoquer un <b>tsunami</b> : une série de vagues géantes qui envahissent les côtes."
        ]
      },
      {
        titre: "Les volcans : éruptions effusives et explosives",
        points: [
          "Le <b>magma</b> est de la roche fondue, chargée de gaz, formée en profondeur. Il remonte, s'accumule dans une <b>chambre magmatique</b>, puis monte par la <b>cheminée</b> et sort par le <b>cratère</b>.",
          "Le type d'éruption dépend surtout de la <b>viscosité</b> du magma, c'est-à-dire de sa facilité à couler.",
          "<b>Éruption effusive</b> : lave <b>fluide</b>, les gaz s'échappent facilement. Elle forme des <b>coulées de lave</b> et des fontaines de lave. Exemples : le Piton de la Fournaise (La Réunion), l'Islande.",
          "<b>Éruption explosive</b> : lave <b>visqueuse</b> (pâteuse), les gaz restent piégés puis provoquent des <b>explosions</b> : panaches de cendres, projections, <b>nuées ardentes</b> (avalanches brûlantes de gaz, de cendres et de blocs). Exemple : la Montagne Pelée (Martinique).",
          "Les éruptions explosives sont les plus dangereuses : en 1902, une nuée ardente de la Montagne Pelée a détruit la ville de Saint-Pierre et fait environ 28 000 morts.",
          "Les volcans explosifs se trouvent surtout dans les zones de <b>subduction</b> ; les volcans effusifs, au niveau des dorsales et de certaines îles océaniques comme La Réunion ou Hawaï."
        ]
      },
      {
        titre: "Aléa, enjeux, risque et prévention",
        points: [
          "L'<b>aléa</b> est la probabilité qu'un phénomène naturel (séisme, éruption) se produise en un lieu, avec une certaine intensité. Les <b>enjeux</b> sont les personnes, les biens et les activités qui peuvent être touchés.",
          "<b>Risque = aléa × enjeux</b>. Un séisme dans un désert présente peu de risque, car il y a peu d'enjeux ; le même séisme sous une grande ville est un <b>risque majeur</b>.",
          "Les dégâts dépendent aussi de la <b>vulnérabilité</b> : à magnitude égale, un séisme fait souvent plus de victimes là où les bâtiments ne sont pas adaptés et où les secours sont moins bien organisés.",
          "<b>Prévision</b> : on ne sait pas prévoir la date d'un séisme, seulement les zones où il est probable. Les volcans, eux, sont <b>surveillés</b> (petits séismes, gonflement du sol, gaz) : on peut souvent <b>évacuer</b> la population avant l'éruption.",
          "<b>Prévention</b> : constructions <b>parasismiques</b>, interdiction de construire dans les zones les plus dangereuses (plans de prévention des risques), systèmes d'alerte aux tsunamis.",
          "<b>Information</b> : connaître les consignes et s'entraîner. Pendant un séisme, s'abriter sous une table solide, loin des fenêtres ; après, sortir sans prendre l'ascenseur et s'éloigner des bâtiments."
        ]
      },
      {
        titre: "Météo et climat",
        points: [
          "La <b>météo</b> décrit le temps qu'il fait en un lieu et à un moment donné : température, pluie, vent, nuages. Elle change d'un jour à l'autre et se prévoit sur quelques jours.",
          "Le <b>climat</b> est la moyenne des conditions météorologiques d'une région, calculée sur <b>au moins 30 ans</b>. Exemples : climat tempéré, tropical, polaire.",
          "Un été très chaud ou un hiver très froid ne suffit pas à dire que le climat change : il faut observer une <b>tendance sur plusieurs décennies</b>.",
          "Le climat de la Terre a déjà changé naturellement dans le passé (périodes glaciaires), mais très lentement, sur des milliers d'années. Le réchauffement actuel est beaucoup plus rapide."
        ]
      },
      {
        titre: "L'effet de serre et le réchauffement climatique",
        points: [
          "Le Soleil chauffe la surface de la Terre, qui renvoie de la chaleur vers l'espace. Certains gaz de l'atmosphère, les <b>gaz à effet de serre</b> (vapeur d'eau, dioxyde de carbone CO₂, méthane CH₄), retiennent une partie de cette chaleur : c'est l'<b>effet de serre</b>.",
          "L'effet de serre <b>naturel</b> est indispensable à la vie : sans lui, la température moyenne de la Terre serait d'environ <b>−18 °C</b> au lieu de <b>+15 °C</b>.",
          "Depuis la révolution industrielle (XIX<sup>e</sup> siècle), les activités humaines rejettent beaucoup plus de gaz à effet de serre : combustion du <b>charbon, du pétrole et du gaz</b> (transports, industrie, chauffage, électricité), <b>déforestation</b>, élevage et rizières (méthane).",
          "La quantité de CO₂ dans l'air est passée d'environ <b>280 ppm</b> avant 1850 à <b>plus de 420 ppm</b> aujourd'hui (ppm : parties par million). L'effet de serre se renforce.",
          "Résultat : la température moyenne de la Terre a augmenté d'environ <b>1,2 °C</b> depuis la fin du XIX<sup>e</sup> siècle. Les scientifiques du <b>GIEC</b> concluent que ce réchauffement est dû aux <b>activités humaines</b>."
        ]
      },
      {
        titre: "Conséquences du réchauffement et solutions",
        points: [
          "<b>Conséquences</b> : fonte des glaciers et des calottes glaciaires, <b>élévation du niveau des océans</b> (environ 20 cm depuis 1900), canicules, sécheresses et pluies violentes plus fréquentes, acidification des océans (coraux menacés), déplacement ou disparition d'espèces.",
          "Le niveau des océans monte car l'eau se <b>dilate</b> en se réchauffant et car les glaces <b>posées sur les continents</b> fondent. Piège : la fonte de la banquise, qui flotte déjà sur la mer, ne fait presque pas monter le niveau.",
          "Les sociétés humaines sont touchées : récoltes, accès à l'eau, santé, populations obligées de quitter des côtes ou des régions devenues trop sèches.",
          "<b>Atténuation</b> : agir sur la cause en réduisant les émissions de gaz à effet de serre (énergies renouvelables, isolation des logements, transports en commun et vélo, moins de gaspillage) et en protégeant les forêts et les océans, qui stockent du carbone.",
          "<b>Adaptation</b> : se préparer aux conséquences qu'on ne peut plus éviter (digues, arbres et espaces verts en ville contre les canicules, cultures résistantes à la sécheresse, économies d'eau).",
          "Avec l'<b>accord de Paris</b> (2015), les États se sont engagés à limiter le réchauffement nettement en dessous de 2 °C, si possible à 1,5 °C. Chacun peut aussi agir à son échelle."
        ]
      }
    ],

    mots: [
      ["Plaque lithosphérique", "Morceau rigide de la surface de la Terre (croûte et partie supérieure du manteau), qui se déplace de quelques centimètres par an."],
      ["Faille", "Cassure des roches le long de laquelle deux blocs se déplacent l'un par rapport à l'autre."],
      ["Foyer", "Point en profondeur où les roches se cassent lors d'un séisme."],
      ["Épicentre", "Point de la surface situé juste au-dessus du foyer d'un séisme."],
      ["Magnitude", "Mesure de l'énergie libérée au foyer d'un séisme (échelle de Richter)."],
      ["Éruption effusive", "Éruption d'une lave fluide, qui forme des coulées de lave."],
      ["Éruption explosive", "Éruption d'une lave visqueuse, qui provoque des explosions et des nuées ardentes."],
      ["Aléa", "Probabilité qu'un phénomène naturel se produise en un lieu, avec une certaine intensité."],
      ["Enjeux", "Personnes, biens et activités qui peuvent être touchés par un phénomène naturel."],
      ["Risque", "Danger pour une population, qui dépend de l'aléa et des enjeux : risque = aléa × enjeux."],
      ["Climat", "Moyenne des conditions météorologiques d'une région sur au moins 30 ans. À ne pas confondre avec la météo du jour."],
      ["Effet de serre", "Phénomène naturel par lequel certains gaz de l'atmosphère retiennent une partie de la chaleur émise par la Terre."],
      ["Atténuation", "Actions qui réduisent les émissions de gaz à effet de serre pour limiter le réchauffement."],
      ["Adaptation", "Actions qui préparent les sociétés aux conséquences du réchauffement qu'on ne peut plus éviter."]
    ],

    quiz: [
      { q: "À quelle vitesse se déplacent les plaques lithosphériques ?",
        choix: ["De quelques mètres par an", "De quelques centimètres par an", "De quelques kilomètres par an", "Elles ne bougent pas"],
        bonne: 1,
        why: "Environ la vitesse de pousse des ongles ; on la mesure par GPS." },

      { q: "Sur quoi les plaques lithosphériques se déplacent-elles ?",
        choix: ["Sur un océan de lave liquide", "Directement sur le noyau", "Sur l'asthénosphère, une partie plus déformable du manteau", "Sur la croûte océanique"],
        bonne: 2,
        why: "Le manteau est solide, mais l'asthénosphère est assez déformable pour que les plaques bougent." },

      { q: "La lithosphère est formée :",
        choix: ["de la croûte et de la partie supérieure du manteau", "du noyau et du manteau", "uniquement de la croûte océanique", "uniquement de magma"],
        bonne: 0,
        why: "C'est une couche rigide d'environ 100 km d'épaisseur, découpée en plaques." },

      { q: "Que se passe-t-il au niveau d'une dorsale océanique ?",
        choix: ["Deux plaques s'écartent", "Une plaque plonge sous une autre", "Deux continents entrent en collision", "Deux plaques glissent côte à côte"],
        bonne: 0,
        why: "Du magma remonte et forme une nouvelle lithosphère océanique : l'Atlantique s'élargit ainsi." },

      { q: "Comment appelle-t-on le plongement d'une plaque océanique sous une autre plaque ?",
        choix: ["La collision", "La dorsale", "L'épicentre", "La subduction"],
        bonne: 3,
        why: "On trouve la subduction au Japon, dans les Andes ou aux Antilles : séismes et volcans explosifs." },

      { q: "Un séisme est provoqué par :",
        choix: ["la remontée du magma", "la rupture brutale des roches le long d'une faille", "un vent très violent", "la fonte des glaciers"],
        bonne: 1,
        why: "Les roches accumulent des tensions puis cassent d'un coup : les ondes sismiques partent du foyer." },

      { q: "Le foyer d'un séisme est :",
        choix: ["le point de la surface le plus touché", "l'endroit où se trouve le sismographe", "le point en profondeur où les roches se cassent", "le centre de la Terre"],
        bonne: 2,
        why: "Le foyer est en profondeur ; l'épicentre est en surface, juste au-dessus." },

      { q: "L'épicentre d'un séisme est :",
        choix: ["le point en profondeur où les roches se cassent", "la limite entre deux plaques", "le cratère d'un volcan", "le point de la surface situé juste au-dessus du foyer"],
        bonne: 3,
        why: "C'est en général là que les secousses sont les plus fortes." },

      { q: "Que mesure la magnitude d'un séisme ?",
        choix: ["Les dégâts observés en un lieu", "L'énergie libérée au foyer", "La profondeur du foyer", "La durée des secousses"],
        bonne: 1,
        why: "Les dégâts, eux, sont décrits par l'intensité, notée de I à XII." },

      { q: "Une éruption effusive se caractérise par :",
        choix: ["des nuées ardentes", "des coulées de lave fluide", "une lave très visqueuse", "des explosions violentes"],
        bonne: 1,
        why: "Les gaz s'échappent facilement d'une lave fluide, qui s'écoule en coulées." },

      { q: "Qu'est-ce qu'une nuée ardente ?",
        choix: ["Un nuage de pluie au-dessus du volcan", "Une coulée de lave fluide", "Une avalanche brûlante de gaz, de cendres et de blocs", "Un séisme sous la mer"],
        bonne: 2,
        why: "Elle est typique des éruptions explosives, comme à la Montagne Pelée en 1902." },

      { q: "Où se trouvent la plupart des séismes et des volcans ?",
        choix: ["Au centre des continents", "Près des pôles", "Au hasard sur la Terre", "Aux limites des plaques"],
        bonne: 3,
        why: "C'est là que les plaques s'écartent, se rapprochent ou coulissent." },

      { q: "Dans quel cas le risque sismique est-il le plus fort ?",
        choix: ["Aléa fort et enjeux importants", "Aléa fort dans une région déserte", "Aléa faible et enjeux faibles", "Aucun aléa mais une grande ville"],
        bonne: 0,
        why: "Risque = aléa × enjeux : il faut à la fois un phénomène probable et des personnes ou des biens exposés." },

      { q: "Les enjeux désignent :",
        choix: ["la probabilité qu'un séisme se produise", "la magnitude d'un séisme", "les personnes, les biens et les activités exposés", "les plaques en mouvement"],
        bonne: 2,
        why: "La probabilité du phénomène, c'est l'aléa." },

      { q: "Laquelle de ces mesures est une mesure de prévention du risque sismique ?",
        choix: ["Prévoir la date exacte du prochain séisme", "Construire des bâtiments parasismiques", "Empêcher les plaques de bouger", "Construire au plus près des failles"],
        bonne: 1,
        why: "On ne sait pas prévoir la date d'un séisme, mais on peut construire des bâtiments qui résistent." },

      { q: "Quelle est la différence entre la météo et le climat ?",
        choix: ["Il n'y en a aucune", "Le climat change chaque jour", "La météo est une moyenne sur 30 ans", "La météo décrit le temps à un moment donné ; le climat est une moyenne sur au moins 30 ans"],
        bonne: 3,
        why: "Une journée très chaude, c'est de la météo ; une tendance sur des décennies, c'est le climat." },

      { q: "Sans effet de serre naturel, la température moyenne de la Terre serait d'environ :",
        choix: ["−18 °C", "+15 °C", "0 °C", "+30 °C"],
        bonne: 0,
        why: "Grâce à l'effet de serre naturel, elle est d'environ +15 °C : il est indispensable à la vie." },

      { q: "Quelle activité humaine rejette le plus de CO₂ ?",
        choix: ["La combustion du charbon, du pétrole et du gaz", "La respiration des humains", "Les éoliennes", "Les panneaux solaires"],
        bonne: 0,
        why: "Transports, industrie, chauffage et production d'électricité brûlent des énergies fossiles." },

      { q: "Pourquoi le niveau des océans monte-t-il ?",
        choix: ["Seulement à cause de la fonte de la banquise", "À cause des séismes sous-marins", "Parce que l'eau se dilate en se réchauffant et que les glaces des continents fondent", "Parce qu'il pleut davantage"],
        bonne: 2,
        why: "La banquise flotte déjà sur la mer : sa fonte ne fait presque pas monter le niveau." },

      { q: "Construire des digues et planter des arbres en ville contre les canicules, c'est :",
        choix: ["de l'atténuation", "une cause du réchauffement", "de la prévention sismique", "de l'adaptation"],
        bonne: 3,
        why: "On se prépare aux conséquences. Réduire les émissions de gaz à effet de serre, ce serait de l'atténuation." }
    ]
  },

  /* ------------------------------------------------------------
     FICHE MÉTHODE — Exploiter un document en SVT
  ------------------------------------------------------------ */
  {
    id: 'svt-m1',
    matiere: 'svt',
    ajout: true,
    fiche: true,
    zone: 'Méthode',
    numero: 'Méthode',
    titre: "Exploiter un document et rédiger une réponse en SVT",
    periode: "Document, consigne, démarche expérimentale, schéma",
    theme: "Méthode pour l'épreuve de sciences du brevet",

    essentiel: [
      "Avant de répondre : identifier le document (titre, type, axes, unités) et souligner le <b>verbe de la consigne</b>.",
      "Rédiger en trois temps : <b>je vois</b> (valeurs et unités), <b>je sais</b> (la connaissance du cours), <b>je conclus</b> (la réponse à la question).",
      "Une expérience se compare toujours à un <b>témoin</b>, et on ne fait varier qu'<b>un seul paramètre</b> à la fois.",
      "Un schéma : un titre, des traits tirés à la règle, des légendes écrites à l'horizontale.",
      "Au brevet : <b>1 heure pour 2 disciplines</b> parmi physique-chimie, SVT et technologie, soit environ <b>30 minutes</b> pour la SVT."
    ],

    sections: [
      {
        titre: "Identifier et lire un document",
        etapes: true,
        points: [
          "<b>Lire le titre</b> : il dit de quoi parle le document, et souvent ce qu'il cherche à montrer.",
          "<b>Repérer le type</b> : graphique, tableau, schéma, photographie (au microscope, noter le grossissement), texte, carte ou résultats d'expérience.",
          "<b>Pour un graphique</b> : lire ce que représente chaque axe et son <b>unité</b>. L'axe horizontal porte souvent le temps ou ce que l'on fait varier ; l'axe vertical, ce que l'on mesure. <b>Pour un tableau</b> : lire les titres des lignes et des colonnes avant les nombres.",
          "<b>Relever des valeurs précises</b>, toujours avec leur unité : au début, à la fin, au maximum, au minimum.",
          "<b>Décrire la tendance</b> : augmente, diminue, reste stable, atteint un maximum. Si la courbe change d'allure, la découper en phases.",
          "<b>Chiffrer les écarts</b> : calculer une différence (« 6 g de plus ») ou un rapport (« 4 fois plus »)."
        ],
        exemple: "<b>Document :</b> masse d'une jeune plante en fonction du temps.<br><b>Description :</b> de 0 à 10 jours, la masse de la plante passe de 2 g à 8 g : elle augmente, elle est multipliée par 4. De 10 à 20 jours, elle reste stable à 8 g : la croissance s'arrête."
      },
      {
        titre: "Comprendre le verbe de la consigne",
        points: [
          "<b>Relever, extraire</b> : prélever une information précise dans le document, sans l'expliquer.",
          "<b>Décrire</b> : dire ce que l'on voit, avec des valeurs et leurs unités. Pas d'explication à ce stade.",
          "<b>Comparer</b> : donner les ressemblances et les différences, chiffres à l'appui (« plus que », « moins que », « 3 fois plus »). On compare souvent une expérience à son témoin.",
          "<b>Expliquer, interpréter</b> : donner le sens des observations à l'aide de ses connaissances (« car », « cela s'explique par… »).",
          "<b>Déduire, conclure</b> : répondre au problème posé en une ou deux phrases. <b>Justifier, argumenter</b> : appuyer sa réponse sur des éléments précis des documents et du cours.",
          "Repérer aussi les documents à utiliser : « à l'aide des documents 1 et 2 » veut dire qu'il faut se servir des deux, et les citer."
        ]
      },
      {
        titre: "Rédiger : je vois, je sais, je conclus",
        etapes: true,
        points: [
          "<b>Je vois</b> : je décris ce que montre le document, avec des valeurs et leurs unités, en le citant (« le document 2 montre que… »).",
          "<b>Je sais</b> : j'apporte la connaissance du cours qui explique cette observation, avec le vocabulaire précis.",
          "<b>Je conclus</b> : je réponds à la question posée, en reprenant ses mots. On peut aussi rédiger avec « On observe que… Or… Donc… ».",
          "<b>Je relis</b> : des phrases complètes, des unités partout, et une conclusion qui répond bien à la question."
        ],
        exemple: "<b>Question :</b> à l'aide du document, expliquer l'évolution de la température moyenne de la Terre depuis 1850.<br><b>Je vois</b> que la quantité de CO₂ dans l'air passe d'environ 280 ppm en 1850 à plus de 420 ppm aujourd'hui, et que, dans le même temps, la température moyenne augmente d'environ 1,2 °C.<br><b>Je sais</b> que le CO₂ est un gaz à effet de serre, rejeté par la combustion du charbon, du pétrole et du gaz : plus il y en a, plus l'atmosphère retient de chaleur.<br><b>Je conclus</b> que le réchauffement climatique actuel s'explique par l'augmentation du CO₂ due aux activités humaines."
      },
      {
        titre: "La démarche expérimentale et le témoin",
        etapes: true,
        points: [
          "<b>Le problème</b> : la question scientifique à résoudre, souvent posée à partir d'une observation.",
          "<b>L'hypothèse</b> : une réponse possible au problème, que l'on peut tester. « Je suppose que… »",
          "<b>Le protocole</b> : l'expérience qui teste l'hypothèse. On ne fait varier qu'<b>un seul paramètre</b> ; tous les autres restent identiques.",
          "<b>Le témoin</b> : la même expérience, dans laquelle le paramètre testé n'est pas modifié. Il sert de <b>référence</b> pour comparer.",
          "<b>Les résultats</b> : on compare l'expérience au témoin. On utilise plusieurs individus ou on répète l'expérience pour que le résultat soit fiable.",
          "<b>La conclusion</b> : l'hypothèse est <b>validée</b> ou <b>invalidée</b>. Si elle est invalidée, on en propose une autre."
        ],
        exemple: "<b>Problème :</b> les graines ont-elles besoin d'eau pour germer ?<br><b>Hypothèse :</b> je suppose que l'eau est nécessaire à la germination.<br><b>Protocole :</b> deux lots de 10 graines identiques, à la même température et à la même lumière. Lot 1 sur du coton humide (témoin), lot 2 sur du coton sec : seule la présence d'eau change.<br><b>Résultats :</b> après 5 jours, 9 graines sur 10 ont germé dans le lot 1, aucune dans le lot 2.<br><b>Conclusion :</b> l'hypothèse est validée : l'eau est nécessaire à la germination de ces graines."
      },
      {
        titre: "Réaliser un schéma ou un dessin d'observation",
        points: [
          "Un <b>dessin d'observation</b> représente fidèlement ce que l'on voit, par exemple au microscope. Un <b>schéma</b> simplifie pour montrer une organisation ou un fonctionnement (avec des flèches, des couleurs).",
          "Toujours un <b>titre</b> précis, qui dit ce qui est représenté, avec le grossissement pour une observation au microscope.",
          "Dessiner au <b>crayon à papier</b>, assez grand, avec des traits nets.",
          "<b>Légendes</b> : écrites à l'horizontale, alignées sur le côté, reliées à l'élément par un trait tiré à la <b>règle</b>. Les traits ne se croisent pas.",
          "Si l'on utilise des couleurs ou des flèches, ajouter une clé qui explique ce qu'elles signifient."
        ]
      },
      {
        titre: "L'épreuve de sciences au brevet",
        points: [
          "L'épreuve écrite de sciences dure <b>1 heure</b> et porte sur <b>2 disciplines parmi 3</b> : physique-chimie, SVT et technologie. Il faut donc être prêt dans les trois.",
          "Compter <b>environ 30 minutes</b> par discipline et surveiller l'heure : ne pas passer tout le temps sur la première partie.",
          "Lire tout le sujet et tous les documents avant d'écrire : l'introduction pose souvent le problème, et les questions suivent un fil.",
          "Répondre par des <b>phrases complètes</b>, citer le document utilisé, donner les valeurs avec leurs unités et employer le vocabulaire du cours.",
          "Une question bloque ? La passer et y revenir. Ne laisser aucune question sans réponse : une démarche, même incomplète, peut rapporter des points."
        ]
      }
    ],

    mots: [
      ["Consigne", "La question posée ; son verbe indique le travail attendu."],
      ["Décrire", "Dire ce que montre le document, avec des valeurs et leurs unités, sans l'expliquer."],
      ["Comparer", "Donner les ressemblances et les différences entre deux situations, chiffres à l'appui."],
      ["Interpréter", "Donner le sens d'une observation ou d'un résultat à l'aide de ses connaissances."],
      ["Problème", "La question scientifique à laquelle on cherche à répondre."],
      ["Hypothèse", "Réponse possible à un problème, que l'on va tester."],
      ["Protocole", "Description précise de l'expérience réalisée pour tester une hypothèse."],
      ["Paramètre", "Facteur que l'on peut faire varier dans une expérience : température, lumière, eau…"],
      ["Témoin", "Expérience de référence dans laquelle le paramètre testé n'est pas modifié."],
      ["Conclusion", "Réponse au problème : elle dit si l'hypothèse est validée ou invalidée."],
      ["Schéma", "Représentation simplifiée, titrée et légendée, qui montre une organisation ou un fonctionnement."],
      ["Grossissement", "Nombre de fois qu'un objet est agrandi au microscope. Il s'indique dans le titre d'un dessin d'observation."]
    ],

    quiz: [
      { q: "La consigne dit « Décrivez l'évolution de la masse ». Que faut-il faire ?",
        choix: ["Expliquer pourquoi la masse change", "Dire ce que l'on voit, avec des valeurs et leurs unités", "Proposer une hypothèse", "Faire un schéma"],
        bonne: 1,
        why: "Décrire, c'est dire ce que montre le document, chiffres à l'appui, sans encore l'expliquer." },

      { q: "Que demande le verbe « interpréter » ?",
        choix: ["De recopier une valeur", "De décrire la courbe sans conclure", "De donner le sens des résultats avec ses connaissances", "De proposer une nouvelle expérience"],
        bonne: 2,
        why: "Interpréter ou expliquer, c'est relier ce que l'on observe au cours." },

      { q: "Dans « je vois, je sais, je conclus », à quoi sert « je sais » ?",
        choix: ["À apporter la connaissance du cours qui explique l'observation", "À recopier les valeurs du graphique", "À répondre directement à la question", "À présenter l'auteur du document"],
        bonne: 0,
        why: "« Je vois » décrit le document, « je sais » apporte le cours, « je conclus » répond à la question." },

      { q: "Avant de lire les valeurs d'un graphique, que faut-il repérer ?",
        choix: ["La valeur la plus grande", "La couleur de la courbe", "Ce que représente chaque axe et son unité", "Le nombre de graduations"],
        bonne: 2,
        why: "Sans les axes et les unités, on ne sait pas ce que signifient les valeurs lues." },

      { q: "À quoi sert une expérience témoin ?",
        choix: ["À servir de référence, sans modifier le paramètre testé", "À tester plusieurs paramètres à la fois", "À vérifier que le matériel est propre", "À remplacer le protocole"],
        bonne: 0,
        why: "On compare l'expérience au témoin pour voir l'effet du seul paramètre modifié." },

      { q: "Dans une expérience, combien de paramètres fait-on varier à la fois ?",
        choix: ["Tous", "Deux", "Aucun", "Un seul"],
        bonne: 3,
        why: "Si deux paramètres changent, on ne peut pas savoir lequel explique le résultat." },

      { q: "Une hypothèse, c'est :",
        choix: ["un résultat d'expérience", "une réponse possible au problème, que l'on va tester", "une conclusion certaine", "la liste du matériel"],
        bonne: 1,
        why: "L'expérience permet ensuite de la valider ou de l'invalider." },

      { q: "Dans un schéma, les légendes :",
        choix: ["sont écrites en biais, le long des traits", "sont facultatives", "sont écrites à l'intérieur du dessin", "sont écrites à l'horizontale et reliées par des traits tirés à la règle"],
        bonne: 3,
        why: "Des légendes alignées, horizontales et des traits qui ne se croisent pas rendent le schéma lisible." },

      { q: "Comment est organisée l'épreuve de sciences du brevet ?",
        choix: ["1 heure pour 2 disciplines parmi physique-chimie, SVT et technologie", "30 minutes de SVT seulement", "2 heures pour les 3 disciplines", "1 heure pour chacune des 3 disciplines"],
        bonne: 0,
        why: "On ne sait pas à l'avance lesquelles tombent : il faut réviser les trois et compter environ 30 minutes par discipline." },

      { q: "Quelle phrase décrit le mieux une courbe ?",
        choix: ["La courbe monte.", "La masse augmente beaucoup.", "La plante grandit grâce à la photosynthèse.", "De 0 à 10 jours, la masse passe de 2 g à 8 g : elle augmente."],
        bonne: 3,
        why: "Une bonne description donne la tendance avec des valeurs précises et leurs unités, sans explication." }
    ]
  }
);
