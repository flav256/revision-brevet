/* Maths — chapitres 6 (proportionnalité et pourcentages), 7 (Scratch)
   et fiche méthode « Résoudre un problème et réussir l'épreuve de maths ». */
DATA.chapitres.push(
  {
    id: 'ma-ch6',
    matiere: 'maths',
    ajout: true,
    zone: 'Nombres et calculs',
    numero: 'Chapitre 6',
    titre: "Proportionnalité et pourcentages",
    periode: "Proportionnalité, pourcentages, ratios, vitesse et échelles",
    theme: "Reconnaître et utiliser la proportionnalité ; appliquer et calculer des pourcentages ; ratios ; grandeurs quotients et conversions",

    essentiel: [
      "Deux grandeurs sont <b>proportionnelles</b> si l'on passe des valeurs de l'une aux valeurs de l'autre en multipliant toujours par le <b>même nombre</b> : le coefficient de proportionnalité. Leur représentation graphique est une <b>droite qui passe par l'origine</b>.",
      "<b>Quatrième proportionnelle</b> : si a correspond à b, alors c correspond à <b>b × c ÷ a</b> (produit en croix). Deux nombres sont dans le <b>ratio 2 : 3</b> s'ils représentent 2 parts et 3 parts de même valeur.",
      "Prendre <b>t %</b> d'un nombre, c'est le multiplier par t/100. <b>Augmenter</b> de t % : multiplier par <b>1 + t/100</b>. <b>Diminuer</b> de t % : multiplier par <b>1 − t/100</b>.",
      "<b>Pourcentage d'évolution</b> = (valeur finale − valeur initiale) ÷ valeur initiale × 100. On divise toujours par la valeur de <b>départ</b>.",
      "<b>d = v × t</b>, donc v = d ÷ t et t = d ÷ v, avec des unités cohérentes. Une <b>échelle</b> est un coefficient de proportionnalité : distance sur le plan ÷ distance réelle, dans la même unité."
    ],

    sections: [
      {
        titre: "Reconnaître une situation de proportionnalité",
        points: [
          "Deux grandeurs sont <b>proportionnelles</b> si l'on obtient les valeurs de la seconde en multipliant celles de la première par un même nombre non nul, appelé <b>coefficient de proportionnalité</b>.",
          "Dans un tableau, on calcule pour chaque colonne le quotient « ligne du bas ÷ ligne du haut ». Si tous les quotients sont <b>égaux</b>, c'est un tableau de proportionnalité.",
          "Exemple : 2 kg → 7 € ; 5 kg → 17,50 € ; 8 kg → 28 €. On a 7 ÷ 2 = 17,5 ÷ 5 = 28 ÷ 8 = 3,5 : le prix est proportionnel à la masse, de coefficient <b>3,5</b> (le prix au kilo, 3,50 €/kg).",
          "Contre-exemple : un forfait de 10 € plus 2 € par entrée n'est <b>pas</b> proportionnel. 1 entrée coûte 12 €, mais 2 entrées coûtent 14 € et non 24 €.",
          "Propriétés utiles : on peut <b>additionner</b> deux colonnes ou <b>multiplier</b> une colonne par un même nombre. Si 2 kg coûtent 7 € et 3 kg coûtent 10,50 €, alors 5 kg coûtent 7 + 10,50 = 17,50 €."
        ]
      },
      {
        titre: "Calculer une quatrième proportionnelle",
        points: [
          "Une voiture consomme 6 L d'essence pour 100 km. Combien consomme-t-elle pour 350 km ? La consommation est proportionnelle à la distance : on cherche une <b>quatrième proportionnelle</b>.",
          "<b>Avec le coefficient</b> : 6 ÷ 100 = 0,06 L par km, donc 350 × 0,06 = <b>21 L</b>.",
          "<b>Avec la linéarité</b> : 350 km = 3 × 100 km + 50 km, donc 3 × 6 L + 3 L = <b>21 L</b>.",
          "<b>Avec le produit en croix</b> : si a correspond à b et c correspond à x, alors a × x = b × c, donc <b>x = b × c ÷ a</b>. Ici x = 6 × 350 ÷ 100 = 21 L. Il vient de l'égalité des quotients 6/100 = x/350 (voir chapitre 1).",
          "Le produit en croix ne s'utilise que si la situation est <b>proportionnelle</b> : il faut d'abord le vérifier ou le justifier.",
          "Toujours contrôler la cohérence : plus de kilomètres, donc plus d'essence. Un résultat inférieur à 6 L serait forcément faux."
        ]
      },
      {
        titre: "La représentation graphique",
        points: [
          "Dans un repère, une situation de proportionnalité est représentée par des points <b>alignés sur une droite qui passe par l'origine</b> du repère.",
          "Réciproquement, si les points sont alignés sur une droite passant par l'origine, les deux grandeurs sont proportionnelles.",
          "Une droite qui ne passe pas par l'origine (un tarif avec forfait) ou une courbe ne représente <b>pas</b> une situation de proportionnalité.",
          "Une situation de proportionnalité de coefficient a se modélise par la <b>fonction linéaire</b> f(x) = ax. Avec un prix de 3,50 € le kilo, le prix de x kg est f(x) = 3,5x.",
          "Rédaction type : « La représentation graphique est une droite qui passe par l'origine du repère, donc le prix est proportionnel à la masse. »"
        ]
      },
      {
        titre: "Appliquer et calculer un pourcentage",
        points: [
          "t % signifie « t pour 100 » : t % = t/100. Exemples : 35 % = 0,35 ; 4 % = 0,04 ; 150 % = 1,5.",
          "<b>Appliquer un pourcentage</b> : prendre t % d'une quantité, c'est la multiplier par t/100. Exemple : 15 % de 60 € = 60 × 0,15 = <b>9 €</b>.",
          "<b>Calculer un pourcentage</b> (une proportion) : partie ÷ total × 100. Exemple : 27 élèves sur 30 ont la moyenne : 27 ÷ 30 = 0,9, soit <b>90 %</b>.",
          "<b>Retrouver le total</b> : 9 € représentent 12 % d'un budget. Un pourcentage est une situation de proportionnalité, donc budget = 9 × 100 ÷ 12 = <b>75 €</b>.",
          "Réflexes de calcul mental : 50 % = la moitié ; 25 % = le quart ; 75 % = les trois quarts ; 10 % = diviser par 10 ; 1 % = diviser par 100. Exemple : 15 % de 80 = 10 % + 5 % = 8 + 4 = 12."
        ]
      },
      {
        titre: "Évolutions : augmentation, réduction, taux d'évolution",
        points: [
          "<b>Augmenter</b> une quantité de t %, c'est la multiplier par <b>1 + t/100</b>. Exemple : un prix de 80 € augmente de 5 % : 80 × 1,05 = <b>84 €</b>.",
          "<b>Diminuer</b> une quantité de t %, c'est la multiplier par <b>1 − t/100</b>. Exemple : un article à 120 € est soldé à −30 % : 120 × 0,7 = <b>84 €</b>. En deux temps : la réduction vaut 120 × 0,3 = 36 €, puis 120 − 36 = 84 €.",
          "<b>Retrouver la valeur de départ</b> : on divise par le coefficient. Après une hausse de 20 %, un objet coûte 72 € : avant, il coûtait 72 ÷ 1,2 = <b>60 €</b>. Retirer 20 % de 72 € serait faux.",
          "Le <b>taux d'évolution</b> se calcule ainsi : (valeur finale − valeur initiale) ÷ valeur initiale, puis × 100 pour l'avoir en %. Un loyer passe de 500 € à 540 € : (540 − 500) ÷ 500 = 0,08, soit une <b>hausse de 8 %</b>.",
          "Avec le coefficient : valeur finale ÷ valeur initiale. Une population passe de 2 000 à 1 700 habitants : 1 700 ÷ 2 000 = 0,85 = 1 − 0,15, soit une <b>baisse de 15 %</b>. On divise toujours par la valeur de <b>départ</b>.",
          "Évolutions successives : les coefficients se <b>multiplient</b>, les pourcentages ne s'additionnent pas. +10 % puis −10 % : × 1,1 × 0,9 = × 0,99, soit une <b>baisse de 1 %</b>."
        ]
      },
      {
        titre: "Les ratios",
        points: [
          "Dire que deux nombres a et b sont dans le <b>ratio 2 : 3</b> signifie que a/2 = b/3 : a représente 2 parts et b représente 3 parts, toutes de même valeur.",
          "<b>Partager selon un ratio</b> : on compte le nombre total de parts, on calcule la valeur d'une part, puis on multiplie. Partager 60 € dans le ratio 2 : 3 : 2 + 3 = 5 parts ; une part vaut 60 ÷ 5 = 12 € ; on obtient <b>24 €</b> et <b>36 €</b>.",
          "Avec trois nombres : a, b et c sont dans le ratio 1 : 2 : 3 si a/1 = b/2 = c/3. 300 kg de ciment, sable et gravier dans le ratio 1 : 2 : 3 font 6 parts de 50 kg : 50 kg de ciment, 100 kg de sable et 150 kg de gravier.",
          "Lien avec les fractions : dans le ratio 2 : 3, la première quantité représente 2/5 du total et la seconde 3/5. Si le ratio filles : garçons d'une classe est 3 : 2, les filles représentent 3/5 de la classe, soit 60 %.",
          "Un ratio se simplifie comme une fraction : 12 : 18 = 2 : 3 (on divise les deux nombres par 6). L'ordre compte : le ratio 2 : 3 n'est pas le ratio 3 : 2."
        ]
      },
      {
        titre: "La vitesse moyenne",
        points: [
          "La <b>vitesse moyenne</b> est le quotient de la distance parcourue par la durée du parcours : <b>v = d ÷ t</b>. On en déduit <b>d = v × t</b> et <b>t = d ÷ v</b>.",
          "Elle s'exprime en km/h ou en m/s. Rouler à 90 km/h, c'est parcourir 90 km en 1 h : à vitesse constante, la distance est proportionnelle à la durée, et la vitesse est le coefficient de proportionnalité.",
          "Les unités doivent être cohérentes : des km avec des heures, des m avec des secondes. On écrit les durées en heures décimales : 15 min = 0,25 h ; 30 min = 0,5 h ; 45 min = 0,75 h ; 20 min = 1/3 h. Attention : 1 h 30 min = <b>1,5 h</b>, pas 1,30 h.",
          "Exemples : 180 km en 2 h 15 min → v = 180 ÷ 2,25 = <b>80 km/h</b>. À 60 km/h pendant 1 h 15 min → d = 60 × 1,25 = <b>75 km</b>.",
          "Pour une durée : 150 km à 100 km/h → t = 150 ÷ 100 = 1,5 h = <b>1 h 30 min</b>. Pour convertir la partie décimale en minutes, on la multiplie par 60 : 0,2 h = 0,2 × 60 = 12 min.",
          "Conversion : 36 km/h = 36 000 m en 3 600 s = <b>10 m/s</b>. Pour passer des km/h aux m/s, on divise par 3,6 ; dans l'autre sens, on multiplie par 3,6."
        ]
      },
      {
        titre: "Échelles et conversions d'unités",
        points: [
          "Sur un plan ou une carte, les distances sont proportionnelles aux distances réelles. L'<b>échelle</b> est le coefficient : échelle = distance sur le plan ÷ distance réelle, les deux dans la <b>même unité</b>.",
          "À l'échelle 1/50 000 (aussi notée 1 : 50 000), 1 cm sur la carte représente 50 000 cm = 500 m en réalité. 6 cm sur la carte représentent donc 6 × 500 m = <b>3 km</b>.",
          "Calculer une échelle : une rue de 400 m mesure 8 cm sur un plan. 400 m = 40 000 cm, et 8 ÷ 40 000 = 1/5 000 : l'échelle est <b>1/5 000</b>.",
          "Dans un agrandissement ou une réduction de rapport k, les longueurs sont multipliées par k, les aires par <b>k²</b> et les volumes par <b>k³</b>.",
          "Longueurs : × 10 d'une unité à la suivante (1 km = 1 000 m ; 1 m = 100 cm). Aires : × 100 (1 m² = 10 000 cm²). Volumes : × 1 000 (1 m³ = 1 000 dm³).",
          "Capacités et grandeurs composées : <b>1 L = 1 dm³ = 1 000 cm³</b> ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L. Un débit de 12 L/min correspond à 12 × 60 = 720 L/h."
        ]
      }
    ],

    mots: [
      ["Proportionnalité", "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre."],
      ["Coefficient de proportionnalité", "Le nombre par lequel on multiplie les valeurs d'une grandeur pour obtenir celles de l'autre."],
      ["Quatrième proportionnelle", "Valeur manquante dans un tableau de proportionnalité dont on connaît les trois autres valeurs."],
      ["Produit en croix", "Si a correspond à b et c correspond à x dans une situation de proportionnalité, alors x = b × c ÷ a."],
      ["Fonction linéaire", "Fonction de la forme f(x) = ax. Elle modélise une situation de proportionnalité de coefficient a."],
      ["Pourcentage", "Proportion exprimée sur 100 : t % = t/100."],
      ["Coefficient multiplicateur", "Nombre par lequel on multiplie pour appliquer une évolution : 1 + t/100 pour une hausse, 1 − t/100 pour une baisse."],
      ["Taux d'évolution", "(valeur finale − valeur initiale) ÷ valeur initiale, souvent exprimé en pourcentage."],
      ["Ratio", "a et b sont dans le ratio 2 : 3 si a/2 = b/3 : a vaut 2 parts quand b en vaut 3."],
      ["Vitesse moyenne", "Quotient de la distance parcourue par la durée : v = d ÷ t."],
      ["Grandeur quotient", "Grandeur obtenue en divisant deux grandeurs, comme une vitesse en km/h ou un prix en €/kg."],
      ["Échelle", "Coefficient de proportionnalité entre les distances sur un plan et les distances réelles, dans la même unité."],
      ["Heure décimale", "Durée écrite en heures avec une virgule : 1,5 h = 1 h 30 min, car 0,5 h = 30 min."]
    ],

    quiz: [
      { q: "4 kg de pommes coûtent 10 €. Quel est le coefficient de proportionnalité qui donne le prix à partir de la masse ?",
        choix: ["0,4 €/kg", "2,5 €/kg", "6 €/kg", "40 €/kg"],
        bonne: 1,
        why: "10 ÷ 4 = 2,5 : chaque kilo coûte 2,50 €. 0,4 est le coefficient inverse, qui donne la masse à partir du prix." },

      { q: "Laquelle de ces situations est une situation de proportionnalité ?",
        choix: ["La taille d'un enfant en fonction de son âge", "Un tarif de 10 € de forfait plus 2 € par entrée", "La température au cours d'une journée", "Le prix payé en fonction de la masse de pommes, au même prix au kilo"],
        bonne: 3,
        why: "Le prix s'obtient en multipliant la masse par le prix au kilo, toujours le même. Avec un forfait, ce n'est pas proportionnel." },

      { q: "Un graphique montre une droite qui ne passe pas par l'origine. Que peut-on conclure ?",
        choix: ["Ce n'est pas une situation de proportionnalité", "C'est une situation de proportionnalité", "Le coefficient de proportionnalité vaut 0", "Les deux grandeurs sont toujours égales"],
        bonne: 0,
        why: "La proportionnalité se traduit par une droite passant par l'origine. Une droite qui n'y passe pas ne la représente pas." },

      { q: "Une voiture consomme 6 L d'essence pour 100 km. Combien consomme-t-elle pour 250 km ?",
        choix: ["12 L", "25 L", "15 L", "16 L"],
        bonne: 2,
        why: "6 × 250 ÷ 100 = 15 L. On peut aussi dire : 2,5 fois plus de kilomètres, donc 2,5 fois plus d'essence." },

      { q: "Dans un tableau de proportionnalité, 3 correspond à 12 et 7 correspond à x. Combien vaut x ?",
        choix: ["16", "21", "28", "36"],
        bonne: 2,
        why: "Produit en croix : x = 12 × 7 ÷ 3 = 28. Le coefficient est 4, et 7 × 4 = 28." },

      { q: "Combien vaut 15 % de 40 ?",
        choix: ["6", "4", "15", "0,6"],
        bonne: 0,
        why: "40 × 0,15 = 6. Ou de tête : 10 % de 40 = 4 et 5 % = 2, donc 15 % = 6." },

      { q: "18 élèves sur 24 font du sport en club. Quel pourcentage cela représente-t-il ?",
        choix: ["18 %", "24 %", "66 %", "75 %"],
        bonne: 3,
        why: "18 ÷ 24 = 0,75, soit 75 %. On divise la partie par le total." },

      { q: "Augmenter une quantité de 8 %, c'est la multiplier par :",
        choix: ["0,08", "1,08", "1,8", "0,92"],
        bonne: 1,
        why: "1 + 8/100 = 1,08. Multiplier par 0,92 correspond à une baisse de 8 %." },

      { q: "Diminuer un prix de 40 %, c'est le multiplier par :",
        choix: ["0,4", "1,4", "0,96", "0,6"],
        bonne: 3,
        why: "1 − 40/100 = 0,6. Multiplier par 0,4 donne le montant de la réduction, pas le nouveau prix." },

      { q: "Un article à 120 € est soldé à −30 %. Quel est son nouveau prix ?",
        choix: ["90 €", "84 €", "36 €", "117 €"],
        bonne: 1,
        why: "120 × 0,7 = 84 €. 36 € est la réduction, qu'il faut retirer du prix de départ." },

      { q: "Après une hausse de 20 %, un objet coûte 72 €. Quel était son prix avant la hausse ?",
        choix: ["60 €", "57,60 €", "52 €", "86,40 €"],
        bonne: 0,
        why: "Prix de départ × 1,2 = 72, donc prix de départ = 72 ÷ 1,2 = 60 €. Retirer 20 % de 72 € ne donne pas le bon résultat." },

      { q: "Un loyer passe de 500 € à 540 €. Quel est le pourcentage d'évolution ?",
        choix: ["+40 %", "+7,4 %", "+8 %", "+4 %"],
        bonne: 2,
        why: "(540 − 500) ÷ 500 = 0,08, soit +8 %. On divise par la valeur de départ, pas par 540." },

      { q: "Un prix augmente de 10 %, puis baisse de 10 %. Au total, le prix :",
        choix: ["revient au prix de départ", "baisse de 1 %", "augmente de 1 %", "baisse de 20 %"],
        bonne: 1,
        why: "× 1,1 puis × 0,9 revient à multiplier par 0,99 : le prix baisse de 1 %. Les pourcentages successifs ne s'additionnent pas." },

      { q: "On partage 45 bonbons entre deux enfants dans le ratio 4 : 5. Combien chacun en reçoit-il ?",
        choix: ["4 et 5", "18 et 27", "22 et 23", "20 et 25"],
        bonne: 3,
        why: "4 + 5 = 9 parts ; une part vaut 45 ÷ 9 = 5 ; donc 4 × 5 = 20 et 5 × 5 = 25." },

      { q: "Une voiture parcourt 210 km en 2 h 30 min. Quelle est sa vitesse moyenne ?",
        choix: ["91,3 km/h", "105 km/h", "84 km/h", "70 km/h"],
        bonne: 2,
        why: "2 h 30 min = 2,5 h, et 210 ÷ 2,5 = 84 km/h. Diviser par 2,3 est une erreur : 30 min ne valent pas 0,3 h." },

      { q: "Comment écrit-on 1 h 15 min en heures décimales ?",
        choix: ["1,25 h", "1,15 h", "1,5 h", "1,75 h"],
        bonne: 0,
        why: "15 min = 15/60 h = 0,25 h, donc 1 h 15 min = 1,25 h." },

      { q: "Quelle distance parcourt-on en 45 min à la vitesse moyenne de 80 km/h ?",
        choix: ["36 km", "45 km", "106,7 km", "60 km"],
        bonne: 3,
        why: "45 min = 0,75 h, et d = v × t = 80 × 0,75 = 60 km." },

      { q: "Sur une carte à l'échelle 1/50 000, deux villages sont à 4 cm l'un de l'autre. Quelle est la distance réelle ?",
        choix: ["2 km", "200 m", "20 km", "4 km"],
        bonne: 0,
        why: "4 × 50 000 = 200 000 cm, soit 2 000 m ou 2 km." },

      { q: "Combien de cm³ y a-t-il dans 1 L ?",
        choix: ["10 cm³", "100 cm³", "1 000 cm³", "10 000 cm³"],
        bonne: 2,
        why: "1 L = 1 dm³ = 1 000 cm³. Et 1 mL = 1 cm³." },

      { q: "Combien vaut une vitesse de 36 km/h en m/s ?",
        choix: ["36 m/s", "10 m/s", "3,6 m/s", "129,6 m/s"],
        bonne: 1,
        why: "36 km/h = 36 000 m en 3 600 s, soit 10 m/s. On divise par 3,6." }
    ]
  },

  {
    id: 'ma-ch7',
    matiere: 'maths',
    ajout: true,
    zone: 'Algorithmique et programmation',
    numero: 'Chapitre 7',
    titre: "Scratch et algorithmique",
    periode: "Programmer avec Scratch : variables, boucles, conditions, tracés",
    theme: "Lire, écrire et modifier un programme Scratch ; boucles, conditions, variables ; tracés de figures et programmes de calcul",

    essentiel: [
      "Un script commence par un bloc d'<b>événement</b> (« quand le drapeau vert est cliqué »), puis ses blocs s'exécutent <b>de haut en bas</b>, l'un après l'autre.",
      "Une <b>variable</b> est une case mémoire qui porte un nom : « mettre … à » lui donne une valeur, « ajouter … à » la modifie. Pour lire un script, on suit la valeur de chaque variable bloc après bloc.",
      "<b>Boucles</b> : « répéter n fois » (nombre de tours connu), « répéter jusqu'à ce que » (arrêt dès que la condition est vraie), « répéter indéfiniment ». <b>Condition</b> : « si … alors … sinon ».",
      "<b>Polygone régulier à n côtés</b> : répéter n fois (avancer ; tourner de <b>360 ÷ n</b> degrés). Le lutin tourne de l'angle <b>extérieur</b> : 120° pour un triangle équilatéral, pas 60°.",
      "La scène est un repère : centre <b>(0 ; 0)</b>, x de −240 à 240, y de −180 à 180. « s'orienter à 90 » = vers la droite ; 0 = vers le haut ; −90 = vers la gauche ; 180 = vers le bas."
    ],

    sections: [
      {
        titre: "Lutin, scène, script et événements",
        points: [
          "Un <b>algorithme</b> est une suite finie d'instructions qui permet de résoudre un problème. Un <b>programme</b> est un algorithme écrit dans un langage que l'ordinateur comprend, comme Scratch.",
          "Le <b>lutin</b> est le personnage que l'on programme ; la <b>scène</b> est l'arrière-plan où il se déplace ; un <b>script</b> est une pile de blocs emboîtés.",
          "Les blocs sont rangés par catégories de couleur : Mouvement, Apparence, Son, Événements, Contrôle, Capteurs, Opérateurs, Variables, Mes blocs, et l'extension Stylo.",
          "Un script commence par un bloc d'<b>événement</b> : <b>« quand le drapeau vert est cliqué »</b>, « quand la touche espace est pressée », « quand ce lutin est cliqué ». Ensuite, les blocs s'exécutent <b>de haut en bas</b>, un par un : changer leur ordre peut changer le résultat.",
          "Les <b>messages</b> synchronisent les scripts : <b>« envoyer message1 à tous »</b> déclenche tous les scripts qui commencent par <b>« quand je reçois message1 »</b>, souvent ceux d'un autre lutin. « envoyer message1 à tous et attendre » attend qu'ils soient terminés avant de continuer."
        ]
      },
      {
        titre: "Variables et programmes de calcul",
        points: [
          "Une <b>variable</b> est une case mémoire qui porte un nom et contient une valeur (un nombre ou un texte). Cette valeur peut changer pendant le programme.",
          "<b>« mettre nombre à 5 »</b> remplace la valeur par 5 ; <b>« ajouter 3 à nombre »</b> ajoute 3 à la valeur actuelle. « ajouter −3 à nombre » revient à soustraire 3.",
          "Pour multiplier une variable, on écrit <b>« mettre nombre à nombre * 2 »</b>. En Scratch, la multiplication s'écrit <b>*</b> et la division <b>/</b>.",
          "<b>« demander … et attendre »</b> pose une question ; ce que l'on tape est rangé dans la variable <b>« réponse »</b>. <b>« dire … »</b> affiche un texte ou un résultat dans une bulle.",
          "Pour lire un programme de calcul, on fait un <b>tableau de suivi</b> : une ligne par bloc, avec la valeur des variables après ce bloc. Exemple : « mettre x à réponse », « mettre y à x + 2 », « mettre y à y * x », « dire y ». Pour 3 : x = 3, puis y = 5, puis y = 15. Le lutin dit <b>15</b>.",
          "Ce script calcule (x + 2) × x = x² + 2x. Au brevet, on demande souvent cette expression, puis le nombre de départ qui donne un résultat voulu : on résout alors une équation."
        ]
      },
      {
        titre: "Les boucles",
        points: [
          "<b>« répéter 10 fois »</b> : les blocs placés à l'intérieur sont exécutés 10 fois de suite. On l'utilise quand le nombre de répétitions est connu à l'avance.",
          "<b>« répéter jusqu'à ce que (condition) »</b> : la condition est testée avant chaque tour, et la boucle s'arrête dès qu'elle devient <b>vraie</b>. Si elle est vraie dès le départ, les blocs intérieurs ne sont jamais exécutés.",
          "Exemple : « mettre n à 1 », puis « répéter jusqu'à ce que n > 100 : mettre n à n * 2 ». n vaut successivement 2, 4, 8, 16, 32, 64 puis 128 : la boucle s'arrête avec <b>n = 128</b>, après 7 tours.",
          "<b>« répéter indéfiniment »</b> : la boucle ne s'arrête jamais, sauf avec le bloc « stop tout » ou le bouton rouge. On l'utilise dans les jeux, par exemple pour tester sans arrêt si le lutin touche un bord.",
          "Des boucles peuvent être <b>imbriquées</b> : dans « répéter 3 fois » contenant « répéter 4 fois », les blocs intérieurs sont exécutés 3 × 4 = <b>12 fois</b>."
        ]
      },
      {
        titre: "Les conditions",
        points: [
          "<b>« si (condition) alors »</b> : les blocs à l'intérieur ne sont exécutés que si la condition est vraie. Sinon, le programme passe directement à la suite.",
          "<b>« si (condition) alors … sinon … »</b> : un groupe de blocs si la condition est vraie, un autre si elle est fausse. Exactement <b>un seul</b> des deux groupes est exécuté.",
          "Une condition compare des valeurs avec les opérateurs « = », « > » et « < ». On peut combiner plusieurs conditions avec « et », « ou », « non ».",
          "« a modulo b » donne le <b>reste</b> de la division euclidienne de a par b. Exemple : « si réponse modulo 2 = 0 alors dire Pair sinon dire Impair » teste si un nombre est pair.",
          "« nombre aléatoire entre 1 et 6 » simule un dé. Avec « si dé = 6 alors dire Gagné ! », la probabilité que le lutin dise « Gagné ! » est 1/6."
        ]
      },
      {
        titre: "Se déplacer et tracer",
        points: [
          "La scène est un repère de 480 × 360 pas : le centre a pour coordonnées <b>(0 ; 0)</b>, l'abscisse x va de −240 à 240 et l'ordonnée y de −180 à 180.",
          "<b>« aller à x : 0 y : 0 »</b> place le lutin en un point précis. <b>« ajouter 20 à x »</b> le décale de 20 pas vers la droite ; « ajouter −20 à y » le décale de 20 pas vers le bas.",
          "Orientation : <b>« s'orienter à 90 »</b> = vers la droite ; 0 = vers le haut ; −90 = vers la gauche ; 180 = vers le bas. <b>« avancer de 50 pas »</b> déplace le lutin dans la direction où il regarde.",
          "<b>« tourner ↻ de 90 degrés »</b> fait tourner le lutin dans le sens des aiguilles d'une montre (vers sa droite) ; « tourner ↺ de 90 degrés » le fait tourner dans le sens inverse.",
          "<b>« stylo en position d'écriture »</b> : le lutin laisse une trace en se déplaçant. <b>« relever le stylo »</b> : il se déplace sans tracer. « effacer tout » efface les tracés ; on peut aussi régler la couleur et la taille du stylo.",
          "Un script de tracé commence souvent par « effacer tout », « aller à x : … y : … », « s'orienter à 90 », « stylo en position d'écriture ». Sans cette initialisation, le dessin dépend de l'endroit où le lutin s'est arrêté la fois précédente."
        ]
      },
      {
        titre: "Tracer un polygone régulier",
        points: [
          "Pour tracer un polygone régulier à n côtés de longueur L : <b>« répéter n fois : avancer de L pas ; tourner ↻ de 360 ÷ n degrés »</b>.",
          "En revenant à son point de départ, le lutin a fait un tour complet, soit 360°. À chaque sommet, il tourne donc de l'<b>angle extérieur</b> 360 ÷ n.",
          "Valeurs à connaître : triangle équilatéral <b>120°</b> ; carré <b>90°</b> ; pentagone <b>72°</b> ; hexagone <b>60°</b> ; octogone <b>45°</b>.",
          "Piège : pour un triangle équilatéral, le lutin tourne de 120° et non de 60°, car 60° est l'angle <b>intérieur</b> du triangle. Dans tout polygone régulier, angle intérieur = 180° − angle dont tourne le lutin.",
          "Étoile à 5 branches : « répéter 5 fois : avancer de 100 pas ; tourner ↻ de 144 degrés ». Le lutin fait alors deux tours complets : 5 × 144 = 720°."
        ]
      },
      {
        titre: "Les blocs personnalisés (sous-programmes)",
        points: [
          "Dans la catégorie « Mes blocs », <b>« Créer un bloc »</b> permet de donner un nom à une suite d'instructions : c'est un <b>sous-programme</b>.",
          "On écrit les instructions sous le bloc <b>« définir carré »</b>. Ensuite, il suffit de placer le bloc « carré » dans le script principal pour les exécuter.",
          "Un bloc peut avoir un <b>paramètre</b> : « définir carré (côté) : répéter 4 fois : avancer de côté pas ; tourner ↻ de 90 degrés ». Alors « carré (50) » trace un carré de côté 50 et « carré (100) » un carré de côté 100.",
          "Intérêt : le script est plus court et plus lisible, et une modification du bloc s'applique partout où il est utilisé.",
          "Au brevet, on trouve souvent un bloc « motif » défini à part, appelé plusieurs fois dans une boucle avec un déplacement entre deux appels (par exemple « ajouter 60 à x ») pour dessiner une frise."
        ]
      },
      {
        titre: "Les questions de Scratch au brevet",
        points: [
          "<b>« Quelle figure obtient-on ? »</b> : compter les répétitions et l'angle de rotation, puis faire un croquis à main levée en suivant le lutin.",
          "<b>« Que dit le lutin si on choisit 5 ? »</b> : faire le tableau de suivi des variables, bloc par bloc, sans sauter d'étape.",
          "<b>« Compléter la ligne … »</b> ou <b>« Quelle valeur faut-il écrire ? »</b> : il s'agit souvent du nombre de répétitions, de l'angle 360 ÷ n ou d'un déplacement en x ou en y.",
          "<b>« Où se trouve le lutin à la fin ? »</b> ou <b>« Quelle longueur a-t-il tracée ? »</b> : suivre ses coordonnées ou additionner les « avancer de … », en vérifiant si le stylo était baissé.",
          "<b>« Modifier le script pour… »</b> ou <b>« Quelle instruction ajouter, et où ? »</b> : dire précisément entre quels blocs elle se place, et si elle est <b>dans</b> ou <b>hors</b> de la boucle.",
          "Les réponses peuvent être courtes, mais on les justifie par un calcul : « 360 ÷ 6 = 60, donc le lutin tourne de 60° à chaque sommet. »"
        ]
      }
    ],

    mots: [
      ["Algorithme", "Suite finie d'instructions qui permet de résoudre un problème."],
      ["Programme", "Algorithme écrit dans un langage compréhensible par un ordinateur, comme Scratch."],
      ["Script", "Suite de blocs emboîtés qui s'exécutent de haut en bas."],
      ["Lutin", "Personnage ou objet que l'on programme dans Scratch."],
      ["Scène", "Zone où se déplacent les lutins : un repère de 480 × 360 pas centré en (0 ; 0)."],
      ["Événement", "Bloc qui déclenche un script, comme « quand le drapeau vert est cliqué »."],
      ["Variable", "Case mémoire qui porte un nom et contient une valeur qui peut changer."],
      ["Boucle", "Bloc qui répète des instructions : « répéter n fois », « répéter jusqu'à ce que », « répéter indéfiniment »."],
      ["Instruction conditionnelle", "Bloc « si … alors … sinon » qui exécute des instructions différentes selon qu'une condition est vraie ou fausse."],
      ["Bloc personnalisé", "Sous-programme créé avec « Créer un bloc », que l'on peut réutiliser plusieurs fois."],
      ["Paramètre", "Valeur transmise à un bloc personnalisé, comme la longueur du côté dans « carré (50) »."],
      ["Message", "Signal envoyé avec « envoyer … à tous », qui déclenche les scripts commençant par « quand je reçois … »."],
      ["Modulo", "Opérateur qui donne le reste de la division euclidienne : 17 modulo 5 = 2."],
      ["Angle extérieur", "Angle dont tourne le lutin à chaque sommet d'un polygone régulier à n côtés : 360 ÷ n."]
    ],

    quiz: [
      { q: "Quel bloc place-t-on le plus souvent en haut d'un script ?",
        choix: ["« quand le drapeau vert est cliqué »", "« répéter 10 fois »", "« stop tout »", "« avancer de 10 pas »"],
        bonne: 0,
        why: "Un script commence par un bloc d'événement, qui indique quand il doit démarrer." },

      { q: "Dans quel ordre les blocs d'un script sont-ils exécutés ?",
        choix: ["Dans un ordre au hasard", "De bas en haut", "De haut en bas, l'un après l'autre", "Tous en même temps"],
        bonne: 2,
        why: "Les blocs s'exécutent dans l'ordre où ils sont empilés : changer l'ordre peut changer le résultat." },

      { q: "La variable n vaut 4. On exécute « ajouter 3 à n » puis « mettre n à n * n ». Que vaut n ?",
        choix: ["19", "49", "14", "10"],
        bonne: 1,
        why: "n devient 4 + 3 = 7, puis 7 × 7 = 49." },

      { q: "En Scratch, quel symbole est utilisé pour la multiplication ?",
        choix: ["x", "/", "^", "*"],
        bonne: 3,
        why: "Scratch écrit la multiplication avec * et la division avec /." },

      { q: "Que contient la variable « réponse » ?",
        choix: ["Le résultat du dernier calcul", "Ce que l'utilisateur a tapé après « demander … et attendre »", "La position du lutin", "Le nombre de tours de boucle"],
        bonne: 1,
        why: "Le bloc « demander … et attendre » range ce que l'on tape dans la variable « réponse »." },

      { q: "Une boucle « répéter 3 fois » contient une boucle « répéter 4 fois : avancer de 10 pas ». Combien de fois le lutin avance-t-il ?",
        choix: ["4", "7", "34", "12"],
        bonne: 3,
        why: "La boucle intérieure (4 tours) est exécutée 3 fois : 3 × 4 = 12." },

      { q: "n vaut 1. On exécute « répéter jusqu'à ce que n > 20 : mettre n à n * 2 ». Que vaut n à la fin ?",
        choix: ["16", "20", "32", "64"],
        bonne: 2,
        why: "n prend les valeurs 2, 4, 8, 16 puis 32 : la condition n > 20 devient vraie et la boucle s'arrête." },

      { q: "Quand la boucle « répéter jusqu'à ce que » s'arrête-t-elle ?",
        choix: ["Dès que la condition est vraie", "Dès que la condition est fausse", "Toujours après 10 tours", "Jamais"],
        bonne: 0,
        why: "On répète tant que la condition est fausse ; elle est testée avant chaque tour." },

      { q: "Dans un bloc « si … alors … sinon », quelles instructions sont exécutées ?",
        choix: ["Les deux groupes, l'un après l'autre", "Aucune", "Un seul groupe : celui qui correspond à la condition", "Toujours celles du « sinon »"],
        bonne: 2,
        why: "Si la condition est vraie, on exécute la partie « alors » ; sinon, la partie « sinon ». Jamais les deux." },

      { q: "Que donne « 17 modulo 5 » ?",
        choix: ["3,4", "85", "3", "2"],
        bonne: 3,
        why: "17 = 5 × 3 + 2 : le reste de la division euclidienne de 17 par 5 est 2." },

      { q: "Le lutin est orienté à 90. Dans quelle direction regarde-t-il ?",
        choix: ["Vers le haut", "Vers la droite", "Vers la gauche", "Vers le bas"],
        bonne: 1,
        why: "90 = droite, 0 = haut, −90 = gauche, 180 = bas." },

      { q: "Quelles sont les coordonnées du centre de la scène ?",
        choix: ["(0 ; 0)", "(240 ; 180)", "(−240 ; −180)", "(480 ; 360)"],
        bonne: 0,
        why: "La scène est un repère centré : x va de −240 à 240 et y de −180 à 180." },

      { q: "Le lutin est au point (−100 ; 50). On exécute « ajouter 30 à x ». Où se trouve-t-il ?",
        choix: ["(−70 ; 50)", "(−130 ; 50)", "(−100 ; 80)", "(30 ; 50)"],
        bonne: 0,
        why: "−100 + 30 = −70 ; l'ordonnée y ne change pas." },

      { q: "À quoi sert le bloc « relever le stylo » ?",
        choix: ["À effacer tous les tracés", "À changer la couleur du trait", "À cacher le lutin", "À déplacer le lutin sans laisser de trace"],
        bonne: 3,
        why: "Stylo relevé, le lutin bouge sans tracer ; « stylo en position d'écriture » le fait tracer." },

      { q: "Pour tracer un triangle équilatéral, de combien de degrés le lutin doit-il tourner à chaque sommet ?",
        choix: ["60°", "90°", "120°", "180°"],
        bonne: 2,
        why: "360 ÷ 3 = 120. Le lutin tourne de l'angle extérieur ; 60° est l'angle intérieur." },

      { q: "« répéter 8 fois : avancer de 40 pas ; tourner ↻ de 45 degrés » trace :",
        choix: ["un hexagone régulier", "un octogone régulier", "un carré", "un pentagone régulier"],
        bonne: 1,
        why: "8 côtés et 360 ÷ 8 = 45 : c'est un octogone régulier." },

      { q: "Pour un pentagone régulier, quelle valeur faut-il écrire dans « tourner ↻ de … degrés » ?",
        choix: ["108", "60", "36", "72"],
        bonne: 3,
        why: "360 ÷ 5 = 72. 108° est l'angle intérieur du pentagone, pas l'angle dont tourne le lutin." },

      { q: "À quoi sert un bloc personnalisé, créé avec « Créer un bloc » ?",
        choix: ["À regrouper des instructions sous un nom pour les réutiliser", "À créer un nouveau lutin", "À effacer le script", "À arrêter le programme"],
        bonne: 0,
        why: "C'est un sous-programme : on le définit une fois, puis on l'utilise autant de fois que nécessaire." },

      { q: "Un lutin exécute « envoyer message1 à tous ». Que se passe-t-il ?",
        choix: ["Le lutin affiche « message1 » dans une bulle", "Les scripts qui commencent par « quand je reçois message1 » démarrent", "Le programme s'arrête", "Une variable message1 est créée"],
        bonne: 1,
        why: "Les messages servent à déclencher des scripts, souvent ceux d'un autre lutin." },

      { q: "Un script demande un nombre x, puis exécute « mettre y à x + 2 » et « mettre y à y * 3 ». Quelle expression calcule-t-il ?",
        choix: ["x + 6", "3x + 2", "3(x + 2)", "(x + 3) × 2"],
        bonne: 2,
        why: "On ajoute d'abord 2, puis on multiplie le tout par 3 : (x + 2) × 3 = 3x + 6." }
    ]
  },

  {
    id: 'ma-m2',
    matiere: 'maths',
    ajout: true,
    fiche: true,
    zone: 'Méthode',
    numero: 'Méthode',
    titre: "Résoudre un problème et réussir l'épreuve de maths",
    periode: "Lire, choisir l'outil, rédiger, vérifier, automatismes",
    theme: "Épreuve de mathématiques du brevet : automatismes, résolution de problèmes et tâche complexe",

    essentiel: [
      "Lire <b>tout le sujet</b> avant de commencer, puis traiter d'abord les exercices les plus sûrs : ils sont indépendants.",
      "Chaque réponse = <b>calcul posé + résultat + unité + phrase réponse</b>. On cite la propriété utilisée : « D'après le théorème de… ».",
      "Bloqué ? On écrit ce que l'on a cherché, on passe à la question suivante et on revient plus tard : <b>toute trace de recherche compte</b>.",
      "On vérifie la <b>vraisemblance</b> de chaque résultat : ordre de grandeur, unité, cohérence avec la question.",
      "Automatismes : connaître <b>par cœur</b> les équivalences fractions-décimaux-pourcentages, les carrés, les conversions et les formules, pour répondre vite sans calculatrice."
    ],

    sections: [
      {
        titre: "L'épreuve et la gestion du temps",
        points: [
          "L'épreuve de mathématiques du brevet dure <b>2 heures</b> et comprend deux parties (format en vigueur depuis la session 2026). Un brevet blanc peut avoir une durée ou un barème un peu différents : lire la première page du sujet.",
          "<b>Partie 1 — automatismes</b> : 20 minutes, <b>sans calculatrice</b>, des questions courtes (QCM, calculs directs, lectures de tableaux ou de graphiques), sans justification à rédiger. Elle compte pour 6 points sur 20.",
          "<b>Partie 2 — raisonnement et résolution de problèmes</b> : 1 h 40, <b>calculatrice autorisée</b>, plusieurs exercices indépendants. Elle compte pour 14 points sur 20.",
          "Dans la partie 2, lire tout le sujet, puis commencer par les exercices les plus sûrs. Bien indiquer sur la copie le numéro de chaque exercice et de chaque question.",
          "Bloqué sur une question ? Écrire ce que l'on a trouvé, passer à la suivante (souvent faisable seule) et revenir plus tard. Répartir son temps selon les points de chaque exercice.",
          "Garder environ <b>10 minutes</b> à la fin pour relire : questions oubliées, unités, phrases réponses."
        ]
      },
      {
        titre: "Lire l'énoncé et extraire les données",
        etapes: true,
        points: [
          "Lire l'exercice <b>en entier</b>, documents compris (schéma, tableau, graphique), avant de répondre à la première question.",
          "Souligner ce qui est demandé et le verbe de la consigne : <i>calculer</i>, <i>justifier</i>, <i>montrer que</i>, <i>déterminer</i>, <i>lire graphiquement</i>, <i>vérifier</i>.",
          "Relever les données utiles avec leurs <b>unités</b>, et repérer les informations portées par la figure : angle droit codé, points alignés, droites parallèles, longueurs égales.",
          "Faire un <b>schéma à main levée</b> et y reporter toutes les données. Certaines données peuvent être inutiles.",
          "Repérer les résultats donnés par l'énoncé (« Montrer que AB = 5 cm ») : on peut les réutiliser dans la suite, même sans avoir réussi à les démontrer."
        ]
      },
      {
        titre: "Choisir le bon outil",
        points: [
          "Triangle rectangle et longueur cherchée → <b>théorème de Pythagore</b>. Prouver qu'un triangle est rectangle (ou non) à partir de ses trois longueurs → <b>réciproque</b> (ou contraposée) du théorème de Pythagore.",
          "Points alignés et droites parallèles → <b>théorème de Thalès</b>. Prouver que deux droites sont parallèles → <b>réciproque du théorème de Thalès</b>.",
          "Triangle rectangle avec un angle connu ou cherché → <b>trigonométrie</b> : cosinus, sinus ou tangente, calculatrice réglée en degrés.",
          "« En fonction de x », deux tarifs à comparer, « pour quelle valeur… » → <b>expression littérale</b>, <b>fonction</b> ou <b>équation</b>.",
          "Prix au kilo, recette, vitesse, échelle, « % » → <b>proportionnalité</b> et <b>pourcentages</b>. Dé, urne, tirage au hasard → <b>probabilités</b>. Série de valeurs → <b>moyenne, médiane, étendue</b>."
        ]
      },
      {
        titre: "Rédiger et vérifier",
        points: [
          "Écrire le <b>calcul posé</b> avant le résultat : le correcteur note la démarche. Un résultat seul, sans calcul, rapporte très peu.",
          "<b>Citer la propriété</b> avec ses conditions : « Dans le triangle ABC rectangle en A, d'après le théorème de Pythagore… ».",
          "Mettre une <b>unité</b> à chaque résultat, et convertir avant de calculer pour que toutes les grandeurs soient dans la même unité.",
          "Garder les valeurs exactes et arrondir <b>seulement à la fin</b>, à la précision demandée ; écrire « ≈ » pour une valeur arrondie.",
          "Finir par une <b>phrase réponse</b> qui reprend les mots de la question.",
          "Vérifier la <b>vraisemblance</b> : une porte de 20 m, une probabilité de 1,2 ou un prix soldé plus cher qu'avant signalent une erreur. Quand c'est possible, contrôler : remplacer la solution dans l'équation, comparer au schéma, refaire le calcul autrement."
        ],
        exemple: "<b>Énoncé</b> : le triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm. Calculer BC.<br><b>Rédaction</b> : Dans le triangle ABC rectangle en A, d'après le théorème de Pythagore :<br>BC² = AB² + AC²<br>BC² = 6² + 8² = 36 + 64 = 100<br>BC = √100 = 10<br><b>La longueur BC mesure 10 cm.</b>"
      },
      {
        titre: "Tâche complexe et prise d'initiative",
        etapes: true,
        points: [
          "Repérer la question ouverte : « A-t-il assez de peinture ? », « Quelle offre est la plus avantageuse ? ». Les étapes ne sont pas données : il faut construire soi-même la démarche.",
          "Écrire ce que l'on cherche, puis se demander ce qu'il faut connaître pour y arriver : on remonte le raisonnement à partir de la question.",
          "Découper en petits calculs et <b>annoncer chacun par une phrase</b> : « Je calcule l'aire du mur. »",
          "Écrire toutes ses pistes, même incomplètes : <b>toute trace de recherche est valorisée</b>. Une question laissée blanche ne rapporte rien.",
          "Conclure en répondant à la question posée (oui ou non, quelle offre…), avec la justification chiffrée."
        ],
        exemple: "<b>Énoncé</b> : un pot de peinture couvre 12 m². Combien de pots faut-il acheter pour passer deux couches sur un mur de 4,5 m sur 2,4 m ?<br><b>Rédaction</b> : Je calcule l'aire du mur : 4,5 × 2,4 = 10,8 m².<br>Il faut deux couches : 10,8 × 2 = 21,6 m².<br>Nombre de pots nécessaires : 21,6 ÷ 12 = 1,8.<br>On ne peut pas acheter 1,8 pot, et un seul pot ne suffit pas.<br><b>Il faut acheter 2 pots de peinture.</b>"
      },
      {
        titre: "Les automatismes : questions flash",
        points: [
          "Les automatismes sont des réflexes : on répond en quelques secondes, de tête ou avec un calcul très court, sans calculatrice.",
          "Équivalences : 1/2 = 0,5 = 50 % ; 1/4 = 0,25 = 25 % ; 3/4 = 0,75 = 75 % ; 1/5 = 0,2 = 20 % ; 1/10 = 0,1 = 10 % ; 1/3 ≈ 0,33 ≈ 33 %.",
          "Calcul mental : multiplier par 0,5, c'est diviser par 2 ; par 0,25, diviser par 4 ; par 0,1, diviser par 10. Carrés : 11² = 121 ; 12² = 144 ; 13² = 169 ; 14² = 196 ; 15² = 225 ; donc √144 = 12.",
          "Conversions : 1 km = 1 000 m ; 1 m = 100 cm ; 1 m² = 10 000 cm² ; 1 L = 1 dm³ = 1 000 cm³ ; 1 h = 60 min = 3 600 s ; 0,25 h = 15 min ; 1,5 h = 1 h 30 min.",
          "Formules : aire du rectangle L × l ; du triangle b × h ÷ 2 ; du disque π × r² ; périmètre du cercle 2 × π × r ; volume du pavé L × l × h ; d = v × t. Règle des signes : (−) × (−) = (+) et (−) × (+) = (−).",
          "S'entraîner un peu chaque jour : une série de 10 questions flash chronométrées, sans calculatrice, puis corriger et refaire celles qui ont été ratées."
        ]
      }
    ],

    mots: [
      ["Calculer", "Donner un résultat en écrivant le calcul qui y mène."],
      ["Justifier", "Expliquer pourquoi, en citant une propriété, un théorème ou un calcul."],
      ["Montrer que", "Prouver un résultat donné par l'énoncé. Ce résultat peut être réutilisé ensuite, même sans l'avoir prouvé."],
      ["Déterminer", "Trouver une valeur par la méthode de son choix (calcul, lecture graphique, essais), en présentant la démarche."],
      ["Conjecturer", "Proposer un résultat probable à partir d'exemples ou d'une figure, sans le démontrer."],
      ["Lire graphiquement", "Trouver une valeur sur un graphique, en laissant visibles les traits de lecture en pointillés."],
      ["Tâche complexe", "Problème dont les étapes ne sont pas indiquées : il faut construire soi-même la démarche."],
      ["Vraisemblance", "Caractère d'un résultat qui a du sens dans la situation : ordre de grandeur, unité, signe."],
      ["Ordre de grandeur", "Valeur approchée simple qui permet de contrôler rapidement un résultat."],
      ["Valeur exacte", "Résultat écrit sans arrondi, comme √50 ou 1/3, par opposition à une valeur approchée comme 7,07."],
      ["Phrase réponse", "Phrase finale qui répond à la question avec ses mots, le résultat et son unité."]
    ],

    quiz: [
      { q: "Un élève écrit seulement « 10 cm » en réponse à « Calculer BC ». Que lui manque-t-il ?",
        choix: ["Rien : seul le résultat compte", "Le calcul, la propriété utilisée et une phrase réponse", "Un dessin en couleur", "La recopie de l'énoncé"],
        bonne: 1,
        why: "Le correcteur note la démarche : un résultat seul, sans calcul, rapporte très peu de points." },

      { q: "Pour prouver qu'un triangle est rectangle quand on connaît ses trois longueurs, quel outil choisir ?",
        choix: ["Le théorème de Thalès", "Le théorème de Pythagore", "Le cosinus", "La réciproque du théorème de Pythagore"],
        bonne: 3,
        why: "On compare le carré du plus grand côté à la somme des carrés des deux autres : c'est la réciproque." },

      { q: "Un calcul donne qu'un élève de 3e mesure 16,5 m. Que faut-il faire ?",
        choix: ["Chercher l'erreur : le résultat n'est pas vraisemblable", "Recopier le résultat, puisqu'il est calculé", "Arrondir à 17 m", "Écrire le résultat sans unité"],
        bonne: 0,
        why: "Un collégien mesure environ 1,60 m : un ordre de grandeur aberrant signale une erreur, souvent de conversion ou de virgule." },

      { q: "Il faut couvrir 21,6 m² et un pot de peinture couvre 12 m². Combien de pots faut-il acheter ?",
        choix: ["1 pot", "1,8 pot", "2 pots", "3 pots"],
        bonne: 2,
        why: "21,6 ÷ 12 = 1,8 ; on achète un nombre entier de pots, et un seul ne suffit pas : il en faut 2." },

      { q: "La question 1 demande de « montrer que AB = 5 cm » et on n'y arrive pas. Peut-on utiliser AB = 5 cm à la question 2 ?",
        choix: ["Non, il faut d'abord le démontrer", "Oui, car ce résultat est donné par l'énoncé", "Seulement si on l'arrondit", "Seulement avec la calculatrice"],
        bonne: 1,
        why: "Un résultat donné par l'énoncé peut toujours être réutilisé, même si on n'a pas su le démontrer." },

      { q: "Quand faut-il arrondir un résultat ?",
        choix: ["Seulement à la fin, à la précision demandée", "À chaque étape du calcul", "Jamais", "Avant de commencer le calcul"],
        bonne: 0,
        why: "Arrondir en cours de calcul accumule les erreurs : on garde les valeurs exactes jusqu'au bout." },

      { q: "Laquelle de ces écritures est égale à 3/4 ?",
        choix: ["0,34", "34 %", "0,43", "75 %"],
        bonne: 3,
        why: "3/4 = 3 ÷ 4 = 0,75 = 75 %." },

      { q: "Dans une tâche complexe, qu'est-ce qui est valorisé ?",
        choix: ["Seulement la bonne réponse finale", "La longueur de la copie", "Toute trace de recherche, même incomplète, et une démarche claire", "La recopie de l'énoncé"],
        bonne: 2,
        why: "Les essais et la démarche rapportent des points même si le résultat final est faux ou absent." },

      { q: "Combien de cm² y a-t-il dans 1 m² ?",
        choix: ["10 000 cm²", "100 cm²", "1 000 cm²", "1 000 000 cm²"],
        bonne: 0,
        why: "1 m = 100 cm, donc 1 m² = 100 × 100 = 10 000 cm²." },

      { q: "Que vaut 0,25 h ?",
        choix: ["25 min", "15 min", "2 min 30 s", "40 min"],
        bonne: 1,
        why: "0,25 h est un quart d'heure : 60 ÷ 4 = 15 min." }
    ]
  }
);
