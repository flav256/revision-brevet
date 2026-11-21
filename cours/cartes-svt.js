/* ============================================================
   cours/cartes-svt.js — les cartes mentales de SVT
   Une carte par chapitre : au centre le chapitre, autour ses
   grandes idées (branches), au bout les mots-clés (feuilles).
   Les feuilles acceptent <b>…</b> pour le mot à retenir.
   Garder des feuilles courtes : 40 caractères environ.
   ============================================================ */
DATA.cartes = Object.assign(DATA.cartes || {}, {

  'svt-ch1': {
    centre: "Une diversité au sein de chaque espèce",
    branches: [
      { titre: "L'espèce", feuilles: [
        "Des individus qui se ressemblent",
        "Ils se reproduisent entre eux",
        "Descendants <b>fertiles</b>",
        "Cheval × âne → mulet stérile : 2 espèces"] },
      { titre: "Les caractères", feuilles: [
        "<b>De l'espèce</b> : communs à tous",
        "Ex. : marcher debout sur deux jambes",
        "<b>Individuels</b> : varient d'une personne à l'autre",
        "Ex. : la couleur des yeux"] },
      { titre: "Héréditaire ou acquis ?", feuilles: [
        "<b>Héréditaire</b> : transmis par les gamètes",
        "Groupe sanguin, mucoviscidose",
        "<b>Acquis</b> : bronzage, cicatrice, muscles",
        "Un caractère acquis ne se transmet pas"] },
      { titre: "Le phénotype", feuilles: [
        "= les caractères observables",
        "Gènes <b>+ environnement</b>",
        "Vrais jumeaux devenus différents",
        "Lapin russe, hortensia"] },
      { titre: "La biodiversité", feuilles: [
        "Diversité des <b>écosystèmes</b>",
        "Diversité des <b>espèces</b>",
        "Diversité <b>génétique</b> dans l'espèce",
        "Aide l'espèce à s'adapter"] }
    ]
  },

  'svt-ch2': {
    centre: "L'information génétique de la cellule",
    branches: [
      { titre: "Le noyau", feuilles: [
        "Contient l'<b>information génétique</b>",
        "Preuve : la brebis <b>Dolly</b> (1996)",
        "Transfert de noyau → un <b>clone</b>"] },
      { titre: "Chromosomes et caryotype", feuilles: [
        "<b>46 chromosomes</b> = 23 paires",
        "Un de chaque paire vient du père, l'autre de la mère",
        "23<sup>e</sup> paire : <b>XX</b> fille, <b>XY</b> garçon",
        "<b>Caryotype</b> : photo classée par paires"] },
      { titre: "L'ADN", feuilles: [
        "Molécule en <b>double hélice</b>",
        "Un texte de 4 lettres : A, T, C, G",
        "<b>Universel</b> : chez tous les êtres vivants"] },
      { titre: "Gènes et allèles", feuilles: [
        "<b>Gène</b> : portion d'ADN → un caractère",
        "<b>Allèles</b> : versions d'un gène (A, B, O)",
        "Deux allèles par gène",
        "Cellule → noyau → chromosome → ADN → gène"] },
      { titre: "Les anomalies", feuilles: [
        "<b>Trisomie 21</b> : 47 chromosomes",
        "Erreur lors de la formation d'un gamète",
        "<b>Turner</b> : 45 chromosomes, un seul X"] }
    ]
  },

  'svt-ch3': {
    centre: "Stabilité et diversité génétique des individus",
    branches: [
      { titre: "La mitose : stabilité", feuilles: [
        "L'ADN est copié : 2 chromatides",
        "1 cellule → <b>2 cellules identiques</b>",
        "<b>46 → 46</b> chromosomes",
        "Croissance, renouvellement, réparation"] },
      { titre: "La méiose", feuilles: [
        "Fabrique les <b>gamètes</b>",
        "Un chromosome de chaque paire : <b>23</b>",
        "Répartition <b>au hasard</b>",
        "Plus de 8 millions de gamètes possibles"] },
      { titre: "La fécondation", feuilles: [
        "<b>23 + 23 = 46</b> chromosomes",
        "Rencontre des gamètes au hasard",
        "Chaque individu est <b>unique</b>",
        "Le spermatozoïde apporte X ou Y"] },
      { titre: "Allèles et groupes sanguins", feuilles: [
        "<b>Dominant</b> : s'exprime même seul",
        "<b>Récessif</b> : s'exprime s'il est en double",
        "A et B dominants sur O",
        "A et B ensemble → groupe <b>AB</b>"] },
      { titre: "Génotype et phénotype", feuilles: [
        "<b>Génotype</b> : les allèles, ex. (A//O)",
        "<b>Phénotype</b> : ce que l'on observe",
        "<b>Mutation</b> → un nouvel allèle",
        "Transmise si elle touche les gamètes"] }
    ]
  },

  'svt-ch4': {
    centre: "Planète Terre : séismes, volcans et climat",
    branches: [
      { titre: "Les plaques", feuilles: [
        "Croûte, manteau, noyau",
        "<b>Lithosphère</b> découpée en plaques",
        "Quelques centimètres par an",
        "S'écartent, se rapprochent, glissent"] },
      { titre: "Les séismes", feuilles: [
        "Roches cassées le long d'une <b>faille</b>",
        "<b>Foyer</b> en profondeur",
        "<b>Épicentre</b> en surface, juste au-dessus",
        "<b>Magnitude</b> = énergie libérée"] },
      { titre: "Les volcans", feuilles: [
        "Du <b>magma</b> remonte",
        "<b>Effusif</b> : lave fluide, coulées",
        "<b>Explosif</b> : lave visqueuse, nuées ardentes",
        "Surtout aux limites des plaques"] },
      { titre: "Les risques", feuilles: [
        "<b>Risque = aléa × enjeux</b>",
        "Surveillance des volcans",
        "Constructions parasismiques",
        "Information et plans d'évacuation"] },
      { titre: "Météo et climat", feuilles: [
        "<b>Météo</b> : le temps du moment",
        "<b>Climat</b> : moyenne sur au moins 30 ans",
        "<b>Effet de serre</b> : CO₂, méthane",
        "Réchauffement dû aux activités humaines"] },
      { titre: "Conséquences et solutions", feuilles: [
        "Glaciers qui fondent, océans qui montent",
        "Canicules et sécheresses",
        "<b>Atténuation</b> : réduire les émissions",
        "<b>Adaptation</b> : se préparer"] }
    ]
  },

  'svt-r1': {
    centre: "La reproduction des animaux",
    branches: [
      { titre: "Reproduction sexuée", feuilles: [
        "2 parents, 2 <b>gamètes</b>",
        "Spermatozoïde + ovule",
        "<b>Fécondation</b> → cellule-œuf",
        "Des descendants tous différents"] },
      { titre: "La fécondation", feuilles: [
        "<b>Externe</b> : dans l'eau (grenouille)",
        "<b>Interne</b> : après accouplement",
        "Fécondation externe : beaucoup d'ovules"] },
      { titre: "Le développement", feuilles: [
        "<b>Ovipare</b> : pond des œufs",
        "<b>Vivipare</b> : petits dans le ventre",
        "Allaitement chez les mammifères"] },
      { titre: "La métamorphose", feuilles: [
        "<b>Direct</b> : le jeune ressemble à l'adulte",
        "<b>Indirect</b> : une larve se transforme",
        "Têtard → grenouille",
        "Chenille → chrysalide → papillon"] },
      { titre: "Reproduction asexuée", feuilles: [
        "<b>Un seul parent</b>, sans gamètes",
        "Hydre, étoile de mer, puceron",
        "Descendants = <b>clones</b>",
        "Rapide, mais pas de diversité"] }
    ]
  },

  'svt-r2': {
    centre: "La reproduction des végétaux",
    branches: [
      { titre: "La fleur", feuilles: [
        "<b>Étamines</b> (mâles) → pollen",
        "<b>Pistil</b> (femelle) : stigmate, style, ovaire",
        "L'ovaire contient les <b>ovules</b>",
        "Pétales colorés : attirer les insectes"] },
      { titre: "La pollinisation", feuilles: [
        "Pollen → pistil d'une fleur de même espèce",
        "Par le <b>vent</b>",
        "Par les <b>insectes</b> (abeilles)",
        "Coopération plante – insecte"] },
      { titre: "Après la fécondation", feuilles: [
        "Le pollen forme un tube pollinique",
        "<b>Ovule → graine</b>",
        "<b>Ovaire → fruit</b>"] },
      { titre: "Dispersion et germination", feuilles: [
        "Vent (pissenlit), animaux, eau",
        "Coloniser de nouveaux milieux",
        "Germer : eau, dioxygène, chaleur"] },
      { titre: "Multiplication végétative", feuilles: [
        "<b>Stolons</b> (fraisier)",
        "<b>Tubercules</b> (pomme de terre), bulbes",
        "Bouturage, greffage",
        "Nouvelles plantes = <b>clones</b>"] }
    ]
  },

  'svt-r3': {
    centre: "Reproduction et dynamique des populations animales",
    branches: [
      { titre: "La population", feuilles: [
        "Même espèce, même milieu",
        "<b>Effectif</b> = nombre d'individus",
        "<b>Dynamique</b> : évolution de l'effectif"] },
      { titre: "Ce qui fait varier l'effectif", feuilles: [
        "<b>+</b> naissances, arrivées",
        "<b>−</b> morts, départs",
        "Nourriture, climat, maladies, place"] },
      { titre: "Deux stratégies", feuilles: [
        "<b>Beaucoup de petits</b>, sans soins (morue)",
        "<b>Peu de petits</b>, protégés (éléphant)",
        "Dans les deux cas, la population se maintient"] },
      { titre: "Proies et prédateurs", feuilles: [
        "Lièvres ↑ → lynx ↑",
        "Lynx ↑ → lièvres ↓",
        "Cycles <b>décalés</b> dans le temps"] },
      { titre: "L'être humain", feuilles: [
        "<b>−</b> surpêche, chasse, habitats détruits",
        "<b>−</b> espèces envahissantes",
        "<b>+</b> réserves, quotas, réintroductions"] }
    ]
  },

  'svt-r4': {
    centre: "Reproduction et dynamique des populations végétales",
    branches: [
      { titre: "Une plante fixée", feuilles: [
        "Colonise par ses <b>graines</b>",
        "Et par <b>multiplication végétative</b>",
        "Peu de graines deviennent adultes"] },
      { titre: "Les conditions du milieu", feuilles: [
        "Eau, lumière, température, sol",
        "<b>Concurrence</b> pour la lumière",
        "<b>Annuelles</b> : l'hiver en graines",
        "<b>Vivaces</b> : bulbes, rhizomes"] },
      { titre: "Le rôle des animaux", feuilles: [
        "<b>Pollinisateurs</b> (abeilles)",
        "<b>Disperseurs</b> (geai, écureuil)",
        "Herbivores (chevreuils)"] },
      { titre: "Coloniser un champ", feuilles: [
        "D'abord des herbes",
        "Puis des arbustes",
        "Enfin des arbres : la forêt"] },
      { titre: "L'être humain", feuilles: [
        "<b>−</b> déforestation, désherbants",
        "<b>−</b> espèces envahissantes (renouée)",
        "<b>+</b> reboisement, fauche tardive"] }
    ]
  },

  'svt-r5': {
    centre: "Le fonctionnement des appareils reproducteurs",
    branches: [
      { titre: "La puberté", feuilles: [
        "Les appareils deviennent <b>fonctionnels</b>",
        "Caractères sexuels secondaires",
        "Poils, mue de la voix, seins, règles"] },
      { titre: "Les hormones", feuilles: [
        "Commande par le <b>cerveau</b>",
        "Testicules → <b>testostérone</b>",
        "Ovaires → <b>œstrogènes</b> et <b>progestérone</b>"] },
      { titre: "Chez l'homme", feuilles: [
        "Spermatozoïdes produits <b>en continu</b>",
        "Testicule → spermiducte → urètre",
        "Sperme = spermatozoïdes + liquide"] },
      { titre: "Chez la femme : un cycle", feuilles: [
        "Cycle d'environ <b>28 jours</b>",
        "<b>Ovulation</b> vers le 14<sup>e</sup> jour",
        "La muqueuse de l'utérus s'épaissit",
        "Pas de fécondation → <b>règles</b>"] },
      { titre: "Maîtriser sa reproduction", feuilles: [
        "<b>Contraception</b> : pilule, stérilet, implant",
        "<b>Préservatif</b> : protège aussi des IST",
        "Contraception d'urgence : au plus tôt"] }
    ]
  },

  'svt-r6': {
    centre: "La formation d'un nouvel être humain",
    branches: [
      { titre: "La fécondation", feuilles: [
        "Dans une <b>trompe</b>",
        "1 spermatozoïde + 1 ovule",
        "Cellule-œuf : <b>46</b> chromosomes",
        "XX fille, XY garçon"] },
      { titre: "La nidation", feuilles: [
        "Cellule-œuf → embryon (mitoses)",
        "Implantation dans l'utérus vers <b>7 jours</b>",
        "Début de la grossesse : plus de règles"] },
      { titre: "Le développement", feuilles: [
        "<b>Embryon</b> : 2 mois, les organes se forment",
        "<b>Fœtus</b> : il grandit",
        "Grossesse d'environ <b>9 mois</b>",
        "Protégé par le liquide amniotique"] },
      { titre: "Le placenta", feuilles: [
        "Mère → fœtus : O₂, nutriments",
        "Fœtus → mère : CO₂, déchets",
        "Les deux sangs ne se mélangent pas",
        "<b>Alcool et tabac</b> passent : danger"] },
      { titre: "La naissance", feuilles: [
        "Contractions, le col se dilate",
        "<b>Délivrance</b> : sortie du placenta",
        "Vrais jumeaux : une seule cellule-œuf",
        "AMP : insémination, FIV"] }
    ]
  }
});
