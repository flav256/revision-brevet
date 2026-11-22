/* =========================================================
   Proportionnalité : trois sessions d'entraînement de plus,
   rangées juste après « Proportionnalité et pourcentages »
   (sam-maths-prop) dans la zone Révision.
   - automatismes : questions flash, comme la partie 1 du brevet ;
   - problèmes (1) : pourcentages, tableaux et graphiques ;
   - problèmes (2) : vitesses, échelles, agrandissements, ratios.
   ========================================================= */
(() => {
  /* graphique de l'exercice « Deux formules de location » :
     (d1) = formule B : 8 + x ; (d2) = formule A : 2x. 25 px par film, 7,5 px par euro. */
  const X = f => 40 + 25 * f, Y = e => 230 - 7.5 * e;
  let grille = '', graduations = '';
  for (let k = 0; k <= 12; k++) grille += `<line x1="${X(k)}" y1="${Y(28)}" x2="${X(k)}" y2="${Y(0)}"/>`;
  for (let e = 0; e <= 28; e += 2) grille += `<line x1="${X(0)}" y1="${Y(e)}" x2="${X(12)}" y2="${Y(e)}"/>`;
  for (let k = 0; k <= 12; k += 2) graduations += `<text x="${X(k)}" y="246" text-anchor="middle">${k}</text>`;
  for (let e = 0; e <= 28; e += 4) graduations += `<text x="33" y="${Y(e) + 4}" text-anchor="end">${e}</text>`;
  const GRAPHIQUE = `<svg class="fig-ex" viewBox="0 0 360 270" role="img" aria-label="Deux droites : (d1) part de 8 euros pour 0 film et monte de 1 euro par film ; (d2) part de l'origine et monte de 2 euros par film ; elles se coupent au point 8 films, 16 euros.">
    <g stroke="#AEB8C7" stroke-width=".9">${grille}</g>
    <g stroke="currentColor" stroke-width="1.4"><line x1="${X(0)}" y1="${Y(0)}" x2="${X(12.4)}" y2="${Y(0)}"/><line x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(29)}"/></g>
    <g font-size="11.5">${graduations}<text x="${X(12.4)}" y="262" text-anchor="end">Nombre de films</text><text x="${X(0)}" y="12" text-anchor="start">Prix (en €)</text></g>
    <g stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="${X(0)}" y1="${Y(8)}" x2="${X(12)}" y2="${Y(20)}"/><line x1="${X(0)}" y1="${Y(0)}" x2="${X(12)}" y2="${Y(24)}"/></g>
    <g font-size="13" font-weight="700"><text x="300" y="114">(d1)</text><text x="262" y="70">(d2)</text></g>
  </svg>`;

  const sessions = [
    {
      id: 'maths-prop-auto',
      matiere: 'maths',
      titre: 'Proportionnalité : automatismes',
      cours: ['ma-ch6'],
      methodes: ['ma-m2'],
      blocs: [
        { type: 'html', titre: "L'essentiel", sous: 'six réflexes de calcul mental',
          html: `<ul>
<li><b>Passer par l'unité</b> : 6 croissants coûtent 4,80 €, donc 1 croissant coûte 0,80 € et 9 croissants coûtent 7,20 €.</li>
<li><b>Linéarité</b> : si 3 objets coûtent 7,50 € et 5 objets 12,50 €, alors 8 objets coûtent 7,50 + 12,50 = 20 €, et 6 objets 2 × 7,50 = 15 €.</li>
<li><b>Pourcentages de tête</b> : 10 % → diviser par 10 ; 5 % → la moitié de 10 % ; 50 % → diviser par 2 ; 25 % → par 4 ; 20 % → par 5 ; 1 % → par 100.</li>
<li><b>Coefficient multiplicateur</b> : +t % → × (1 + t/100) ; −t % → × (1 − t/100). Deux évolutions de suite : on <b>multiplie</b> les coefficients.</li>
<li><b>Durées</b> : 15 min = 0,25 h ; 20 min = 1/3 h ; 30 min = 0,5 h ; 45 min = 0,75 h ; 6 min = 0,1 h. Et <b>1 m/s = 3,6 km/h</b>.</li>
<li><b>Échelle 1/n</b> : longueur réelle = longueur sur le plan × n, dans la même unité. Agrandissement de rapport k : aires × k², volumes × k³.</li>
</ul>` },
        { type: 'qcm', titre: 'QCM', sous: 'sans le cours, une seule bonne réponse',
          questions: [
            { q: '8 % de 50 =', choix: ['0,4', '4', '40', '8'], bonne: 1 },
            { q: '3 kg de tomates coûtent 6,60 €. 5 kg coûtent :', choix: ['11 €', '10 €', '12 €', '33 €'], bonne: 0 },
            { q: 'Diminuer de 5 %, c\'est multiplier par :', choix: ['0,5', '1,05', '0,95', '0,05'], bonne: 2 },
            { q: '35 min, en heures, c\'est :', choix: ['0,35 h', '0,6 h', '0,7 h', '7/12 h'], bonne: 3 },
            { q: 'Un TGV roule à 240 km/h. En 15 min, il parcourt :', choix: ['16 km', '60 km', '36 km', '24 km'], bonne: 1 },
            { q: 'Une hausse de 50 % suivie d\'une baisse de 50 % donne :', choix: ['le prix de départ', 'une baisse de 25 %', 'une hausse de 25 %', 'une baisse de 50 %'], bonne: 1 },
            { q: 'Le ratio 12 : 18 est égal à :', choix: ['3 : 4', '3 : 2', '2 : 3', '1 : 6'], bonne: 2 },
            { q: 'Sur une carte au 1/100 000, 1 cm représente :', choix: ['100 m', '10 km', '100 km', '1 km'], bonne: 3 },
            { q: '5 m/s, c\'est :', choix: ['18 km/h', '5 km/h', '50 km/h', '1,39 km/h'], bonne: 0 },
            { q: 'Après une baisse de 20 %, un article coûte 64 €. Avant, il coûtait :', choix: ['76,80 €', '80 €', '84 €', '51,20 €'], bonne: 1 }
          ] },
        { type: 'html', titre: 'Exercices', sous: '20 minutes, sans calculatrice',
          html: `<div class="ex"><h4>Questions flash — comme la partie 1 du brevet</h4>
<p>Pour chaque question, écrire seulement le résultat (aucune justification n'est demandée).</p>
<ol>
<li>Compléter ce tableau de proportionnalité :
  <table class="tab"><tr><td>4</td><td>6</td><td>…</td></tr><tr><td>14</td><td>…</td><td>3,5</td></tr></table></li>
<li>Calculer 30 % de 70.</li>
<li>Un pull à 45 € augmente de 20 %. Quel est son nouveau prix ?</li>
<li>24 élèves sur 32 ont un téléphone. Quel pourcentage cela représente-t-il ?</li>
<li>Quel coefficient multiplicateur correspond à une baisse de 12 % ?</li>
<li>Un prix est multiplié par 1,07. De quel pourcentage a-t-il évolué ?</li>
<li>Écrire 2 h 18 min en heures décimales.</li>
<li>Une voiture roule à 72 km/h. Quelle distance parcourt-elle en 2 h 15 min ?</li>
<li>Convertir 72 km/h en m/s.</li>
<li>Partager 60 € entre trois personnes dans le ratio 1 : 2 : 3.</li>
<li>Sur un plan au 1/50, un meuble mesure 3,2 cm. Quelle est sa longueur réelle ?</li>
<li>On réduit une figure : ses longueurs sont multipliées par 0,5. Par combien son aire est-elle multipliée ?</li>
</ol></div>` }
      ],
      corrige: `<p><b>1.</b> Coefficient 14 ÷ 4 = 3,5 : 6 → <b>21</b> ; et 3,5 ÷ 3,5 = <b>1</b>.</p>
<p><b>2.</b> 0,3 × 70 = <b>21</b> (10 % de 70 = 7, donc 30 % = 21).</p>
<p><b>3.</b> 45 × 1,2 = <b>54 €</b> (20 % de 45 = 9 ; 45 + 9 = 54).</p>
<p><b>4.</b> 24 ÷ 32 = 0,75, soit <b>75 %</b> (trois quarts).</p>
<p><b>5.</b> 1 − 0,12 = <b>0,88</b>.</p>
<p><b>6.</b> 1,07 = 1 + 0,07 : une hausse de <b>7 %</b>.</p>
<p><b>7.</b> 18 min = 18/60 h = 0,3 h, donc <b>2,3 h</b>.</p>
<p><b>8.</b> 2 h 15 min = 2,25 h ; 72 × 2,25 = <b>162 km</b> (72 × 2 = 144 et 72 × 0,25 = 18).</p>
<p><b>9.</b> 72 ÷ 3,6 = <b>20 m/s</b>.</p>
<p><b>10.</b> 1 + 2 + 3 = 6 parts de 60 ÷ 6 = 10 € : <b>10 €, 20 € et 30 €</b>.</p>
<p><b>11.</b> 3,2 × 50 = 160 cm, soit <b>1,6 m</b>.</p>
<p><b>12.</b> 0,5² = <b>0,25</b> : l'aire est divisée par 4.</p>`
    },

    {
      id: 'maths-prop-pb1',
      matiere: 'maths',
      titre: 'Proportionnalité : problèmes type brevet (1)',
      cours: ['ma-ch6', 'ma-ch3'],
      methodes: ['ma-m2'],
      blocs: [
        { type: 'html', titre: "L'essentiel", sous: 'rédiger comme au brevet',
          html: `<ul>
<li><b>Prouver qu'il y a proportionnalité</b> : calculer les quotients y ÷ x d'un tableau et constater qu'ils sont tous égaux ; ou : le graphique est une droite qui passe par l'origine ; ou : la formule est de la forme y = a × x.</li>
<li><b>Prouver qu'il n'y en a pas</b> : un seul contre-exemple suffit (deux quotients différents). Ou bien : « pour 0 film, on paie déjà 8 € ».</li>
<li><b>Lecture graphique</b> : tracer les pointillés, lire la valeur, conclure par une phrase avec l'unité.</li>
<li><b>Pourcentages</b> : on multiplie par le coefficient (−30 % → × 0,7). Évolutions de suite : on multiplie les coefficients. Valeur de départ = valeur finale ÷ coefficient.</li>
<li><b>Taux d'évolution</b> = (valeur d'arrivée − valeur de départ) ÷ valeur de départ, puis × 100.</li>
</ul>` },
        { type: 'qcm', titre: 'QCM', sous: 'sans le cours, une seule bonne réponse',
          questions: [
            { q: 'Un pantalon est soldé à −30 %, puis on retire encore 20 % du prix soldé. La réduction totale est de :', choix: ['50 %', '56 %', '44 %', '60 %'], bonne: 2 },
            { q: 'Pour prouver qu\'un tableau est un tableau de proportionnalité, on peut :', choix: ['vérifier que les nombres augmentent ensemble', 'calculer les quotients et vérifier qu\'ils sont égaux', 'calculer les différences et vérifier qu\'elles sont égales', 'vérifier que la première valeur est 0'], bonne: 1 },
            { q: 'Un forfait coûte 10 € par mois plus 2 € par heure. Pour 5 h, on paie :', choix: ['20 €', '12 €', '50 €', '60 €'], bonne: 0 },
            { q: 'Ce forfait (10 € plus 2 € par heure) est représenté par :', choix: ['une droite qui passe par l\'origine', 'une courbe', 'un seul point', 'une droite qui ne passe pas par l\'origine'], bonne: 3 },
            { q: 'Un prix augmente de 20 %, puis encore de 20 %. Au total, il a augmenté de :', choix: ['40 %', '44 %', '24 %', '4 %'], bonne: 1 }
          ] },
        { type: 'html', titre: 'Exercices', sous: 'avec la calculatrice, en rédigeant',
          html: `<div class="ex"><h4>Exercice 1 — Deux formules de location</h4>
<p>Une plateforme propose deux formules pour louer des films :</p>
<ul><li><b>Formule A</b> : 2 € par film ;</li><li><b>Formule B</b> : un abonnement de 8 € par mois, plus 1 € par film.</li></ul>
<ol>
<li>Recopier et compléter le tableau :
  <table class="tab"><tr><th>Nombre de films</th><td>2</td><td>5</td><td>10</td></tr><tr><th>Prix avec A (€)</th><td></td><td></td><td></td></tr><tr><th>Prix avec B (€)</th><td></td><td></td><td></td></tr></table></li>
<li>Le prix payé avec la formule A est-il proportionnel au nombre de films ? Et avec la formule B ? Justifier.</li>
<li>Les deux formules sont représentées ci-dessous. Associer chaque droite à sa formule, en justifiant.</li>
<li>Par lecture graphique, à partir de combien de films la formule B est-elle la plus avantageuse ?</li>
<li>Léo loue 12 films par mois. Quelle formule doit-il choisir ? Combien économise-t-il ?</li>
</ol>
${GRAPHIQUE}</div>
<div class="ex"><h4>Exercice 2 — Les soldes</h4>
<p>Un magasin affiche : « −30 % sur tout le magasin, puis −10 % de plus en caisse sur le prix soldé ».</p>
<ol>
<li>Une veste coûte 90 € avant les soldes. Combien la paie-t-on en caisse ?</li>
<li>Tom affirme : « Au total, c'est une réduction de 40 %. » A-t-il raison ? Justifier.</li>
<li>Une paire de baskets est payée 50,40 € en caisse. Quel était son prix avant les soldes ?</li>
<li>L'an dernier, la veste coûtait 84 € avant les soldes. De quel pourcentage son prix a-t-il augmenté ? Arrondir au dixième.</li>
</ol></div>` }
      ],
      corrige: `<p><b>Ex. 1</b></p>
<p>1) Formule A : <b>4 €, 10 €, 20 €</b>. Formule B : 8 + 2 = <b>10 €</b>, 8 + 5 = <b>13 €</b>, 8 + 10 = <b>18 €</b>.</p>
<p>2) A : 4 ÷ 2 = 10 ÷ 5 = 20 ÷ 10 = 2. Les quotients sont égaux : le prix est <b>proportionnel</b> au nombre de films (coefficient 2). B : 10 ÷ 2 = 5 mais 13 ÷ 5 = 2,6. Les quotients sont différents : <b>pas de proportionnalité</b> (d'ailleurs, pour 0 film, on paie déjà 8 €).</p>
<p>3) La formule A est proportionnelle : sa droite passe par l'origine, c'est <b>(d2)</b>. La formule B coûte 8 € pour 0 film : sa droite coupe l'axe des prix en 8, c'est <b>(d1)</b>.</p>
<p>4) Les droites se coupent au point (8 ; 16) : pour 8 films, les deux formules coûtent 16 €. Ensuite, (d1) est en dessous de (d2) : la formule B est la plus avantageuse <b>à partir de 9 films</b>.</p>
<p>5) A : 12 × 2 = 24 € ; B : 8 + 12 = 20 €. Léo choisit la <b>formule B</b> et économise <b>4 €</b> par mois.</p>
<div class="exemple-redige">Rédaction attendue pour la question 2 : « 10 ÷ 2 = 5 et 13 ÷ 5 = 2,6. Ces quotients ne sont pas égaux, donc le prix de la formule B n'est pas proportionnel au nombre de films. »</div>
<p><b>Ex. 2</b></p>
<p>1) −30 % : 90 × 0,7 = 63 € ; −10 % : 63 × 0,9 = <b>56,70 €</b>.</p>
<p>2) 0,7 × 0,9 = 0,63 = 1 − 0,37 : la réduction totale est de <b>37 %</b>, pas 40 %. <b>Tom a tort</b> (avec 40 %, la veste coûterait 90 × 0,6 = 54 €, pas 56,70 €).</p>
<p>3) Prix de départ × 0,63 = 50,40, donc prix de départ = 50,40 ÷ 0,63 = <b>80 €</b>. Vérification : 80 × 0,7 = 56 et 56 × 0,9 = 50,40.</p>
<p>4) (90 − 84) ÷ 84 ≈ 0,0714 : une hausse d'environ <b>7,1 %</b>. On divise par 84, le prix de <b>départ</b>.</p>`
    },

    {
      id: 'maths-prop-pb2',
      matiere: 'maths',
      titre: 'Proportionnalité : problèmes type brevet (2)',
      cours: ['ma-ch6'],
      methodes: ['ma-m2'],
      blocs: [
        { type: 'html', titre: "L'essentiel", sous: 'vitesses, échelles, agrandissements, ratios',
          html: `<ul>
<li><b>d = v × t</b>, donc v = d ÷ t et t = d ÷ v. La durée en heures décimales : 1 h 40 min = 1 + 40/60 = 5/3 h (et non 1,4 h !).</li>
<li><b>Heure d'arrivée</b> = heure de départ + durée du trajet (+ les pauses). <b>1 m/s = 3,6 km/h</b>.</li>
<li><b>Échelle 1/n</b> : réel = plan × n ; plan = réel ÷ n, dans la même unité.</li>
<li><b>Agrandissement ou réduction de rapport k</b> : longueurs × k, aires × k², volumes × k³. Une maquette au 1/50 : k = 1/50.</li>
<li><b>Ratio a : b</b> : on partage en a + b parts égales. <b>Conversions</b> : 1 m² = 10 000 cm² ; 1 m³ = 1 000 000 cm³ = 1 000 L.</li>
</ul>` },
        { type: 'qcm', titre: 'QCM', sous: 'sans le cours, une seule bonne réponse',
          questions: [
            { q: 'Un trajet de 150 km dure 1 h 40 min. La vitesse moyenne est :', choix: ['107 km/h', '90 km/h', '88,2 km/h', '150 km/h'], bonne: 1 },
            { q: 'Un rectangle de 3 cm sur 5 cm est agrandi à l\'échelle 2. Son aire devient :', choix: ['30 cm²', '45 cm²', '60 cm²', '225 cm²'], bonne: 2 },
            { q: 'Sur un plan au 1/250, un mur de 10 m mesure :', choix: ['4 cm', '25 cm', '2,5 cm', '40 cm'], bonne: 0 },
            { q: 'Une recette pour 6 personnes demande 450 g de farine. Pour 4 personnes, il faut :', choix: ['675 g', '400 g', '350 g', '300 g'], bonne: 3 },
            { q: 'Un escargot avance à 3 mm/s. En 1 h, il parcourt :', choix: ['10,8 m', '180 mm', '1,8 m', '108 m'], bonne: 0 }
          ] },
        { type: 'html', titre: 'Exercices', sous: 'avec la calculatrice, en rédigeant',
          html: `<div class="ex"><h4>Exercice 1 — En route pour Marseille</h4>
<p>La famille de Lina part de Lyon à 7 h 50 pour rejoindre Marseille en voiture : 315 km.</p>
<ol>
<li>Ils roulent à la vitesse moyenne de 105 km/h, sans s'arrêter. À quelle heure arrivent-ils ?</li>
<li>En fait, ils font une pause de 20 min et arrivent à 11 h 40. Quelle a été leur vitesse moyenne quand ils roulaient ?</li>
<li>Le TGV fait le trajet (280 km par la voie ferrée) en 1 h 40 min. Calculer sa vitesse moyenne en km/h, puis en m/s arrondie à l'unité.</li>
</ol></div>
<div class="ex"><h4>Exercice 2 — La maquette</h4>
<p>Un architecte construit une maquette au 1/50 d'une maison.</p>
<ol>
<li>Sur la maquette, la façade mesure 24 cm de long. Quelle est sa longueur réelle, en mètres ?</li>
<li>La maison réelle mesure 7,5 m de haut. Quelle est la hauteur de la maquette ?</li>
<li>Sur la maquette, la surface au sol est de 400 cm². Quelle est la surface au sol réelle, en m² ?</li>
<li>Le garage réel a un volume de 62,5 m³. Quel est le volume du garage de la maquette, en cm³ ?</li>
</ol></div>
<div class="ex"><h4>Exercice 3 — Le sirop</h4>
<p>Sur la bouteille : « diluer 1 volume de sirop pour 7 volumes d'eau » (ratio sirop : eau = 1 : 7).</p>
<ol>
<li>Quel volume de sirop faut-il pour préparer une carafe de 1,2 L de boisson ? Donner la réponse en cL.</li>
<li>Il reste 25 cL de sirop. Combien de litres de boisson peut-on encore préparer ?</li>
</ol></div>` }
      ],
      corrige: `<p><b>Ex. 1</b></p>
<p>1) t = d ÷ v = 315 ÷ 105 = 3 h. Ils arrivent à 7 h 50 + 3 h = <b>10 h 50</b>.</p>
<p>2) De 7 h 50 à 11 h 40, il s'écoule 3 h 50 min. Sans la pause : 3 h 30 min = 3,5 h. v = 315 ÷ 3,5 = <b>90 km/h</b>.</p>
<p>3) 1 h 40 min = 1 + 40/60 = 5/3 h. v = 280 ÷ 5/3 = 280 × 3 ÷ 5 = <b>168 km/h</b>. En m/s : 168 ÷ 3,6 ≈ 46,7, soit environ <b>47 m/s</b>.</p>
<div class="exemple-redige">Le piège : 1 h 40 min n'est pas 1,4 h. 280 ÷ 1,4 = 200 km/h est faux.</div>
<p><b>Ex. 2</b></p>
<p>1) 24 × 50 = 1 200 cm, soit <b>12 m</b>.</p>
<p>2) 7,5 m = 750 cm ; 750 ÷ 50 = <b>15 cm</b>.</p>
<p>3) Les aires sont multipliées par 50² = 2 500 : 400 × 2 500 = 1 000 000 cm², soit <b>100 m²</b>.</p>
<p>4) Les volumes sont divisés par 50³ = 125 000. 62,5 m³ = 62 500 000 cm³ ; 62 500 000 ÷ 125 000 = <b>500 cm³</b> (un demi-litre).</p>
<p><b>Ex. 3</b></p>
<p>1) 1 + 7 = 8 parts. 1,2 L = 120 cL ; 120 ÷ 8 = <b>15 cL</b> de sirop (et 105 cL d'eau).</p>
<p>2) 25 cL de sirop font 1 part sur 8 : 25 × 8 = 200 cL, soit <b>2 L</b> de boisson.</p>`
    }
  ];

  const S = DATA.brevet.sessions;
  const i = S.findIndex(s => s.id === 'sam-maths-prop');
  S.splice(i < 0 ? S.length : i + 1, 0, ...sessions);
})();
