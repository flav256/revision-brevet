/* ============================================================
   cours/svt.js — SVT : chapitres ajoutés et fiche méthode
   Même format que data.js (voir hg-ch1).
   ============================================================ */

DATA.chapitres.push(

  /* ------------------------------------------------------------
     CHAPITRE 1 — Une diversité au sein de chaque espèce
  ------------------------------------------------------------ */
  {
    id: 'svt-ch1',
    matiere: 'svt',
    ajout: true,
    zone: 'Le vivant et son évolution',
    numero: 'Chapitre 1',
    titre: "Une diversité au sein de chaque espèce",
    periode: "Espèce, caractères héréditaires et influence de l'environnement",
    theme: "Le vivant et son évolution — diversité des individus au sein d'une espèce",

    essentiel: [
      "Une <b>espèce</b> est un ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant des <b>descendants fertiles</b> : c'est le critère d'<b>interfécondité</b>.",
      "Tous les individus d'une espèce partagent des <b>caractères communs à l'espèce</b>, mais chacun possède des <b>variations individuelles</b> qui le rendent unique.",
      "Les <b>caractères héréditaires</b> sont transmis par les parents grâce aux <b>gamètes</b> : groupe sanguin, couleur naturelle des yeux, maladies héréditaires comme la <b>mucoviscidose</b>. Les caractères <b>acquis</b> (bronzage, cicatrice, muscles, langue parlée) ne se transmettent pas.",
      "Le <b>phénotype</b>, ensemble des caractères observables, dépend de l'information génétique <b>et de l'environnement</b> : vrais jumeaux qui deviennent différents, pelage du lapin russe selon la température, fleurs de l'hortensia selon le sol.",
      "La <b>biodiversité</b> existe à trois niveaux : la diversité des <b>écosystèmes</b>, la diversité des <b>espèces</b> et la <b>diversité génétique</b> des individus au sein de chaque espèce."
    ],

    sections: [
      {
        titre: "La notion d'espèce",
        points: [
          "Une <b>espèce</b> est un ensemble d'êtres vivants qui se ressemblent et qui peuvent se reproduire entre eux.",
          "Critère d'<b>interfécondité</b> : deux individus sont de la même espèce s'ils peuvent se reproduire ensemble <b>et</b> avoir des descendants eux-mêmes <b>fertiles</b>, c'est-à-dire capables de se reproduire à leur tour.",
          "Exemple : le cheval et l'âne peuvent avoir un petit, le <b>mulet</b>. Mais le mulet est presque toujours <b>stérile</b> : le cheval et l'âne sont donc deux espèces différentes.",
          "À l'inverse, un chihuahua et un saint-bernard se ressemblent peu, mais leurs descendants sont fertiles : tous les chiens appartiennent à la <b>même espèce</b>.",
          "Tous les êtres humains, quelle que soit leur origine, appartiennent à une seule espèce : <b>Homo sapiens</b>."
        ]
      },
      {
        titre: "Caractères de l'espèce et variations individuelles",
        points: [
          "Un <b>caractère</b> est un trait que l'on peut observer ou mesurer chez un être vivant : la forme du visage, la couleur des yeux, le groupe sanguin, la taille…",
          "Les <b>caractères communs à l'espèce</b> sont partagés par tous ses individus. Chez l'être humain : se tenir debout et marcher sur deux jambes, avoir une main avec un pouce qui s'oppose aux autres doigts, avoir un grand cerveau.",
          "Chaque individu possède aussi des <b>caractères qui lui sont propres</b> : un même caractère prend une forme différente d'une personne à l'autre. Ce sont les <b>variations individuelles</b>.",
          "Exemple : tous les humains ont des yeux (caractère de l'espèce), mais leur couleur change d'une personne à l'autre (variation individuelle).",
          "On observe ces variations chez tous les êtres vivants : le pelage des chats, la couleur des fleurs d'une même espèce. Grâce à elles, chaque individu est <b>unique</b>."
        ]
      },
      {
        titre: "Caractères héréditaires et caractères acquis",
        points: [
          "Un caractère <b>héréditaire</b> est transmis des parents aux enfants. Il est déterminé par l'<b>information génétique</b>, que chaque parent transmet par ses <b>gamètes</b> (spermatozoïde ou ovule) au moment de la fécondation.",
          "Exemples de caractères héréditaires : le <b>groupe sanguin</b>, la <b>couleur naturelle des yeux</b>, certaines <b>maladies héréditaires</b>.",
          "La <b>mucoviscidose</b> est une maladie héréditaire : un mucus trop épais encombre les poumons et le tube digestif. Elle peut toucher l'enfant de deux parents qui ne sont pas malades.",
          "Un caractère <b>acquis</b>, ou non héréditaire, apparaît au cours de la vie sous l'effet de l'environnement ou du mode de vie : le <b>bronzage</b>, une <b>cicatrice</b>, des <b>muscles</b> développés par le sport, la <b>langue parlée</b>.",
          "Un caractère acquis <b>ne se transmet pas</b> aux enfants, car il ne modifie pas l'information génétique des gamètes. L'enfant d'un champion de musculation ne naît pas musclé ; l'enfant de parents qui parlent chinois apprend la langue qu'il entend autour de lui.",
          "Pour savoir si un caractère est héréditaire, on suit sa transmission dans une famille, sur plusieurs générations, grâce à un <b>arbre généalogique</b>."
        ]
      },
      {
        titre: "L'environnement agit sur le phénotype",
        points: [
          "Le <b>phénotype</b> est l'ensemble des caractères observables d'un individu. Il dépend de son information génétique, mais aussi de son <b>environnement</b> : climat, alimentation, mode de vie.",
          "Le soleil fait bronzer, l'alimentation influe sur la taille, le sport développe les muscles. Ces changements ne modifient pas l'information génétique et <b>ne se transmettent pas</b> aux enfants.",
          "Les <b>vrais jumeaux</b>, issus de la même cellule-œuf, ont exactement la même information génétique. Pourtant, ils peuvent devenir différents selon leur mode de vie : l'un plus musclé, l'autre plus bronzé ou avec une cicatrice.",
          "Le <b>lapin russe</b> (ou himalayen) a un pelage blanc, sauf aux extrémités du corps, plus froides (oreilles, museau, pattes, queue), où il est noir. Si l'on rase une zone du dos et qu'on y fixe une poche de glace, le poil repousse <b>noir</b> : la couleur du pelage dépend de la <b>température</b>.",
          "L'<b>hortensia</b> donne des fleurs <b>bleues</b> dans un sol <b>acide</b> et des fleurs <b>roses</b> dans un sol calcaire. Replanté dans un autre sol, le même pied peut changer de couleur.",
          "Bilan : <b>phénotype = information génétique + influence de l'environnement</b>."
        ]
      },
      {
        titre: "Les trois niveaux de la biodiversité",
        points: [
          "La <b>biodiversité</b> est la diversité du monde vivant. On la décrit à <b>trois niveaux</b>.",
          "La diversité des <b>écosystèmes</b> : forêts, prairies, mares, océans, récifs coralliens… Un écosystème est formé d'un milieu de vie et des êtres vivants qui l'habitent.",
          "La diversité des <b>espèces</b> : près de 2 millions d'espèces ont été décrites, et il en reste sans doute beaucoup à découvrir.",
          "La <b>diversité génétique</b> au sein de chaque espèce : les individus d'une même espèce n'ont pas exactement la même information génétique, ce qui explique leurs variations individuelles héréditaires.",
          "Cette diversité génétique est précieuse : dans une population variée, certains individus résistent mieux à une maladie ou à un changement du milieu, et l'espèce a plus de chances de survivre."
        ]
      }
    ],

    mots: [
      ["Espèce", "Ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant des descendants fertiles."],
      ["Interfécondité", "Capacité de deux individus à se reproduire ensemble et à avoir des descendants eux-mêmes fertiles."],
      ["Fertile", "Capable de se reproduire. Le contraire est stérile."],
      ["Caractère", "Trait observable ou mesurable d'un être vivant : couleur des yeux, groupe sanguin, taille…"],
      ["Variation individuelle", "Forme différente que prend un même caractère d'un individu à l'autre, au sein d'une espèce."],
      ["Caractère héréditaire", "Caractère transmis des parents aux enfants par l'intermédiaire des gamètes."],
      ["Caractère acquis", "Caractère qui apparaît au cours de la vie sous l'effet de l'environnement ; il ne se transmet pas aux enfants."],
      ["Gamète", "Cellule reproductrice (spermatozoïde ou ovule) qui transmet l'information génétique d'un parent."],
      ["Mucoviscidose", "Maladie héréditaire dans laquelle un mucus trop épais encombre les poumons et le tube digestif."],
      ["Phénotype", "Ensemble des caractères observables d'un individu. Il dépend de son information génétique et de l'environnement."],
      ["Environnement", "Ensemble des conditions dans lesquelles vit un être vivant : température, soleil, sol, alimentation, mode de vie…"],
      ["Vrais jumeaux", "Jumeaux issus d'une même cellule-œuf : ils ont la même information génétique."],
      ["Biodiversité", "Diversité du monde vivant, à trois niveaux : écosystèmes, espèces et diversité génétique au sein de chaque espèce."]
    ],

    quiz: [
      { q: "Deux individus appartiennent à la même espèce s'ils :",
        choix: ["se ressemblent beaucoup", "vivent dans le même milieu", "peuvent se reproduire ensemble et avoir des descendants fertiles", "ont la même couleur de pelage"],
        bonne: 2,
        why: "C'est le critère d'interfécondité : la ressemblance seule ne suffit pas." },

      { q: "Le cheval et l'âne donnent naissance au mulet, qui est stérile. On en déduit que :",
        choix: ["le cheval et l'âne sont deux espèces différentes", "le cheval et l'âne sont de la même espèce", "le mulet est une nouvelle espèce", "le mulet a hérité de caractères acquis"],
        bonne: 0,
        why: "Pour être de la même espèce, il faut des descendants fertiles ; le mulet ne l'est presque jamais." },

      { q: "Lequel de ces caractères est commun à toute l'espèce humaine ?",
        choix: ["La couleur des yeux", "Le groupe sanguin", "La forme du nez", "Marcher debout sur deux jambes"],
        bonne: 3,
        why: "Les trois autres caractères changent d'une personne à l'autre : ce sont des variations individuelles." },

      { q: "Une variation individuelle, c'est :",
        choix: ["un caractère partagé par tous les individus de l'espèce", "une forme différente d'un même caractère d'un individu à l'autre", "le passage d'une espèce à une autre", "une maladie héréditaire"],
        bonne: 1,
        why: "Exemple : tous les humains ont des yeux, mais leur couleur varie d'une personne à l'autre." },

      { q: "Lequel de ces caractères est héréditaire ?",
        choix: ["Le groupe sanguin", "Le bronzage", "Une cicatrice", "La langue parlée"],
        bonne: 0,
        why: "Il est déterminé par l'information génétique transmise par les parents ; les trois autres sont acquis." },

      { q: "Comment les caractères héréditaires passent-ils des parents aux enfants ?",
        choix: ["Par l'alimentation de la mère", "Par l'éducation", "Par les gamètes, lors de la fécondation", "Par l'exemple des parents"],
        bonne: 2,
        why: "Le spermatozoïde et l'ovule apportent chacun l'information génétique d'un parent." },

      { q: "Un champion de musculation aura-t-il des enfants musclés dès la naissance ?",
        choix: ["Oui, car les muscles sont héréditaires", "Non, car un caractère acquis ne se transmet pas", "Oui, mais seulement ses fils", "Oui, si la mère fait aussi du sport"],
        bonne: 1,
        why: "Les muscles développés par le sport ne modifient pas l'information génétique des gamètes." },

      { q: "Laquelle de ces maladies est héréditaire ?",
        choix: ["La grippe", "La mucoviscidose", "Une fracture", "Un coup de soleil"],
        bonne: 1,
        why: "La mucoviscidose est due à l'information génétique reçue des parents ; les autres sont dues à l'environnement." },

      { q: "Le phénotype d'un individu, c'est :",
        choix: ["l'ensemble de ses caractères observables", "le nombre de ses enfants", "l'espèce à laquelle il appartient", "la liste de ses ancêtres"],
        bonne: 0,
        why: "Il dépend de l'information génétique et de l'environnement." },

      { q: "Deux vrais jumeaux n'ont pas la même masse musculaire. Que montre cet exemple ?",
        choix: ["Leur information génétique est différente", "Ils n'appartiennent pas à la même espèce", "Le sport modifie l'information génétique", "Le phénotype dépend aussi de l'environnement"],
        bonne: 3,
        why: "Ils ont la même information génétique, mais leur mode de vie (sport, alimentation) modifie leur phénotype." },

      { q: "On rase le dos d'un lapin russe et on y fixe une poche de glace : le poil repousse noir. Que montre cette expérience ?",
        choix: ["La couleur du pelage dépend de la température", "Le lapin a changé d'information génétique", "Le froid fait tomber les poils blancs", "Ses petits auront une tache noire sur le dos"],
        bonne: 0,
        why: "Le lapin a la même information génétique sur tout le corps : seul le froid a modifié son phénotype, et ce changement ne se transmet pas." },

      { q: "Un hortensia à fleurs roses est replanté dans un sol acide. Ses nouvelles fleurs seront plutôt :",
        choix: ["blanches", "jaunes", "bleues", "roses"],
        bonne: 2,
        why: "La couleur de l'hortensia dépend du sol : bleue en sol acide, rose en sol calcaire." },

      { q: "Quels sont les trois niveaux de la biodiversité ?",
        choix: ["Les cellules, les organes et les organismes", "Les écosystèmes, les espèces et la diversité génétique au sein des espèces", "Les animaux, les végétaux et les champignons", "Les océans, les forêts et les déserts"],
        bonne: 1,
        why: "La biodiversité va du plus grand (les écosystèmes) au plus fin (les différences génétiques entre individus d'une même espèce)." },

      { q: "Un chihuahua et un saint-bernard sont très différents. Pourtant, ils sont de la même espèce car :",
        choix: ["ils ont tous les deux quatre pattes", "ils vivent avec l'être humain", "ils mangent la même nourriture", "ils peuvent avoir ensemble des descendants fertiles"],
        bonne: 3,
        why: "C'est l'interfécondité, et non la ressemblance, qui définit l'espèce." },

      { q: "Parmi ces caractères, lequel est acquis ?",
        choix: ["La couleur naturelle des yeux", "Le groupe sanguin", "Parler anglais", "La mucoviscidose"],
        bonne: 2,
        why: "Une langue s'apprend au cours de la vie : elle ne se transmet pas par les gamètes." }
    ]
  },

  /* ------------------------------------------------------------
     CHAPITRE 2 — L'information génétique de la cellule
  ------------------------------------------------------------ */
  {
    id: 'svt-ch2',
    matiere: 'svt',
    ajout: true,
    zone: 'Le vivant et son évolution',
    numero: 'Chapitre 2',
    titre: "L'information génétique de la cellule",
    periode: "Noyau, chromosomes, ADN, gènes et allèles",
    theme: "Le vivant et son évolution — le support de l'information génétique",

    essentiel: [
      "L'<b>information génétique</b> se trouve dans le <b>noyau</b> des cellules. Les expériences de transfert de noyau le montrent : la brebis <b>Dolly</b> (1996) ressemble à la brebis qui a donné le noyau.",
      "Le noyau contient les <b>chromosomes</b>. Chaque cellule humaine en possède <b>46, soit 23 paires</b> ; la 23<sup>e</sup> paire est <b>XX</b> chez la fille, <b>XY</b> chez le garçon. Le <b>caryotype</b> permet de les observer.",
      "Chaque chromosome est formé d'une très longue molécule d'<b>ADN</b> en <b>double hélice</b>. L'ADN est le support de l'information génétique chez tous les êtres vivants : il est <b>universel</b>.",
      "À retenir : <b>cellule → noyau → chromosomes → ADN → gène → allèles</b>. Un <b>gène</b> est une portion d'ADN qui détermine un caractère ; ses différentes versions sont les <b>allèles</b>.",
      "Un chromosome en plus ou en moins provoque une <b>anomalie chromosomique</b> : <b>trisomie 21</b> (47 chromosomes, trois chromosomes 21), <b>syndrome de Turner</b> (45 chromosomes, un seul X)."
    ],

    sections: [
      {
        titre: "Le noyau contient l'information génétique",
        points: [
          "Le corps humain est formé de milliers de milliards de <b>cellules</b>. La plupart possèdent un <b>noyau</b>, qui contient l'<b>information génétique</b> : les instructions nécessaires au développement et au fonctionnement de l'organisme.",
          "<b>La brebis Dolly (Écosse, 1996)</b> : on prélève le noyau d'une cellule de mamelle d'une brebis <b>à tête blanche</b>. On le place dans un ovule, dont on a retiré le noyau, d'une brebis <b>à tête noire</b>. L'embryon obtenu se développe dans l'utérus d'une troisième brebis, à tête noire.",
          "Résultat : Dolly naît avec une <b>tête blanche</b>. Elle ressemble à la brebis qui a donné le <b>noyau</b>, et non à celle qui a donné l'ovule ni à la mère porteuse. Dolly est un <b>clone</b> de la brebis à tête blanche.",
          "Chez la grenouille, dans les années 1960, John Gurdon avait déjà transféré le noyau d'une cellule d'intestin de têtard dans un ovule dont le noyau avait été détruit : il a obtenu des têtards, puis des grenouilles adultes.",
          "Conclusion : le <b>noyau</b> contient l'information génétique qui détermine les caractères de l'individu. Même le noyau d'une cellule spécialisée (mamelle, intestin) contient toute l'information nécessaire pour former un organisme entier."
        ]
      },
      {
        titre: "Les chromosomes et le caryotype",
        points: [
          "Le noyau contient des <b>chromosomes</b>. On les voit bien quand la cellule se divise : ils sont alors très condensés, en forme de petits bâtonnets.",
          "Le <b>caryotype</b> est la photographie des chromosomes d'une cellule, <b>classés par paires</b>, du plus grand au plus petit. On l'obtient à partir de cellules en division, quand les chromosomes sont bien visibles.",
          "Chaque cellule du corps humain contient <b>46 chromosomes, soit 23 paires</b>. Les deux chromosomes d'une paire portent les mêmes gènes, aux mêmes endroits, mais pas forcément les mêmes allèles.",
          "Dans chaque paire, un chromosome vient du <b>père</b> et l'autre de la <b>mère</b>. Seuls les gamètes font exception : ils ne contiennent que 23 chromosomes (voir chapitre 3).",
          "Les paires 1 à 22 sont les mêmes chez les filles et chez les garçons. La <b>23<sup>e</sup> paire</b> est celle des <b>chromosomes sexuels</b> : <b>XX</b> chez la fille, <b>XY</b> chez le garçon. Le chromosome Y est beaucoup plus petit que le X.",
          "Le nombre de chromosomes est le même pour tous les individus d'une espèce, mais il change d'une espèce à l'autre : 48 chez le chimpanzé, 78 chez le chien."
        ]
      },
      {
        titre: "L'ADN, une molécule universelle",
        points: [
          "Chaque chromosome est formé d'une très longue molécule d'<b>ADN</b> enroulée sur elle-même. Déroulé, l'ADN d'une seule cellule humaine mesure environ 2 mètres.",
          "L'<b>ADN</b> est une molécule en forme de <b>double hélice</b> : deux brins enroulés l'un autour de l'autre, comme une échelle tordue.",
          "L'information génétique est écrite dans l'ADN par l'<b>ordre</b> dans lequel s'enchaînent quatre petites molécules, notées A, T, C et G, comme un texte écrit avec un alphabet de quatre lettres.",
          "L'ADN est le support de l'information génétique chez <b>tous les êtres vivants</b> (animaux, végétaux, champignons, bactéries), et il a la même structure chez tous : on dit qu'il est <b>universel</b>.",
          "Conséquence : un gène d'une espèce peut fonctionner dans une autre. Des bactéries qui ont reçu le gène humain de l'<b>insuline</b> fabriquent de l'insuline humaine, utilisée pour soigner les personnes diabétiques."
        ]
      },
      {
        titre: "Gènes et allèles",
        points: [
          "Un <b>gène</b> est une portion d'ADN située à un endroit précis d'un chromosome. Il contient l'information pour fabriquer une protéine, qui participe à un <b>caractère héréditaire</b> (le groupe sanguin, par exemple).",
          "Chaque chromosome porte de nombreux gènes. L'être humain possède environ <b>20 000 gènes</b>.",
          "Les deux chromosomes d'une paire portent les mêmes gènes : chaque cellule possède donc <b>deux exemplaires</b> de chaque gène, l'un venu du père, l'autre de la mère.",
          "Un même gène peut exister en plusieurs versions : ce sont les <b>allèles</b>. Exemple : le gène du groupe sanguin existe sous les allèles A, B et O.",
          "Tous les êtres humains ont les mêmes gènes, mais pas les mêmes allèles : c'est ce qui explique les <b>variations individuelles</b> héréditaires.",
          "À retenir dans l'ordre : <b>cellule → noyau → chromosomes → ADN → gène → allèles</b>."
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
      }
    ],

    mots: [
      ["Noyau", "Partie de la cellule qui contient les chromosomes, donc l'information génétique."],
      ["Information génétique", "Ensemble des instructions, portées par l'ADN, qui déterminent les caractères héréditaires d'un individu."],
      ["Transfert de noyau", "Expérience qui consiste à placer le noyau d'une cellule dans un ovule dont on a retiré le noyau."],
      ["Clone", "Individu qui possède la même information génétique qu'un autre, comme la brebis Dolly."],
      ["Chromosome", "Élément du noyau formé d'une très longue molécule d'ADN enroulée. L'être humain en possède 46, soit 23 paires."],
      ["Caryotype", "Photographie des chromosomes d'une cellule, classés par paires et par taille."],
      ["Chromosomes sexuels", "La 23e paire de chromosomes : XX chez la fille, XY chez le garçon."],
      ["ADN", "Molécule en forme de double hélice qui porte l'information génétique, chez tous les êtres vivants."],
      ["Gène", "Portion d'ADN située à un endroit précis d'un chromosome, qui détermine un caractère héréditaire."],
      ["Allèle", "Version d'un gène. Chaque individu possède deux allèles de chaque gène : un venant du père, un de la mère."],
      ["Anomalie chromosomique", "Chromosome en plus, en moins ou abîmé, qui modifie l'information génétique."],
      ["Trisomie 21", "Anomalie chromosomique : la personne possède trois chromosomes 21 au lieu de deux, soit 47 chromosomes."]
    ],

    quiz: [
      { q: "Quel est le bon ordre, du plus grand au plus petit ?",
        choix: ["Noyau → cellule → ADN → chromosome", "Cellule → noyau → chromosome → gène", "Chromosome → cellule → noyau → gène", "Gène → ADN → chromosome → noyau"],
        bonne: 1,
        why: "La cellule contient un noyau, qui contient les chromosomes, formés d'ADN dont certaines portions sont des gènes." },

      { q: "Dolly est née d'un ovule de brebis à tête noire, dans lequel on a placé le noyau d'une cellule de brebis à tête blanche. Dolly a :",
        choix: ["une tête noire, comme la donneuse d'ovule", "une tête noire, comme la mère porteuse", "une tête blanche, comme la donneuse du noyau", "une tête grise, mélange des deux"],
        bonne: 2,
        why: "Les caractères de Dolly sont ceux de la brebis qui a donné le noyau." },

      { q: "Que montre l'expérience de la brebis Dolly ?",
        choix: ["Que l'information génétique se trouve dans le noyau", "Que l'ovule décide de tous les caractères", "Que la mère porteuse transmet ses caractères", "Que les caractères acquis se transmettent"],
        bonne: 0,
        why: "Dolly ressemble à la brebis qui a fourni le noyau, et à aucune des deux autres." },

      { q: "Qu'est-ce que l'ADN ?",
        choix: ["Une cellule sexuelle", "Une protéine du sang", "Une paire de chromosomes", "La molécule qui porte l'information génétique"],
        bonne: 3,
        why: "L'ADN est une molécule en double hélice, présente chez tous les êtres vivants." },

      { q: "On dit que l'ADN est universel car :",
        choix: ["il est identique chez tous les êtres humains", "il ne subit jamais de modification", "il est le support de l'information génétique chez tous les êtres vivants", "il se trouve en dehors du noyau"],
        bonne: 2,
        why: "Animaux, végétaux, champignons et bactéries : tous ont de l'ADN, avec la même structure." },

      { q: "Un gène, c'est :",
        choix: ["un chromosome entier", "une cellule du noyau", "une portion d'ADN qui détermine un caractère héréditaire", "une version d'un allèle"],
        bonne: 2,
        why: "Un gène est un morceau d'ADN situé à un endroit précis d'un chromosome." },

      { q: "Les allèles sont :",
        choix: ["des versions différentes d'un même gène", "les chromosomes X et Y", "des cellules reproductrices", "des chromosomes en trop"],
        bonne: 0,
        why: "Par exemple, A, B et O sont trois allèles du gène du groupe sanguin." },

      { q: "Combien de chromosomes contient une cellule du corps humain ?",
        choix: ["23", "44", "48", "46"],
        bonne: 3,
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

      { q: "Une fille atteinte du syndrome de Turner possède :",
        choix: ["47 chromosomes", "un seul chromosome X, soit 45 chromosomes", "trois chromosomes X", "un chromosome Y en plus"],
        bonne: 1,
        why: "Il lui manque un chromosome X : sa 23e paire est réduite à un seul X." },

      { q: "Des bactéries qui ont reçu le gène humain de l'insuline fabriquent de l'insuline humaine. Pourquoi ?",
        choix: ["Parce que les bactéries sont devenues humaines", "Parce que l'ADN est universel : un gène humain peut fonctionner dans une bactérie", "Parce que les bactéries ont un noyau humain", "Parce que l'insuline est un chromosome"],
        bonne: 1,
        why: "Toutes les espèces utilisent l'ADN comme support de l'information génétique." },

      { q: "Le chimpanzé possède 48 chromosomes et l'être humain 46. On peut en déduire que :",
        choix: ["le nombre de chromosomes est caractéristique de chaque espèce", "le chimpanzé est atteint d'une anomalie", "le chimpanzé a plus de caractères que l'humain", "le nombre de chromosomes varie d'un individu à l'autre"],
        bonne: 0,
        why: "Tous les individus d'une espèce ont le même nombre de chromosomes, qui change d'une espèce à l'autre." },

      { q: "Les deux chromosomes d'une même paire :",
        choix: ["sont toujours identiques", "viennent tous les deux de la mère", "portent des gènes différents", "portent les mêmes gènes, mais pas forcément les mêmes allèles"],
        bonne: 3,
        why: "L'un vient du père, l'autre de la mère : mêmes gènes aux mêmes endroits, allèles parfois différents." }
    ]
  },

  /* ------------------------------------------------------------
     CHAPITRE 3 — Stabilité et diversité génétique des individus
  ------------------------------------------------------------ */
  {
    id: 'svt-ch3',
    matiere: 'svt',
    ajout: true,
    zone: 'Le vivant et son évolution',
    numero: 'Chapitre 3',
    titre: "Stabilité et diversité génétique des individus",
    periode: "Mitose, méiose, fécondation, allèles et mutations",
    theme: "Le vivant et son évolution — stabilité et diversité génétique des individus",

    essentiel: [
      "<b>Stabilité</b> : par <b>mitose</b>, une cellule donne deux cellules-filles <b>identiques</b> à 46 chromosomes. L'ADN est copié avant la division : de la cellule-œuf à tout le corps, toutes les cellules gardent le même caryotype.",
      "<b>Diversité</b> : la <b>méiose</b> produit des <b>gamètes à 23 chromosomes</b>, un de chaque paire, répartis <b>au hasard</b>. Chaque parent peut ainsi fabriquer plus de <b>8 millions</b> de gamètes différents.",
      "La <b>fécondation</b> réunit 23 + 23 = 46 chromosomes, et la rencontre des gamètes se fait au hasard. Ce double <b>brassage</b> rend chaque individu génétiquement <b>unique</b>, sauf les vrais jumeaux.",
      "Un allèle <b>dominant</b> s'exprime même en un seul exemplaire, un allèle <b>récessif</b> seulement en deux. Groupes sanguins : A et B sont dominants sur O, et <b>codominants</b> entre eux (groupe AB).",
      "Le <b>génotype</b> est l'ensemble des allèles, le <b>phénotype</b> l'ensemble des caractères observables. Les <b>mutations</b> créent de nouveaux allèles ; elles ne sont transmises que si elles touchent les cellules à l'origine des gamètes."
    ],

    sections: [
      {
        titre: "La mitose : conserver l'information génétique",
        points: [
          "Chaque être humain se développe à partir d'une seule cellule, la <b>cellule-œuf</b>, qui se divise un très grand nombre de fois par <b>mitose</b>. Toutes nos cellules ont donc la même information génétique et le <b>même caryotype</b>.",
          "<b>Avant</b> la division, l'ADN est <b>copié</b> : chaque chromosome se duplique et se retrouve formé de <b>deux chromatides identiques</b>, reliées en leur centre (forme de X).",
          "<b>Pendant la mitose</b>, les chromosomes se condensent et deviennent visibles. Les deux chromatides de chaque chromosome se séparent et partent chacune dans une cellule-fille.",
          "Bilan : <b>1 cellule-mère à 46 chromosomes → 2 cellules-filles à 46 chromosomes</b>, identiques entre elles et à la cellule-mère. L'information génétique est <b>conservée</b>.",
          "La mitose permet la <b>croissance</b>, le <b>renouvellement</b> des cellules (peau, sang) et la <b>réparation</b> des tissus (cicatrisation)."
        ]
      },
      {
        titre: "La méiose : des gamètes tous différents",
        points: [
          "Les <b>gamètes</b> sont les cellules reproductrices : les <b>spermatozoïdes</b>, fabriqués dans les testicules, et les <b>ovules</b>, fabriqués dans les ovaires. Ils sont produits par une division particulière : la <b>méiose</b>.",
          "Pendant la méiose, les chromosomes de chaque paire se séparent : un gamète ne reçoit qu'<b>un chromosome de chaque paire</b>, soit <b>23 chromosomes</b>.",
          "Pour chaque paire, le chromosome qui part dans le gamète est choisi <b>au hasard</b>. Avec 23 paires, cela fait 2<sup>23</sup>, soit <b>plus de 8 millions</b> de combinaisons possibles pour chaque parent.",
          "Comme les deux chromosomes d'une paire ne portent pas forcément les mêmes allèles, deux gamètes d'un même parent sont presque toujours différents : c'est un premier <b>brassage</b> des allèles.",
          "Un ovule contient toujours 22 chromosomes + un <b>X</b>. Un spermatozoïde contient 22 chromosomes + un <b>X</b> ou un <b>Y</b>."
        ]
      },
      {
        titre: "La fécondation : chaque individu est unique",
        points: [
          "La <b>fécondation</b> est l'union d'un spermatozoïde et d'un ovule : <b>23 + 23 = 46 chromosomes</b>. La cellule-œuf retrouve 23 paires.",
          "Quels gamètes se rencontrent, c'est aussi le <b>hasard</b> : c'est un second brassage. Pour un couple, le nombre de combinaisons dépasse 70 000 milliards (8 millions × 8 millions).",
          "Conséquence : chaque individu possède une combinaison d'allèles <b>unique</b>. Seuls les <b>vrais jumeaux</b>, issus de la même cellule-œuf, ont la même information génétique. Les faux jumeaux, issus de deux cellules-œufs, sont aussi différents que des frères et sœurs.",
          "Le <b>sexe</b> est décidé à la fécondation : l'ovule porte toujours un X ; le spermatozoïde porte un X (→ fille XX) ou un Y (→ garçon XY). Il y a donc une chance sur deux d'avoir une fille.",
          "Bilan : méiose et fécondation assurent la <b>stabilité du caryotype</b> d'une génération à l'autre (46 → 23 → 46) et la <b>diversité génétique</b> des individus."
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
        titre: "Génotype, phénotype et mutations",
        points: [
          "Le <b>génotype</b> est l'ensemble des allèles d'un individu. Le <b>phénotype</b> est l'ensemble de ses caractères observables (groupe sanguin, couleur des yeux, taille…). Le phénotype dépend du génotype, mais aussi de l'environnement (voir chapitre 1).",
          "Une <b>mutation</b> est une modification accidentelle de l'ADN. Elle est rare et se produit au hasard, mais elle peut être favorisée par des agents <b>mutagènes</b> : rayons UV du soleil, rayons X, certaines substances chimiques comme celles de la fumée de tabac.",
          "Une mutation peut créer un <b>nouvel allèle</b>. Les mutations sont à l'origine de la diversité des allèles, donc de la <b>diversité génétique</b> des êtres vivants. Une mutation peut être sans effet, favorable ou défavorable (maladie génétique).",
          "Une mutation n'est transmise aux enfants que si elle touche une cellule à l'origine des <b>gamètes</b>. Dans une autre cellule du corps (la peau, par exemple), elle n'est pas transmise, mais elle peut provoquer un cancer.",
          "Bilan : les mutations créent de nouveaux allèles, puis la méiose et la fécondation les mélangent à chaque génération. C'est l'origine de la diversité génétique au sein de chaque espèce."
        ]
      }
    ],

    mots: [
      ["Cellule-œuf", "Première cellule d'un nouvel individu, issue de la fécondation. Elle possède 46 chromosomes."],
      ["Mitose", "Division d'une cellule en deux cellules-filles identiques, qui gardent les 46 chromosomes."],
      ["Chromatide", "Chacune des deux copies identiques d'un chromosome, formées quand l'ADN est copié avant la division."],
      ["Méiose", "Division particulière qui produit les gamètes : chacun ne reçoit qu'un chromosome de chaque paire."],
      ["Gamète", "Cellule reproductrice (spermatozoïde ou ovule) qui contient 23 chromosomes."],
      ["Fécondation", "Union d'un spermatozoïde et d'un ovule, qui donne une cellule-œuf à 46 chromosomes."],
      ["Brassage génétique", "Mélange des allèles dû au hasard, lors de la formation des gamètes puis lors de la fécondation."],
      ["Dominant / récessif", "Un allèle dominant s'exprime même en un seul exemplaire ; un allèle récessif seulement s'il est présent deux fois."],
      ["Codominants", "Se dit de deux allèles qui s'expriment tous les deux quand ils sont ensemble, comme A et B dans le groupe AB."],
      ["Génotype", "Ensemble des allèles que possède un individu."],
      ["Phénotype", "Ensemble des caractères observables d'un individu. Il dépend de ses allèles et de l'environnement."],
      ["Mutation", "Modification accidentelle de l'ADN, qui peut donner naissance à un nouvel allèle."],
      ["Agent mutagène", "Facteur qui augmente le risque de mutation : rayons UV, rayons X, certaines substances chimiques."]
    ],

    quiz: [
      { q: "À la fin d'une mitose, on obtient :",
        choix: ["deux cellules à 23 chromosomes", "quatre gamètes différents", "une cellule-œuf", "deux cellules identiques à 46 chromosomes"],
        bonne: 3,
        why: "La mitose conserve l'information génétique : les cellules-filles sont identiques à la cellule-mère." },

      { q: "Que se passe-t-il juste avant la mitose ?",
        choix: ["Les chromosomes disparaissent", "L'ADN est copié : chaque chromosome se duplique", "Les paires se séparent au hasard", "Le noyau perd la moitié de ses chromosomes"],
        bonne: 1,
        why: "Grâce à cette copie, chaque cellule-fille reçoit les 46 chromosomes complets." },

      { q: "Pourquoi toutes les cellules de notre corps ont-elles la même information génétique ?",
        choix: ["Parce qu'elles viennent toutes de la cellule-œuf, par mitoses successives", "Parce qu'elles se forment par méiose", "Parce qu'elles reçoivent leur ADN par le sang", "Parce qu'elles ont chacune 23 chromosomes"],
        bonne: 0,
        why: "À chaque mitose, l'ADN est copié puis partagé à l'identique : le caryotype est conservé." },

      { q: "Un gamète humain contient :",
        choix: ["46 chromosomes", "23 paires de chromosomes", "23 chromosomes, un de chaque paire", "92 chromosomes"],
        bonne: 2,
        why: "La méiose sépare les chromosomes de chaque paire : le gamète n'en reçoit qu'un sur deux." },

      { q: "Pendant la méiose, le chromosome de chaque paire qui part dans un gamète est choisi :",
        choix: ["toujours parmi ceux venus du père", "toujours le plus grand des deux", "au hasard", "toujours parmi ceux venus de la mère"],
        bonne: 2,
        why: "Ce hasard donne plus de 8 millions de combinaisons possibles pour chaque parent." },

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

      { q: "Qui possède exactement la même information génétique ?",
        choix: ["Deux vrais jumeaux", "Deux faux jumeaux", "Un enfant et sa mère", "Un frère et une sœur"],
        bonne: 0,
        why: "Les vrais jumeaux sont issus de la même cellule-œuf ; les faux jumeaux, de deux cellules-œufs différentes." },

      { q: "Léna possède les allèles (A//O). Quel est son groupe sanguin ?",
        choix: ["Groupe O", "Groupe AB", "Groupe B", "Groupe A"],
        bonne: 3,
        why: "L'allèle A est dominant sur l'allèle O, qui est masqué." },

      { q: "Un allèle récessif s'exprime :",
        choix: ["toujours", "seulement s'il est présent en deux exemplaires", "seulement chez les garçons", "jamais"],
        bonne: 1,
        why: "Avec un allèle dominant à côté, il est masqué. Exemple : le groupe O correspond à (O//O)." },

      { q: "Une personne du groupe AB possède les allèles :",
        choix: ["(A//O)", "(B//O)", "(O//O)", "(A//B)"],
        bonne: 3,
        why: "A et B sont codominants : quand ils sont ensemble, ils s'expriment tous les deux." },

      { q: "Deux parents du groupe A ont un enfant du groupe O. C'est possible si :",
        choix: ["l'enfant a subi une mutation", "les deux parents sont (A//O)", "un des parents est (A//A)", "l'allèle O est dominant"],
        bonne: 1,
        why: "Chaque parent porte un allèle O masqué par A, et chacun l'a transmis : l'enfant est (O//O)." },

      { q: "Le génotype d'un individu, c'est :",
        choix: ["l'ensemble de ses allèles", "l'ensemble de ses caractères visibles", "le nombre de ses chromosomes", "la photographie de ses chromosomes"],
        bonne: 0,
        why: "Les caractères observables forment le phénotype ; les allèles forment le génotype." },

      { q: "Qu'est-ce qu'une mutation ?",
        choix: ["Une division de la cellule", "Un chromosome en trop", "Une modification de l'ADN qui peut créer un nouvel allèle", "Le changement de groupe sanguin au cours de la vie"],
        bonne: 2,
        why: "Rares et dues au hasard, les mutations sont à l'origine de la diversité des allèles." },

      { q: "Une mutation sera transmise aux enfants si elle touche :",
        choix: ["une cellule à l'origine des gamètes", "une cellule de la peau", "une cellule du foie", "une cellule d'un muscle"],
        bonne: 0,
        why: "Seules les mutations présentes dans les cellules qui fabriquent les gamètes passent à la génération suivante." }
    ]
  },

  /* ------------------------------------------------------------
     CHAPITRE 4 — Planète Terre
  ------------------------------------------------------------ */
  {
    id: 'svt-ch4',
    matiere: 'svt',
    ajout: true,
    zone: "La planète Terre, l'environnement et l'action humaine",
    numero: 'Chapitre 4',
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
