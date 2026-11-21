/* examens/maths.js — examens blancs de mathématiques (format DNB 2027)
   Trois sujets d'entraînement sur les chapitres du 1er trimestre (ma-ch1 à ma-ch7).
   Structure : parties = [Partie 1 (6 pts), Partie 2 (12 pts d'exercices)] + pointsRedaction 2 = 20.
   Les figures SVG ont été générées à partir des données de l'énoncé (longueurs et courbes calculées). */
DATA.examens = DATA.examens || [];

(function () {
const GARDE_MATHS = [
  "Partie 1 – Automatismes et applications directes : 6 points – 20 minutes (calculatrice interdite)",
  "Partie 2 – Raisonnement et résolution de problèmes : 14 points – 1 h 40 (calculatrice autorisée)",
  "À l'issue de la partie 1, les copies sont ramassées.",
  "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est interdit pour la partie 1 et autorisé pour la partie 2.",
  "L'utilisation du dictionnaire est interdite."
];
const CONSIGNE_P1 = `<p class="consigne">Pour chaque question, recopier sur la copie son numéro et indiquer la réponse correspondante.<br>Pour cette partie, aucune justification n'est demandée. La calculatrice n'est pas autorisée.</p>`;
const FIN_P1 = `<p class="consigne">Restitution de la copie du candidat à l'issue de la partie 1.</p>`;
const CONSIGNE_P2 = `<p class="consigne">Dans cette partie, toutes les réponses doivent être justifiées, sauf si une indication contraire est donnée.<br>La clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points. La maîtrise de la langue sera plus particulièrement évaluée sur les réponses aux questions en gras.<br>Pour chaque question, si le travail n'est pas terminé, laisser tout de même une trace de la recherche ; les essais et les démarches engagées, même non aboutis, seront pris en compte dans la notation. La calculatrice est autorisée.</p>`;
const BAREME_P1 = `<p class="bareme">Partie 1 : 6 points pour 9 questions. Seule la réponse est notée ; les justifications ci-dessous servent à comprendre et à vérifier.</p>`;

DATA.examens.push(

  /* =====================================================================
     SUJET 1 — Au skatepark
     ===================================================================== */
  {
    id: 'ex-maths-1',
    matiere: 'maths',
    numero: 1,
    titre: "Au skatepark",
    epreuve: "MATHÉMATIQUES",
    duree: "2 h 00",
    points: 20,
    pointsRedaction: 2,
    cours: ['ma-ch1', 'ma-ch2', 'ma-ch3', 'ma-ch4', 'ma-ch5', 'ma-ch6', 'ma-ch7'],
    methodes: ['ma-m1', 'ma-m2'],
    garde: GARDE_MATHS,
    parties: [
      {
        titre: "Partie 1 – Automatismes et applications directes – 20 minutes",
        points: 6,
        html: CONSIGNE_P1 + `
<p class="q"><b>Question 1.</b> Calculer A = 2/3 + 5/6. Donner le résultat sous la forme d'une fraction irréductible.</p>
<p class="q"><b>Question 2.</b> Donner l'écriture scientifique du nombre 0,000 72.</p>
<p class="q"><b>Question 3.</b> Écrire sous la forme d'une puissance de 10 : B = (10<sup>5</sup> × 10<sup>−2</sup>) ÷ 10<sup>4</sup>.</p>
<p class="q"><b>Question 4.</b> Développer et réduire l'expression (x + 3)(x − 2).</p>
<p class="q"><b>Question 5.</b> Déterminer la solution de l'équation 5x − 7 = 2x + 8.</p>
<p class="q"><b>Question 6.</b> On considère la fonction f définie par f(x) = x² − 3. Calculer l'image de −4 par la fonction f.</p>
<p class="q"><b>Question 7.</b> Les côtés d'un triangle mesurent 4 cm, 5 cm et 6 cm. Ce triangle est-il rectangle ?</p>
<p class="q"><b>Question 8.</b> Un pull coûte 40 €. Son prix baisse de 15 %. Quel est son nouveau prix ?</p>
<p class="q"><b>Question 9.</b> Par quelle valeur faut-il remplacer les pointillés dans le script ci-dessous pour que le lutin trace un hexagone régulier ?</p>
<div class="scratch">
<div class="sb ev">quand le drapeau vert est cliqué</div>
<div class="sb pen">stylo en position d'écriture</div>
<div class="sb ctl">répéter ( 6 ) fois<div class="sb-c">
<div class="sb mv">avancer de ( 50 ) pas</div>
<div class="sb mv">tourner ↻ de ( … ) degrés</div>
</div></div>
</div>
` + FIN_P1
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes – 1 h 40",
        points: 12,
        html: CONSIGNE_P2 + `
<h4>Exercice 1 (4 points)</h4>
<p>Un club de glisse construit un « lanceur » pour son skatepark : c'est un module en bois sur lequel les skateurs prennent de l'élan avant un saut. Sa vue de côté est représentée ci-dessous.</p>
<ul>
<li>Les points C, M et B sont alignés ; les points C, N et A sont alignés.</li>
<li>Le triangle ABC est rectangle en B.</li>
<li>Le montant [MN] est perpendiculaire au sol (CB).</li>
<li>BC = 2,4 m ; AB = 0,7 m ; CM = 1,8 m.</li>
</ul>
<svg class="fig-ex" viewBox="0 0 360 184" role="img" aria-label="Vue de côté du lanceur : triangle ABC rectangle en B, support MN vertical"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="25,100 295,100 295,21.2 25,100"/><line x1="227.5" y1="100" x2="227.5" y2="40.9"/><polyline points="287,100 287,92 295,92" stroke-width="1.5"/><polyline points="219.5,100 219.5,92 227.5,92" stroke-width="1.5"/></g><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><line x1="25" y1="128" x2="227.5" y2="128"/><line x1="25" y1="123" x2="25" y2="133"/><line x1="227.5" y1="123" x2="227.5" y2="133"/></g><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><line x1="25" y1="158" x2="295" y2="158"/><line x1="25" y1="153" x2="25" y2="163"/><line x1="295" y1="153" x2="295" y2="163"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="301" y="19.2">A</text><text x="301" y="105">B</text><text x="7" y="105">C</text><text x="222.5" y="118">M</text><text x="211.5" y="34.9">N</text><text x="302" y="65.6">0,7 m</text><text x="126.2" y="146" text-anchor="middle">1,8 m</text><text x="160" y="176" text-anchor="middle">2,4 m</text></g></svg>
<p><i>La figure n'est pas à l'échelle.</i></p>
<p class="q"><b>1.</b> Calculer la longueur AC de la pente du lanceur. <span class="pts">(1 point)</span></p>
<p class="q"><b>2.</b> Calculer la mesure de l'angle ACB, arrondie au degré. Pour les débutants, le club veut que la pente forme avec le sol un angle de moins de 20°. Ce lanceur convient-il aux débutants ? <span class="pts">(1 point)</span></p>
<p class="q gras"><b>3.</b> Justifier que les droites (MN) et (AB) sont parallèles. Présenter la démarche avec un vocabulaire mathématique précis et des phrases claires. <span class="pts">(1 point)</span></p>
<p class="q"><b>4.</b> Calculer la hauteur MN du montant, en centimètres. <span class="pts">(1 point)</span></p>

<h4>Exercice 2 (4 points)</h4>
<p>On considère le programme de calcul suivant.</p>
<div class="doc"><p class="doc-titre">Programme de calcul</p>
<ul>
<li>Choisir un nombre.</li>
<li>Lui soustraire 3 : on obtient un premier résultat.</li>
<li>Ajouter 3 au nombre choisi : on obtient un second résultat.</li>
<li>Multiplier le premier résultat par le second.</li>
</ul></div>
<p class="q"><b>1.</b> Vérifier que, si l'on choisit 5 comme nombre de départ, le programme donne 16. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>2.</b> Quel résultat obtient-on si l'on choisit −1 comme nombre de départ ? <span class="pts">(0,5 point)</span></p>
<p class="q"><b>3.</b> (Question d'algorithmique) Lucas a commencé à écrire ce programme avec le logiciel Scratch. Recopier et compléter le bloc « mettre résultat à ( … ) » pour que le lutin dise le résultat du programme de calcul. Aucune justification n'est attendue. <span class="pts">(0,5 point)</span></p>
<div class="scratch">
<div class="sb ev">quand le drapeau vert est cliqué</div>
<div class="sb sens">demander ( Choisis un nombre. ) et attendre</div>
<div class="sb var">mettre x à ( réponse )</div>
<div class="sb var">mettre a à ( x - 3 )</div>
<div class="sb var">mettre b à ( x + 3 )</div>
<div class="sb var">mettre résultat à ( … )</div>
<div class="sb look">dire ( résultat )</div>
</div>
<p>Dans la suite de l'exercice, on note x le nombre choisi au départ.</p>
<p class="q"><b>4.</b> Exprimer le résultat du programme en fonction de x, puis montrer qu'il est égal à x² − 9. <span class="pts">(0,5 point)</span></p>
<p class="q gras"><b>5.</b> Léa affirme : « Quel que soit le nombre choisi au départ, le résultat du programme est strictement inférieur au carré de ce nombre. » A-t-elle raison ? Expliquer clairement la démarche en utilisant un vocabulaire mathématique précis. <span class="pts">(1 point)</span></p>
<p class="q"><b>6.</b> Quels nombres faut-il choisir au départ pour obtenir 0 comme résultat ? <span class="pts">(0,5 point)</span></p>
<p class="q"><b>7.</b> Quel nombre positif faut-il choisir au départ pour obtenir 40 comme résultat ? <span class="pts">(0,5 point)</span></p>

<h4>Exercice 3 (4 points)</h4>
<p>Le skatepark couvert de la ville propose deux tarifs pour l'année :</p>
<ul>
<li><b>Tarif A</b> : 4 € par séance ;</li>
<li><b>Tarif B</b> : une carte annuelle à 30 €, puis 2,50 € par séance.</li>
</ul>
<p class="q"><b>1.</b> Calculer le prix payé pour 12 séances avec chacun des deux tarifs. <span class="pts">(0,5 point)</span></p>
<p>On note x le nombre de séances. Le prix payé, en euros, est donné par la fonction f avec le tarif A et par la fonction g avec le tarif B, où f(x) = 4x et g(x) = 30 + 2,5x.</p>
<p class="q"><b>2.</b> Calculer l'image de 16 par la fonction g. Interpréter ce résultat dans le contexte de l'exercice. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>3.</b> Le graphique ci-dessous représente les fonctions f et g. Associer chacune des droites (d<sub>1</sub>) et (d<sub>2</sub>) à la fonction qu'elle représente. Aucune justification n'est attendue. <span class="pts">(0,5 point)</span></p>
<svg class="fig-ex" viewBox="0 0 360 272" role="img" aria-label="Représentations graphiques des prix des tarifs A et B en fonction du nombre de séances"><g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25"><line x1="52" y1="232" x2="52" y2="24"/><line x1="61" y1="232" x2="61" y2="24"/><line x1="70" y1="232" x2="70" y2="24"/><line x1="79" y1="232" x2="79" y2="24"/><line x1="88" y1="232" x2="88" y2="24"/><line x1="97" y1="232" x2="97" y2="24"/><line x1="106" y1="232" x2="106" y2="24"/><line x1="115" y1="232" x2="115" y2="24"/><line x1="124" y1="232" x2="124" y2="24"/><line x1="133" y1="232" x2="133" y2="24"/><line x1="142" y1="232" x2="142" y2="24"/><line x1="151" y1="232" x2="151" y2="24"/><line x1="160" y1="232" x2="160" y2="24"/><line x1="169" y1="232" x2="169" y2="24"/><line x1="178" y1="232" x2="178" y2="24"/><line x1="187" y1="232" x2="187" y2="24"/><line x1="196" y1="232" x2="196" y2="24"/><line x1="205" y1="232" x2="205" y2="24"/><line x1="214" y1="232" x2="214" y2="24"/><line x1="223" y1="232" x2="223" y2="24"/><line x1="232" y1="232" x2="232" y2="24"/><line x1="241" y1="232" x2="241" y2="24"/><line x1="250" y1="232" x2="250" y2="24"/><line x1="259" y1="232" x2="259" y2="24"/><line x1="268" y1="232" x2="268" y2="24"/><line x1="277" y1="232" x2="277" y2="24"/><line x1="286" y1="232" x2="286" y2="24"/><line x1="295" y1="232" x2="295" y2="24"/><line x1="304" y1="232" x2="304" y2="24"/><line x1="313" y1="232" x2="313" y2="24"/><line x1="322" y1="232" x2="322" y2="24"/><line x1="52" y1="232" x2="322" y2="232"/><line x1="52" y1="216" x2="322" y2="216"/><line x1="52" y1="200" x2="322" y2="200"/><line x1="52" y1="184" x2="322" y2="184"/><line x1="52" y1="168" x2="322" y2="168"/><line x1="52" y1="152" x2="322" y2="152"/><line x1="52" y1="136" x2="322" y2="136"/><line x1="52" y1="120" x2="322" y2="120"/><line x1="52" y1="104" x2="322" y2="104"/><line x1="52" y1="88" x2="322" y2="88"/><line x1="52" y1="72" x2="322" y2="72"/><line x1="52" y1="56" x2="322" y2="56"/><line x1="52" y1="40" x2="322" y2="40"/><line x1="52" y1="24" x2="322" y2="24"/></g><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="52" y1="232" x2="334" y2="232"/><line x1="52" y1="232" x2="52" y2="12"/><polyline points="328,228 334,232 328,236"/><polyline points="48,18 52,12 56,18"/></g><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="52" y1="232" x2="322" y2="40"/><line x1="52" y1="184" x2="322" y2="64"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="52" y="249" text-anchor="middle" font-size="13">0</text><text x="97" y="249" text-anchor="middle" font-size="13">5</text><text x="142" y="249" text-anchor="middle" font-size="13">10</text><text x="187" y="249" text-anchor="middle" font-size="13">15</text><text x="232" y="249" text-anchor="middle" font-size="13">20</text><text x="277" y="249" text-anchor="middle" font-size="13">25</text><text x="322" y="249" text-anchor="middle" font-size="13">30</text><text x="46" y="237" text-anchor="end" font-size="13">0</text><text x="46" y="205" text-anchor="end" font-size="13">20</text><text x="46" y="173" text-anchor="end" font-size="13">40</text><text x="46" y="141" text-anchor="end" font-size="13">60</text><text x="46" y="109" text-anchor="end" font-size="13">80</text><text x="46" y="77" text-anchor="end" font-size="13">100</text><text x="46" y="45" text-anchor="end" font-size="13">120</text><text x="62" y="14" font-size="14">Prix (en €)</text><text x="330" y="268" text-anchor="end" font-size="14">Nombre de séances</text><text x="106" y="148.8" text-anchor="middle" font-size="15">(d<tspan font-size="11" dy="4">1</tspan><tspan dy="-4">)</tspan></text><text x="155" y="190" text-anchor="start" font-size="15">(d<tspan font-size="11" dy="4">2</tspan><tspan dy="-4">)</tspan></text></g></svg>
<p class="q"><b>4.</b> Le prix payé avec le tarif B est-il proportionnel au nombre de séances ? Justifier. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>5.</b> Les deux tarifs peuvent coûter le même prix.</p>
<p class="q sous"><b>a)</b> Par lecture graphique, déterminer le nombre de séances pour lequel les deux tarifs coûtent le même prix. <span class="pts">(0,5 point)</span></p>
<p class="q sous"><b>b)</b> Retrouver ce résultat par le calcul, en résolvant une équation. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>6.</b> Tom a choisi le tarif B et il est allé 36 fois au skatepark cette année. Quel pourcentage d'économie a-t-il réalisé par rapport au tarif A ? Arrondir le résultat au dixième. <span class="pts">(1 point)</span></p>
`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "Partie 1 – Automatismes et applications directes",
        html: BAREME_P1 + `
<div class="rep"><p class="rq"><b>1.</b> A = 2/3 + 5/6</p><p><b>A = 3/2.</b> 2/3 = 4/6, donc A = 4/6 + 5/6 = 9/6 = 3/2 (on simplifie par 3).</p></div>
<div class="rep"><p class="rq"><b>2.</b> Écriture scientifique de 0,000 72</p><p><b>7,2 × 10<sup>−4</sup>.</b> On place la virgule après le premier chiffre non nul : elle se déplace de 4 rangs vers la droite, donc l'exposant est −4.</p></div>
<div class="rep"><p class="rq"><b>3.</b> B = (10<sup>5</sup> × 10<sup>−2</sup>) ÷ 10<sup>4</sup></p><p><b>B = 10<sup>−1</sup>.</b> 10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>5 + (−2)</sup> = 10<sup>3</sup>, puis 10<sup>3</sup> ÷ 10<sup>4</sup> = 10<sup>3 − 4</sup> = 10<sup>−1</sup>.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Développer (x + 3)(x − 2)</p><p><b>x² + x − 6.</b> Double distributivité : x² − 2x + 3x − 6 = x² + x − 6.</p></div>
<div class="rep"><p class="rq"><b>5.</b> 5x − 7 = 2x + 8</p><p><b>x = 5.</b> 5x − 2x = 8 + 7, soit 3x = 15, donc x = 5. Vérification : 5 × 5 − 7 = 18 et 2 × 5 + 8 = 18.</p></div>
<div class="rep"><p class="rq"><b>6.</b> Image de −4 par f(x) = x² − 3</p><p><b>13.</b> f(−4) = (−4)² − 3 = 16 − 3 = 13.</p><p class="piege"><b>Piège :</b> (−4)² = (−4) × (−4) = +16, et non −16.</p></div>
<div class="rep"><p class="rq"><b>7.</b> Triangle de côtés 4 cm, 5 cm et 6 cm</p><p><b>Non.</b> Le plus long côté mesure 6 cm : 6² = 36, alors que 4² + 5² = 16 + 25 = 41. Comme 36 ≠ 41, le triangle n'est pas rectangle (contraposée du théorème de Pythagore).</p></div>
<div class="rep"><p class="rq"><b>8.</b> 40 € moins 15 %</p><p><b>34 €.</b> 10 % de 40 € = 4 € et 5 % = 2 €, donc 15 % = 6 € ; 40 − 6 = 34. (Ou 40 × 0,85 = 34.)</p></div>
<div class="rep"><p class="rq"><b>9.</b> Angle pour un hexagone régulier</p><p><b>60.</b> Le lutin fait un tour complet (360°) en 6 rotations : 360 ÷ 6 = 60.</p></div>
`
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes",
        html: `
<h4>Exercice 1 – Le lanceur (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Longueur AC.</p>
<p>Le triangle ABC est rectangle en B, donc son hypoténuse est [AC]. D'après le théorème de Pythagore :</p>
<p class="calc">AC² = AB² + BC²<br>AC² = 0,7² + 2,4² = 0,49 + 5,76 = 6,25<br>AC = √6,25 = 2,5</p>
<p><b>La pente du lanceur mesure 2,5 m.</b></p>
<p class="piege"><b>Piège :</b> écrire d'abord « le triangle ABC est rectangle en B », sans quoi le théorème ne s'applique pas. On additionne les carrés, pas les longueurs.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Angle ACB et débutants.</p>
<p>Dans le triangle ABC rectangle en B, pour l'angle ACB, [AB] est le côté opposé et [BC] le côté adjacent.</p>
<p class="calc">tan ACB = AB / BC = 0,7 / 2,4<br>ACB = tan⁻¹(0,7 ÷ 2,4) ≈ 16°</p>
<p><b>L'angle ACB mesure environ 16°. Comme 16° &lt; 20°, ce lanceur convient aux débutants.</b></p>
<p class="valorise"><b>On valorise :</b> cos ACB = BC / AC = 2,4 / 2,5 ou sin ACB = AB / AC = 0,7 / 2,5 donnent aussi environ 16°. Utiliser les données de l'énoncé (AB et BC) évite de dépendre d'un résultat calculé.</p>
<p class="piege"><b>Piège :</b> calculatrice en mode degré (cos 60 doit donner 0,5) ; écrire « ≈ » dès qu'on arrondit.</p></div>
<div class="rep"><p class="rq"><b>3.</b> (Question en gras) (MN) et (AB) parallèles.</p>
<div class="exemple-redige"><p>On sait que le triangle ABC est rectangle en B : la droite (AB) est donc perpendiculaire à la droite (CB). On sait aussi que le montant [MN] est perpendiculaire au sol, donc la droite (MN) est perpendiculaire à la droite (CB).</p>
<p>Or, si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.</p>
<p>Donc les droites (MN) et (AB) sont parallèles.</p></div>
<p class="attendu"><b>On attend :</b> les deux données (deux perpendicularités à la même droite (CB)), la propriété énoncée en entier, puis la conclusion ; des phrases complètes, avec les mots « perpendiculaire », « parallèle » et « droite » employés correctement.</p>
<p class="piege"><b>Piège :</b> « ça se voit sur la figure » n'est pas une justification. La réciproque du théorème de Thalès ne convient pas ici : on ne connaît pas CN.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Hauteur MN.</p>
<p>Les points C, M, B sont alignés, ainsi que les points C, N, A. Les droites (MN) et (AB) sont parallèles (question 3). D'après le théorème de Thalès :</p>
<p class="calc">CM / CB = CN / CA = MN / BA<br>1,8 / 2,4 = CN / 2,5 = MN / 0,7<br>MN = 0,7 × 1,8 ÷ 2,4 = 0,525</p>
<p><b>Le montant mesure 0,525 m, soit 52,5 cm.</b></p>
<p class="piege"><b>Piège :</b> garder le même ordre dans les trois rapports : les côtés du petit triangle CMN en haut, ceux du grand triangle CBA en bas. Penser à convertir en centimètres comme demandé.</p></div>

<h4>Exercice 2 – Programme de calcul (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Avec 5.</p><p class="calc">5 − 3 = 2 ; 5 + 3 = 8 ; 2 × 8 = 16</p><p><b>Avec 5, le programme donne bien 16.</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> Avec −1.</p><p class="calc">−1 − 3 = −4 ; −1 + 3 = 2 ; (−4) × 2 = −8</p><p><b>Avec −1, on obtient −8.</b></p><p class="piege"><b>Piège :</b> règle des signes, (−) × (+) = (−).</p></div>
<div class="rep"><p class="rq"><b>3.</b> Bloc à compléter.</p><p><b>mettre résultat à ( a * b )</b> : en Scratch, la multiplication s'écrit *. On accepte aussi ( ( x - 3 ) * ( x + 3 ) ).</p></div>
<div class="rep"><p class="rq"><b>4.</b> Expression en fonction de x.</p><p>Le premier résultat est x − 3, le second x + 3 ; le résultat du programme est donc (x − 3)(x + 3).</p><p class="calc">(x − 3)(x + 3) = x² + 3x − 3x − 9 = x² − 9</p><p><b>Le résultat du programme est x² − 9.</b> On peut aussi reconnaître (a − b)(a + b) = a² − b².</p></div>
<div class="rep"><p class="rq"><b>5.</b> (Question en gras) L'affirmation de Léa.</p>
<div class="exemple-redige"><p>D'après la question 4, si l'on choisit un nombre x, le résultat du programme est x² − 9, et le carré du nombre de départ est x².</p>
<p>Je calcule la différence entre le carré du nombre de départ et le résultat : x² − (x² − 9) = x² − x² + 9 = 9.</p>
<p>Cette différence est égale à 9 quel que soit le nombre x : elle est toujours strictement positive. Le résultat du programme est donc toujours inférieur de 9 au carré du nombre de départ. <b>Léa a raison.</b></p></div>
<p class="attendu"><b>On attend :</b> un raisonnement avec la lettre x, valable pour tous les nombres, et une conclusion en phrase.</p>
<p class="piege"><b>Piège :</b> tester deux ou trois exemples ne prouve pas une affirmation « quel que soit le nombre » ; un exemple ne sert qu'à prouver qu'une affirmation est fausse (contre-exemple).</p></div>
<div class="rep"><p class="rq"><b>6.</b> Résultat égal à 0.</p><p>On résout (x − 3)(x + 3) = 0. Un produit est nul si et seulement si l'un au moins de ses facteurs est nul :</p><p class="calc">x − 3 = 0 ou x + 3 = 0<br>x = 3 ou x = −3</p><p><b>Il faut choisir 3 ou −3.</b></p><p class="piege"><b>Piège :</b> ne pas oublier la solution négative.</p></div>
<div class="rep"><p class="rq"><b>7.</b> Résultat égal à 40.</p><p class="calc">x² − 9 = 40<br>x² − 49 = 0<br>(x − 7)(x + 7) = 0<br>x = 7 ou x = −7</p><p>Le nombre cherché est positif. Vérification : (7 − 3) × (7 + 3) = 4 × 10 = 40. <b>Il faut choisir 7.</b></p><p class="valorise"><b>On valorise :</b> une recherche par essais (6 donne 27, 7 donne 40), à condition de vérifier le résultat.</p></div>

<h4>Exercice 3 – Les tarifs du skatepark (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Prix de 12 séances.</p><p class="calc">Tarif A : 12 × 4 = 48<br>Tarif B : 30 + 12 × 2,5 = 30 + 30 = 60</p><p><b>12 séances coûtent 48 € avec le tarif A et 60 € avec le tarif B.</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> Image de 16 par g.</p><p class="calc">g(16) = 30 + 2,5 × 16 = 30 + 40 = 70</p><p><b>L'image de 16 par g est 70 : avec le tarif B, 16 séances coûtent 70 €.</b></p></div>
<div class="rep"><p class="rq"><b>3.</b> Droites et fonctions.</p><p><b>(d<sub>1</sub>) représente g et (d<sub>2</sub>) représente f.</b> (Pour comprendre : (d<sub>2</sub>) passe par l'origine, car 0 séance coûte 0 € avec le tarif A ; (d<sub>1</sub>) commence à 30 €, le prix de la carte.)</p></div>
<div class="rep"><p class="rq"><b>4.</b> Tarif B proportionnel ?</p><p class="calc">g(12) = 60 et g(24) = 30 + 2,5 × 24 = 90<br>60 ÷ 12 = 5 et 90 ÷ 24 = 3,75</p><p>Les quotients prix ÷ nombre de séances ne sont pas égaux : quand le nombre de séances double, le prix ne double pas. On peut aussi dire que (d<sub>1</sub>) est une droite qui ne passe pas par l'origine du repère. <b>Le prix payé avec le tarif B n'est pas proportionnel au nombre de séances.</b></p></div>
<div class="rep"><p class="rq"><b>5. a)</b> Lecture graphique.</p><p>Les deux droites se coupent au point d'abscisse 20 et d'ordonnée 80. <b>Les deux tarifs coûtent le même prix pour 20 séances (80 €).</b></p></div>
<div class="rep"><p class="rq"><b>5. b)</b> Par le calcul.</p><p class="calc">4x = 30 + 2,5x<br>4x − 2,5x = 30<br>1,5x = 30<br>x = 30 ÷ 1,5 = 20</p><p>Vérification : f(20) = 80 et g(20) = 30 + 50 = 80. <b>On retrouve 20 séances.</b></p></div>
<div class="rep"><p class="rq"><b>6.</b> Pourcentage d'économie de Tom.</p><p class="calc">Tarif A : 36 × 4 = 144 €<br>Tarif B : 30 + 36 × 2,5 = 30 + 90 = 120 €<br>Économie : 144 − 120 = 24 €<br>24 ÷ 144 × 100 ≈ 16,7</p><p><b>Tom a réalisé une économie d'environ 16,7 % par rapport au tarif A.</b></p><p class="piege"><b>Piège :</b> on divise par le prix de référence, celui du tarif A (144 €). Diviser par 120 € donnerait 20 %, ce qui est faux.</p></div>
<p class="bareme">Rédaction (2 points) : calculs posés, propriétés citées, phrases réponses avec unités ; la maîtrise de la langue est plus particulièrement évaluée sur les questions en gras (exercice 1 question 3, exercice 2 question 5).</p>
`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Partie 1 : 20 minutes, 9 questions.</b> Environ 2 minutes par question, sans calculatrice. Écrire seulement le numéro et la réponse ; une question qui bloque est laissée de côté et reprise à la fin.</li>
<li><b>Partie 2 : répartir 1 h 40.</b> Trois exercices de 4 points : environ 30 minutes chacun, et 10 minutes pour relire (unités, phrases réponses, questions oubliées). Commencer par l'exercice le plus sûr : ils sont indépendants.</li>
<li><b>Pythagore et trigonométrie (exercice 1).</b> Toujours commencer par la donnée « Le triangle ABC est rectangle en B », puis citer le théorème : « D'après le théorème de Pythagore, AC² = AB² + BC². » En trigonométrie, nommer le côté opposé et le côté adjacent, écrire la formule avec les lettres, puis tan⁻¹ en mode degré et arrondir au degré avec « ≈ ».</li>
<li><b>Question en gras sur le parallélisme.</b> Rédiger en trois temps : « On sait que… », « Or, si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles », « Donc… ». Des phrases complètes et le vocabulaire exact (perpendiculaire, parallèle, droite) : c'est là que la langue est évaluée.</li>
<li><b>Thalès.</b> Écrire les hypothèses (alignements et droites parallèles, en citant la question 3), les trois rapports dans le même ordre, puis le produit en croix. Réponse avec l'unité demandée (ici en cm).</li>
<li><b>Programme de calcul.</b> Pour une affirmation « quel que soit le nombre », travailler avec x : développer, réduire, comparer. Pour « obtenir 0 », écrire la phrase de l'équation produit nul et donner les deux solutions.</li>
<li><b>Lecture graphique et pourcentage.</b> Décrire la lecture (« les deux droites se coupent au point d'abscisse 20 »). Pour un pourcentage d'économie, diviser l'économie par le prix de référence, puis arrondir au dixième comme demandé.</li>
<li><b>Trace de recherche.</b> Même bloqué, écrire un essai chiffré ou un début de calcul : les démarches engagées comptent. Un résultat donné par l'énoncé (« montrer que… x² − 9 ») peut être réutilisé dans la suite.</li>
</ol>
<p class="tip">Avant de rendre : chaque réponse a-t-elle un calcul posé, un résultat, une unité et une phrase ? Les deux questions en gras sont-elles rédigées en phrases complètes ?</p>`
  },

  /* =====================================================================
     SUJET 2 — Une journée au parc
     ===================================================================== */
  {
    id: 'ex-maths-2',
    matiere: 'maths',
    numero: 2,
    titre: "Une journée au parc",
    epreuve: "MATHÉMATIQUES",
    duree: "2 h 00",
    points: 20,
    pointsRedaction: 2,
    cours: ['ma-ch1', 'ma-ch2', 'ma-ch3', 'ma-ch4', 'ma-ch5', 'ma-ch6', 'ma-ch7'],
    methodes: ['ma-m1', 'ma-m2'],
    garde: GARDE_MATHS,
    parties: [
      {
        titre: "Partie 1 – Automatismes et applications directes – 20 minutes",
        points: 6,
        html: CONSIGNE_P1 + `
<p class="q"><b>Question 1.</b> Calculer A = 3/4 × 8/9. Donner le résultat sous la forme d'une fraction irréductible.</p>
<p class="q"><b>Question 2.</b> Donner l'écriture décimale du nombre 3,4 × 10<sup>−2</sup>.</p>
<p class="q"><b>Question 3.</b> Calculer B = (−2)³ + 3².</p>
<p class="q"><b>Question 4.</b> Factoriser l'expression x² − 49.</p>
<p class="q"><b>Question 5.</b> Résoudre l'équation 4(x − 2) = 12.</p>
<p class="q"><b>Question 6.</b> Voici un tableau de valeurs d'une fonction g. Quels sont les antécédents de −2 par la fonction g ?</p>
<table class="tab">
<tr><th>x</th><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>g(x)</th><td>6</td><td>1</td><td>−2</td><td>−3</td><td>−2</td><td>1</td><td>6</td></tr>
</table>
<p class="q"><b>Question 7.</b> Le triangle EFG est rectangle en E. On donne EF = 5 cm et FG = 13 cm. Calculer EG.</p>
<p class="q"><b>Question 8.</b> Un cycliste parcourt 30 km en 1 h 30 min. Quelle est sa vitesse moyenne en km/h ?</p>
<p class="q"><b>Question 9.</b> Noé et Inès se partagent 40 € dans le ratio 3 : 5. Quelle somme reçoit chacun ?</p>
` + FIN_P1
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes – 1 h 40",
        points: 12,
        html: CONSIGNE_P2 + `
<h4>Exercice 1 (3 points)</h4>
<p>Le plan ci-dessous représente un parc municipal de forme triangulaire, bordé par une rivière le long du côté [BC]. Une allée [MN] traverse le parc.</p>
<ul>
<li>Les points A, P, M et B sont alignés dans cet ordre ; les points A, R, N et C sont alignés dans cet ordre.</li>
<li>AM = 54 m ; AB = 90 m ; AN = 48 m ; AC = 80 m ; BC = 110 m.</li>
</ul>
<svg class="fig-ex" viewBox="0 0 360 258" role="img" aria-label="Plan du parc : triangle ABC, allées MN et PR, rivière le long de BC"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="203.9,24.8 22,212 341,212 203.9,24.8"/><line x1="94.8" y1="137.1" x2="286.2" y2="137.1"/><line x1="131.1" y1="99.7" x2="255.3" y2="95" stroke-dasharray="6 5"/><path d="M22,222 Q27,228 32,222 Q37,228 42,222 Q47,228 52,222 Q57,228 62,222 Q67,228 72,222 Q77,228 82,222 Q87,228 92,222 Q97,228 102,222 Q107,228 112,222 Q117,228 122,222 Q127,228 132,222 Q137,228 142,222 Q147,228 152,222 Q157,228 162,222 Q167,228 172,222 Q177,228 182,222 Q187,228 192,222 Q197,228 202,222 Q207,228 212,222 Q217,228 222,222 Q227,228 232,222 Q237,228 242,222 Q247,228 252,222 Q257,228 262,222 Q267,228 272,222 Q277,228 282,222 Q287,228 292,222 Q297,228 302,222 Q307,228 312,222 Q317,228 322,222 Q327,228 332,222 Q337,228 342,222" stroke-width="1.2"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="198.9" y="16.8" text-anchor="middle">A</text><text x="16" y="214" text-anchor="end">B</text><text x="347" y="214">C</text><text x="87.8" y="141.1" text-anchor="end">M</text><text x="293.2" y="141.1">N</text><text x="124.1" y="103.7" text-anchor="end">P</text><text x="262.3" y="99">R</text><text x="181.5" y="248" text-anchor="middle" font-size="14">rivière</text></g></svg>
<p><i>La figure n'est pas à l'échelle.</i></p>
<p class="q gras"><b>1.</b> Montrer que les droites (MN) et (BC) sont parallèles, c'est-à-dire que l'allée [MN] est parallèle à la rivière. Détailler la démarche en citant précisément la propriété utilisée. <span class="pts">(1 point)</span></p>
<p class="q"><b>2.</b> Calculer la longueur de l'allée [MN]. <span class="pts">(1 point)</span></p>
<p class="q"><b>3.</b> La mairie envisage de créer une seconde allée [PR], en pointillés sur le plan, avec AP = 36 m et AR = 30 m. Le jardinier affirme : « Sur le plan, cette allée a l'air parallèle à la rivière, donc elle l'est. » A-t-il raison ? Justifier. <span class="pts">(1 point)</span></p>

<h4>Exercice 2 (3 points)</h4>
<p>Au parc, Noé frappe dans un ballon posé sur le sol. On note t le temps écoulé, en secondes, depuis la frappe. On admet que la hauteur du ballon, en mètres, est donnée par la fonction h définie par h(t) = −5t² + 10t, pour t compris entre 0 et 2.</p>
<p>La courbe représentative de la fonction h est donnée ci-dessous.</p>
<svg class="fig-ex" viewBox="0 0 360 286" role="img" aria-label="Courbe représentative de la fonction h : hauteur du ballon en fonction du temps"><g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25"><line x1="52" y1="246" x2="52" y2="26"/><line x1="66" y1="246" x2="66" y2="26"/><line x1="80" y1="246" x2="80" y2="26"/><line x1="94" y1="246" x2="94" y2="26"/><line x1="108" y1="246" x2="108" y2="26"/><line x1="122" y1="246" x2="122" y2="26"/><line x1="136" y1="246" x2="136" y2="26"/><line x1="150" y1="246" x2="150" y2="26"/><line x1="164" y1="246" x2="164" y2="26"/><line x1="178" y1="246" x2="178" y2="26"/><line x1="192" y1="246" x2="192" y2="26"/><line x1="206" y1="246" x2="206" y2="26"/><line x1="220" y1="246" x2="220" y2="26"/><line x1="234" y1="246" x2="234" y2="26"/><line x1="248" y1="246" x2="248" y2="26"/><line x1="262" y1="246" x2="262" y2="26"/><line x1="276" y1="246" x2="276" y2="26"/><line x1="290" y1="246" x2="290" y2="26"/><line x1="304" y1="246" x2="304" y2="26"/><line x1="318" y1="246" x2="318" y2="26"/><line x1="332" y1="246" x2="332" y2="26"/><line x1="52" y1="246" x2="332" y2="246"/><line x1="52" y1="236" x2="332" y2="236"/><line x1="52" y1="226" x2="332" y2="226"/><line x1="52" y1="216" x2="332" y2="216"/><line x1="52" y1="206" x2="332" y2="206"/><line x1="52" y1="196" x2="332" y2="196"/><line x1="52" y1="186" x2="332" y2="186"/><line x1="52" y1="176" x2="332" y2="176"/><line x1="52" y1="166" x2="332" y2="166"/><line x1="52" y1="156" x2="332" y2="156"/><line x1="52" y1="146" x2="332" y2="146"/><line x1="52" y1="136" x2="332" y2="136"/><line x1="52" y1="126" x2="332" y2="126"/><line x1="52" y1="116" x2="332" y2="116"/><line x1="52" y1="106" x2="332" y2="106"/><line x1="52" y1="96" x2="332" y2="96"/><line x1="52" y1="86" x2="332" y2="86"/><line x1="52" y1="76" x2="332" y2="76"/><line x1="52" y1="66" x2="332" y2="66"/><line x1="52" y1="56" x2="332" y2="56"/><line x1="52" y1="46" x2="332" y2="46"/><line x1="52" y1="36" x2="332" y2="36"/><line x1="52" y1="26" x2="332" y2="26"/></g><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="52" y1="246" x2="346" y2="246"/><line x1="52" y1="246" x2="52" y2="12"/><polyline points="340,242 346,246 340,250"/><polyline points="48,18 52,12 56,18"/></g><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="52,246 55.5,236.1 59,226.5 62.5,217.1 66,208 69.5,199.1 73,190.5 76.5,182.1 80,174 83.5,166.1 87,158.5 90.5,151.1 94,144 97.5,137.1 101,130.5 104.5,124.1 108,118 111.5,112.1 115,106.5 118.5,101.1 122,96 125.5,91.1 129,86.5 132.5,82.1 136,78 139.5,74.1 143,70.5 146.5,67.1 150,64 153.5,61.1 157,58.5 160.5,56.1 164,54 167.5,52.1 171,50.5 174.5,49.1 178,48 181.5,47.1 185,46.5 188.5,46.1 192,46 195.5,46.1 199,46.5 202.5,47.1 206,48 209.5,49.1 213,50.5 216.5,52.1 220,54 223.5,56.1 227,58.5 230.5,61.1 234,64 237.5,67.1 241,70.5 244.5,74.1 248,78 251.5,82.1 255,86.5 258.5,91.1 262,96 265.5,101.1 269,106.5 272.5,112.1 276,118 279.5,124.1 283,130.5 286.5,137.1 290,144 293.5,151.1 297,158.5 300.5,166.1 304,174 307.5,182.1 311,190.5 314.5,199.1 318,208 321.5,217.1 325,226.5 328.5,236.1 332,246"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="52" y="264" text-anchor="middle" font-size="13">0</text><text x="122" y="264" text-anchor="middle" font-size="13">0,5</text><text x="192" y="264" text-anchor="middle" font-size="13">1</text><text x="262" y="264" text-anchor="middle" font-size="13">1,5</text><text x="332" y="264" text-anchor="middle" font-size="13">2</text><text x="45" y="251" text-anchor="end" font-size="13">0</text><text x="45" y="211" text-anchor="end" font-size="13">1</text><text x="45" y="171" text-anchor="end" font-size="13">2</text><text x="45" y="131" text-anchor="end" font-size="13">3</text><text x="45" y="91" text-anchor="end" font-size="13">4</text><text x="45" y="51" text-anchor="end" font-size="13">5</text><text x="62" y="14" font-size="14">Hauteur (en m)</text><text x="344" y="282" text-anchor="end" font-size="14">Temps (en s)</text></g></svg>
<p class="q"><b>1.</b> Calculer h(0,5). Interpréter ce résultat dans le contexte de l'exercice. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>2.</b> Répondre aux questions suivantes par lecture graphique.</p>
<p class="q sous"><b>a)</b> Quelle est la hauteur maximale atteinte par le ballon ? À quel instant est-elle atteinte ? <span class="pts">(0,5 point)</span></p>
<p class="q sous"><b>b)</b> Lire les antécédents de 3,75 par la fonction h. En déduire pendant combien de temps le ballon se trouve à une hauteur supérieure ou égale à 3,75 m. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>3.</b> Le point K de coordonnées (1,2 ; 4,8) appartient-il à la courbe représentative de la fonction h ? Justifier par un calcul. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>4.</b> On cherche à quels instants le ballon est au sol.</p>
<p class="q sous"><b>a)</b> Montrer que, pour tout nombre t, h(t) = 5t(2 − t). <span class="pts">(0,5 point)</span></p>
<p class="q sous"><b>b)</b> Résoudre l'équation 5t(2 − t) = 0, puis interpréter les solutions dans le contexte de l'exercice. <span class="pts">(0,5 point)</span></p>

<h4>Exercice 3 (3 points)</h4>
<p>Après un match de football, Noé se demande combien de fois son cœur bat. Dans cet exercice, on admet que :</p>
<ul>
<li>au repos, le cœur d'un adulte bat en moyenne 70 fois par minute ;</li>
<li>à chaque battement, le cœur éjecte environ 70 mL de sang.</li>
</ul>
<p class="q"><b>1.</b> Montrer qu'au repos, le cœur bat 100 800 fois en une journée. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>2.</b> Combien de fois le cœur bat-il au repos en 80 ans ? On comptera 365 jours par an. Donner le résultat en écriture scientifique. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>3.</b> Une piscine hors-sol contient 5 m³ d'eau. En une journée, le cœur au repos éjecte-t-il un volume de sang plus grand que le volume d'eau de cette piscine ? On rappelle que 1 m³ = 1 000 L. <span class="pts">(1 point)</span></p>
<p class="q"><b>4.</b> Pendant le match, le rythme cardiaque de Noé est passé de 70 à 154 battements par minute. Calculer le pourcentage d'augmentation de son rythme cardiaque. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>5.</b> Un globule rouge a un diamètre d'environ 7 µm, c'est-à-dire 7 × 10<sup>−6</sup> m. On admet que le sang d'un adulte contient environ 2,5 × 10<sup>13</sup> globules rouges. Si on les alignait les uns contre les autres, quelle longueur obtiendrait-on, en kilomètres ? Est-ce plus ou moins que le tour de la Terre, qui mesure environ 40 000 km ? <span class="pts">(0,5 point)</span></p>

<h4>Exercice 4 (3 points)</h4>
<p>Pour le panneau d'entrée du parc, Inès programme une frise avec le logiciel Scratch. L'instruction « s'orienter à 90 » oriente le lutin vers la droite ; l'instruction « tourner ↺ » le fait tourner vers sa gauche, dans le sens inverse des aiguilles d'une montre.</p>
<div class="doc"><p class="doc-titre">Script principal</p>
<div class="scratch">
<div class="sb ev">quand le drapeau vert est cliqué</div>
<div class="sb pen">effacer tout</div>
<div class="sb mv">aller à x: ( -150 ) y: ( 0 )</div>
<div class="sb mv">s'orienter à ( 90 )</div>
<div class="sb pen">stylo en position d'écriture</div>
<div class="sb ctl">répéter ( 4 ) fois<div class="sb-c">
<div class="sb perso">triangle</div>
<div class="sb mv">avancer de ( 60 ) pas</div>
</div></div>
</div></div>
<div class="doc"><p class="doc-titre">Bloc « triangle »</p>
<div class="scratch">
<div class="sb perso">définir triangle</div>
<div class="sb ctl">répéter ( 3 ) fois<div class="sb-c">
<div class="sb mv">avancer de ( 40 ) pas</div>
<div class="sb mv">tourner ↺ de ( … ) degrés</div>
</div></div>
</div></div>
<p class="q"><b>1.</b> Par quelle valeur faut-il remplacer les pointillés dans le bloc « triangle » pour que le lutin trace un triangle équilatéral ? Aucune justification n'est attendue. <span class="pts">(0,5 point)</span></p>
<p class="q gras"><b>2.</b> Expliquer clairement pourquoi le lutin doit tourner de cet angle et non de 60°, en utilisant un vocabulaire mathématique précis. <span class="pts">(1 point)</span></p>
<p class="q"><b>3.</b> Parmi les trois figures ci-dessous, laquelle obtient-on en cliquant sur le drapeau vert ? Aucune justification n'est attendue. <span class="pts">(0,5 point)</span></p>
<svg class="fig-ex" viewBox="0 0 360 250" role="img" aria-label="Trois figures proposées : frises de quatre triangles équilatéraux"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="50,62 94,62 72,23.9 50,62"/><polyline points="94,62 138,62 116,23.9 94,62"/><polyline points="138,62 182,62 160,23.9 138,62"/><polyline points="182,62 226,62 204,23.9 182,62"/><line x1="50" y1="62" x2="226" y2="62"/></g><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="50,148 94,148 72,109.9 50,148"/><polyline points="116,148 160,148 138,109.9 116,148"/><polyline points="182,148 226,148 204,109.9 182,148"/><polyline points="248,148 292,148 270,109.9 248,148"/><line x1="50" y1="148" x2="314" y2="148"/></g><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="50,186 94,186 72,224.1 50,186"/><polyline points="116,186 160,186 138,224.1 116,186"/><polyline points="182,186 226,186 204,224.1 182,186"/><polyline points="248,186 292,186 270,224.1 248,186"/><line x1="50" y1="186" x2="314" y2="186"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="4" y="20" font-size="14">Figure 1</text><text x="4" y="106" font-size="14">Figure 2</text><text x="4" y="180" font-size="14">Figure 3</text></g></svg>
<p class="q"><b>4.</b> Quelle distance, en pas, le lutin parcourt-il au total pendant l'exécution du programme ? <span class="pts">(0,5 point)</span></p>
<p class="q"><b>5.</b> Quelles sont les coordonnées du lutin à la fin du programme ? <span class="pts">(0,5 point)</span></p>
`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "Partie 1 – Automatismes et applications directes",
        html: BAREME_P1 + `
<div class="rep"><p class="rq"><b>1.</b> A = 3/4 × 8/9</p><p><b>A = 2/3.</b> (3 × 8)/(4 × 9) = 24/36 = 2/3 (on simplifie par 12, ou on simplifie avant de multiplier).</p></div>
<div class="rep"><p class="rq"><b>2.</b> 3,4 × 10<sup>−2</sup></p><p><b>0,034.</b> Multiplier par 10<sup>−2</sup>, c'est décaler la virgule de 2 rangs vers la gauche.</p></div>
<div class="rep"><p class="rq"><b>3.</b> B = (−2)³ + 3²</p><p><b>B = 1.</b> (−2)³ = −8 (puissance impaire d'un nombre négatif) et 3² = 9, donc B = −8 + 9 = 1.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Factoriser x² − 49</p><p><b>(x − 7)(x + 7).</b> x² − 49 = x² − 7², de la forme a² − b² = (a − b)(a + b).</p></div>
<div class="rep"><p class="rq"><b>5.</b> 4(x − 2) = 12</p><p><b>x = 5.</b> 4x − 8 = 12, donc 4x = 20 et x = 5 (ou bien x − 2 = 3).</p></div>
<div class="rep"><p class="rq"><b>6.</b> Antécédents de −2 par g</p><p><b>1 et 3.</b> On cherche −2 dans la ligne g(x) et on lit les valeurs de x correspondantes.</p></div>
<div class="rep"><p class="rq"><b>7.</b> EG dans EFG rectangle en E</p><p><b>EG = 12 cm.</b> L'hypoténuse est [FG] : EG² = FG² − EF² = 169 − 25 = 144, donc EG = √144 = 12.</p></div>
<div class="rep"><p class="rq"><b>8.</b> 30 km en 1 h 30 min</p><p><b>20 km/h.</b> 1 h 30 min = 1,5 h et 30 ÷ 1,5 = 20.</p><p class="piege"><b>Piège :</b> 1 h 30 min ne s'écrit pas 1,30 h.</p></div>
<div class="rep"><p class="rq"><b>9.</b> 40 € dans le ratio 3 : 5</p><p><b>Noé reçoit 15 € et Inès 25 €.</b> 3 + 5 = 8 parts ; une part vaut 40 ÷ 8 = 5 € ; Noé reçoit 3 × 5 = 15 € et Inès 5 × 5 = 25 €.</p><p class="piege"><b>Piège :</b> le ratio 3 : 5 ne signifie pas que Noé reçoit les 3/5 de la somme : il y a 3 + 5 = 8 parts, donc Noé en reçoit les 3/8. Vérifier que 15 + 25 = 40.</p></div>
`
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes",
        html: `
<h4>Exercice 1 – Les allées du parc (3 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> (Question en gras) (MN) parallèle à (BC).</p>
<div class="exemple-redige"><p>D'une part, AM / AB = 54 / 90 = 3 / 5 (en simplifiant par 18).</p>
<p>D'autre part, AN / AC = 48 / 80 = 3 / 5 (en simplifiant par 16).</p>
<p>On constate que AM / AB = AN / AC. De plus, les points A, M, B d'une part et les points A, N, C d'autre part sont alignés dans le même ordre.</p>
<p>Donc, d'après la réciproque du théorème de Thalès, les droites (MN) et (BC) sont parallèles : l'allée est parallèle à la rivière.</p></div>
<p class="attendu"><b>On attend :</b> les deux rapports calculés séparément avec des valeurs exactes, la condition « alignés dans le même ordre », le nom exact de la propriété (« réciproque du théorème de Thalès ») et une conclusion qui répond à la question.</p>
<p class="piege"><b>Piège :</b> écrire AM / AB = AN / AC avant de l'avoir vérifié, ou citer le théorème de Thalès au lieu de sa réciproque : le théorème suppose le parallélisme, la réciproque le démontre.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Longueur MN.</p>
<p>Les points A, M, B sont alignés, ainsi que les points A, N, C, et les droites (MN) et (BC) sont parallèles (question 1). D'après le théorème de Thalès :</p>
<p class="calc">AM / AB = AN / AC = MN / BC<br>54 / 90 = 48 / 80 = MN / 110<br>MN = 110 × 54 ÷ 90 = 66</p>
<p><b>L'allée [MN] mesure 66 m.</b></p></div>
<div class="rep"><p class="rq"><b>3.</b> L'allée [PR].</p>
<p class="calc">D'une part : AP / AB = 36 / 90 = 2 / 5 = 16 / 40<br>D'autre part : AR / AC = 30 / 80 = 3 / 8 = 15 / 40</p>
<p>On constate que AP / AB ≠ AR / AC. Donc, d'après la contraposée du théorème de Thalès, les droites (PR) et (BC) ne sont pas parallèles. <b>Le jardinier a tort : l'allée [PR] ne serait pas parallèle à la rivière.</b></p>
<p class="piege"><b>Piège :</b> 0,4 et 0,375 sont proches et la figure peut tromper. On ne conclut jamais d'après l'aspect de la figure ni avec des valeurs arrondies : on compare des fractions exactes, ici mises au même dénominateur.</p></div>

<h4>Exercice 2 – Le ballon de Noé (3 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> h(0,5).</p><p class="calc">h(0,5) = −5 × 0,5² + 10 × 0,5 = −5 × 0,25 + 5 = −1,25 + 5 = 3,75</p><p><b>0,5 seconde après la frappe, le ballon est à 3,75 m de hauteur.</b></p><p class="piege"><b>Piège :</b> priorités opératoires, le carré se calcule avant la multiplication par −5.</p></div>
<div class="rep"><p class="rq"><b>2. a)</b> Hauteur maximale.</p><p>Le point le plus haut de la courbe a pour coordonnées (1 ; 5). <b>Le ballon atteint une hauteur maximale de 5 m, 1 seconde après la frappe.</b></p></div>
<div class="rep"><p class="rq"><b>2. b)</b> Antécédents de 3,75.</p><p>On place 3,75 sur l'axe des ordonnées et on lit les abscisses des points de la courbe qui ont cette ordonnée : <b>les antécédents de 3,75 sont 0,5 et 1,5.</b> Le ballon est à 3,75 m ou plus entre 0,5 s et 1,5 s, <b>soit pendant 1 seconde.</b></p></div>
<div class="rep"><p class="rq"><b>3.</b> Le point K(1,2 ; 4,8).</p><p class="calc">h(1,2) = −5 × 1,2² + 10 × 1,2 = −7,2 + 12 = 4,8</p><p>L'image de 1,2 est bien 4,8, l'ordonnée de K. <b>Le point K appartient à la courbe de h.</b></p></div>
<div class="rep"><p class="rq"><b>4. a)</b> Forme factorisée.</p><p class="calc">5t(2 − t) = 5t × 2 − 5t × t = 10t − 5t² = −5t² + 10t = h(t)</p><p><b>Pour tout nombre t, h(t) = 5t(2 − t).</b></p></div>
<div class="rep"><p class="rq"><b>4. b)</b> Équation produit nul.</p><p>Un produit est nul si et seulement si l'un au moins de ses facteurs est nul :</p><p class="calc">5t = 0 ou 2 − t = 0<br>t = 0 ou t = 2</p><p><b>Le ballon est au sol au moment de la frappe (t = 0) et il retombe au sol 2 secondes après la frappe (t = 2).</b></p></div>

<h4>Exercice 3 – Le cœur (3 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Battements en une journée.</p><p class="calc">70 × 60 = 4 200 battements par heure<br>4 200 × 24 = 100 800 battements par jour</p><p><b>Au repos, le cœur bat 100 800 fois par jour.</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> Battements en 80 ans.</p><p class="calc">100 800 × 365 × 80 = 2 943 360 000 = 2,943 36 × 10<sup>9</sup></p><p><b>En 80 ans, le cœur bat environ 2,943 36 × 10<sup>9</sup> fois, soit près de 3 milliards de fois.</b></p><p class="piege"><b>Piège :</b> l'écriture scientifique n'a qu'un seul chiffre non nul avant la virgule ; 29,433 6 × 10<sup>8</sup> n'est pas une écriture scientifique.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Sang éjecté en un jour et piscine.</p><p class="calc">100 800 × 70 = 7 056 000 mL = 7 056 L<br>5 m³ = 5 × 1 000 L = 5 000 L</p><p><b>Oui : en une journée, le cœur au repos éjecte environ 7 056 L de sang, plus que les 5 000 L de la piscine.</b></p><p class="piege"><b>Piège :</b> comparer dans la même unité (1 L = 1 000 mL et 1 m³ = 1 000 L).</p></div>
<div class="rep"><p class="rq"><b>4.</b> Pourcentage d'augmentation.</p><p class="calc">(154 − 70) ÷ 70 = 84 ÷ 70 = 1,2<br>1,2 × 100 = 120</p><p><b>Le rythme cardiaque de Noé a augmenté de 120 %.</b></p><p class="piege"><b>Piège :</b> on divise par la valeur de départ (70), pas par la valeur d'arrivée. Le coefficient multiplicateur est 154 ÷ 70 = 2,2 = 1 + 1,2.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Globules rouges alignés.</p><p class="calc">2,5 × 10<sup>13</sup> × 7 × 10<sup>−6</sup> = (2,5 × 7) × 10<sup>13 + (−6)</sup> = 17,5 × 10<sup>7</sup> = 1,75 × 10<sup>8</sup> m<br>1,75 × 10<sup>8</sup> m = 175 000 000 m = 175 000 km<br>175 000 ÷ 40 000 ≈ 4,4</p><p><b>On obtiendrait environ 175 000 km : c'est plus que le tour de la Terre, plus de 4 fois.</b></p></div>

<h4>Exercice 4 – La frise Scratch (3 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Valeur à écrire.</p><p><b>120.</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> (Question en gras) Pourquoi 120° et non 60° ?</p>
<div class="exemple-redige"><p>Pour tracer un polygone régulier, le lutin revient à son point de départ dans sa direction initiale : au total, il a fait un tour complet, c'est-à-dire qu'il a tourné de 360°. Un triangle a trois sommets, donc à chaque sommet il tourne de 360° ÷ 3 = 120°.</p>
<p>Cet angle de rotation est l'angle extérieur du triangle, et non l'angle intérieur. Les angles intérieurs d'un triangle équilatéral mesurent 60° ; l'angle dont tourne le lutin est leur supplémentaire : 180° − 60° = 120°.</p>
<p>S'il tournait de 60°, le lutin n'aurait tourné que de 3 × 60° = 180° : il ne reviendrait pas à son point de départ et tracerait la moitié d'un hexagone régulier.</p></div>
<p class="attendu"><b>On attend :</b> le tour complet de 360° partagé entre 3 sommets, et la distinction entre angle intérieur et angle extérieur (ou angle de rotation), en phrases complètes.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Figure obtenue.</p><p><b>Figure 2.</b> (Pour comprendre : après chaque triangle de côté 40 pas, le lutin avance de 60 pas : il reste un écart de 20 pas entre deux triangles, ce qui écarte la figure 1. Il tourne vers sa gauche alors qu'il regarde vers la droite, donc les triangles sont au-dessus de la ligne, ce qui écarte la figure 3.)</p></div>
<div class="rep"><p class="rq"><b>4.</b> Distance parcourue.</p><p class="calc">Pour un motif : 3 × 40 + 60 = 180 pas<br>Pour 4 motifs : 4 × 180 = 720 pas</p><p><b>Le lutin parcourt 720 pas.</b></p><p class="piege"><b>Piège :</b> le lutin repasse sur la base de chaque triangle ; la distance parcourue n'est pas la longueur du trait visible.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Coordonnées finales.</p><p>Le lutin part de (−150 ; 0). Après chaque triangle, il est revenu à son point de départ, orienté vers la droite, puis il avance de 60 pas : son abscisse augmente de 60 à chaque motif.</p><p class="calc">x = −150 + 4 × 60 = 90 ; y = 0</p><p><b>À la fin, le lutin est au point de coordonnées (90 ; 0).</b></p></div>
<p class="bareme">Rédaction (2 points) : calculs posés, propriétés citées, phrases réponses avec unités ; la maîtrise de la langue est plus particulièrement évaluée sur les questions en gras (exercice 1 question 1, exercice 4 question 2).</p>
`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Partie 1 : 20 minutes, 9 questions.</b> Répondre directement sur la copie, sans calculatrice. Pour la question 7, repérer d'abord l'hypoténuse (le côté opposé à l'angle droit) : on soustrait les carrés.</li>
<li><b>Partie 2 : quatre exercices de 3 points.</b> Compter environ 22 minutes par exercice et garder 10 minutes de relecture. Lire tout le sujet avant de commencer et traiter d'abord l'exercice le plus sûr.</li>
<li><b>Réciproque de Thalès (question en gras).</b> « D'une part… D'autre part… On constate que… De plus, les points … sont alignés dans le même ordre. Donc, d'après la réciproque du théorème de Thalès… ». Les rapports se comparent en fractions exactes, simplifiées ou mises au même dénominateur.</li>
<li><b>Contraposée.</b> Quand les rapports sont différents, conclure « d'après la contraposée du théorème de Thalès, les droites ne sont pas parallèles ». Ne jamais se fier à l'aspect de la figure.</li>
<li><b>Fonctions.</b> Une image se calcule en remplaçant t par le nombre ; un antécédent se lit sur l'axe des abscisses en partant de l'axe des ordonnées. Toujours interpréter dans le contexte : « 0,5 s après la frappe, le ballon est à 3,75 m ».</li>
<li><b>Puissances et unités.</b> Poser les produits de puissances de 10 (on additionne les exposants), donner l'écriture scientifique avec un seul chiffre non nul avant la virgule, et convertir avant de comparer (mL, L, m³ ; m et km).</li>
<li><b>Scratch.</b> Suivre le lutin bloc par bloc (position, orientation, stylo). Pour la question en gras, expliquer avec les mots « tour complet », « 360° », « angle extérieur », « angle intérieur ».</li>
<li><b>Trace de recherche.</b> Une question bloquante n'empêche pas la suivante : la question 2 de l'exercice 1 peut se traiter en admettant le parallélisme. Écrire les essais engagés : ils sont pris en compte.</li>
</ol>
<p class="tip">Pour un pourcentage d'évolution, toujours diviser par la valeur de départ : (valeur finale − valeur initiale) ÷ valeur initiale × 100.</p>`
  },

  /* =====================================================================
     SUJET 3 — Échelle, pelouse et randonnée
     ===================================================================== */
  {
    id: 'ex-maths-3',
    matiere: 'maths',
    numero: 3,
    titre: "Échelle, pelouse et randonnée",
    epreuve: "MATHÉMATIQUES",
    duree: "2 h 00",
    points: 20,
    pointsRedaction: 2,
    cours: ['ma-ch1', 'ma-ch2', 'ma-ch3', 'ma-ch4', 'ma-ch5', 'ma-ch6'],
    methodes: ['ma-m1', 'ma-m2'],
    garde: GARDE_MATHS,
    parties: [
      {
        titre: "Partie 1 – Automatismes et applications directes – 20 minutes",
        points: 6,
        html: CONSIGNE_P1 + `
<p class="q"><b>Question 1.</b> Calculer A = 7/4 − 3/4 × 2/3. Donner le résultat sous la forme d'une fraction irréductible.</p>
<p class="q"><b>Question 2.</b> Donner l'écriture scientifique du nombre 52 000 000.</p>
<p class="q"><b>Question 3.</b> Développer l'expression 3x(2x − 5).</p>
<p class="q"><b>Question 4.</b> Résoudre l'équation (x + 4)(2x − 6) = 0.</p>
<p class="q"><b>Question 5.</b> On considère la fonction f définie par f(x) = 2x − 7. Déterminer l'antécédent de 5 par la fonction f.</p>
<p class="q"><b>Question 6.</b> Sur la figure ci-dessous, les points A, C et E sont alignés, ainsi que les points B, C et D. Les droites (AB) et (DE) sont parallèles. CA = 2 cm, CE = 3 cm et AB = 4 cm. Calculer DE.</p>
<svg class="fig-ex" viewBox="0 0 260 222" role="img" aria-label="Configuration de Thalès en papillon : droites AE et BD sécantes en C, AB parallèle à DE"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="90" y1="95" x2="190" y2="170"/><line x1="90" y1="195" x2="190" y2="20"/><line x1="90" y1="95" x2="90" y2="195"/><line x1="190" y1="20" x2="190" y2="170"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="82" y="93" text-anchor="end">A</text><text x="82" y="203" text-anchor="end">B</text><text x="118" y="130" text-anchor="end">C</text><text x="198" y="25">D</text><text x="198" y="178">E</text><text x="82" y="150" text-anchor="end" font-size="14">4 cm</text><text x="102" y="97" text-anchor="start" font-size="14">2 cm</text><text x="154" y="167.5" text-anchor="middle" font-size="14">3 cm</text></g></svg>
<p class="q"><b>Question 7.</b> Le triangle RST est rectangle en S. Exprimer le cosinus de l'angle RTS à l'aide des longueurs des côtés du triangle.</p>
<p class="q"><b>Question 8.</b> Une voiture roule à la vitesse moyenne de 90 km/h pendant 20 minutes. Quelle distance parcourt-elle ?</p>
<p class="q"><b>Question 9.</b> Donner la valeur exacte de l'aire d'un disque de rayon 3 cm.</p>
` + FIN_P1
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes – 1 h 40",
        points: 12,
        html: CONSIGNE_P2 + `
<h4>Exercice 1 (4 points)</h4>
<p>Malik doit repeindre la façade de sa maison et réparer une gouttière. Il dispose d'une échelle de 5 m de long.</p>
<p>Pour vérifier que le mur de la façade est bien perpendiculaire au sol, Malik marque un point P sur le mur à 1,20 m du sol et un point Q sur le sol à 0,90 m du pied O du mur. Il mesure alors PQ = 1,50 m (figure 1).</p>
<svg class="fig-ex" viewBox="0 0 360 262" role="img" aria-label="Figure 1 : triangle OPQ contre le mur ; figure 2 : échelle EH appuyée contre le mur"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="150" y1="196" x2="150" y2="40"/><line x1="20" y1="196" x2="168" y2="196"/><line x1="150" y1="76" x2="60" y2="196" stroke-dasharray="6 5"/><line x1="330" y1="214" x2="330" y2="24"/><line x1="214" y1="214" x2="348" y2="214"/><line x1="279.6" y1="214" x2="330" y2="41.2" stroke-width="3.5"/><polyline points="322,214 322,206 330,206" stroke-width="1.5"/><path d="M301.6,214 A22,22 0 0 0 285.8,192.9" stroke-width="1.5"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="10" y="20" font-size="14">Figure 1</text><text x="200" y="20" font-size="14">Figure 2</text><text x="156" y="214">O</text><text x="156" y="81">P</text><text x="56" y="214" text-anchor="middle">Q</text><text x="156" y="158" font-size="14">1,20 m</text><text x="156" y="52" font-size="13">mur</text><text x="24" y="190" font-size="13">sol</text><text x="109" y="214" text-anchor="middle" font-size="14">0,90 m</text><text x="95" y="130" text-anchor="end" font-size="14">1,50 m</text><text x="336" y="232">O</text><text x="336" y="46.2">H</text><text x="275.6" y="232" text-anchor="middle">E</text><text x="310.8" y="250" text-anchor="middle" font-size="14">1,40 m</text><text x="296.8" y="127.6" text-anchor="end" font-size="14">5 m</text></g></svg>
<p><i>Les figures ne sont pas à l'échelle.</i></p>
<p class="q gras"><b>1.</b> Le mur est-il perpendiculaire au sol ? Justifier la réponse en citant précisément la propriété utilisée et en rédigeant des phrases claires. <span class="pts">(1 point)</span></p>
<p>Dans la suite de l'exercice, on admet que le mur est perpendiculaire au sol. Malik pose le pied E de l'échelle sur le sol, à 1,40 m du pied O du mur, et le haut H de l'échelle touche le mur (figure 2). On a donc EH = 5 m et OE = 1,40 m.</p>
<p class="q"><b>2.</b> Calculer la hauteur OH à laquelle le haut de l'échelle touche le mur. <span class="pts">(1 point)</span></p>
<p class="q"><b>3.</b> On considère qu'une échelle est stable lorsque l'angle qu'elle forme avec le sol mesure entre 65° et 75°. Calculer la mesure de l'angle OEH, arrondie au degré, puis dire si l'échelle de Malik est stable. <span class="pts">(1 point)</span></p>
<p class="q"><b>4.</b> La gouttière à réparer est fixée à 4,90 m de hauteur. Malik voudrait que le haut de son échelle touche le mur à cette hauteur. Peut-il le faire tout en respectant la condition de stabilité ? Argumenter la réponse en précisant la démarche. <span class="pts">(1 point)</span></p>

<h4>Exercice 2 (4 points)</h4>
<p>Mme Diallo veut semer une pelouse dans son jardin. Un paysagiste lui propose les deux projets représentés ci-dessous, où x désigne un nombre positif. Les longueurs sont exprimées en mètres.</p>
<ul>
<li>Projet 1 : une pelouse carrée de côté x + 3 ;</li>
<li>Projet 2 : une pelouse rectangulaire de longueur x + 5 et de largeur x + 1.</li>
</ul>
<svg class="fig-ex" viewBox="0 0 360 196" role="img" aria-label="Projet 1 : pelouse carrée de côté x + 3 ; projet 2 : pelouse rectangulaire de x + 5 sur x + 1"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="40" width="119" height="119"/><rect x="160" y="74" width="153" height="85"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="74.5" y="30" text-anchor="middle" font-size="14">Projet 1</text><text x="236.5" y="64" text-anchor="middle" font-size="14">Projet 2</text><text x="74.5" y="179" text-anchor="middle">x + 3</text><text x="236.5" y="179" text-anchor="middle">x + 5</text><text x="319" y="121.5">x + 1</text></g></svg>
<p class="q"><b>1.</b> Dans cette question, x = 2. Calculer l'aire de chacune des deux pelouses. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>2.</b> Montrer que l'aire de la pelouse carrée est égale à x² + 6x + 9. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>3.</b> L'aire de la pelouse rectangulaire est égale à (x + 5)(x + 1). Développer et réduire cette expression. <span class="pts">(0,5 point)</span></p>
<p class="q gras"><b>4.</b> Le paysagiste affirme : « Quelle que soit la valeur de x, la pelouse carrée a une aire supérieure de 4 m² à celle de la pelouse rectangulaire. » A-t-il raison ? Expliquer clairement la démarche en utilisant un vocabulaire mathématique précis. <span class="pts">(1 point)</span></p>
<p class="q"><b>5.</b> Chaque pelouse sera entourée d'une bordure. Montrer que, quelle que soit la valeur de x, il faut la même longueur de bordure pour les deux projets. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>6.</b> Mme Diallo choisit le projet 2 et souhaite une pelouse de 45 m².</p>
<p class="q sous"><b>a)</b> Développer et réduire l'expression (x + 10)(x − 4). <span class="pts">(0,5 point)</span></p>
<p class="q sous"><b>b)</b> En déduire la valeur de x pour laquelle l'aire de la pelouse rectangulaire est égale à 45 m², puis donner les dimensions de cette pelouse. <span class="pts">(0,5 point)</span></p>

<h4>Exercice 3 (4 points)</h4>
<p>Lina et son père préparent une randonnée en montagne. Ils utilisent une carte à l'échelle 1/25 000.</p>
<p class="q"><b>1.</b> Sur la carte, le parcours mesure 34 cm. Montrer que la longueur réelle du parcours est de 8,5 km. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>2.</b> Sur un terrain plat, Lina marche à la vitesse moyenne de 3,4 km/h. Sans tenir compte des montées, combien de temps durerait la randonnée ? Donner la réponse en heures et minutes. <span class="pts">(1 point)</span></p>
<p class="q"><b>3.</b> Le guide de randonnée conseille d'ajouter 1 heure de marche pour 300 m de dénivelé positif, c'est-à-dire de montée. Ce parcours comporte 450 m de dénivelé positif. Lina et son père partent à 9 h 15 et prévoient une pause de 45 minutes pour pique-niquer. Le dernier bus qui permet de rentrer part du point d'arrivée à 14 h 30. Pourront-ils le prendre ? Argumenter la réponse en précisant la démarche. <span class="pts">(1 point)</span></p>
<p class="q"><b>4.</b> Sur un tronçon du parcours, un panneau indique une pente de 15 % : le sentier monte de 15 m lorsqu'on avance de 100 m à l'horizontale. Ce tronçon correspond à une distance horizontale de 1 200 m. Calculer son dénivelé. <span class="pts">(0,5 point)</span></p>
<p class="q"><b>5.</b> On modélise ce tronçon par le triangle DKS rectangle en K ci-dessous, avec DK = 1 200 m. Calculer la mesure de l'angle KDS, arrondie au degré. <span class="pts">(0,5 point)</span></p>
<svg class="fig-ex" viewBox="0 0 360 196" role="img" aria-label="Triangle DKS rectangle en K modélisant un tronçon de sentier"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="30,150 282,150 282,62 30,150"/><polyline points="274,150 274,142 282,142" stroke-width="1.5"/><path d="M70,150 A40,40 0 0 0 67.8,136.8" stroke-width="1.5"/></g><g fill="currentColor" stroke="none" font-size="15" font-family="sans-serif"><text x="22" y="155" text-anchor="end">D</text><text x="290" y="155">K</text><text x="290" y="64">S</text><text x="156" y="172" text-anchor="middle" font-size="14">1 200 m</text><text x="290" y="111" font-size="14">dénivelé</text><text x="146" y="96" text-anchor="end" font-size="14">sentier</text></g></svg>
<p><i>La figure n'est pas à l'échelle.</i></p>
<p class="q"><b>6.</b> Au retour, ils descendent en télésiège. Le télésiège avance à la vitesse de 2,5 m/s. Exprimer cette vitesse en km/h. <span class="pts">(0,5 point)</span></p>
`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "Partie 1 – Automatismes et applications directes",
        html: BAREME_P1 + `
<div class="rep"><p class="rq"><b>1.</b> A = 7/4 − 3/4 × 2/3</p><p><b>A = 5/4.</b> La multiplication est prioritaire : 3/4 × 2/3 = 6/12 = 1/2 = 2/4 ; puis 7/4 − 2/4 = 5/4.</p><p class="piege"><b>Piège :</b> calculer 7/4 − 3/4 en premier ne respecte pas les priorités opératoires.</p></div>
<div class="rep"><p class="rq"><b>2.</b> 52 000 000</p><p><b>5,2 × 10<sup>7</sup>.</b> La virgule se déplace de 7 rangs vers la gauche, et 1 ≤ 5,2 &lt; 10.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Développer 3x(2x − 5)</p><p><b>6x² − 15x.</b> 3x × 2x = 6x² et 3x × (−5) = −15x.</p></div>
<div class="rep"><p class="rq"><b>4.</b> (x + 4)(2x − 6) = 0</p><p><b>x = −4 ou x = 3.</b> Un produit est nul si l'un de ses facteurs est nul : x + 4 = 0 ou 2x − 6 = 0.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Antécédent de 5 par f(x) = 2x − 7</p><p><b>6.</b> On résout 2x − 7 = 5 : 2x = 12, donc x = 6.</p></div>
<div class="rep"><p class="rq"><b>6.</b> Longueur DE</p><p><b>DE = 6 cm.</b> D'après le théorème de Thalès (configuration en papillon) : CA/CE = CB/CD = AB/ED, soit 2/3 = 4/DE, donc DE = 4 × 3 ÷ 2 = 6.</p></div>
<div class="rep"><p class="rq"><b>7.</b> Cosinus de l'angle RTS</p><p><b>cos RTS = TS / TR.</b> Le triangle est rectangle en S : l'hypoténuse est [RT] et le côté adjacent à l'angle RTS est [TS].</p></div>
<div class="rep"><p class="rq"><b>8.</b> 90 km/h pendant 20 min</p><p><b>30 km.</b> 20 min = 1/3 h, et 90 × 1/3 = 30.</p></div>
<div class="rep"><p class="rq"><b>9.</b> Aire d'un disque de rayon 3 cm</p><p><b>9π cm².</b> π × r² = π × 3² = 9π.</p></div>
`
      },
      {
        titre: "Partie 2 – Raisonnement et résolution de problèmes",
        html: `
<h4>Exercice 1 – L'échelle de Malik (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> (Question en gras) Le mur est-il perpendiculaire au sol ?</p>
<div class="exemple-redige"><p>Dans le triangle OPQ, le plus long côté est [PQ].</p>
<p>D'une part, PQ² = 1,5² = 2,25.</p>
<p>D'autre part, OP² + OQ² = 1,2² + 0,9² = 1,44 + 0,81 = 2,25.</p>
<p>On constate que PQ² = OP² + OQ². Donc, d'après la réciproque du théorème de Pythagore, le triangle OPQ est rectangle en O.</p>
<p>Les droites (OP) et (OQ) sont donc perpendiculaires : le mur est perpendiculaire au sol.</p></div>
<p class="attendu"><b>On attend :</b> le repérage du plus long côté, les deux calculs menés séparément, le nom exact de la propriété (« réciproque du théorème de Pythagore ») et une conclusion qui répond à la question posée (le mur et le sol).</p>
<p class="piege"><b>Piège :</b> écrire PQ² = OP² + OQ² dès la première ligne, comme si on le savait déjà ; ou citer le théorème de Pythagore au lieu de sa réciproque. L'angle droit est en O, le sommet opposé au plus long côté.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Hauteur OH.</p>
<p>Le triangle OEH est rectangle en O, d'hypoténuse [EH]. D'après le théorème de Pythagore :</p>
<p class="calc">EH² = OE² + OH²<br>5² = 1,4² + OH²<br>25 = 1,96 + OH²<br>OH² = 25 − 1,96 = 23,04<br>OH = √23,04 = 4,8</p>
<p><b>Le haut de l'échelle touche le mur à 4,8 m du sol.</b></p>
<p class="piege"><b>Piège :</b> l'hypoténuse est l'échelle [EH] ; on cherche un côté de l'angle droit, donc on soustrait.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Angle OEH et stabilité.</p>
<p>Dans le triangle OEH rectangle en O, pour l'angle OEH, [OE] est le côté adjacent et [EH] l'hypoténuse.</p>
<p class="calc">cos OEH = OE / EH = 1,4 / 5 = 0,28<br>OEH = cos⁻¹(0,28) ≈ 74°</p>
<p><b>L'angle OEH mesure environ 74°. Comme 74° est compris entre 65° et 75°, l'échelle de Malik est stable.</b></p></div>
<div class="rep"><p class="rq"><b>4.</b> Atteindre 4,90 m ?</p>
<p>Plus l'échelle est redressée, plus son sommet monte ; l'angle le plus grand autorisé est 75°. Dans le triangle OEH rectangle en O, sin OEH = OH / EH, donc OH = EH × sin OEH.</p>
<p class="calc">Avec un angle de 75° : OH = 5 × sin 75° ≈ 4,83 m</p>
<p>En respectant la condition de stabilité, le haut de l'échelle ne peut pas dépasser environ 4,83 m. <b>Comme 4,83 m &lt; 4,90 m, Malik ne peut pas atteindre la gouttière en respectant la condition de stabilité.</b></p>
<p class="valorise"><b>On valorise :</b> l'autre démarche, qui part de OH = 4,9 m : OE² = 5² − 4,9² = 0,99, donc OE ≈ 0,995 m ; cos OEH = OE / 5, d'où OEH ≈ 78,5°, plus que 75° : l'échelle ne serait pas stable.</p></div>

<h4>Exercice 2 – Les pelouses (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Aires pour x = 2.</p><p class="calc">Carré : (2 + 3)² = 5² = 25<br>Rectangle : (2 + 5) × (2 + 1) = 7 × 3 = 21</p><p><b>Pour x = 2, la pelouse carrée mesure 25 m² et la pelouse rectangulaire 21 m².</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> Aire du carré.</p><p class="calc">(x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9</p><p class="piege"><b>Piège :</b> (x + 3)² n'est pas égal à x² + 9 (pour x = 1 : 16 d'un côté, 10 de l'autre).</p></div>
<div class="rep"><p class="rq"><b>3.</b> Aire du rectangle.</p><p class="calc">(x + 5)(x + 1) = x² + x + 5x + 5 = x² + 6x + 5</p></div>
<div class="rep"><p class="rq"><b>4.</b> (Question en gras) L'affirmation du paysagiste.</p>
<div class="exemple-redige"><p>Pour un nombre positif x quelconque, je calcule la différence entre l'aire de la pelouse carrée et celle de la pelouse rectangulaire, à l'aide des expressions développées des questions 2 et 3 :</p>
<p>(x² + 6x + 9) − (x² + 6x + 5) = x² + 6x + 9 − x² − 6x − 5 = 4.</p>
<p>Cette différence est égale à 4 quelle que soit la valeur de x : la pelouse carrée a toujours une aire supérieure de 4 m² à celle de la pelouse rectangulaire. <b>Le paysagiste a raison.</b></p></div>
<p class="attendu"><b>On attend :</b> un calcul littéral valable pour tout x (la question 1 n'est qu'un exemple : 25 − 21 = 4), la suppression correcte de la parenthèse précédée d'un signe −, et une conclusion rédigée.</p>
<p class="piege"><b>Piège :</b> après un signe − devant une parenthèse, on change le signe de chaque terme : −(x² + 6x + 5) = −x² − 6x − 5.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Longueur de bordure.</p><p class="calc">Carré : 4 × (x + 3) = 4x + 12<br>Rectangle : 2 × [(x + 5) + (x + 1)] = 2 × (2x + 6) = 4x + 12</p><p><b>Les deux périmètres sont égaux à 4x + 12 : il faut la même longueur de bordure, quelle que soit la valeur de x.</b></p></div>
<div class="rep"><p class="rq"><b>6. a)</b> Développer (x + 10)(x − 4).</p><p class="calc">(x + 10)(x − 4) = x² − 4x + 10x − 40 = x² + 6x − 40</p></div>
<div class="rep"><p class="rq"><b>6. b)</b> Aire de 45 m².</p><p class="calc">(x + 5)(x + 1) = 45<br>x² + 6x + 5 = 45<br>x² + 6x − 40 = 0<br>(x + 10)(x − 4) = 0 (d'après la question a)<br>x + 10 = 0 ou x − 4 = 0, soit x = −10 ou x = 4</p><p>Le nombre x est positif, donc x = 4. Les dimensions sont 4 + 5 = 9 et 4 + 1 = 5 ; vérification : 9 × 5 = 45. <b>La pelouse mesure 9 m sur 5 m.</b></p><p class="piege"><b>Piège :</b> la solution −10 est écartée, car x est positif (et une longueur ne peut pas être négative).</p></div>

<h4>Exercice 3 – La randonnée (4 points)</h4>
<div class="rep"><p class="rq"><b>1.</b> Longueur réelle.</p><p class="calc">34 × 25 000 = 850 000 cm = 8 500 m = 8,5 km</p><p><b>Le parcours mesure réellement 8,5 km.</b></p></div>
<div class="rep"><p class="rq"><b>2.</b> Durée sans les montées.</p><p class="calc">t = d ÷ v = 8,5 ÷ 3,4 = 2,5 h<br>0,5 h = 0,5 × 60 min = 30 min</p><p><b>La randonnée durerait 2 h 30 min.</b></p><p class="piege"><b>Piège :</b> 2,5 h ne vaut pas 2 h 50 min ; on multiplie la partie décimale par 60.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Le bus de 14 h 30.</p><p>Le temps ajouté est proportionnel au dénivelé : 1 h pour 300 m.</p><p class="calc">450 ÷ 300 = 1,5, donc on ajoute 1,5 h = 1 h 30 min<br>Durée totale : 2 h 30 min + 1 h 30 min + 45 min = 4 h 45 min<br>Arrivée : 9 h 15 + 4 h 45 min = 14 h 00</p><p><b>Ils arriveront vers 14 h, avant le départ du bus de 14 h 30 : ils pourront le prendre, avec 30 minutes d'avance.</b></p></div>
<div class="rep"><p class="rq"><b>4.</b> Dénivelé du tronçon.</p><p class="calc">15 % de 1 200 m : 1 200 × 15 ÷ 100 = 180</p><p><b>Le tronçon a un dénivelé de 180 m.</b></p></div>
<div class="rep"><p class="rq"><b>5.</b> Angle KDS.</p><p>Dans le triangle DKS rectangle en K, pour l'angle KDS, [KS] est le côté opposé et [DK] le côté adjacent.</p><p class="calc">tan KDS = KS / DK = 180 / 1 200 = 0,15<br>KDS = tan⁻¹(0,15) ≈ 9°</p><p><b>Le sentier forme avec l'horizontale un angle d'environ 9°.</b></p><p class="piege"><b>Piège :</b> une pente de 15 % ne correspond pas à un angle de 15° !</p></div>
<div class="rep"><p class="rq"><b>6.</b> Conversion de vitesse.</p><p class="calc">2,5 m/s = 2,5 × 3 600 m/h = 9 000 m/h = 9 km/h</p><p><b>Le télésiège avance à 9 km/h.</b> (Raccourci : multiplier par 3,6.)</p></div>
<p class="bareme">Rédaction (2 points) : calculs posés, propriétés citées, phrases réponses avec unités ; la maîtrise de la langue est plus particulièrement évaluée sur les questions en gras (exercice 1 question 1, exercice 2 question 4).</p>
`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Partie 1 : 20 minutes, 9 questions.</b> Attention aux priorités opératoires (question 1) et au papillon de Thalès (question 6) : écrire mentalement les trois rapports avant de calculer.</li>
<li><b>Partie 2 : trois exercices de 4 points.</b> Environ 30 minutes chacun et 10 minutes de relecture. Les exercices sont indépendants : commencer par le plus sûr.</li>
<li><b>Réciproque de Pythagore (question en gras).</b> Repérer le plus long côté, calculer « d'une part » son carré et « d'autre part » la somme des deux autres carrés, puis « On constate que… Donc, d'après la réciproque du théorème de Pythagore, le triangle OPQ est rectangle en O ». Terminer en répondant à la question : le mur est perpendiculaire au sol.</li>
<li><b>Trigonométrie.</b> Nommer le triangle rectangle, puis le côté adjacent, le côté opposé et l'hypoténuse pour l'angle étudié. Calculatrice en mode degré ; arrondir à la fin, avec « ≈ ». Pour la question 4, annoncer chaque étape par une phrase : « L'angle le plus grand autorisé est 75°… ».</li>
<li><b>Calcul littéral (question en gras).</b> Pour « quelle que soit la valeur de x », un exemple ne suffit pas : on calcule avec x (ici, la différence des deux aires), on supprime les parenthèses avec soin, puis on conclut par une phrase.</li>
<li><b>Équation de la question 6.</b> Ramener l'équation à « … = 0 », utiliser la forme factorisée donnée, puis la propriété du produit nul. Écarter la solution impossible (x est positif) en le disant.</li>
<li><b>Vitesses, durées, échelles.</b> Écrire la formule (t = d ÷ v), convertir les heures décimales en minutes (× 60), convertir les cm de la carte en km. Une pente en % est un rapport de longueurs, pas un angle.</li>
<li><b>Trace de recherche.</b> Même sans aboutir, écrire les calculs commencés : la démarche est notée. On peut utiliser les résultats donnés par l'énoncé (8,5 km, x² + 6x + 9) même si on n'a pas su les démontrer.</li>
</ol>
<p class="tip">Unités à vérifier en fin d'épreuve : m et m², h et min, km/h et m/s, degrés pour les angles.</p>`
  }
);
})();
