/* =========================================================
   Fiches « À relire » : des exemples corrigés, courts, avec un
   petit schéma chacun. À relire juste avant un contrôle.
   Chaque fiche s'imprime sur UNE page A4 (#/imprimer/relire/id) ;
   à l'écran : #/relire/id.
   Un exemple = { titre, enonce, fig (SVG), sol (lignes HTML), piege }.
   ========================================================= */
(() => {
  DATA.relire = DATA.relire || [];

  /* ---------- petits outils de dessin (viewBox de 120 de large) ---------- */
  const r1 = n => Math.round(n * 10) / 10;
  /* pointe de flèche ouverte en (x, y), dans la direction a (radians) */
  const tete = (x, y, a, k = 4.4) => {
    const p = t => `${r1(x - k * Math.cos(a + t))} ${r1(y - k * Math.sin(a + t))}`;
    return `<path d="M${p(0.5)} L${x} ${y} L${p(-0.5)}" fill="none"/>`;
  };
  const fleche = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>` + tete(x2, y2, Math.atan2(y2 - y1, x2 - x1));
  /* courbe de Bézier (x1,y1) → (x2,y2), pointe à l'arrivée */
  const courbe = (x1, y1, c1x, c1y, c2x, c2y, x2, y2, tirets) =>
    `<path d="M${x1} ${y1} C${c1x} ${c1y} ${c2x} ${c2y} ${x2} ${y2}" fill="none"${tirets ? ' stroke-dasharray="3 2.4"' : ''}/>`
    + tete(x2, y2, Math.atan2(y2 - c2y, x2 - c2x));
  const svg = (h, label, corps) =>
    `<svg viewBox="0 0 120 ${h}" role="img" aria-label="${label}" stroke-linecap="round" stroke-linejoin="round">${corps}</svg>`;
  const boite = (x, y, w, h, texte, cls = '') =>
    `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/><text x="${x + w / 2}" y="${y + h / 2 + 3.6}" text-anchor="middle" stroke="none">${texte}</text>`;

  /* ---------- les schémas ---------- */
  const figTableau = svg(50, "Tableau : 2 kg, 7 euros ; 5 kg, 17,5 euros ; 8 kg, 28 euros. Une flèche « fois 3,5 » va de la ligne du haut à celle du bas.", `
    <rect class="al" x="2" y="4" width="20" height="38" rx="2"/>
    <g fill="none" stroke="currentColor" stroke-width=".9">
      <rect x="2" y="4" width="92" height="38" rx="2"/><line x1="2" y1="23" x2="94" y2="23"/>
      <line x1="22" y1="4" x2="22" y2="42"/><line x1="46" y1="4" x2="46" y2="42"/><line x1="70" y1="4" x2="70" y2="42"/></g>
    <g font-size="10" text-anchor="middle">
      <text x="12" y="17">kg</text><text x="34" y="17">2</text><text x="58" y="17">5</text><text x="82" y="17">8</text>
      <text x="12" y="36">€</text><text x="34" y="36">7</text><text x="58" y="36">17,5</text><text x="82" y="36">28</text></g>
    <g class="ac" stroke-width="1.4">${courbe(97, 12, 110, 15, 110, 31, 98, 34)}</g>
    <text class="at" x="119" y="49" font-size="10" font-weight="700" text-anchor="end">× 3,5</text>`);

  const figCroix = svg(60, "Tableau : 100 km donne 6 L, 350 km donne x litres. Les produits en croix relient 6 et 350, puis 100 et x.", `
    <g fill="none" stroke="currentColor" stroke-width=".9">
      <rect x="22" y="2" width="80" height="40" rx="2"/><line x1="22" y1="22" x2="102" y2="22"/><line x1="62" y1="2" x2="62" y2="42"/></g>
    <g font-size="10" text-anchor="middle">
      <text x="11" y="15.5">km</text><text x="11" y="35.5">L</text>
      <text x="42" y="15.5">100</text><text x="82" y="15.5">350</text>
      <text x="42" y="35.5" class="at" font-weight="700">6</text><text x="82" y="35.5" font-weight="700">x</text></g>
    <line class="ac" x1="50" y1="30" x2="73" y2="14" stroke-width="1.5"/>
    <line x1="51" y1="14" x2="74" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="2.5 2"/>
    <text x="62" y="56" font-size="10" text-anchor="middle">x = <tspan class="at" font-weight="700">6 × 350</tspan> ÷ 100</text>`);

  const fx = f => r1(14 + 9 * f), fy = e => r1(58 - 2 * e);
  const figGraphe = svg(68, "Graphique : la droite A part de l'origine et monte de 2 euros par film ; la droite B part de 8 euros et monte de 1 euro par film.", `
    <g stroke="#C5CDD9" stroke-width=".6">${[2, 4, 6, 8, 10].map(f => `<line x1="${fx(f)}" y1="${fy(0)}" x2="${fx(f)}" y2="${fy(24)}"/>`).join('')}${[8, 16, 24].map(e => `<line x1="${fx(0)}" y1="${fy(e)}" x2="${fx(10.6)}" y2="${fy(e)}"/>`).join('')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(fx(0), fy(0), fx(11.4), fy(0))}${fleche(fx(0), fy(0), fx(0), fy(26.5))}</g>
    <g font-size="8.5" text-anchor="end"><text x="${fx(0) - 2.5}" y="${fy(0) + 3}">0</text><text x="${fx(0) - 2.5}" y="${fy(8) + 3}">8</text><text x="${fx(0) - 2.5}" y="${fy(16) + 3}">16</text>
      <text x="119" y="67">films</text><text x="${fx(0) - 2.5}" y="7">€</text></g>
    <line class="ac" x1="${fx(0)}" y1="${fy(0)}" x2="${fx(10.4)}" y2="${fy(20.8)}" stroke-width="2"/>
    <line class="ao" x1="${fx(0)}" y1="${fy(8)}" x2="${fx(10.4)}" y2="${fy(18.4)}" stroke-width="2" stroke-dasharray="4 2.6"/>
    <circle class="af" cx="${fx(0)}" cy="${fy(0)}" r="2.6"/>
    <text class="at" x="${fx(10.3)}" y="${fy(20.8) - 3.5}" font-size="11" font-weight="700" text-anchor="middle">A</text>
    <text class="aot" x="${fx(10.7)}" y="${fy(18.4) + 10}" font-size="11" font-weight="700" text-anchor="middle">B</text>`);

  let cases = '';
  for (let k = 0; k < 30; k++) cases += `<rect class="${k < 27 ? 'af' : 'vide'}" x="${r1(6 + (k % 10) * 11)}" y="${r1(2 + Math.floor(k / 10) * 11)}" width="9" height="9" rx="1.6"/>`;
  const figPourcent = svg(50, "30 cases, 27 sont coloriées : 27 sur 30, soit 90 %.", `${cases}
    <text x="60" y="47" font-size="10" text-anchor="middle"><tspan class="at" font-weight="700">27</tspan> sur 30 = 0,9 = <tspan font-weight="700">90 %</tspan></text>`);

  const figSolde = svg(44, "120 euros, flèche « fois 0,7 » (moins 30 %), 84 euros.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10.5">${boite(2, 6, 34, 20, '120 €')}${boite(84, 6, 34, 20, '84 €', 'al')}</g>
    <g class="ac" stroke-width="1.5">${fleche(40, 16, 79, 16)}</g>
    <text class="at" x="59.5" y="11" font-size="10" font-weight="700" text-anchor="middle">× 0,7</text>
    <text x="59.5" y="28" font-size="9" text-anchor="middle">− 30 %</text>
    <text x="60" y="41" font-size="9" text-anchor="middle">1 − 0,30 = 0,7</text>`);

  const figDepart = svg(58, "Un prix inconnu, flèche « fois 1,2 » vers 72 euros ; flèche retour « divisé par 1,2 » de 72 euros vers le prix inconnu.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10.5">${boite(2, 6, 34, 20, '?', 'al')}${boite(84, 6, 34, 20, '72 €')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(40, 16, 79, 16)}</g>
    <text x="59.5" y="11.5" font-size="9.5" text-anchor="middle">× 1,2</text>
    <g class="ac" stroke-width="1.5">${courbe(101, 29, 97, 46, 23, 46, 19, 30)}</g>
    <text class="at" x="60" y="56" font-size="10" font-weight="700" text-anchor="middle">÷ 1,2</text>`);

  const figTaux = svg(50, "500 euros, la valeur de départ, flèche « plus 40 euros » vers 540 euros. 40 divisé par 500 égale 8 %.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10.5">${boite(2, 4, 34, 20, '500 €', 'al ac')}${boite(84, 4, 34, 20, '540 €')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(40, 14, 79, 14)}</g>
    <text x="59.5" y="10" font-size="9.5" text-anchor="middle">+ 40 €</text>
    <text class="at" x="19" y="33" font-size="8.5" font-weight="700" text-anchor="middle">départ</text>
    <text x="60" y="46.5" font-size="10" text-anchor="middle">40 ÷ <tspan class="at" font-weight="700">500</tspan> = 0,08 = 8 %</text>`);

  const figSuccessives = svg(52, "100, fois 1,1, donne 110 ; fois 0,9, donne 99. Au total : fois 0,99, soit moins 1 %.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10.5">${boite(2, 4, 28, 18, '100')}${boite(46, 4, 28, 18, '110')}${boite(90, 4, 28, 18, '99', 'al')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(32, 13, 43.5, 13)}${fleche(76, 13, 87.5, 13)}</g>
    <g font-size="9" text-anchor="middle"><text x="38" y="33">× 1,1</text><text x="82" y="33">× 0,9</text></g>
    <text class="at" x="60" y="48" font-size="10" font-weight="700" text-anchor="middle">× 0,99 → − 1 %</text>`);

  const figVitesse = svg(60, "Triangle : d en haut, v et t en bas. d = v × t ; v = d ÷ t ; t = d ÷ v.", `
    <path d="M60 3 L14 57 L106 57 Z" class="al" stroke="currentColor" stroke-width="1"/>
    <line x1="37" y1="30" x2="83" y2="30" stroke="currentColor" stroke-width="1"/>
    <text class="at" x="60" y="25" font-size="14" font-weight="700" text-anchor="middle">d</text>
    <g font-size="13" text-anchor="middle"><text x="45" y="50" font-weight="700">v</text><text x="60" y="49.5">×</text><text x="75" y="50" font-weight="700">t</text></g>`);

  const figEchelle = svg(56, "Sur la carte, 4,5 cm entre deux villages ; fois 50 000 ; en vrai, 2,25 km.", `
    <g class="ac" stroke-width="1.2"><line x1="12" y1="16" x2="108" y2="16" stroke-dasharray="3 2.2"/></g>
    <circle class="af" cx="10" cy="16" r="3.2"/><circle class="af" cx="110" cy="16" r="3.2"/>
    <text x="60" y="10" font-size="9.5" text-anchor="middle">4,5 cm sur la carte</text>
    <g stroke="currentColor" stroke-width="1">${fleche(60, 21, 60, 36)}</g>
    <text class="at" x="65" y="31.5" font-size="9.5" font-weight="700">× 50 000</text>
    <text x="60" y="51" font-size="10" text-anchor="middle"><tspan font-weight="700">2,25 km</tspan> en vrai</text>`);

  let parts = '';
  for (let k = 0; k < 5; k++) parts += `<rect class="${k < 2 ? 'al ac' : 'aol ao'}" x="${4 + k * 22.4}" y="4" width="20" height="18" rx="2" stroke-width="1"/><text x="${14 + k * 22.4}" y="16.5" font-size="9" text-anchor="middle">9 €</text>`;
  const figRatio = svg(42, "Cinq parts de 9 euros : 2 parts pour Léa, soit 18 euros, et 3 parts pour Tom, soit 27 euros.", `${parts}
    <g font-size="9.5" text-anchor="middle"><text class="at" x="25.4" y="36" font-weight="700">Léa 18 €</text><text class="aot" x="81.4" y="36" font-weight="700">Tom 27 €</text></g>`);

  let grille = '';
  for (let k = 1; k < 3; k++) grille += `<line x1="${44 + 14 * k}" y1="4" x2="${44 + 14 * k}" y2="46"/><line x1="44" y1="${4 + 14 * k}" x2="86" y2="${4 + 14 * k}"/>`;
  const figAgrandir = svg(58, "Petit carré de 2 cm ; flèche « fois 3 » ; grand carré de 6 cm qui contient 9 petits carrés : l'aire est multipliée par 9.", `
    <rect class="al" x="6" y="32" width="14" height="14" stroke="currentColor" stroke-width="1"/>
    <rect class="al" x="44" y="4" width="42" height="42" stroke="currentColor" stroke-width="1"/>
    <g stroke="currentColor" stroke-width=".6" stroke-dasharray="2 1.6">${grille}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(24, 39, 40, 39)}</g>
    <text x="32" y="34.5" font-size="9" text-anchor="middle">× 3</text>
    <g font-size="9" text-anchor="middle"><text x="13" y="56">2 cm</text><text x="65" y="56">6 cm</text></g>
    <text x="104" y="22" font-size="9" text-anchor="middle">aire</text>
    <text class="at" x="104" y="35" font-size="12" font-weight="700" text-anchor="middle">× 9</text>`);

  /* ---------- la fiche ---------- */
  DATA.relire.push({
    id: 'relire-prop',
    matiere: 'maths',
    cours: ['ma-ch6'],
    titre: 'Proportionnalité : exemples corrigés',
    sous: 'À relire avant le contrôle',
    conseil: "Sur la copie : <b>calcul posé, résultat, unité, phrase réponse</b>. Avant un produit en croix, dire pourquoi c'est proportionnel.",
    exemples: [
      { titre: 'Reconnaître la proportionnalité',
        enonce: 'Le prix des pommes est-il proportionnel à leur masse ?',
        fig: figTableau,
        sol: ['7 ÷ 2 = 3,5 ; 17,5 ÷ 5 = 3,5 ; 28 ÷ 8 = 3,5.',
              'Les quotients sont égaux : <b>le prix est proportionnel à la masse</b> (3,50 € le kilo).'],
        piege: 'vérifier <b>toutes</b> les colonnes, pas une seule.' },
      { titre: 'Quatrième proportionnelle',
        enonce: 'Une voiture consomme 6 L pour 100 km. Combien pour 350 km ?',
        fig: figCroix,
        sol: ['La consommation est proportionnelle à la distance.',
              'x = 6 × 350 ÷ 100 = 21. <b>Elle consomme 21 L.</b>'],
        piege: 'produit en croix seulement si c\'est proportionnel.' },
      { titre: 'Lire un graphique',
        enonce: 'Tarif A : 2 € par film. Tarif B : 8 € d\'abonnement, puis 1 € par film. Lequel est proportionnel ?',
        fig: figGraphe,
        sol: ['A est une droite qui passe par l\'<b>origine</b>, donc <b>A est proportionnel</b> au nombre de films.',
              'B ne passe pas par l\'origine (8 € pour 0 film) : <b>B n\'est pas proportionnel</b>.'],
        piege: 'une droite ne suffit pas : elle doit passer par l\'origine.' },
      { titre: 'Appliquer, calculer un pourcentage',
        enonce: 'a) 15 % de 60 € ?<br>b) 27 élèves sur 30 ont la moyenne : quel pourcentage ?',
        fig: figPourcent,
        sol: ['a) 60 × 15 ÷ 100 = <b>9 €</b> (10 % = 6 € et 5 % = 3 €).',
              'b) 27 ÷ 30 = 0,9, soit <b>90 %</b> des élèves.'],
        piege: 'une proportion, c\'est la partie ÷ le <b>total</b>.' },
      { titre: 'Réduction : le coefficient',
        enonce: 'Un blouson à 120 € est soldé à −30 %. Quel est son nouveau prix ?',
        fig: figSolde,
        sol: ['Baisser de 30 %, c\'est multiplier par 1 − 0,30 = 0,7.',
              '120 × 0,7 = 84. <b>Le blouson coûte 84 €.</b>'],
        piege: 'une hausse de 5 %, c\'est × 1,05 (pas × 0,05).' },
      { titre: 'Retrouver le prix de départ',
        enonce: 'Après une hausse de 20 %, un jeu coûte 72 €. Combien coûtait-il avant ?',
        fig: figDepart,
        sol: ['Prix de départ × 1,2 = 72, donc prix de départ = 72 ÷ 1,2 = 60.',
              '<b>Il coûtait 60 €.</b> Vérification : 60 × 1,2 = 72.'],
        piege: 'retirer 20 % de 72 € (57,60 €) est <b>faux</b>.' },
      { titre: "Taux d'évolution",
        enonce: 'Un loyer passe de 500 € à 540 €. De quel pourcentage a-t-il augmenté ?',
        fig: figTaux,
        sol: ['(540 − 500) ÷ 500 = 40 ÷ 500 = 0,08.',
              '<b>Le loyer a augmenté de 8 %.</b>'],
        piege: 'diviser par la valeur de <b>départ</b> (500), pas par 540.' },
      { titre: 'Deux évolutions de suite',
        enonce: 'Un prix augmente de 10 %, puis baisse de 10 %. Revient-il au prix de départ ?',
        fig: figSuccessives,
        sol: ['Les coefficients se multiplient : 1,1 × 0,9 = 0,99 = 1 − 0,01.',
              '<b>Non : au total, le prix baisse de 1 %.</b>'],
        piege: '+10 % puis −10 %, ce n\'est pas 0 %.' },
      { titre: 'Vitesse, distance, durée',
        enonce: 'Une voiture roule 2 h 15 min à 72 km/h. Quelle distance parcourt-elle ? Sa vitesse en m/s ?',
        fig: figVitesse,
        sol: ['2 h 15 min = 2,25 h (15 min = 0,25 h).',
              'd = v × t = 72 × 2,25 = 162. <b>Elle parcourt 162 km.</b>',
              '72 ÷ 3,6 = 20 : <b>72 km/h = 20 m/s</b>.'],
        piege: '2 h 15 min ≠ 2,15 h.' },
      { titre: "L'échelle d'une carte",
        enonce: 'Sur une carte au 1/50 000, deux villages sont à 4,5 cm. Distance réelle ?',
        fig: figEchelle,
        sol: ['4,5 × 50 000 = 225 000 cm = 2 250 m.',
              '<b>Les villages sont à 2,25 km l\'un de l\'autre.</b>'],
        piege: '1 km = 100 000 cm : convertir à la fin.' },
      { titre: 'Partager selon un ratio',
        enonce: 'Léa et Tom se partagent 45 € dans le ratio 2 : 3. Combien chacun reçoit-il ?',
        fig: figRatio,
        sol: ['2 + 3 = 5 parts, et 1 part = 45 ÷ 5 = 9 €.',
              '<b>Léa reçoit 2 × 9 = 18 €, Tom 3 × 9 = 27 €.</b>'],
        piege: 'diviser par le nombre <b>total</b> de parts (5).' },
      { titre: 'Agrandir une figure',
        enonce: 'On agrandit un carré de 2 cm de côté avec le coefficient 3. Que deviennent son périmètre et son aire ?',
        fig: figAgrandir,
        sol: ['Longueurs × 3 : périmètre 8 cm → <b>24 cm</b>.',
              'Aire × 3² = 9 : 4 cm² → <b>36 cm²</b>. (Volume : × 3³ = 27.)'],
        piege: 'l\'aire est multipliée par 9, pas par 3.' }
    ]
  });

  /* =========================================================
     MATHS, TOUS LES CHAPITRES : une feuille A4 recto verso.
     Recto : chapitres 1 à 4. Verso : chapitres 5 à 7.
     Chaque exemple porte son chapitre (cours).
     ========================================================= */
  const arc = (x1, y1, x2, y2, h) => {   // petit saut en arc, pointe à l'arrivée
    const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - h;
    return courbe(x1, y1, x1 + (mx - x1) * 0.4, my, x2 - (x2 - mx) * 0.4, my, x2, y2);
  };

  /* ch. 1 */
  const figFractions = svg(50, "Une barre coupée en 3 parts dont 2 coloriées, au-dessus d'une barre de même longueur coupée en 6 parts dont 4 coloriées : 2/3 = 4/6.", `
    ${[0, 1, 2].map(k => `<rect class="${k < 2 ? 'am' : ''}" x="${28 + 30 * k}" y="3" width="30" height="13" fill="none" stroke="currentColor" stroke-width=".9"/>`).join('')}
    ${[0, 1, 2, 3, 4, 5].map(k => `<rect class="${k < 4 ? 'am' : ''}" x="${28 + 15 * k}" y="21" width="15" height="13" fill="none" stroke="currentColor" stroke-width=".9"/>`).join('')}
    <g font-size="10.5" font-weight="700" text-anchor="middle"><text x="12" y="13.5">2/3</text><text x="12" y="31.5">4/6</text></g>
    <text class="at" x="60" y="47" font-size="9.5" font-weight="700" text-anchor="middle">2/3 = 4/6</text>`);

  const figInverse = svg(40, "Diviser par 4/15, c'est multiplier par son inverse, 15/4.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10.5">${boite(2, 4, 42, 20, '÷ 4/15')}${boite(76, 4, 42, 20, '× 15/4', 'al')}</g>
    <g class="ac" stroke-width="1.5">${fleche(48, 14, 72, 14)}</g>
    <text x="60" y="37" font-size="9" text-anchor="middle">on multiplie par l'<tspan class="at" font-weight="700">inverse</tspan></text>`);

  const chiffres = ['0', '0', '0', '0', '5', '2'];
  const figVirgule = svg(54, "0,00052 : la virgule saute 4 rangs vers la droite pour se placer après le 5 ; on obtient 5,2 × 10 puissance moins 4.", `
    <g font-size="14" text-anchor="middle">${chiffres.map((c, k) => `<text x="${12 + 12 * k}" y="30"${k === 4 ? ' class="at" font-weight="700"' : ''}>${c}</text>`).join('')}</g>
    <text class="gris" x="16.5" y="31" font-size="14">,</text>
    <text class="at" x="64.5" y="31" font-size="16" font-weight="700">,</text>
    <g class="ac" stroke-width="1.1">${[0, 1, 2, 3].map(k => arc(18 + 12 * k, 15, 30 + 12 * k, 15, 6)).join('')}</g>
    <text class="at" x="96" y="14" font-size="9" font-weight="700" text-anchor="middle">4 rangs</text>
    <text x="60" y="49" font-size="10.5" text-anchor="middle">= <tspan font-weight="700">5,2 × 10⁻⁴</tspan></text>`);

  /* exposant en petit, au-dessus de la ligne (dy cumulés : on redescend juste après) */
  const ex = (b, e) => `${b}<tspan dy="-4" font-size="8">${e}</tspan><tspan dy="4">​</tspan>`;
  const exA = (b, e) => `${b}<tspan class="at" dy="-4" font-size="8.5" font-weight="700">${e}</tspan><tspan dy="4">​</tspan>`;
  const figPuissances = svg(48, "Les règles : aⁿ × aᵖ = aⁿ⁺ᵖ (on ajoute les exposants) ; aⁿ ÷ aᵖ = aⁿ⁻ᵖ (on les soustrait) ; (aⁿ)ᵖ = aⁿˣᵖ (on les multiplie).", `
    <g font-size="11.5" text-anchor="middle">
      <text x="60" y="13">${ex('a', 'n')} × ${ex('a', 'p')} = ${exA('a', 'n + p')}</text>
      <text x="60" y="29">${ex('a', 'n')} ÷ ${ex('a', 'p')} = ${exA('a', 'n − p')}</text>
      <text x="60" y="45">(${ex('a', 'n')})${ex('', 'p')} = ${exA('a', 'n × p')}</text></g>`);

  /* ch. 2 : A à gauche, B et C à droite, (MN) // (BC) */
  const thales = (lab, question) => svg(64, question
    ? "Triangle ABC, M sur [AB], N sur [AC]. AM = 4, AB = 10, AN = 6, AC = 15. Les droites (MN) et (BC) sont-elles parallèles ?"
    : "Triangle ABC, M sur [AB], N sur [AC], (MN) parallèle à (BC). AM = 3, AN = 2, MN = 2,4.", `
    <g stroke="currentColor" stroke-width="1" fill="none"><path d="M10 32 L106 6 M10 32 L106 58"/></g>
    <g class="${question ? 'ao' : 'ac'}" stroke-width="1.8"${question ? ' stroke-dasharray="3.5 2.5"' : ''}><line x1="48.4" y1="21.6" x2="48.4" y2="42.4"/><line x1="106" y1="6" x2="106" y2="58"/></g>
    <g font-size="9.5" font-weight="700" text-anchor="middle"><text x="5" y="35">A</text><text x="47" y="16.5">M</text><text x="47" y="52">N</text><text x="113" y="9">B</text><text x="113" y="61">C</text></g>
    <g font-size="9" text-anchor="middle">${lab}</g>
    ${question ? '<text class="aot" x="79" y="36" font-size="12" font-weight="700" text-anchor="middle">// ?</text>' : '<text class="at" x="79" y="35" font-size="9" font-weight="700" text-anchor="middle">//</text>'}`);
  const figThales = thales('<text x="27" y="22">3</text><text x="27" y="47">2</text><text x="58" y="35">2,4</text>');
  const figReciproque = thales('<text x="27" y="22">4</text><text x="27" y="47">6</text><text x="82" y="9">AB = 10</text><text x="82" y="61">AC = 15</text>', true);

  /* ch. 3 */
  const figMachine = svg(44, "4 entre dans la fonction f (fois 3, moins 5) et il en sort 7 : 4 est un antécédent de 7, 7 est l'image de 4.", `
    <text x="9" y="20" font-size="13" font-weight="700" text-anchor="middle">4</text>
    <g stroke="currentColor" stroke-width="1">${fleche(17, 16, 36, 16)}${fleche(84, 16, 103, 16)}</g>
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10">${boite(39, 5, 42, 22, '× 3 − 5', 'al')}</g>
    <text class="at" x="111" y="20" font-size="13" font-weight="700" text-anchor="middle">7</text>
    <g font-size="8.5" text-anchor="middle"><text x="13" y="40">antécédent</text><text x="60" y="40">fonction f</text><text class="at" x="107" y="40" font-weight="700">image</text></g>`);

  const gx = x => r1(14 + 21 * x), gy = y => r1(62 - 9.5 * y);
  let courbeF = '';
  for (let k = 0; k <= 42; k++) { const x = k / 10; courbeF += `${k ? 'L' : 'M'}${gx(x)} ${gy((x - 2) ** 2 + 1)} `; }
  const figCourbe = svg(70, "Courbe de f : f(0) = 5, f(1) = 2, f(2) = 1, f(3) = 2, f(4) = 5. Lecture de l'image de 4 et des antécédents de 2.", `
    <g stroke="#C5CDD9" stroke-width=".6">${[1, 2, 3, 4].map(x => `<line x1="${gx(x)}" y1="${gy(0)}" x2="${gx(x)}" y2="${gy(5.8)}"/>`).join('')}${[1, 2, 3, 4, 5].map(y => `<line x1="${gx(0)}" y1="${gy(y)}" x2="${gx(4.6)}" y2="${gy(y)}"/>`).join('')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(gx(0), gy(0), gx(4.9), gy(0))}${fleche(gx(0), gy(0), gx(0), gy(6.3))}</g>
    <g font-size="8" text-anchor="middle">${[1, 2, 3, 4].map(x => `<text x="${gx(x)}" y="${gy(0) + 8}">${x}</text>`).join('')}</g>
    <g font-size="8" text-anchor="end">${[1, 2, 3, 4, 5].map(y => `<text x="${gx(0) - 2.5}" y="${gy(y) + 3}">${y}</text>`).join('')}</g>
    <path class="ac" d="${courbeF}" fill="none" stroke-width="1.8"/>
    <g class="ao" stroke-width="1.2" stroke-dasharray="2.5 2" fill="none"><path d="M${gx(0)} ${gy(2)} H${gx(3)} M${gx(1)} ${gy(2)} V${gy(0)} M${gx(3)} ${gy(2)} V${gy(0)}"/></g>
    <g stroke="currentColor" stroke-width="1.1" stroke-dasharray="2.5 2" fill="none"><path d="M${gx(4)} ${gy(0)} V${gy(5)} H${gx(0)}"/></g>
    <circle class="af" cx="${gx(4)}" cy="${gy(5)}" r="2.2"/><circle class="aof" cx="${gx(1)}" cy="${gy(2)}" r="2.2"/><circle class="aof" cx="${gx(3)}" cy="${gy(2)}" r="2.2"/>
    <text class="at" x="${gx(4.5)}" y="${gy(5.9)}" font-size="9" font-weight="700" text-anchor="middle">f</text>`);

  /* ch. 4 */
  const angleDroit = (x, y, dx, dy) => `<path d="M${x + dx} ${y} V${y + dy} H${x}" fill="none" stroke="currentColor" stroke-width=".9"/>`;
  const figPythagore = svg(64, "Triangle ABC rectangle en A : AB = 6 cm, AC = 8 cm ; l'hypoténuse [BC] est le côté opposé à l'angle droit.", `
    <path class="al" d="M24 54 L24 9 L84 54 Z" stroke="currentColor" stroke-width="1"/>
    <line class="ac" x1="24" y1="9" x2="84" y2="54" stroke-width="2.2"/>
    ${angleDroit(24, 54, 6, -6)}
    <g font-size="9.5" font-weight="700" text-anchor="middle"><text x="18" y="61">A</text><text x="18" y="11">B</text><text x="90" y="61">C</text></g>
    <g font-size="9.5" text-anchor="middle"><text x="16" y="35">6</text><text x="54" y="63">8</text></g>
    <text class="at" x="58" y="27" font-size="9" font-weight="700">BC ?</text>
    <text class="at" x="104" y="40" font-size="8.5" text-anchor="middle">hypo-</text><text class="at" x="104" y="49" font-size="8.5" text-anchor="middle">ténuse</text>`);

  const figRectangle = svg(64, "Triangle EFG avec EF = 5, EG = 12 et FG = 13 : l'angle en E est-il droit ?", `
    <path class="al" d="M26 54 L26 26 L94 54 Z" stroke="currentColor" stroke-width="1"/>
    <path class="ao" d="M26 48 H32 V54" fill="none" stroke-width="1.2" stroke-dasharray="1.6 1.4"/>
    <g font-size="9.5" font-weight="700" text-anchor="middle"><text x="20" y="61">E</text><text x="20" y="27">F</text><text x="100" y="61">G</text></g>
    <g font-size="9.5" text-anchor="middle"><text x="19" y="43">5</text><text x="60" y="63">12</text><text class="at" x="64" y="36" font-weight="700">13</text></g>
    <text class="aot" x="40" y="48" font-size="12" font-weight="700" text-anchor="middle">?</text>`);

  const figTrigo = svg(62, "Triangle ABC rectangle en A, angle B = 35°, hypoténuse BC = 10 cm ; on cherche le côté AC, opposé à l'angle B.", `
    <path class="al" d="M12 54 L92 54 L92 12 Z" stroke="currentColor" stroke-width="1"/>
    <line class="ac" x1="12" y1="54" x2="92" y2="12" stroke-width="2.2"/>
    <line class="ao" x1="92" y1="54" x2="92" y2="12" stroke-width="2.2"/>
    ${angleDroit(92, 54, -6, -6)}
    <path d="M30 54 A18 18 0 0 0 27.9 45.6" fill="none" stroke="currentColor" stroke-width="1"/>
    <g font-size="9.5" font-weight="700" text-anchor="middle"><text x="7" y="58">B</text><text x="97" y="61">A</text><text x="97" y="12">C</text></g>
    <text x="33" y="51" font-size="8.5">35°</text>
    <text class="at" x="46" y="28" font-size="9" font-weight="700" text-anchor="middle">10</text>
    <text class="aot" x="97" y="37" font-size="9" font-weight="700">?</text>`);

  const formule = (x, nom, haut, cls) => `
    <rect class="${cls}" x="${x}" y="1" width="57" height="44" rx="3" fill="none" stroke="currentColor" stroke-width=".9"/>
    <text class="at" x="${x + 28.5}" y="14" font-size="11.5" font-weight="700" text-anchor="middle">${nom} =</text>
    <text x="${x + 28.5}" y="27" font-size="9" text-anchor="middle">${haut}</text>
    <line x1="${x + 5}" y1="30.5" x2="${x + 52}" y2="30.5" stroke="currentColor" stroke-width=".9"/>
    <text x="${x + 28.5}" y="40.5" font-size="9" text-anchor="middle">hypoténuse</text>`;
  const figCosSin = svg(46, "cos = côté adjacent sur hypoténuse ; sin = côté opposé sur hypoténuse.",
    formule(1, 'cos', 'adjacent', 'al ac') + formule(62, 'sin', 'opposé', ''));

  /* ch. 5 */
  const figDistrib = svg(56, "Tableau de la double distributivité : 2x fois x = 2x² ; 2x fois −4 = −8x ; 3 fois x = 3x ; 3 fois −4 = −12.", `
    <rect class="al" x="22" y="12" width="96" height="42" rx="2"/>
    <g fill="none" stroke="currentColor" stroke-width=".9"><rect x="22" y="12" width="96" height="42" rx="2"/><line x1="70" y1="12" x2="70" y2="54"/><line x1="22" y1="33" x2="118" y2="33"/></g>
    <g font-size="10" font-weight="700" text-anchor="middle"><text x="46" y="9">x</text><text x="94" y="9">−4</text><text x="11" y="26">2x</text><text x="11" y="47">3</text></g>
    <g font-size="10.5" text-anchor="middle"><text class="at" x="46" y="26.5" font-weight="700">2x²</text><text x="94" y="26.5">−8x</text><text x="46" y="47.5">3x</text><text x="94" y="47.5">−12</text></g>`);

  const figFactoriser = svg(50, "Développer transforme le produit 3(2x + 5) en la somme 6x + 15 ; factoriser fait le chemin inverse.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10">${boite(2, 4, 46, 20, '3(2x + 5)')}${boite(72, 4, 46, 20, '6x + 15')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(51, 10, 69, 10)}</g><g class="ac" stroke-width="1.4">${fleche(69, 18, 51, 18)}</g>
    <g font-size="8.5" text-anchor="middle"><text x="25" y="34">produit</text><text x="95" y="34">somme</text></g>
    <text x="60" y="47" font-size="9" text-anchor="middle">développer → · <tspan class="at" font-weight="700">← factoriser</tspan></text>`);

  /* (a + b)² : le grand carré se découpe en a², ab, ab et b² */
  const figCarre = svg(68, "Un carré de côté a + b découpé en quatre : un carré a², deux rectangles ab et un carré b². Donc (a + b)² = a² + 2ab + b².", `
    <rect class="am" x="26" y="10" width="36" height="36"/><rect class="al" x="62" y="10" width="20" height="36"/><rect class="al" x="26" y="46" width="36" height="20"/><rect class="aol" x="62" y="46" width="20" height="20"/>
    <g fill="none" stroke="currentColor" stroke-width=".9"><rect x="26" y="10" width="56" height="56"/><line x1="62" y1="10" x2="62" y2="66"/><line x1="26" y1="46" x2="82" y2="46"/></g>
    <g font-size="10" text-anchor="middle"><text x="44" y="7">a</text><text x="72" y="7">b</text><text x="19" y="31">a</text><text x="19" y="59">b</text></g>
    <g font-size="11" font-weight="700" text-anchor="middle"><text x="44" y="32">${ex('a', '2')}</text><text x="72" y="32">ab</text><text x="44" y="60">ab</text><text x="72" y="60">${ex('b', '2')}</text></g>
    <g class="at" font-size="10" font-weight="700"><text x="88" y="26">= ${ex('a', '2')}</text><text x="88" y="40">+ 2ab</text><text x="88" y="54">+ ${ex('b', '2')}</text></g>`);

  /* un quotient est nul si son numérateur est nul (et son dénominateur ne l'est pas) */
  const figQuotient = svg(40, "N sur D égale 0 : donc N = 0, avec D différent de 0.", `
    <g font-size="10.5" font-weight="700" text-anchor="middle"><text x="12" y="15">N</text><text x="12" y="31">D</text></g>
    <line x1="4" y1="20" x2="20" y2="20" stroke="currentColor" stroke-width="1.1"/>
    <text x="32" y="24" font-size="10.5" text-anchor="middle">= 0</text>
    <g stroke="currentColor" stroke-width="1">${fleche(44, 20, 60, 20)}</g>
    <text class="at" x="64" y="15" font-size="10" font-weight="700">N = 0</text>
    <text class="aot" x="64" y="31" font-size="10" font-weight="700">et D ≠ 0</text>`);

  const figBalance = svg(50, "Une balance en équilibre : 5x − 3 d'un côté, 2x + 9 de l'autre. On fait la même opération des deux côtés.", `
    <path class="al" d="M60 15 L51 31 H69 Z" stroke="currentColor" stroke-width=".9"/>
    <g stroke="currentColor" stroke-width="1.2"><line x1="16" y1="15" x2="104" y2="15"/><line x1="22" y1="15" x2="22" y2="21"/><line x1="98" y1="15" x2="98" y2="21"/></g>
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="10">${boite(2, 21, 40, 16, '5x − 3', 'al')}${boite(78, 21, 40, 16, '2x + 9', 'al')}</g>
    <text x="60" y="48" font-size="8.5" text-anchor="middle">même opération des deux côtés</text>`);

  const figProduitNul = svg(50, "A fois B égale 0 : donc A = 0 ou B = 0, soit x − 2 = 0 ou 3x + 6 = 0.", `
    <g fill="none" stroke="currentColor" stroke-width=".9" font-size="9">${boite(35, 2, 50, 16, 'A × B = 0', 'al ac')}${boite(1, 32, 49, 16, 'x − 2 = 0')}${boite(70, 32, 49, 16, '3x + 6 = 0')}</g>
    <g stroke="currentColor" stroke-width="1">${fleche(48, 19, 32, 30)}${fleche(72, 19, 88, 30)}</g>
    <text class="at" x="60" y="43.5" font-size="9.5" font-weight="700" text-anchor="middle">ou</text>`);

  const figPerimetre = svg(48, "Un rectangle de longueur x + 3 et de largeur x, de périmètre 30 cm.", `
    <rect class="al" x="22" y="10" width="76" height="30" rx="1.5" stroke="currentColor" stroke-width="1"/>
    <g font-size="9.5" text-anchor="middle"><text x="60" y="7">x + 3</text><text x="13" y="28">x</text></g>
    <text class="at" x="60" y="29" font-size="10" font-weight="700" text-anchor="middle">P = 30 cm</text>`);

  /* ch. 7 : blocs Scratch simplifiés, et le suivi de la variable */
  const bloc = (y, cls, texte, chapeau) => `<path class="${cls}" d="${chapeau
    ? `M4 ${y + 13} V${y + 5} Q4 ${y} 16 ${y} H46 Q58 ${y} 62 ${y + 5} H90 Q92 ${y + 5} 92 ${y + 7} V${y + 13} Z`
    : `M4 ${y} H92 V${y + 12.5} H4 Z`}"/><text class="sc-t" x="8" y="${y + (chapeau ? 10.5 : 9)}" font-size="8.8" font-weight="700">${texte}</text>`;
  const figScratch = svg(68, "Script Scratch : quand le drapeau est cliqué ; mettre n à 4 ; mettre n à n fois 3 ; ajouter 5 à n ; dire n. La variable n vaut 4, puis 12, puis 17.", `
    ${bloc(2, 'sc-ev', 'quand ⚑ cliqué', true)}${bloc(15, 'sc-var', 'mettre n à 4')}${bloc(27.5, 'sc-var', 'mettre n à n × 3')}${bloc(40, 'sc-var', 'ajouter 5 à n')}${bloc(52.5, 'sc-look', 'dire n')}
    <g stroke="#fff" stroke-width=".7"><line x1="4" y1="27.5" x2="92" y2="27.5"/><line x1="4" y1="40" x2="92" y2="40"/><line x1="4" y1="52.5" x2="92" y2="52.5"/></g>
    <text x="106" y="10" font-size="8" font-style="italic" text-anchor="middle">n vaut</text>
    <g font-size="10" font-weight="700" text-anchor="middle"><text x="106" y="24.5">4</text><text x="106" y="37">12</text><text class="at" x="106" y="49.5">17</text><text class="at" x="106" y="62" font-size="8.5">« 17 »</text></g>`);

  const figPolygone = svg(60, "Triangle équilatéral tracé par le lutin : à chaque sommet, il tourne de l'angle extérieur, 120°, et non de l'angle intérieur, 60°.", `
    <path class="al" d="M12 54 L72 54 L42 2 Z" stroke="currentColor" stroke-width="1.4"/>
    <line x1="72" y1="54" x2="106" y2="54" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2.2"/>
    <g stroke="currentColor" stroke-width="1.2">${tete(46, 54, 0)}</g>
    <path class="ac" d="M88 54 A16 16 0 0 0 64 40.1" fill="none" stroke-width="1.6"/>
    <g class="ac" stroke-width="1.4">${tete(64, 40.1, Math.atan2(40.1 - 47, 64 - 80))}</g>
    <text class="at" x="98" y="42" font-size="10" font-weight="700" text-anchor="middle">120°</text>
    <text x="62" y="51" font-size="7.5" text-anchor="middle">60°</text>
    <circle class="af" cx="12" cy="54" r="2.4"/>`);

  const nw = t => `<span class="nw">${t}</span>`;
  const fr = (n, d) => `<span class="fr"><span>${n}</span><span>${d}</span></span>`;
  const P = DATA.relire.find(r => r.id === 'relire-prop').exemples;
  const reprise = k => ({ ...P[k], cours: 'ma-ch6' });

  DATA.relire.unshift({
    id: 'relire-maths',
    matiere: 'maths',
    cours: ['ma-ch1', 'ma-ch2', 'ma-ch3', 'ma-ch4', 'ma-ch5', 'ma-ch6', 'ma-ch7'],
    titre: 'Maths : exemples corrigés de tous les chapitres',
    sous: "À relire avant l'épreuve",
    faces: [
      { titre: 'Recto · Chapitres 1 à 4',
        conseil: "Sur la copie : <b>calcul posé, résultat, unité, phrase réponse</b>. En géométrie : on sait que… <b>or</b> (le théorème, par son nom)… <b>donc</b>…",
        exemples: [
          { cours: 'ma-ch1', titre: 'Calculer avec des fractions',
            enonce: 'Calculer A = 2/3 + 5/6, B = 4/9 × 3/8 et C = 2/5 ÷ 4/15.',
            fig: figFractions,
            sol: ['A = 4/6 + 5/6 = 9/6 = <b>3/2</b> (même dénominateur).',
                  'B = (4 × 3)/(9 × 8) = 12/72 = <b>1/6</b>.',
                  'C = 2/5 × 15/4 = 30/20 = <b>3/2</b> (× l\'inverse).'],
            piege: 'on n\'additionne jamais les dénominateurs.' },
          { cours: 'ma-ch1', titre: 'Écriture scientifique',
            enonce: 'Écrire 0,000 52 et 34 000 000 en écriture scientifique.',
            fig: figVirgule,
            sol: ['0,000 52 = <b>5,2 × 10⁻⁴</b> : la virgule avance de 4 rangs.',
                  '34 000 000 = <b>3,4 × 10⁷</b> : elle recule de 7 rangs.'],
            piege: 'un seul chiffre non nul avant la virgule.' },
          { cours: 'ma-ch1', titre: 'Plusieurs puissances dans une fraction',
            enonce: 'Calculer A = ' + fr('4 × 10⁵ × 3 × 10⁻²', '6 × 10⁻⁴') + ' et ' + nw('B = (2³)² × 2⁻⁴ ÷ 8') + '.',
            fig: figPuissances,
            sol: ['A = (4 × 3)/6 × 10⁵⁻²⁺⁴ = <b>2 × 10⁷</b> (on regroupe nombres et puissances de 10).',
                  'B = 2⁶ × 2⁻⁴ ÷ 2³ = 2⁶⁻⁴⁻³ = <b>2⁻¹ = 1/2</b>, car (2³)² = 2⁶ et 8 = 2³.'],
            piege: 'diviser par 10⁻⁴ : l\'exposant augmente de 4.' },
          { cours: 'ma-ch2', titre: 'Thalès : calculer une longueur',
            enonce: '(MN) // (BC) ; AM = 3, AB = 7,5, AN = 2 et MN = 2,4 (en cm). Calculer AC et BC.',
            fig: figThales,
            sol: ['(MN) // (BC) ; d\'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.',
                  '3/7,5 = 2/AC = 2,4/BC, donc AC = 2 × 7,5 ÷ 3 = <b>5 cm</b> et BC = 2,4 × 7,5 ÷ 3 = <b>6 cm</b>.'],
            piege: 'il faut <b>savoir</b> que les droites sont parallèles.' },
          { cours: 'ma-ch2', titre: 'Réciproque : des droites parallèles ?',
            enonce: 'Points alignés dans le même ordre ; AM = 4, AB = 10, AN = 6, AC = 15. (MN) // (BC) ?',
            fig: figReciproque,
            sol: ['AM/AB = 4/10 = 0,4 et AN/AC = 6/15 = 0,4 : les rapports sont égaux.',
                  'D\'après la réciproque du théorème de Thalès, <b>(MN) // (BC)</b>.'],
            piege: 'rapports différents : <b>pas</b> parallèles.' },
          { cours: 'ma-ch3', titre: 'Image et antécédent par le calcul',
            enonce: 'f(x) = 3x − 5. Calculer l\'image de 4, puis l\'antécédent de 1.',
            fig: figMachine,
            sol: ['f(4) = 3 × 4 − 5 = 7 : <b>l\'image de 4 est 7</b>.',
                  '3x − 5 = 1, donc 3x = 6 et x = 2 : <b>l\'antécédent de 1 est 2</b>.'],
            piege: 'image : on part de x ; antécédent : on cherche x.' },
          { cours: 'ma-ch3', titre: 'Lire un graphique',
            enonce: 'Sur la courbe de f, lire l\'image de 4 et les antécédents de 2.',
            fig: figCourbe,
            sol: ['Image de 4 : on part de 4 en abscisse, <b>f(4) = 5</b>.',
                  'Antécédents de 2 : on part de 2 en ordonnée, on trouve <b>1 et 3</b>.'],
            piege: 'x se lit en bas (abscisses), f(x) à gauche (ordonnées).' },
          { cours: 'ma-ch4', titre: 'Pythagore : calculer une longueur',
            enonce: 'ABC est rectangle en A, AB = 6 cm et AC = 8 cm. Calculer BC.',
            fig: figPythagore,
            sol: ['ABC est rectangle en A ; d\'après le théorème de Pythagore : BC² = AB² + AC² = 36 + 64 = 100.',
                  'BC = √100 = 10. <b>BC mesure 10 cm.</b>'],
            piege: 'côté de l\'angle droit : on soustrait (AC² = BC² − AB²).' },
          { cours: 'ma-ch4', titre: 'Le triangle est-il rectangle ?',
            enonce: 'EFG : EF = 5 cm, EG = 12 cm, FG = 13 cm. Est-il rectangle ?',
            fig: figRectangle,
            sol: ['[FG] est le plus long côté : FG² = 169 et EF² + EG² = 25 + 144 = 169.',
                  'Égalité : d\'après la réciproque du théorème de Pythagore, <b>EFG est rectangle en E</b>.'],
            piege: 'résultats différents : <b>pas</b> rectangle.' },
          { cours: 'ma-ch4', titre: 'Trigonométrie : une longueur',
            enonce: 'ABC rectangle en A, angle B = 35°, BC = 10 cm. Calculer AC au dixième.',
            fig: figTrigo,
            sol: ['Pour l\'angle B : [AC] est opposé, [BC] est l\'hypoténuse, donc sin B = AC/BC.',
                  'AC = 10 × sin 35° ≈ <b>5,7 cm</b>.'],
            piege: 'calculatrice en mode <b>degrés</b>.' },
          { cours: 'ma-ch4', titre: 'Trigonométrie : un angle',
            enonce: 'EFG rectangle en E, EF = 5 cm, FG = 8 cm. Calculer l\'angle EFG au degré.',
            fig: figCosSin,
            sol: ['Pour l\'angle F : [EF] est adjacent, [FG] est l\'hypoténuse, donc cos F = EF/FG = 5/8.',
                  'F = arccos(5/8) ≈ <b>51°</b> (calculatrice en degrés).'],
            piege: 'choisir la formule qui utilise les deux longueurs connues.' }
        ] },
      { titre: 'Verso · Chapitres 5 à 7',
        conseil: "Toujours <b>vérifier</b> : remplacer x par la solution trouvée, regarder l'ordre de grandeur et l'unité.",
        exemples: [
          { cours: 'ma-ch5', titre: 'Développer et réduire',
            enonce: 'Développer et réduire (2x + 3)(x − 4).',
            fig: figDistrib,
            sol: ['(2x + 3)(x − 4) = 2x × x + 2x × (−4) + 3 × x + 3 × (−4)',
                  '= 2x² − 8x + 3x − 12 = <b>2x² − 5x − 12</b>.'],
            piege: 'les signes : 3 × (−4) = −12.' },
          { cours: 'ma-ch5', titre: 'Les identités remarquables',
            enonce: 'Développer (x + 5)² et (3x − 2)². Factoriser 4x² − 9.',
            fig: figCarre,
            sol: ['(a + b)² = a² + 2ab + b² : (x + 5)² = x² + 2 × x × 5 + 5² = <b>x² + 10x + 25</b>.',
                  '(a − b)² = a² − 2ab + b² : (3x − 2)² = 9x² − 2 × 3x × 2 + 4 = <b>9x² − 12x + 4</b>.',
                  'a² − b² = (a − b)(a + b) : 4x² − 9 = (2x)² − 3² = <b>(2x − 3)(2x + 3)</b>.'],
            piege: '(x + 5)² n\'est pas x² + 25 : il manque le double produit 2ab.' },
          { cours: 'ma-ch5', titre: 'Factoriser',
            enonce: 'Factoriser 6x + 15, puis (x + 1)(2x + 3) + (x + 1)(x − 5).',
            fig: figFactoriser,
            sol: ['6x + 15 = 3 × 2x + 3 × 5 = <b>3(2x + 5)</b>.',
                  'Le facteur commun est la parenthèse (x + 1) : (x + 1)[(2x + 3) + (x − 5)] = <b>(x + 1)(3x − 2)</b>.'],
            piege: 'vérifier en redéveloppant.' },
          { cours: 'ma-ch5', titre: 'Résoudre une équation',
            enonce: 'Résoudre 5x − 3 = 2x + 9.',
            fig: figBalance,
            sol: ['5x − 2x = 9 + 3, donc 3x = 12, donc x = 12 ÷ 3 = 4.',
                  'Vérification : 5 × 4 − 3 = 17 et 2 × 4 + 9 = 17. <b>La solution est 4.</b>'],
            piege: 'un terme qui change de membre change de signe.' },
          { cours: 'ma-ch5', titre: 'Équation produit nul',
            enonce: 'Résoudre (x − 2)(3x + 6) = 0.',
            fig: figProduitNul,
            sol: ['Un produit est nul si l\'un de ses facteurs est nul : x − 2 = 0 ou 3x + 6 = 0.',
                  'x = 2 ou x = −6 ÷ 3 = −2. <b>Deux solutions : 2 et −2.</b>'],
            piege: 'ne pas développer : on garde le produit.' },
          { cours: 'ma-ch5', titre: 'Une équation avec x au dénominateur',
            enonce: 'Résoudre ' + fr('x + 3', '2x + 3') + ' = ' + fr('x + 3', '5') + '.',
            fig: figQuotient,
            sol: ['Valeur interdite : 2x + 3 ≠ 0, donc x ≠ −1,5.',
                  'On met tout à gauche : ' + nw(fr('x + 3', '2x + 3') + ' − ' + fr('x + 3', '5') + ' = 0') + '.',
                  'Même dénominateur : ' + nw(fr('5(x + 3) − (x + 3)(2x + 3)', '5(2x + 3)') + ' = 0') + ', donc le numérateur est nul.',
                  'On factorise par (x + 3) : (x + 3)[5 − (2x + 3)] = (x + 3)(2 − 2x) = 0.',
                  'Produit nul : x + 3 = 0 ou 2 − 2x = 0. <b>Solutions : −3 et 1</b> (aucune n\'est interdite).'],
            piege: 'ne pas « simplifier » par (x + 3) : on perdrait la solution −3.' },
          reprise(4),
          reprise(8),
          { cours: 'ma-ch7', titre: 'Scratch : un programme de calcul',
            enonce: 'Que dit le lutin ? Quel nombre de départ lui ferait dire 50 ?',
            fig: figScratch,
            sol: ['On suit la variable : 4 → 4 × 3 = 12 → 12 + 5 = 17. <b>Le lutin dit 17.</b>',
                  'En partant de x : 3x + 5 = 50, donc 3x = 45 et <b>x = 15</b>.'],
            piege: 'les blocs s\'exécutent de haut en bas, un par un.' },
          { cours: 'ma-ch7', titre: 'Scratch : tracer un polygone',
            enonce: 'Quel script trace un triangle équilatéral de côté 100 ?',
            fig: figPolygone,
            sol: ['Répéter 3 fois : avancer de 100, puis tourner de 120 degrés.',
                  'Le lutin tourne de l\'angle <b>extérieur</b> : 360 ÷ 3 = <b>120°</b>.'],
            piege: 'tourner de 60° est faux. Pour n côtés : 360 ÷ n degrés.' }
        ] }
    ]
  });

  /* espaces insécables : pas de retour à la ligne entre un nombre et son unité,
     ni avant « : », ni au milieu de « 50 000 », ni juste après un signe d'opération */
  const insecable = t => t
    .replace(/ ([−+×÷=→]) (?=[\d(a-zA-Z√<−])/g, ' $1\u00a0')
    .replace(/(\d) (?=\d)/g, '$1 ')
    .replace(/(\d) (?=[^\d\s=×÷+−:;<(→,.])/g, '$1 ')
    .replace(/ ([:;!?»])/g, ' $1').replace(/« /g, '« ')
    /* pas de retour à la ligne dans une petite parenthèse, ni entre « )( » */
    .replace(/\(([^()<>]{1,14})\)/g, (m, c) => '(' + c.replace(/ /g, '\u00a0') + ')')
    .replace(/\)\(/g, ')\u2060(');
  for (const f of DATA.relire) for (const face of f.faces || [f]) {
    if (face.conseil) face.conseil = insecable(face.conseil);
    for (const e of face.exemples) {
      e.enonce = insecable(e.enonce);
      e.sol = e.sol.map(insecable);
      e.piege = insecable(e.piege);
    }
  }
})();
