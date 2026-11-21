/* examens/svt.js — examens blancs de SVT (format DNB 2027 : épreuve de sciences, partie SVT, 30 minutes, 10 points)
   Chapitres du 1er trimestre : svt-ch1, svt-ch2, svt-ch3 ; fiche méthode svt-m1.
   Sujet 1 : la chatte siamoise (phénotype et environnement, allèle récessif) — svt-ch1, svt-ch2, svt-ch3
   Sujet 2 : le clone du putois à pieds noirs (noyau, espèce, diversité génétique) — svt-ch2, svt-ch1, svt-ch3
   Sujet 3 : la greffe de moelle osseuse (groupes sanguins, caryotype, mitose, méiose) — svt-ch3, svt-ch2
   Les figures sont des SVG en ligne (stroke="currentColor"). */
DATA.examens = DATA.examens || [];
DATA.examens.push(
  {
    id: "ex-svt-1",
    matiere: 'svt',
    numero: 1,
    titre: "La chatte siamoise de Noé",
    epreuve: "SCIENCES — SCIENCES DE LA VIE ET DE LA TERRE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['svt-ch1', 'svt-ch2', 'svt-ch3'],
    methodes: ['svt-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      { titre: "Une tache foncée sur le pelage d'une chatte siamoise", points: 10, html: `<p class="consigne"><b>SCIENCES DE LA VIE ET DE LA TERRE – Durée 30 minutes – 10 points</b></p>
<p>Noé a adopté Mochi, une chatte siamoise. En janvier, Mochi a été opérée : pour l'opération, la vétérinaire a rasé les poils d'une zone de son flanc. Quelques semaines plus tard, surprise : sur cette zone, les poils ont repoussé <b>foncés</b>, alors que le reste de son flanc est clair.</p>
<p>Noé cherche à comprendre ce qui s'est passé. Il se demande aussi si les futurs chatons de Mochi auront, eux aussi, une tache foncée sur le flanc.</p>
<div class="doc"><p class="doc-titre">Document 1 : le pelage du chat siamois</p>
<p>Le chat siamois a un pelage clair sur le corps et foncé aux extrémités : oreilles, museau, pattes et queue. Les chatons siamois naissent presque entièrement blancs ; leurs extrémités foncent au cours des premières semaines de vie.</p>
<p>La couleur foncée des poils est due à un pigment noir, fabriqué par des cellules de la peau situées à la base des poils. Ce pigment est fabriqué grâce à une protéine dont l'information est portée par un gène : le gène de la couleur du pelage. Chez le chat siamois, ce gène est présent sous la forme d'un allèle particulier, apparu il y a très longtemps à la suite d'une mutation : l'allèle « siamois ».</p>
<p>Un poil prend sa couleur au moment où il pousse, puis il la garde jusqu'à sa chute.</p>
</div>
<p class="q"><b>Question 1</b> <span class="pts">(2 points)</span> : à l'aide du document 1, compléter le QCM sur l'annexe.</p>
<div class="doc"><p class="doc-titre">Document 2 : une expérience sur des cellules de la peau</p>
<p><b>Protocole :</b> on prélève, dans la peau, des cellules qui fabriquent le pigment noir chez un chat siamois et chez un chat non siamois au pelage noir (témoin). Les cellules de chaque chat sont réparties en plusieurs lots, cultivés pendant 10 jours à des températures différentes. Toutes les autres conditions sont identiques. On mesure ensuite la quantité de pigment noir fabriqué.</p>
<p><b>Résultats :</b></p>
<svg class="fig-ex" viewBox="0 0 360 330" role="img" aria-label="Graphique : quantité de pigment noir fabriqué, en unités arbitraires, en fonction de la température de culture, de 26 à 40 °C, pour les cellules d'un chat siamois et celles d'un chat non siamois" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><g stroke-width="1" stroke-opacity=".25"><line x1="93.3" y1="240" x2="93.3" y2="50"/><line x1="128.5" y1="240" x2="128.5" y2="50"/><line x1="163.8" y1="240" x2="163.8" y2="50"/><line x1="199" y1="240" x2="199" y2="50"/><line x1="234.3" y1="240" x2="234.3" y2="50"/><line x1="269.5" y1="240" x2="269.5" y2="50"/><line x1="304.8" y1="240" x2="304.8" y2="50"/><line x1="340" y1="240" x2="340" y2="50"/><line x1="58" y1="221" x2="340" y2="221"/><line x1="58" y1="202" x2="340" y2="202"/><line x1="58" y1="183" x2="340" y2="183"/><line x1="58" y1="164" x2="340" y2="164"/><line x1="58" y1="145" x2="340" y2="145"/><line x1="58" y1="126" x2="340" y2="126"/><line x1="58" y1="107" x2="340" y2="107"/><line x1="58" y1="88" x2="340" y2="88"/><line x1="58" y1="69" x2="340" y2="69"/><line x1="58" y1="50" x2="340" y2="50"/></g><line x1="58" y1="240" x2="345" y2="240"/><polygon points="354,240 345,235.5 345,244.5" fill="currentColor" stroke="none"/><line x1="58" y1="240" x2="58" y2="43"/><polygon points="58,34 53.5,43 62.5,43" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none" font-size="13"><text x="58" y="258" text-anchor="middle">24</text><text x="93.3" y="258" text-anchor="middle">26</text><text x="128.5" y="258" text-anchor="middle">28</text><text x="163.8" y="258" text-anchor="middle">30</text><text x="199" y="258" text-anchor="middle">32</text><text x="234.3" y="258" text-anchor="middle">34</text><text x="269.5" y="258" text-anchor="middle">36</text><text x="304.8" y="258" text-anchor="middle">38</text><text x="340" y="258" text-anchor="middle">40</text><text x="51" y="206.5" text-anchor="end">20</text><text x="51" y="168.5" text-anchor="end">40</text><text x="51" y="130.5" text-anchor="end">60</text><text x="51" y="92.5" text-anchor="end">80</text><text x="51" y="54.5" text-anchor="end">100</text><text x="51" y="244.5" text-anchor="end">0</text></g><g fill="currentColor" stroke="none"><text x="6" y="22">Pigment noir fabriqué (u.a.)</text><text x="354" y="280" text-anchor="end">Température de culture (°C)</text></g><polyline points="93.3,69 128.5,65.2 163.8,61.4 199,57.6 234.3,53.8 269.5,50 304.8,50 340,50" stroke-dasharray="6 4"/><polyline points="93.3,78.5 128.5,88 163.8,107 199,145 234.3,221 269.5,240 304.8,240 340,240" stroke-width="2"/><path d="M89.3 65L97.3 73M89.3 73L97.3 65" stroke-width="2"/><path d="M124.5 61.2L132.5 69.2M124.5 69.2L132.5 61.2" stroke-width="2"/><path d="M159.8 57.4L167.8 65.4M159.8 65.4L167.8 57.4" stroke-width="2"/><path d="M195 53.6L203 61.6M195 61.6L203 53.6" stroke-width="2"/><path d="M230.3 49.8L238.3 57.8M230.3 57.8L238.3 49.8" stroke-width="2"/><path d="M265.5 46L273.5 54M265.5 54L273.5 46" stroke-width="2"/><path d="M300.8 46L308.8 54M300.8 54L308.8 46" stroke-width="2"/><path d="M336 46L344 54M336 54L344 46" stroke-width="2"/><circle cx="93.3" cy="78.5" r="4" fill="currentColor"/><circle cx="128.5" cy="88" r="4" fill="currentColor"/><circle cx="163.8" cy="107" r="4" fill="currentColor"/><circle cx="199" cy="145" r="4" fill="currentColor"/><circle cx="234.3" cy="221" r="4" fill="currentColor"/><circle cx="269.5" cy="240" r="4" fill="currentColor"/><circle cx="304.8" cy="240" r="4" fill="currentColor"/><circle cx="340" cy="240" r="4" fill="currentColor"/><line x1="20" y1="291" x2="52" y2="291" stroke-dasharray="6 4"/><path d="M32 287L40 295M32 295L40 287" stroke-width="2"/><line x1="20" y1="313" x2="52" y2="313" stroke-width="2"/><circle cx="36" cy="313" r="4" fill="currentColor"/><g fill="currentColor" stroke="none" font-size="13"><text x="60" y="296">cellules du chat non siamois (témoin)</text><text x="60" y="318">cellules du chat siamois</text></g></svg>
<p class="notes">u.a. : unité arbitraire, qui permet de comparer les quantités de pigment entre elles.</p>
<p class="source">Résultats fictifs, simplifiés pour l'exercice.</p>
</div>
<p class="q"><b>Question 2</b> <span class="pts">(2 points)</span> : à l'aide du document 2, comparer la quantité de pigment noir fabriquée par les cellules du chat siamois et par celles du chat non siamois selon la température. Des valeurs chiffrées sont attendues.</p>
<div class="doc"><p class="doc-titre">Document 3 : températures mesurées chez Mochi</p>
<p>Mesures réalisées sur Mochi en janvier, dans une pièce à 20 °C, avec un thermomètre placé au contact de la peau. La dernière ligne donne la température habituelle à l'intérieur du corps d'une chatte.</p>
<table class="tab">
<tr><th>Zone du corps</th><th>Température (°C)</th></tr>
<tr><td>Oreilles</td><td>28</td></tr>
<tr><td>Museau</td><td>30</td></tr>
<tr><td>Pattes</td><td>30</td></tr>
<tr><td>Queue</td><td>30</td></tr>
<tr><td>Dos</td><td>36</td></tr>
<tr><td>Ventre</td><td>37</td></tr>
<tr><td>Flanc, zone couverte de poils</td><td>36</td></tr>
<tr><td>Flanc, zone rasée (après l'opération)</td><td>32</td></tr>
<tr><td>Intérieur du corps (dans l'utérus d'une chatte)</td><td>38,5</td></tr>
</table>
<p class="source">Données fictives.</p>
</div>
<p class="q"><b>Question 3</b> <span class="pts">(2 points)</span> : à l'aide des documents 1, 2 et 3, expliquer pourquoi le pelage de Mochi est foncé aux extrémités et clair sur le reste du corps.</p>
<div class="doc"><p class="doc-titre">Document 4 : la transmission du pelage siamois</p>
<p>Le pelage siamois est un caractère héréditaire. Le gène de la couleur du pelage existe sous plusieurs allèles, parmi lesquels :</p>
<ul>
<li>l'allèle « coloré », noté <b>C</b>, qui permet de fabriquer du pigment quelle que soit la température ;</li>
<li>l'allèle « siamois », noté <b>s</b>, qui ne permet d'en fabriquer que dans les zones froides du corps.</li>
</ul>
<p>L'allèle C est dominant, l'allèle s est récessif. Mochi possède deux allèles s : son génotype est (s//s).</p>
<p>Noé souhaite que Mochi ait des chatons avec Tao, un mâle siamois, lui aussi de génotype (s//s). La vétérinaire lui précise : « Les poils foncés du flanc de Mochi tomberont lors de la prochaine mue ; les nouveaux poils repousseront clairs. »</p>
</div>
<p class="q"><b>Question 4</b> <span class="pts">(4 points)</span> : Noé pense que les chatons de Mochi et de Tao naîtront avec une tache foncée sur le flanc, comme leur mère. À l'aide de l'ensemble des documents et de vos connaissances, expliquer pourquoi les poils du flanc de Mochi ont repoussé foncés, puis indiquer, en argumentant, si Noé a raison.</p>
<p class="consigne">La réponse sera rédigée en 20 lignes maximum. La qualité de la rédaction sera évaluée.</p>` }
    ],
    annexe: `<p class="q"><b>Question 1 (2 points) :</b> à l'aide du document 1, pour chaque affirmation, cocher la bonne réponse.</p>
<p class="q sous"><b>1.</b> Chez le chat siamois, les poils foncés se trouvent :</p>
<p>☐ sur tout le corps,<br>☐ sur le dos et le ventre,<br>☐ aux extrémités du corps : oreilles, museau, pattes et queue.</p>
<p class="q sous"><b>2.</b> À la naissance, les chatons siamois sont :</p>
<p>☐ presque entièrement blancs,<br>☐ foncés aux extrémités du corps,<br>☐ foncés sur tout le corps.</p>
<p class="q sous"><b>3.</b> Le pigment noir des poils est fabriqué :</p>
<p>☐ par les poils eux-mêmes, une fois qu'ils ont fini de pousser,<br>☐ par des cellules de la peau, grâce à une protéine dont l'information est portée par un gène,<br>☐ à partir de l'alimentation du chat, sans intervention d'un gène.</p>
<p class="q sous"><b>4.</b> L'allèle « siamois » est :</p>
<p>☐ un chromosome supplémentaire,<br>☐ un caractère acquis au cours de la vie du chat,<br>☐ une version du gène de la couleur du pelage, apparue par mutation.</p>`,
    corrige: [
      { titre: "Corrigé — Une tache foncée sur le pelage d'une chatte siamoise", html: `<div class="rep"><p class="rq"><b>Question 1.</b> QCM sur le document 1.</p>
<p>1 : aux extrémités du corps (oreilles, museau, pattes et queue). — 2 : presque entièrement blancs. — 3 : par des cellules de la peau, grâce à une protéine dont l'information est portée par un gène. — 4 : une version du gène de la couleur du pelage, apparue par mutation.</p>
<p class="bareme">0,5 point par bonne réponse.</p>
<p class="piege"><b>Piège :</b> l'allèle « siamois » n'est pas un caractère acquis. C'est une version du gène, présente dès la fécondation dans toutes les cellules du chat.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Comparer la production de pigment des deux chats selon la température.</p>
<p>Le document 2 montre que les cellules du chat non siamois (témoin) fabriquent beaucoup de pigment noir quelle que soit la température : de 90 u.a. à 26 °C à 100 u.a. à partir de 36 °C. Au contraire, chez le chat siamois, la quantité de pigment dépend de la température. Elle est élevée aux basses températures (85 u.a. à 26 °C, 70 u.a. à 30 °C), puis elle chute quand la température augmente (50 u.a. à 32 °C, 10 u.a. à 34 °C). Elle devient nulle à partir de 36 °C (0 u.a.). Les cellules du chat siamois ne fabriquent donc du pigment qu'à basse température, en dessous de 36 °C.</p>
<p class="attendu"><b>On attend :</b> les deux courbes comparées aux mêmes températures ; des valeurs avec leurs unités (°C et u.a.), dont 0 u.a. à 36 °C pour le siamois ; une phrase de conclusion. Les valeurs lues à 5 u.a. près sont acceptées.</p>
<p class="valorise"><b>On valorise :</b> le rôle du témoin. Comme le chat non siamois fabrique du pigment à toutes les températures, c'est bien l'allèle « siamois » qui rend la fabrication du pigment dépendante de la température.</p>
<p class="piege"><b>Piège :</b> décrire une seule courbe (ce n'est pas comparer), oublier les unités, ou écrire que le chat siamois « ne fabrique jamais de pigment ».</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Pourquoi les extrémités sont-elles foncées et le corps clair ?</p>
<p>D'après le document 3, la peau des extrémités de Mochi est froide : 28 °C aux oreilles, 30 °C au museau, aux pattes et à la queue. Le document 2 montre qu'à ces températures, les cellules d'un chat siamois fabriquent beaucoup de pigment noir : 80 u.a. à 28 °C et 70 u.a. à 30 °C. Les poils qui y poussent sont donc foncés (document 1). Au contraire, la peau du dos, du ventre et des flancs couverts de poils est chaude : 36 à 37 °C. À ces températures, les cellules du chat siamois ne fabriquent pas de pigment (0 u.a.) : les poils y sont clairs. Toutes les cellules de Mochi possèdent pourtant le même allèle « siamois ». C'est donc la température de la peau, c'est-à-dire l'environnement, qui explique la répartition des couleurs.</p>
<p class="attendu"><b>On attend :</b> pour les extrémités et pour le corps, la température (document 3) reliée à la quantité de pigment lue sur la courbe du siamois (document 2), puis à la couleur des poils (document 1).</p>
<p class="valorise"><b>On valorise :</b> l'idée que toutes les cellules ont la même information génétique (elles viennent de la cellule-œuf par mitoses) ; la formule « phénotype = génotype + influence de l'environnement ».</p>
<p class="piege"><b>Piège :</b> dire que les cellules des oreilles ont un autre gène ou un autre allèle, ou que le froid « colore » directement les poils. Le froid permet seulement à la protéine de l'allèle « siamois » de fonctionner.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Question ouverte : pourquoi la tache foncée ? Noé a-t-il raison ?</p>
<p><b>Démarche attendue :</b></p>
<ol class="etapes">
<li><b>Poser le problème :</b> la tache foncée du flanc est-elle un caractère héréditaire, transmissible aux chatons ?</li>
<li><b>Expliquer la tache (documents 1, 2 et 3) :</b> la zone rasée n'est plus protégée par les poils. Sa peau est à 32 °C au lieu de 36 °C. À 32 °C, les cellules du siamois fabriquent 50 u.a. de pigment, contre 0 u.a. à 36 °C : les nouveaux poils poussent foncés.</li>
<li><b>Interpréter :</b> le génotype de Mochi (s//s) n'a pas changé. Seul l'environnement (la température de la peau) a modifié son phénotype. La tache est un caractère acquis, d'ailleurs temporaire : elle disparaîtra à la mue (document 4).</li>
<li><b>Prévoir le génotype des chatons (document 4 et cours) :</b> les ovules de Mochi, formés par méiose, contiennent un seul allèle du gène, l'allèle s. Les spermatozoïdes de Tao aussi. La fécondation donne des chatons (s//s) : ils seront siamois.</li>
<li><b>Prévoir leur phénotype (documents 1, 2 et 3) :</b> dans l'utérus, à 38,5 °C, pas de pigment (0 u.a.) : ils naîtront presque blancs, puis leurs extrémités, plus froides, fonceront. Leur flanc, couvert de poils, restera clair.</li>
<li><b>Conclure :</b> Noé a tort.</li>
</ol>
<div class="exemple-redige"><p>On cherche à savoir pourquoi les poils du flanc de Mochi ont repoussé foncés et si cette tache sera transmise à ses chatons.</p>
<p>Après le rasage, la peau du flanc n'est plus protégée par les poils : en janvier, elle n'est qu'à 32 °C, alors que la peau du flanc couverte de poils est à 36 °C (document 3). Or le document 2 montre qu'à 32 °C, les cellules d'un chat siamois fabriquent 50 u.a. de pigment noir, contre 0 u.a. à 36 °C. Comme un poil prend sa couleur au moment où il pousse (document 1), les nouveaux poils du flanc ont poussé foncés.</p>
<p>Les allèles de Mochi n'ont pas changé : elle est toujours (s//s). Seul l'environnement, ici la température de la peau, a modifié son phénotype. La tache est donc un caractère acquis ; elle disparaîtra d'ailleurs à la prochaine mue (document 4).</p>
<p>Un caractère acquis ne se transmet pas, car il ne modifie pas l'information génétique des gamètes. Les ovules de Mochi, formés par méiose, contiennent un seul allèle du gène de la couleur du pelage : l'allèle s. Les spermatozoïdes de Tao aussi. Après la fécondation, les chatons seront donc (s//s), siamois comme leurs parents. Dans l'utérus, à 38,5 °C, leurs cellules ne fabriquent pas de pigment (0 u.a.) : ils naîtront presque blancs, puis leurs extrémités, plus froides, fonceront. Leur flanc, couvert de poils et donc chaud, restera clair.</p>
<p>Noé a donc tort : les chatons hériteront du pelage siamois, qui est héréditaire, mais pas de la tache du flanc, qui est un caractère acquis.</p></div>
<p class="bareme">Barème indicatif (4 points) : explication de la tache avec des valeurs (1 point) ; tache = caractère acquis dû à l'environnement, génotype inchangé (1 point) ; génotype des chatons par méiose et fécondation, et leur phénotype (1 point) ; maîtrise de la langue : phrases correctes, vocabulaire précis, raisonnement organisé (1 point).</p>
<p class="valorise"><b>On valorise :</b> la comparaison avec le bronzage ou le lapin russe du cours ; l'emploi juste du mot « mutation » (la mutation est ancienne et transmise ; le froid, lui, ne modifie pas l'ADN).</p>
<p class="piege"><b>Piège :</b> penser que le froid a provoqué une mutation, ou que tout ce que l'on observe chez la mère se transmet aux petits.</p></div>` }
    ],
    methode: `<ol class="etapes">
<li><b>Lire l'introduction et noter les deux problèmes :</b> pourquoi la tache foncée ? les chatons l'auront-ils ? Toutes les questions mènent à la réponse.</li>
<li><b>Question 1 (QCM) :</b> relire le document 1 phrase par phrase et cocher une seule case par affirmation. Les mauvaises réponses « sonnent juste » mais ne sont pas dans le texte.</li>
<li><b>Lire le graphique (question 2) :</b> axe horizontal = température (°C), axe vertical = pigment (u.a.) ; la légende indique quelle courbe est le témoin. « Comparer », c'est donner les deux courbes aux mêmes températures, valeurs et unités à l'appui, puis conclure en une phrase.</li>
<li><b>Croiser les documents (question 3) :</b> pour chaque zone, relever sa température (document 3), lire la quantité de pigment correspondante sur la courbe du siamois (document 2), puis en déduire la couleur des poils (document 1). Rédiger : je vois… je sais… je conclus…</li>
<li><b>Préparer la question ouverte au brouillon :</b> une ligne par document (flanc rasé à 32 °C ; 50 u.a. à 32 °C ; génotype (s//s) ; la tache disparaît à la mue ; 38,5 °C dans l'utérus), puis la notion du cours qui va avec : caractère acquis, méiose, fécondation.</li>
<li><b>Rédiger la question 4 dans l'ordre :</b> problème ; explication de la tache avec des valeurs ; génotype inchangé, donc caractère acquis ; génotype puis phénotype des chatons ; conclusion qui répond à la question : « Noé a tort, car… ». Vocabulaire attendu : phénotype, génotype, allèle récessif, environnement, gamètes, méiose, fécondation.</li>
<li><b>Gérer les 30 minutes :</b> 5 minutes de lecture, 12 minutes pour les questions 1 à 3, 13 minutes pour la question 4.</li>
</ol>
<p class="tip">La tache de Mochi, c'est comme un bronzage : l'environnement change le phénotype, mais pas l'ADN des gamètes. Elle ne peut donc pas passer aux chatons.</p>`
  },
  {
    id: "ex-svt-2",
    matiere: 'svt',
    numero: 2,
    titre: "Un clone pour sauver le putois à pieds noirs",
    epreuve: "SCIENCES — SCIENCES DE LA VIE ET DE LA TERRE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['svt-ch2', 'svt-ch1', 'svt-ch3'],
    methodes: ['svt-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      { titre: "Un clone pour sauver le putois à pieds noirs", points: 10, html: `<p class="consigne"><b>SCIENCES DE LA VIE ET DE LA TERRE – Durée 30 minutes – 10 points</b></p>
<p>Le 10 décembre 2020, aux États-Unis, naît Elizabeth Ann, une petite femelle putois à pieds noirs. C'est le premier animal d'une espèce menacée des États-Unis à avoir été cloné. Pour les scientifiques, ce clone est un espoir pour sauver cette espèce.</p>
<p class="source">D'après U.S. Fish and Wildlife Service, communiqué du 18 février 2021.</p>
<div class="doc"><p class="doc-titre">Document 1 : le putois à pieds noirs, une espèce sauvée de justesse</p>
<p>Le putois à pieds noirs est un petit carnivore des prairies d'Amérique du Nord. Victime de la destruction de son milieu de vie et de maladies, il est considéré comme éteint à la fin des années 1970. En 1981, une petite population est redécouverte dans le Wyoming (États-Unis). Mais en 1985, une maladie, la maladie de Carré, la décime : de 1985 à 1987, les 18 derniers putois sauvages connus sont capturés pour être protégés et reproduits en captivité.</p>
<p>Seuls 7 de ces animaux ont eu des descendants. À part les clones présentés dans ce sujet, tous les putois à pieds noirs vivant aujourd'hui descendent de ces 7 ancêtres : ils sont aussi apparentés entre eux que des frères et sœurs ou des cousins.</p>
<p>En 1988, des cellules prélevées sur Willa, une femelle capturée dans la nature, ont été congelées et conservées dans un laboratoire. Willa est morte sans avoir eu de descendants. L'analyse de son ADN montre qu'elle possède environ 3 fois plus de variations génétiques uniques (des allèles absents chez les putois actuels) que la moyenne des putois actuels.</p>
<p class="source">D'après U.S. Fish and Wildlife Service (2021 et 2024) et National Geographic (2021).</p>
</div>
<p class="q"><b>Question 1</b> <span class="pts">(1,5 point)</span> : à l'aide du document 1 et de vos connaissances, expliquer pourquoi les putois à pieds noirs actuels possèdent très souvent les mêmes allèles, puis en quoi cela menace l'espèce.</p>
<div class="doc"><p class="doc-titre">Document 2 : le clonage de Willa</p>
<svg class="fig-ex" viewBox="0 0 360 505" role="img" aria-label="Schéma du clonage en six étapes : 1, on prélève le noyau d'une cellule de Willa, putois à pieds noirs ; 2, on retire le noyau d'un ovule de la femelle n° 1, un furet domestique ; 3, on place le noyau de Willa dans l'ovule sans noyau ; 4, la cellule obtenue se divise et forme un embryon ; 5, l'embryon est placé dans l'utérus de la femelle n° 2, un furet domestique, mère porteuse ; 6, naissance d'Elizabeth Ann" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><g fill="currentColor" stroke="none"><text x="90" y="18" text-anchor="middle" font-weight="bold">Willa</text><text x="90" y="35" text-anchor="middle" font-size="13">putois à pieds noirs</text><text x="270" y="18" text-anchor="middle" font-weight="bold">Femelle n° 1</text><text x="270" y="35" text-anchor="middle" font-size="13">furet domestique</text></g><circle cx="90" cy="80" r="27"/><circle cx="90" cy="80" r="11" fill="currentColor" fill-opacity=".85"/><circle cx="270" cy="82" r="31"/><circle cx="270" cy="82" r="10" fill="currentColor" fill-opacity=".25" stroke-dasharray="3 2"/><g fill="currentColor" stroke="none" font-size="13"><text x="90" y="124" text-anchor="middle">cellule</text><text x="270" y="130" text-anchor="middle">ovule</text></g><line x1="90" y1="132" x2="90" y2="157"/><polygon points="90,166 94.5,157 85.5,157" fill="currentColor" stroke="none"/><circle cx="68" cy="149" r="10"/><text x="68" y="153.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">1</text><line x1="270" y1="138" x2="270" y2="151"/><polygon points="270,160 274.5,151 265.5,151" fill="currentColor" stroke="none"/><circle cx="292" cy="149" r="10"/><text x="292" y="153.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">2</text><circle cx="90" cy="182" r="11" fill="currentColor" fill-opacity=".85"/><circle cx="270" cy="194" r="31"/><g fill="currentColor" stroke="none" font-size="13"><text x="90" y="212" text-anchor="middle">noyau de Willa</text><text x="270" y="242" text-anchor="middle">ovule sans noyau</text></g><line x1="100" y1="222" x2="150.9" y2="262.4"/><polygon points="158,268 153.7,258.9 148.2,265.9" fill="currentColor" stroke="none"/><line x1="252" y1="250" x2="210.5" y2="265"/><polygon points="202,268 212,269.2 208.9,260.7" fill="currentColor" stroke="none"/><circle cx="180" cy="236" r="10"/><text x="180" y="240.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">3</text><circle cx="180" cy="300" r="29"/><circle cx="180" cy="300" r="11" fill="currentColor" fill-opacity=".85"/><g fill="currentColor" stroke="none" font-size="13"><text x="218" y="296">ovule sans noyau</text><text x="218" y="313">+ noyau de Willa</text></g><line x1="180" y1="334" x2="180" y2="353"/><polygon points="180,362 184.5,353 175.5,353" fill="currentColor" stroke="none"/><circle cx="158" cy="348" r="10"/><text x="158" y="352.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">4</text><circle cx="171" cy="375" r="9"/><circle cx="171" cy="375" r="3.5" fill="currentColor" fill-opacity=".85"/><circle cx="189" cy="375" r="9"/><circle cx="189" cy="375" r="3.5" fill="currentColor" fill-opacity=".85"/><circle cx="171" cy="393" r="9"/><circle cx="171" cy="393" r="3.5" fill="currentColor" fill-opacity=".85"/><circle cx="189" cy="393" r="9"/><circle cx="189" cy="393" r="3.5" fill="currentColor" fill-opacity=".85"/><g fill="currentColor" stroke="none" font-size="13"><text x="206" y="389">embryon</text></g><line x1="180" y1="408" x2="180" y2="423"/><polygon points="180,432 184.5,423 175.5,423" fill="currentColor" stroke="none"/><circle cx="158" cy="420" r="10"/><text x="158" y="424.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">5</text><g fill="currentColor" stroke="none"><text x="180" y="452" text-anchor="middle" font-size="13">Femelle n° 2 (furet domestique) : mère porteuse</text></g><line x1="180" y1="460" x2="180" y2="473"/><polygon points="180,482 184.5,473 175.5,473" fill="currentColor" stroke="none"/><circle cx="158" cy="471" r="10"/><text x="158" y="475.5" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor" stroke="none">6</text><g fill="currentColor" stroke="none"><text x="180" y="500" text-anchor="middle" font-weight="bold">Elizabeth Ann</text></g></svg>
<ol>
<li>On prélève le noyau d'une cellule de Willa, conservée congelée depuis 1988.</li>
<li>On prélève un ovule chez une femelle de furet domestique (femelle n° 1), une espèce proche, et on retire son noyau.</li>
<li>On place le noyau de la cellule de Willa dans l'ovule sans noyau.</li>
<li>La cellule obtenue se divise : elle forme un embryon.</li>
<li>L'embryon est placé dans l'utérus d'une autre femelle de furet domestique (femelle n° 2), qui sert de mère porteuse.</li>
<li>Le 10 décembre 2020 naît Elizabeth Ann. En 2023, deux autres clones de Willa, Noreen et Antonia, sont obtenus de la même façon.</li>
</ol>
<p class="source">D'après National Geographic (2021) et U.S. Fish and Wildlife Service (2024).</p>
</div>
<div class="doc"><p class="doc-titre">Document 3 : Elizabeth Ann et les trois femelles qui ont participé à sa naissance</p>
<p>Elizabeth Ann possède les caractères du putois à pieds noirs : pelage beige, masque noir autour des yeux, pattes noires et bout de la queue noir.</p>
<table class="tab">
<tr><th>Femelle</th><th>Espèce</th><th>ADN du noyau de ses cellules, comparé à celui d'Elizabeth Ann</th></tr>
<tr><td>Willa</td><td>putois à pieds noirs</td><td>identique</td></tr>
<tr><td>Femelle n° 1 (a donné l'ovule)</td><td>furet domestique</td><td>différent</td></tr>
<tr><td>Femelle n° 2 (mère porteuse)</td><td>furet domestique</td><td>différent</td></tr>
</table>
<p class="source">Résultats présentés de façon simplifiée.</p>
</div>
<p class="q"><b>Question 2</b> <span class="pts">(2 points)</span> : à l'aide des documents 2 et 3, pour chaque affirmation, cocher « vrai » ou « faux » dans le tableau de l'annexe.</p>
<p class="q"><b>Question 3</b> <span class="pts">(2,5 points)</span> : à l'aide des documents 2 et 3 et de vos connaissances, montrer que les caractères d'Elizabeth Ann sont déterminés par l'information génétique contenue dans le noyau, puis expliquer pourquoi toutes les cellules de son corps possèdent, dans leur noyau, le même ADN que Willa.</p>
<div class="doc"><p class="doc-titre">Document 4 : la descendance d'Antonia, clone de Willa</p>
<p>En 2024, Antonia s'est accouplée avec Urchin, un mâle putois à pieds noirs né en captivité qui, comme les autres putois nés en captivité, descend des 7 ancêtres. En juin 2024, elle a donné naissance à trois petits ; deux ont survécu : Sibert et Red Cloud. En 2025, Antonia et ses deux petits, devenus adultes, ont à leur tour eu des petits.</p>
<svg class="fig-ex" viewBox="0 0 360 400" role="img" aria-label="Arbre généalogique : Willa, dont les cellules ont été congelées en 1988, a été clonée en 2023, ce qui a donné Antonia. Antonia et Urchin, un mâle né en captivité, ont eu deux petits nés en 2024 : Sibert, une femelle, et Red Cloud, un mâle. Antonia, Sibert et Red Cloud portent des allèles venus de Willa ; Urchin n'en porte pas" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="70" cy="40" r="15" fill="currentColor" fill-opacity=".35"/><line x1="70" y1="59" x2="70" y2="132" stroke-dasharray="5 4"/><polygon points="70,141 74.5,132 65.5,132" fill="currentColor" stroke="none"/><circle cx="70" cy="160" r="15" fill="currentColor" fill-opacity=".35"/><rect x="245" y="145" width="30" height="30"/><line x1="85" y1="160" x2="245" y2="160"/><line x1="165" y1="160" x2="165" y2="238"/><line x1="120" y1="238" x2="220" y2="238"/><line x1="120" y1="238" x2="120" y2="260"/><line x1="220" y1="238" x2="220" y2="260"/><circle cx="120" cy="275" r="15" fill="currentColor" fill-opacity=".35"/><rect x="205" y="260" width="30" height="30" fill="currentColor" fill-opacity=".35"/><g fill="currentColor" stroke="none"><text x="96" y="36" font-weight="bold">Willa</text><text x="96" y="53" font-size="13">cellules congelées en 1988</text><text x="82" y="105" font-size="13" font-style="italic">clonage (2023)</text><text x="70" y="196" text-anchor="middle" font-weight="bold">Antonia</text><text x="70" y="213" text-anchor="middle" font-size="13">clone de Willa</text><text x="260" y="196" text-anchor="middle" font-weight="bold">Urchin</text><text x="260" y="213" text-anchor="middle" font-size="13">mâle né en captivité</text><text x="120" y="311" text-anchor="middle" font-weight="bold">Sibert</text><text x="120" y="328" text-anchor="middle" font-size="13">née en 2024</text><text x="220" y="311" text-anchor="middle" font-weight="bold">Red Cloud</text><text x="220" y="328" text-anchor="middle" font-size="13">né en 2024</text></g><rect x="40" y="356" width="14" height="14" fill="currentColor" fill-opacity=".35"/><circle cx="69" cy="363" r="7" fill="currentColor" fill-opacity=".35"/><rect x="40" y="380" width="14" height="14"/><circle cx="160" cy="387" r="7"/><g fill="currentColor" stroke="none" font-size="13"><text x="84" y="368">porte des allèles venus de Willa</text><text x="60" y="392">mâle</text><text x="173" y="392">femelle</text></g></svg>
<p class="source">D'après U.S. Fish and Wildlife Service (novembre 2024) et Smithsonian's National Zoo and Conservation Biology Institute (2025).</p>
</div>
<p class="q"><b>Question 4</b> <span class="pts">(4 points)</span> : « Le clonage de Willa peut aider à sauver le putois à pieds noirs », affirment les scientifiques. À l'aide de l'ensemble des documents et de vos connaissances, expliquer cette affirmation. La réponse montrera notamment que les clones de Willa appartiennent bien à l'espèce putois à pieds noirs.</p>
<p class="consigne">La réponse sera rédigée en 20 lignes maximum. La qualité de la rédaction sera évaluée.</p>` }
    ],
    annexe: `<p class="q"><b>Question 2 (2 points) :</b> à l'aide des documents 2 et 3, pour chaque affirmation, cocher la case « vrai » ou la case « faux ».</p>
<table class="tab">
<tr><th>Affirmation</th><th>Vrai</th><th>Faux</th></tr>
<tr><td>1. L'ovule utilisé pour le clonage provient d'une femelle de furet domestique.</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>2. Le noyau de cet ovule a été conservé dans la cellule qui a formé l'embryon.</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>3. Elizabeth Ann s'est développée dans l'utérus d'une femelle putois à pieds noirs.</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>4. L'ADN du noyau des cellules d'Elizabeth Ann est identique à celui de Willa.</td><td class="vide"></td><td class="vide"></td></tr>
</table>`,
    corrige: [
      { titre: "Corrigé — Un clone pour sauver le putois à pieds noirs", html: `<div class="rep"><p class="rq"><b>Question 1.</b> Pourquoi les mêmes allèles ? En quoi est-ce une menace ?</p>
<p>D'après le document 1, tous les putois à pieds noirs actuels descendent des 7 seuls animaux qui se sont reproduits en captivité. Ils n'ont donc reçu que les allèles de ces 7 ancêtres : ils sont aussi apparentés que des frères et sœurs ou des cousins, et possèdent très souvent les mêmes allèles. La diversité génétique de l'espèce est très faible. Or, dans une population variée, certains individus possèdent des allèles qui leur permettent de mieux résister à une maladie ou à un changement du milieu. Chez le putois, une nouvelle maladie, comme la maladie de Carré en 1985, risquerait de toucher tous les individus de la même façon : l'espèce pourrait disparaître.</p>
<p class="attendu"><b>On attend :</b> 7 ancêtres, donc les mêmes allèles et une faible diversité génétique (0,75 point) ; la menace : une maladie pourrait toucher tous les individus de la même façon (0,75 point).</p>
<p class="piege"><b>Piège :</b> confondre diversité génétique et nombre d'individus. Même nombreux, des putois issus de 7 ancêtres restent génétiquement très proches.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Vrai ou faux (documents 2 et 3).</p>
<p>1 : vrai. — 2 : faux (le noyau de l'ovule a été retiré, étape 2). — 3 : faux (la mère porteuse est un furet domestique). — 4 : vrai.</p>
<p class="bareme">0,5 point par bonne réponse.</p>
<p class="piege"><b>Piège :</b> l'affirmation 2. Tout l'intérêt de l'expérience est que l'ovule n'apporte plus de noyau.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Montrer que l'information génétique est dans le noyau ; expliquer pourquoi toutes les cellules ont l'ADN de Willa.</p>
<p>Elizabeth Ann est issue de trois femelles (document 2). Willa, un putois à pieds noirs, a fourni le noyau d'une cellule ; la femelle n° 1, un furet domestique, a fourni un ovule dont on a retiré le noyau ; la femelle n° 2, un autre furet domestique, l'a portée dans son utérus. Or Elizabeth Ann possède les caractères du putois à pieds noirs (masque noir, pattes noires, bout de la queue noir), et l'ADN de son noyau est identique à celui de Willa et différent de celui des deux furets (document 3). Elle ressemble donc à l'animal qui a donné le noyau, et non à celui qui a donné l'ovule ni à la mère porteuse : l'information génétique qui détermine ses caractères est contenue dans le noyau, portée par l'ADN des chromosomes.</p>
<p>Ensuite, la cellule obtenue s'est divisée un très grand nombre de fois par mitose pour former l'embryon, puis tout le corps d'Elizabeth Ann. Avant chaque mitose, l'ADN est copié, et chaque cellule-fille reçoit une copie identique des chromosomes. Toutes ses cellules possèdent donc dans leur noyau le même ADN que Willa.</p>
<p class="bareme">1,5 point pour le rôle du noyau (comparaison avec les trois femelles, conclusion) ; 1 point pour la mitose (copie de l'ADN, cellules-filles identiques).</p>
<p class="valorise"><b>On valorise :</b> le rapprochement avec la brebis Dolly (1996) ; la chaîne noyau → chromosomes → ADN → gènes → allèles.</p>
<p class="piege"><b>Piège :</b> dire qu'Elizabeth Ann « ressemble à sa mère ». Sa mère porteuse est un furet domestique, qui ne lui a transmis aucune information génétique.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Question ouverte : comment le clonage de Willa peut-il aider à sauver l'espèce ?</p>
<p><b>Démarche attendue :</b></p>
<ol class="etapes">
<li><b>Poser le problème :</b> comment le clone d'un animal mort depuis plus de 30 ans peut-il aider à sauver une espèce ?</li>
<li><b>Document 1 :</b> l'espèce est menacée par sa faible diversité génétique (7 ancêtres). Willa possède environ 3 fois plus de variations génétiques uniques : des allèles absents de la population actuelle.</li>
<li><b>Documents 2 et 3 :</b> les clones ont reçu le noyau de Willa ; l'ADN de leur noyau est identique au sien. Ils possèdent donc ses allèles.</li>
<li><b>Document 4 et cours, la notion d'espèce :</b> Antonia s'est reproduite avec Urchin, un putois à pieds noirs, et leurs petits ont eux-mêmes eu des petits en 2025. Leurs descendants sont fertiles : c'est le critère d'interfécondité. Les clones sont donc bien des putois à pieds noirs, même s'ils sont nés d'une mère porteuse furet.</li>
<li><b>Transmission :</b> par la méiose, chaque gamète d'Antonia emporte la moitié de ses allèles, donc des allèles de Willa. La fécondation les associe à ceux d'Urchin. Sibert et Red Cloud les transmettent à leur tour.</li>
<li><b>Conclure :</b> les allèles de Willa se répandent et la diversité génétique de l'espèce augmente. Il y a alors plus de chances que certains individus résistent à une nouvelle maladie.</li>
</ol>
<div class="exemple-redige"><p>On cherche à expliquer comment le clonage de Willa, morte depuis plus de 30 ans, peut aider à sauver le putois à pieds noirs.</p>
<p>Le document 1 montre que l'espèce est menacée par sa faible diversité génétique : tous les putois actuels descendent de 7 ancêtres et possèdent souvent les mêmes allèles. Une seule maladie pourrait donc tous les toucher. Or Willa possède environ 3 fois plus de variations génétiques uniques que la moyenne des putois actuels : certains de ses allèles ont disparu de la population.</p>
<p>Les documents 2 et 3 montrent que les clones de Willa ont été obtenus à partir du noyau d'une de ses cellules : l'ADN de leur noyau est identique au sien. Ils possèdent donc tous ses allèles.</p>
<p>Ces clones appartiennent bien à l'espèce putois à pieds noirs, même s'ils sont nés d'une mère porteuse furet domestique. En effet, une espèce regroupe des individus capables de se reproduire entre eux et d'avoir des descendants fertiles. Or Antonia s'est reproduite avec Urchin, un putois à pieds noirs, et leurs petits, Sibert et Red Cloud, ont eux-mêmes eu des petits en 2025 (document 4) : ils sont fertiles.</p>
<p>Lors de la formation des gamètes par méiose, Antonia transmet à chacun de ses petits la moitié de ses allèles, donc des allèles de Willa. Sibert et Red Cloud les transmettent à leur tour. Génération après génération, les allèles de Willa se répandent dans la population, qui devient plus variée.</p>
<p>Le clonage de Willa augmente donc la diversité génétique de l'espèce : avec des individus plus différents, il y a plus de chances que certains résistent à une nouvelle maladie, et l'espèce a plus de chances de survivre.</p></div>
<p class="bareme">Barème indicatif (4 points) : faible diversité de l'espèce et allèles uniques de Willa (1 point) ; les clones ont l'ADN du noyau de Willa (0,5 point) ; même espèce grâce au critère d'interfécondité et aux descendants fertiles (1 point) ; transmission des allèles par les gamètes et augmentation de la diversité (0,5 point) ; maîtrise de la langue (1 point).</p>
<p class="valorise"><b>On valorise :</b> une limite. Les clones sont identiques entre eux : le clonage seul n'apporte qu'un « nouvel ancêtre ». C'est ensuite la reproduction sexuée (méiose et fécondation) qui mélange ses allèles avec ceux des autres putois.</p>
<p class="piege"><b>Piège :</b> conclure que les clones sont des furets domestiques parce qu'ils sont nés d'une mère furet. L'espèce se définit par l'interfécondité et l'information génétique, pas par la mère porteuse.</p></div>` }
    ],
    methode: `<ol class="etapes">
<li><b>Lire l'introduction et noter le problème :</b> comment un clone peut-il aider à sauver une espèce ? Toutes les questions préparent la question 4.</li>
<li><b>Question 1 :</b> « expliquer » demande une information du document 1 (le chiffre 7, les frères et sœurs) et une connaissance du cours (la diversité génétique protège une espèce).</li>
<li><b>Lire le schéma (document 2) :</b> suivre les étapes numérotées et noter, pour chaque femelle, ce qu'elle apporte : le noyau, l'ovule sans noyau ou l'utérus. Pour le vrai/faux, vérifier chaque mot clé (« conservé », « putois », « identique »).</li>
<li><b>Question 3, le raisonnement « Dolly » :</b> « Elizabeth Ann ressemble à la femelle qui a donné le noyau, et non à… ; donc l'information génétique est dans le noyau. » Puis la mitose : l'ADN est copié avant chaque division.</li>
<li><b>Lire l'arbre (document 4) :</b> carré = mâle, rond = femelle, trait horizontal = couple, trait vertical = descendants ; symbole grisé = porte des allèles venus de Willa. Urchin n'en porte pas : ses petits les ont reçus d'Antonia.</li>
<li><b>Préparer la question ouverte :</b> au brouillon, un tableau « document / ce que j'en tire / ce que je sais ». Plan : problème ; faible diversité ; clones porteurs des allèles de Willa ; même espèce (interfécondité) ; transmission par méiose et fécondation ; conclusion.</li>
<li><b>Gérer les 30 minutes :</b> 5 minutes de lecture, 12 minutes pour les questions 1 à 3, 13 minutes pour la question 4.</li>
</ol>
<p class="tip">Définition à placer telle quelle : une espèce est un ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant des descendants fertiles.</p>`
  },
  {
    id: "ex-svt-3",
    matiere: 'svt',
    numero: 3,
    titre: "Une greffe qui change le groupe sanguin",
    epreuve: "SCIENCES — SCIENCES DE LA VIE ET DE LA TERRE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['svt-ch3', 'svt-ch2'],
    methodes: ['svt-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      { titre: "Une greffe qui change le groupe sanguin", points: 10, html: `<p class="consigne"><b>SCIENCES DE LA VIE ET DE LA TERRE – Durée 30 minutes – 10 points</b></p>
<p>Thomas, 25 ans, est atteint d'une leucémie, un cancer des cellules du sang. Pour le soigner, les médecins détruisent sa moelle osseuse malade, puis lui greffent des cellules de moelle osseuse données par sa sœur Emma. Pour une greffe de moelle osseuse, le donneur et le receveur n'ont pas besoin d'avoir le même groupe sanguin.</p>
<p>Un an plus tard, Thomas va bien. Mais lors d'une prise de sang, surprise : lui qui était du groupe A est maintenant du groupe B, comme sa sœur !</p>
<p class="source">Situation fictive, inspirée de cas réels.</p>
<div class="doc"><p class="doc-titre">Document 1 : la moelle osseuse et le groupe sanguin</p>
<p>La moelle osseuse se trouve à l'intérieur de certains os, comme ceux du bassin. Elle contient des cellules qui se divisent par mitose tout au long de la vie et produisent chaque jour des milliards de cellules sanguines : globules rouges et globules blancs.</p>
<ul>
<li>Les globules blancs possèdent un noyau.</li>
<li>Les globules rouges n'ont pas de noyau. Ils vivent environ 120 jours (4 mois), puis ils sont détruits et remplacés par de nouveaux globules rouges.</li>
</ul>
<p>Le groupe sanguin dépend de marqueurs présents à la surface des globules rouges : marqueur A pour le groupe A, marqueur B pour le groupe B, marqueurs A et B pour le groupe AB, aucun marqueur pour le groupe O. Ces marqueurs sont fabriqués par les cellules de la moelle osseuse qui produisent les globules rouges, grâce au gène du groupe sanguin, situé sur la paire de chromosomes n° 9.</p>
</div>
<div class="doc"><p class="doc-titre">Document 2 : les globules rouges de Thomas avant et après la greffe</p>
<table class="tab">
<tr><th>Moment de l'analyse</th><th>Globules rouges portant le marqueur A (%)</th><th>Globules rouges portant le marqueur B (%)</th></tr>
<tr><td>Avant la greffe</td><td>100</td><td>0</td></tr>
<tr><td>1 mois après</td><td>75</td><td>25</td></tr>
<tr><td>2 mois après</td><td>50</td><td>50</td></tr>
<tr><td>3 mois après</td><td>25</td><td>75</td></tr>
<tr><td>4 mois après</td><td>0</td><td>100</td></tr>
<tr><td>12 mois après</td><td>0</td><td>100</td></tr>
</table>
<p class="source">Données fictives, simplifiées pour l'exercice.</p>
</div>
<p class="q"><b>Question 1</b> <span class="pts">(2 points)</span> : à l'aide des documents 1 et 2, décrire l'évolution des globules rouges de Thomas après la greffe, puis expliquer pourquoi il faut environ 4 mois pour que tous ses globules rouges portent le marqueur B.</p>
<div class="doc"><p class="doc-titre">Document 3 : arbre généalogique de la famille de Thomas</p>
<svg class="fig-ex" viewBox="0 0 360 270" role="img" aria-label="Arbre généalogique de la famille de Thomas : génération I, Paul, le père, groupe AB, et Claire, la mère, groupe O ; génération II, leurs enfants Thomas, groupe A, et Emma, groupe B" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="95" y="35" width="30" height="30"/><circle cx="250" cy="50" r="15"/><line x1="125" y1="50" x2="235" y2="50"/><line x1="180" y1="50" x2="180" y2="122"/><line x1="110" y1="122" x2="250" y2="122"/><line x1="110" y1="122" x2="110" y2="150"/><line x1="250" y1="122" x2="250" y2="150"/><rect x="95" y="150" width="30" height="30"/><circle cx="250" cy="165" r="15"/><g fill="currentColor" stroke="none"><text x="16" y="55" font-weight="bold">I</text><text x="16" y="170" font-weight="bold">II</text><text x="110" y="87" text-anchor="middle">Paul (père)</text><text x="110" y="105" text-anchor="middle" font-weight="bold">groupe AB</text><text x="250" y="87" text-anchor="middle">Claire (mère)</text><text x="250" y="105" text-anchor="middle" font-weight="bold">groupe O</text><text x="110" y="202" text-anchor="middle">Thomas</text><text x="110" y="220" text-anchor="middle" font-weight="bold">groupe A</text><text x="250" y="202" text-anchor="middle">Emma</text><text x="250" y="220" text-anchor="middle" font-weight="bold">groupe B</text></g><rect x="60" y="240" width="14" height="14"/><circle cx="197" cy="247" r="7"/><g fill="currentColor" stroke="none" font-size="13"><text x="80" y="252">homme</text><text x="210" y="252">femme</text></g></svg>
<p>Le gène du groupe sanguin existe sous trois allèles : A, B et O.</p>
</div>
<p class="q"><b>Question 2</b> <span class="pts">(2 points)</span> : à l'aide du document 3 et de vos connaissances, compléter le tableau de l'annexe en indiquant le génotype de chaque membre de la famille.</p>
<div class="doc"><p class="doc-titre">Document 4 : caryotypes de deux cellules de Thomas, un an après la greffe</p>
<p>Avant la greffe, les globules blancs de Thomas avaient le même caryotype que ses cellules de la peau.</p>
<p><b>A. Caryotype d'un globule blanc de Thomas</b></p>
<svg class="fig-ex" viewBox="0 0 360 272" role="img" aria-label="Caryotype A, d'un globule blanc de Thomas un an après la greffe : 46 chromosomes, 22 paires numérotées de 1 à 22 et une 23e paire formée de deux chromosomes X" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><g fill="currentColor" fill-opacity=".2" stroke-width="1.2"><rect x="26.5" y="8" width="8" height="28.4" rx="3"/><rect x="26.5" y="38.4" width="8" height="29.6" rx="3"/><rect x="37.5" y="8" width="8" height="28.4" rx="3"/><rect x="37.5" y="38.4" width="8" height="29.6" rx="3"/><rect x="98.5" y="9.8" width="8" height="21.7" rx="3"/><rect x="98.5" y="33.5" width="8" height="34.5" rx="3"/><rect x="109.5" y="9.8" width="8" height="21.7" rx="3"/><rect x="109.5" y="33.5" width="8" height="34.5" rx="3"/><rect x="170.5" y="20" width="8" height="21.6" rx="3"/><rect x="170.5" y="43.6" width="8" height="24.4" rx="3"/><rect x="181.5" y="20" width="8" height="21.6" rx="3"/><rect x="181.5" y="43.6" width="8" height="24.4" rx="3"/><rect x="242.5" y="22.4" width="8" height="12.2" rx="3"/><rect x="242.5" y="36.6" width="8" height="31.4" rx="3"/><rect x="253.5" y="22.4" width="8" height="12.2" rx="3"/><rect x="253.5" y="36.6" width="8" height="31.4" rx="3"/><rect x="314.5" y="24.2" width="8" height="10.8" rx="3"/><rect x="314.5" y="37" width="8" height="31" rx="3"/><rect x="325.5" y="24.2" width="8" height="10.8" rx="3"/><rect x="325.5" y="37" width="8" height="31" rx="3"/><rect x="16.2" y="93.6" width="8" height="15.1" rx="3"/><rect x="16.2" y="110.7" width="8" height="24.3" rx="3"/><rect x="27.2" y="93.6" width="8" height="15.1" rx="3"/><rect x="27.2" y="110.7" width="8" height="24.3" rx="3"/><rect x="67.6" y="96.6" width="8" height="12.8" rx="3"/><rect x="67.6" y="111.4" width="8" height="23.6" rx="3"/><rect x="78.6" y="96.6" width="8" height="12.8" rx="3"/><rect x="78.6" y="111.4" width="8" height="23.6" rx="3"/><rect x="119.1" y="100.2" width="8" height="10.8" rx="3"/><rect x="119.1" y="113" width="8" height="22" rx="3"/><rect x="130.1" y="100.2" width="8" height="10.8" rx="3"/><rect x="130.1" y="113" width="8" height="22" rx="3"/><rect x="170.5" y="101.4" width="8" height="10.8" rx="3"/><rect x="170.5" y="114.2" width="8" height="20.8" rx="3"/><rect x="181.5" y="101.4" width="8" height="10.8" rx="3"/><rect x="181.5" y="114.2" width="8" height="20.8" rx="3"/><rect x="221.9" y="102.6" width="8" height="9.4" rx="3"/><rect x="221.9" y="114" width="8" height="21" rx="3"/><rect x="232.9" y="102.6" width="8" height="9.4" rx="3"/><rect x="232.9" y="114" width="8" height="21" rx="3"/><rect x="273.4" y="102.6" width="8" height="12" rx="3"/><rect x="273.4" y="116.6" width="8" height="18.4" rx="3"/><rect x="284.4" y="102.6" width="8" height="12" rx="3"/><rect x="284.4" y="116.6" width="8" height="18.4" rx="3"/><rect x="324.8" y="103.2" width="8" height="7.6" rx="3"/><rect x="324.8" y="112.8" width="8" height="22.2" rx="3"/><rect x="335.8" y="103.2" width="8" height="7.6" rx="3"/><rect x="335.8" y="112.8" width="8" height="22.2" rx="3"/><rect x="20.5" y="160.4" width="8" height="3.1" rx="3"/><rect x="20.5" y="165.5" width="8" height="22.5" rx="3"/><rect x="31.5" y="160.4" width="8" height="3.1" rx="3"/><rect x="31.5" y="165.5" width="8" height="22.5" rx="3"/><rect x="80.5" y="162.2" width="8" height="3.1" rx="3"/><rect x="80.5" y="167.3" width="8" height="20.7" rx="3"/><rect x="91.5" y="162.2" width="8" height="3.1" rx="3"/><rect x="91.5" y="167.3" width="8" height="20.7" rx="3"/><rect x="140.5" y="163.4" width="8" height="3.2" rx="3"/><rect x="140.5" y="168.6" width="8" height="19.4" rx="3"/><rect x="151.5" y="163.4" width="8" height="3.2" rx="3"/><rect x="151.5" y="168.6" width="8" height="19.4" rx="3"/><rect x="200.5" y="166.4" width="8" height="8.3" rx="3"/><rect x="200.5" y="176.7" width="8" height="11.3" rx="3"/><rect x="211.5" y="166.4" width="8" height="8.3" rx="3"/><rect x="211.5" y="176.7" width="8" height="11.3" rx="3"/><rect x="260.5" y="168.2" width="8" height="5.5" rx="3"/><rect x="260.5" y="175.7" width="8" height="12.3" rx="3"/><rect x="271.5" y="168.2" width="8" height="5.5" rx="3"/><rect x="271.5" y="175.7" width="8" height="12.3" rx="3"/><rect x="320.5" y="169.4" width="8" height="4" rx="3"/><rect x="320.5" y="175.4" width="8" height="12.6" rx="3"/><rect x="331.5" y="169.4" width="8" height="4" rx="3"/><rect x="331.5" y="175.4" width="8" height="12.6" rx="3"/><rect x="26.5" y="235.6" width="8" height="5.6" rx="3"/><rect x="26.5" y="243.2" width="8" height="6.8" rx="3"/><rect x="37.5" y="235.6" width="8" height="5.6" rx="3"/><rect x="37.5" y="243.2" width="8" height="6.8" rx="3"/><rect x="98.5" y="235" width="8" height="5.8" rx="3"/><rect x="98.5" y="242.8" width="8" height="7.3" rx="3"/><rect x="109.5" y="235" width="8" height="5.8" rx="3"/><rect x="109.5" y="242.8" width="8" height="7.3" rx="3"/><rect x="170.5" y="239.2" width="8" height="1.7" rx="3"/><rect x="170.5" y="242.9" width="8" height="7.1" rx="3"/><rect x="181.5" y="239.2" width="8" height="1.7" rx="3"/><rect x="181.5" y="242.9" width="8" height="7.1" rx="3"/><rect x="242.5" y="238" width="8" height="2" rx="3"/><rect x="242.5" y="242" width="8" height="8" rx="3"/><rect x="253.5" y="238" width="8" height="2" rx="3"/><rect x="253.5" y="242" width="8" height="8" rx="3"/><rect x="314.5" y="212.8" width="8" height="13.5" rx="3"/><rect x="314.5" y="228.3" width="8" height="21.7" rx="3"/><rect x="325.5" y="212.8" width="8" height="13.5" rx="3"/><rect x="325.5" y="228.3" width="8" height="21.7" rx="3"/></g><g fill="currentColor" stroke="none" font-size="13"><text x="36" y="84" text-anchor="middle">1</text><text x="108" y="84" text-anchor="middle">2</text><text x="180" y="84" text-anchor="middle">3</text><text x="252" y="84" text-anchor="middle">4</text><text x="324" y="84" text-anchor="middle">5</text><text x="25.7" y="151" text-anchor="middle">6</text><text x="77.1" y="151" text-anchor="middle">7</text><text x="128.6" y="151" text-anchor="middle">8</text><text x="180" y="151" text-anchor="middle">9</text><text x="231.4" y="151" text-anchor="middle">10</text><text x="282.9" y="151" text-anchor="middle">11</text><text x="334.3" y="151" text-anchor="middle">12</text><text x="30" y="204" text-anchor="middle">13</text><text x="90" y="204" text-anchor="middle">14</text><text x="150" y="204" text-anchor="middle">15</text><text x="210" y="204" text-anchor="middle">16</text><text x="270" y="204" text-anchor="middle">17</text><text x="330" y="204" text-anchor="middle">18</text><text x="36" y="266" text-anchor="middle">19</text><text x="108" y="266" text-anchor="middle">20</text><text x="180" y="266" text-anchor="middle">21</text><text x="252" y="266" text-anchor="middle">22</text><text x="324" y="266" text-anchor="middle" font-weight="bold">XX</text></g></svg>
<p><b>B. Caryotype d'une cellule de la peau de Thomas</b></p>
<svg class="fig-ex" viewBox="0 0 360 272" role="img" aria-label="Caryotype B, d'une cellule de la peau de Thomas un an après la greffe : 46 chromosomes, 22 paires numérotées de 1 à 22 et une 23e paire formée d'un chromosome X et d'un chromosome Y" font-size="14" fill="none" stroke="currentColor" stroke-width="1.5"><g fill="currentColor" fill-opacity=".2" stroke-width="1.2"><rect x="26.5" y="8" width="8" height="28.4" rx="3"/><rect x="26.5" y="38.4" width="8" height="29.6" rx="3"/><rect x="37.5" y="8" width="8" height="28.4" rx="3"/><rect x="37.5" y="38.4" width="8" height="29.6" rx="3"/><rect x="98.5" y="9.8" width="8" height="21.7" rx="3"/><rect x="98.5" y="33.5" width="8" height="34.5" rx="3"/><rect x="109.5" y="9.8" width="8" height="21.7" rx="3"/><rect x="109.5" y="33.5" width="8" height="34.5" rx="3"/><rect x="170.5" y="20" width="8" height="21.6" rx="3"/><rect x="170.5" y="43.6" width="8" height="24.4" rx="3"/><rect x="181.5" y="20" width="8" height="21.6" rx="3"/><rect x="181.5" y="43.6" width="8" height="24.4" rx="3"/><rect x="242.5" y="22.4" width="8" height="12.2" rx="3"/><rect x="242.5" y="36.6" width="8" height="31.4" rx="3"/><rect x="253.5" y="22.4" width="8" height="12.2" rx="3"/><rect x="253.5" y="36.6" width="8" height="31.4" rx="3"/><rect x="314.5" y="24.2" width="8" height="10.8" rx="3"/><rect x="314.5" y="37" width="8" height="31" rx="3"/><rect x="325.5" y="24.2" width="8" height="10.8" rx="3"/><rect x="325.5" y="37" width="8" height="31" rx="3"/><rect x="16.2" y="93.6" width="8" height="15.1" rx="3"/><rect x="16.2" y="110.7" width="8" height="24.3" rx="3"/><rect x="27.2" y="93.6" width="8" height="15.1" rx="3"/><rect x="27.2" y="110.7" width="8" height="24.3" rx="3"/><rect x="67.6" y="96.6" width="8" height="12.8" rx="3"/><rect x="67.6" y="111.4" width="8" height="23.6" rx="3"/><rect x="78.6" y="96.6" width="8" height="12.8" rx="3"/><rect x="78.6" y="111.4" width="8" height="23.6" rx="3"/><rect x="119.1" y="100.2" width="8" height="10.8" rx="3"/><rect x="119.1" y="113" width="8" height="22" rx="3"/><rect x="130.1" y="100.2" width="8" height="10.8" rx="3"/><rect x="130.1" y="113" width="8" height="22" rx="3"/><rect x="170.5" y="101.4" width="8" height="10.8" rx="3"/><rect x="170.5" y="114.2" width="8" height="20.8" rx="3"/><rect x="181.5" y="101.4" width="8" height="10.8" rx="3"/><rect x="181.5" y="114.2" width="8" height="20.8" rx="3"/><rect x="221.9" y="102.6" width="8" height="9.4" rx="3"/><rect x="221.9" y="114" width="8" height="21" rx="3"/><rect x="232.9" y="102.6" width="8" height="9.4" rx="3"/><rect x="232.9" y="114" width="8" height="21" rx="3"/><rect x="273.4" y="102.6" width="8" height="12" rx="3"/><rect x="273.4" y="116.6" width="8" height="18.4" rx="3"/><rect x="284.4" y="102.6" width="8" height="12" rx="3"/><rect x="284.4" y="116.6" width="8" height="18.4" rx="3"/><rect x="324.8" y="103.2" width="8" height="7.6" rx="3"/><rect x="324.8" y="112.8" width="8" height="22.2" rx="3"/><rect x="335.8" y="103.2" width="8" height="7.6" rx="3"/><rect x="335.8" y="112.8" width="8" height="22.2" rx="3"/><rect x="20.5" y="160.4" width="8" height="3.1" rx="3"/><rect x="20.5" y="165.5" width="8" height="22.5" rx="3"/><rect x="31.5" y="160.4" width="8" height="3.1" rx="3"/><rect x="31.5" y="165.5" width="8" height="22.5" rx="3"/><rect x="80.5" y="162.2" width="8" height="3.1" rx="3"/><rect x="80.5" y="167.3" width="8" height="20.7" rx="3"/><rect x="91.5" y="162.2" width="8" height="3.1" rx="3"/><rect x="91.5" y="167.3" width="8" height="20.7" rx="3"/><rect x="140.5" y="163.4" width="8" height="3.2" rx="3"/><rect x="140.5" y="168.6" width="8" height="19.4" rx="3"/><rect x="151.5" y="163.4" width="8" height="3.2" rx="3"/><rect x="151.5" y="168.6" width="8" height="19.4" rx="3"/><rect x="200.5" y="166.4" width="8" height="8.3" rx="3"/><rect x="200.5" y="176.7" width="8" height="11.3" rx="3"/><rect x="211.5" y="166.4" width="8" height="8.3" rx="3"/><rect x="211.5" y="176.7" width="8" height="11.3" rx="3"/><rect x="260.5" y="168.2" width="8" height="5.5" rx="3"/><rect x="260.5" y="175.7" width="8" height="12.3" rx="3"/><rect x="271.5" y="168.2" width="8" height="5.5" rx="3"/><rect x="271.5" y="175.7" width="8" height="12.3" rx="3"/><rect x="320.5" y="169.4" width="8" height="4" rx="3"/><rect x="320.5" y="175.4" width="8" height="12.6" rx="3"/><rect x="331.5" y="169.4" width="8" height="4" rx="3"/><rect x="331.5" y="175.4" width="8" height="12.6" rx="3"/><rect x="26.5" y="235.6" width="8" height="5.6" rx="3"/><rect x="26.5" y="243.2" width="8" height="6.8" rx="3"/><rect x="37.5" y="235.6" width="8" height="5.6" rx="3"/><rect x="37.5" y="243.2" width="8" height="6.8" rx="3"/><rect x="98.5" y="235" width="8" height="5.8" rx="3"/><rect x="98.5" y="242.8" width="8" height="7.3" rx="3"/><rect x="109.5" y="235" width="8" height="5.8" rx="3"/><rect x="109.5" y="242.8" width="8" height="7.3" rx="3"/><rect x="170.5" y="239.2" width="8" height="1.7" rx="3"/><rect x="170.5" y="242.9" width="8" height="7.1" rx="3"/><rect x="181.5" y="239.2" width="8" height="1.7" rx="3"/><rect x="181.5" y="242.9" width="8" height="7.1" rx="3"/><rect x="242.5" y="238" width="8" height="2" rx="3"/><rect x="242.5" y="242" width="8" height="8" rx="3"/><rect x="253.5" y="238" width="8" height="2" rx="3"/><rect x="253.5" y="242" width="8" height="8" rx="3"/><rect x="314.5" y="212.8" width="8" height="13.5" rx="3"/><rect x="314.5" y="228.3" width="8" height="21.7" rx="3"/><rect x="325.5" y="236.2" width="8" height="3.1" rx="3"/><rect x="325.5" y="241.3" width="8" height="8.7" rx="3"/></g><g fill="currentColor" stroke="none" font-size="13"><text x="36" y="84" text-anchor="middle">1</text><text x="108" y="84" text-anchor="middle">2</text><text x="180" y="84" text-anchor="middle">3</text><text x="252" y="84" text-anchor="middle">4</text><text x="324" y="84" text-anchor="middle">5</text><text x="25.7" y="151" text-anchor="middle">6</text><text x="77.1" y="151" text-anchor="middle">7</text><text x="128.6" y="151" text-anchor="middle">8</text><text x="180" y="151" text-anchor="middle">9</text><text x="231.4" y="151" text-anchor="middle">10</text><text x="282.9" y="151" text-anchor="middle">11</text><text x="334.3" y="151" text-anchor="middle">12</text><text x="30" y="204" text-anchor="middle">13</text><text x="90" y="204" text-anchor="middle">14</text><text x="150" y="204" text-anchor="middle">15</text><text x="210" y="204" text-anchor="middle">16</text><text x="270" y="204" text-anchor="middle">17</text><text x="330" y="204" text-anchor="middle">18</text><text x="36" y="266" text-anchor="middle">19</text><text x="108" y="266" text-anchor="middle">20</text><text x="180" y="266" text-anchor="middle">21</text><text x="252" y="266" text-anchor="middle">22</text><text x="324" y="266" text-anchor="middle" font-weight="bold">XY</text></g></svg>
<p class="source">Caryotypes simplifiés.</p>
</div>
<p class="q"><b>Question 3</b> <span class="pts">(2 points)</span> : à l'aide du document 4, comparer les caryotypes des deux cellules de Thomas, puis en déduire l'origine de ses globules blancs après la greffe.</p>
<p class="q"><b>Question 4</b> <span class="pts">(4 points)</span> : Thomas affirme : « Depuis ma greffe, j'ai la même information génétique que ma sœur. Si j'ai un jour des enfants, je pourrai donc leur transmettre l'allèle B. » À l'aide de l'ensemble des documents et de vos connaissances, indiquer, en argumentant, si Thomas a raison.</p>
<p class="consigne">La réponse sera rédigée en 20 lignes maximum. La qualité de la rédaction sera évaluée.</p>` }
    ],
    annexe: `<p class="q"><b>Question 2 (2 points) :</b> à l'aide du document 3 et de vos connaissances, compléter le tableau.</p>
<table class="tab">
<tr><th>Membre de la famille</th><th>Groupe sanguin</th><th>Génotype (allèles)</th></tr>
<tr><td>Paul (père)</td><td>AB</td><td class="vide"></td></tr>
<tr><td>Claire (mère)</td><td>O</td><td class="vide"></td></tr>
<tr><td>Thomas</td><td>A</td><td class="vide"></td></tr>
<tr><td>Emma</td><td>B</td><td class="vide"></td></tr>
</table>`,
    corrige: [
      { titre: "Corrigé — Une greffe qui change le groupe sanguin", html: `<div class="rep"><p class="rq"><b>Question 1.</b> Décrire l'évolution des globules rouges ; pourquoi 4 mois ?</p>
<p>D'après le document 2, avant la greffe, 100 % des globules rouges de Thomas portent le marqueur A : il est du groupe A. Après la greffe, le pourcentage de globules rouges portant le marqueur A diminue régulièrement : 75 % après 1 mois, 50 % après 2 mois, 25 % après 3 mois et 0 % après 4 mois. Dans le même temps, le pourcentage de globules rouges portant le marqueur B passe de 0 % à 100 % en 4 mois, puis reste à 100 % (12 mois après) : Thomas est devenu du groupe B.</p>
<p>Le document 1 indique qu'un globule rouge vit environ 120 jours, soit 4 mois. Comme la moelle de Thomas a été détruite, ses anciens globules rouges, à marqueur A, ne sont plus remplacés : ils meurent peu à peu et ont tous disparu au bout de 4 mois. Ils sont remplacés par de nouveaux globules rouges, fabriqués par les cellules de moelle d'Emma, qui portent le marqueur B.</p>
<p class="attendu"><b>On attend :</b> une description chiffrée (au moins trois valeurs, pour les deux marqueurs) (1 point) ; le lien avec la durée de vie des globules rouges, 120 jours = 4 mois (1 point).</p>
<p class="piege"><b>Piège :</b> écrire que la greffe a « modifié les allèles » des globules rouges de Thomas. Les globules rouges n'ont pas de noyau : ce sont de nouvelles cellules, produites par les cellules d'Emma.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Génotypes de la famille (annexe).</p>
<p>Paul (A//B) ; Claire (O//O) ; Thomas (A//O) ; Emma (B//O).</p>
<p>L'allèle O est récessif : une personne du groupe O possède forcément deux allèles O, donc Claire est (O//O). Les allèles A et B sont codominants : une personne du groupe AB possède les deux, donc Paul est (A//B). Claire ne peut transmettre que l'allèle O : chaque enfant a donc un allèle O venu de sa mère. Thomas est du groupe A : il a donc reçu l'allèle A de son père, et comme l'allèle A domine l'allèle O, il est (A//O). Emma a reçu l'allèle B de son père : elle est (B//O).</p>
<p class="bareme">0,5 point par génotype juste.</p>
<p class="valorise"><b>On valorise :</b> l'explication de la différence entre le frère et la sœur. Lors de la méiose, chaque spermatozoïde de Paul reçoit au hasard l'allèle A ou l'allèle B ; la fécondation l'associe à l'allèle O d'un ovule de Claire.</p>
<p class="piege"><b>Piège :</b> écrire Thomas (A//A). C'est impossible : sa mère ne possède pas d'allèle A.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Comparer les deux caryotypes ; origine des globules blancs.</p>
<p>Les deux caryotypes comportent 46 chromosomes, soit 23 paires, et les paires 1 à 22 sont semblables. La différence porte sur la 23<sup>e</sup> paire, celle des chromosomes sexuels : la cellule de la peau possède les chromosomes XY, caryotype d'un homme, comme Thomas ; le globule blanc possède les chromosomes XX, caryotype d'une femme. Avant la greffe, ses globules blancs étaient XY. Ce globule blanc ne provient donc pas des cellules de Thomas : il a été fabriqué par les cellules de moelle osseuse données par sa sœur Emma, qui ont gardé leur caryotype XX.</p>
<p class="attendu"><b>On attend :</b> le nombre de chromosomes et la comparaison de la 23<sup>e</sup> paire (1 point) ; la déduction : les globules blancs viennent des cellules d'Emma (1 point).</p>
<p class="piege"><b>Piège :</b> conclure que les chromosomes de Thomas ont changé. Seules ses cellules sanguines viennent d'Emma ; ses autres cellules restent XY.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Question ouverte : Thomas a-t-il raison ?</p>
<p><b>Démarche attendue :</b></p>
<ol class="etapes">
<li><b>Poser le problème :</b> la greffe a-t-elle changé l'information génétique de tout le corps de Thomas ? Peut-il transmettre l'allèle B ?</li>
<li><b>Ce qui est vrai (documents 1, 2 et 4) :</b> les cellules de moelle greffées se multiplient par mitose, avec une copie identique de l'ADN. Elles gardent donc l'information génétique d'Emma : globules rouges à marqueur B, globules blancs XX.</li>
<li><b>Ce qui est faux (documents 3 et 4) :</b> la cellule de la peau est toujours XY. Les autres cellules de Thomas ont gardé son information génétique, avec le génotype (A//O).</li>
<li><b>Les gamètes (cours) :</b> les spermatozoïdes sont fabriqués par méiose dans les testicules, à partir des cellules de Thomas. Chacun reçoit un seul allèle, A ou O, et jamais B.</li>
<li><b>Conclure :</b> Thomas n'a raison que pour ses cellules sanguines. Il ne transmettra pas l'allèle B à ses enfants.</li>
</ol>
<div class="exemple-redige"><p>On cherche à savoir si la greffe a donné à Thomas l'information génétique de sa sœur, et s'il pourra transmettre l'allèle B à ses enfants.</p>
<p>Après la greffe, la moelle osseuse de Thomas est formée des cellules d'Emma. Ces cellules se divisent par mitose : avant chaque division, l'ADN est copié, et les cellules-filles sont identiques à la cellule-mère. Elles gardent donc l'information génétique d'Emma, avec ses allèles (B//O) et ses chromosomes XX. C'est pourquoi, au bout de 4 mois, tous les globules rouges de Thomas portent le marqueur B (document 2), et ses globules blancs ont le caryotype XX d'Emma (document 4). Pour ses cellules sanguines, Thomas a donc raison.</p>
<p>Mais un an après la greffe, une cellule de sa peau possède toujours le caryotype XY (document 4) : en dehors du sang, les cellules de Thomas ont gardé son information génétique. D'après l'arbre généalogique (document 3), Thomas a reçu un allèle A de son père et un allèle O de sa mère : son génotype est (A//O).</p>
<p>Ses spermatozoïdes sont fabriqués par méiose dans ses testicules, à partir de ses propres cellules, et non à partir des cellules de la moelle. Chaque spermatozoïde reçoit un seul allèle du gène du groupe sanguin : A ou O. Les cellules de ses testicules ne possèdent pas l'allèle B : Thomas ne pourra donc pas le transmettre à ses enfants.</p>
<p>L'affirmation de Thomas est donc fausse : seules ses cellules sanguines ont l'information génétique d'Emma ; ses autres cellules, dont celles qui forment ses gamètes, ont gardé la sienne.</p></div>
<p class="bareme">Barème indicatif (4 points) : cellules sanguines issues des cellules d'Emma, conservées par mitose (1 point) ; autres cellules de Thomas inchangées, XY et (A//O) (1 point) ; gamètes formés par méiose, porteurs de l'allèle A ou O mais jamais B (1 point) ; maîtrise de la langue (1 point).</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée (vrai pour le sang, faux pour le reste du corps) ; les mots génotype, phénotype, mitose, méiose et gamète employés à bon escient.</p>
<p class="piege"><b>Piège :</b> répondre seulement « oui » ou « non » sans s'appuyer sur les documents, ou croire que les gamètes sont fabriqués par la moelle osseuse.</p></div>` }
    ],
    methode: `<ol class="etapes">
<li><b>Lire l'introduction :</b> Thomas, du groupe A, devient du groupe B après une greffe de moelle venue de sa sœur. Le problème : qu'est-ce qui a changé chez lui, et qu'est-ce qui n'a pas changé ?</li>
<li><b>Question 1, lire le tableau :</b> ligne par ligne, avec les pourcentages des deux marqueurs, du début à la fin ; puis expliquer à l'aide du document 1 (120 jours, soit 4 mois).</li>
<li><b>Question 2, lire l'arbre :</b> carré = homme, rond = femme. Commencer par les génotypes certains : groupe O → (O//O), car O est récessif ; groupe AB → (A//B), car A et B sont codominants. Puis les enfants : un allèle venu du père, un venu de la mère.</li>
<li><b>Question 3, lire un caryotype :</b> compter les chromosomes, comparer paire par paire ; ici, la seule différence est à la 23<sup>e</sup> paire (XX ou XY). Déduire : Thomas est un homme, donc des cellules XX ne viennent pas de lui.</li>
<li><b>Préparer la question ouverte au brouillon :</b> deux colonnes, « vrai » (les cellules du sang : B, XX, mitose) et « faux » (la peau XY, le génotype (A//O), les gamètes formés par méiose).</li>
<li><b>Rédiger la question 4 :</b> problème ; ce qui est vrai, documents et valeurs à l'appui ; ce qui est faux ; le cas des gamètes ; conclusion nuancée qui répond à la question : « Thomas a tort, car… ».</li>
<li><b>Gérer les 30 minutes :</b> 5 minutes de lecture, 12 minutes pour les questions 1 à 3, 13 minutes pour la question 4.</li>
</ol>
<p class="tip">Une cellule garde toute sa vie l'information génétique de la cellule dont elle vient par mitose. Pour savoir quels allèles possède une cellule, demande-toi d'où elle vient : de Thomas ou d'Emma ?</p>`
  }
);
