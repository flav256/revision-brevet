/* ============================================================
   cours/physique.js — Physique-Chimie
   Chapitres et fiche méthode ajoutés pour le brevet blanc.
   Même format que les chapitres de data.js.
   ============================================================ */

DATA.chapitres.push(

  /* ----------------------------------------------------------------
     CHAPITRE 1 — La matière
  ---------------------------------------------------------------- */
  {
    id: 'pc-ch1',
    matiere: 'physique',
    ajout: true,
    zone: 'Organisation et transformations de la matière',
    numero: 'Chapitre 1',
    titre: "La matière : atomes, molécules, ions et transformations chimiques",
    periode: "Atomes, ions, réactions, pH et masse volumique",
    theme: "Programme de cycle 4 — Organisation et transformations de la matière",

    essentiel: [
      "Un <b>atome</b> est formé d'un <b>noyau</b> (protons chargés +, neutrons sans charge) et d'<b>électrons</b> chargés −. Il a autant d'électrons que de protons : il est <b>électriquement neutre</b>.",
      "Une <b>molécule</b> est un assemblage d'atomes (H<sub>2</sub>O, CO<sub>2</sub>, O<sub>2</sub>). Un <b>ion</b> est un atome ou un groupe d'atomes qui a <b>perdu</b> des électrons (cation : Na<sup>+</sup>, H<sup>+</sup>, Cu<sup>2+</sup>) ou en a <b>gagné</b> (anion : Cl<sup>−</sup>, HO<sup>−</sup>).",
      "Dans une <b>transformation chimique</b>, les réactifs disparaissent et des produits apparaissent. Les atomes se réarrangent mais <b>se conservent</b> : l'équation est équilibrée et la <b>masse totale se conserve</b>.",
      "<b>Tests</b> : l'eau de chaux se trouble → CO<sub>2</sub> ; le sulfate de cuivre anhydre blanc devient bleu → eau ; petite détonation à la flamme → H<sub>2</sub> ; une bûchette incandescente se rallume → O<sub>2</sub>.",
      "pH &lt; 7 : <b>acide</b> (ions H<sup>+</sup> majoritaires) ; pH = 7 : <b>neutre</b> ; pH &gt; 7 : <b>basique</b> (ions HO<sup>−</sup> majoritaires). Diluer rapproche le pH de 7. Masse volumique : <b>ρ = m / V</b>."
    ],

    sections: [
      {
        titre: "Atomes et éléments chimiques",
        points: [
          "Toute la matière est faite d'<b>atomes</b>. Un atome est formé d'un <b>noyau</b> central, chargé positivement, autour duquel se déplacent des <b>électrons</b>, chargés négativement. Le noyau contient des <b>protons</b> (charge +) et des <b>neutrons</b> (sans charge).",
          "Un atome contient <b>autant d'électrons que de protons</b> : les charges + et − se compensent, l'atome est <b>électriquement neutre</b>.",
          "Le nombre de protons, appelé <b>numéro atomique Z</b>, caractérise un <b>élément chimique</b>. Chaque élément a un <b>symbole</b> (une majuscule, parfois suivie d'une minuscule) : H (Z = 1), C (Z = 6), N (Z = 7), O (Z = 8), Na (Z = 11), Cl (Z = 17), Fe (Z = 26), Cu (Z = 29).",
          "Les quelque 118 éléments connus sont rangés par numéro atomique croissant dans la <b>classification périodique</b>.",
          "Un atome mesure environ 10⁻¹⁰ m et son noyau est environ <b>100 000 fois plus petit</b> : entre le noyau et les électrons, il y a du vide. Pourtant presque toute la masse est dans le noyau, car un électron est environ 2 000 fois plus léger qu'un proton.",
          "L'Univers est fait des <b>mêmes éléments chimiques</b> que la Terre et les êtres vivants. L'hydrogène et l'hélium, formés juste après le Big Bang, en représentent l'essentiel ; les autres (carbone, oxygène, fer…) ont été fabriqués dans les <b>étoiles</b>. Nous sommes faits de « poussières d'étoiles »."
        ]
      },
      {
        titre: "Molécules et formules chimiques",
        points: [
          "Une <b>molécule</b> est un assemblage d'atomes liés entre eux. Elle est électriquement neutre.",
          "Sa <b>formule</b> indique la nature et le nombre de ses atomes. Le chiffre écrit en bas à droite d'un symbole, l'<b>indice</b>, donne le nombre de ces atomes ; on n'écrit pas le 1.",
          "Exemples : H<sub>2</sub>O (eau) = 2 H + 1 O ; CO<sub>2</sub> (dioxyde de carbone) = 1 C + 2 O ; CH<sub>4</sub> (méthane) = 1 C + 4 H ; O<sub>2</sub> (dioxygène) = 2 O ; H<sub>2</sub> (dihydrogène) = 2 H.",
          "Ne pas confondre : <b>2 H<sub>2</sub>O</b> désigne <b>deux molécules</b> d'eau, soit 4 atomes d'hydrogène et 2 atomes d'oxygène. Et CO (carbone + oxygène) n'est pas Co (le cobalt).",
          "Dans les <b>modèles moléculaires</b>, chaque atome est une boule de couleur : carbone noir, hydrogène blanc, oxygène rouge, azote bleu.",
          "L'air est un <b>mélange</b> de gaz : environ 78 % de diazote N<sub>2</sub> et 21 % de dioxygène O<sub>2</sub>, soit à peu près 4/5 et 1/5."
        ]
      },
      {
        titre: "Les ions",
        points: [
          "Un <b>ion</b> est un atome ou un groupe d'atomes qui a <b>perdu ou gagné un ou plusieurs électrons</b>. Son noyau, lui, ne change pas.",
          "Un ion qui a <b>perdu</b> des électrons porte une charge positive : c'est un <b>cation</b>. Exemples : Na<sup>+</sup> et H<sup>+</sup> (1 électron perdu), Cu<sup>2+</sup> et Fe<sup>2+</sup> (2 électrons perdus), Fe<sup>3+</sup> (3 électrons perdus).",
          "Un ion qui a <b>gagné</b> des électrons porte une charge négative : c'est un <b>anion</b>. Exemples : Cl<sup>−</sup> (ion chlorure), HO<sup>−</sup> (ion hydroxyde), SO<sub>4</sub><sup>2−</sup> (ion sulfate).",
          "Compter les électrons : l'atome de sodium (Z = 11) a 11 protons et 11 électrons ; l'ion Na<sup>+</sup> a toujours <b>11 protons</b> mais seulement <b>10 électrons</b>.",
          "Une <b>solution ionique</b> contient des cations et des anions, en quantités telles qu'elle reste <b>électriquement neutre</b>. Eau salée : Na<sup>+</sup> + Cl<sup>−</sup>. Solution de sulfate de cuivre : Cu<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup>.",
          "Les ions se déplacent dans l'eau : une solution ionique <b>conduit le courant électrique</b>. L'eau sucrée, qui ne contient que des molécules, le conduit très mal."
        ]
      },
      {
        titre: "Transformation physique ou transformation chimique ?",
        points: [
          "Dans une <b>transformation physique</b>, les espèces chimiques restent les mêmes : les molécules ne sont pas modifiées. Exemples : un <b>changement d'état</b> (fusion de la glace, vaporisation de l'eau) ou une <b>dissolution</b>.",
          "Dissoudre du sucre ou du sel dans l'eau n'est pas une transformation chimique : on obtient un <b>mélange</b>, une solution. En évaporant l'eau, on retrouve le sucre ou le sel.",
          "Lors d'un changement d'état, la <b>masse se conserve</b>, mais le volume peut changer : l'eau augmente de volume en gelant.",
          "Un <b>corps pur</b> change d'état à température constante (un palier) : l'eau pure fond à 0 °C et bout à 100 °C à la pression atmosphérique normale. Un mélange n'a pas de palier net.",
          "Dans une <b>transformation chimique</b>, des espèces chimiques disparaissent (les <b>réactifs</b>) et de nouvelles espèces apparaissent (les <b>produits</b>).",
          "Indices d'une transformation chimique : un gaz se dégage, la couleur change, un solide (un <b>précipité</b>) apparaît, un réactif disparaît, la température varie."
        ]
      },
      {
        titre: "L'équation de réaction et la conservation",
        points: [
          "Une transformation chimique est modélisée par une <b>réaction chimique</b> : <b>réactifs → produits</b>. Les atomes des réactifs <b>se réarrangent</b> pour former les produits : aucun atome n'apparaît, aucun ne disparaît.",
          "Le bilan en mots : carbone + dioxygène → dioxyde de carbone. L'<b>équation de réaction</b> utilise les formules : C + O<sub>2</sub> → CO<sub>2</sub>.",
          "Une équation doit être <b>équilibrée</b> : il y a autant d'atomes de chaque sorte de chaque côté de la flèche, et la même charge électrique totale quand il y a des ions.",
          "Pour équilibrer, on place des <b>coefficients</b> devant les formules ; on ne change <b>jamais</b> les indices. Exemple : 2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O (4 H et 2 O de chaque côté).",
          "Vérifier en comptant : C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O. À gauche : 3 C, 8 H, 10 O. À droite : 3 C, 8 H, 6 + 4 = 10 O. L'équation est équilibrée.",
          "<b>Conservation de la masse</b> : la masse des réactifs consommés est égale à la masse des produits formés. Exemple : 12 g de carbone brûlent avec 32 g de dioxygène et donnent <b>44 g</b> de dioxyde de carbone. Si un gaz s'échappe d'un récipient ouvert, la balance indique une baisse : la masse n'a pas disparu, elle est partie dans l'air."
        ]
      },
      {
        titre: "Les combustions et les tests d'identification",
        points: [
          "Une <b>combustion</b> est une transformation chimique qui a besoin d'un <b>combustible</b> (bois, carbone, méthane, butane…), d'un <b>comburant</b> (le dioxygène de l'air) et d'une source de chaleur pour démarrer : c'est le triangle du feu.",
          "Combustion du carbone : C + O<sub>2</sub> → CO<sub>2</sub>. Combustion du méthane (le gaz de ville) : CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O. Les combustions libèrent de l'énergie thermique et du CO<sub>2</sub>, un gaz à effet de serre.",
          "Si le dioxygène manque, la combustion est <b>incomplète</b> : flamme jaune, suie (du carbone) et <b>monoxyde de carbone</b> CO, un gaz toxique, inodore et mortel. D'où l'importance d'aérer et d'entretenir les chaudières.",
          "<b>Dioxyde de carbone</b> : l'<b>eau de chaux se trouble</b> (elle devient blanchâtre). <b>Eau</b> : le <b>sulfate de cuivre anhydre</b>, blanc, devient <b>bleu</b>.",
          "<b>Dihydrogène</b> : une flamme approchée provoque une <b>petite détonation</b>. <b>Dioxygène</b> : une bûchette <b>incandescente se rallume</b>.",
          "<b>Ions</b> : la soude (solution d'hydroxyde de sodium) donne un précipité <b>bleu</b> avec Cu<sup>2+</sup>, <b>vert</b> avec Fe<sup>2+</sup>, <b>rouille</b> avec Fe<sup>3+</sup>. Le nitrate d'argent donne avec Cl<sup>−</sup> un précipité <b>blanc qui noircit à la lumière</b>."
        ]
      },
      {
        titre: "Le pH : solutions acides, neutres ou basiques",
        points: [
          "Le <b>pH</b> est un nombre sans unité, compris entre 0 et 14. On le mesure avec du <b>papier pH</b> (on compare sa couleur à une échelle) ou, plus précisément, avec un <b>pH-mètre</b>. Plus le pH est petit, plus la solution est acide.",
          "pH &lt; 7 : solution <b>acide</b>, avec plus d'ions H<sup>+</sup> que d'ions HO<sup>−</sup> (jus de citron, vinaigre, soda). pH = 7 : solution <b>neutre</b>, autant des deux (eau pure). pH &gt; 7 : solution <b>basique</b>, avec plus d'ions HO<sup>−</sup> (eau savonneuse, eau de Javel, soude).",
          "<b>Diluer</b>, c'est ajouter de l'eau. Le pH d'une solution acide diluée <b>augmente</b> et se rapproche de 7 sans le dépasser ; celui d'une solution basique diluée <b>diminue</b> vers 7. Sécurité : les acides et les bases concentrés sont <b>corrosifs</b> (blouse, lunettes, gants) et on verse l'acide dans l'eau, jamais l'inverse.",
          "<b>Acide + base</b> : les ions H<sup>+</sup> et HO<sup>−</sup> réagissent pour former de l'eau : H<sup>+</sup> + HO<sup>−</sup> → H<sub>2</sub>O. Le mélange s'échauffe et son pH se rapproche de 7.",
          "<b>Acide + métal</b> : l'acide chlorhydrique (H<sup>+</sup> + Cl<sup>−</sup>) attaque le fer, le zinc ou l'aluminium, mais pas le cuivre. Avec le fer, il se forme du <b>dihydrogène</b> (petite détonation à la flamme) et des ions Fe<sup>2+</sup> (précipité vert avec la soude).",
          "Équation : <b>Fe + 2 H<sup>+</sup> → Fe<sup>2+</sup> + H<sub>2</sub></b>. Les ions H<sup>+</sup> sont consommés, donc le pH <b>augmente</b>. Les ions Cl<sup>−</sup> ne réagissent pas : ils n'apparaissent pas dans l'équation."
        ]
      },
      {
        titre: "La masse volumique",
        points: [
          "La <b>masse volumique</b> est la masse d'un volume donné de matière : <b>ρ = m / V</b> (ρ se lit « rhô »). Unités courantes : g/cm³, g/mL, g/L, kg/L ou kg/m³. On en déduit m = ρ × V et V = m / ρ.",
          "Pour l'eau : <b>ρ = 1 g/cm³ = 1 kg/L = 1 000 kg/m³</b>. Un litre d'eau a une masse de 1 kg. Rappels : 1 mL = 1 cm³ ; 1 L = 1 dm³ = 1 000 mL ; 1 m³ = 1 000 L.",
          "On mesure la masse avec une <b>balance</b> et le volume avec une <b>éprouvette graduée</b>. Pour un solide, on lit le volume d'eau avant et après l'avoir plongé : la différence est son volume.",
          "La masse volumique permet d'<b>identifier</b> une matière. Exemple : un bloc de 270 g occupe 100 cm³, donc ρ = 270 ÷ 100 = 2,7 g/cm³ : c'est de l'aluminium. Le fer a une masse volumique d'environ 7,9 g/cm³.",
          "Un objet <b>flotte</b> sur un liquide si sa masse volumique est plus petite que celle du liquide. L'huile (environ 0,92 g/cm³) et la glace (environ 0,92 g/cm³) flottent sur l'eau ; le fer coule.",
          "Un gaz a aussi une masse : un litre d'air a une masse d'environ 1,2 g."
        ]
      }
    ],

    mots: [
      ["Atome", "Constituant de base de la matière : un noyau chargé positivement entouré d'électrons. Il est électriquement neutre."],
      ["Noyau", "Centre de l'atome, formé de protons et de neutrons. Il contient presque toute la masse de l'atome."],
      ["Proton", "Particule du noyau qui porte une charge positive. Leur nombre Z caractérise l'élément chimique."],
      ["Neutron", "Particule du noyau qui ne porte pas de charge électrique."],
      ["Électron", "Particule chargée négativement qui se déplace autour du noyau."],
      ["Élément chimique", "Ensemble des atomes et des ions qui ont le même nombre de protons. Exemple : l'élément fer, de symbole Fe."],
      ["Molécule", "Assemblage d'atomes liés entre eux, électriquement neutre. Exemple : H₂O."],
      ["Ion", "Atome ou groupe d'atomes qui a gagné ou perdu un ou plusieurs électrons."],
      ["Cation et anion", "Cation : ion positif, qui a perdu des électrons (Na⁺, Cu²⁺). Anion : ion négatif, qui en a gagné (Cl⁻, HO⁻)."],
      ["Réactifs", "Espèces chimiques consommées pendant une transformation chimique. On les écrit à gauche de la flèche."],
      ["Produits", "Espèces chimiques formées pendant une transformation chimique. On les écrit à droite de la flèche."],
      ["Équation de réaction", "Écriture d'une réaction avec les formules chimiques, équilibrée grâce aux coefficients. Exemple : C + O₂ → CO₂."],
      ["pH", "Nombre de 0 à 14 qui indique si une solution est acide (pH < 7), neutre (pH = 7) ou basique (pH > 7)."],
      ["Masse volumique", "Masse d'un volume donné de matière : ρ = m / V. Celle de l'eau vaut 1 g/cm³."]
    ],

    quiz: [
      { q: "De quoi est formé le noyau d'un atome ?",
        choix: ["De protons et d'électrons", "De protons et de neutrons", "D'électrons et de neutrons", "Uniquement d'électrons"],
        bonne: 1,
        why: "Les protons (+) et les neutrons (sans charge) sont dans le noyau ; les électrons se déplacent autour." },

      { q: "Pourquoi un atome est-il électriquement neutre ?",
        choix: ["Il ne contient aucune charge électrique", "Ses neutrons annulent toutes les charges", "Il a autant d'électrons que de protons", "Son noyau n'a pas de charge"],
        bonne: 2,
        why: "Les charges + des protons et les charges − des électrons se compensent exactement." },

      { q: "Que contient une molécule de dioxyde de carbone CO₂ ?",
        choix: ["1 atome de carbone et 2 atomes d'oxygène", "2 atomes de carbone et 1 atome d'oxygène", "1 atome de cobalt et 2 atomes d'oxygène", "1 atome de carbone et 1 atome d'oxygène"],
        bonne: 0,
        why: "L'indice 2 porte sur O. Le C majuscule seul est le carbone ; le cobalt s'écrirait Co." },

      { q: "Combien d'atomes d'hydrogène y a-t-il dans 3 H₂O ?",
        choix: ["2", "3", "5", "6"],
        bonne: 3,
        why: "3 molécules contenant chacune 2 atomes d'hydrogène : 3 × 2 = 6." },

      { q: "L'ion Na⁺ est un atome de sodium qui a :",
        choix: ["gagné un électron", "perdu un proton", "perdu un électron", "gagné un proton"],
        bonne: 2,
        why: "Une charge + signifie qu'il manque un électron ; le noyau, lui, ne change pas." },

      { q: "L'atome de cuivre a 29 électrons. Combien en possède l'ion Cu²⁺ ?",
        choix: ["27", "29", "31", "2"],
        bonne: 0,
        why: "L'ion Cu²⁺ a perdu 2 électrons : 29 − 2 = 27." },

      { q: "Comment appelle-t-on un ion chargé négativement ?",
        choix: ["Un cation", "Un anion", "Un neutron", "Un proton"],
        bonne: 1,
        why: "Un anion a gagné des électrons, comme Cl⁻ ou HO⁻. Un cation, lui, est positif." },

      { q: "Lequel de ces phénomènes est une transformation chimique ?",
        choix: ["La fonte d'un glaçon", "La dissolution du sucre dans l'eau", "L'évaporation de l'eau", "La combustion du bois"],
        bonne: 3,
        why: "Le bois et le dioxygène disparaissent et de nouvelles espèces apparaissent ; les trois autres sont des transformations physiques." },

      { q: "Dans l'équation C + O₂ → CO₂, quels sont les réactifs ?",
        choix: ["Le carbone et le dioxygène", "Le dioxyde de carbone", "Le carbone seulement", "Le dioxygène et le dioxyde de carbone"],
        bonne: 0,
        why: "Les réactifs sont à gauche de la flèche, le produit à droite." },

      { q: "Pour équilibrer une équation de réaction, que peut-on modifier ?",
        choix: ["Les indices des formules", "Les coefficients devant les formules", "Les symboles des atomes", "Le sens de la flèche"],
        bonne: 1,
        why: "Changer un indice changerait la molécule elle-même ; on ajuste seulement les coefficients." },

      { q: "Quelle équation est correctement équilibrée ?",
        choix: ["H₂ + O₂ → H₂O", "2 H₂ + O₂ → H₂O", "2 H₂ + O₂ → 2 H₂O", "H₂ + 2 O₂ → 2 H₂O"],
        bonne: 2,
        why: "Il y a 4 atomes d'hydrogène et 2 atomes d'oxygène de chaque côté." },

      { q: "On brûle 12 g de carbone avec 32 g de dioxygène. Quelle masse de dioxyde de carbone obtient-on ?",
        choix: ["20 g", "32 g", "44 g", "384 g"],
        bonne: 2,
        why: "La masse se conserve : 12 + 32 = 44 g." },

      { q: "Quel test met en évidence l'eau ?",
        choix: ["L'eau de chaux se trouble", "Le sulfate de cuivre anhydre devient bleu", "Une bûchette incandescente se rallume", "Une petite détonation se produit à la flamme"],
        bonne: 1,
        why: "Le sulfate de cuivre anhydre, blanc, bleuit au contact de l'eau. L'eau de chaux, elle, détecte le CO₂." },

      { q: "Une bûchette incandescente se rallume dans un tube. Quel gaz contient-il ?",
        choix: ["Du dioxyde de carbone", "Du dihydrogène", "Du diazote", "Du dioxygène"],
        bonne: 3,
        why: "Le dioxygène est le comburant : il ravive la combustion." },

      { q: "Pourquoi une combustion incomplète est-elle dangereuse ?",
        choix: ["Elle produit du monoxyde de carbone, un gaz toxique", "Elle produit trop de dioxygène", "Elle ne dégage aucune chaleur", "Elle rend l'air basique"],
        bonne: 0,
        why: "Quand le dioxygène manque, il se forme du CO, un gaz inodore et mortel." },

      { q: "Une solution a un pH de 11. Elle est :",
        choix: ["acide", "neutre", "basique", "pure"],
        bonne: 2,
        why: "pH supérieur à 7 : la solution est basique, avec plus d'ions HO⁻ que d'ions H⁺." },

      { q: "Quels ions sont majoritaires dans une solution acide ?",
        choix: ["Les ions HO⁻", "Les ions H⁺", "Les ions Na⁺", "Les ions Cl⁻"],
        bonne: 1,
        why: "Une solution acide contient plus d'ions H⁺ que d'ions HO⁻." },

      { q: "On dilue une solution de soude de pH 13. Que devient son pH ?",
        choix: ["Il augmente vers 14", "Il reste égal à 13", "Il devient inférieur à 7", "Il diminue et se rapproche de 7"],
        bonne: 3,
        why: "Diluer rapproche toujours le pH de 7 : la solution devient moins basique, mais reste basique." },

      { q: "Quel gaz se dégage quand l'acide chlorhydrique attaque le fer ?",
        choix: ["Du dioxygène", "Du dioxyde de carbone", "De la vapeur d'eau", "Du dihydrogène"],
        bonne: 3,
        why: "Fe + 2 H⁺ → Fe²⁺ + H₂ : le dihydrogène produit une petite détonation à la flamme." },

      { q: "Un objet de 540 g a un volume de 200 cm³. Quelle est sa masse volumique ?",
        choix: ["2,7 g/cm³", "0,37 g/cm³", "340 g/cm³", "108 000 g/cm³"],
        bonne: 0,
        why: "ρ = m ÷ V = 540 ÷ 200 = 2,7 g/cm³." }
    ]
  },

  /* ----------------------------------------------------------------
     CHAPITRE 2 — L'énergie et l'électricité
  ---------------------------------------------------------------- */
  {
    id: 'pc-ch2',
    matiere: 'physique',
    ajout: true,
    zone: "L'énergie et ses conversions",
    numero: 'Chapitre 2',
    titre: "L'énergie et l'électricité",
    periode: "Conversions, énergie cinétique, circuits et puissance",
    theme: "Programme de cycle 4 — L'énergie et ses conversions",

    essentiel: [
      "L'énergie se mesure en <b>joules</b> (J). Un <b>convertisseur</b> la fait passer d'une forme à une autre (<b>chaîne énergétique</b>). Elle <b>se conserve</b> : énergie reçue = énergie utile + énergie perdue, le plus souvent sous forme de chaleur.",
      "Sources <b>renouvelables</b> : soleil, vent, eau, géothermie, biomasse. Sources <b>non renouvelables</b> : pétrole, gaz, charbon (fossiles) et uranium.",
      "<b>Énergie cinétique</b> : <b>Ec = ½ × m × v²</b> (m en kg, v en m/s, Ec en J). Si la vitesse double, Ec est multipliée par 4, et la distance de freinage aussi.",
      "En <b>série</b> : même intensité partout, les tensions s'additionnent. En <b>dérivation</b> : même tension aux bornes des branches, les intensités s'additionnent (loi des nœuds). <b>Loi d'Ohm</b> : <b>U = R × I</b>.",
      "<b>P = U × I</b> (W = V × A) et <b>E = P × t</b> : en J si P est en W et t en s ; en kWh si P est en kW et t en h. <b>1 kWh = 3,6 × 10⁶ J</b>. Coût = énergie en kWh × prix du kWh."
    ],

    sections: [
      {
        titre: "Les formes et les sources d'énergie",
        points: [
          "L'<b>énergie</b> est ce qui permet de mettre en mouvement, de chauffer, d'éclairer… Son unité est le <b>joule</b> (J).",
          "Les principales <b>formes</b> : énergie <b>cinétique</b> (liée au mouvement), énergie <b>de position</b> (liée à la hauteur), énergie <b>thermique</b>, <b>électrique</b>, <b>chimique</b> (stockée dans les aliments, les combustibles, les piles), <b>lumineuse</b> et <b>nucléaire</b> (stockée dans les noyaux des atomes).",
          "Une <b>source d'énergie</b> est ce qui fournit l'énergie. Les sources <b>renouvelables</b> se reconstituent rapidement à l'échelle humaine : soleil, vent, eau des rivières et des marées, géothermie, biomasse (bois).",
          "Les sources <b>non renouvelables</b> s'épuisent, car leurs réserves mettent des millions d'années à se former : pétrole, gaz naturel et charbon (énergies <b>fossiles</b>), et uranium (centrales nucléaires).",
          "Brûler des combustibles fossiles rejette du <b>dioxyde de carbone</b>, un gaz à effet de serre responsable du réchauffement climatique. Le nucléaire en rejette très peu mais produit des déchets radioactifs."
        ]
      },
      {
        titre: "Conversions et chaînes énergétiques",
        points: [
          "Un <b>convertisseur</b> transforme une forme d'énergie en une autre. Exemple : une lampe convertit l'énergie électrique en énergie lumineuse (utile) et en énergie thermique (perdue).",
          "Une <b>chaîne énergétique</b> représente ces étapes : un réservoir ou une source d'énergie, puis un ou plusieurs convertisseurs, reliés par des flèches qui indiquent la forme d'énergie transférée.",
          "Exemples : moteur (électrique → cinétique + thermique) ; panneau solaire photovoltaïque (lumineuse → électrique) ; éolienne (cinétique du vent → électrique) ; pile (chimique → électrique) ; radiateur (électrique → thermique).",
          "Dans la plupart des centrales électriques, une <b>turbine</b> fait tourner un <b>alternateur</b>, qui convertit l'énergie mécanique de rotation en énergie électrique.",
          "<b>Conservation de l'énergie</b> : l'énergie ne se crée pas et ne disparaît pas, elle se transforme. <b>Énergie reçue = énergie utile + énergie perdue</b>. La partie perdue est le plus souvent de la chaleur."
        ]
      },
      {
        titre: "Énergie cinétique et sécurité routière",
        points: [
          "Tout objet en mouvement possède une <b>énergie cinétique</b> : <b>Ec = ½ × m × v²</b>, avec m en kilogrammes (kg), v en mètres par seconde (m/s) et Ec en joules (J).",
          "Ec dépend de la masse mais surtout de la <b>vitesse</b>, qui est au carré : si v double, Ec est multipliée par <b>4</b> ; si v triple, par <b>9</b>.",
          "Convertir une vitesse : de km/h en m/s, on <b>divise par 3,6</b> ; de m/s en km/h, on <b>multiplie par 3,6</b>. Exemple : 90 km/h = 90 ÷ 3,6 = 25 m/s.",
          "<b>Distance d'arrêt = distance de réaction + distance de freinage</b>. La distance de réaction est parcourue pendant le temps de réaction du conducteur (environ 1 s), avant qu'il appuie sur la pédale ; la distance de freinage, pendant que les freins agissent.",
          "Pour arrêter le véhicule, les freins doivent convertir toute son énergie cinétique en chaleur : la distance de freinage augmente donc comme v². La fatigue, l'alcool ou le téléphone allongent le temps de réaction ; une route mouillée ou des pneus usés allongent le freinage.",
          "Lors d'un choc, l'énergie cinétique déforme le véhicule et les corps : à 50 km/h, un choc équivaut à une chute d'environ 10 m, soit du 3<sup>e</sup> étage."
        ]
      },
      {
        titre: "Énergie de position et énergie mécanique",
        points: [
          "Un objet situé en hauteur possède une <b>énergie de position</b> (ou énergie potentielle). Elle est d'autant plus grande que l'objet est <b>lourd</b> et <b>haut</b>.",
          "Le <b>poids</b> est la force d'attraction de la Terre sur un objet : P = m × g, avec g ≈ 9,8 N/kg sur Terre. Quand l'énoncé la donne, l'énergie de position se calcule avec Ep = m × g × h (h en mètres).",
          "L'<b>énergie mécanique</b> est la somme <b>Em = Ec + Ep</b>. Lors d'une chute, l'énergie de position se convertit en énergie cinétique : l'objet perd de la hauteur et gagne de la vitesse.",
          "Sans frottements, l'énergie mécanique se <b>conserve</b>. Avec des frottements, une partie est convertie en énergie thermique : l'énergie mécanique diminue.",
          "Exemple : dans un barrage, l'énergie de position de l'eau devient de l'énergie cinétique dans les conduites, puis de l'énergie électrique grâce à la turbine et à l'alternateur."
        ]
      },
      {
        titre: "Le circuit électrique : série et dérivation",
        points: [
          "Un circuit contient un <b>générateur</b> (pile, alimentation) et des <b>récepteurs</b> (lampe, moteur, résistance) reliés par des fils. Le courant ne circule que si la boucle est <b>fermée</b>. Par convention, il va de la borne + vers la borne − du générateur, à l'extérieur de celui-ci.",
          "L'<b>intensité</b> I du courant se mesure en <b>ampères</b> (A) avec un <b>ampèremètre</b> branché <b>en série</b>. La <b>tension</b> U se mesure en <b>volts</b> (V) avec un <b>voltmètre</b> branché <b>en dérivation</b> aux bornes du dipôle.",
          "<b>Circuit en série</b> (une seule boucle) : l'intensité est <b>la même partout</b>. La tension du générateur est égale à la <b>somme des tensions</b> aux bornes des récepteurs : U = U<sub>1</sub> + U<sub>2</sub> (loi d'additivité des tensions, ou loi des mailles).",
          "<b>Circuit en dérivation</b> (plusieurs boucles) : la tension est <b>la même</b> aux bornes de chaque branche : U = U<sub>1</sub> = U<sub>2</sub>. L'intensité dans la branche principale est la <b>somme</b> des intensités des branches dérivées : I = I<sub>1</sub> + I<sub>2</sub> (<b>loi des nœuds</b>).",
          "En dérivation, si une lampe grille, les autres restent allumées ; en série, tout s'éteint. C'est pourquoi les appareils d'une maison sont branchés en dérivation.",
          "<b>Court-circuit</b> : deux bornes d'un dipôle sont reliées par un simple fil, et le courant passe par ce fil sans traverser le dipôle. Aux bornes du générateur, c'est dangereux : l'intensité devient très grande et les fils chauffent."
        ]
      },
      {
        titre: "La loi d'Ohm",
        points: [
          "Une <b>résistance</b> (ou conducteur ohmique) s'oppose plus ou moins au passage du courant. Sa valeur R se mesure en <b>ohms</b> (Ω), avec un ohmmètre.",
          "<b>Loi d'Ohm</b> : la tension aux bornes d'une résistance est proportionnelle à l'intensité qui la traverse : <b>U = R × I</b> (U en V, R en Ω, I en A).",
          "On en déduit <b>R = U ÷ I</b> et <b>I = U ÷ R</b>. Attention : l'intensité doit être en ampères. 150 mA = 0,150 A.",
          "La caractéristique d'une résistance (la tension U en fonction de l'intensité I) est une <b>droite qui passe par l'origine</b> : c'est le signe de la proportionnalité. Plus R est grande, plus la droite est pentue.",
          "Exemple : R = 47 Ω et I = 0,2 A, donc U = 47 × 0,2 = <b>9,4 V</b>.",
          "Une résistance traversée par un courant <b>chauffe</b> : c'est l'<b>effet Joule</b>, utilisé dans les radiateurs, les grille-pain et les bouilloires."
        ]
      },
      {
        titre: "Puissance et énergie électriques",
        points: [
          "La <b>puissance</b> indique l'énergie convertie chaque seconde. Elle se mesure en <b>watts</b> (W) : 1 W = 1 J par seconde ; 1 kW = 1 000 W.",
          "<b>P = U × I</b> (P en W, U en V, I en A). La <b>puissance nominale</b> d'un appareil est indiquée dessus, avec sa tension nominale (230 V pour le secteur en France).",
          "<b>E = P × t</b>. Avec P en W et t en <b>secondes</b>, E est en <b>joules</b>. Avec P en W et t en <b>heures</b>, E est en <b>wattheures</b> (Wh). Avec P en kW et t en h, E est en <b>kilowattheures</b> (kWh).",
          "Conversions : 1 Wh = 3 600 J ; <b>1 kWh = 1 000 Wh = 3 600 000 J = 3,6 × 10⁶ J</b>. Pour les durées : 1 h = 3 600 s ; 30 min = 0,5 h.",
          "Le <b>compteur électrique</b> mesure l'énergie consommée en kWh. <b>Coût = énergie (en kWh) × prix du kWh</b>. Exemple : un four de 2,5 kW utilisé 2 h consomme 2,5 × 2 = 5 kWh ; à 0,20 € le kWh, cela coûte 5 × 0,20 = 1 €.",
          "Économiser l'énergie, c'est réduire la puissance ou la durée d'utilisation : une lampe LED de 8 W éclaire autant qu'une ancienne lampe à incandescence de 60 W, car elle perd beaucoup moins d'énergie en chaleur."
        ]
      },
      {
        titre: "La sécurité électrique",
        points: [
          "Le corps humain est <b>conducteur</b>. Le danger vient de l'intensité du courant qui le traverse : quelques dizaines de milliampères peuvent suffire à bloquer la respiration ou le cœur. On parle d'<b>électrisation</b>, et d'<b>électrocution</b> quand elle est mortelle.",
          "La prise du secteur délivre une tension de <b>230 V</b>, très dangereuse. Le fil de <b>phase</b> est le plus dangereux : le toucher suffit, car le courant peut traverser le corps jusqu'à la terre. Le fil <b>neutre</b> est bleu, le fil de <b>terre</b> vert et jaune.",
          "La <b>prise de terre</b> relie la carcasse métallique des appareils au sol. Associée au <b>disjoncteur différentiel</b> (30 mA), elle permet de couper le courant dès qu'il y a une fuite : elle protège les <b>personnes</b>.",
          "Le <b>fusible</b> et le <b>disjoncteur</b> coupent le courant en cas de <b>surintensité</b> (court-circuit ou trop d'appareils branchés) : ils protègent l'<b>installation</b> contre l'échauffement et l'incendie.",
          "Une <b>multiprise surchargée</b> est dangereuse : les appareils y sont en dérivation, donc leurs intensités s'additionnent dans le fil d'alimentation, qui chauffe.",
          "Règles : ne jamais toucher un appareil électrique avec les mains mouillées, ne rien introduire dans une prise, couper le courant avant toute intervention."
        ]
      }
    ],

    mots: [
      ["Énergie", "Grandeur qui permet de produire un mouvement, de la chaleur, de la lumière… Elle se mesure en joules (J)."],
      ["Convertisseur", "Objet qui transforme une forme d'énergie en une autre, comme une lampe, un moteur ou un alternateur."],
      ["Chaîne énergétique", "Schéma qui montre la source, les convertisseurs et les transferts d'énergie, y compris les pertes."],
      ["Conservation de l'énergie", "L'énergie ne se crée pas et ne disparaît pas : énergie reçue = énergie utile + énergie perdue."],
      ["Source renouvelable", "Source qui se reconstitue rapidement à l'échelle humaine : soleil, vent, eau, géothermie, biomasse."],
      ["Énergie cinétique", "Énergie liée au mouvement : Ec = ½ × m × v², en joules."],
      ["Énergie de position", "Énergie d'un objet liée à sa hauteur. Elle se convertit en énergie cinétique lors d'une chute."],
      ["Distance d'arrêt", "Distance de réaction + distance de freinage. Elle augmente fortement avec la vitesse."],
      ["Intensité", "Grandeur notée I qui traduit le débit du courant électrique, en ampères (A). Elle se mesure avec un ampèremètre en série."],
      ["Tension", "Grandeur notée U, en volts (V), mesurée avec un voltmètre branché en dérivation."],
      ["Résistance", "Dipôle qui s'oppose au passage du courant ; sa valeur R est en ohms (Ω). Loi d'Ohm : U = R × I."],
      ["Puissance", "Énergie convertie par seconde, notée P, en watts (W). P = U × I."],
      ["Kilowattheure", "Unité d'énergie : énergie consommée par un appareil de 1 kW pendant 1 heure. 1 kWh = 3,6 × 10⁶ J."],
      ["Court-circuit", "Liaison directe entre deux bornes par un fil : le courant ne traverse plus le dipôle et l'intensité peut devenir dangereuse."]
    ],

    quiz: [
      { q: "Quelle est l'unité de l'énergie ?",
        choix: ["Le watt", "Le joule", "Le volt", "L'ampère"],
        bonne: 1,
        why: "Le joule (J) mesure l'énergie ; le watt mesure la puissance." },

      { q: "Quelle source d'énergie est renouvelable ?",
        choix: ["Le charbon", "Le gaz naturel", "L'uranium", "Le vent"],
        bonne: 3,
        why: "Le vent se renouvelle sans cesse ; les trois autres sources s'épuisent." },

      { q: "Que convertit un panneau solaire photovoltaïque ?",
        choix: ["L'énergie lumineuse en énergie électrique", "L'énergie électrique en énergie lumineuse", "L'énergie thermique en énergie chimique", "L'énergie cinétique en énergie électrique"],
        bonne: 0,
        why: "Il reçoit la lumière du Soleil et fournit un courant électrique." },

      { q: "Un moteur reçoit 100 J d'énergie électrique et fournit 70 J d'énergie cinétique. Que sont devenus les 30 J restants ?",
        choix: ["Ils ont disparu", "Ils sont restés stockés dans le moteur", "Ils ont été perdus, surtout sous forme de chaleur", "Ils ont été détruits par les frottements"],
        bonne: 2,
        why: "L'énergie se conserve : 100 J = 70 J utiles + 30 J perdus, surtout en énergie thermique." },

      { q: "Quelle est la formule de l'énergie cinétique ?",
        choix: ["Ec = m × v", "Ec = ½ × m × v²", "Ec = ½ × m² × v", "Ec = m × g × v"],
        bonne: 1,
        why: "Ec = ½ × m × v², avec m en kg et v en m/s." },

      { q: "La vitesse d'une voiture est multipliée par 3. Son énergie cinétique est multipliée par :",
        choix: ["3", "6", "9", "1,5"],
        bonne: 2,
        why: "La vitesse est au carré : 3² = 9." },

      { q: "Combien font 72 km/h en m/s ?",
        choix: ["20 m/s", "259,2 m/s", "7,2 m/s", "72 000 m/s"],
        bonne: 0,
        why: "On divise par 3,6 : 72 ÷ 3,6 = 20 m/s." },

      { q: "La distance d'arrêt d'un véhicule est égale à :",
        choix: ["la distance de freinage seulement", "la distance de réaction moins la distance de freinage", "la vitesse multipliée par la masse", "la distance de réaction plus la distance de freinage"],
        bonne: 3,
        why: "Le conducteur réagit d'abord (distance de réaction), puis freine (distance de freinage)." },

      { q: "Une balle tombe, sans frottements. Que se passe-t-il ?",
        choix: ["Son énergie de position se convertit en énergie cinétique", "Son énergie cinétique diminue", "Son énergie de position augmente", "Son énergie mécanique disparaît"],
        bonne: 0,
        why: "Elle perd de la hauteur et gagne de la vitesse ; l'énergie mécanique se conserve." },

      { q: "Avec quel appareil mesure-t-on une intensité, et comment le branche-t-on ?",
        choix: ["Un voltmètre, en dérivation", "Un ampèremètre, en série", "Un ampèremètre, en dérivation", "Un ohmmètre, en série"],
        bonne: 1,
        why: "L'ampèremètre se branche en série ; le voltmètre, en dérivation." },

      { q: "Dans un circuit en dérivation, que peut-on dire de la tension aux bornes de chaque branche ?",
        choix: ["Elle est la même pour toutes les branches", "Elle s'additionne d'une branche à l'autre", "Elle est nulle", "Elle dépend de l'ordre des lampes"],
        bonne: 0,
        why: "En dérivation, toutes les branches sont soumises à la même tension." },

      { q: "Une pile de 9 V alimente deux lampes en série. La tension aux bornes de l'une vaut 5 V. Que vaut la tension aux bornes de l'autre ?",
        choix: ["9 V", "5 V", "14 V", "4 V"],
        bonne: 3,
        why: "En série, les tensions s'additionnent : 9 = 5 + 4." },

      { q: "La branche principale est traversée par 0,8 A. Une des deux branches dérivées est traversée par 0,3 A. Quelle intensité traverse l'autre ?",
        choix: ["1,1 A", "0,5 A", "0,8 A", "0,3 A"],
        bonne: 1,
        why: "Loi des nœuds : 0,8 = 0,3 + 0,5." },

      { q: "Que dit la loi d'Ohm ?",
        choix: ["U = R × I", "P = U × I", "E = P × t", "I = U × R"],
        bonne: 0,
        why: "La tension aux bornes d'une résistance est égale à R × I." },

      { q: "Une résistance de 220 Ω est soumise à une tension de 11 V. Quelle intensité la traverse ?",
        choix: ["2 420 A", "0,05 A", "20 A", "231 A"],
        bonne: 1,
        why: "I = U ÷ R = 11 ÷ 220 = 0,05 A, soit 50 mA." },

      { q: "Une bouilloire fonctionne sous 230 V et est traversée par 10 A. Quelle est sa puissance ?",
        choix: ["23 W", "240 W", "2 300 W", "220 W"],
        bonne: 2,
        why: "P = U × I = 230 × 10 = 2 300 W." },

      { q: "Un appareil de 1 000 W fonctionne 30 minutes. Quelle énergie consomme-t-il ?",
        choix: ["30 000 Wh", "1 030 Wh", "2 kWh", "0,5 kWh"],
        bonne: 3,
        why: "E = P × t = 1 kW × 0,5 h = 0,5 kWh. Il faut d'abord convertir 30 min en 0,5 h." },

      { q: "À combien de joules correspond 1 kWh ?",
        choix: ["1 000 J", "3 600 J", "60 000 J", "3 600 000 J"],
        bonne: 3,
        why: "1 kWh = 1 000 W × 3 600 s = 3 600 000 J." },

      { q: "Quel dispositif protège les personnes contre les fuites de courant ?",
        choix: ["Le fusible", "La multiprise", "Le disjoncteur différentiel, avec la prise de terre", "L'interrupteur"],
        bonne: 2,
        why: "Il coupe le courant dès qu'il détecte une fuite de 30 mA." },

      { q: "Pourquoi ne faut-il pas brancher trop d'appareils sur une même multiprise ?",
        choix: ["Parce que la tension devient trop grande", "Parce que les appareils y sont branchés en série", "Parce que les intensités s'additionnent et le fil chauffe", "Parce que la puissance de chaque appareil diminue"],
        bonne: 2,
        why: "Les appareils sont en dérivation : l'intensité totale devient grande, le fil chauffe et peut provoquer un incendie." }
    ]
  },

  /* ----------------------------------------------------------------
     FICHE MÉTHODE
  ---------------------------------------------------------------- */
  {
    id: 'pc-m1',
    matiere: 'physique',
    ajout: true,
    fiche: true,
    zone: 'Méthode',
    numero: 'Méthode',
    titre: "Réussir un calcul et exploiter un document en physique-chimie",
    periode: "Formules, unités, documents et protocoles",
    theme: "Épreuve de sciences du brevet",

    essentiel: [
      "Toujours dans cet ordre : <b>formule</b> → <b>données avec leurs unités</b> → <b>conversions</b> → <b>calcul posé</b> → <b>résultat avec unité</b> → <b>phrase réponse</b>.",
      "On <b>convertit avant de calculer</b> : m en kg et v en m/s pour Ec ; I en A pour la loi d'Ohm ; P en kW et t en h pour obtenir des kWh.",
      "Un résultat <b>sans unité</b> est incomplet. On vérifie qu'il est <b>vraisemblable</b> : une voiture ne roule pas à 3 000 km/h.",
      "Un document se lit dans l'ordre : <b>titre</b>, <b>axes ou colonnes</b>, <b>unités</b>, puis les <b>valeurs</b> utiles, que l'on cite dans la réponse.",
      "Au brevet, l'épreuve de sciences dure <b>1 h pour deux disciplines</b> : environ 30 minutes pour la physique-chimie."
    ],

    sections: [
      {
        titre: "Les étapes d'un calcul",
        etapes: true,
        points: [
          "<b>Identifier la grandeur cherchée</b> et la <b>formule</b> qui la relie aux données : Ec = ½ × m × v², U = R × I, P = U × I, E = P × t, ρ = m / V.",
          "<b>Lister les données</b> de l'énoncé avec leur <b>symbole</b> et leur <b>unité</b>.",
          "<b>Convertir</b> dans les unités qu'exige la formule (voir la partie suivante).",
          "<b>Poser le calcul</b> : écrire la formule, puis la même ligne avec les nombres, puis le résultat. Le correcteur doit pouvoir suivre la démarche.",
          "<b>Donner le résultat</b> avec son <b>unité</b> et l'arrondi demandé (au dixième, à l'unité…), ou à défaut un arrondi raisonnable.",
          "<b>Rédiger une phrase réponse</b> qui reprend la question, puis <b>vérifier l'ordre de grandeur</b>."
        ],
        exemple: "<b>Énoncé</b> : une voiture de 1,2 t roule à 90 km/h. Calculer son énergie cinétique.<br><b>Formule</b> : Ec = ½ × m × v².<br><b>Données converties</b> : m = 1,2 t = <b>1 200 kg</b> ; v = 90 km/h = 90 ÷ 3,6 = <b>25 m/s</b>.<br><b>Calcul</b> : Ec = 0,5 × 1 200 × 25² = 0,5 × 1 200 × 625 = <b>375 000 J</b>.<br><b>Phrase réponse</b> : l'énergie cinétique de la voiture est de 375 000 J, soit 375 kJ ou 3,75 × 10⁵ J.<br><b>Vérification</b> : quelques centaines de milliers de joules pour une voiture sur la route, c'est vraisemblable. Sans convertir la vitesse (v = 90), on aurait trouvé 4 860 000 J : presque 13 fois trop."
      },
      {
        titre: "Convertir dans les bonnes unités",
        points: [
          "<b>Masse</b> : 1 kg = 1 000 g ; 1 t = 1 000 kg. Donc 250 g = 0,25 kg.",
          "<b>Vitesse</b> : de km/h en m/s, on divise par 3,6 ; de m/s en km/h, on multiplie par 3,6. Exemple : 54 km/h = 54 ÷ 3,6 = 15 m/s.",
          "<b>Durée</b> : 1 h = 60 min = 3 600 s. 15 min = 0,25 h ; 45 min = 0,75 h ; 1 h 30 min = 1,5 h, et non 1,3 h.",
          "<b>Puissance et énergie</b> : 1 kW = 1 000 W ; 1 kWh = 1 000 Wh = 3 600 000 J. Pour des joules, on prend P en W et t en s ; pour des kWh, P en kW et t en h.",
          "<b>Intensité, volume, longueur</b> : 1 A = 1 000 mA ; 1 L = 1 000 mL = 1 000 cm³ ; 1 m³ = 1 000 L ; 1 km = 1 000 m.",
          "Astuce : écrire l'unité à côté de chaque nombre pendant le calcul permet de repérer une conversion oubliée."
        ],
        exemple: "<b>Énoncé</b> : un sèche-cheveux de 1 800 W fonctionne 10 min par jour pendant 30 jours. Le kWh coûte 0,20 €. Calculer le coût.<br><b>Conversions</b> : P = 1 800 W = <b>1,8 kW</b> ; t = 10 × 30 = 300 min = 300 ÷ 60 = <b>5 h</b>.<br><b>Calcul</b> : E = P × t = 1,8 × 5 = <b>9 kWh</b> ; coût = 9 × 0,20 = <b>1,80 €</b>.<br><b>Phrase réponse</b> : en un mois, le sèche-cheveux consomme 9 kWh, ce qui coûte 1,80 €."
      },
      {
        titre: "Rédiger et vérifier le résultat",
        points: [
          "Un résultat se donne toujours avec son <b>unité</b> : « 25 » ne veut rien dire, « 25 m/s » oui.",
          "On <b>arrondit</b> seulement à la fin du calcul, et on écrit « ≈ » quand la valeur est arrondie : I = 1 500 ÷ 230 ≈ 6,5 A.",
          "La <b>phrase réponse</b> reprend les mots de la question : « La puissance de l'appareil est de 2 300 W. »",
          "<b>Ordre de grandeur</b> : se demander si le résultat est réaliste. Une personne de 6 000 kg, une lampe de 50 000 W ou un pH de 18 signalent une erreur : conversion oubliée ou formule mal utilisée.",
          "Quand la consigne dit <b>justifier</b> ou <b>expliquer</b>, un calcul seul ne suffit pas : il faut une phrase qui relie le résultat au cours, par exemple « la masse se conserve, donc… »."
        ]
      },
      {
        titre: "Exploiter un graphique ou un tableau",
        points: [
          "Lire d'abord le <b>titre</b>, puis les <b>grandeurs</b> portées sur chaque axe (ou en tête de colonne) et leurs <b>unités</b>. Repérer l'échelle : combien vaut un carreau ?",
          "Pour <b>lire une valeur</b> : partir de l'axe connu, aller jusqu'à la courbe, puis lire sur l'autre axe. Tracer les pointillés de lecture et écrire la valeur avec son unité.",
          "Pour <b>décrire</b> une évolution : dire si la grandeur augmente, diminue ou reste constante, et entre quelles valeurs, chiffres à l'appui.",
          "Une <b>droite qui passe par l'origine</b> traduit une situation de <b>proportionnalité</b>, comme U = R × I ou m = ρ × V. Dans un tableau, on le vérifie en calculant les quotients : ils doivent être tous égaux.",
          "Pour <b>comparer</b> des documents ou des séries de mesures, donner les ressemblances et les différences avec des valeurs.",
          "Ne retenir d'un document que ce qui répond à la question, et toujours le <b>citer</b> : « D'après le document 2… »."
        ]
      },
      {
        titre: "Décrire ou proposer un protocole",
        points: [
          "Un <b>protocole</b> décrit une expérience pour que quelqu'un d'autre puisse la refaire. Il donne le <b>matériel</b>, puis les <b>étapes numérotées</b>, avec des verbes à l'infinitif : verser, peser, mesurer, noter.",
          "Pour tester l'effet d'un facteur, on ne fait varier qu'<b>une seule grandeur à la fois</b> et on garde toutes les autres identiques. On compare les résultats à une expérience <b>témoin</b>.",
          "Préciser <b>ce que l'on mesure</b> et avec quel instrument (balance, éprouvette graduée, thermomètre, pH-mètre, ampèremètre, voltmètre), puis ce que l'on <b>observe</b> ou <b>attend</b>.",
          "Indiquer les <b>règles de sécurité</b> utiles : lunettes et gants avec les acides et les bases, flamme éloignée d'un gaz inflammable, jamais d'expérience sur une prise du secteur.",
          "Un <b>schéma</b> aide : un titre, des traits à la règle, des légendes. Pour un circuit électrique, on utilise les symboles normalisés."
        ],
        exemple: "<b>Mesurer la masse volumique d'un caillou</b><br>Matériel : balance, éprouvette graduée, eau.<br>1. Peser le caillou sur la balance et noter sa masse m.<br>2. Verser 50 mL d'eau dans l'éprouvette graduée.<br>3. Plonger le caillou dans l'éprouvette et lire le nouveau volume.<br>4. Calculer le volume du caillou : V = nouveau volume − 50 mL.<br>5. Calculer ρ = m ÷ V et comparer le résultat aux valeurs d'un tableau de masses volumiques."
      },
      {
        titre: "L'épreuve de sciences au brevet",
        points: [
          "L'épreuve dure <b>1 heure</b> et porte sur <b>deux disciplines</b> parmi la physique-chimie, les SVT et la technologie : environ <b>30 minutes</b> pour chacune.",
          "Les questions s'appuient sur des <b>documents</b> : textes, graphiques, tableaux, schémas. Les formules sont souvent rappelées, mais il faut savoir les utiliser et connaître les unités.",
          "Lire tout le sujet avant de commencer, puis repérer les <b>verbes de consigne</b> : <i>citer</i>, <i>calculer</i>, <i>justifier</i>, <i>expliquer</i>, <i>proposer</i>.",
          "Une réponse doit être <b>justifiée</b>. Une démarche bien posée peut rapporter des points même si le résultat final est faux.",
          "La calculatrice est autorisée. Garder un œil sur l'heure et ne pas rester bloqué : passer à la question suivante et y revenir ensuite."
        ]
      }
    ],

    mots: [
      ["Grandeur", "Ce que l'on mesure ou calcule : une masse, une vitesse, une tension… Elle a un symbole et une unité."],
      ["Unité", "Référence qui accompagne une valeur : kg, m/s, V, A, W, J. Un résultat sans unité est incomplet."],
      ["Formule", "Relation entre des grandeurs, comme P = U × I. On l'écrit avant de remplacer les lettres par les nombres."],
      ["Conversion", "Passage d'une unité à une autre, par exemple 90 km/h = 25 m/s ou 1 kWh = 3 600 000 J."],
      ["Arrondi", "Valeur approchée d'un résultat, signalée par le signe ≈. On arrondit à la fin du calcul."],
      ["Ordre de grandeur", "Valeur approximative qui permet de vérifier qu'un résultat est réaliste."],
      ["Phrase réponse", "Phrase qui reprend la question et donne le résultat avec son unité."],
      ["Protocole", "Liste du matériel et des étapes numérotées d'une expérience, pour qu'on puisse la refaire."],
      ["Témoin", "Expérience de référence, identique sauf pour le facteur testé, à laquelle on compare les résultats."],
      ["Proportionnalité", "Deux grandeurs sont proportionnelles si l'une s'obtient en multipliant l'autre par un même nombre. Sur un graphique : une droite qui passe par l'origine."]
    ],

    quiz: [
      { q: "Combien font 36 km/h en m/s ?",
        choix: ["10 m/s", "129,6 m/s", "3,6 m/s", "36 000 m/s"],
        bonne: 0,
        why: "On divise par 3,6 : 36 ÷ 3,6 = 10 m/s." },

      { q: "Une masse de 450 g, convertie en kilogrammes, vaut :",
        choix: ["45 kg", "4,5 kg", "0,45 kg", "450 000 kg"],
        bonne: 2,
        why: "1 kg = 1 000 g, donc on divise par 1 000 : 450 g = 0,45 kg." },

      { q: "Combien d'heures font 1 h 15 min ?",
        choix: ["1,15 h", "1,25 h", "1,5 h", "75 h"],
        bonne: 1,
        why: "15 min = 15 ÷ 60 = 0,25 h. Une heure compte 60 minutes, pas 100." },

      { q: "Pour obtenir une énergie en kWh avec E = P × t, il faut prendre :",
        choix: ["P en W et t en s", "P en kW et t en min", "P en kW et t en h", "P en W et t en h"],
        bonne: 2,
        why: "kW × h = kWh. Avec des W et des s, on obtient des joules ; avec des W et des h, des Wh." },

      { q: "Un élève trouve qu'une personne a une masse de 5 500 kg. Que doit-il penser ?",
        choix: ["Le résultat est sûrement juste", "Il a probablement fait une erreur, par exemple de conversion", "Il suffit d'arrondir à 5 000 kg", "Il faut l'écrire en tonnes"],
        bonne: 1,
        why: "L'ordre de grandeur est absurde : une personne pèse quelques dizaines de kilogrammes." },

      { q: "Sur un graphique, une droite qui passe par l'origine indique :",
        choix: ["que la grandeur est constante", "une erreur de mesure", "que la grandeur diminue", "une situation de proportionnalité"],
        bonne: 3,
        why: "Les deux grandeurs sont proportionnelles, comme U et I pour une résistance." },

      { q: "Dans un protocole qui teste l'effet d'un facteur, que doit-on faire ?",
        choix: ["Ne changer qu'une seule grandeur à la fois", "Changer plusieurs grandeurs en même temps", "Ne faire qu'une seule mesure", "Supprimer l'expérience témoin"],
        bonne: 0,
        why: "Sinon, on ne pourrait pas savoir quelle grandeur est responsable du résultat." },

      { q: "Combien de temps dure l'épreuve de sciences du brevet ?",
        choix: ["30 minutes pour une seule discipline", "2 heures pour trois disciplines", "1 heure pour une seule discipline", "1 heure pour deux disciplines"],
        bonne: 3,
        why: "Deux disciplines parmi physique-chimie, SVT et technologie, soit environ 30 minutes chacune." }
    ]
  }

);
