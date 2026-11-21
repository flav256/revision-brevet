/* examens/histoire.js — examens blancs d'histoire-géographie-EMC (format DNB 2027) */
DATA.examens = DATA.examens || [];
DATA.examens.push(

  /* ================================================================
     SUJET 1 — Ex. 1 histoire (hg-ch1) ; DC géographie (geo-ch1) + schéma ; EMC mémoire
     ================================================================ */
  {
    id: 'ex-histoire-1',
    matiere: 'histoire',
    numero: 1,
    titre: "Le front et l'arrière en 1916 ; l'organisation d'une aire urbaine",
    epreuve: "HISTOIRE-GÉOGRAPHIE — ENSEIGNEMENT MORAL ET CIVIQUE",
    duree: "2 h 00",
    points: 60,
    pointsRedaction: 0,
    cours: ['hg-ch1', 'geo-ch1'],
    methodes: ['hg-m1', 'hg-m2', 'hg-m3'],
    garde: [
      "Durée de l'épreuve : 2 h 00",
      "Sous-épreuve d'histoire-géographie : 40 points (coefficient 1,5 ; la note obtenue est ramenée sur 20 points)",
      "Sous-épreuve d'enseignement moral et civique (EMC) : 20 points (coefficient 0,5)",
      "Les deux sous-épreuves se traitent pendant les 2 heures, sans pause entre les deux.",
      "L'utilisation du dictionnaire et de la calculatrice est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Exercice 1. Analyser et comprendre des documents en histoire (15 points)",
        points: 15,
        html: `
<p><b>HISTOIRE : Civils et militaires dans la Première Guerre mondiale.</b></p>
<div class="doc">
<p class="doc-titre">Document 1 : La vie d'une escouade dans la tranchée, racontée par un ancien soldat.</p>
<p><i>Présentation : Henri Barbusse (1873-1935) s'engage dans l'armée en 1914, à 41 ans, et combat comme simple soldat dans les tranchées. Dans son roman </i>Le Feu<i>, publié en 1916, il raconte la vie d'une escouade (un petit groupe de soldats). Le livre reçoit le prix Goncourt en 1916. Le narrateur (« je ») est l'un des soldats.</i></p>
<p>On distingue de longs fossés en lacis<sup>1</sup> où le résidu de nuit s'accumule. C'est la tranchée. Le fond en est tapissé d'une couche visqueuse d'où le pied se décolle à chaque pas avec bruit, et qui sent mauvais autour de chaque abri, à cause de l'urine de la nuit. […]</p>
<p>Je vois des ombres émerger de ces puits latéraux<sup>2</sup>, et se mouvoir, masses énormes et difformes : des espèces d'ours qui pataugent et grognent. C'est nous.</p>
<p>Nous sommes emmitouflés à la manière des populations arctiques. Lainages, couvertures, toiles à sac, nous empaquettent, nous surmontent, nous arrondissent étrangement. […] On perçoit des figures, rougeoyantes ou livides<sup>3</sup>, avec des salissures qui les balafrent, […] embroussaillées de barbes non taillées ou encrassées de poils non rasés.</p>
<p>Tac ! Tac ! Pan ! Les coups de fusil, la canonnade<sup>4</sup>. Au-dessus de nous, partout, ça crépite ou ça roule, par longues rafales ou par coups séparés. Le sombre et flamboyant orage ne cesse jamais, jamais. Depuis plus de quinze mois, depuis cinq cents jours, en ce lieu du monde où nous sommes, la fusillade et le bombardement ne se sont pas arrêtés du matin au soir et du soir au matin. On est enterré au fond d'un éternel champ de bataille […].</p>
<p class="notes"><sup>1</sup> en lacis : qui s'entrecroisent comme les fils d'un filet. <sup>2</sup> puits latéraux : abris creusés sur les côtés de la tranchée. <sup>3</sup> livides : très pâles. <sup>4</sup> canonnade : tirs de canons.</p>
<p class="source">Source : Henri Barbusse, <i>Le Feu (journal d'une escouade)</i>, Paris, Flammarion, 1916, chapitre II, « Dans la terre ». Texte intégral sur Wikisource : https://fr.wikisource.org/wiki/Le_Feu/2</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : Une affiche pour le 2<sup>e</sup> emprunt de la Défense nationale, 1916.</p>
<figure class="img-ex"><img src="examens/img/hg-on-les-aura-1916.jpg" alt="Affiche : un soldat français casqué, fusil à la main, lève le bras et s'élance vers l'avant en criant. En haut à gauche : « On les aura ! ». En bas à droite : « 2e Emprunt de la Défense nationale. Souscrivez »."><figcaption>Abel Faivre, <i>On les aura ! 2<sup>e</sup> Emprunt de la Défense nationale. Souscrivez</i>, 1916, affiche lithographiée en couleurs (120 × 80 cm), imprimerie Devambez, Paris.</figcaption></figure>
<p><i>Présentation : Abel Faivre (1867-1945) est un dessinateur connu pour ses caricatures dans la presse. Par un emprunt, l'État demande aux Français de lui prêter de l'argent ; « souscrire » à l'emprunt, c'est lui prêter cet argent.</i></p>
<p class="source">Source : Bibliothèque nationale de France, département Estampes et photographie (Gallica, ark:/12148/btv1b9013991f) ; reproduction dans le domaine public sur Wikimedia Commons.</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><b>Se repérer dans le temps</b></p>
<p class="q"><b>1.</b> Les deux documents datent de 1916. Nommez la grande bataille qui oppose les Français aux Allemands pendant presque toute l'année 1916, puis indiquez à quelle phase de la guerre elle appartient (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Prélever des informations</b></p>
<p><i>Document 1</i></p>
<p class="q"><b>2.</b> Relevez deux éléments qui montrent que les soldats vivent dans des conditions très difficiles (réponse courte). <span class="pts">(2 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> Identifiez à qui s'adresse cette affiche et ce qu'elle demande de faire (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Analyser et porter un regard critique</b></p>
<p><i>Document 2</i></p>
<p class="q"><b>4.</b> Expliquez en quoi cette affiche montre que la Première Guerre mondiale est une guerre totale (réponse : 2 à 4 lignes). <span class="pts">(3 points)</span></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>5.</b> Comparez l'image du soldat donnée par les deux documents. Expliquez cette différence en montrant l'intérêt et les limites de chaque document pour connaître la vie des soldats (réponse : 4 à 6 lignes). <span class="pts">(4 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble de l'exercice <span class="pts">(2 points)</span>.</p>`
      },
      {
        titre: "Exercice 2. Maîtriser différents langages pour raisonner et utiliser des repères géographiques (25 points)",
        points: 25,
        html: `
<p><b>GÉOGRAPHIE : Les aires urbaines, une nouvelle géographie d'une France mondialisée.</b></p>
<p class="q"><b>1 – Développement construit</b> <span class="pts">(18 points)</span></p>
<p>Dans un développement construit d'au moins trente lignes, décrivez l'organisation d'une aire urbaine française et expliquez comment elle se transforme. Vous pouvez vous appuyer sur l'exemple d'une aire urbaine étudiée en classe.</p>
<p>Pour vous aider, vous pourrez utiliser certains des mots suivants : ville-centre, banlieue, couronne périurbaine, périurbanisation, mobilités pendulaires, étalement urbain, ville durable.</p>
<p class="consigne">La qualité de la rédaction est prise en compte à hauteur de 2 points sur 18.</p>
<p class="q"><b>2 – Comprendre et pratiquer un autre langage : compléter un schéma</b> <span class="pts">(7 points)</span></p>
<p>Réalisez l'exercice demandé sur le document en annexe. Elle sera à rendre avec la copie.</p>`
      },
      {
        titre: "Enseignement moral et civique (20 points)",
        points: 20,
        html: `
<p><b>SITUATION PRATIQUE : Un nom oublié sur le monument aux morts.</b></p>
<p><i>Situation : avec le conseil municipal des jeunes, des élèves de 3<sup>e</sup> préparent la cérémonie du 11 novembre dans leur commune. En consultant les archives, ils découvrent qu'un soldat né dans la commune, tué au combat en 1916 et dont l'acte de décès porte la mention « Mort pour la France », n'a pas son nom sur le monument aux morts.</i></p>
<div class="doc">
<p class="doc-titre">Document 1 : La loi du 28 février 2012 fixant au 11 novembre la commémoration de tous les morts pour la France (extraits).</p>
<p><b>Article 1<sup>er</sup></b> — Le 11 novembre, jour anniversaire de l'armistice de 1918 et de commémoration annuelle de la victoire et de la Paix, il est rendu hommage à tous les morts pour la France.<br>Cet hommage ne se substitue pas aux autres journées de commémoration nationales.</p>
<p><b>Article 2</b> — Lorsque la mention « Mort pour la France » a été portée sur son acte de décès […], l'inscription du nom du défunt sur le monument aux morts de sa commune de naissance ou de dernière domiciliation ou sur une stèle placée dans l'environnement immédiat de ce monument est obligatoire.<br>La demande d'inscription est adressée au maire de la commune choisie par la famille ou, à défaut, par les autorités militaires, les élus nationaux, les élus locaux, l'Office national des anciens combattants et victimes de guerre par l'intermédiaire de ses services départementaux ou les associations d'anciens combattants et patriotiques ayant intérêt à agir.</p>
<p class="notes">L'article 2 a depuis été repris dans le code des pensions militaires d'invalidité et des victimes de guerre (article L. 515-1).</p>
<p class="source">Source : loi n° 2012-273 du 28 février 2012, articles 1<sup>er</sup> et 2, <i>Journal officiel</i> du 29 février 2012 ; texte définitif adopté par l'Assemblée nationale le 20 février 2012 : https://www.assemblee-nationale.fr/13/pdf/ta/ta0857.pdf</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : Le message du ministère des Armées et des Anciens combattants pour le 11 novembre 2026 (extraits).</p>
<p>[…] chaque 11 novembre, dans chaque commune de France, nous rappelons à notre mémoire ceux qui sont tombés.</p>
<p>Il y a cent huit ans, à onze heures, les clairons et les clochers annonçaient l'armistice. […] De très nombreuses familles, pourtant, pleuraient celui qu'elles avaient laissé partir et qui ne reviendrait pas. Un million quatre cent mille soldats français avaient perdu la vie. […]</p>
<p>Le souvenir des combattants de 1914 nous unit à toutes les générations du feu qui, après eux, ont donné leur vie pour la France.</p>
<p>Ceux de la Seconde Guerre mondiale. Ceux d'Indochine, de Corée, de la guerre d'Algérie et des combats du Maroc et de Tunisie. Ceux des opérations extérieures<sup>1</sup>, jusqu'aux militaires tombés dans l'accomplissement de leur devoir. […]</p>
<p>Soldats, marins, aviateurs, gendarmes, combattants de toutes origines : tous ont leur place dans notre mémoire, qui repose dans la flamme sans cesse ravivée du Soldat inconnu. […]</p>
<p>Aujourd'hui, devant nos monuments aux morts, mesurons le prix de notre liberté et souvenons-nous. […]</p>
<p>Que notre jeunesse s'empare de cet héritage et le fasse vivre à son tour.</p>
<p class="notes"><sup>1</sup> opérations extérieures : missions de l'armée française hors du territoire national.</p>
<p class="source">Source : message de Catherine Vautrin, ministre des Armées et des Anciens combattants, et d'Alice Rufo, ministre déléguée, pour le 11 novembre 2026, site « Les chemins de la mémoire » du ministère des Armées et des Anciens combattants : https://www.defense.gouv.fr/chemins-memoire/histoire-memoires/journees-nationales-commemoratives/11-novembre-journee-nationale-commemoration (consulté le 21 novembre 2026).</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><i>Document 1</i></p>
<p class="q"><b>1.</b> Relevez ce que commémore le 11 novembre et à qui la Nation rend hommage ce jour-là depuis la loi de 2012 (réponse courte). <span class="pts">(3 points)</span></p>
<p class="q"><b>2.</b> D'après l'article 2, indiquez si le nom de ce soldat doit être inscrit sur le monument aux morts de la commune, puis à qui la demande doit être adressée (réponse courte). <span class="pts">(3 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> Montrez que le 11 novembre rend hommage aux morts de plusieurs générations et de plusieurs conflits (réponse : 2 à 3 lignes). <span class="pts">(3 points)</span></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>4.</b> Nommez une valeur de la République associée à cette commémoration et justifiez votre réponse (réponse : 3 à 4 lignes). <span class="pts">(4 points)</span></p>
<p class="q"><b>5.</b> Les élèves veulent que le nom de ce soldat soit inscrit sur le monument aux morts et lu lors de la prochaine cérémonie. Décrivez la démarche qu'ils peuvent mener et expliquez à vos camarades pourquoi il est important de la mener (réponse : 6 à 8 lignes). <span class="pts">(5 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble des réponses <span class="pts">(2 points)</span>.</p>
<p class="consigne">Afin de respecter l'anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d'un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: `
<p class="consigne">ATTENTION : cette feuille doit être détachée du sujet et placée à l'intérieur de la copie.</p>
<p><b>Exercice 2 – 2. Compléter le schéma d'une aire urbaine</b></p>
<p>Le schéma ci-dessous représente une grande aire urbaine française et l'espace rural qui l'entoure, avec une rocade et trois autoroutes.</p>
<p class="q"><b>1.</b> Complétez la légende en nommant les espaces A, B, C et D. <span class="pts">(2 points)</span></p>
<p class="q"><b>2.</b> Choisissez un figuré pour un quartier d'affaires et un figuré pour une zone commerciale ou un technopôle. Dessinez-les dans la légende, puis placez-les au bon endroit sur le schéma. <span class="pts">(2 points)</span></p>
<p class="q"><b>3.</b> Représentez sur le schéma, par des flèches, les mobilités pendulaires et l'étalement urbain. Dessinez ces deux figurés dans la légende. <span class="pts">(2 points)</span></p>
<p class="q"><b>4.</b> Donnez un titre au schéma. <span class="pts">(1 point)</span></p>
<p><b>Titre :</b> ……………………………………………………………………</p>
<svg class="fig-ex" viewBox="0 0 360 320" role="img" aria-label="Schéma à compléter : une ville-centre (A) entourée d'une banlieue (B), d'une couronne périurbaine (C) et d'un espace rural (D), avec une rocade et trois autoroutes"><rect x="2" y="2" width="356" height="316" rx="8" fill="#6aa84f" fill-opacity=".22" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="160" r="140" fill="#f1c232" fill-opacity=".45" stroke="currentColor"/><circle cx="180" cy="160" r="85" fill="#e69138" fill-opacity=".6" stroke="currentColor"/><circle cx="180" cy="160" r="38" fill="#cc0000" fill-opacity=".6" stroke="currentColor"/><g stroke="currentColor" fill="none"><circle cx="180" cy="160" r="52" stroke-width="3"/><line x1="180" y1="108" x2="180" y2="4" stroke-width="3.5"/><line x1="232" y1="160" x2="356" y2="160" stroke-width="3.5"/><line x1="143.2" y1="196.8" x2="40" y2="300" stroke-width="3.5"/></g><g font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"><text x="170" y="174">A</text><text x="238" y="206">B</text><text x="272" y="244">C</text><text x="330" y="36">D</text></g></svg>
<table class="tab">
<tr><th>Figuré</th><th>Légende</th></tr>
<tr><td colspan="2"><b>I. Un espace organisé en auréoles</b></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#cc0000" fill-opacity=".6" stroke="currentColor"/></svg> A</td><td class="vide"></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#e69138" fill-opacity=".6" stroke="currentColor"/></svg> B</td><td class="vide"></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#f1c232" fill-opacity=".6" stroke="currentColor"/></svg> C</td><td class="vide"></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#6aa84f" fill-opacity=".3" stroke="currentColor"/></svg> D</td><td class="vide"></td></tr>
<tr><td colspan="2"><b>II. Des espaces productifs</b></td></tr>
<tr><td class="vide"></td><td>Quartier d'affaires</td></tr>
<tr><td class="vide"></td><td>Zone commerciale ou technopôle</td></tr>
<tr><td colspan="2"><b>III. Des réseaux et des mobilités</b></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><line x1="2" y1="10" x2="38" y2="10" stroke="currentColor" stroke-width="3.5"/></svg></td><td>Autoroute et rocade</td></tr>
<tr><td class="vide"></td><td>Mobilités pendulaires</td></tr>
<tr><td class="vide"></td><td>Étalement urbain (périurbanisation)</td></tr>
</table>`,
    corrige: [
      {
        titre: "Exercice 1 — Analyser et comprendre des documents en histoire",
        html: `
<div class="rep"><p class="rq"><b>1.</b> La grande bataille de 1916 et la phase de la guerre</p>
<p>Il s'agit de la bataille de Verdun, qui oppose les Français aux Allemands de février à décembre 1916, en Lorraine, dans le Nord-Est de la France. Elle appartient à la guerre de position (1915 - mars 1918), pendant laquelle les soldats s'enterrent dans les tranchées.</p>
<p class="attendu"><b>On attend :</b> Verdun et la guerre de position, dans une ou deux phrases complètes.</p>
<p class="valorise"><b>On valorise :</b> les dates (février-décembre 1916), la localisation, le bilan (environ 163 000 morts français et 143 000 allemands), la Voie sacrée.</p>
<p class="piege"><b>Piège :</b> la bataille de la Somme (juillet-novembre 1916) oppose surtout les Britanniques et les Français aux Allemands et ne dure pas toute l'année ; la guerre de mouvement, c'est 1914 et 1918.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Deux éléments sur les conditions de vie des soldats</p>
<p>Les soldats vivent dans la boue : le fond de la tranchée est « tapissé d'une couche visqueuse d'où le pied se décolle à chaque pas ». Ils subissent aussi des bombardements permanents : « la fusillade et le bombardement ne se sont pas arrêtés du matin au soir et du soir au matin ».</p>
<p class="attendu"><b>On attend :</b> deux éléments différents, cités entre guillemets ou reformulés : la boue, la saleté et l'odeur (« l'urine de la nuit »), le froid (« emmitouflés à la manière des populations arctiques »), le manque d'hygiène (« barbes non taillées »), le bruit et le danger permanents.</p>
<p class="piege"><b>Piège :</b> recopier tout un paragraphe ; donner deux fois la même idée (la boue, puis la vase).</p></div>
<div class="rep"><p class="rq"><b>3.</b> À qui s'adresse l'affiche, et pour quoi faire ?</p>
<p>Cette affiche s'adresse aux civils de l'arrière, aux Français qui ont des économies. Elle leur demande de « souscrire » au 2<sup>e</sup> emprunt de la Défense nationale, c'est-à-dire de prêter leur argent à l'État pour financer la guerre.</p>
<p class="piege"><b>Piège :</b> croire que l'affiche s'adresse aux soldats ou qu'elle appelle à s'engager dans l'armée : le mot-clé est « Souscrivez ».</p></div>
<div class="rep"><p class="rq"><b>4.</b> L'affiche et la guerre totale</p>
<p>Une guerre totale mobilise toutes les ressources d'un pays, et pas seulement son armée. Cette affiche montre d'abord une mobilisation économique : l'État demande aux civils de lui prêter leur argent pour payer les armes et les munitions. Elle montre aussi la mobilisation des esprits : c'est une affiche de propagande, qui présente un soldat courageux et sûr de la victoire (« On les aura ! ») pour que l'arrière soutienne le front.</p>
<p class="attendu"><b>On attend :</b> la définition de la guerre totale, puis deux arguments tirés de l'affiche : l'argent des civils (mobilisation économique) et la propagande (mobilisation des esprits).</p>
<p class="valorise"><b>On valorise :</b> l'expression « bourrage de crâne » ; d'autres exemples du cours (les munitionnettes, les usines Renault reconverties dans l'armement) ; l'information donnée par le musée de l'Armée : les emprunts souscrits par les épargnants ont couvert la moitié des dépenses de guerre de la France.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Deux images du soldat : intérêt et limites des documents</p>
<p>Les deux documents, publiés en 1916, montrent le soldat français de façon opposée. Dans le document 1, les soldats sont sales, gelés, couverts de boue, comparés à « des espèces d'ours qui pataugent » : Barbusse décrit la souffrance quotidienne des tranchées. Son intérêt est qu'il a lui-même combattu, mais c'est un roman, avec des personnages, qui ne montre qu'un secteur du front. Dans le document 2, au contraire, le soldat est propre, enthousiaste et s'élance vers la victoire. Cette affiche de propagande est utile pour comprendre comment l'État mobilise l'arrière, mais elle cache la violence et la souffrance des combats : c'est du « bourrage de crâne ». Pour connaître la vie des soldats, le document 1 est donc plus proche de la réalité, à condition de le compléter par d'autres sources.</p>
<p class="attendu"><b>On attend :</b> une comparaison (misère / héroïsme), puis, pour chaque document, un intérêt et une limite liés à sa nature : roman d'un ancien combattant, affiche de propagande.</p>
<p class="valorise"><b>On valorise :</b> l'idée que <i>Le Feu</i> paraît en 1916, en pleine guerre, alors que la censure contrôle ce qui est publié ; le vocabulaire : poilu, guerre de position, propagande, censure.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 2 points chacune ; question 4 : 3 points ; question 5 : 4 points ; maîtrise de la langue : 2 points. Total : 15 points.</p>`
      },
      {
        titre: "Exercice 2 — Développement construit et schéma",
        html: `
<p><b>1 – Développement construit</b></p>
<p><b>Analyse du sujet.</b> « Décrivez » = dire comment l'aire urbaine est organisée (ses auréoles). « Expliquez comment elle se transforme » = dire comment et pourquoi elle change (périurbanisation, mobilités, enjeux). Plan conseillé en trois parties.</p>
<div class="rep"><p class="rq">Plan détaillé</p>
<p><b>Introduction.</b> La France est un pays très urbanisé : environ 8 Français sur 10 vivent en ville et plus de 3 sur 4 dans une grande aire urbaine. Une aire urbaine est formée d'un pôle urbain (la ville-centre et sa banlieue) et d'une couronne périurbaine, où au moins 40 % des actifs travaillent dans le pôle. Comment cet espace est-il organisé et comment se transforme-t-il ?</p>
<p><b>I. Un espace organisé en auréoles.</b> La ville-centre : centre historique, commerces, administrations, lieux de culture, souvent un quartier d'affaires (La Défense à Paris, la Part-Dieu à Lyon). La banlieue : grands ensembles des années 1950-1970, zones pavillonnaires, zones industrielles et commerciales. Ville-centre et banlieue forment le pôle urbain, bâti en continu, qui concentre les emplois. La couronne périurbaine : des communes plus rurales, séparées du pôle par des champs, avec des lotissements de maisons individuelles. Du centre vers la périphérie, la densité et la hauteur des immeubles diminuent, la place de la voiture augmente ; au-delà commence l'espace rural.</p>
<p><b>II. Un espace qui s'étale.</b> La périurbanisation se développe depuis les années 1970 : les familles cherchent une maison avec jardin, moins chère qu'en ville, dans un cadre plus calme. Elle est rendue possible par la voiture, les autoroutes et les rocades. Elle provoque des mobilités pendulaires et des embouteillages aux heures de pointe. Les activités suivent : centres commerciaux, plateformes logistiques et technopôles (Sophia-Antipolis, créé en 1969) s'installent en périphérie. Exemple : l'aire de Toulouse (environ 1,4 million d'habitants), avec Airbus à Blagnac, une couronne qui s'étend le long des autoroutes et une rocade saturée.</p>
<p><b>III. Des enjeux pour construire une ville durable.</b> Problèmes : artificialisation des sols (terres agricoles bétonnées), pollution et gaz à effet de serre, coût des trajets pour les ménages, inégalités entre les quartiers. Solutions : transports en commun (métro et tramway à Toulouse, Grand Paris Express), pistes cyclables, parkings relais ; densifier la ville au lieu de l'étaler, créer des écoquartiers (la Confluence à Lyon). La loi Climat et résilience (2021) fixe l'objectif de « zéro artificialisation nette » des sols en 2050.</p>
<p><b>Conclusion.</b> L'aire urbaine est organisée du centre vers la périphérie, mais elle est en mouvement : elle s'étale et dépend de la voiture. Les villes cherchent aujourd'hui à devenir durables. Ouverture : la métropolisation renforce le poids des plus grandes aires, comme Paris, seule ville mondiale française.</p></div>
<div class="exemple-redige"><p><b>Exemple de paragraphe rédigé (partie II)</b></p>
<p>Ensuite, l'aire urbaine ne cesse de s'étendre. Depuis les années 1970, de nombreuses familles quittent la ville-centre pour s'installer dans la couronne périurbaine : elles y trouvent une maison individuelle avec jardin, moins chère qu'en ville, dans un cadre plus calme. Cette périurbanisation est possible grâce à la voiture et au développement des autoroutes et des rocades. Elle entraîne des mobilités pendulaires : chaque matin, les actifs se rendent dans le pôle urbain, où se concentrent les emplois, puis rentrent le soir, ce qui provoque des embouteillages aux heures de pointe. Les activités suivent ce mouvement : centres commerciaux, zones d'activités et plateformes logistiques s'installent en périphérie, près des échangeurs d'autoroute. Par exemple, autour de Toulouse, la couronne périurbaine s'étend loin le long des autoroutes et la rocade est saturée aux heures de pointe. Ainsi, l'aire urbaine s'étale et dépend de plus en plus de la voiture.</p></div>
<p class="bareme">Barème indicatif (18 points) : introduction qui définit l'aire urbaine et pose le sujet : 2 ; organisation en auréoles décrite avec le vocabulaire juste : 5 ; transformations expliquées (périurbanisation, mobilités pendulaires, activités en périphérie) : 5 ; enjeux, solutions et exemple précis : 4 ; maîtrise de la langue (au moins trente lignes, paragraphes, connecteurs, orthographe) : 2.</p>
<p class="piege"><b>Piège :</b> écrire une liste à tirets ou un texte sans exemple localisé ; confondre la banlieue (bâtie en continu autour de la ville-centre) et la couronne périurbaine (des communes séparées du pôle par des champs).</p>
<p><b>2 – Le schéma (annexe)</b></p>
<svg class="fig-ex" viewBox="0 0 360 320" role="img" aria-label="Schéma corrigé : ville-centre, banlieue, couronne périurbaine et espace rural, quartier d'affaires, zone commerciale, autoroutes et rocade, flèches des mobilités pendulaires et de l'étalement urbain"><rect x="2" y="2" width="356" height="316" rx="8" fill="#6aa84f" fill-opacity=".22" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="160" r="140" fill="#f1c232" fill-opacity=".45" stroke="currentColor"/><circle cx="180" cy="160" r="85" fill="#e69138" fill-opacity=".6" stroke="currentColor"/><circle cx="180" cy="160" r="38" fill="#cc0000" fill-opacity=".6" stroke="currentColor"/><g stroke="currentColor" fill="none"><circle cx="180" cy="160" r="52" stroke-width="3"/><line x1="180" y1="108" x2="180" y2="4" stroke-width="3.5"/><line x1="232" y1="160" x2="356" y2="160" stroke-width="3.5"/><line x1="143.2" y1="196.8" x2="40" y2="300" stroke-width="3.5"/></g><rect x="184" y="138" width="11" height="11" fill="currentColor"/><polygon points="252,128 262,145 242,145" fill="#674ea7" stroke="currentColor"/><g><line x1="232" y1="270" x2="201.6" y2="203" stroke="currentColor" stroke-width="2"/><polygon points="197,193 207,200.5 196.1,205.5" fill="currentColor"/><line x1="302" y1="96" x2="221.6" y2="140.7" stroke="currentColor" stroke-width="2"/><polygon points="212,146 218.7,135.4 224.5,145.9" fill="currentColor"/><line x1="48" y1="176" x2="134.1" y2="165.4" stroke="currentColor" stroke-width="2"/><polygon points="145,164 134.8,171.3 133.3,159.4" fill="currentColor"/></g><g><line x1="236" y1="96" x2="268.6" y2="60.1" stroke="#e69138" stroke-width="3.5"/><polygon points="276,52 273,64.2 264.2,56.1" fill="#e69138"/><line x1="122" y1="100" x2="95.3" y2="70.2" stroke="#e69138" stroke-width="3.5"/><polygon points="88,62 99.8,66.2 90.9,74.2" fill="#e69138"/><line x1="160" y1="240" x2="152.1" y2="281.2" stroke="#e69138" stroke-width="3.5"/><polygon points="150,292 146.2,280.1 158,282.3" fill="#e69138"/></g><g font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"><text x="170" y="174">A</text><text x="238" y="206">B</text><text x="272" y="244">C</text><text x="330" y="36">D</text></g></svg>
<p><b>Titre :</b> L'organisation d'une grande aire urbaine française.</p>
<table class="tab">
<tr><th>Figuré</th><th>Légende</th></tr>
<tr><td colspan="2"><b>I. Un espace organisé en auréoles</b></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#cc0000" fill-opacity=".6" stroke="currentColor"/></svg> A</td><td>Ville-centre (centre historique, commerces, administrations)</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#e69138" fill-opacity=".6" stroke="currentColor"/></svg> B</td><td>Banlieue (grands ensembles, zones pavillonnaires, zones d'activités)</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#f1c232" fill-opacity=".6" stroke="currentColor"/></svg> C</td><td>Couronne périurbaine (lotissements de maisons individuelles)</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="1" y="1" width="38" height="18" fill="#6aa84f" fill-opacity=".3" stroke="currentColor"/></svg> D</td><td>Espace rural, au-delà de l'aire urbaine, moins dépendant de la ville</td></tr>
<tr><td colspan="2"><b>II. Des espaces productifs</b></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="14" y="4" width="11" height="11" fill="currentColor"/></svg></td><td>Quartier d'affaires, dans la ville-centre</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><polygon points="20,2 30,18 10,18" fill="#674ea7" stroke="currentColor"/></svg></td><td>Zone commerciale ou technopôle, en périphérie, près d'une autoroute ou de la rocade</td></tr>
<tr><td colspan="2"><b>III. Des réseaux et des mobilités</b></td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><line x1="2" y1="10" x2="38" y2="10" stroke="currentColor" stroke-width="3.5"/></svg></td><td>Autoroute et rocade</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><line x1="3" y1="10" x2="26" y2="10" stroke="currentColor" stroke-width="2.5"/><polygon points="37,10 26,16 26,4" fill="currentColor"/></svg></td><td>Mobilités pendulaires (de la périphérie vers le pôle urbain le matin)</td></tr>
<tr><td><svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><line x1="3" y1="10" x2="26" y2="10" stroke="#e69138" stroke-width="3.5"/><polygon points="37,10 26,16 26,4" fill="#e69138"/></svg></td><td>Étalement urbain (périurbanisation), du centre vers l'extérieur</td></tr>
</table>
<p class="bareme">Barème indicatif (7 points) : 1. 0,5 point par espace bien nommé (2) ; 2. figurés ponctuels adaptés, bien placés et reportés dans la légende (2) ; 3. flèches dans le bon sens, reportées dans la légende (2) ; 4. titre précis (1).</p>
<p class="piege"><b>Piège :</b> inverser les flèches (les mobilités pendulaires vont vers le centre, l'étalement urbain va vers l'extérieur) ; dessiner un figuré sans le reporter dans la légende ; confondre D, l'espace rural situé au-delà de l'aire urbaine, avec la couronne périurbaine C.</p>`
      },
      {
        titre: "Enseignement moral et civique — Un nom oublié sur le monument aux morts",
        html: `
<div class="rep"><p class="rq"><b>1.</b> Ce que commémore le 11 novembre</p>
<p>Le 11 novembre est le « jour anniversaire de l'armistice de 1918 et de commémoration annuelle de la victoire et de la Paix ». Depuis la loi de 2012, la Nation y rend aussi hommage à « tous les morts pour la France ».</p>
<p class="attendu"><b>On attend :</b> les deux éléments : l'armistice de 1918 (la victoire et la paix) et l'hommage à tous les morts pour la France.</p></div>
<div class="rep"><p class="rq"><b>2.</b> L'inscription du nom est-elle obligatoire ?</p>
<p>Oui : l'acte de décès du soldat porte la mention « Mort pour la France » et il est né dans la commune, donc l'inscription de son nom sur le monument aux morts de sa commune de naissance (ou de sa dernière commune de domicile, si la famille la choisit) « est obligatoire ». La demande est adressée au maire, par la famille ou, à défaut, par les autorités militaires, des élus, l'Office national des anciens combattants ou une association d'anciens combattants.</p>
<p class="piege"><b>Piège :</b> répondre seulement « oui » sans justifier par les deux conditions (la mention « Mort pour la France », la commune de naissance) ; oublier à qui s'adresse la demande.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Un hommage à plusieurs générations</p>
<p>Le message rappelle d'abord les morts de 1914-1918 : « Un million quatre cent mille soldats français avaient perdu la vie ». Il honore ensuite « toutes les générations du feu » : les morts de la Seconde Guerre mondiale, des guerres d'Indochine, de Corée et d'Algérie, et ceux des opérations extérieures, jusqu'aux militaires tombés aujourd'hui en mission. Le 11 novembre rend donc hommage à tous les morts pour la France, quelle que soit la guerre.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Une valeur de la République</p>
<p>Cette journée est liée à la fraternité. C'est « chaque 11 novembre, dans chaque commune de France » que les habitants se rassemblent devant le monument aux morts pour honorer ensemble ceux qui ont donné leur vie pour la France : cette mémoire partagée unit les citoyens, quelles que soient leurs origines. On peut aussi citer l'égalité : tous les morts pour la France, « combattants de toutes origines », ont droit au même hommage et à l'inscription de leur nom.</p>
<p class="attendu"><b>On attend :</b> une valeur de la devise (liberté, égalité ou fraternité) et une justification appuyée sur un document.</p>
<p class="valorise"><b>On valorise :</b> la liberté (« mesurons le prix de notre liberté ») ; les notions de devoir de mémoire et de cohésion nationale.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Une démarche pour faire inscrire le nom (6 à 8 lignes)</p>
<p>Pour faire inscrire le nom de ce soldat, nous pouvons d'abord vérifier sa fiche dans les archives, par exemple sur le site « Mémoire des hommes » du ministère des Armées, puis retrouver sa famille ou contacter une association d'anciens combattants. Comme le prévoit la loi, la demande sera adressée au maire, qui doit faire inscrire le nom. Nous pourrons ensuite écrire une courte biographie du soldat et lire son nom lors de la cérémonie du 11 novembre. Cette démarche est importante, car ce soldat a donné sa vie pour la France : la Nation lui doit la même reconnaissance qu'aux autres morts. Elle fait aussi vivre le devoir de mémoire et transmet cet héritage aux jeunes, comme le souhaite le message du 11 novembre. Enfin, en nous engageant ainsi, nous agissons en citoyens.</p>
<p class="attendu"><b>On attend :</b> une démarche concrète et réaliste, conforme à la loi (la demande au maire), et au moins deux arguments : reconnaissance de la Nation, égalité entre tous les morts, devoir de mémoire, cohésion nationale, engagement citoyen.</p>
<p class="piege"><b>Piège :</b> citer le nom de son collège ou de sa commune, ou signer : la copie doit rester anonyme.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 3 points chacune ; question 4 : 4 points ; question 5 : 5 points ; maîtrise de la langue : 2 points. Total : 20 points.</p>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Gère les 2 heures.</b> Exercice 1 : environ 45 minutes ; développement construit et schéma : 45 minutes ; EMC : 30 minutes. Lis tout le sujet avant de commencer.</li>
<li><b>Présente chaque document au brouillon.</b> Document 1 : un roman écrit par un ancien soldat (témoignage, mais œuvre littéraire). Document 2 : une affiche de propagande commandée pour un emprunt d'État. Cette présentation te servira pour la question critique.</li>
<li><b>Réponse courte = une ou deux phrases complètes.</b> Reprends les mots de la question, donne l'information précise (Verdun, guerre de position) et, si on te demande de relever, cite entre guillemets.</li>
<li><b>Réponse développée (questions 4 et 5).</b> Définis la notion (guerre totale), puis : idée → preuve tirée du document → explication avec le cours. Pour la critique : qui parle ? dans quel but ? que montre le document, que cache-t-il ?</li>
<li><b>Développement construit : le plan d'abord.</b> Au brouillon (5 minutes) : « décrivez » donne la partie I (les auréoles), « expliquez comment elle se transforme » donne les parties II et III (étalement, enjeux). Mets dans chaque partie un exemple localisé (Toulouse, Paris, Lyon).</li>
<li><b>Rédige au moins trente lignes.</b> Introduction (définition de l'aire urbaine + question), trois paragraphes avec alinéa, conclusion. Connecteurs : D'abord, Ensuite, Enfin ; En effet, car ; Ainsi, c'est pourquoi ; Cependant. Jamais de tirets ni de titres.</li>
<li><b>Schéma.</b> Surfaces en dégradé du centre (foncé) vers l'extérieur (clair) ; figurés ponctuels pour les lieux (carré, triangle) ; flèches pour les mouvements, vers le centre pour les mobilités pendulaires, vers l'extérieur pour l'étalement. Tout ce que tu dessines va dans la légende, et un titre précis.</li>
<li><b>EMC.</b> Appuie-toi sur la loi (cite l'article), nomme la valeur (fraternité, égalité) et, pour la question 5, présente une action concrète puis deux arguments reliés par des connecteurs. Ne signe pas et ne cite aucun nom réel.</li>
</ol>
<p class="tip">Mots que le correcteur cherche : Verdun 1916, guerre de position, guerre totale, propagande, bourrage de crâne ; ville-centre, banlieue, pôle urbain, couronne périurbaine, périurbanisation, mobilités pendulaires, ville durable ; mémoire, fraternité, « Mort pour la France ».</p>`
  },

  /* ================================================================
     SUJET 2 — Ex. 1 géographie (geo-ch1) ; DC histoire (hg-ch2) + frise ; EMC vote
     ================================================================ */
  {
    id: 'ex-histoire-2',
    matiere: 'histoire',
    numero: 2,
    titre: "Les aires d'attraction des villes ; l'URSS de Staline",
    epreuve: "HISTOIRE-GÉOGRAPHIE — ENSEIGNEMENT MORAL ET CIVIQUE",
    duree: "2 h 00",
    points: 60,
    pointsRedaction: 0,
    cours: ['geo-ch1', 'hg-ch2'],
    methodes: ['hg-m1', 'hg-m2'],
    garde: [
      "Durée de l'épreuve : 2 h 00",
      "Sous-épreuve d'histoire-géographie : 40 points (coefficient 1,5 ; la note obtenue est ramenée sur 20 points)",
      "Sous-épreuve d'enseignement moral et civique (EMC) : 20 points (coefficient 0,5)",
      "Les deux sous-épreuves se traitent pendant les 2 heures, sans pause entre les deux.",
      "L'utilisation du dictionnaire et de la calculatrice est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Exercice 1. Analyser et comprendre des documents en géographie (15 points)",
        points: 15,
        html: `
<p><b>GÉOGRAPHIE : Les aires urbaines, une nouvelle géographie d'une France mondialisée.</b></p>
<div class="doc">
<p class="doc-titre">Document 1 : Neuf personnes sur dix vivent dans l'aire d'attraction d'une ville.</p>
<p><i>Présentation : l'Insee, l'institut national de la statistique, découpe la France en « aires d'attraction des villes ». Ce zonage, créé en 2020, remplace celui des aires urbaines de 2010.</i></p>
<p>L'aire d'attraction d'une ville définit l'étendue de son influence sur les communes environnantes. Une aire est composée d'un pôle, défini à partir de critères de population et d'emploi, et d'une couronne, constituée des communes dont au moins 15 % des actifs<sup>1</sup> travaillent dans le pôle. […]</p>
<p>En France, 93 % de la population vit dans l'une des 699 aires d'attraction des villes […]. Avec 13 millions d'habitants, l'aire d'attraction de Paris concentre, à elle seule, près d'un habitant sur cinq. Treize autres aires comptent plus de 700 000 habitants : Lyon, Marseille-Aix-en-Provence, Lille, Toulouse, Bordeaux, Genève-Annemasse<sup>2</sup>, Nantes, Luxembourg, Strasbourg, Sarrebruck, Montpellier, Rennes et Grenoble. […]</p>
<p>Entre 2007 et 2017, la croissance de la population est la plus dynamique dans les aires de 700 000 habitants ou plus […].</p>
<p>La croissance de la population est nettement plus faible dans les communes-centres que dans le reste des aires […]. Enfin, dans les couronnes des aires, le solde migratoire<sup>3</sup> est positif, et plus important que le solde naturel<sup>3</sup> : de nombreux ménages s'installent en périphérie des grandes villes.</p>
<p class="notes"><sup>1</sup> actifs : ici, personnes qui ont un emploi. <sup>2</sup> Genève-Annemasse, Luxembourg, Sarrebruck : aires dont la ville principale est à l'étranger (Suisse, Luxembourg, Allemagne), mais qui s'étendent sur des communes françaises. <sup>3</sup> solde migratoire : différence entre le nombre de personnes qui s'installent et le nombre de celles qui partent ; solde naturel : différence entre les naissances et les décès.</p>
<p class="source">Source : Marie-Pierre de Bellefon, Pascal Eusebio, Jocelyn Forest, Olivier Pégaz-Blanc, Raymond Warnod, « En France, neuf personnes sur dix vivent dans l'aire d'attraction d'une ville », <i>Insee Focus</i> n° 211, Insee, 21 octobre 2020 : https://www.insee.fr/fr/statistiques/4806694</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : La population selon la taille des aires d'attraction des villes, en 2017.</p>
<table class="tab">
<tr><th>Taille de l'aire d'attraction</th><th>Nombre d'aires</th><th>Nombre d'habitants</th><th>Part de la population française (en %)</th></tr>
<tr><td>Aire de Paris</td><td>1</td><td>13&nbsp;024&nbsp;518</td><td>19,5</td></tr>
<tr><td>700 000 habitants ou plus (hors Paris)</td><td>13</td><td>13&nbsp;136&nbsp;668</td><td>19,7</td></tr>
<tr><td>200 000 à moins de 700 000 habitants</td><td>47</td><td>15&nbsp;731&nbsp;876</td><td>23,6</td></tr>
<tr><td>50 000 à moins de 200 000 habitants</td><td>126</td><td>12&nbsp;295&nbsp;213</td><td>18,4</td></tr>
<tr><td>Moins de 50 000 habitants</td><td>512</td><td>8&nbsp;125&nbsp;598</td><td>12,2</td></tr>
<tr><td>Communes hors attraction des villes</td><td>–</td><td>4&nbsp;466&nbsp;984</td><td>6,7</td></tr>
<tr><td><b>Ensemble de la France</b></td><td><b>699</b></td><td><b>66&nbsp;780&nbsp;857</b></td><td><b>100</b></td></tr>
</table>
<p class="source">Source : Insee, recensement de la population 2017, zonage en aires d'attraction des villes 2020 ; extrait de la figure 1 de l'<i>Insee Focus</i> n° 211, octobre 2020 : https://www.insee.fr/fr/statistiques/4806694</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><b>Se repérer dans l'espace</b></p>
<p class="q"><b>1.</b> Citez deux aires d'attraction françaises de plus de 700 000 habitants nommées dans le document 1 et localisez-les sur le territoire français (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Prélever des informations</b></p>
<p><i>Document 1</i></p>
<p class="q"><b>2.</b> Relevez la part de la population française qui vit dans l'aire d'attraction d'une ville, puis nommez les deux espaces qui composent une aire (réponse courte). <span class="pts">(2 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> Relevez le nombre d'habitants de l'aire d'attraction de Paris et la part de la population française qu'elle rassemble (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Analyser et porter un regard critique</b></p>
<p><i>Document 1</i></p>
<p class="q"><b>4.</b> Indiquez dans quelle partie des aires la population augmente le plus, puis expliquez ce phénomène à l'aide de vos connaissances (réponse : 2 à 4 lignes). <span class="pts">(3 points)</span></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>5.</b> Montrez que les aires urbaines (appelées « aires d'attraction des villes » par l'Insee depuis 2020) organisent le territoire français et qu'elles sont dominées par Paris et par les grandes métropoles. Indiquez une limite de ces documents (réponse : 4 à 6 lignes). <span class="pts">(4 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble de l'exercice <span class="pts">(2 points)</span>.</p>`
      },
      {
        titre: "Exercice 2. Maîtriser différents langages pour raisonner et utiliser des repères historiques (25 points)",
        points: 25,
        html: `
<p><b>HISTOIRE : Démocraties fragilisées et expériences totalitaires dans l'Europe de l'entre-deux-guerres.</b></p>
<p class="q"><b>1 – Développement construit</b> <span class="pts">(18 points)</span></p>
<p>Dans un développement construit d'au moins trente lignes, montrez que l'URSS de Staline est un régime totalitaire dans les années 1930.</p>
<p>Pour vous aider, vous pourrez utiliser certains des mots suivants : parti unique, culte de la personnalité, propagande, collectivisation, plans quinquennaux, goulag, grandes purges.</p>
<p class="consigne">La qualité de la rédaction est prise en compte à hauteur de 2 points sur 18.</p>
<p class="q"><b>2 – Comprendre et pratiquer un autre langage : utiliser des repères historiques</b> <span class="pts">(7 points)</span></p>
<p>Réalisez l'exercice demandé sur le document en annexe. Elle sera à rendre avec la copie.</p>`
      },
      {
        titre: "Enseignement moral et civique (20 points)",
        points: 20,
        html: `
<p><b>SITUATION PRATIQUE : « Voter, ça ne sert à rien ! »</b></p>
<p><i>Situation : votre cousin vient d'avoir 18 ans. Le maire de sa commune lui a remis sa carte électorale lors d'une cérémonie de citoyenneté. Mais, à quelques semaines d'une élection, il vous dit : « Voter, ça ne sert à rien, je n'irai pas. »</i></p>
<div class="doc">
<p class="doc-titre">Document 1 : La Constitution de la V<sup>e</sup> République (extraits).</p>
<p><b>Article 3</b> — La souveraineté<sup>1</sup> nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum<sup>2</sup>.<br>Aucune section du peuple ni aucun individu ne peut s'en attribuer l'exercice.<br>Le suffrage peut être direct ou indirect dans les conditions prévues par la Constitution. Il est toujours universel, égal et secret.<br>Sont électeurs, dans les conditions déterminées par la loi, tous les nationaux français majeurs des deux sexes, jouissant de leurs droits civils et politiques.</p>
<p><b>Article 4</b> — Les partis et groupements politiques concourent à l'expression du suffrage. Ils se forment et exercent leur activité librement. Ils doivent respecter les principes de la souveraineté nationale et de la démocratie. […]<br>La loi garantit les expressions pluralistes<sup>3</sup> des opinions et la participation équitable des partis et groupements politiques à la vie démocratique de la Nation.</p>
<p class="notes"><sup>1</sup> souveraineté : pouvoir suprême de décider. <sup>2</sup> référendum : vote par lequel les citoyens répondent directement par oui ou par non à une question. <sup>3</sup> pluraliste : qui permet l'existence de plusieurs opinions et de plusieurs partis.</p>
<p class="source">Source : Constitution du 4 octobre 1958, articles 3 et 4, texte en vigueur sur le site du Conseil constitutionnel : https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : L'inscription sur la liste électorale à 18 ans.</p>
<p>Si vous êtes français et que vous avez fait votre recensement citoyen<sup>1</sup> à 16 ans, vous êtes inscrit automatiquement sur la liste électorale à 18 ans.</p>
<p>L'inscription sur la liste électorale s'accompagne de la délivrance d'une carte électorale.</p>
<p>La carte électorale vous est :</p>
<ul><li>Soit remise à l'occasion d'une cérémonie de citoyenneté organisée par le maire</li><li>Soit envoyée par courrier au plus tard 3 jours avant le scrutin (élection ou référendum). […]</li></ul>
<p>Si vous n'avez pas effectué votre recensement citoyen ou si vous l'avez fait tardivement, vous n'êtes pas inscrit automatiquement sur la liste électorale à 18 ans.</p>
<p class="notes"><sup>1</sup> recensement citoyen : démarche obligatoire que chaque jeune Français fait à la mairie à partir de 16 ans.</p>
<p class="source">Source : « Liste électorale : inscription d'office à 18 ans si le recensement citoyen a été fait à 16 ans », Service-Public.fr, Direction de l'information légale et administrative (Premier ministre), page vérifiée le 28 novembre 2025 : https://www.service-public.gouv.fr/particuliers/vosdroits/F1961</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><i>Document 1</i></p>
<p class="q"><b>1.</b> D'après l'article 3, identifiez à qui appartient la souveraineté nationale et les deux façons dont elle s'exerce (réponse courte). <span class="pts">(3 points)</span></p>
<p class="q"><b>2.</b> Relevez les trois caractéristiques du suffrage et expliquez ce que signifie l'une d'elles (réponse courte). <span class="pts">(3 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> Indiquez les deux conditions pour être inscrit automatiquement sur la liste électorale à 18 ans (réponse courte). <span class="pts">(3 points)</span></p>
<p><i>Document 1 et connaissances</i></p>
<p class="q"><b>4.</b> À l'aide de l'article 4 et de vos connaissances d'histoire, expliquez pourquoi le pluralisme politique distingue la démocratie française des régimes totalitaires des années 1930 (réponse : 3 à 4 lignes). <span class="pts">(4 points)</span></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>5.</b> Rédigez la réponse que vous adressez à votre cousin pour le convaincre d'aller voter (réponse : 6 à 8 lignes). <span class="pts">(5 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble des réponses <span class="pts">(2 points)</span>.</p>
<p class="consigne">Afin de respecter l'anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d'un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: `
<p class="consigne">ATTENTION : cette feuille doit être détachée du sujet et placée à l'intérieur de la copie.</p>
<p><b>Exercice 2 – 2. Utiliser des repères historiques</b></p>
<p class="q"><b>1.</b> Complétez le tableau ci-dessous en indiquant les dates de la période et des événements historiques (réponse courte). <span class="pts">(2 points)</span></p>
<table class="tab">
<tr><th>Période et événements historiques</th><th>Dates ou période</th></tr>
<tr><td>Révolution bolchevique : Lénine prend le pouvoir en Russie</td><td class="vide"></td></tr>
<tr><td>Mort de Lénine : Staline s'impose à la tête de l'URSS</td><td class="vide"></td></tr>
<tr><td>Hitler est nommé chancelier en Allemagne</td><td class="vide"></td></tr>
<tr><td>Les grandes purges en URSS</td><td class="vide"></td></tr>
</table>
<p class="q"><b>2.</b> À l'aide de figurés adaptés, placez sur la frise la période et les trois événements historiques de la question précédente, puis construisez une courte légende. <span class="pts">(4 points)</span></p>
<p class="q"><b>3.</b> Dans le cadre prévu à cet effet, nommez l'événement historique relié à la frise (réponse courte). <span class="pts">(1 point)</span></p>
<svg class="fig-ex" viewBox="0 0 360 165" role="img" aria-label="Frise chronologique graduée de 1915 à 1940 (une graduation par an), avec un cadre vide relié à une date"><rect x="20" y="6" width="170" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="113.6" y1="44" x2="113.6" y2="118" stroke="currentColor" stroke-dasharray="4 3"/><circle cx="113.6" cy="120" r="3.5" fill="currentColor"/><line x1="24" y1="120" x2="352" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="352,114 360,120 352,126" fill="currentColor"/><g stroke="currentColor"><line x1="24" y1="111" x2="24" y2="129" stroke-width="1.5"/><line x1="36.8" y1="116" x2="36.8" y2="124"/><line x1="49.6" y1="116" x2="49.6" y2="124"/><line x1="62.4" y1="116" x2="62.4" y2="124"/><line x1="75.2" y1="116" x2="75.2" y2="124"/><line x1="88" y1="111" x2="88" y2="129" stroke-width="1.5"/><line x1="100.8" y1="116" x2="100.8" y2="124"/><line x1="113.6" y1="116" x2="113.6" y2="124"/><line x1="126.4" y1="116" x2="126.4" y2="124"/><line x1="139.2" y1="116" x2="139.2" y2="124"/><line x1="152" y1="111" x2="152" y2="129" stroke-width="1.5"/><line x1="164.8" y1="116" x2="164.8" y2="124"/><line x1="177.6" y1="116" x2="177.6" y2="124"/><line x1="190.4" y1="116" x2="190.4" y2="124"/><line x1="203.2" y1="116" x2="203.2" y2="124"/><line x1="216" y1="111" x2="216" y2="129" stroke-width="1.5"/><line x1="228.8" y1="116" x2="228.8" y2="124"/><line x1="241.6" y1="116" x2="241.6" y2="124"/><line x1="254.4" y1="116" x2="254.4" y2="124"/><line x1="267.2" y1="116" x2="267.2" y2="124"/><line x1="280" y1="111" x2="280" y2="129" stroke-width="1.5"/><line x1="292.8" y1="116" x2="292.8" y2="124"/><line x1="305.6" y1="116" x2="305.6" y2="124"/><line x1="318.4" y1="116" x2="318.4" y2="124"/><line x1="331.2" y1="116" x2="331.2" y2="124"/><line x1="344" y1="111" x2="344" y2="129" stroke-width="1.5"/></g><g font-size="14" fill="currentColor" text-anchor="middle"><text x="24" y="147">1915</text><text x="88" y="147">1920</text><text x="152" y="147">1925</text><text x="216" y="147">1930</text><text x="280" y="147">1935</text><text x="344" y="147">1940</text></g></svg>
<p><b>Légende :</b> …………………………………………………………………………</p>`,
    corrige: [
      {
        titre: "Exercice 1 — Analyser et comprendre des documents en géographie",
        html: `
<div class="rep"><p class="rq"><b>1.</b> Deux grandes aires d'attraction localisées</p>
<p>L'aire de Lyon se trouve dans le Centre-Est de la France, sur le Rhône, et celle de Lille au nord, près de la frontière belge.</p>
<p class="attendu"><b>On attend :</b> deux aires françaises du document et, pour chacune, une localisation précise (point cardinal + un repère : frontière, littoral, fleuve, région). Autres réponses : Marseille-Aix-en-Provence au sud-est, sur la Méditerranée ; Toulouse et Bordeaux au sud-ouest ; Nantes et Rennes à l'ouest ; Strasbourg à l'est, sur le Rhin ; Montpellier au sud ; Grenoble dans les Alpes.</p>
<p class="piege"><b>Piège :</b> citer Genève-Annemasse, Luxembourg ou Sarrebruck, dont la ville principale est à l'étranger ; citer Paris, qui n'est pas parmi les « treize autres aires ».</p></div>
<div class="rep"><p class="rq"><b>2.</b> La part de la population et les deux espaces d'une aire</p>
<p>93 % de la population française vit dans l'une des 699 aires d'attraction des villes, soit plus de neuf personnes sur dix. Une aire est composée d'un pôle et d'une couronne.</p>
<p class="valorise"><b>On valorise :</b> le lien avec le cours : le pôle correspond à peu près au pôle urbain (la ville-centre et sa banlieue), la couronne à la couronne périurbaine.</p>
<p class="piege"><b>Piège :</b> le cours (aires urbaines de 2010) donne un seuil de 40 % des actifs pour la couronne ; le nouveau zonage de l'Insee (2020) retient 15 %. Les deux sont justes, chacun pour son zonage.</p></div>
<div class="rep"><p class="rq"><b>3.</b> L'aire d'attraction de Paris</p>
<p>L'aire d'attraction de Paris compte 13 024 518 habitants, soit environ 13 millions, et rassemble 19,5 % de la population française, c'est-à-dire près d'un habitant sur cinq.</p>
<p class="piege"><b>Piège :</b> oublier l'unité (habitants, %) ou confondre avec la ligne « 700 000 habitants ou plus (hors Paris) ».</p></div>
<div class="rep"><p class="rq"><b>4.</b> Où la population augmente-t-elle le plus, et pourquoi ?</p>
<p>La population augmente surtout dans les couronnes, alors que la croissance est « nettement plus faible dans les communes-centres ». En effet, « de nombreux ménages s'installent en périphérie des grandes villes » : c'est la périurbanisation. Les familles y trouvent une maison individuelle avec jardin, moins chère qu'en ville, et se rendent en voiture à leur travail dans le pôle.</p>
<p class="attendu"><b>On attend :</b> les couronnes (prélèvement), le mot « périurbanisation » et au moins une cause (logement moins cher, maison avec jardin, cadre de vie, voiture).</p></div>
<div class="rep"><p class="rq"><b>5.</b> Des aires urbaines hiérarchisées, dominées par Paris et les métropoles</p>
<p>Les aires urbaines organisent presque tout le territoire : 93 % des habitants vivent dans l'aire d'attraction d'une ville et seulement 6,7 % dans une commune hors attraction. Ces aires forment une hiérarchie. Paris, seule ville mondiale française, domine avec 13 millions d'habitants, près d'un Français sur cinq. Viennent ensuite treize autres aires de plus de 700 000 habitants, qui rassemblent 19,7 % de la population et grandissent le plus vite : la plupart sont des métropoles régionales, comme Lyon, Marseille-Aix-en-Provence, Lille ou Toulouse. C'est la métropolisation. Cependant, ces documents de l'Insee, très fiables, datent du recensement de 2017 et ne montrent ni les fonctions de commandement des métropoles ni la vie des habitants (trajets, embouteillages, inégalités).</p>
<p class="attendu"><b>On attend :</b> l'idée d'organisation du territoire (93 %), la hiérarchie (Paris, puis les métropoles régionales, puis les petites aires) avec des chiffres, le mot métropolisation, et une limite.</p>
<p class="valorise"><b>On valorise :</b> les fonctions de commandement de Paris (ministères, sièges sociaux de La Défense, aéroports de Roissy et d'Orly) ; le dynamisme des métropoles de l'Ouest et du Sud.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 2 points chacune ; question 4 : 3 points ; question 5 : 4 points ; maîtrise de la langue : 2 points. Total : 15 points.</p>`
      },
      {
        titre: "Exercice 2 — Développement construit et frise chronologique",
        html: `
<p><b>1 – Développement construit</b></p>
<p><b>Analyse du sujet.</b> « Montrez que » = prouver avec des exemples précis. Bornes : l'URSS, des années 1920 (Staline au pouvoir en 1924) à 1939. Un régime totalitaire repose sur trois piliers : un dictateur, un parti unique et une idéologie ; le contrôle de l'économie ; le contrôle du peuple par la propagande, l'embrigadement et la terreur. Ces trois piliers donnent les trois parties.</p>
<div class="rep"><p class="rq">Plan détaillé</p>
<p><b>Introduction.</b> En 1917, la révolution bolchevique porte Lénine au pouvoir en Russie ; il crée l'URSS en 1922. À sa mort, en 1924, Staline écarte ses rivaux et s'impose. Un régime totalitaire est un régime dans lequel l'État impose ses idées par la propagande et la terreur et contrôle le peuple et l'économie. Comment Staline fait-il de l'URSS un tel régime dans les années 1930 ?</p>
<p><b>I. Un dictateur, un parti unique et une idéologie.</b> Staline concentre tous les pouvoirs. Le parti communiste est le seul parti autorisé. Son idéologie, le communisme, veut imposer la propriété collective pour supprimer les classes sociales. Le culte de la personnalité présente Staline comme le guide, le « père du peuple », dans les journaux, à la radio et sur les affiches.</p>
<p><b>II. Une économie contrôlée par l'État.</b> À partir de 1929, la collectivisation des terres regroupe les paysans dans des kolkhozes ; les koulaks qui s'y opposent sont persécutés, éliminés ou déportés au goulag. Les plans quinquennaux fixent les objectifs et donnent la priorité à l'industrie lourde et à l'armement : l'URSS devient la 3<sup>e</sup> puissance industrielle mondiale en 1939. Mais la population manque de tout : les famines de 1931-1933 font environ 6 millions de victimes.</p>
<p><b>III. Un peuple encadré par la propagande et la terreur.</b> La propagande montre des ouvriers, des paysans et des soldats heureux, avec les symboles du régime (faucille et marteau, étoile rouge). La jeunesse est embrigadée dans les jeunesses communistes, la population participe aux parades et aux défilés. Les opposants sont surveillés par la police politique, le NKVD, et envoyés au goulag. Pendant les grandes purges (1936-1938), Staline fait éliminer des membres mêmes du parti communiste.</p>
<p><b>Conclusion.</b> L'URSS de Staline réunit donc tous les traits d'un régime totalitaire : un chef tout-puissant, une économie étatisée, une société contrôlée par la propagande et la terreur. Comme l'Allemagne nazie, à l'idéologie pourtant opposée, elle s'oppose aux démocraties, comme la France, fragilisée par la crise, où le Front populaire, élu en 1936, maintient la démocratie.</p></div>
<div class="exemple-redige"><p><b>Exemple de paragraphe rédigé (partie II)</b></p>
<p>Ensuite, l'État soviétique contrôle toute l'économie. À partir de 1929, Staline impose la collectivisation des terres : les paysans doivent mettre en commun leurs terres, leurs outils et leur bétail dans des exploitations collectives, les kolkhozes. Les koulaks, paysans aisés qui s'y opposent, sont persécutés, éliminés ou déportés dans les camps de travail forcé du goulag. De plus, l'économie est planifiée : des plans quinquennaux fixent pour cinq ans les objectifs de production et donnent la priorité à l'industrie lourde, comme l'acier et le charbon, et à l'armement. L'URSS devient ainsi la troisième puissance industrielle mondiale en 1939. Cependant, la population manque de nourriture et de biens courants : les famines de 1931 à 1933 font environ 6 millions de victimes. Ainsi, en URSS, l'État décide de tout, même au prix des souffrances du peuple.</p></div>
<p class="bareme">Barème indicatif (18 points) : introduction (contexte, définition du totalitarisme, question) : 2 ; partie I : 4 ; partie II : 4 ; partie III : 4 ; conclusion : 2 ; maîtrise de la langue (au moins trente lignes, paragraphes, connecteurs, orthographe) : 2.</p>
<p class="piege"><b>Piège :</b> confondre Lénine (1917-1924) et Staline ; décrire l'Allemagne nazie au lieu de l'URSS ; raconter la Seconde Guerre mondiale, hors des bornes du sujet.</p>
<p><b>2 – La frise chronologique (annexe)</b></p>
<table class="tab">
<tr><th>Période et événements historiques</th><th>Dates ou période</th></tr>
<tr><td>Révolution bolchevique : Lénine prend le pouvoir en Russie</td><td>Octobre 1917</td></tr>
<tr><td>Mort de Lénine : Staline s'impose à la tête de l'URSS</td><td>1924</td></tr>
<tr><td>Hitler est nommé chancelier en Allemagne</td><td>30 janvier 1933</td></tr>
<tr><td>Les grandes purges en URSS</td><td>1936-1938</td></tr>
</table>
<svg class="fig-ex" viewBox="0 0 360 165" role="img" aria-label="Frise corrigée de 1915 à 1940 : 1 révolution bolchevique en octobre 1917, 2 Staline au pouvoir en 1924, 3 Hitler chancelier le 30 janvier 1933, 4 grandes purges de 1936 à 1938, cadre : création de l'URSS en 1922"><rect x="20" y="6" width="170" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="113.6" y1="44" x2="113.6" y2="118" stroke="currentColor" stroke-dasharray="4 3"/><circle cx="113.6" cy="120" r="3.5" fill="currentColor"/><line x1="24" y1="120" x2="352" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="352,114 360,120 352,126" fill="currentColor"/><g stroke="currentColor"><line x1="24" y1="111" x2="24" y2="129" stroke-width="1.5"/><line x1="36.8" y1="116" x2="36.8" y2="124"/><line x1="49.6" y1="116" x2="49.6" y2="124"/><line x1="62.4" y1="116" x2="62.4" y2="124"/><line x1="75.2" y1="116" x2="75.2" y2="124"/><line x1="88" y1="111" x2="88" y2="129" stroke-width="1.5"/><line x1="100.8" y1="116" x2="100.8" y2="124"/><line x1="113.6" y1="116" x2="113.6" y2="124"/><line x1="126.4" y1="116" x2="126.4" y2="124"/><line x1="139.2" y1="116" x2="139.2" y2="124"/><line x1="152" y1="111" x2="152" y2="129" stroke-width="1.5"/><line x1="164.8" y1="116" x2="164.8" y2="124"/><line x1="177.6" y1="116" x2="177.6" y2="124"/><line x1="190.4" y1="116" x2="190.4" y2="124"/><line x1="203.2" y1="116" x2="203.2" y2="124"/><line x1="216" y1="111" x2="216" y2="129" stroke-width="1.5"/><line x1="228.8" y1="116" x2="228.8" y2="124"/><line x1="241.6" y1="116" x2="241.6" y2="124"/><line x1="254.4" y1="116" x2="254.4" y2="124"/><line x1="267.2" y1="116" x2="267.2" y2="124"/><line x1="280" y1="111" x2="280" y2="129" stroke-width="1.5"/><line x1="292.8" y1="116" x2="292.8" y2="124"/><line x1="305.6" y1="116" x2="305.6" y2="124"/><line x1="318.4" y1="116" x2="318.4" y2="124"/><line x1="331.2" y1="116" x2="331.2" y2="124"/><line x1="344" y1="111" x2="344" y2="129" stroke-width="1.5"/></g><g font-size="14" fill="currentColor" text-anchor="middle"><text x="24" y="147">1915</text><text x="88" y="147">1920</text><text x="152" y="147">1925</text><text x="216" y="147">1930</text><text x="280" y="147">1935</text><text x="344" y="147">1940</text></g><line x1="60.1" y1="68" x2="60.1" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="60.1" cy="120" r="4" fill="#cc0000"/><text x="60.1" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">1</text><line x1="139.2" y1="68" x2="139.2" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="139.2" cy="120" r="4" fill="#cc0000"/><text x="139.2" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">2</text><line x1="255.4" y1="68" x2="255.4" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="255.4" cy="120" r="4" fill="#cc0000"/><text x="255.4" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">3</text><rect x="292.8" y="98" width="25.6" height="14" fill="#e69138" fill-opacity=".75" stroke="currentColor"/><text x="305.6" y="92" font-size="14" font-weight="700" fill="currentColor" text-anchor="middle">4</text><text x="105" y="30" font-size="14" fill="currentColor" text-anchor="middle">Création de l'URSS</text></svg>
<p><b>Légende :</b> <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true"><line x1="13" y1="2" x2="13" y2="14" stroke="#cc0000" stroke-width="2"/><circle cx="13" cy="15" r="4" fill="#cc0000"/></svg> événement (1 : révolution bolchevique, 2 : Staline au pouvoir, 3 : Hitler chancelier) ; <svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="2" y="4" width="36" height="12" fill="#e69138" fill-opacity=".75" stroke="currentColor"/></svg> période (4 : les grandes purges). <b>Cadre :</b> la création de l'URSS (1922).</p>
<p class="bareme">Barème indicatif (7 points) : 1. 0,5 point par date juste (2) ; 2. 1 point par élément placé avec un figuré adapté, légende comprise (4) ; 3. création de l'URSS (1).</p>
<p class="piege"><b>Piège :</b> la révolution de février 1917 renverse le tsar ; c'est en octobre 1917 que Lénine prend le pouvoir. Une période se représente par une barre qui va du début à la fin, pas par un point. Ici, une graduation = un an.</p>`
      },
      {
        titre: "Enseignement moral et civique — « Voter, ça ne sert à rien ! »",
        html: `
<div class="rep"><p class="rq"><b>1.</b> La souveraineté nationale</p>
<p>La souveraineté nationale appartient au peuple. Il l'exerce par ses représentants, qu'il élit (les députés, le président de la République…), et par la voie du référendum.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Les caractéristiques du suffrage</p>
<p>Le suffrage est « universel, égal et secret ». Secret signifie que chacun vote seul, dans l'isoloir, sans que personne sache pour qui : l'électeur fait son choix librement, sans pression.</p>
<p class="attendu"><b>On attend :</b> les trois mots, puis l'explication d'un seul. Universel : tous les citoyens majeurs, femmes et hommes, votent. Égal : chaque électeur a une voix, qui compte autant que celle des autres.</p></div>
<div class="rep"><p class="rq"><b>3.</b> L'inscription automatique à 18 ans</p>
<p>Pour être inscrit automatiquement sur la liste électorale à 18 ans, il faut être français et avoir fait son recensement citoyen à 16 ans. Sinon, il faut demander soi-même son inscription.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Le pluralisme, la différence avec les régimes totalitaires</p>
<p>Dans les régimes totalitaires des années 1930, un parti unique contrôle tout : le parti nazi devient le parti unique en Allemagne dès 1933 et, en URSS, seul le parti communiste existe. Les opposants sont arrêtés par la police politique (Gestapo, NKVD) et envoyés en camp de concentration ou au goulag : les citoyens n'ont aucun vrai choix. En France, au contraire, l'article 4 garantit que les partis « se forment et exercent leur activité librement » et que les opinions sont « pluralistes » : les électeurs choisissent entre plusieurs candidats et peuvent changer de dirigeants. C'était déjà le cas dans la France des années 1930 : en 1936, les électeurs ont porté au pouvoir le Front populaire.</p>
<p class="attendu"><b>On attend :</b> une définition du pluralisme, un exemple précis de parti unique et de répression dans un régime totalitaire, et l'opposition avec la démocratie française.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Convaincre son cousin (6 à 8 lignes)</p>
<p>Je comprends que tu sois déçu par la politique, mais voter est utile. D'abord, en démocratie, la souveraineté appartient au peuple : en votant, tu choisis ceux qui feront les lois et ta voix compte autant que celle de n'importe quel autre citoyen. Ensuite, ce droit a été conquis : le suffrage universel masculin date de 1848 et les femmes ne l'ont obtenu qu'en 1944. Dans les années 1930, les Allemands et les Soviétiques, eux, n'avaient plus le choix, car un parti unique décidait de tout. Enfin, si tu ne votes pas, d'autres décideront à ta place ; et si aucun candidat ne te plaît, tu peux voter blanc. C'est pour cela que voter est un droit, mais aussi un devoir de citoyen.</p>
<p class="attendu"><b>On attend :</b> un texte adressé au cousin, organisé (accroche, deux ou trois arguments reliés par des connecteurs, conclusion), qui s'appuie sur les documents et sur les valeurs et principes de la République : souveraineté nationale, démocratie, égalité des citoyens, liberté de choix, pluralisme.</p>
<p class="valorise"><b>On valorise :</b> les repères 1848 (suffrage universel masculin), 1944 (droit de vote des femmes), 1974 (droit de vote à 18 ans) ; l'idée que l'abstention affaiblit la démocratie.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 3 points chacune ; question 4 : 4 points ; question 5 : 5 points ; maîtrise de la langue : 2 points. Total : 20 points.</p>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Gère les 2 heures.</b> Exercice 1 : environ 45 minutes ; développement construit et frise : 45 minutes ; EMC : 30 minutes.</li>
<li><b>Lire un tableau statistique.</b> Lis le titre, la date (2017) et les unités (habitants, %). Recopie le chiffre exact avec son unité, puis traduis-le en mots : « 19,5 %, soit près d'un habitant sur cinq ».</li>
<li><b>Se repérer dans l'espace.</b> Localiser = nommer la ville + sa position (au nord, au sud-ouest…) + un repère (frontière, littoral, fleuve). Vérifie que la ville est bien en France.</li>
<li><b>Réponse développée (questions 4 et 5).</b> Une idée par phrase : je cite le document (chiffre ou citation), j'explique avec un mot du cours (périurbanisation, hiérarchie urbaine, métropolisation), je conclus. Pour la limite : la date des données, ce que le document ne montre pas.</li>
<li><b>Développement construit sur l'URSS.</b> « Montrez que » = prouver. Au brouillon, écris les trois piliers du totalitarisme (un chef, un parti, une idéologie ; l'économie contrôlée ; la propagande et la terreur) : ce sont tes trois paragraphes. Dans chacun : une phrase d'idée, deux ou trois exemples datés, une phrase de bilan.</li>
<li><b>Rédige au moins trente lignes.</b> Introduction (1917, 1924, définition, question), trois paragraphes avec alinéa, conclusion qui répond et ouvre (Allemagne nazie, Front populaire). Connecteurs : D'abord, Ensuite, Enfin ; De plus ; Cependant ; Ainsi.</li>
<li><b>Frise chronologique.</b> Repère l'échelle (ici une graduation = un an). Un événement = un trait ou un point à la date exacte ; une période = une barre colorée du début à la fin. Numérote les éléments et fais une légende.</li>
<li><b>EMC : convaincre.</b> Pour la question 5, écris un vrai message : une accroche, deux ou trois arguments (souveraineté du peuple, égalité des voix, droit conquis, contraste avec les dictatures), une conclusion. Emploie les mots de la Constitution : souveraineté nationale, suffrage universel, pluralisme.</li>
</ol>
<p class="tip">Mots que le correcteur cherche : aire d'attraction, pôle, couronne, périurbanisation, métropole, métropolisation, ville mondiale ; régime totalitaire, parti unique, culte de la personnalité, collectivisation, kolkhoze, plans quinquennaux, goulag, grandes purges, NKVD ; souveraineté nationale, suffrage universel, pluralisme, citoyenneté.</p>`
  },

  /* ================================================================
     SUJET 3 — Ex. 1 géographie (geo-ch1, Toulouse) ; DC histoire (hg-ch3) + frise ; EMC racisme
     ================================================================ */
  {
    id: 'ex-histoire-3',
    matiere: 'histoire',
    numero: 3,
    titre: "L'aire d'attraction de Toulouse ; une guerre d'anéantissement",
    epreuve: "HISTOIRE-GÉOGRAPHIE — ENSEIGNEMENT MORAL ET CIVIQUE",
    duree: "2 h 00",
    points: 60,
    pointsRedaction: 0,
    cours: ['geo-ch1', 'hg-ch3'],
    methodes: ['hg-m1', 'hg-m2'],
    garde: [
      "Durée de l'épreuve : 2 h 00",
      "Sous-épreuve d'histoire-géographie : 40 points (coefficient 1,5 ; la note obtenue est ramenée sur 20 points)",
      "Sous-épreuve d'enseignement moral et civique (EMC) : 20 points (coefficient 0,5)",
      "Les deux sous-épreuves se traitent pendant les 2 heures, sans pause entre les deux.",
      "L'utilisation du dictionnaire et de la calculatrice est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Exercice 1. Analyser et comprendre des documents en géographie (15 points)",
        points: 15,
        html: `
<p><b>GÉOGRAPHIE : Les aires urbaines, une nouvelle géographie d'une France mondialisée.</b></p>
<div class="doc">
<p class="doc-titre">Document 1 : L'aire d'attraction de Toulouse, une aire très peuplée qui grandit vite.</p>
<p><i>Présentation : ce texte est extrait d'une étude de l'Insee sur les aires d'attraction des villes de la région Occitanie.</i></p>
<p>Alors que Toulouse est la 4<sup>e</sup> commune la plus peuplée de France, son aire se classe en 5<sup>e</sup> position avec 1,4 million d'habitants, derrière celles de Paris, Lyon, Marseille-Aix-en-Provence et Lille. Avec 527 communes et 6 570 km², l'aire toulousaine est la plus étendue de province (France métropolitaine hors Île-de-France). […]</p>
<p>Les gains en population sont largement portés par les très grandes aires de Toulouse et Montpellier avec 1,4 % de croissance par an entre 2007 et 2017 […].</p>
<p>En Occitanie, comme dans l'ensemble de la province, les couronnes contribuent le plus à la croissance démographique. La population progresse aussi au sein des pôles, mais moins vite dans les communes-centres<sup>1</sup> que dans les autres communes des pôles. […] dans les couronnes, ce sont bien les arrivées supérieures aux départs qui permettent à la population d'augmenter fortement entre 2007 et 2017 […].</p>
<p class="notes"><sup>1</sup> commune-centre : la commune la plus peuplée du pôle, la ville-centre. Le pôle regroupe la commune-centre et les communes urbaines voisines, où se concentrent les emplois ; la couronne regroupe les communes dont au moins 15 % des actifs travaillent dans le pôle (définition de l'Insee depuis 2020).</p>
<p class="source">Source : Elsa Mathieu, Stéphane Nourry, Christophe Péalaprat, « Nouveau regard sur l'attraction des villes », <i>Insee Flash Occitanie</i> n° 100, Insee, 21 octobre 2020 : https://www.insee.fr/fr/statistiques/4806168</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : Les déplacements domicile-travail vers Toulouse et les autres grandes agglomérations d'Occitanie.</p>
<p>Les quatre principales unités urbaines<sup>1</sup> d'Occitanie, Toulouse, Montpellier, Perpignan et Nîmes, accueillent chaque jour 267 000 personnes qui viennent y travailler sans y résider. Quelque 129 000 actifs se rendent ainsi dans l'agglomération de Toulouse […] en 2016. […]</p>
<p>[…] seuls 56 % des navetteurs<sup>2</sup> qui rejoignent l'agglomération toulousaine travaillent dans la ville-centre. Cette proportion, la plus faible des quatre unités urbaines, est liée à la présence de deux pôles secondaires importants, Blagnac et Colomiers. Ces deux communes, qui à elles seules offrent 66 000 emplois, concentrent davantage les navetteurs que les habitants de l'agglomération. La présence des activités aéronautiques et spatiales, en partie localisées dans ces communes de banlieue, explique l'importance des navettes vers ces deux communes. […]</p>
<p>En 2016, la voiture reste le mode de transport privilégié par les navetteurs […]. Ainsi, moins de 10 % des navetteurs se rendent à leur travail en transports en commun : de 3,1 % pour ceux qui travaillent dans l'agglomération de Perpignan à 9,6 % pour Toulouse. […] dans la couronne périurbaine et aux franges de l'agglomération, l'utilisation de la voiture est quasi systématique, l'offre de transports en commun étant plus restreinte.</p>
<p class="notes"><sup>1</sup> unité urbaine : selon l'Insee, « la notion d'unité urbaine correspond à celle d'agglomération : ensemble de communes présentant un espace continûment bâti d'au moins 2 000 habitants, constitué d'une ville-centre et d'une banlieue ». <sup>2</sup> navetteur : actif qui fait chaque jour l'aller-retour entre son domicile et son lieu de travail, situé dans une autre commune.</p>
<p class="source">Source : Noémie Montcoudiol, Séverine Pujol, « Toulouse, Montpellier, Perpignan, Nîmes : des schémas de déplacements domicile-travail différents d'une agglomération à l'autre », <i>Insee Analyses Occitanie</i> n° 89, Insee, 16 décembre 2019 : https://www.insee.fr/fr/statistiques/4267462</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><b>Se repérer dans l'espace</b></p>
<p class="q"><b>1.</b> Localisez Toulouse sur le territoire français, puis nommez une autre très grande aire d'attraction de la même région citée dans le document 1 (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Prélever des informations</b></p>
<p><i>Document 1</i></p>
<p class="q"><b>2.</b> Relevez deux informations qui montrent que l'aire d'attraction de Toulouse est à la fois très peuplée et très étendue (réponse courte). <span class="pts">(2 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> Relevez le mode de transport le plus utilisé par les navetteurs et la part de ceux qui se rendent à leur travail en transports en commun dans l'agglomération de Toulouse (réponse courte). <span class="pts">(2 points)</span></p>
<p><b>Analyser et porter un regard critique</b></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>4.</b> Expliquez pourquoi la croissance de l'aire de Toulouse entraîne de nombreuses mobilités pendulaires (réponse : 2 à 4 lignes). <span class="pts">(3 points)</span></p>
<p class="q"><b>5.</b> À l'aide des documents et de vos connaissances, montrez que l'aire d'attraction de Toulouse est un espace dynamique et ouvert sur le monde, mais que son étalement pose des problèmes. Indiquez l'intérêt et une limite de ces documents (réponse : 4 à 6 lignes). <span class="pts">(4 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble de l'exercice <span class="pts">(2 points)</span>.</p>`
      },
      {
        titre: "Exercice 2. Maîtriser différents langages pour raisonner et utiliser des repères historiques (25 points)",
        points: 25,
        html: `
<p><b>HISTOIRE : L'Europe, un théâtre majeur des guerres totales (1914-1945).</b></p>
<p class="q"><b>1 – Développement construit</b> <span class="pts">(18 points)</span></p>
<p>Dans un développement construit d'au moins trente lignes, montrez que la Seconde Guerre mondiale est une guerre d'anéantissement.</p>
<p>Pour vous aider, vous pourrez utiliser certains des mots suivants : civils, front de l'Est, bombardements, Shoah, Einsatzgruppen, centres de mise à mort, crime contre l'humanité.</p>
<p class="consigne">La qualité de la rédaction est prise en compte à hauteur de 2 points sur 18.</p>
<p class="q"><b>2 – Comprendre et pratiquer un autre langage : utiliser des repères historiques</b> <span class="pts">(7 points)</span></p>
<p>Réalisez l'exercice demandé sur le document en annexe. Elle sera à rendre avec la copie.</p>`
      },
      {
        titre: "Enseignement moral et civique (20 points)",
        points: 20,
        html: `
<p><b>SITUATION PRATIQUE : Des messages racistes et antisémites dans le groupe de la classe.</b></p>
<p><i>Situation : après la visite d'un mémorial consacré à la Shoah, des élèves de 3<sup>e</sup> découvrent, sur le groupe de discussion en ligne de leur classe, des messages qui se moquent des victimes du génocide et qui insultent une camarade à cause de sa religion. Quand on leur demande d'arrêter, les auteurs répondent : « C'est de l'humour, on a le droit de tout dire. »</i></p>
<div class="doc">
<p class="doc-titre">Document 1 : Deux textes de valeur constitutionnelle.</p>
<p><b>Préambule de la Constitution du 27 octobre 1946 (premier alinéa, extrait)</b></p>
<p>Au lendemain de la victoire remportée par les peuples libres sur les régimes qui ont tenté d'asservir<sup>1</sup> et de dégrader la personne humaine, le peuple français proclame à nouveau que tout être humain, sans distinction de race, de religion ni de croyance, possède des droits inaliénables<sup>2</sup> et sacrés. […]</p>
<p><b>Constitution du 4 octobre 1958, article 1<sup>er</sup> (extrait)</b></p>
<p>La France est une République indivisible, laïque, démocratique et sociale. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Elle respecte toutes les croyances. […]</p>
<p class="notes"><sup>1</sup> asservir : réduire en esclavage, priver de liberté. <sup>2</sup> inaliénables : qu'on ne peut ni retirer ni céder. Le Préambule de 1946 fait partie des textes auxquels renvoie la Constitution de 1958.</p>
<p class="source">Source : site du Conseil constitutionnel, « Préambule de la Constitution du 27 octobre 1946 » (https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/preambule-de-la-constitution-du-27-octobre-1946) et « Texte intégral de la Constitution du 4 octobre 1958 en vigueur ».</p>
</div>
<div class="doc">
<p class="doc-titre">Document 2 : La Charte de la laïcité à l'École (extraits).</p>
<p><b>8.</b> La laïcité permet l'exercice de la liberté d'expression des élèves dans la limite du bon fonctionnement de l'École comme du respect des valeurs républicaines et du pluralisme des convictions.</p>
<p><b>9.</b> La laïcité implique le rejet de toutes les violences et de toutes les discriminations<sup>1</sup>, garantit l'égalité entre les filles et les garçons et repose sur une culture du respect et de la compréhension de l'autre.</p>
<p class="notes"><sup>1</sup> discrimination : fait de traiter une personne moins bien que les autres à cause de son origine, de sa religion, de son sexe…</p>
<p class="source">Source : Charte de la laïcité à l'École, articles 8 et 9, ministère de l'Éducation nationale, 2013 (annexée à la circulaire n° 2013-144 du 6 septembre 2013) : https://eduscol.education.fr/document/22441/download</p>
</div>
<p><b>QUESTIONS</b></p>
<p class="consigne">On entend par « réponse courte » une réponse rédigée en une ou deux phrases.</p>
<p><i>Document 1</i></p>
<p class="q"><b>1.</b> D'après le Préambule de 1946, identifiez les « régimes » dont il est question et la guerre à laquelle le texte fait référence (réponse courte). <span class="pts">(3 points)</span></p>
<p class="q"><b>2.</b> Relevez le principe que les deux textes du document 1 affirment (réponse courte). <span class="pts">(3 points)</span></p>
<p><i>Document 2</i></p>
<p class="q"><b>3.</b> À l'aide de l'article 8, expliquez pourquoi la phrase « on a le droit de tout dire » est fausse au collège (réponse : 2 à 3 lignes). <span class="pts">(3 points)</span></p>
<p><i>Documents 1 et 2</i></p>
<p class="q"><b>4.</b> Montrez que ces messages portent atteinte à plusieurs valeurs et principes de la République (réponse : 3 à 4 lignes). <span class="pts">(4 points)</span></p>
<p class="q"><b>5.</b> Délégué(e) de classe, vous proposez une action pour lutter contre le racisme et l'antisémitisme au collège. Décrivez cette action et expliquez à vos camarades pourquoi il est important de l'organiser (réponse : 6 à 8 lignes). <span class="pts">(5 points)</span></p>
<p class="consigne">Maîtrise de la langue : la qualité de la rédaction est évaluée sur l'ensemble des réponses <span class="pts">(2 points)</span>.</p>
<p class="consigne">Afin de respecter l'anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d'un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: `
<p class="consigne">ATTENTION : cette feuille doit être détachée du sujet et placée à l'intérieur de la copie.</p>
<p><b>Exercice 2 – 2. Utiliser des repères historiques</b></p>
<p class="q"><b>1.</b> Complétez le tableau ci-dessous en indiquant les dates de la période et des événements historiques (réponse courte). <span class="pts">(2 points)</span></p>
<table class="tab">
<tr><th>Période et événements historiques</th><th>Dates ou période</th></tr>
<tr><td>L'Allemagne envahit la Pologne : début de la guerre en Europe</td><td class="vide"></td></tr>
<tr><td>Conférence de Wannsee : organisation de la « solution finale »</td><td class="vide"></td></tr>
<tr><td>Bataille de Stalingrad</td><td class="vide"></td></tr>
<tr><td>Bombe atomique sur Hiroshima</td><td class="vide"></td></tr>
</table>
<p class="q"><b>2.</b> À l'aide de figurés adaptés, placez sur la frise la période et les trois événements historiques de la question précédente, puis construisez une courte légende. <span class="pts">(4 points)</span></p>
<p class="q"><b>3.</b> Dans le cadre prévu à cet effet, nommez l'événement historique relié à la frise (réponse courte). <span class="pts">(1 point)</span></p>
<svg class="fig-ex" viewBox="0 0 360 165" role="img" aria-label="Frise chronologique graduée de 1939 à 1946 (une graduation tous les trois mois), avec un cadre vide relié à une date"><rect x="60" y="6" width="170" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="132.7" y1="44" x2="132.7" y2="118" stroke="currentColor" stroke-dasharray="4 3"/><circle cx="132.7" cy="120" r="3.5" fill="currentColor"/><line x1="24" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="340,114 348,120 340,126" fill="currentColor"/><g stroke="currentColor"><line x1="24" y1="111" x2="24" y2="129" stroke-width="1.5"/><line x1="35" y1="116" x2="35" y2="124"/><line x1="46" y1="116" x2="46" y2="124"/><line x1="57" y1="116" x2="57" y2="124"/><line x1="68" y1="111" x2="68" y2="129" stroke-width="1.5"/><line x1="79" y1="116" x2="79" y2="124"/><line x1="90" y1="116" x2="90" y2="124"/><line x1="101" y1="116" x2="101" y2="124"/><line x1="112" y1="111" x2="112" y2="129" stroke-width="1.5"/><line x1="123" y1="116" x2="123" y2="124"/><line x1="134" y1="116" x2="134" y2="124"/><line x1="145" y1="116" x2="145" y2="124"/><line x1="156" y1="111" x2="156" y2="129" stroke-width="1.5"/><line x1="167" y1="116" x2="167" y2="124"/><line x1="178" y1="116" x2="178" y2="124"/><line x1="189" y1="116" x2="189" y2="124"/><line x1="200" y1="111" x2="200" y2="129" stroke-width="1.5"/><line x1="211" y1="116" x2="211" y2="124"/><line x1="222" y1="116" x2="222" y2="124"/><line x1="233" y1="116" x2="233" y2="124"/><line x1="244" y1="111" x2="244" y2="129" stroke-width="1.5"/><line x1="255" y1="116" x2="255" y2="124"/><line x1="266" y1="116" x2="266" y2="124"/><line x1="277" y1="116" x2="277" y2="124"/><line x1="288" y1="111" x2="288" y2="129" stroke-width="1.5"/><line x1="299" y1="116" x2="299" y2="124"/><line x1="310" y1="116" x2="310" y2="124"/><line x1="321" y1="116" x2="321" y2="124"/><line x1="332" y1="111" x2="332" y2="129" stroke-width="1.5"/></g><g font-size="14" fill="currentColor" text-anchor="middle"><text x="24" y="147">1939</text><text x="68" y="147">1940</text><text x="112" y="147">1941</text><text x="156" y="147">1942</text><text x="200" y="147">1943</text><text x="244" y="147">1944</text><text x="288" y="147">1945</text><text x="332" y="147">1946</text></g></svg>
<p><b>Légende :</b> …………………………………………………………………………</p>`,
    corrige: [
      {
        titre: "Exercice 1 — Analyser et comprendre des documents en géographie",
        html: `
<div class="rep"><p class="rq"><b>1.</b> Localiser Toulouse</p>
<p>Toulouse se trouve dans le Sud-Ouest de la France, dans la région Occitanie, sur la Garonne. L'autre très grande aire d'attraction de la région est celle de Montpellier.</p>
<p class="piege"><b>Piège :</b> citer Paris, Lyon ou Lille, qui sont nommées dans le document mais ne sont pas en Occitanie.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Une aire très peuplée et très étendue</p>
<p>L'aire de Toulouse compte 1,4 million d'habitants, ce qui la place au 5<sup>e</sup> rang en France. Avec 527 communes et 6 570 km², c'est aussi « la plus étendue de province ».</p>
<p class="attendu"><b>On attend :</b> une information sur la population et une sur l'étendue, avec leurs unités.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Le mode de transport des navetteurs</p>
<p>La voiture est le mode de transport le plus utilisé par les navetteurs : seuls 9,6 % de ceux qui vont travailler dans l'agglomération de Toulouse prennent les transports en commun.</p>
<p class="piege"><b>Piège :</b> répondre « moins de 10 % », qui concerne l'ensemble des quatre agglomérations, ou 3,1 %, qui concerne Perpignan.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Croissance et mobilités pendulaires</p>
<p>La population augmente surtout dans les couronnes, où de nombreux ménages s'installent (« les arrivées supérieures aux départs ») pour trouver des maisons plus grandes et moins chères. Mais les emplois restent concentrés dans le pôle : dans la ville-centre et dans la banlieue, comme à Blagnac et Colomiers (66 000 emplois). Chaque jour, des milliers d'actifs font donc l'aller-retour entre leur domicile et leur travail : 129 000 navetteurs viennent travailler dans l'agglomération de Toulouse.</p>
<p class="attendu"><b>On attend :</b> l'idée que les habitants s'installent en périphérie (périurbanisation) alors que les emplois sont dans le pôle, d'où les mobilités pendulaires ; au moins un chiffre des documents.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Un espace dynamique, ouvert sur le monde, mais qui s'étale</p>
<p>L'aire de Toulouse est très dynamique : sa population augmente de 1,4 % par an entre 2007 et 2017. Elle est ouverte sur le monde grâce à l'aéronautique et au spatial : Airbus assemble ses avions à Blagnac et le CNES a un grand centre spatial à Toulouse. Mais son étalement pose des problèmes : dans la couronne périurbaine, la voiture est « quasi systématique », ce qui provoque des embouteillages sur la rocade, de la pollution, et la ville grignote des terres agricoles. Pour y répondre, la métropole développe le métro, avec une 3<sup>e</sup> ligne en construction, et le tramway. Ces études de l'Insee sont précises et fiables, mais leurs chiffres datent de 2016-2017 et elles ne montrent ni les solutions mises en place ni le point de vue des habitants.</p>
<p class="attendu"><b>On attend :</b> le dynamisme (chiffre), l'ouverture sur le monde (connaissances : Airbus, aéronautique, spatial), deux problèmes liés à l'étalement, puis un intérêt et une limite des documents.</p>
<p class="valorise"><b>On valorise :</b> le vocabulaire : métropole, périurbanisation, mobilités pendulaires, artificialisation des sols, ville durable ; l'aéroport de Toulouse-Blagnac.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 2 points chacune ; question 4 : 3 points ; question 5 : 4 points ; maîtrise de la langue : 2 points. Total : 15 points.</p>`
      },
      {
        titre: "Exercice 2 — Développement construit et frise chronologique",
        html: `
<p><b>1 – Développement construit</b></p>
<p><b>Analyse du sujet.</b> « Montrez que » = prouver. Une guerre d'anéantissement vise à détruire totalement l'ennemi, ses armées comme sa population civile, souvent au nom d'une idéologie. Ne pas confondre avec la guerre totale (mobiliser toutes les ressources du pays), qui existait déjà en 1914-1918. Bornes : 1939-1945. Plan thématique en trois parties.</p>
<div class="rep"><p class="rq">Plan détaillé</p>
<p><b>Introduction.</b> De 1939 à 1945, la Seconde Guerre mondiale oppose l'Axe (Allemagne, Italie, Japon) aux Alliés (Royaume-Uni, URSS, États-Unis). Elle fait environ 60 millions de morts, en majorité des civils. En quoi est-elle une guerre d'anéantissement ?</p>
<p><b>I. Des combats qui visent les soldats et les civils.</b> Sur le front de l'Est, après l'invasion de l'URSS (22 juin 1941), les nazis considèrent les Slaves comme des « sous-hommes » : villages brûlés, civils massacrés, environ 3 millions de prisonniers de guerre soviétiques morts de faim et de mauvais traitements. Le siège de Leningrad (1941-1944) fait plus de 800 000 morts parmi les habitants. Les massacres de civils se multiplient, souvent en représailles contre la Résistance : à Oradour-sur-Glane, le 10 juin 1944, une unité SS tue plus de 640 personnes. En Asie, le Japon massacre les civils chinois à Nankin (1937).</p>
<p><b>II. Des villes bombardées, jusqu'à l'arme atomique.</b> Les bombardements visent à terroriser les populations et à détruire l'économie de l'ennemi : Londres (1940-1941), Hambourg (1943), Dresde (février 1945, environ 25 000 morts), Tokyo (1945). Les 6 et 9 août 1945, les bombes atomiques d'Hiroshima et de Nagasaki font plus de 200 000 morts d'ici la fin de 1945.</p>
<p><b>III. La Shoah, un génocide.</b> Aboutissement de l'antisémitisme nazi : ghettos (Varsovie, plus de 400 000 personnes) ; « Shoah par balles » des Einsatzgruppen après juin 1941 (Babi Yar, près de 34 000 Juifs tués en deux jours en septembre 1941) ; conférence de Wannsee (20 janvier 1942) qui organise la « solution finale » ; déportation (76 000 Juifs de France, surtout depuis Drancy) ; centres de mise à mort (Treblinka ; Auschwitz-Birkenau, où environ 1,1 million de personnes sont assassinées). Bilan : environ 6 millions de Juifs assassinés, soit les deux tiers des Juifs d'Europe ; les Tsiganes sont aussi victimes d'un génocide.</p>
<p><b>Conclusion.</b> La Seconde Guerre mondiale est bien une guerre d'anéantissement : les civils sont visés par les massacres, les bombardements et surtout par le génocide des Juifs. Au procès de Nuremberg (1945-1946), les dirigeants nazis sont jugés pour crime contre l'humanité ; l'ONU est créée en 1945 pour maintenir la paix.</p></div>
<div class="exemple-redige"><p><b>Exemple de paragraphe rédigé (partie III)</b></p>
<p>Enfin, la Shoah est le génocide des Juifs d'Europe par les nazis, l'aboutissement de leur antisémitisme. En Pologne occupée, les Juifs sont d'abord enfermés dans des ghettos, comme celui de Varsovie, où la faim et les épidémies font des dizaines de milliers de morts. Après l'invasion de l'URSS en juin 1941, les Einsatzgruppen fusillent les Juifs au bord de fosses : à Babi Yar, près de Kiev, près de 34 000 Juifs sont tués en deux jours en septembre 1941. Puis, le 20 janvier 1942, à la conférence de Wannsee, des dirigeants nazis organisent la « solution finale ». Les Juifs de toute l'Europe sont déportés vers des centres de mise à mort comme Auschwitz-Birkenau, où la plupart sont assassinés dans les chambres à gaz dès leur arrivée. Environ 6 millions de Juifs sont tués, soit les deux tiers des Juifs d'Europe ; les Tsiganes sont eux aussi victimes d'un génocide. Ainsi, les nazis ont voulu faire disparaître un peuple entier : c'est la forme la plus extrême de la guerre d'anéantissement.</p></div>
<p class="bareme">Barème indicatif (18 points) : introduction (contexte, définition de la guerre d'anéantissement, question) : 2 ; partie I : 4 ; partie II : 4 ; partie III : 4 ; conclusion : 2 ; maîtrise de la langue (au moins trente lignes, paragraphes, connecteurs, orthographe) : 2.</p>
<p class="piege"><b>Piège :</b> raconter les batailles une par une au lieu de montrer la violence contre les civils ; confondre camp de concentration et centre de mise à mort ; confondre la Shoah (1941-1945) avec le génocide des Arméniens (1915-1916).</p>
<p><b>2 – La frise chronologique (annexe)</b></p>
<table class="tab">
<tr><th>Période et événements historiques</th><th>Dates ou période</th></tr>
<tr><td>L'Allemagne envahit la Pologne : début de la guerre en Europe</td><td>1<sup>er</sup> septembre 1939</td></tr>
<tr><td>Conférence de Wannsee : organisation de la « solution finale »</td><td>20 janvier 1942</td></tr>
<tr><td>Bataille de Stalingrad</td><td>Août 1942 - février 1943</td></tr>
<tr><td>Bombe atomique sur Hiroshima</td><td>6 août 1945</td></tr>
</table>
<svg class="fig-ex" viewBox="0 0 360 165" role="img" aria-label="Frise corrigée de 1939 à 1946 : 1 invasion de la Pologne le 1er septembre 1939, 2 conférence de Wannsee le 20 janvier 1942, 3 bataille de Stalingrad d'août 1942 à février 1943, 4 bombe atomique sur Hiroshima le 6 août 1945, cadre : invasion de l'URSS le 22 juin 1941"><rect x="60" y="6" width="170" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="132.7" y1="44" x2="132.7" y2="118" stroke="currentColor" stroke-dasharray="4 3"/><circle cx="132.7" cy="120" r="3.5" fill="currentColor"/><line x1="24" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="340,114 348,120 340,126" fill="currentColor"/><g stroke="currentColor"><line x1="24" y1="111" x2="24" y2="129" stroke-width="1.5"/><line x1="35" y1="116" x2="35" y2="124"/><line x1="46" y1="116" x2="46" y2="124"/><line x1="57" y1="116" x2="57" y2="124"/><line x1="68" y1="111" x2="68" y2="129" stroke-width="1.5"/><line x1="79" y1="116" x2="79" y2="124"/><line x1="90" y1="116" x2="90" y2="124"/><line x1="101" y1="116" x2="101" y2="124"/><line x1="112" y1="111" x2="112" y2="129" stroke-width="1.5"/><line x1="123" y1="116" x2="123" y2="124"/><line x1="134" y1="116" x2="134" y2="124"/><line x1="145" y1="116" x2="145" y2="124"/><line x1="156" y1="111" x2="156" y2="129" stroke-width="1.5"/><line x1="167" y1="116" x2="167" y2="124"/><line x1="178" y1="116" x2="178" y2="124"/><line x1="189" y1="116" x2="189" y2="124"/><line x1="200" y1="111" x2="200" y2="129" stroke-width="1.5"/><line x1="211" y1="116" x2="211" y2="124"/><line x1="222" y1="116" x2="222" y2="124"/><line x1="233" y1="116" x2="233" y2="124"/><line x1="244" y1="111" x2="244" y2="129" stroke-width="1.5"/><line x1="255" y1="116" x2="255" y2="124"/><line x1="266" y1="116" x2="266" y2="124"/><line x1="277" y1="116" x2="277" y2="124"/><line x1="288" y1="111" x2="288" y2="129" stroke-width="1.5"/><line x1="299" y1="116" x2="299" y2="124"/><line x1="310" y1="116" x2="310" y2="124"/><line x1="321" y1="116" x2="321" y2="124"/><line x1="332" y1="111" x2="332" y2="129" stroke-width="1.5"/></g><g font-size="14" fill="currentColor" text-anchor="middle"><text x="24" y="147">1939</text><text x="68" y="147">1940</text><text x="112" y="147">1941</text><text x="156" y="147">1942</text><text x="200" y="147">1943</text><text x="244" y="147">1944</text><text x="288" y="147">1945</text><text x="332" y="147">1946</text></g><line x1="53.3" y1="68" x2="53.3" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="53.3" cy="120" r="4" fill="#cc0000"/><text x="53.3" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">1</text><line x1="158.3" y1="68" x2="158.3" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="158.3" cy="120" r="4" fill="#cc0000"/><text x="158.3" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">2</text><line x1="314.2" y1="68" x2="314.2" y2="120" stroke="#cc0000" stroke-width="2"/><circle cx="314.2" cy="120" r="4" fill="#cc0000"/><text x="314.2" y="62" font-size="14" font-weight="700" fill="#cc0000" text-anchor="middle">4</text><rect x="184.2" y="98" width="19.6" height="14" fill="#e69138" fill-opacity=".75" stroke="currentColor"/><text x="194" y="92" font-size="14" font-weight="700" fill="currentColor" text-anchor="middle">3</text><text x="145" y="30" font-size="14" fill="currentColor" text-anchor="middle">Invasion de l'URSS</text></svg>
<p><b>Légende :</b> <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true"><line x1="13" y1="2" x2="13" y2="14" stroke="#cc0000" stroke-width="2"/><circle cx="13" cy="15" r="4" fill="#cc0000"/></svg> événement (1 : invasion de la Pologne, 2 : conférence de Wannsee, 4 : Hiroshima) ; <svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true"><rect x="2" y="4" width="36" height="12" fill="#e69138" fill-opacity=".75" stroke="currentColor"/></svg> période (3 : bataille de Stalingrad). <b>Cadre :</b> l'invasion de l'URSS par l'Allemagne, l'opération Barbarossa (22 juin 1941).</p>
<p class="bareme">Barème indicatif (7 points) : 1. 0,5 point par date juste (2) ; 2. 1 point par élément placé avec un figuré adapté, légende comprise (4) ; 3. invasion de l'URSS (1).</p>
<p class="piege"><b>Piège :</b> le 22 juin 1940 est la date de l'armistice demandé par Pétain ; le 22 juin 1941, celle de l'invasion de l'URSS. Ici, une graduation = trois mois : place les dates au bon endroit dans l'année.</p>`
      },
      {
        titre: "Enseignement moral et civique — Des messages racistes et antisémites",
        html: `
<div class="rep"><p class="rq"><b>1.</b> Les « régimes » et la guerre</p>
<p>Il s'agit des régimes vaincus en 1945, surtout l'Allemagne nazie et l'Italie fasciste. Le texte fait référence à la Seconde Guerre mondiale et à leurs crimes, comme la Shoah.</p>
<p class="valorise"><b>On valorise :</b> le lien avec le cours : idéologie raciste et antisémite des nazis, génocide, crime contre l'humanité jugé à Nuremberg.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Le principe commun</p>
<p>Les deux textes affirment l'égalité de tous : tout être humain a des droits « sans distinction de race, de religion ni de croyance », et la République assure « l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion ».</p></div>
<div class="rep"><p class="rq"><b>3.</b> « On a le droit de tout dire » ?</p>
<p>La liberté d'expression des élèves existe, mais seulement « dans la limite » du « respect des valeurs républicaines et du pluralisme des convictions ». Insulter une camarade à cause de sa religion ou se moquer des victimes d'un génocide n'est donc pas de l'humour autorisé : c'est une discrimination, et la laïcité « implique le rejet de toutes les violences et de toutes les discriminations ». Les propos racistes et antisémites ne sont pas des opinions : la loi les punit.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Des valeurs et des principes attaqués</p>
<p>Ces messages s'attaquent d'abord à l'égalité, puisqu'ils visent une élève à cause de sa religion, alors que la République assure l'égalité de tous « sans distinction d'origine, de race ou de religion » et « respecte toutes les croyances ». Ils vont aussi contre la fraternité et la dignité humaine, en humiliant une camarade et en se moquant de victimes assassinées. Enfin, ils trahissent la laïcité, qui « repose sur une culture du respect et de la compréhension de l'autre », et le devoir de mémoire envers les victimes de la Shoah.</p>
<p class="attendu"><b>On attend :</b> au moins deux valeurs ou principes nommés (égalité, fraternité, laïcité, dignité, respect des croyances), chacun justifié par la situation et par un document.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Une action au collège (6 à 8 lignes)</p>
<p>Je propose d'abord de signaler ces messages à un adulte du collège, comme le CPE ou le professeur principal, pour protéger la camarade visée. Ensuite, pour le 27 janvier, journée de la mémoire des génocides et de la prévention des crimes contre l'humanité, notre classe pourrait préparer une exposition sur la Shoah à partir de la visite du mémorial et inviter une association qui lutte contre le racisme. Cette action est importante, car le racisme et l'antisémitisme ont conduit au génocide des Juifs d'Europe : c'est pour cela qu'en 1946 la République a proclamé l'égalité de tout être humain. Elle rappelle aussi que les mots peuvent blesser et que chacun doit être respecté, quelle que soit sa religion.</p>
<p class="attendu"><b>On attend :</b> une action concrète et réaliste au collège, puis au moins deux arguments qui s'appuient sur les valeurs (égalité, fraternité, laïcité, respect) et sur l'histoire (la Shoah).</p>
<p class="valorise"><b>On valorise :</b> la plateforme officielle Pharos ou le 3018 pour signaler un contenu ou un harcèlement en ligne ; la semaine d'éducation contre le racisme autour du 21 mars (journée internationale pour l'élimination de la discrimination raciale) ; le Concours national de la Résistance et de la Déportation.</p></div>
<p class="bareme">Barème indicatif : questions 1, 2 et 3 : 3 points chacune ; question 4 : 4 points ; question 5 : 5 points ; maîtrise de la langue : 2 points. Total : 20 points.</p>`
      }
    ],
    methode: `
<ol class="etapes">
<li><b>Gère les 2 heures.</b> Exercice 1 : environ 45 minutes ; développement construit et frise : 45 minutes ; EMC : 30 minutes.</li>
<li><b>Une étude de cas en géographie.</b> Présente les documents : deux études de l'Insee, l'institut public de la statistique (source fiable), sur des données de 2016-2017. Repère les mots du cours cachés dans les textes : pôle = ville-centre + banlieue ; couronne = couronne périurbaine ; navetteurs = mobilités pendulaires. Attention au seuil : l'aire d'attraction de l'Insee (2020) retient 15 % des actifs travaillant dans le pôle, l'aire urbaine du cours (2010) 40 %.</li>
<li><b>Réponse courte = une ou deux phrases complètes.</b> Donne le chiffre exact avec son unité (1,4 million d'habitants, 9,6 %) ; localise avec un point cardinal, une région et un repère (la Garonne).</li>
<li><b>Réponse développée (questions 4 et 5).</b> Enchaîne cause → conséquence : les habitants s'installent dans la couronne, les emplois restent dans le pôle, donc les navettes augmentent. Pour la question 5, fais deux temps (« dynamique et ouverte… » / « mais… ») et termine par l'intérêt et une limite des documents.</li>
<li><b>Développement construit : définir d'abord.</b> Dans l'introduction, définis la guerre d'anéantissement et distingue-la de la guerre totale. Puis trois parties : les civils visés par les combats et les massacres ; les bombardements jusqu'à Hiroshima ; la Shoah.</li>
<li><b>Rédige au moins trente lignes avec des preuves.</b> Chaque partie contient des dates, des lieux et des chiffres du cours (Leningrad, Oradour-sur-Glane, Dresde, Hiroshima, Babi Yar, Wannsee, Auschwitz-Birkenau). Connecteurs : D'abord, Ensuite, Enfin ; En effet ; Ainsi. Conclusion : Nuremberg, crime contre l'humanité.</li>
<li><b>Frise chronologique.</b> Ici une graduation = trois mois. Un événement = un trait à la date exacte ; une période = une barre du début à la fin. Numérote et fais une légende ; vérifie que la frise et le tableau disent la même chose.</li>
<li><b>EMC.</b> Cite les textes (Préambule de 1946, article 1<sup>er</sup>, Charte de la laïcité) pour nommer les valeurs et principes (égalité, fraternité, laïcité, dignité). Pour l'action, sois concret : qui, quoi, quand, puis pourquoi. Ne cite aucun nom réel.</li>
</ol>
<p class="tip">Mots que le correcteur cherche : aire d'attraction, pôle, couronne périurbaine, navetteurs, mobilités pendulaires, métropole, aéronautique ; guerre d'anéantissement, civils, Einsatzgruppen, solution finale, centre de mise à mort, génocide, crime contre l'humanité ; égalité, laïcité, discrimination, antisémitisme.</p>`
  }
);
