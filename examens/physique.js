/* examens/physique.js — examens blancs de physique-chimie (format DNB 2027, épreuve de sciences)
   Trois sujets d'entraînement de 30 minutes sur 10 points, sur les chapitres du 1er trimestre
   (pc-ch1 La matière ; pc-ch2 L'énergie et l'électricité) et la fiche méthode pc-m1.
   Structure calquée sur la partie physique-chimie des sujets de sciences 2026 :
   « Question 1 (1 point) : … », une question ouverte « en expliquant la démarche »,
   et une dernière question rédigée de deux à quatre lignes (dont 1 point de maîtrise de la langue).
   Toutes les valeurs numériques ont été recalculées par script ; les figures SVG sont générées
   à partir des données de l'énoncé. Les données chiffrées sont construites pour l'exercice. */
DATA.examens = DATA.examens || [];

(function () {
const GARDE_PC = [
  "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
  "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
  "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
  "L'utilisation du dictionnaire est interdite."
];
const ENTETE_PC = `<p class="consigne"><b>PHYSIQUE-CHIMIE – Durée 30 minutes – 10 points</b><br>Les démarches engagées et les essais, même non aboutis, seront pris en compte.</p>`;
const REDIGE = `<br>Une réponse rédigée en deux à quatre lignes est attendue. La qualité de la rédaction sera évaluée.`;
const BAREME_LANGUE = `<p class="bareme">Barème indicatif : 1 point pour le raisonnement scientifique ; 1 point pour la qualité de la rédaction (phrases complètes, vocabulaire scientifique précis, orthographe). C'est le point de maîtrise de la langue de la discipline.</p>`;

DATA.examens.push(

  /* =====================================================================
     SUJET 1 — Le vélo à assistance électrique (pc-ch2 surtout, ions de pc-ch1)
     ===================================================================== */
  {
    id: 'ex-physique-1',
    matiere: 'physique',
    numero: 1,
    titre: "Le vélo à assistance électrique",
    epreuve: "SCIENCES — PHYSIQUE-CHIMIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['pc-ch2', 'pc-ch1'],
    methodes: ['pc-m1'],
    garde: GARDE_PC,
    parties: [
      {
        titre: "Le vélo à assistance électrique d'Inès",
        points: 10,
        html: ENTETE_PC + `
<p>Inès, 14 ans, va au collège sur un vélo à assistance électrique (VAE) : quand elle pédale, un moteur électrique alimenté par une batterie l'aide à avancer. En France, l'assistance d'un VAE doit s'arrêter dès que le vélo atteint 25&nbsp;km/h.</p>
<div class="doc"><p class="doc-titre">Document 1 : fiche technique du vélo d'Inès</p>
<table class="tab"><tbody>
<tr><th>Masse du vélo</th><td>24&nbsp;kg</td></tr>
<tr><th>Moteur électrique</th><td>puissance : 250&nbsp;W</td></tr>
<tr><th>Batterie lithium-ion</th><td>36&nbsp;V – 504&nbsp;Wh</td></tr>
<tr><th>Chargeur (sortie)</th><td>42&nbsp;V – 4,0&nbsp;A</td></tr>
<tr><th>Modes d'assistance</th><td>Éco, Normal, Sport, Turbo</td></tr>
</tbody></table></div>
<div class="doc"><p class="doc-titre">Document 2 : chaîne énergétique du moteur</p>
<svg class="fig-ex" viewBox="0 0 360 165" role="img" aria-label="Chaîne énergétique : la batterie transfère l'énergie 1 au moteur ; le moteur fournit l'énergie 2, utile, et l'énergie 3, perdue."><rect x="4" y="40" width="82" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="45" y="67" font-size="15" text-anchor="middle">Batterie</text><rect x="176" y="40" width="86" height="44" rx="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="219" y="67" font-size="15" text-anchor="middle">Moteur</text><line x1="86" y1="62" x2="166" y2="62" stroke="currentColor" stroke-width="2"/><polygon points="176,62 166,57 166,67" fill="currentColor"/><text x="131" y="52" font-size="14" text-anchor="middle">énergie ①</text><line x1="262" y1="62" x2="344" y2="62" stroke="currentColor" stroke-width="2"/><polygon points="354,62 344,57 344,67" fill="currentColor"/><text x="308" y="52" font-size="14" text-anchor="middle">énergie ②</text><text x="308" y="80" font-size="14" text-anchor="middle">(utile)</text><line x1="219" y1="84" x2="219" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="219,150 224,140 214,140" fill="currentColor"/><text x="229" y="118" font-size="14">énergie ③</text><text x="229" y="136" font-size="14">(perdue)</text></svg></div>
<p class="q"><b>Question 1</b> <span class="pts">(1 point)</span> : nommer les formes d'énergie notées ①, ② et ③ sur la chaîne énergétique du document 2. Aucune justification n'est attendue.</p>

<h3>LA BATTERIE ET SA RECHARGE</h3>
<p>Dans la batterie, ce sont des ions lithium Li<sup>+</sup> qui se déplacent. L'atome de lithium, de symbole Li, possède un noyau formé de 3 protons et de 4 neutrons, entouré de 3 électrons.</p>
<table class="tab"><thead><tr><th>Composition</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
<tbody>
<tr><th>Protons</th><td>3</td><td>3</td><td>2</td><td>3</td></tr>
<tr><th>Neutrons</th><td>4</td><td>4</td><td>4</td><td>4</td></tr>
<tr><th>Électrons</th><td>3</td><td>2</td><td>3</td><td>4</td></tr>
</tbody></table>
<p class="q"><b>Question 2</b> <span class="pts">(1 point)</span> : choisir, parmi les compositions A, B, C et D, celle de l'ion lithium Li<sup>+</sup>. Justifier ce choix.</p>
<p>Le soir, Inès branche sa batterie, complètement vide, sur le chargeur décrit dans le document 1.</p>
<p><i>Données</i> : relation entre la puissance P, la tension U et l'intensité I : P = U × I ; relation entre l'énergie E, la puissance P et la durée t : E = P × t.</p>
<p class="q"><b>Question 3</b> <span class="pts">(1 point)</span> : calculer la puissance électrique P fournie par le chargeur.</p>
<p class="q"><b>Question 4</b> <span class="pts">(1 point)</span> : montrer par un calcul qu'une charge complète de la batterie dure environ 3 heures. On admet que toute l'énergie fournie par le chargeur est stockée dans la batterie.</p>

<h3>LES TRAJETS DE LA SEMAINE</h3>
<p>Le collège est à 7&nbsp;km de chez Inès. Elle fait l'aller-retour 5 jours par semaine et ne veut recharger sa batterie qu'une fois par semaine, le week-end. L'énergie que doit fournir la batterie dépend du mode d'assistance choisi.</p>
<div class="doc"><p class="doc-titre">Document 3 : énergie fournie par la batterie pour parcourir 1&nbsp;km, selon le mode d'assistance</p>
<svg class="fig-ex" viewBox="0 0 360 262" role="img" aria-label="Diagramme en barres : énergie fournie par la batterie pour parcourir 1 km. Éco : 4 Wh ; Normal : 6 Wh ; Sport : 8 Wh ; Turbo : 10 Wh."><line x1="58" y1="210" x2="350" y2="210" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="215" font-size="14" text-anchor="end">0</text><line x1="58" y1="196" x2="350" y2="196" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="182" x2="350" y2="182" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="187" font-size="14" text-anchor="end">2</text><line x1="58" y1="168" x2="350" y2="168" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="154" x2="350" y2="154" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="159" font-size="14" text-anchor="end">4</text><line x1="58" y1="140" x2="350" y2="140" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="126" x2="350" y2="126" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="131" font-size="14" text-anchor="end">6</text><line x1="58" y1="112" x2="350" y2="112" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="98" x2="350" y2="98" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="103" font-size="14" text-anchor="end">8</text><line x1="58" y1="84" x2="350" y2="84" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="70" x2="350" y2="70" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="75" font-size="14" text-anchor="end">10</text><line x1="58" y1="56" x2="350" y2="56" stroke="currentColor" style="stroke-opacity:.25"/><line x1="58" y1="42" x2="350" y2="42" stroke="currentColor" style="stroke-opacity:.25"/><text x="51" y="47" font-size="14" text-anchor="end">12</text><rect x="74.5" y="154" width="40" height="56" fill="currentColor" fill-opacity=".55" stroke="currentColor" stroke-width="1.5"/><text x="94.5" y="230" font-size="14" text-anchor="middle">Éco</text><rect x="147.5" y="126" width="40" height="84" fill="currentColor" fill-opacity=".55" stroke="currentColor" stroke-width="1.5"/><text x="167.5" y="230" font-size="14" text-anchor="middle">Normal</text><rect x="220.5" y="98" width="40" height="112" fill="currentColor" fill-opacity=".55" stroke="currentColor" stroke-width="1.5"/><text x="240.5" y="230" font-size="14" text-anchor="middle">Sport</text><rect x="293.5" y="70" width="40" height="140" fill="currentColor" fill-opacity=".55" stroke="currentColor" stroke-width="1.5"/><text x="313.5" y="230" font-size="14" text-anchor="middle">Turbo</text><line x1="58" y1="210" x2="350" y2="210" stroke="currentColor" stroke-width="2"/><line x1="58" y1="210" x2="58" y2="34" stroke="currentColor" stroke-width="2"/><text x="8" y="16" font-size="14">Énergie pour 1 km (en Wh)</text><text x="204" y="256" font-size="14" text-anchor="middle">Mode d'assistance</text></svg>
<p class="source">Valeurs moyennes sur terrain plat. Données construites pour l'exercice.</p></div>
<p class="q"><b>Question 5</b> <span class="pts">(2 points)</span> : déterminer, en expliquant la démarche, le ou les modes d'assistance qu'Inès peut utiliser pour faire tous ses trajets de la semaine sans recharger sa batterie.</p>

<h3>DANS LA DESCENTE</h3>
<p>Sur le plat, Inès roule à 18&nbsp;km/h. Dans une longue descente, l'assistance est coupée, mais elle atteint la vitesse de 36&nbsp;km/h. La masse d'Inès est de 51&nbsp;kg.</p>
<p><i>Donnée</i> : énergie cinétique d'un objet de masse m qui se déplace à la vitesse v : E<sub>c</sub> = ½ × m × v², avec E<sub>c</sub> en joule (J), m en kilogramme (kg) et v en mètre par seconde (m/s).</p>
<p class="q"><b>Question 6</b> <span class="pts">(2 points)</span> : calculer l'énergie cinétique de l'ensemble formé par Inès et son vélo lorsqu'ils roulent à 36&nbsp;km/h.</p>
<p>Pour que le vélo s'arrête, les freins convertissent l'énergie cinétique d'Inès et de son vélo en énergie thermique. Plus l'énergie cinétique est grande, plus la distance de freinage est grande.</p>
<p class="q"><b>Question 7</b> <span class="pts">(2 points)</span> : expliquer pourquoi, à l'approche d'un stop, Inès doit commencer à freiner beaucoup plus tôt quand elle roule à 36&nbsp;km/h que lorsqu'elle roule à 18&nbsp;km/h.` + REDIGE + `</p>`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "Le vélo à assistance électrique d'Inès",
        html: `
<div class="rep"><p class="rq"><b>Question 1.</b> Les formes d'énergie de la chaîne du moteur.</p>
<p>① énergie <b>électrique</b> (fournie par la batterie) ; ② énergie <b>cinétique</b>, ou mécanique (utile : le mouvement du vélo) ; ③ énergie <b>thermique</b>, ou chaleur (perdue).</p>
<p class="piege"><b>Piège :</b> écrire « énergie chimique » pour ①. La batterie <i>stocke</i> de l'énergie chimique, mais elle transfère au moteur de l'énergie <b>électrique</b>.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> La composition de l'ion Li<sup>+</sup>.</p>
<p>C'est la <b>composition B</b> : 3 protons, 4 neutrons, 2 électrons. La charge + indique que l'atome de lithium a <b>perdu un électron</b> (3 − 1 = 2 électrons). Le noyau ne change pas : il garde ses 3 protons et ses 4 neutrons.</p>
<p class="piege"><b>Piège :</b> choisir C (un proton en moins) : un ion se forme en perdant ou en gagnant des électrons, jamais des protons. D correspondrait à un ion chargé −, qui aurait gagné un électron.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> La puissance fournie par le chargeur.</p>
<p class="calc">P = U × I = 42&nbsp;V × 4,0&nbsp;A = 168&nbsp;W</p>
<p>Le chargeur fournit une puissance électrique de 168&nbsp;W.</p>
<p class="piege"><b>Piège :</b> prendre la tension de la batterie (36&nbsp;V) : c'est le chargeur qui fournit l'énergie, et sa sortie est notée « 42&nbsp;V – 4,0&nbsp;A ».</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> La durée d'une charge complète.</p>
<p class="calc">E = P × t donc t = E ÷ P<br>t = 504&nbsp;Wh ÷ 168&nbsp;W = 3,0&nbsp;h</p>
<p>Une charge complète de la batterie dure 3 heures : c'est bien environ 3&nbsp;h.</p>
<p class="attendu"><b>On attend :</b> la relation transformée (t = E ÷ P), des unités cohérentes (des Wh divisés par des W donnent des heures) et une phrase de conclusion. Autre démarche juste : 504&nbsp;Wh = 504 × 3&nbsp;600&nbsp;J = 1&nbsp;814&nbsp;400&nbsp;J, puis t = 1&nbsp;814&nbsp;400 ÷ 168 = 10&nbsp;800&nbsp;s = 3&nbsp;h.</p>
<p class="piege"><b>Piège :</b> utiliser la puissance du moteur (250&nbsp;W) : ce n'est pas lui qui recharge la batterie.</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> Les modes qui permettent une semaine sans recharge (question ouverte).</p>
<p>Distance parcourue en une semaine (aller et retour, 5 jours) :</p>
<p class="calc">d = 2 × 7&nbsp;km × 5 = 70&nbsp;km</p>
<p>Énergie nécessaire pour la semaine, avec les valeurs lues sur le document 3 :</p>
<p class="calc">Éco : 4&nbsp;Wh/km × 70&nbsp;km = 280&nbsp;Wh<br>Normal : 6&nbsp;Wh/km × 70&nbsp;km = 420&nbsp;Wh<br>Sport : 8&nbsp;Wh/km × 70&nbsp;km = 560&nbsp;Wh<br>Turbo : 10&nbsp;Wh/km × 70&nbsp;km = 700&nbsp;Wh</p>
<p>La batterie stocke 504&nbsp;Wh. Seuls les modes <b>Éco</b> (280&nbsp;Wh) et <b>Normal</b> (420&nbsp;Wh) demandent moins de 504&nbsp;Wh : Inès peut utiliser l'un de ces deux modes toute la semaine, mais pas les modes Sport ou Turbo.</p>
<p class="valorise"><b>On valorise :</b> l'autre démarche, 504&nbsp;Wh ÷ 70&nbsp;km = 7,2&nbsp;Wh par kilomètre au maximum, donc seuls les modes qui consomment moins de 7,2&nbsp;Wh/km conviennent ; la remarque qu'en mode Normal il reste peu de marge (84&nbsp;Wh) en cas de côtes ou de vent.</p>
<p class="piege"><b>Piège :</b> oublier le retour (35&nbsp;km au lieu de 70&nbsp;km) : on trouverait à tort que tous les modes conviennent.</p>
<p class="bareme">Barème indicatif : distance de la semaine 0,5 point ; lectures du graphique et calculs d'énergie 1 point ; comparaison avec 504&nbsp;Wh et conclusion 0,5 point.</p></div>

<div class="rep"><p class="rq"><b>Question 6.</b> L'énergie cinétique à 36&nbsp;km/h.</p>
<p>Masse de l'ensemble : m = 51&nbsp;kg + 24&nbsp;kg = 75&nbsp;kg ; conversion de la vitesse : v = 36&nbsp;km/h = 36 ÷ 3,6 = 10&nbsp;m/s.</p>
<p class="calc">E<sub>c</sub> = ½ × m × v² = 0,5 × 75 × 10² = 0,5 × 75 × 100 = 3&nbsp;750&nbsp;J</p>
<p>L'énergie cinétique d'Inès et de son vélo à 36&nbsp;km/h est de 3&nbsp;750&nbsp;J, soit environ 3,8&nbsp;kJ.</p>
<p class="piege"><b>Piège :</b> garder v = 36 sans convertir (on trouve 48&nbsp;600&nbsp;J, presque 13 fois trop), oublier le carré (375&nbsp;J) ou oublier la masse du vélo (2&nbsp;550&nbsp;J).</p></div>

<div class="rep"><p class="rq"><b>Question 7.</b> Pourquoi freiner plus tôt à 36&nbsp;km/h (réponse rédigée).</p>
<div class="exemple-redige">À 36&nbsp;km/h, Inès roule deux fois plus vite qu'à 18&nbsp;km/h. Comme l'énergie cinétique dépend du carré de la vitesse, elle est multipliée par 2² = 4 : elle passe de 937,5&nbsp;J à 3&nbsp;750&nbsp;J. Les freins doivent donc convertir quatre fois plus d'énergie en chaleur : la distance de freinage est environ quatre fois plus longue, c'est pourquoi Inès doit freiner bien plus tôt.</div>
<p class="attendu"><b>On attend :</b> la vitesse double ; E<sub>c</sub> = ½ × m × v² dépend de v², donc elle est multipliée par 4 ; plus E<sub>c</sub> est grande, plus la distance de freinage est grande. À 18&nbsp;km/h : v = 5&nbsp;m/s et E<sub>c</sub> = 0,5 × 75 × 5² = 937,5&nbsp;J.</p>
<p class="valorise"><b>On valorise :</b> la distance parcourue pendant le temps de réaction, elle aussi doublée ; le fait que la pente continue d'entraîner le vélo pendant le freinage.</p>
<p class="piege"><b>Piège :</b> écrire que l'énergie cinétique « double » : la vitesse est au carré dans la formule.</p>
` + BAREME_LANGUE + `</div>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Lire tout le sujet (3 minutes).</b> Surligner les données du document 1 avec leurs unités : 24&nbsp;kg, 504&nbsp;Wh, 42&nbsp;V, 4,0&nbsp;A. Repérer les liens : la question 4 utilise le résultat de la question 3, la question 7 celui de la question 6.</li>
<li><b>Chaîne énergétique (question 1).</b> Se demander ce qui entre dans le convertisseur (énergie électrique), ce qui en sort d'utile (énergie cinétique) et ce qui est perdu (énergie thermique).</li>
<li><b>Ions (question 2).</b> Le noyau ne change jamais. Charge + : électron(s) perdu(s) ; charge − : électron(s) gagné(s). Justifier par un petit calcul : 3 − 1 = 2 électrons.</li>
<li><b>Calculs (questions 3, 4 et 6), toujours dans le même ordre :</b> formule → conversions → calcul posé → résultat avec unité → phrase réponse. Pour E<sub>c</sub> : m en kg (Inès + vélo) et v en m/s (on divise par 3,6) avant de calculer.</li>
<li><b>Lire le diagramme (question 5).</b> Lire le titre et l'unité de l'axe (Wh pour 1&nbsp;km), puis la hauteur de chaque barre avec le quadrillage (un carreau = 1&nbsp;Wh). Écrire les valeurs lues dans la réponse.</li>
<li><b>Question ouverte (question 5).</b> Écrire ce que l'on cherche, puis dérouler : distance de la semaine → énergie nécessaire dans chaque mode → comparaison avec 504&nbsp;Wh → conclusion. Une démarche claire rapporte des points même si un calcul est faux.</li>
<li><b>Réponse rédigée (question 7).</b> Deux à quatre lignes en phrases complètes : un fait (la vitesse double), la loi (E<sub>c</sub> dépend de v²), la conséquence (E<sub>c</sub> × 4, distance de freinage plus grande), la conclusion. Relier les idées avec « comme », « donc », « c'est pourquoi ».</li>
</ol>
<p class="tip">Gestion du temps : environ 10 minutes pour les questions 1 à 4, 8 minutes pour la question ouverte, 9 minutes pour les questions 6 et 7, puis 3 minutes de relecture (unités, accords, phrases réponses).</p>`
  },

  /* =====================================================================
     SUJET 2 — L'eau de la piscine (pc-ch1 surtout, puissance et énergie de pc-ch2)
     ===================================================================== */
  {
    id: 'ex-physique-2',
    matiere: 'physique',
    numero: 2,
    titre: "L'eau de la piscine",
    epreuve: "SCIENCES — PHYSIQUE-CHIMIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['pc-ch1', 'pc-ch2'],
    methodes: ['pc-m1'],
    garde: GARDE_PC,
    parties: [
      {
        titre: "L'entretien de la piscine",
        points: 10,
        html: ENTETE_PC + `
<p>Cet été, la famille de Tom a installé une piscine hors-sol dans son jardin. Pour que l'eau reste claire et agréable pour les yeux et la peau, il faut la désinfecter, surveiller son pH et la filtrer chaque jour.</p>
<div class="doc"><p class="doc-titre">Document 1 : fiche de la piscine</p>
<table class="tab"><tbody>
<tr><th>Volume d'eau</th><td>21,6&nbsp;m³</td></tr>
<tr><th>Traitement de l'eau</th><td>au sel : du chlorure de sodium est dissous dans l'eau</td></tr>
<tr><th>Pompe de filtration</th><td>230&nbsp;V – 450&nbsp;W</td></tr>
</tbody></table>
<p><i>Donnée</i> : masse volumique de l'eau : ρ = 1,0&nbsp;kg/L.</p></div>
<p class="q"><b>Question 1</b> <span class="pts">(1 point)</span> : calculer la masse de l'eau contenue dans la piscine.</p>

<h3>LE pH DE L'EAU</h3>
<div class="doc"><p class="doc-titre">Document 2 : surveiller le pH de l'eau</p>
<p>Pour le confort des baigneurs et l'efficacité du traitement, le pH de l'eau d'une piscine doit rester compris entre 7,2 et 7,6. Avec un traitement au sel, le pH a tendance à augmenter. Tom mesure le pH de l'eau chaque matin avec un pH-mètre.</p>
<p><i>pH de l'eau de la piscine mesuré chaque matin pendant une semaine</i></p>
<svg class="fig-ex" viewBox="0 0 360 268" role="img" aria-label="Graphique : pH de l'eau mesuré chaque matin. Lundi 7,3 ; mardi 7,4 ; mercredi 7,5 ; jeudi 7,7 ; vendredi 7,9 ; samedi 8,0 ; dimanche 8,2. Zone recommandée entre 7,2 et 7,6."><rect x="55" y="143" width="295" height="48" fill="currentColor" fill-opacity=".10"/><line x1="55" y1="215" x2="350" y2="215" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="220" font-size="14" text-anchor="end">7,0</text><line x1="55" y1="203" x2="350" y2="203" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="191" x2="350" y2="191" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="196" font-size="14" text-anchor="end">7,2</text><line x1="55" y1="179" x2="350" y2="179" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="167" x2="350" y2="167" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="172" font-size="14" text-anchor="end">7,4</text><line x1="55" y1="155" x2="350" y2="155" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="143" x2="350" y2="143" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="148" font-size="14" text-anchor="end">7,6</text><line x1="55" y1="131" x2="350" y2="131" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="119" x2="350" y2="119" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="124" font-size="14" text-anchor="end">7,8</text><line x1="55" y1="107" x2="350" y2="107" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="95" x2="350" y2="95" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="100" font-size="14" text-anchor="end">8,0</text><line x1="55" y1="83" x2="350" y2="83" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="71" x2="350" y2="71" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="76" font-size="14" text-anchor="end">8,2</text><line x1="55" y1="59" x2="350" y2="59" stroke="currentColor" style="stroke-opacity:.25"/><line x1="55" y1="47" x2="350" y2="47" stroke="currentColor" style="stroke-opacity:.25"/><text x="48" y="52" font-size="14" text-anchor="end">8,4</text><line x1="82" y1="215" x2="82" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="82" y="236" font-size="14" text-anchor="middle">lun.</text><line x1="124" y1="215" x2="124" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="124" y="236" font-size="14" text-anchor="middle">mar.</text><line x1="166" y1="215" x2="166" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="166" y="236" font-size="14" text-anchor="middle">mer.</text><line x1="208" y1="215" x2="208" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="208" y="236" font-size="14" text-anchor="middle">jeu.</text><line x1="250" y1="215" x2="250" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="250" y="236" font-size="14" text-anchor="middle">ven.</text><line x1="292" y1="215" x2="292" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="292" y="236" font-size="14" text-anchor="middle">sam.</text><line x1="334" y1="215" x2="334" y2="220" stroke="currentColor" stroke-width="1.5"/><text x="334" y="236" font-size="14" text-anchor="middle">dim.</text><text x="344" y="172" font-size="14" text-anchor="end">zone recommandée</text><polyline points="82,179 124,167 166,155 208,131 250,107 292,95 334,71" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="82" cy="179" r="4" fill="currentColor"/><circle cx="124" cy="167" r="4" fill="currentColor"/><circle cx="166" cy="155" r="4" fill="currentColor"/><circle cx="208" cy="131" r="4" fill="currentColor"/><circle cx="250" cy="107" r="4" fill="currentColor"/><circle cx="292" cy="95" r="4" fill="currentColor"/><circle cx="334" cy="71" r="4" fill="currentColor"/><line x1="55" y1="215" x2="350" y2="215" stroke="currentColor" stroke-width="2"/><line x1="55" y1="215" x2="55" y2="39" stroke="currentColor" stroke-width="2"/><text x="48" y="22" font-size="14" text-anchor="middle">pH</text><text x="202.5" y="262" font-size="14" text-anchor="middle">Jour de la mesure</text></svg></div>
<p class="q"><b>Question 2</b> <span class="pts">(1,5 point)</span> : à l'aide du document 2, indiquer le premier jour où le pH de l'eau n'est plus compris dans l'intervalle recommandé. Préciser si l'eau est alors acide, neutre ou basique, et quels ions y sont majoritaires. Justifier la réponse.</p>

<h3>LE SEL DANS L'EAU</h3>
<p>Le sel dissous dans l'eau de la piscine est formé d'ions sodium Na<sup>+</sup> et d'ions chlorure Cl<sup>−</sup>. Un appareil, l'électrolyseur, fabrique à partir des ions chlorure un désinfectant qui détruit les microbes.</p>
<p class="q"><b>Question 3</b> <span class="pts">(1 point)</span> : indiquer lequel de ces deux ions est un anion, puis expliquer comment il se forme à partir de l'atome correspondant.</p>
<p>Tom veut vérifier la présence d'ions chlorure dans l'eau de sa piscine. Il en verse un peu dans un tube à essai.</p>
<p class="q"><b>Question 4</b> <span class="pts">(1 point)</span> : indiquer le réactif que Tom doit ajouter dans le tube à essai et l'observation attendue.</p>

<h3>LA FILTRATION</h3>
<div class="doc"><p class="doc-titre">Document 3 : la filtration de l'eau</p>
<p>La pompe fait circuler l'eau à travers un filtre qui retient les impuretés. Les professionnels conseillent la règle suivante :</p>
<p><b>durée de filtration par jour (en heures) = température de l'eau (en °C) ÷ 2</b></p>
<p>En juillet, l'eau de la piscine de Tom reste à 24&nbsp;°C. Prix de l'énergie électrique : 0,20&nbsp;€ par kilowattheure (kWh).</p>
<p><i>Données</i> : P = U × I ; E = P × t.</p></div>
<p class="q"><b>Question 5</b> <span class="pts">(1 point)</span> : calculer l'intensité du courant électrique qui traverse la pompe lorsqu'elle fonctionne.</p>
<p class="q"><b>Question 6</b> <span class="pts">(2,5 points)</span> : déterminer, en expliquant la démarche, le coût de la filtration de l'eau de la piscine pour tout le mois de juillet (31 jours).</p>

<h3>CORRIGER LE pH</h3>
<p>Dimanche matin, après la mesure, Tom décide de corriger le pH : il verse dans la piscine la dose conseillée de « pH moins », une solution acide qui apporte des ions H<sup>+</sup>. Le flacon porte le pictogramme « corrosif ».</p>
<p class="q"><b>Question 7</b> <span class="pts">(2 points)</span> : expliquer pourquoi l'ajout de « pH moins » fait baisser le pH de l'eau de la piscine.` + REDIGE + `</p>`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "L'entretien de la piscine",
        html: `
<div class="rep"><p class="rq"><b>Question 1.</b> La masse de l'eau de la piscine.</p>
<p>Conversion : V = 21,6&nbsp;m³ = 21,6 × 1&nbsp;000&nbsp;L = 21&nbsp;600&nbsp;L.</p>
<p class="calc">ρ = m ÷ V donc m = ρ × V<br>m = 1,0&nbsp;kg/L × 21&nbsp;600&nbsp;L = 21&nbsp;600&nbsp;kg</p>
<p>La piscine contient 21&nbsp;600&nbsp;kg d'eau, soit 21,6 tonnes : c'est pourquoi elle doit être posée sur un sol plat et solide.</p>
<p class="piege"><b>Piège :</b> calculer 1,0 × 21,6 et trouver 21,6&nbsp;kg : les unités ne correspondent pas (kg/L et m³). Il faut d'abord convertir les m³ en litres, ou utiliser ρ = 1&nbsp;000&nbsp;kg/m³.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Le premier jour hors de l'intervalle, et la nature de l'eau.</p>
<p>C'est <b>jeudi</b> : le pH vaut 7,7, plus que 7,6 (mercredi, il valait 7,5 : il était encore dans l'intervalle). L'eau est alors <b>basique</b>, car son pH est supérieur à 7 : les ions <b>hydroxyde HO<sup>−</sup></b> y sont majoritaires, plus nombreux que les ions H<sup>+</sup>.</p>
<p class="attendu"><b>On attend :</b> le jour, la valeur lue (7,7) comparée à 7,6, et la justification « pH supérieur à 7 ».</p>
<p class="piege"><b>Piège :</b> répondre « acide » parce que le pH « monte » : plus le pH est grand, plus la solution est basique. Remarque : dans l'intervalle recommandé (7,2 à 7,6), l'eau est déjà légèrement basique.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> L'anion et sa formation.</p>
<p>L'anion est l'ion chlorure <b>Cl<sup>−</sup></b> : il porte une charge négative. Il se forme quand un atome de chlore <b>gagne un électron</b> ; son noyau ne change pas. L'ion sodium Na<sup>+</sup>, lui, est un cation : l'atome de sodium a perdu un électron.</p>
<p class="piege"><b>Piège :</b> écrire que Cl<sup>−</sup> a « perdu » un électron, ou qu'il a perdu un proton.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Le test des ions chlorure.</p>
<p>Tom doit ajouter quelques gouttes de <b>nitrate d'argent</b>. S'il y a des ions chlorure, il se forme un <b>précipité blanc qui noircit à la lumière</b>.</p>
<p class="piege"><b>Piège :</b> proposer la soude : elle sert à reconnaître les ions cuivre et fer (précipités bleu, vert ou rouille), pas les ions chlorure.</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> L'intensité du courant dans la pompe.</p>
<p class="calc">P = U × I donc I = P ÷ U<br>I = 450&nbsp;W ÷ 230&nbsp;V ≈ 1,96&nbsp;A</p>
<p>La pompe est traversée par un courant d'intensité environ 2,0&nbsp;A.</p></div>

<div class="rep"><p class="rq"><b>Question 6.</b> Le coût de la filtration en juillet (question ouverte).</p>
<p>Durée de filtration par jour : 24 ÷ 2 = 12&nbsp;h. Puissance en kilowatts : P = 450&nbsp;W = 0,45&nbsp;kW.</p>
<p class="calc">Énergie par jour : E = P × t = 0,45&nbsp;kW × 12&nbsp;h = 5,4&nbsp;kWh<br>Énergie en juillet : 5,4&nbsp;kWh × 31 = 167,4&nbsp;kWh<br>Coût : 167,4 × 0,20&nbsp;€ = 33,48&nbsp;€</p>
<p>La filtration de l'eau coûte environ 33,50&nbsp;€ pour le mois de juillet.</p>
<p class="valorise"><b>On valorise :</b> une démarche annoncée (« je calcule d'abord la durée de filtration… ») ; un autre ordre juste, par exemple 12&nbsp;h × 31 = 372&nbsp;h, puis 0,45&nbsp;kW × 372&nbsp;h = 167,4&nbsp;kWh.</p>
<p class="piege"><b>Piège :</b> garder P = 450&nbsp;W : on obtient 167&nbsp;400&nbsp;Wh, et si on les prend pour des kWh, un coût absurde de 33&nbsp;480&nbsp;€. Vérifier l'ordre de grandeur : quelques dizaines d'euros par mois, c'est réaliste.</p>
<p class="bareme">Barème indicatif : durée de filtration 0,5 point ; énergie (conversion en kW et E = P × t) 1 point ; coût et phrase réponse 1 point.</p></div>

<div class="rep"><p class="rq"><b>Question 7.</b> Pourquoi le « pH moins » fait baisser le pH (réponse rédigée).</p>
<div class="exemple-redige">Dimanche, le pH de l'eau vaut 8,2, bien plus que 7,6 : l'eau est trop basique, car elle contient plus d'ions hydroxyde HO<sup>−</sup> que d'ions H<sup>+</sup>. Le « pH moins » apporte des ions H<sup>+</sup>, qui réagissent avec les ions HO<sup>−</sup> pour former de l'eau : H<sup>+</sup> + HO<sup>−</sup> → H<sub>2</sub>O. Les ions HO<sup>−</sup> deviennent moins nombreux : l'eau est moins basique et son pH baisse.</div>
<p class="attendu"><b>On attend :</b> l'eau est basique (ions HO<sup>−</sup> majoritaires) ; le produit acide apporte des ions H<sup>+</sup> ; ces ions réagissent avec les ions HO<sup>−</sup> ; l'eau devient moins basique, donc son pH diminue.</p>
<p class="valorise"><b>On valorise :</b> l'équation H<sup>+</sup> + HO<sup>−</sup> → H<sub>2</sub>O ; l'idée de respecter la dose pour revenir entre 7,2 et 7,6 sans descendre trop bas ; les précautions liées au pictogramme « corrosif » (gants, lunettes, verser le produit dans l'eau et non l'inverse).</p>
` + BAREME_LANGUE + `</div>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Repérer les unités des données.</b> La masse volumique est en kg/L mais le volume en m³ : il faudra convertir (1&nbsp;m³ = 1&nbsp;000&nbsp;L). La puissance est en W mais le prix au kWh : il faudra des kW et des heures.</li>
<li><b>Calcul de masse (question 1).</b> De ρ = m ÷ V, on tire m = ρ × V. Convertir, calculer, puis conclure avec l'unité (kg, éventuellement en tonnes).</li>
<li><b>Lire le graphique (question 2).</b> Repérer l'intervalle recommandé (zone grisée, de 7,2 à 7,6), puis lire chaque point jour après jour avec le quadrillage (un carreau = 0,1). Citer la valeur lue dans la réponse.</li>
<li><b>pH et ions (questions 2, 3 et 7).</b> Toujours comparer le pH à 7 : au-dessus, la solution est basique (HO<sup>−</sup> majoritaires) ; en dessous, acide (H<sup>+</sup> majoritaires). Pour un ion : charge − = électron(s) gagné(s) ; charge + = électron(s) perdu(s).</li>
<li><b>Test chimique (question 4).</b> Donner le réactif ET l'observation : « nitrate d'argent → précipité blanc qui noircit à la lumière ».</li>
<li><b>Question ouverte (question 6).</b> Écrire les étapes avant de calculer : durée par jour → énergie par jour (kW × h = kWh) → énergie du mois → coût. Poser chaque calcul avec son unité, puis vérifier l'ordre de grandeur du coût.</li>
<li><b>Réponse rédigée (question 7).</b> Un raisonnement en trois temps : le constat (l'eau est trop basique), l'explication (les ions H<sup>+</sup> réagissent avec les ions HO<sup>−</sup>), la conséquence (le pH baisse). Phrases complètes, vocabulaire du cours, relecture de l'orthographe.</li>
</ol>
<p class="tip">Les questions sont indépendantes : si tu bloques sur la question 1, passe au graphique. Garde une dizaine de minutes pour la question 6, la plus longue.</p>`
  },

  /* =====================================================================
     SUJET 3 — Un week-end en camping (combustion de pc-ch1, circuit et énergie de pc-ch2)
     ===================================================================== */
  {
    id: 'ex-physique-3',
    matiere: 'physique',
    numero: 3,
    titre: "Un week-end en camping",
    epreuve: "SCIENCES — PHYSIQUE-CHIMIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['pc-ch1', 'pc-ch2'],
    methodes: ['pc-m1'],
    garde: GARDE_PC,
    parties: [
      {
        titre: "En camping",
        points: 10,
        html: ENTETE_PC + `
<p>La famille de Léa part camper pendant les vacances d'été. Elle emporte un réchaud à gaz pour cuisiner et une petite installation solaire : un panneau solaire recharge une batterie de 12&nbsp;V, qui alimente une lampe et une glacière électrique.</p>

<h3>LE RÉCHAUD À GAZ</h3>
<div class="doc"><p class="doc-titre">Document 1 : la combustion du butane</p>
<p>La cartouche du réchaud contient 190&nbsp;g de butane, de formule C<sub>4</sub>H<sub>10</sub>. Dans le réchaud, le butane brûle en réagissant avec le dioxygène de l'air : il se forme du dioxyde de carbone et de l'eau. L'équation de la réaction s'écrit :</p>
<p><b>2 C<sub>4</sub>H<sub>10</sub> + 13 O<sub>2</sub> → 8 CO<sub>2</sub> + 10 H<sub>2</sub>O</b></p></div>
<p class="q"><b>Question 1</b> <span class="pts">(1 point)</span> : donner le nom et le nombre des atomes qui composent une molécule de butane.</p>
<p class="q"><b>Question 2</b> <span class="pts">(1,5 point)</span> : nommer les réactifs et les produits de cette transformation chimique, puis vérifier, en comptant les atomes de chaque sorte, que l'équation de la réaction est équilibrée.</p>
<p>Quand tout le butane de la cartouche a brûlé, 680&nbsp;g de dioxygène ont été consommés et 575&nbsp;g de dioxyde de carbone se sont formés.</p>
<p class="q"><b>Question 3</b> <span class="pts">(1,5 point)</span> : déterminer, en expliquant la démarche, la masse d'eau formée par la combustion de tout le butane de la cartouche.</p>

<h3>L'INSTALLATION SOLAIRE</h3>
<div class="doc"><p class="doc-titre">Document 2 : schéma du circuit électrique</p>
<svg class="fig-ex" viewBox="0 0 340 240" role="img" aria-label="Schéma du circuit : la batterie de 12 V, l'interrupteur K et l'ampèremètre A1 sont dans la branche principale ; une branche contient l'ampèremètre A2 et la lampe, l'autre branche contient la glacière."><line x1="40" y1="40" x2="40" y2="112" stroke="currentColor" stroke-width="2"/><line x1="20" y1="112" x2="60" y2="112" stroke="currentColor" stroke-width="2"/><line x1="30" y1="124" x2="50" y2="124" stroke="currentColor" stroke-width="6"/><line x1="40" y1="124" x2="40" y2="210" stroke="currentColor" stroke-width="2"/><text x="14" y="108" font-size="15" text-anchor="middle">+</text><text x="66" y="124" font-size="14">12 V</text><text x="66" y="142" font-size="14">batterie</text><line x1="40" y1="40" x2="76" y2="40" stroke="currentColor" stroke-width="2"/><circle cx="79" cy="40" r="3" fill="none" stroke="currentColor" stroke-width="2"/><line x1="82" y1="40" x2="112" y2="40" stroke="currentColor" stroke-width="2.5"/><circle cx="115" cy="40" r="3" fill="none" stroke="currentColor" stroke-width="2"/><text x="97" y="28" font-size="14" text-anchor="middle">K</text><line x1="118" y1="40" x2="137" y2="40" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="45" font-size="15" text-anchor="middle" font-weight="700">A</text><text x="150" y="18" font-size="14" text-anchor="middle">A₁</text><line x1="163" y1="40" x2="300" y2="40" stroke="currentColor" stroke-width="2"/><line x1="40" y1="210" x2="300" y2="210" stroke="currentColor" stroke-width="2"/><circle cx="210" cy="40" r="4" fill="currentColor"/><circle cx="210" cy="210" r="4" fill="currentColor"/><line x1="210" y1="40" x2="210" y2="72" stroke="currentColor" stroke-width="2"/><circle cx="210" cy="85" r="13" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="90" font-size="15" text-anchor="middle" font-weight="700">A</text><text x="190" y="90" font-size="14" text-anchor="end">A₂</text><line x1="210" y1="98" x2="210" y2="137" stroke="currentColor" stroke-width="2"/><circle cx="210" cy="150" r="13" fill="none" stroke="currentColor" stroke-width="2"/><line x1="200.81" y1="140.81" x2="219.19" y2="159.19" stroke="currentColor" stroke-width="2"/><line x1="200.81" y1="159.19" x2="219.19" y2="140.81" stroke="currentColor" stroke-width="2"/><text x="190" y="155" font-size="14" text-anchor="end">lampe</text><line x1="210" y1="163" x2="210" y2="210" stroke="currentColor" stroke-width="2"/><line x1="300" y1="40" x2="300" y2="110" stroke="currentColor" stroke-width="2"/><circle cx="300" cy="125" r="15" fill="none" stroke="currentColor" stroke-width="2"/><text x="300" y="131" font-size="15" text-anchor="middle" font-weight="700">M</text><text x="280" y="130" font-size="14" text-anchor="end">glacière</text><line x1="300" y1="140" x2="300" y2="210" stroke="currentColor" stroke-width="2"/></svg>
<p>La glacière contient un moteur, représenté par le symbole M. La batterie maintient entre ses bornes une tension de 12&nbsp;V. Lorsque l'interrupteur K est fermé, l'ampèremètre A<sub>1</sub> indique 4,5&nbsp;A et l'ampèremètre A<sub>2</sub> indique 0,5&nbsp;A.</p></div>
<p class="q"><b>Question 4</b> <span class="pts">(1 point)</span> : indiquer si la lampe et la glacière sont branchées en série ou en dérivation, puis donner, en justifiant, la valeur de la tension aux bornes de la glacière.</p>
<p><i>Donnée</i> : P = U × I.</p>
<p class="q"><b>Question 5</b> <span class="pts">(1 point)</span> : déterminer l'intensité du courant qui traverse la glacière, puis montrer que la puissance électrique de la glacière est égale à 48&nbsp;W.</p>
<div class="doc"><p class="doc-titre">Document 3 : production et consommation d'énergie électrique</p>
<p>Le panneau solaire convertit l'énergie lumineuse du Soleil, une source d'énergie renouvelable, en énergie électrique, qui sert à recharger la batterie.</p>
<table class="tab"><thead><tr><th colspan="2">Énergie électrique produite par le panneau en une journée d'été</th></tr></thead>
<tbody><tr><th>Temps ensoleillé</th><td>480&nbsp;Wh</td></tr><tr><th>Temps nuageux</th><td>150&nbsp;Wh</td></tr></tbody></table>
<table class="tab"><thead><tr><th>Appareil</th><th>Puissance</th><th>Durée par jour</th></tr></thead>
<tbody><tr><th>Lampe</th><td>6&nbsp;W</td><td>4&nbsp;h</td></tr><tr><th>Glacière</th><td>48&nbsp;W</td><td>8&nbsp;h en moyenne</td></tr></tbody></table>
<p>Le moteur de la glacière s'arrête quand l'intérieur est assez froid : il ne fonctionne en moyenne que 8&nbsp;h par jour.</p>
<p><i>Donnée</i> : E = P × t.</p></div>
<p class="q"><b>Question 6</b> <span class="pts">(2 points)</span> : déterminer, en expliquant la démarche, si l'énergie produite en une journée par le panneau solaire suffit à faire fonctionner la lampe et la glacière, par temps ensoleillé puis par temps nuageux.</p>

<h3>LA SÉCURITÉ</h3>
<div class="doc"><p class="doc-titre">Document 4 : extrait de la notice du réchaud</p>
<p>« Danger : n'utilisez jamais ce réchaud dans une tente, une caravane ou un local fermé. Risque d'asphyxie et d'intoxication au monoxyde de carbone. »</p></div>
<p class="q"><b>Question 7</b> <span class="pts">(2 points)</span> : expliquer pourquoi il ne faut jamais utiliser le réchaud à gaz à l'intérieur d'une tente fermée.` + REDIGE + `</p>`
      }
    ],
    annexe: "",
    corrige: [
      {
        titre: "En camping",
        html: `
<div class="rep"><p class="rq"><b>Question 1.</b> La composition d'une molécule de butane.</p>
<p>Une molécule de butane C<sub>4</sub>H<sub>10</sub> contient <b>4 atomes de carbone</b> et <b>10 atomes d'hydrogène</b>, soit 14 atomes en tout.</p>
<p class="piege"><b>Piège :</b> compter les atomes de « 2 C<sub>4</sub>H<sub>10</sub> » (deux molécules, soit 8 C et 20 H) au lieu d'une seule molécule.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Réactifs, produits et équation équilibrée.</p>
<p>Réactifs : le butane et le dioxygène. Produits : le dioxyde de carbone et l'eau.</p>
<table class="tab"><thead><tr><th>Atomes</th><th>À gauche (réactifs)</th><th>À droite (produits)</th></tr></thead>
<tbody>
<tr><th>C</th><td>2 × 4 = 8</td><td>8 × 1 = 8</td></tr>
<tr><th>H</th><td>2 × 10 = 20</td><td>10 × 2 = 20</td></tr>
<tr><th>O</th><td>13 × 2 = 26</td><td>8 × 2 + 10 × 1 = 26</td></tr>
</tbody></table>
<p>Il y a autant d'atomes de chaque sorte de chaque côté de la flèche : l'équation est équilibrée. Les atomes se conservent, ils se sont seulement réarrangés.</p>
<p class="piege"><b>Piège :</b> oublier de multiplier l'indice par le coefficient, ou oublier l'atome d'oxygène de chaque molécule d'eau (on trouverait 16 atomes d'oxygène à droite au lieu de 26).</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> La masse d'eau formée.</p>
<p>Lors d'une transformation chimique, la masse se conserve : la masse des réactifs consommés est égale à la masse des produits formés.</p>
<p class="calc">masse des réactifs = 190&nbsp;g + 680&nbsp;g = 870&nbsp;g<br>masse d'eau = 870&nbsp;g − 575&nbsp;g = 295&nbsp;g</p>
<p>La combustion de tout le butane de la cartouche forme 295&nbsp;g d'eau (sous forme de vapeur).</p>
<p class="attendu"><b>On attend :</b> la loi de conservation de la masse énoncée, puis les deux calculs posés avec l'unité.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Le type de branchement et la tension aux bornes de la glacière.</p>
<p>La lampe et la glacière sont branchées <b>en dérivation</b> : elles sont dans deux branches différentes, reliées par deux nœuds (le circuit comporte plusieurs boucles). En dérivation, la tension est la même aux bornes de chaque branche : la tension aux bornes de la glacière est égale à celle de la batterie, soit <b>12&nbsp;V</b>.</p>
<p class="piege"><b>Piège :</b> partager la tension (6&nbsp;V pour chaque appareil) comme si les appareils étaient en série.</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> L'intensité et la puissance de la glacière.</p>
<p>Loi des nœuds : l'intensité dans la branche principale (mesurée par A<sub>1</sub>) est égale à la somme des intensités dans les branches dérivées.</p>
<p class="calc">I<sub>1</sub> = I<sub>2</sub> + I<sub>glacière</sub>, donc I<sub>glacière</sub> = 4,5&nbsp;A − 0,5&nbsp;A = 4,0&nbsp;A<br>P = U × I = 12&nbsp;V × 4,0&nbsp;A = 48&nbsp;W</p>
<p>La glacière est traversée par un courant de 4,0&nbsp;A, et sa puissance électrique est bien égale à 48&nbsp;W.</p></div>

<div class="rep"><p class="rq"><b>Question 6.</b> L'énergie produite suffit-elle ? (question ouverte)</p>
<p class="calc">Lampe : E = P × t = 6&nbsp;W × 4&nbsp;h = 24&nbsp;Wh<br>Glacière : E = P × t = 48&nbsp;W × 8&nbsp;h = 384&nbsp;Wh<br>Énergie consommée en une journée : 24&nbsp;Wh + 384&nbsp;Wh = 408&nbsp;Wh</p>
<p>Par temps ensoleillé, le panneau produit 480&nbsp;Wh, plus que les 408&nbsp;Wh consommés : l'énergie produite <b>suffit</b> (il reste 72&nbsp;Wh). Par temps nuageux, il ne produit que 150&nbsp;Wh, moins que 408&nbsp;Wh : l'énergie produite <b>ne suffit pas</b> (il manque 258&nbsp;Wh). La batterie devra fournir la différence grâce à l'énergie stockée les jours précédents.</p>
<p class="valorise"><b>On valorise :</b> une démarche annoncée et des unités cohérentes (W × h = Wh) ; une proposition réaliste pour les jours nuageux (ouvrir la glacière moins souvent, éteindre la lampe plus tôt).</p>
<p class="piege"><b>Piège :</b> compter la glacière 24 heures sur 24 (1&nbsp;152&nbsp;Wh), alors que son moteur ne fonctionne que 8&nbsp;h par jour ; ou convertir la consommation en joules sans convertir aussi la production du panneau.</p>
<p class="bareme">Barème indicatif : énergie consommée (deux calculs et total) 1 point ; les deux comparaisons et les conclusions 1 point.</p></div>

<div class="rep"><p class="rq"><b>Question 7.</b> Pourquoi ne jamais utiliser le réchaud dans une tente fermée (réponse rédigée).</p>
<div class="exemple-redige">Dans une tente fermée, la combustion du butane consomme le dioxygène de l'air, qui n'est pas renouvelé. Quand le dioxygène vient à manquer, la combustion devient incomplète : elle produit du monoxyde de carbone CO, un gaz toxique, invisible et inodore, qui peut tuer. C'est pourquoi le réchaud doit toujours être utilisé dehors, dans un endroit aéré.</div>
<p class="attendu"><b>On attend :</b> la combustion consomme le dioxygène ; sans aération, il vient à manquer ; la combustion devient alors incomplète et produit du monoxyde de carbone, toxique et mortel.</p>
<p class="valorise"><b>On valorise :</b> le dioxyde de carbone qui s'accumule dans la tente ; les signes d'une combustion incomplète (flamme jaune, suie) ; le risque d'incendie de la toile.</p>
` + BAREME_LANGUE + `</div>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Lire une formule chimique (question 1).</b> L'indice, en bas à droite d'un symbole, donne le nombre d'atomes de cette sorte dans une molécule ; le coefficient, devant la formule, donne le nombre de molécules.</li>
<li><b>Vérifier une équation (question 2).</b> Faire un petit tableau : pour chaque sorte d'atome, compter à gauche puis à droite (coefficient × indice), sans oublier un atome présent dans deux produits (ici O, dans CO<sub>2</sub> et dans H<sub>2</sub>O).</li>
<li><b>Conservation de la masse (question 3).</b> Énoncer la loi en une phrase, puis poser : masse des réactifs = masse des produits, et en déduire la masse inconnue.</li>
<li><b>Lire un schéma électrique (question 4).</b> Chercher les nœuds : s'il y en a, le circuit a plusieurs branches, il est en dérivation. Citer la loi utilisée : même tension aux bornes des branches en dérivation.</li>
<li><b>Calculs (questions 5 et 6).</b> Formule → valeurs avec leurs unités → calcul posé → résultat avec unité → phrase réponse. Pour des Wh : P en W et t en h, sans passer par les secondes.</li>
<li><b>Question ouverte (question 6).</b> Annoncer la démarche : énergie consommée par chaque appareil → total d'une journée → comparaison avec chaque production → deux conclusions (soleil, nuages).</li>
<li><b>Réponse rédigée (question 7).</b> Enchaîner la cause et les conséquences : combustion → dioxygène consommé → combustion incomplète → monoxyde de carbone → danger. Deux à quatre lignes, en phrases complètes, avec les mots du cours bien orthographiés (dioxygène, combustion, monoxyde de carbone).</li>
</ol>
<p class="tip">Le sujet mélange la chimie (questions 1 à 3 et 7) et l'électricité (questions 4 à 6) : on peut commencer par la partie la plus facile pour soi, à condition de bien numéroter les réponses sur la copie.</p>`
  }

);
})();
