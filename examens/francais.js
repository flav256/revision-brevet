/* examens/francais.js — examens blancs de français (format DNB 2027) */
DATA.examens = DATA.examens || [];
DATA.examens.push(
{
    id: 'ex-francais-1',
    matiere: 'francais',
    numero: 1,
    titre: `Une enfance sans caresses`,
    epreuve: `FRANÇAIS`,
    duree: `3 h 00`,
    points: 100,
    pointsRedaction: 0,
    cours: ['fr-ch1', 'fr-ch2', 'fr-ch3', 'fr-ch4', 'fr-ch8', 'fr-ch9'],
    methodes: ['fr-m1', 'fr-m2', 'fr-m3'],
    garde: [
      `Travail sur le texte littéraire et sur l’image : 50 points – 1 h 10`,
      `Dictée : 10 points – 20 minutes`,
      `Rédaction : 40 points – 1 h 30`,
      `Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.`,
      `L’usage de la calculatrice est interdit. L’usage du dictionnaire est autorisé pour la rédaction uniquement.`
    ],
    parties: [
      {
        titre: `Travail sur le texte littéraire et sur l’image — I. Compréhension et compétences d’interprétation`,
        points: 32,
        html: `<p><b>A. Texte littéraire</b></p>
<p>Dans <i>L’Enfant</i> (1879), Jules Vallès (1832-1885) raconte son enfance sous les traits d’un personnage qu’il appelle Jacques Vingtras. Le livre s’ouvre sur ce chapitre, intitulé « Ma mère ».</p>
<ol class="lignes"><li>Ai-je été nourri par ma mère ? Est-ce une paysanne qui m’a donné son lait ?</li><li>Je n’en sais rien. Quel que soit le sein que j’ai mordu, je ne me rappelle</li><li>pas une caresse du temps où j’étais tout petit : je n’ai pas été dorloté<sup>1</sup>,</li><li>tapoté, baisotté ; j’ai été beaucoup fouetté.</li><li>Ma mère dit qu’il ne faut pas gâter les enfants, et elle me fouette tous les</li><li>matins ; quand elle n’a pas le temps le matin, c’est pour midi, rarement</li><li>plus tard que quatre heures.</li><li>[…]</li><li>Mon premier souvenir date donc d’une fessée. Mon second est plein</li><li>d’étonnement et de larmes.</li><li>C’est au coin d’un feu de fagots, sous le manteau<sup>2</sup> d’une vieille cheminée ;</li><li>ma mère tricote dans un coin ; une cousine à moi, qui sert de bonne<sup>3</sup> dans la</li><li>maison pauvre, range sur des planches rongées, quelques assiettes de faïence</li><li>bleue avec des coqs à crête rouge, et à queue bleue.</li><li>Mon père a un couteau à la main et taille un morceau de sapin ; les copeaux<sup>4</sup></li><li>tombent jaunes et soyeux comme des brins de rubans. Il me fait un chariot</li><li>avec des languettes de bois frais. Les roues sont déjà taillées ; ce sont</li><li>des ronds de pommes de terre avec leur cercle de peau brune qui fait le fer<sup>5</sup>…</li><li>Le chariot va être fini ; j’attends tout ému et les yeux grands ouverts,</li><li>quand mon père pousse un cri et lève sa main pleine de sang. Il s’est</li><li>enfoncé le couteau dans le doigt. Je deviens tout pâle et je m’avance vers</li><li>lui ; un coup violent m’arrête ; c’est ma mère qui me l’a donné, l’écume aux</li><li>lèvres, les poings crispés.</li><li>« C’est ta faute si ton père s’est fait mal ! »</li><li>Et elle me chasse sur l’escalier noir, en me cognant encore le front contre</li><li>la porte.</li><li>Je crie, je demande grâce, et j’appelle mon père : je vois, avec ma terreur</li><li>d’enfant, sa main qui pend toute hachée ; c’est moi qui en suis cause !</li><li>Pourquoi ne me laisse-t-on pas entrer pour savoir ? On me battra après si</li><li>l’on veut. Je crie, on ne me répond pas. J’entends qu’on remue des carafes,</li><li>qu’on ouvre un tiroir ; on met des compresses.</li><li>« Ce n’est rien, vient me dire ma cousine,» en pliant une bande de linge</li><li>tachée de rouge.</li><li>Je sanglote, j’étouffe : ma mère reparaît et me pousse dans le cabinet<sup>6</sup> où je</li><li>couche, où j’ai peur tous les soirs.</li><li>Je puis avoir cinq ans<sup>7</sup> et me crois un parricide.</li><li>Ce n’est pas ma faute, pourtant !</li><li>Est-ce que j’ai forcé mon père à faire ce chariot ? Est-ce que je n’aurais</li><li>pas mieux aimé saigner, moi, et qu’il n’eût point mal ?</li><li>Oui — et je m’égratigne les mains pour avoir mal aussi.</li><li>C’est que maman aime tant mon père ! Voilà pourquoi elle s’est emportée.</li><li>On me fait apprendre à lire dans un livre où il y a écrit en grosses lettres</li><li>qu’il faut obéir à ses père et mère : Ma mère a bien fait de me battre.</li></ol>
<p class="source">Jules Vallès, <i>L’Enfant</i>, chapitre I, « Ma mère », 1879.</p>
<p class="notes"><sup>1</sup> dorloté : entouré de tendresse et de petits soins.</p>
<p class="notes"><sup>2</sup> le manteau d’une cheminée : la partie de la cheminée qui avance au-dessus du foyer.</p>
<p class="notes"><sup>3</sup> bonne : servante.</p>
<p class="notes"><sup>4</sup> copeaux : fines lamelles de bois enlevées par le couteau.</p>
<p class="notes"><sup>5</sup> qui fait le fer : qui joue le rôle du cercle de fer qui entourait les roues des charrettes.</p>
<p class="notes"><sup>6</sup> cabinet : petite pièce.</p>
<p class="notes"><sup>7</sup> Je puis avoir cinq ans : j’ai sans doute cinq ans.</p>
<p><b>B. Image</b></p>
<figure class="img-ex"><img src="examens/img/fr-morisot-berceau.jpg" alt="Une jeune femme assise, la tête appuyée sur la main, regarde un bébé qui dort dans un berceau couvert d’un voile blanc."><figcaption>Berthe Morisot, <i>Le Berceau</i>, 1872, huile sur toile, musée d’Orsay, Paris.</figcaption></figure>
<p class="consigne">Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.</p>
<p class="q"><b>1.</b> À quel genre ce texte appartient-il ? Justifiez votre réponse en vous appuyant sur trois éléments précis du texte et de sa présentation. <span class="pts">(4 points)</span></p>
<p class="q"><b>2.</b> Lignes 1 à 7 : quelle image le narrateur donne-t-il de sa mère ? Deux éléments de réponse justifiés par des citations du texte sont attendus. <span class="pts">(4 points)</span></p>
<p class="q"><b>3.</b> Lignes 9 à 35 : le narrateur annonce que son second souvenir « est plein d’étonnement et de larmes » (lignes 9-10). Expliquez pourquoi. Trois éléments de réponse sont attendus ; justifiez chacun d’eux à l’aide de citations du texte. <span class="pts">(6 points)</span></p>
<p class="q"><b>4.</b> Lignes 36 à 43, de « Je puis avoir cinq ans » à « de me battre » : comment l’enfant juge-t-il ce qui lui est arrivé, et que pense, selon vous, l’adulte qui raconte ? Justifiez votre réponse en vous appuyant sur l’identification précise et l’analyse de deux procédés d’écriture. <span class="pts">(6 points)</span></p>
<p class="q"><b>5.</b> Ce texte vous paraît-il plutôt triste ou plutôt drôle ? Développez une réponse personnelle de quelques phrases, en vous appuyant sur deux arguments justifiés par des citations du texte. <span class="pts">(6 points)</span></p>
<p class="q"><b>6.</b> <b>Image.</b> D’après vous, ce tableau de Berthe Morisot pourrait-il illustrer le texte de Jules Vallès ? Vous développerez votre réponse en vous appuyant sur trois arguments. Chacun devra être justifié en vous référant au texte et à l’image. <span class="pts">(6 points)</span></p>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        points: 18,
        html: `<p class="q"><b>7.</b> Lignes 12 à 14 : « une cousine à moi, qui sert de bonne dans la maison pauvre, range sur des planches rongées, quelques assiettes de faïence bleue »</p>
<p class="q sous"><b>a)</b> Donnez la classe grammaticale (nature) et la fonction du mot « rongées ». <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Relevez la proposition subordonnée relative de ce passage. Précisez son antécédent et sa fonction, en justifiant votre réponse. <span class="pts">(1 point)</span></p>
<p class="q"><b>8.</b> Indiquez la valeur du présent de l’indicatif dans chacun des passages suivants, en justifiant brièvement votre réponse.</p>
<p class="q sous"><b>a)</b> « Je n’en sais rien. » (ligne 2) <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> « elle me fouette tous les matins » (lignes 5-6) <span class="pts">(1 point)</span></p>
<p class="q sous"><b>c)</b> « mon père pousse un cri et lève sa main pleine de sang » (ligne 20) <span class="pts">(1 point)</span></p>
<p class="q"><b>9.</b> Formation des mots.</p>
<p class="q sous"><b>a)</b> Ligne 4 : les mots « tapoté » et « baisotté » sont formés avec le même suffixe. Identifiez le radical et le suffixe de chacun, puis expliquez le sens de ce suffixe. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Ligne 36 : expliquez le sens du mot « parricide » en vous appuyant sur sa composition, puis donnez un autre mot formé avec le même élément final. <span class="pts">(1 point)</span></p>
<p class="q"><b>10.</b> Ligne 41 : « Voilà pourquoi elle s’est emportée. » Justifiez l’accord du participe passé « emportée ». <span class="pts">(1 point)</span></p>
<p class="q"><b>11.</b> Réécrivez le passage suivant en remplaçant « je » par « nous » (le narrateur et son frère). Vous ferez toutes les modifications nécessaires. <span class="pts">(10 points)</span></p>
<blockquote class="extrait">« […] j’appelle mon père : je vois, avec ma terreur d’enfant, sa main qui pend toute hachée ; c’est moi qui en suis cause ! Pourquoi ne me laisse-t-on pas entrer pour savoir ? On me battra après si l’on veut. »</blockquote>`
      },
      {
        titre: `Dictée`,
        points: 10,
        type: 'dictee',
        html: `<p class="consigne">Durée : 20 minutes. Faites-vous dicter le texte par quelqu’un (il le trouvera sur la page du corrigé, avec les mots à écrire au tableau), ou utilisez les boutons « Lecture », « Dictée » et « Relecture » ci-dessus : le site lit le texte comme le ferait le surveillant. Ne lisez pas le texte avant d’avoir écrit votre dictée.</p>
<p>Lors de la dictée, on procède successivement : 1. à une lecture préalable, lente et bien articulée du texte ; 2. à la dictée effective du texte, en précisant la ponctuation et en marquant nettement les liaisons ; 3. à la relecture, sans préciser cette fois-ci la ponctuation mais en marquant toujours les liaisons.</p>
<p>Écrivez <b>une ligne sur deux</b>. Recopiez exactement les mots écrits au tableau. Après la relecture, on ne répond plus à aucune question : gardez quelques minutes pour vous relire.</p>`
      },
      {
        titre: `Rédaction`,
        points: 40,
        html: `<p>Vous traiterez <b>à votre choix</b> l’un des sujets suivants :</p>
<p><b>Sujet d’imagination</b></p>
<p>Comme Jules Vallès, racontez à la première personne un souvenir d’enfance, réel ou inventé, où vous avez été accusé(e) ou puni(e) pour une faute que vous n’aviez pas commise. Votre récit fera entendre à la fois les émotions de l’enfant que vous étiez et le regard que vous portez aujourd’hui sur ce souvenir.</p>
<p>Votre rédaction comportera 35 lignes au moins.</p>
<p><b>Sujet de réflexion</b></p>
<p>Selon vous, pourquoi des écrivains choisissent-ils de raconter les moments douloureux de leur enfance ?</p>
<p>Vous présenterez votre réflexion dans un développement argumenté et organisé. Vous illustrerez votre propos à l’aide d’exemples issus de vos lectures et de votre culture artistique personnelle (cinéma, bande dessinée, chanson…). Vous pouvez vous appuyer également sur le texte de Jules Vallès.</p>
<p>Votre rédaction fera au moins 30 lignes.</p>
<p class="consigne">Afin de respecter l’anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d’un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: ``,
    dictee: {
      mots: [`tomes (des fromages)`, `s’égosillent`],
      texte: "Oh ! la belle petite école ! Oh ! la belle rue ! et si vivante, les jours de foire !\nLes chevaux qui hennissent ; les cochons qui se traînent en grognant, une corde à la patte ; les poulets qui s’égosillent dans les cages ; les paysannes en tablier vert, avec des jupons écarlates ; les fromages bleus, les tomes fraîches, les paniers de fruits ; les radis roses, les choux verts !…\nIl y avait une auberge tout près de l’école, et l’on y déchargeait souvent du foin.\nLe foin, où l’on s’enfouissait jusqu’aux yeux, d’où l’on sortait hérissé et suant, avec des brins qui vous étaient restés dans le cou, le dos, les jambes, et vous piquaient comme des épingles !…",
      source: `D’après Jules Vallès, L’Enfant, 1879.`
    },
    corrige: [
      {
        titre: `I. Compréhension et compétences d’interprétation`,
        html: `<div class="rep"><p class="rq"><b>1.</b> Le genre du texte (trois éléments).</p>
<p>Ce texte est un récit autobiographique : un adulte raconte ses souvenirs d’enfance. D’abord, le récit est mené à la première personne et le narrateur parle de sa propre vie : « Mon premier souvenir date donc d’une fessée » (l. 9). Ensuite, on entend la voix de l’adulte qui se souvient, au présent d’énonciation, et qui reconnaît les limites de sa mémoire : « Je n’en sais rien » (l. 2), « je ne me rappelle pas une caresse » (l. 2-3). Enfin, la présentation nous apprend que Jules Vallès raconte ici sa propre enfance. Il faut pourtant nuancer : l’auteur donne à son personnage un autre nom, Jacques Vingtras. L’auteur et le narrateur ne portent donc pas le même nom, et le pacte autobiographique n’est pas complet : c’est un roman autobiographique, comme <i>Un Secret</i> de Philippe Grimbert.</p>
<p class="attendu"><b>On attend :</b> le genre (récit autobiographique, récit d’enfance) et trois indices justifiés : le « je », le vocabulaire du souvenir, le regard de l’adulte au présent, la présentation du texte.</p>
<p class="valorise"><b>On valorise :</b> la nuance « roman autobiographique » : le nom Jacques Vingtras empêche la triade narrative (auteur = narrateur = personnage) d’être complète.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Lignes 1 à 7 : l’image de la mère.</p>
<p>Le narrateur présente sa mère comme une femme froide et très sévère. D’une part, elle ne lui a jamais montré de tendresse : il ne se rappelle « pas une caresse » (l. 3), et la liste « je n’ai pas été dorloté, tapoté, baisotté » (l. 3-4) s’oppose brutalement à « j’ai été beaucoup fouetté » (l. 4). D’autre part, elle frappe par principe, et non sous l’effet de la colère : elle applique une règle d’éducation, « il ne faut pas gâter les enfants » (l. 5), et la punition est devenue une habitude réglée comme une horloge : « elle me fouette tous les matins » (l. 5-6), « rarement plus tard que quatre heures » (l. 6-7). Cette précision est comique : le narrateur se moque d’une mère qui fouette son fils comme on accomplit une tâche ménagère.</p>
<p class="attendu"><b>On attend :</b> deux traits justifiés : l’absence de tendresse ; la sévérité, la violence quotidienne et méthodique ; une mère qui obéit à des principes.</p>
<p class="valorise"><b>On valorise :</b> la perception de l’ironie : le rythme et les sonorités de « dorloté, tapoté, baisotté », les horaires précis des fessées.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Lignes 9 à 35 : pourquoi ce souvenir est « plein d’étonnement et de larmes ».</p>
<p>Ce second souvenir mêle la surprise et le chagrin, pour trois raisons.</p>
<p>Tout d’abord, la scène commence comme un moment de bonheur, ce qui rend la suite d’autant plus surprenante. La famille est réunie « au coin d’un feu de fagots » (l. 11), le père fabrique un jouet pour son fils (« Il me fait un chariot », l. 16) et l’enfant attend « tout ému et les yeux grands ouverts » (l. 19). Brusquement, tout bascule : « un coup violent m’arrête » (l. 22). L’enfant ne comprend pas ce qui lui arrive : c’est l’étonnement.</p>
<p>Ensuite, la mère se montre violente et injuste. Elle frappe « l’écume aux lèvres, les poings crispés » (l. 22-23), accuse son fils (« C’est ta faute si ton père s’est fait mal ! », l. 24) et le jette dehors « en me cognant encore le front contre la porte » (l. 25-26). Elle le rend responsable d’un accident qu’il n’a pas provoqué.</p>
<p>Enfin, l’enfant reste seul avec sa peur et sa culpabilité, d’où les larmes. Il supplie (« Je crie, je demande grâce », l. 27), se croit coupable (« c’est moi qui en suis cause ! », l. 28), et personne ne lui répond (« on ne me répond pas », l. 30). La scène se termine dans les sanglots et la peur : « Je sanglote, j’étouffe » (l. 34), « où j’ai peur tous les soirs » (l. 35).</p>
<p class="attendu"><b>On attend :</b> trois éléments justifiés : le retournement brutal d’un moment heureux ; la violence et l’accusation injuste de la mère ; la peur, la culpabilité et la solitude de l’enfant.</p>
<p class="valorise"><b>On valorise :</b> l’analyse de l’écriture : le présent de narration et les propositions juxtaposées rendent la scène vivante et saccadée ; les paroles rassurantes de la cousine (« Ce n’est rien », l. 32), démenties par la bande de linge « tachée de rouge » (l. 33).</p></div>
<div class="rep"><p class="rq"><b>4.</b> Lignes 36 à 43 : le jugement de l’enfant et celui de l’adulte (deux procédés).</p>
<p>Dans ces lignes, l’enfant passe de la révolte à l’acceptation, alors que l’adulte qui raconte dénonce cette injustice.</p>
<p>Premier procédé : les questions rhétoriques. « Est-ce que j’ai forcé mon père à faire ce chariot ? Est-ce que je n’aurais pas mieux aimé saigner, moi, et qu’il n’eût point mal ? » (l. 38-39). Ces questions n’attendent pas de réponse : elles montrent que l’enfant cherche à se défendre et qu’il sent l’injustice, comme le dit aussi la phrase exclamative « Ce n’est pas ma faute, pourtant ! » (l. 37). Il aime tant son père qu’il s’égratigne les mains « pour avoir mal aussi » (l. 40).</p>
<p>Deuxième procédé : l’ironie (ou antiphrase), qui consiste à faire entendre le contraire de ce que l’on pense. L’enfant finit par excuser sa mère (« C’est que maman aime tant mon père ! Voilà pourquoi elle s’est emportée. », l. 41) et répète la leçon de son livre de lecture : « Ma mère a bien fait de me battre » (l. 43). Le narrateur adulte, lui, ne le pense pas : en reprenant les mots de l’enfant sans les commenter, il montre comment on a appris à un petit garçon à se sentir coupable. L’hyperbole « me crois un parricide » (l. 36), qui associe un enfant de « cinq ans » à un crime terrible, va dans le même sens : elle souligne l’absurdité de cette culpabilité.</p>
<p>Ainsi, l’enfant accepte la faute ; l’adulte, par l’ironie, accuse une éducation brutale.</p>
<p class="attendu"><b>On attend :</b> deux procédés nommés avec exactitude, cités et analysés (questions rhétoriques, phrase exclamative, hyperbole, ironie ou antiphrase, connecteurs « C’est que… Voilà pourquoi ») ; la distinction entre le point de vue de l’enfant et celui de l’adulte.</p>
<p class="valorise"><b>On valorise :</b> le lien avec la dédicace du livre, adressée à ceux « qu’on fit pleurer dans la famille » et qui furent « rossés par leurs parents » ; la remarque que la dernière phrase reprend la morale du livre de lecture.</p>
<p class="piege"><b>Piège :</b> prendre la dernière phrase au pied de la lettre. « Ma mère a bien fait de me battre » est la pensée de l’enfant, pas l’opinion de l’auteur.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Un texte triste ou drôle ? (réponse personnelle)</p>
<p>Exemple de réponse : à la première lecture, ce texte m’a fait sourire, mais il m’a surtout paru triste. Il est drôle par moments, parce que le narrateur se moque de sa mère : il présente les fessées comme un rendez-vous fixé à heure précise (« c’est pour midi, rarement plus tard que quatre heures », l. 6-7) et joue sur les sonorités dans « dorloté, tapoté, baisotté » (l. 3-4). Pourtant, ce sourire rend la souffrance encore plus frappante. Un enfant de cinq ans est battu, chassé « sur l’escalier noir » (l. 25), et il dort dans un cabinet « où j’ai peur tous les soirs » (l. 35). Le plus triste est qu’il finit par croire que sa mère a eu raison : « Ma mère a bien fait de me battre » (l. 43). L’humour de Vallès n’efface donc pas la douleur : c’est une façon de la raconter sans se plaindre, et c’est justement ce qui m’a touché(e).</p>
<p class="attendu"><b>On attend :</b> une prise de position claire, justifiée par deux arguments appuyés sur des citations.</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée, qui montre que l’humour et l’ironie servent à dire la souffrance ; des remarques personnelles qui ne répètent pas les réponses aux questions 1 à 4.</p></div>
<div class="rep"><p class="rq"><b>6.</b> Le tableau de Berthe Morisot peut-il illustrer le texte ? (trois arguments)</p>
<p>Le tableau montre une jeune femme assise près d’un berceau ; la tête appuyée sur la main, elle regarde avec douceur un bébé endormi derrière un voile blanc. Les couleurs sont claires et douces : blanc, rose pâle, gris-bleu.</p>
<p>Premier argument : à première vue, ce tableau ne peut pas illustrer le texte, car il montre le contraire de la mère de Jacques. La jeune femme veille tendrement sur l’enfant, la main posée sur le bord du berceau, alors que le narrateur ne se rappelle « pas une caresse » (l. 3) et qu’il a été « beaucoup fouetté » (l. 4).</p>
<p>Deuxième argument : l’atmosphère est opposée. Le tableau est calme, lumineux et protecteur : le voile entoure le bébé comme un abri. Le texte, lui, est violent et sombre : la mère frappe « l’écume aux lèvres, les poings crispés » (l. 22-23), l’enfant est chassé « sur l’escalier noir » (l. 25) et dort dans un cabinet « où j’ai peur tous les soirs » (l. 35).</p>
<p>Troisième argument : pourtant, le tableau peut éclairer le texte par contraste. Il représente un bébé tout petit, comme Jacques « du temps où j’étais tout petit » (l. 3), et il montre ce dont cet enfant a manqué : être « dorloté » (l. 3). Placé à côté du texte, il fait mesurer au lecteur la dureté de l’enfance racontée par Vallès.</p>
<p>Ce tableau n’illustre donc pas la scène racontée, mais il la met en valeur en montrant la tendresse maternelle qui manque à Jacques.</p>
<p class="attendu"><b>On attend :</b> trois arguments, chacun appuyé sur un détail précis de l’image (regard, geste, voile, berceau, couleurs, lumière) et sur une citation du texte ; des points communs ou des différences.</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée (le tableau illustre le texte par contraste) ; le vocabulaire de l’analyse d’image (premier plan, couleurs claires, lumière douce) ; savoir que Berthe Morisot a peint ici sa sœur veillant sur sa fille.</p></div>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        html: `<div class="rep"><p class="rq"><b>7. a)</b> « rongées » : classe grammaticale et fonction.</p>
<p>« rongées » est un participe passé employé comme adjectif (adjectif qualificatif formé sur le verbe « ronger »). Il est épithète du nom « planches » : il le complète directement, sans préposition, et s’accorde avec lui au féminin pluriel.</p>
<p class="attendu"><b>Manipulation :</b> on peut le supprimer (« sur des planches ») ou le remplacer par un autre adjectif (« sur des planches usées ») : c’est une expansion du nom.</p></div>
<div class="rep"><p class="rq"><b>7. b)</b> La proposition subordonnée relative.</p>
<p>La proposition subordonnée relative est « qui sert de bonne dans la maison pauvre ». Elle est introduite par le pronom relatif « qui », qui a pour antécédent « une cousine à moi » (noyau : « cousine »). Elle est apposée à ce groupe nominal (fonction : apposition), car elle est encadrée par des virgules ; on peut la supprimer sans rendre la phrase incorrecte. Dans la relative, « qui » est sujet du verbe « sert ».</p></div>
<div class="rep"><p class="rq"><b>8.</b> Les valeurs du présent.</p>
<p><b>a)</b> « Je n’en sais rien » : présent d’énonciation. Le narrateur adulte parle au moment où il écrit : aujourd’hui encore, il ne sait pas qui l’a nourri.</p>
<p><b>b)</b> « elle me fouette tous les matins » : présent itératif (présent d’habitude). L’action se répète, comme l’indique le complément circonstanciel de temps « tous les matins ».</p>
<p><b>c)</b> « mon père pousse un cri et lève sa main » : présent de narration. L’action est passée (l’enfant a environ cinq ans), mais elle est racontée au présent pour rendre la scène plus vivante. Manipulation : on peut la mettre au passé simple (« mon père poussa un cri ») sans changer le sens du récit.</p>
<p class="piege"><b>Piège :</b> ne pas se contenter de « présent » : il faut nommer la valeur et donner l’indice qui la justifie.</p></div>
<div class="rep"><p class="rq"><b>9.</b> La formation des mots.</p>
<p><b>a)</b> « tapoté » : radical « tap- » (du verbe taper) + suffixe « -oter ». « baisotté » : radical « bais- » (du verbe baiser, au sens d’embrasser) + suffixe « -otter » (le même suffixe, écrit avec deux t). Ce suffixe verbal a une valeur diminutive : il désigne une action faite à petits coups, légère et répétée, comme dans « toussoter » ou « siffloter ». Tapoter, c’est donner de petites tapes affectueuses ; baisotter, donner de petits baisers. L’enfant n’a reçu aucun de ces gestes tendres.</p>
<p><b>b)</b> « parricide » est un mot composé savant, venu du latin. On y reconnaît l’élément « -cide », qui signifie « qui tue » (du latin <i>caedere</i>, tuer), et un premier élément que l’on rapproche du latin <i>pater</i>, le père. Un parricide est quelqu’un qui tue son père (ou sa mère). Mots formés avec le même élément : homicide, infanticide, fratricide, insecticide.</p></div>
<div class="rep"><p class="rq"><b>10.</b> L’accord de « emportée ».</p>
<p>« s’est emportée » est le passé composé du verbe pronominal « s’emporter », conjugué avec l’auxiliaire être. Le participe passé s’accorde donc avec le sujet « elle », qui désigne la mère : féminin singulier, d’où le -e. Vérification : avec un sujet masculin, on écrirait « il s’est emporté ».</p></div>
<div class="rep"><p class="rq"><b>11.</b> Réécriture : « je » devient « nous ».</p>
<blockquote class="extrait">« […] <b>nous appelons notre</b> père : <b>nous voyons</b>, avec <b>notre</b> terreur d’enfant, sa main qui pend toute hachée ; c’est <b>nous</b> qui en <b>sommes</b> cause ! Pourquoi ne <b>nous</b> laisse-t-on pas entrer pour savoir ? On <b>nous</b> battra après si l’on veut. »</blockquote>
<p class="bareme">Barème : 1 point par forme correcte (nous, appelons, notre, nous, voyons, notre, nous, sommes, nous, nous : 10 formes) ; on retire 0,5 point par erreur de copie. On accepte « terreur d’enfant » ou « terreur d’enfants ».</p>
<p class="piege"><b>Pièges :</b> « appelons » ne prend qu’un l (on double le l seulement devant un e muet : j’appelle, nous appelons). « sa main qui pend » ne change pas : le sujet de « pend » est « qui », mis pour « sa main ». « laisse-t-on » et « battra » ne changent pas : leur sujet est « on ». Dans « c’est nous qui en sommes cause », le verbe s’accorde avec l’antécédent de « qui », c’est-à-dire « nous ».</p></div>`
      },
      {
        titre: `Dictée`,
        html: `<p>Le texte de la dictée est rappelé ci-dessus. Voici les principales difficultés.</p>
<div class="rep"><p class="rq"><b>1.</b> Les verbes dont le sujet est « qui »</p>
<p>« Les chevaux qui hennissent », « les cochons qui se traînent », « les poulets qui s’égosillent » : le verbe s’accorde avec l’antécédent de « qui », ici au pluriel, d’où la terminaison -ent. « Hennir » se conjugue comme « finir » : ils hennissent.</p></div>
<div class="rep"><p class="rq"><b>2.</b> Les accords dans les groupes nominaux</p>
<p>Chaque adjectif s’accorde avec son nom : « tablier vert », « jupons écarlates », « fromages bleus », « tomes fraîches » (féminin pluriel, avec l’accent circonflexe de « fraîche »), « choux verts ». « Roses » s’accorde : c’est un des adjectifs de couleur venus d’un nom qui varient (des radis roses). Attention aussi à « si vivante », qui s’accorde avec « rue ».</p></div>
<div class="rep"><p class="rq"><b>3.</b> Le pluriel des noms</p>
<p>« les choux » prend un x : c’est l’un des sept noms en -ou (bijou, caillou, chou, genou, hibou, joujou, pou). « les chevaux » : -al devient -aux. « les radis » ne change pas : le nom se termine déjà par -s.</p></div>
<div class="rep"><p class="rq"><b>4.</b> L’imparfait</p>
<p>« on y déchargeait », « l’on s’enfouissait », « l’on sortait » : le sujet « on » est à la 3<sup>e</sup> personne du singulier, d’où -ait ; « déchargeait » garde le e après le g pour conserver le son [ʒ]. En revanche, « vous piquaient » a pour sujet « qui », mis pour « des brins » : -aient.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Les participes passés</p>
<p>« des brins qui vous étaient restés » : avec l’auxiliaire être, le participe passé s’accorde avec le sujet « qui », mis pour « des brins » (masculin pluriel). « l’on sortait hérissé » : participe passé employé seul, accordé avec « on » (masculin singulier) ; « suant » est un participe présent, toujours invariable.</p></div>
<div class="rep"><p class="rq"><b>6.</b> Les homophones</p>
<p>« où l’on s’enfouissait », « d’où l’on sortait » : « où » indique le lieu, il prend un accent (on ne peut pas dire « ou bien »). « à la patte » : préposition « à » (on ne peut pas dire « avait »). « tout près » : adverbe.</p></div>
<p class="bareme">Barème indicatif pour s’entraîner : on part de 10 points ; on retire 1 point par erreur d’orthographe grammaticale (accord, terminaison de verbe, homophone) et 0,5 point par erreur d’orthographe lexicale (mot mal écrit, accent oublié).</p>`
      },
      {
        titre: `Rédaction`,
        html: `<p><b>Sujet d’imagination : plan possible</b></p>
<p><b>1. L’ouverture (présent d’énonciation).</b> Le narrateur, aujourd’hui, annonce le souvenir et dit pourquoi il ne l’a jamais oublié : « Il y a des souvenirs qui brûlent encore. »</p>
<p><b>2. La situation initiale (imparfait).</b> Le lieu, l’âge, un moment ordinaire ou même heureux, comme le chariot du père dans le texte.</p>
<p><b>3. L’élément déclencheur (passé simple).</b> Un objet cassé, un goûter disparu, une bêtise commise par un autre… et l’accusation, avec un court dialogue.</p>
<p><b>4. La punition et les émotions de l’enfant.</b> Incompréhension, révolte, larmes, honte : champ lexical de l’injustice, phrases courtes, questions sans réponse.</p>
<p><b>5. La fin : le regard d’aujourd’hui.</b> Ce que cette injustice lui a appris ; une pointe d’humour ou d’ironie, à la manière de Vallès.</p>
<div class="exemple-redige"><p>Je devais avoir sept ans. Ce dimanche-là, ma tante avait posé sur la table du salon un vase de cristal dont elle était très fière. Quand il se brisa, je n’étais même pas dans la pièce : je lisais dans le jardin. Pourtant, c’est vers moi que tous les regards se tournèrent. « Évidemment, c’est encore lui ! » lança mon oncle. J’ouvris la bouche pour me défendre, mais aucun mot ne sortit. Pourquoi personne ne me croyait-il ? Je fus privé de dessert, puis envoyé dans ma chambre, où je pleurai de rage jusqu’au soir. Aujourd’hui encore, quand j’entends un verre se briser, je revois le visage de mon oncle, et je souris : c’était le chat.</p></div>
<p class="attendu"><b>On attend :</b> un récit à la première personne, cohérent et organisé en paragraphes ; la scène d’injustice et les émotions de l’enfant ; le regard porté aujourd’hui sur ce souvenir ; une langue correcte (passé simple et imparfait bien employés).</p>
<p class="valorise"><b>On valorise :</b> l’alternance réussie entre récit, dialogue et commentaire au présent d’énonciation ; l’humour ou l’ironie ; un vocabulaire précis des sentiments.</p>
<p><b>Sujet de réflexion : plan possible</b></p>
<p><b>Introduction.</b> Amorce : Jules Vallès dédie <i>L’Enfant</i> à ceux « qu’on fit pleurer dans la famille ». Question : pourquoi raconter ce qui a fait souffrir ? Annonce du plan.</p>
<p><b>I. Raconter pour comprendre et se libérer.</b> Mettre des mots sur la douleur permet de la mettre à distance. Exemple : dans <i>Un Secret</i>, Philippe Grimbert écrit pour comprendre le secret de sa famille et offrir un tombeau à Hannah et Simon.</p>
<p><b>II. Raconter pour témoigner et dénoncer.</b> Le récit montre une injustice pour qu’elle ne se reproduise pas. Exemples : Vallès dénonce une éducation fondée sur les coups ; au cinéma, <i>Les Quatre Cents Coups</i> (1959), inspiré de l’enfance de François Truffaut ; en bande dessinée, <i>L’Arabe du futur</i> de Riad Sattouf.</p>
<p><b>III. Raconter pour partager et aider le lecteur.</b> Le lecteur se reconnaît et se sent moins seul ; George Sand parle d’un « enseignement fraternel ». Nuance : certains préfèrent raconter les souvenirs heureux, comme Marcel Pagnol dans <i>La Gloire de mon père</i>, ou garder le silence par pudeur.</p>
<p><b>Conclusion.</b> Bilan : comprendre, témoigner, partager. Ouverture : écrire sa douleur, n’est-ce pas aussi la transformer en œuvre d’art ?</p>
<div class="exemple-redige"><p>Tout d’abord, raconter les moments douloureux de son enfance permet de mieux les comprendre et de s’en libérer. En effet, quand on met des mots sur une souffrance, on la regarde de l’extérieur, comme si elle appartenait à un autre. Ainsi, dans <i>L’Enfant</i>, Jules Vallès donne à son double le nom de Jacques Vingtras : cette distance lui permet de raconter les coups de sa mère avec humour, au lieu de s’enfermer dans la plainte. De même, Philippe Grimbert écrit <i>Un Secret</i> pour comprendre l’histoire cachée de sa famille. Raconter sa douleur est donc d’abord une manière de se reconstruire.</p></div>
<p class="attendu"><b>On attend :</b> un propos construit et argumenté qui répond à la question ; des exemples pertinents et développés ; une langue correcte, des connecteurs logiques.</p>
<p class="valorise"><b>On valorise :</b> la diversité des exemples (romans, films, bandes dessinées) ; une réponse nuancée ; une langue riche et soignée.</p>
<p class="bareme">Barème indicatif (grille officielle) : 1 à 12 points pour une copie qui ne répond pas au sujet ; 13 à 22 points pour une réponse partielle ; 23 à 34 points pour une réponse satisfaisante ; 35 à 40 points pour une réponse très satisfaisante, riche et bien écrite.</p>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Lire le chapeau avant le texte.</b> Il donne l’auteur, la date et le nom du personnage, Jacques Vingtras : c’est la clé de la question 1 (roman autobiographique ou autobiographie ?).</li>
<li><b>Repérer les deux regards.</b> L’enfant vit la scène (présent de narration, émotions) ; l’adulte la commente (présent d’énonciation, ironie). Les questions 3 à 5 jouent sur cette différence.</li>
<li><b>Rédiger les réponses longues en paragraphes.</b> Pour chaque élément demandé : une idée en une phrase, une citation courte entre guillemets avec sa ligne, puis une explication (« Cette phrase montre que… »). Pour la question 3, trois éléments = trois petits paragraphes.</li>
<li><b>Analyser un procédé.</b> Je cite, je nomme (question rhétorique, hyperbole, ironie), j’explique l’effet en lien avec la question. Pour l’ironie, je montre l’écart entre ce que dit l’enfant et ce que pense l’adulte.</li>
<li><b>Question sur l’image.</b> Trois arguments, chacun avec un détail précis du tableau et une citation du texte. Ici, le tableau s’oppose au texte : je le dis, puis je nuance (il montre ce qui manque à Jacques).</li>
<li><b>Réussir la réécriture.</b> Je souligne tous les mots de la 1<sup>re</sup> personne (je, me, mon, ma, moi) et tous les verbes. Je vérifie les sujets : « sa main qui pend », « on » ne changent pas. Je conjugue au présent avec « nous » (appelons, voyons, sommes) et je recopie le reste sans faute.</li>
<li><b>Relire la dictée en quatre passages.</b> 1. chaque verbe et son sujet (surtout après « qui ») ; 2. chaque groupe nominal (adjectifs de couleur, choux) ; 3. les participes passés (« étaient restés ») ; 4. les homophones (où/ou, à/a).</li>
<li><b>Préparer la rédaction au brouillon.</b> Imagination : cinq étapes, avec un passage au présent d’énonciation au début et à la fin. Réflexion : trois parties, un argument et un exemple précis par paragraphe, des connecteurs. Garder dix minutes pour se relire.</li>
</ol>
<p class="tip">Astuce : dans un récit d’enfance, cherchez toujours qui juge la scène, l’enfant d’autrefois ou l’adulte d’aujourd’hui. C’est souvent là que se cache la réponse aux questions d’interprétation.</p>`
  },
{
    id: 'ex-francais-2',
    matiere: 'francais',
    numero: 2,
    titre: `Le livre du grenier`,
    epreuve: `FRANÇAIS`,
    duree: `3 h 00`,
    points: 100,
    pointsRedaction: 0,
    cours: ['fr-ch1', 'fr-ch2', 'fr-ch3', 'fr-ch4', 'fr-ch8', 'fr-ch9'],
    methodes: ['fr-m1', 'fr-m2', 'fr-m3'],
    garde: [
      `Travail sur le texte littéraire et sur l’image : 50 points – 1 h 10`,
      `Dictée : 10 points – 20 minutes`,
      `Rédaction : 40 points – 1 h 30`,
      `Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.`,
      `L’usage de la calculatrice est interdit. L’usage du dictionnaire est autorisé pour la rédaction uniquement.`
    ],
    parties: [
      {
        titre: `Travail sur le texte littéraire et sur l’image — I. Compréhension et compétences d’interprétation`,
        points: 32,
        html: `<p><b>A. Texte littéraire</b></p>
<p>En 1856, Victor Hugo (1802-1885) publie <i>Les Contemplations</i>, un recueil de poèmes qu’il présente comme « les Mémoires d’une âme ». Il en écrit une grande partie en exil, sur l’île de Jersey, où il s’est installé en 1852 après s’être opposé au coup d’État de Louis-Napoléon Bonaparte (1851). Dans ce poème, il se souvient de son enfance à Paris, avec sa mère et ses deux frères aînés.</p>
<p><b>Aux Feuillantines</b></p>
<ol class="lignes"><li>Mes deux frères et moi, nous étions tout enfants.</li><li>Notre mère disait : Jouez, mais je défends</li><li>Qu’on marche dans les fleurs et qu’on monte aux échelles.</li><li style="margin-top:.7em">Abel était l’aîné, j’étais le plus petit.</li><li>Nous mangions notre pain de si bon appétit,</li><li>Que les femmes riaient quand nous passions près d’elles.</li><li style="margin-top:.7em">Nous montions pour jouer au grenier du couvent<sup>1</sup>.</li><li>Et, là, tout en jouant, nous regardions souvent</li><li>Sur le haut d’une armoire un livre inaccessible.</li><li style="margin-top:.7em">Nous grimpâmes un jour jusqu’à ce livre noir ;</li><li>Je ne sais pas comment nous fîmes pour l’avoir,</li><li>Mais je me souviens bien que c’était une Bible.</li><li style="margin-top:.7em">Ce vieux livre sentait une odeur d’encensoir<sup>2</sup>.</li><li>Nous allâmes ravis dans un coin nous asseoir.</li><li>Des estampes<sup>3</sup> partout ! quel bonheur ! quel délire<sup>4</sup> !</li><li style="margin-top:.7em">Nous l’ouvrîmes alors tout grand sur nos genoux,</li><li>Et, dès le premier mot, il nous parut si doux</li><li>Qu’oubliant de jouer, nous nous mîmes à lire.</li><li style="margin-top:.7em">Nous lûmes tous les trois ainsi, tout le matin,</li><li>Joseph, Ruth et Booz, le bon Samaritain<sup>5</sup>,</li><li>Et, toujours plus charmés, le soir nous le relûmes.</li><li style="margin-top:.7em">Tels des enfants, s’ils ont pris un oiseau des cieux,</li><li>S’appellent en riant et s’étonnent, joyeux,</li><li>De sentir dans leur main la douceur de ses plumes.</li></ol>
<p class="source">Marine-Terrace<sup>6</sup>, août 1855.<br>Victor Hugo, « Aux Feuillantines », <i>Les Contemplations</i>, livre V, poème X, 1856.</p>
<p class="notes"><sup>1</sup> couvent : maison où vivent des religieux ou des religieuses ; ici, l’ancien couvent des Feuillantines, à Paris, que la mère du poète avait loué, avec son grand jardin.</p>
<p class="notes"><sup>2</sup> encensoir : récipient dans lequel on brûle de l’encens pendant les cérémonies religieuses.</p>
<p class="notes"><sup>3</sup> estampes : images imprimées, gravures.</p>
<p class="notes"><sup>4</sup> délire : ici, joie très vive, enthousiasme.</p>
<p class="notes"><sup>5</sup> Joseph, Ruth et Booz, le bon Samaritain : personnages et récits de la Bible.</p>
<p class="notes"><sup>6</sup> Marine-Terrace : maison de l’île de Jersey où Victor Hugo vécut en exil.</p>
<p><b>B. Image</b></p>
<figure class="img-ex"><img src="examens/img/fr-vuillard-enfants-lisant.jpg" alt="Deux enfants, une fille éclairée par la lumière et un garçon qui appuie sa tête sur sa main, sont penchés sur un livre ouvert, dans des tons bruns et rouges."><figcaption>Édouard Vuillard, <i>Enfants lisant</i>, 1906, huile sur carton, MuMa – musée d’Art moderne André Malraux, Le Havre.</figcaption></figure>
<p class="consigne">Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.</p>
<p class="q"><b>1.</b> Le titre du poème, « Aux Feuillantines », désigne un lieu. Proposez un autre titre pour ce poème et justifiez votre proposition en vous appuyant précisément sur des éléments du texte. <span class="pts">(4 points)</span></p>
<p class="q"><b>2.</b> Vers 1 à 9 : quelle image le poète donne-t-il de son enfance avec ses frères ? Deux éléments de réponse justifiés par des citations du texte sont attendus. <span class="pts">(4 points)</span></p>
<p class="q"><b>3.</b> Vers 10 à 21 : comment la découverte du livre transforme-t-elle les jeux des trois enfants ? Trois éléments de réponse sont attendus ; justifiez chacun d’eux à l’aide de citations. <span class="pts">(6 points)</span></p>
<p class="q"><b>4.</b> Vers 22 à 24 :<br>« Tels des enfants, s’ils ont pris un oiseau des cieux,<br>S’appellent en riant et s’étonnent, joyeux,<br>De sentir dans leur main la douceur de ses plumes. »<br>Identifiez précisément le procédé d’écriture utilisé dans ces vers, puis expliquez ce qu’il révèle de l’expérience de la lecture vécue par les enfants. <span class="pts">(6 points)</span></p>
<p class="q"><b>5.</b> À la lecture de ce poème, partagez-vous l’émerveillement des trois enfants devant leur livre ? Développez une réponse personnelle de quelques phrases, en vous appuyant sur les questions précédentes, sur votre lecture du texte et sur votre propre expérience de lecteur. <span class="pts">(6 points)</span></p>
<p class="q"><b>6.</b> <b>Image.</b> D’après vous, ce tableau d’Édouard Vuillard pourrait-il illustrer le poème ? Vous développerez votre réponse en vous appuyant sur trois arguments. Chacun devra être justifié en vous référant au texte et à l’image. <span class="pts">(6 points)</span></p>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        points: 18,
        html: `<p class="q"><b>7.</b> Vers 13 : « Ce vieux livre sentait une odeur d’encensoir. »</p>
<p class="q sous"><b>a)</b> Relevez l’expansion du nom « livre ». Donnez sa classe grammaticale (nature) et sa fonction. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Relevez l’expansion du nom « odeur ». Donnez sa classe grammaticale (nature) et sa fonction. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>c)</b> Réécrivez ce vers en ajoutant au nom « livre » une expansion d’une autre sorte : une proposition subordonnée relative, que vous soulignerez. <span class="pts">(1 point)</span></p>
<p class="q"><b>8.</b> Vers 9 : « un livre inaccessible »</p>
<p class="q sous"><b>a)</b> Expliquez la formation du mot « inaccessible », puis donnez son sens dans le vers. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Donnez deux mots de la même famille que « inaccessible ». <span class="pts">(1 point)</span></p>
<p class="q"><b>9.</b> Les valeurs du présent de l’indicatif.</p>
<p class="q sous"><b>a)</b> Vers 11-12 : « Je ne sais pas comment nous fîmes pour l’avoir, / Mais je me souviens bien que c’était une Bible. » Quelle est la valeur du présent dans les verbes « sais » et « souviens » ? Justifiez. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Vers 22-24 : quelle est la valeur du présent dans les verbes « s’appellent » et « s’étonnent » ? Justifiez. <span class="pts">(1 point)</span></p>
<p class="q"><b>10.</b> Vers 14 et 21 : « Nous allâmes ravis » ; « toujours plus charmés ». Justifiez l’accord des mots « ravis » et « charmés ». <span class="pts">(1 point)</span></p>
<p class="q"><b>11.</b> Réécrivez les vers 14 à 18 en remplaçant « nous » par « elles » : imaginez que ce sont des sœurs qui découvrent le livre. Vous ferez toutes les modifications nécessaires. <span class="pts">(10 points)</span></p>
<blockquote class="extrait">« Nous allâmes ravis dans un coin nous asseoir.<br>Des estampes partout ! quel bonheur ! quel délire !<br>Nous l’ouvrîmes alors tout grand sur nos genoux,<br>Et, dès le premier mot, il nous parut si doux<br>Qu’oubliant de jouer, nous nous mîmes à lire. »</blockquote>`
      },
      {
        titre: `Dictée`,
        points: 10,
        type: 'dictee',
        html: `<p class="consigne">Durée : 20 minutes. Faites-vous dicter le texte par quelqu’un (il le trouvera sur la page du corrigé, avec les mots à écrire au tableau), ou utilisez les boutons « Lecture », « Dictée » et « Relecture » ci-dessus : le site lit le texte comme le ferait le surveillant. Ne lisez pas le texte avant d’avoir écrit votre dictée.</p>
<p>Ce texte est extrait de la préface des <i>Contemplations</i>, dans laquelle Victor Hugo présente son recueil au lecteur.</p>
<p>Lors de la dictée, on procède successivement : 1. à une lecture préalable, lente et bien articulée du texte ; 2. à la dictée effective du texte, en précisant la ponctuation et en marquant nettement les liaisons ; 3. à la relecture, sans préciser cette fois-ci la ponctuation mais en marquant toujours les liaisons.</p>
<p>Écrivez <b>une ligne sur deux</b>. Recopiez exactement les mots écrits au tableau. Après la relecture, on ne répond plus à aucune question : gardez quelques minutes pour vous relire.</p>`
      },
      {
        titre: `Rédaction`,
        points: 40,
        html: `<p>Vous traiterez <b>à votre choix</b> l’un des sujets suivants :</p>
<p><b>Sujet d’imagination</b></p>
<p>Enfant, vous avez découvert, caché dans un grenier, une armoire ou une cave, un objet qui vous a émerveillé(e) : un livre, une boîte, des photographies, un vieux jouet… Racontez cette découverte et ce qu’elle vous a fait ressentir, en vous inspirant du poème de Victor Hugo.</p>
<p>Vous pouvez écrire en prose ou en vers. Si vous rédigez en prose, votre texte comportera 35 lignes au moins ; si vous rédigez en vers, votre texte comportera 20 vers au moins.</p>
<p><b>Sujet de réflexion</b></p>
<p>Selon vous, la lecture peut-elle être, comme pour Victor Hugo et ses frères, un plaisir aussi grand que le jeu ?</p>
<p>Vous présenterez votre réflexion dans un développement argumenté et organisé. Vous illustrerez votre propos à l’aide d’exemples issus de vos lectures et de votre culture personnelle (romans, bandes dessinées, films, jeux…).</p>
<p>Votre rédaction fera au moins 30 lignes.</p>
<p class="consigne">Afin de respecter l’anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d’un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: ``,
    dictee: {
      mots: [`insensé`, `individualité`],
      texte: "Est-ce donc la vie d’un homme ? Oui, et la vie des autres hommes aussi. Nul de nous n’a l’honneur d’avoir une vie qui soit à lui. Ma vie est la vôtre, votre vie est la mienne, vous vivez ce que je vis ; la destinée est une. Prenez donc ce miroir, et regardez-vous-y. On se plaint quelquefois des écrivains qui disent moi. Parlez-nous de nous, leur crie-t-on. Hélas ! quand je vous parle de moi, je vous parle de vous. Comment ne le sentez-vous pas ? Ah ! insensé, qui crois que je ne suis pas toi !\nCe livre contient, nous le répétons, autant l’individualité du lecteur que celle de l’auteur.",
      source: `D’après Victor Hugo, préface des Contemplations, 1856.`
    },
    corrige: [
      {
        titre: `I. Compréhension et compétences d’interprétation`,
        html: `<div class="rep"><p class="rq"><b>1.</b> Un autre titre pour le poème.</p>
<p>Je propose le titre « Le livre du grenier ». En effet, le poème raconte un souvenir d’enfance précis : trois frères qui jouent « au grenier du couvent » (v. 7) découvrent « Sur le haut d’une armoire un livre inaccessible » (v. 9), réussissent à l’attraper (« Nous grimpâmes un jour jusqu’à ce livre noir », v. 10) et se mettent à le lire avec passion : « Qu’oubliant de jouer, nous nous mîmes à lire » (v. 18). Ce titre montre que le livre est le véritable héros du poème : c’est lui qui transforme une journée de jeux en découverte du bonheur de lire.</p>
<p class="attendu"><b>On attend :</b> un titre qui montre la compréhension de la situation (un souvenir d’enfance, la découverte d’un livre, de la lecture), justifié par des éléments précis du texte.</p>
<p class="valorise"><b>On valorise :</b> un titre qui fait entendre la dimension poétique du texte, par exemple l’émerveillement ou l’image finale de l’oiseau (« Un oiseau dans nos mains », « Le matin où nous avons appris à lire »).</p></div>
<div class="rep"><p class="rq"><b>2.</b> Vers 1 à 9 : l’image de l’enfance.</p>
<p>Le poète donne l’image d’une enfance heureuse et partagée. D’abord, c’est une enfance de jeux et de vie : la mère les invite à jouer (« Jouez », v. 2), les enfants montent « pour jouer au grenier » (v. 7) et ils sont pleins d’énergie, comme le montre leur appétit : « Nous mangions notre pain de si bon appétit, / Que les femmes riaient » (v. 5-6). Ensuite, c’est une enfance vécue à trois, dans une grande complicité : « Mes deux frères et moi » (v. 1), le pronom « nous », qui revient sans cesse (v. 1, 5, 6, 7 et 8), et la place de chacun, « Abel était l’aîné, j’étais le plus petit » (v. 4). Cette liberté reste encadrée par la mère, qui fixe des limites : « mais je défends / Qu’on marche dans les fleurs » (v. 2-3).</p>
<p class="attendu"><b>On attend :</b> deux éléments justifiés : le bonheur et le jeu ; la complicité des trois frères ; la curiosité (« nous regardions souvent », v. 8) ; un cadre familial protecteur.</p>
<p class="valorise"><b>On valorise :</b> la remarque que ces vers sont à l’imparfait, temps de l’habitude, alors que le passé simple du vers 10 (« Nous grimpâmes un jour ») introduit un événement unique.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Vers 10 à 21 : comment le livre transforme les jeux des enfants.</p>
<p>La découverte du livre transforme le jeu en une passion nouvelle, en trois étapes.</p>
<p>D’abord, atteindre le livre devient une aventure. Il est « inaccessible » (v. 9) et les enfants doivent grimper : « Nous grimpâmes un jour jusqu’à ce livre noir » (v. 10). Le poète adulte ne sait même plus comment ils ont fait : « Je ne sais pas comment nous fîmes pour l’avoir » (v. 11). Le livre est un trésor conquis.</p>
<p>Ensuite, le livre émerveille les sens et l’esprit des enfants. Il a une odeur (« Ce vieux livre sentait une odeur d’encensoir », v. 13), des images (« Des estampes partout ! », v. 15), et, dès le premier mot, sa lecture leur procure une grande douceur (« il nous parut si doux », v. 17). Les phrases exclamatives « quel bonheur ! quel délire ! » (v. 15) et l’adjectif « ravis » (v. 14) expriment une joie intense.</p>
<p>Enfin, la lecture remplace le jeu et dure toute la journée : « Qu’oubliant de jouer, nous nous mîmes à lire » (v. 18), « tout le matin » (v. 19), puis « le soir nous le relûmes » (v. 21). Les enfants découvrent des histoires (« Joseph, Ruth et Booz, le bon Samaritain », v. 20), et leur plaisir grandit sans cesse : « toujours plus charmés » (v. 21).</p>
<p class="attendu"><b>On attend :</b> trois éléments justifiés : une aventure pour atteindre le livre ; un émerveillement des sens ; la lecture qui remplace le jeu et devient une passion durable.</p>
<p class="valorise"><b>On valorise :</b> le passage de l’imparfait (habitude) au passé simple (événement) ; l’idée que le livre, d’abord sombre et mystérieux (« livre noir », « Bible », « encensoir »), devient un trésor partagé.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Vers 22 à 24 : le procédé et ce qu’il révèle.</p>
<p>Le poète utilise une comparaison, introduite par l’outil « Tels ». Le comparé est sous-entendu : ce sont les trois frères en train de lire. Le comparant, ce sont des enfants qui ont attrapé « un oiseau des cieux » et qui s’émerveillent de le tenir.</p>
<p>Cette comparaison révèle d’abord que la lecture est un trésor vivant et fragile : le livre devient un oiseau que l’on tient dans ses mains, et les pages ont « la douceur de ses plumes » (v. 24), ce qui fait écho au livre qui leur « parut si doux » (v. 17). Elle montre aussi que la lecture fait rêver : l’« oiseau des cieux » évoque l’envol, la liberté, et même le ciel de la Bible. Enfin, elle insiste sur la joie partagée : les enfants « S’appellent en riant et s’étonnent, joyeux » (v. 23). Placée à la fin du poème, cette image transforme le souvenir en un tableau lumineux : lire, c’est tenir dans ses mains quelque chose qui peut s’envoler.</p>
<p class="attendu"><b>On attend :</b> l’identification de la comparaison (outil « Tels », comparé, comparant) et une explication de son effet : la lecture comme trésor vivant, émerveillement, douceur.</p>
<p class="valorise"><b>On valorise :</b> le lien entre « oiseau des cieux » et l’envol de l’imagination ou le livre sacré ; l’écho « doux » / « douceur » ; la remarque que le présent généralise l’expérience à tous les enfants.</p>
<p class="piege"><b>Piège :</b> parler de métaphore. Il y a un outil de comparaison (« Tels ») : c’est une comparaison.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Partagez-vous l’émerveillement des enfants ? (réponse personnelle)</p>
<p>Exemple de réponse : oui, je partage leur émerveillement, même si mes livres ne ressemblent pas à leur vieille Bible. Le poème me rappelle ces moments où l’on oublie tout le reste parce qu’une histoire nous prend tout entier (« oubliant de jouer », v. 18) : comme les trois frères, qui lisent « tout le matin » (v. 19) et relisent le soir, il m’est arrivé de ne plus pouvoir lâcher un roman. J’aime aussi que la lecture soit présentée comme un plaisir partagé, et pas comme un travail scolaire : les enfants « S’appellent en riant » (v. 23). Pourtant, je comprends que tout le monde ne ressente pas cela : pour certains élèves, lire est d’abord un effort. Le poème montre justement qu’il suffit parfois d’un livre trouvé par hasard pour changer d’avis.</p>
<p class="attendu"><b>On attend :</b> une prise de position personnelle, justifiée par des éléments précis du texte et, si possible, par une expérience de lecture.</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée et sincère ; des remarques qui ne répètent pas les réponses aux questions 1 à 4 (le rôle du hasard, d’un livre difficile d’accès qu’il faut conquérir, du partage).</p></div>
<div class="rep"><p class="rq"><b>6.</b> Le tableau de Vuillard peut-il illustrer le poème ? (trois arguments)</p>
<p>Le tableau montre deux enfants, une petite fille en pleine lumière et un garçon qui appuie sa tête sur sa main, penchés sur un livre ouvert. Les couleurs sont chaudes (brun, rouge), peintes à grandes touches rapides ; la lumière vient de la droite et éclaire les visages, les mains et les pages.</p>
<p>Premier argument : oui, car le tableau montre, comme le poème, des enfants absorbés par leur lecture. Leurs têtes sont penchées vers les pages, rien d’autre ne compte : on pense au vers « Qu’oubliant de jouer, nous nous mîmes à lire » (v. 18).</p>
<p>Deuxième argument : oui, car l’atmosphère est la même : intime, chaleureuse et lumineuse. Les tons chauds et la lumière posée sur le livre traduisent la « douceur » (v. 24) et le « bonheur » (v. 15) du poème, et les enfants sont serrés l’un contre l’autre, comme les frères assis « dans un coin » (v. 14).</p>
<p>Troisième argument : en revanche, certains détails ne correspondent pas. Le tableau montre deux enfants, dont une fille, et non trois frères ; on ne voit ni le grenier, ni l’armoire, ni les « estampes » (v. 15). Surtout, la scène est calme et silencieuse, alors que le poème exprime une joie bruyante : « quel bonheur ! quel délire ! » (v. 15), « S’appellent en riant » (v. 23).</p>
<p>Ce tableau peut donc illustrer le poème, à condition de retenir l’essentiel : le moment où des enfants se laissent captiver par un livre.</p>
<p class="attendu"><b>On attend :</b> trois arguments, chacun appuyé sur un détail précis de l’image (position des enfants, lumière, couleurs, livre) et sur une citation du texte ; des points communs et éventuellement des différences.</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée ; le lien entre la touche rapide et floue du peintre et le caractère d’un souvenir lointain ; le vocabulaire de l’analyse d’image.</p></div>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        html: `<div class="rep"><p class="rq"><b>7. a)</b> L’expansion du nom « livre ».</p>
<p>« vieux » est un adjectif qualificatif, épithète du nom « livre » (placé avant le nom). Manipulation : on peut le supprimer (« Ce livre sentait… ») : c’est une expansion du nom.</p></div>
<div class="rep"><p class="rq"><b>7. b)</b> L’expansion du nom « odeur ».</p>
<p>« d’encensoir » est un groupe nominal prépositionnel (la préposition « de », élidée en « d’ », suivie du nom « encensoir »). Il est complément du nom « odeur ».</p></div>
<div class="rep"><p class="rq"><b>7. c)</b> Ajouter une relative au nom « livre ».</p>
<p>Exemples : « Ce vieux livre <u>qui dormait sur l’armoire</u> sentait une odeur d’encensoir. » ou « Ce vieux livre, <u>que nous avions tant désiré</u>, sentait une odeur d’encensoir. »</p>
<p class="attendu"><b>On attend :</b> une relative correcte (pronom relatif + verbe conjugué), qui complète bien le nom « livre », et un vers recopié sans faute.</p></div>
<div class="rep"><p class="rq"><b>8.</b> La formation de « inaccessible ».</p>
<p><b>a)</b> « inaccessible » est formé du préfixe privatif « in- » (qui signifie « ne… pas »), du radical « access- » (que l’on retrouve dans « accès », « accéder ») et du suffixe « -ible », qui indique la possibilité. Le mot signifie « que l’on ne peut pas atteindre » : le livre est posé trop haut, sur une armoire, hors de portée des enfants.</p>
<p><b>b)</b> Mots de la même famille : accès, accéder, accessible, accessibilité.</p></div>
<div class="rep"><p class="rq"><b>9.</b> Les valeurs du présent.</p>
<p><b>a)</b> « sais » et « souviens » sont au présent d’énonciation : c’est le poète adulte qui parle, au moment où il écrit (en 1855). Il oppose ce qu’il a oublié et ce dont il se souvient, alors que les actions d’autrefois sont au passé simple (« nous fîmes »).</p>
<p><b>b)</b> « s’appellent » et « s’étonnent » sont au présent de vérité générale : la comparaison décrit ce que font tous les enfants qui attrapent un oiseau, à toutes les époques.</p></div>
<div class="rep"><p class="rq"><b>10.</b> L’accord de « ravis » et de « charmés ».</p>
<p>« ravis » et « charmés » sont des participes passés employés comme adjectifs, sans auxiliaire. Ils s’accordent avec le pronom « nous », qui désigne les trois frères : masculin pluriel, d’où le -s. Vérification : si le poète était seul, on écrirait « J’allai ravi ».</p></div>
<div class="rep"><p class="rq"><b>11.</b> Réécriture : « nous » devient « elles ».</p>
<blockquote class="extrait">« <b>Elles allèrent ravies</b> dans un coin <b>s’</b>asseoir.<br>Des estampes partout ! quel bonheur ! quel délire !<br><b>Elles</b> l’<b>ouvrirent</b> alors tout grand sur <b>leurs</b> genoux,<br>Et, dès le premier mot, il <b>leur</b> parut si doux<br>Qu’oubliant de jouer, <b>elles se mirent</b> à lire. »</blockquote>
<p class="bareme">Barème : 11 mots à modifier (Elles, allèrent, ravies, s’, Elles, ouvrirent, leurs, leur, elles, se, mirent). On retire 1 point par forme fausse ou oubliée, et 0,5 point par erreur de copie.</p>
<p class="piege"><b>Pièges :</b> le passé simple à la 3<sup>e</sup> personne du pluriel : elles allèrent, elles ouvrirent, elles se mirent. « ravies » s’accorde au féminin pluriel. « leurs genoux » : déterminant possessif devant un nom pluriel, avec un -s ; « il leur parut » : pronom personnel devant un verbe (= à elles), toujours invariable. « parut » ne change pas : son sujet est « il » (le livre). « tout grand » ne change pas : il se rapporte au livre (« l’ »).</p></div>`
      },
      {
        titre: `Dictée`,
        html: `<p>Le texte de la dictée est rappelé ci-dessus. Voici les principales difficultés.</p>
<div class="rep"><p class="rq"><b>1.</b> Le verbe dont le sujet est « qui »</p>
<p>« des écrivains qui disent » : « qui » reprend « des écrivains », le verbe est au pluriel. « insensé, qui crois » : « qui » reprend « insensé », c’est-à-dire le lecteur que le poète tutoie (« toi ») ; le verbe est donc à la 2<sup>e</sup> personne du singulier, d’où le -s.</p></div>
<div class="rep"><p class="rq"><b>2.</b> « votre » ou « vôtre » ?</p>
<p>« votre vie » : déterminant possessif devant un nom, sans accent. « la vôtre » : pronom possessif (= votre vie), avec un accent circonflexe, comme « la mienne ».</p></div>
<div class="rep"><p class="rq"><b>3.</b> « leur crie-t-on »</p>
<p>« leur » est ici un pronom personnel placé devant un verbe (= crie à eux) : il est toujours invariable, sans -s. Le « t » placé entre deux traits d’union sert seulement à la prononciation, entre deux voyelles.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Les verbes au présent et à l’impératif</p>
<p>« vous vivez ce que je vis » : verbe vivre, 1<sup>re</sup> personne du singulier en -s. « Prenez », « regardez-vous-y », « Parlez-nous » : impératif, avec des traits d’union entre le verbe et les pronoms qui le suivent. « Nul de nous n’a » : « nul » est singulier, donc « a » ; ne pas oublier le « n’ » de la négation.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Les homophones</p>
<p>« On se plaint » : « se » est un pronom réfléchi (on peut dire « je me plains »). « ce que je vis », « ce miroir » : « ce » pronom ou déterminant. « On » pronom (on peut dire « il ») et non « ont ». « quand je vous parle » : conjonction de temps (on peut dire « lorsque »), à ne pas confondre avec « quant » ou « qu’en ».</p></div>
<div class="rep"><p class="rq"><b>6.</b> Le subjonctif et les noms en -ité</p>
<p>« une vie qui soit à lui » : subjonctif présent du verbe être (soit, avec -t). « l’individualité », « l’honneur » : noms féminin et masculin terminés par -té et -eur, sans -e final.</p></div>
<p class="bareme">Barème indicatif pour s’entraîner : on part de 10 points ; on retire 1 point par erreur d’orthographe grammaticale (accord, terminaison de verbe, homophone) et 0,5 point par erreur d’orthographe lexicale (mot mal écrit, accent oublié).</p>`
      },
      {
        titre: `Rédaction`,
        html: `<p><b>Sujet d’imagination : plan possible</b></p>
<p><b>1. Le souvenir revient (présent d’énonciation).</b> « Je me souviens encore de ce mercredi de pluie… » : comme Hugo (« je me souviens bien »), l’adulte annonce son souvenir.</p>
<p><b>2. Le cadre et l’interdit (imparfait).</b> Le grenier, la cave ou l’armoire, la poussière, la lumière ; l’objet longtemps aperçu ou défendu.</p>
<p><b>3. La découverte (passé simple).</b> Le geste pour l’atteindre, l’ouverture, ce que l’on voit, sent, touche : des sensations précises, comme dans le poème (l’odeur d’encensoir, les estampes, la douceur des plumes).</p>
<p><b>4. L’émerveillement.</b> Phrases exclamatives, comparaison ou métaphore ; le temps qui passe sans qu’on s’en aperçoive.</p>
<p><b>5. Ce que l’objet est devenu.</b> Retour au présent : ce que la découverte a changé (un goût pour la lecture, un secret de famille…).</p>
<div class="exemple-redige"><p>La boîte était là, sur la plus haute étagère, derrière les cartons de Noël. Je grimpai sur une chaise bancale et la tirai vers moi dans un nuage de poussière. Elle sentait le vieux papier et la lavande. Quand je soulevai le couvercle, des dizaines de photographies glissèrent sur mes genoux : des visages inconnus, des robes d’un autre siècle, une petite fille qui me ressemblait comme une sœur. Je restai là tout l’après-midi, sans voir la lumière baisser, comme si chaque image ouvrait une porte sur un monde que j’avais toujours ignoré.</p></div>
<p class="attendu"><b>On attend :</b> un récit cohérent, centré sur une découverte et sur les émotions qu’elle provoque ; des liens avec le poème (le lieu caché, l’émerveillement) ; une langue correcte.</p>
<p class="valorise"><b>On valorise :</b> une écriture sensible (sens, images, rythme) ; le choix d’écrire en vers, s’il est réussi ; le regard porté aujourd’hui sur ce souvenir.</p>
<p><b>Sujet de réflexion : plan possible</b></p>
<p><b>Introduction.</b> Amorce : dans « Aux Feuillantines », trois enfants oublient leurs jeux pour lire. Question : la lecture peut-elle procurer autant de plaisir que le jeu ? Annonce du plan.</p>
<p><b>I. Oui, lire est un jeu et une aventure.</b> On s’évade, on vit d’autres vies, on joue un rôle en imagination ; le suspense captive comme une partie. Exemples : un roman d’aventures, une saga fantastique, une bande dessinée.</p>
<p><b>II. Un plaisir qui se partage et qui dure.</b> On en parle, on se prête les livres, on relit (« le soir nous le relûmes ») ; les souvenirs de lecture restent toute la vie, comme pour Hugo.</p>
<p><b>III. Mais un plaisir qui demande un effort.</b> La lecture exige du calme, de l’attention, parfois de la persévérance ; le jeu (sport, jeu vidéo) est plus immédiat. Le plaisir de lire se mérite souvent, comme le livre « inaccessible » qu’il faut aller chercher.</p>
<p><b>Conclusion.</b> La lecture peut être un plaisir aussi grand que le jeu, à condition de trouver le bon livre au bon moment. Ouverture : le rôle des parents, des professeurs, des bibliothèques pour faire naître ce plaisir.</p>
<div class="exemple-redige"><p>Tout d’abord, lire peut être un jeu aussi passionnant qu’une partie entre amis. En effet, le lecteur ne reste pas passif : il imagine les lieux, prend parti pour un personnage, cherche à deviner la suite. Ainsi, dans un roman d’aventures comme <i>L’Île au trésor</i> de Stevenson, on suit le jeune Jim Hawkins avec la même excitation que si l’on cherchait soi-même le trésor. C’est exactement ce que vivent Victor Hugo et ses frères, « oubliant de jouer » (v. 18) : la lecture est devenue leur nouveau jeu. Lire peut donc procurer un plaisir aussi intense que le jeu.</p></div>
<p class="attendu"><b>On attend :</b> un propos construit et argumenté qui répond à la question ; des exemples pertinents et développés ; une langue correcte, des connecteurs logiques.</p>
<p class="valorise"><b>On valorise :</b> la diversité des exemples ; une réponse nuancée (le plaisir et l’effort) ; une langue riche et soignée.</p>
<p class="bareme">Barème indicatif (grille officielle) : 1 à 12 points pour une copie qui ne répond pas au sujet ; 13 à 22 points pour une réponse partielle ; 23 à 34 points pour une réponse satisfaisante ; 35 à 40 points pour une réponse très satisfaisante, riche et bien écrite.</p>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Lire le poème deux fois, en suivant les strophes.</b> Huit tercets : les enfants et leurs jeux (v. 1-9), la conquête du livre (v. 10-12), la lecture (v. 13-21), la comparaison finale (v. 22-24). Ce découpage aide pour les questions 2 à 4.</li>
<li><b>Repérer les temps.</b> Imparfait pour les habitudes (« nous montions »), passé simple pour l’événement (« Nous grimpâmes un jour »), présent pour le poète adulte (« je me souviens ») et pour la vérité générale (v. 22-24).</li>
<li><b>Citer un poème.</b> Je cite entre guillemets avec le numéro du vers : « Des estampes partout ! » (v. 15) ; si je cite deux vers, je les sépare par une barre oblique : « Nous mangions notre pain de si bon appétit, / Que les femmes riaient » (v. 5-6).</li>
<li><b>Rédiger les réponses longues.</b> Une phrase qui répond à la question, puis, pour chaque élément : idée, citation, explication. Pour la question 4 : je nomme la comparaison, je donne l’outil, le comparé et le comparant, puis j’explique ce qu’elle dit de la lecture.</li>
<li><b>Question sur l’image.</b> Je décris d’abord le tableau en deux phrases (personnages, couleurs, lumière), puis je donne trois arguments : deux points communs et une différence, chacun avec un détail de l’image et une citation.</li>
<li><b>Réussir la réécriture.</b> Je souligne tous les « nous » (sujets et compléments), « nos », les verbes et les participes. Je conjugue au passé simple à la 3<sup>e</sup> personne du pluriel (-èrent, -irent) et j’accorde au féminin pluriel. Je vérifie « leur » / « leurs » et les mots qui ne changent pas (« il … parut »).</li>
<li><b>Relire la dictée.</b> Les verbes après « qui » (disent, crois) ; « votre » / « vôtre » ; « leur » devant un verbe ; les traits d’union de l’impératif.</li>
<li><b>Préparer la rédaction.</b> Imagination : un lieu, un objet, des sensations précises, un sentiment qui grandit, comme dans le poème. Réflexion : deux ou trois parties, « oui… mais… », un exemple de lecture précis par paragraphe.</li>
</ol>
<p class="tip">Astuce : dans un poème, le dernier vers ou la dernière image donnent souvent le sens de tout le texte. Ici, l’oiseau tenu dans la main dit ce qu’est la lecture pour le poète.</p>`
  },
{
    id: 'ex-francais-3',
    matiere: 'francais',
    numero: 3,
    titre: `Première rencontre avec la mer`,
    epreuve: `FRANÇAIS`,
    duree: `3 h 00`,
    points: 100,
    pointsRedaction: 0,
    cours: ['fr-ch1', 'fr-ch2', 'fr-ch3', 'fr-ch4', 'fr-ch8', 'fr-ch9'],
    methodes: ['fr-m1', 'fr-m2', 'fr-m3'],
    garde: [
      `Travail sur le texte littéraire et sur l’image : 50 points – 1 h 10`,
      `Dictée : 10 points – 20 minutes`,
      `Rédaction : 40 points – 1 h 30`,
      `Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.`,
      `L’usage de la calculatrice est interdit. L’usage du dictionnaire est autorisé pour la rédaction uniquement.`
    ],
    parties: [
      {
        titre: `Travail sur le texte littéraire et sur l’image — I. Compréhension et compétences d’interprétation`,
        points: 32,
        html: `<p><b>A. Texte littéraire</b></p>
<p>Pierre Loti (1850-1923), de son vrai nom Julien Viaud, est devenu officier de marine et a navigué dans le monde entier. Dans <i>Le Roman d’un enfant</i> (1890), il raconte ses premières années, à Rochefort, près de l’océan Atlantique. Dans ce chapitre, il se souvient de sa toute première rencontre avec la mer.</p>
<ol class="lignes"><li>Je voudrais essayer de dire maintenant l’impression que la mer m’a causée,</li><li>lors de notre première entrevue, — qui fut un bref et lugubre tête-à-tête.</li><li>Par exception, celle-ci est une impression crépusculaire<sup>1</sup> ; on y voyait à</li><li>peine, et cependant l’image apparue fut si intense qu’elle se grava d’un</li><li>seul coup pour jamais. Et j’éprouve encore un frisson rétrospectif<sup>2</sup>, dès que</li><li>je concentre mon esprit sur ce souvenir.</li><li>J’étais arrivé le soir, avec mes parents, dans un village de la côte</li><li>saintongeaise<sup>3</sup>, dans une maison de pêcheurs louée pour la saison des bains<sup>4</sup>.</li><li>Je savais que nous étions venus là pour une chose qui s’appelait la mer,</li><li>mais je ne l’avais pas encore vue (une ligne de dunes me la cachait, à cause</li><li>de ma très petite taille) et j’étais dans une extrême impatience de la</li><li>connaître. Après le dîner donc, à la tombée de la nuit, je m’échappai seul</li><li>dehors. L’air vif, âpre, sentait je ne sais quoi d’inconnu, et un bruit</li><li>singulier, à la fois faible et immense, se faisait derrière les petites</li><li>montagnes de sable auxquelles un sentier conduisait.</li><li>Tout m’effrayait, ce bout de sentier inconnu, ce crépuscule tombant d’un</li><li>ciel couvert, et aussi la solitude de ce coin de village… Cependant, armé</li><li>d’une de ces grandes résolutions subites, comme les bébés les plus timides</li><li>en prennent quelquefois, je partis d’un pas ferme…</li><li>Puis, tout à coup, je m’arrêtai glacé, frissonnant de peur. Devant moi,</li><li>quelque chose apparaissait, quelque chose de sombre et de bruissant qui</li><li>avait surgi de tous les côtés en même temps et qui semblait ne pas finir ;</li><li>une étendue en mouvement qui me donnait le vertige mortel… Évidemment</li><li><i>c’était ça ;</i> pas une minute d’hésitation, ni même d’étonnement <i>que ce fût</i></li><li><i>ainsi</i>, non, rien que de l’épouvante : je <i>reconnaissais</i> et je tremblais.</li><li>C’était d’un vert obscur presque noir ; ça semblait instable, perfide<sup>5</sup>,</li><li>engloutissant ; ça remuait et ça se démenait<sup>6</sup> partout à la fois, avec un air</li><li>de méchanceté sinistre. Au-dessus, s’étendait un ciel tout d’une pièce, d’un</li><li>gris foncé, comme un manteau lourd.</li><li>Très loin, très loin seulement, à d’inappréciables profondeurs d’horizon, on</li><li>apercevait une déchirure, un jour<sup>7</sup> entre le ciel et les eaux, une longue</li><li>fente vide, d’une claire pâleur jaune…</li><li>[…]</li><li>Nous restâmes un moment l’un devant l’autre, moi fasciné par elle. Dès cette</li><li>première entrevue sans doute, j’avais l’insaisissable pressentiment<sup>8</sup> qu’elle</li><li>finirait un jour par me prendre, malgré toutes mes hésitations, malgré</li><li>toutes les volontés qui essayeraient de me retenir… Ce que j’éprouvais en sa</li><li>présence était non seulement de la frayeur, mais surtout une tristesse sans</li><li>nom, une impression de solitude désolée, d’abandon, d’exil… Et je repartis</li><li>en courant, la figure très bouleversée, je pense, et les cheveux tourmentés</li><li>par le vent, avec une hâte extrême d’arriver auprès de ma mère, de</li><li>l’embrasser, de me serrer contre elle ; de me faire consoler de mille</li><li>angoisses anticipées, inexpressibles, qui m’avaient étreint le cœur à la vue</li><li>de ces grandes étendues vertes et profondes.</li></ol>
<p class="source">Pierre Loti, <i>Le Roman d’un enfant</i>, chapitre IV, 1890.</p>
<p class="notes"><sup>1</sup> crépusculaire : qui a lieu au crépuscule, à la tombée du jour.</p>
<p class="notes"><sup>2</sup> rétrospectif : qui concerne le passé ; ici, un frisson provoqué par le souvenir.</p>
<p class="notes"><sup>3</sup> saintongeaise : de la Saintonge, région de l’ouest de la France, au bord de l’océan Atlantique.</p>
<p class="notes"><sup>4</sup> la saison des bains : l’été, période où l’on venait se baigner à la mer.</p>
<p class="notes"><sup>5</sup> perfide : qui trompe, qui cache de mauvaises intentions.</p>
<p class="notes"><sup>6</sup> se démener : s’agiter dans tous les sens.</p>
<p class="notes"><sup>7</sup> un jour : ici, une ouverture qui laisse passer la lumière.</p>
<p class="notes"><sup>8</sup> pressentiment : impression de deviner ce qui va arriver.</p>
<p><b>B. Image</b></p>
<figure class="img-ex"><img src="examens/img/fr-courbet-palavas.jpg" alt="Sur une plage, un homme seul, debout sur des rochers, lève son chapeau vers une mer immense, sous un grand ciel clair."><figcaption>Gustave Courbet, <i>Le Bord de mer à Palavas</i>, 1854, huile sur toile, musée Fabre, Montpellier.</figcaption></figure>
<p class="consigne">Toutes vos réponses doivent être intégralement rédigées. La maîtrise de la langue sera évaluée sur l’ensemble de l’épreuve.</p>
<p class="q"><b>1.</b> Quel souvenir d’enfance le narrateur raconte-t-il dans ce texte ? Montrez, en vous appuyant sur les lignes 1 à 6, que ce souvenir est resté très vivant pour lui. Deux éléments de réponse justifiés par des citations du texte sont attendus. <span class="pts">(4 points)</span></p>
<p class="q"><b>2.</b> Lignes 7 à 19 : dans quel état d’esprit l’enfant part-il à la découverte de la mer ? Deux éléments de réponse justifiés par des citations du texte sont attendus. <span class="pts">(4 points)</span></p>
<p class="q"><b>3.</b> Lignes 26 à 32 : quelle image de la mer le narrateur donne-t-il ? Trois éléments de réponse sont attendus ; justifiez chacun d’eux à l’aide de citations. <span class="pts">(6 points)</span></p>
<p class="q"><b>4.</b> Lignes 20 à 25, de « Puis, tout à coup » à « et je tremblais » : par quels moyens le narrateur fait-il ressentir au lecteur la peur de l’enfant ? Justifiez votre réponse en vous appuyant sur l’identification précise et l’analyse de deux procédés d’écriture. <span class="pts">(6 points)</span></p>
<p class="q"><b>5.</b> Lignes 34 à 44 : selon vous, cette première rencontre avec la mer n’est-elle qu’un souvenir de peur ? Développez une réponse personnelle de quelques phrases, en vous appuyant sur les questions précédentes et sur votre lecture du texte. Vous pouvez tenir compte du fait que Pierre Loti est devenu marin. <span class="pts">(6 points)</span></p>
<p class="q"><b>6.</b> <b>Image.</b> D’après vous, ce tableau de Gustave Courbet pourrait-il illustrer le texte ? Vous développerez votre réponse en vous appuyant sur trois arguments. Chacun devra être justifié en vous référant au texte et à l’image. <span class="pts">(6 points)</span></p>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        points: 18,
        html: `<p class="q"><b>7.</b> Ligne 23 : « une étendue en mouvement qui me donnait le vertige mortel »</p>
<p class="q sous"><b>a)</b> Relevez les deux expansions du nom « étendue ». Donnez la classe grammaticale (nature) et la fonction de chacune. <span class="pts">(2 points)</span></p>
<p class="q sous"><b>b)</b> Quelle est la fonction du mot « mortel » ? Justifiez votre réponse par une manipulation. <span class="pts">(1 point)</span></p>
<p class="q"><b>8.</b> Indiquez la valeur du présent de l’indicatif dans chacun des passages suivants, en justifiant brièvement votre réponse.</p>
<p class="q sous"><b>a)</b> « Et j’éprouve encore un frisson rétrospectif » (ligne 5) <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> « comme les bébés les plus timides en prennent quelquefois » (lignes 18-19) <span class="pts">(1 point)</span></p>
<p class="q"><b>9.</b> Formation des mots.</p>
<p class="q sous"><b>a)</b> Ligne 35 : expliquez la formation du mot « insaisissable », puis son sens dans le texte. <span class="pts">(1 point)</span></p>
<p class="q sous"><b>b)</b> Relevez, dans les lignes 30 à 44, un autre adjectif formé avec le même préfixe et un suffixe de même sens. Expliquez son sens. <span class="pts">(1 point)</span></p>
<p class="q"><b>10.</b> Lignes 42-43 : « mille angoisses anticipées, inexpressibles, qui m’avaient étreint le cœur ». Expliquez pourquoi le participe passé « anticipées » s’accorde, alors que le participe passé « étreint » ne s’accorde pas. <span class="pts">(1 point)</span></p>
<p class="q"><b>11.</b> Réécrivez le passage suivant au présent de l’indicatif. Vous ferez toutes les modifications nécessaires. <span class="pts">(10 points)</span></p>
<blockquote class="extrait">« Puis, tout à coup, je m’arrêtai glacé, frissonnant de peur. Devant moi, quelque chose apparaissait, quelque chose de sombre et de bruissant qui avait surgi de tous les côtés en même temps et qui semblait ne pas finir ; une étendue en mouvement qui me donnait le vertige mortel… […] C’était d’un vert obscur presque noir ; ça semblait instable, perfide, engloutissant ; ça remuait et ça se démenait partout à la fois, avec un air de méchanceté sinistre. Au-dessus, s’étendait un ciel tout d’une pièce, d’un gris foncé, comme un manteau lourd. »</blockquote>`
      },
      {
        titre: `Dictée`,
        points: 10,
        type: 'dictee',
        html: `<p class="consigne">Durée : 20 minutes. Faites-vous dicter le texte par quelqu’un (il le trouvera sur la page du corrigé, avec les mots à écrire au tableau), ou utilisez les boutons « Lecture », « Dictée » et « Relecture » ci-dessus : le site lit le texte comme le ferait le surveillant. Ne lisez pas le texte avant d’avoir écrit votre dictée.</p>
<p>Ce texte est extrait du chapitre suivant du <i>Roman d’un enfant</i> : le narrateur, malade et couché, voit entrer sa mère dans sa chambre.</p>
<p>Lors de la dictée, on procède successivement : 1. à une lecture préalable, lente et bien articulée du texte ; 2. à la dictée effective du texte, en précisant la ponctuation et en marquant nettement les liaisons ; 3. à la relecture, sans préciser cette fois-ci la ponctuation mais en marquant toujours les liaisons.</p>
<p>Écrivez <b>une ligne sur deux</b>. Recopiez exactement les mots écrits au tableau. Après la relecture, on ne répond plus à aucune question : gardez quelques minutes pour vous relire.</p>`
      },
      {
        titre: `Rédaction`,
        points: 40,
        html: `<p>Vous traiterez <b>à votre choix</b> l’un des sujets suivants :</p>
<p><b>Sujet d’imagination</b></p>
<p>À votre tour, racontez la première fois que vous avez découvert un paysage ou un spectacle de la nature qui vous a fortement impressionné(e) : la mer, la montagne, la neige, un orage, une forêt la nuit… Comme Pierre Loti, vous ferez partager les sensations et les émotions de l’enfant que vous étiez, puis vous montrerez ce que ce souvenir représente pour vous aujourd’hui.</p>
<p>Votre rédaction comportera 35 lignes au moins.</p>
<p><b>Sujet de réflexion</b></p>
<p>Selon vous, les souvenirs d’enfance font-ils de nous ce que nous sommes ?</p>
<p>Vous présenterez votre réflexion dans un développement argumenté et organisé. Vous illustrerez votre propos à l’aide d’exemples issus de vos lectures et de votre culture artistique personnelle (cinéma, peinture, bande dessinée…). Vous pouvez vous appuyer également sur le texte de Pierre Loti.</p>
<p>Votre rédaction fera au moins 30 lignes.</p>
<p class="consigne">Afin de respecter l’anonymat de votre copie, vous ne devez pas signer votre composition, citer un nom, celui d’un camarade ou celui de votre établissement.</p>`
      }
    ],
    annexe: ``,
    dictee: {
      mots: [`l’embrasure`, `surannée`, `un châle en barège (tissu léger)`],
      texte: "La porte s’ouvrit, et ma mère entra, souriante. Oh ! je la revois si bien encore, telle qu’elle m’apparut là, dans l’embrasure de cette porte, arrivant accompagnée d’un peu du soleil et du grand air du dehors. Je retrouve tout, l’expression de son regard rencontrant le mien, le son de sa voix, même les détails de sa chère toilette, qui paraîtrait si drôle et si surannée aujourd’hui. Elle revenait de faire quelque course matinale en ville. Elle avait un chapeau de paille avec des roses jaunes et un châle en barège lilas (c’était l’époque du châle) semé de petits bouquets d’un violet plus foncé.",
      source: `D’après Pierre Loti, Le Roman d’un enfant, 1890.`
    },
    corrige: [
      {
        titre: `I. Compréhension et compétences d’interprétation`,
        html: `<div class="rep"><p class="rq"><b>1.</b> Le souvenir raconté ; lignes 1 à 6 : un souvenir resté vivant.</p>
<p>Le narrateur raconte sa toute première rencontre avec la mer : tout petit, il s’échappe un soir de la maison louée au bord de l’océan, découvre la mer au crépuscule, en est terrifié et revient en courant se réfugier auprès de sa mère. Il montre que ce souvenir n’a rien perdu de sa force. D’abord, il emploie le présent d’énonciation et des adverbes de temps qui relient le passé au moment où il écrit : « Je voudrais essayer de dire maintenant » (l. 1), « j’éprouve encore un frisson rétrospectif, dès que je concentre mon esprit sur ce souvenir » (l. 5-6). Le souvenir agit encore sur son corps : il le fait frissonner, des années plus tard. Ensuite, il insiste sur l’intensité de l’image, comme si elle avait été gravée dans sa mémoire : « l’image apparue fut si intense qu’elle se grava d’un seul coup pour jamais » (l. 4-5). C’est d’autant plus frappant qu’« on y voyait à peine » (l. 3-4) : la scène se passe au crépuscule, mais l’émotion a tout fixé.</p>
<p class="attendu"><b>On attend :</b> une phrase qui résume le souvenir (la première rencontre avec la mer, la peur, la fuite vers la mère), puis deux éléments justifiés : le présent d’énonciation et les mots « maintenant », « encore » ; l’image qui « se grava » pour toujours ; le frisson qui revient.</p>
<p class="valorise"><b>On valorise :</b> la remarque que la mer est présentée comme une personne dès la première phrase (« notre première entrevue », « tête-à-tête », l. 2).</p></div>
<div class="rep"><p class="rq"><b>2.</b> Lignes 7 à 19 : l’état d’esprit de l’enfant.</p>
<p>L’enfant part à la découverte de la mer avec des sentiments mêlés. D’une part, il est impatient et curieux : il ne connaît la mer que par son nom (« une chose qui s’appelait la mer », l. 9) et il est « dans une extrême impatience de la connaître » (l. 11-12), au point de s’échapper seul (« je m’échappai seul dehors », l. 12-13). D’autre part, il a peur de l’inconnu : « Tout m’effrayait » (l. 16). Ses sens perçoivent des choses étranges, une odeur (« L’air vif, âpre, sentait je ne sais quoi d’inconnu », l. 13) et un son (« un bruit singulier, à la fois faible et immense », l. 13-14). Pourtant, il surmonte sa peur : « armé d’une de ces grandes résolutions subites » (l. 17-18), il part « d’un pas ferme » (l. 19), comme un petit soldat.</p>
<p class="attendu"><b>On attend :</b> deux éléments justifiés parmi : la curiosité et l’impatience ; la peur de l’inconnu ; le courage et la détermination.</p>
<p class="valorise"><b>On valorise :</b> la perception du sourire de l’adulte qui se moque tendrement de lui-même (« comme les bébés les plus timides en prennent quelquefois », l. 18-19).</p></div>
<div class="rep"><p class="rq"><b>3.</b> Lignes 26 à 32 : l’image de la mer.</p>
<p>Le narrateur donne de la mer une image inquiétante, en trois traits.</p>
<p>D’abord, c’est une mer sombre, loin de la mer bleue des cartes postales : elle est « d’un vert obscur presque noir » (l. 26), sous un ciel « d’un gris foncé » (l. 28-29). Ces couleurs de nuit créent une atmosphère lugubre.</p>
<p>Ensuite, la mer semble vivante et menaçante, comme un monstre. Le narrateur la personnifie : « ça semblait instable, perfide, engloutissant » (l. 26-27), avec « un air de méchanceté sinistre » (l. 27-28). Elle s’agite sans arrêt : « ça remuait et ça se démenait partout à la fois » (l. 27). L’enfant a l’impression qu’elle veut l’avaler.</p>
<p>Enfin, la mer paraît immense, jusqu’« à d’inappréciables profondeurs d’horizon » (l. 30), et écrasée sous un ciel lourd : « un ciel tout d’une pièce […] comme un manteau lourd » (l. 28-29). Pourtant, une lumière apparaît très loin : « une longue fente vide, d’une claire pâleur jaune » (l. 31-32). Cette « déchirure » (l. 31) à l’horizon ouvre sur l’inconnu et le lointain, qui attireront plus tard le marin.</p>
<p class="attendu"><b>On attend :</b> trois aspects justifiés : une mer sombre ; une mer vivante, agitée et menaçante (personnification) ; une mer immense, écrasée par le ciel, avec une lumière lointaine.</p>
<p class="valorise"><b>On valorise :</b> l’ambivalence de la mer, à la fois menace et appel du lointain ; l’analyse de la comparaison « comme un manteau lourd ».</p></div>
<div class="rep"><p class="rq"><b>4.</b> Lignes 20 à 25 : faire ressentir la peur (deux procédés).</p>
<p>Premier procédé : le champ lexical de la peur, qui passe par le corps. L’enfant s’arrête « glacé, frissonnant de peur » (l. 20), la mer lui donne « le vertige mortel » (l. 23), il ne ressent « rien que de l’épouvante » (l. 25) et finit par trembler : « je tremblais » (l. 25). Ces mots, de plus en plus forts, font éprouver au lecteur la peur physique de l’enfant ; « mortel » est même une hyperbole.</p>
<p>Deuxième procédé : la mer n’est pas nommée. Le narrateur emploie le pronom indéfini « quelque chose », répété (« quelque chose apparaissait, quelque chose de sombre et de bruissant », l. 21), puis le pronom familier « ça » (« <i>c’était ça</i> », l. 24). Comme l’enfant n’a pas encore de mots pour ce qu’il voit, la mer devient une créature mystérieuse, sans visage. Le lecteur voit la scène à travers les yeux de l’enfant (point de vue interne) et partage son angoisse devant l’inconnu.</p>
<p>On peut aussi analyser la rupture brutale « Puis, tout à coup » (l. 20) et la longue phrase coupée de propositions relatives (« qui avait surgi de tous les côtés en même temps et qui semblait ne pas finir », l. 21-22), qui imite une mer qui s’étend sans fin, jusqu’aux points de suspension.</p>
<p class="attendu"><b>On attend :</b> deux procédés nommés précisément, cités et analysés (champ lexical de la peur, hyperbole, répétition de « quelque chose », pronom « ça », rythme de la phrase, points de suspension, italique), avec leur effet sur le lecteur.</p>
<p class="valorise"><b>On valorise :</b> la notion de point de vue interne ; le rôle de l’italique, qui marque la reconnaissance soudaine (« je <i>reconnaissais</i> », l. 25).</p>
<p class="piege"><b>Piège :</b> recopier une liste de mots de peur sans nommer le procédé (« champ lexical ») ni expliquer son effet.</p></div>
<div class="rep"><p class="rq"><b>5.</b> Un souvenir seulement de peur ? (réponse personnelle)</p>
<p>Exemple de réponse : à mon avis, ce souvenir est bien plus qu’un souvenir de peur. L’enfant est effrayé, mais il est aussi « fasciné » (l. 34) : il reste un moment face à la mer, « l’un devant l’autre » (l. 34), comme devant une personne qui l’attire. Surtout, il a « l’insaisissable pressentiment qu’elle finirait un jour par me prendre » (l. 35-36). Quand on sait que Pierre Loti est devenu officier de marine, cette phrase prend tout son sens : la mer l’a vraiment pris, puisqu’il a passé sa vie à naviguer. Ce premier contact annonce donc son destin. Enfin, la « tristesse sans nom » et l’impression « d’exil » (l. 38-39) me touchent : elles annoncent peut-être la solitude des longs voyages loin de sa famille. Ce texte m’a ému(e), car il montre qu’un enfant peut avoir peur de ce qu’il aimera le plus.</p>
<p class="attendu"><b>On attend :</b> une prise de position personnelle, justifiée par des éléments précis du texte, notamment de la fin.</p>
<p class="valorise"><b>On valorise :</b> le lien avec la vie de Loti ; l’idée que le narrateur adulte relit son souvenir en connaissant la suite ; une réponse nuancée (peur et fascination).</p></div>
<div class="rep"><p class="rq"><b>6.</b> Le tableau de Courbet peut-il illustrer le texte ? (trois arguments)</p>
<p>Le tableau montre, au premier plan, un homme seul debout sur des rochers, au bord d’une plage. Il lève son chapeau vers la mer, qui s’étend jusqu’à l’horizon, sous un très grand ciel clair. Le personnage est minuscule par rapport au paysage.</p>
<p>Premier argument : oui, car le tableau montre un face-à-face solitaire avec une mer immense. Comme l’enfant qui s’est échappé « seul » (l. 12), le personnage est seul devant les flots, qui semblent « ne pas finir » (l. 22) ; on pense à la phrase « Nous restâmes un moment l’un devant l’autre » (l. 34).</p>
<p>Deuxième argument : oui, car le geste du personnage fait de la mer une personne. Il la salue en levant son chapeau, comme on salue quelqu’un que l’on rencontre : c’est exactement l’idée de « notre première entrevue » et du « tête-à-tête » (l. 2). La bande claire de l’horizon rappelle aussi la « claire pâleur jaune » aperçue très loin (l. 32).</p>
<p>Troisième argument : non, car l’atmosphère est très différente. Le tableau est lumineux, avec un ciel bleu pâle et une mer calme, alors que la scène du texte se passe au crépuscule, devant une mer « d’un vert obscur presque noir » (l. 26) et sous un ciel « d’un gris foncé » (l. 28-29). Le personnage est un adulte qui semble heureux, tandis que l’enfant est terrifié (« je tremblais », l. 25) et finit même par repartir « en courant » (l. 40).</p>
<p>Le tableau pourrait donc illustrer la fin de l’histoire plutôt que le souvenir lui-même : l’adulte devenu marin, qui salue enfin la mer qu’il a appris à aimer.</p>
<p class="attendu"><b>On attend :</b> trois arguments, chacun appuyé sur un détail précis de l’image (personnage, geste, horizon, couleurs, lumière) et sur une citation du texte ; des points communs et des différences.</p>
<p class="valorise"><b>On valorise :</b> une réponse nuancée ; l’idée que le tableau montre le marin adulte que l’enfant est devenu ; savoir que l’on considère souvent que Courbet s’est représenté lui-même saluant la Méditerranée.</p></div>`
      },
      {
        titre: `II. Grammaire et compétences linguistiques`,
        html: `<div class="rep"><p class="rq"><b>7. a)</b> Les deux expansions du nom « étendue ».</p>
<p>« en mouvement » est un groupe nominal prépositionnel (la préposition « en » suivie du nom « mouvement ») : il est complément du nom « étendue ».</p>
<p>« qui me donnait le vertige mortel » est une proposition subordonnée relative, introduite par le pronom relatif « qui », qui a pour antécédent « une étendue en mouvement ». Elle est épithète du nom « étendue » : elle le complète directement, sans virgule. Dans la relative, « qui » est sujet du verbe « donnait ».</p></div>
<div class="rep"><p class="rq"><b>7. b)</b> La fonction de « mortel ».</p>
<p>« mortel » est un adjectif qualificatif, épithète du nom « vertige ». Manipulation : on peut le supprimer (« qui me donnait le vertige ») : la phrase reste correcte, c’est donc une expansion du nom, placée directement à côté de lui, sans préposition.</p></div>
<div class="rep"><p class="rq"><b>8.</b> Les valeurs du présent.</p>
<p><b>a)</b> « j’éprouve encore » : présent d’énonciation. C’est le narrateur adulte qui parle au moment où il écrit ; l’adverbe « encore » montre que l’émotion du passé dure jusqu’à aujourd’hui (et « dès que » indique qu’elle revient à chaque fois qu’il y pense).</p>
<p><b>b)</b> « comme les bébés les plus timides en prennent quelquefois » : présent de vérité générale. Le narrateur fait une remarque valable pour tous les petits enfants, à toutes les époques, et non pour lui seul.</p></div>
<div class="rep"><p class="rq"><b>9.</b> La formation des mots.</p>
<p><b>a)</b> « insaisissable » est formé du préfixe privatif « in- » (« ne… pas »), du radical « saisiss- » (du verbe saisir) et du suffixe « -able », qui indique la possibilité. Le mot signifie « que l’on ne peut pas saisir » : ici, le pressentiment est vague, l’enfant ne peut ni le comprendre clairement ni l’expliquer.</p>
<p><b>b)</b> « inappréciables » (l. 30) : préfixe « in- » + radical « appréci- » (apprécier, évaluer) + suffixe « -able » : des profondeurs que l’on ne peut pas mesurer, immenses. On accepte aussi « inexpressibles » (l. 43) : préfixe « in- » + radical « express- » (exprimer) + suffixe « -ible » : des angoisses que l’on ne peut pas exprimer avec des mots.</p>
<p class="piege"><b>Piège :</b> « inconnu » commence aussi par « in- », mais il n’a pas de suffixe de possibilité.</p></div>
<div class="rep"><p class="rq"><b>10.</b> « anticipées » s’accorde, « étreint » ne s’accorde pas.</p>
<p>« anticipées » est un participe passé employé seul, sans auxiliaire : il s’accorde comme un adjectif avec le nom « angoisses » (féminin pluriel). « étreint » est conjugué avec l’auxiliaire avoir (« avaient étreint », plus-que-parfait) : il ne s’accorde jamais avec le sujet, et son complément d’objet direct, « le cœur », est placé après le verbe ; il n’y a donc pas d’accord.</p></div>
<div class="rep"><p class="rq"><b>11.</b> Réécriture au présent de l’indicatif.</p>
<blockquote class="extrait">« Puis, tout à coup, je m’<b>arrête</b> glacé, frissonnant de peur. Devant moi, quelque chose <b>apparaît</b>, quelque chose de sombre et de bruissant qui <b>a surgi</b> de tous les côtés en même temps et qui <b>semble</b> ne pas finir ; une étendue en mouvement qui me <b>donne</b> le vertige mortel… […] <b>C’est</b> d’un vert obscur presque noir ; ça <b>semble</b> instable, perfide, engloutissant ; ça <b>remue</b> et ça se <b>démène</b> partout à la fois, avec un air de méchanceté sinistre. Au-dessus, s’<b>étend</b> un ciel tout d’une pièce, d’un gris foncé, comme un manteau lourd. »</blockquote>
<p class="bareme">Barème : 1 point par forme correcte (arrête, apparaît, a surgi, semble, donne, C’est, semble, remue, démène, étend : 10 formes) ; on retire 0,5 point par erreur de copie. On accepte « apparait » (orthographe rectifiée de 1990) et « surgit ».</p>
<p class="piege"><b>Pièges :</b> le plus-que-parfait « avait surgi » exprime une action antérieure : au présent, il devient un passé composé, « a surgi ». « se démène » prend un accent grave, comme « mener » (il mène). « s’étend » : verbe en -dre, sans -t à la 3<sup>e</sup> personne (il étend). « apparaît » garde l’accent circonflexe sur le i devant le t. Le sujet de « s’étend » est inversé : « un ciel », au singulier. « ça » est un pronom de la 3<sup>e</sup> personne du singulier.</p></div>`
      },
      {
        titre: `Dictée`,
        html: `<p>Le texte de la dictée est rappelé ci-dessus. Voici les principales difficultés.</p>
<div class="rep"><p class="rq"><b>1.</b> Le passé simple</p>
<p>« La porte s’ouvrit », « ma mère entra », « elle m’apparut » : 3<sup>e</sup> personne du singulier du passé simple. Ouvrir fait « il ouvrit », entrer « il entra » (1<sup>er</sup> groupe, sans -t), apparaître « il apparut ».</p></div>
<div class="rep"><p class="rq"><b>2.</b> Les participes et les adjectifs qui s’accordent</p>
<p>« souriante » s’accorde avec « ma mère » (féminin). « arrivant accompagnée » : « accompagnée » est un participe passé employé seul, accordé avec « elle » (féminin singulier). « sa chère toilette […] si surannée » : féminin singulier. « un châle […] semé de petits bouquets » : « semé » s’accorde avec « châle » (masculin singulier). « des roses jaunes », « petits bouquets » : pluriel.</p></div>
<div class="rep"><p class="rq"><b>3.</b> Les participes présents</p>
<p>« arrivant », « rencontrant » : ce sont des participes présents, terminés par -ant ; ils sont toujours invariables.</p></div>
<div class="rep"><p class="rq"><b>4.</b> Conditionnel ou imparfait ?</p>
<p>« qui paraîtrait si drôle […] aujourd’hui » : conditionnel présent (-rait), avec l’accent circonflexe de « paraître ». « Elle revenait », « Elle avait », « c’était » : imparfait (-ait).</p></div>
<div class="rep"><p class="rq"><b>5.</b> Les homophones</p>
<p>« telle qu’elle m’apparut là » : « telle » s’accorde avec « elle » ; « là » (lieu) prend un accent, on peut dire « ici ». « je la revois » : pronom personnel « la » (= ma mère). « quelque course » : déterminant indéfini au singulier, en un seul mot. « c’était l’époque » : « c’ » = cela.</p></div>
<div class="rep"><p class="rq"><b>6.</b> L’orthographe lexicale</p>
<p>« l’embrasure » (l’ouverture d’une porte ou d’une fenêtre dans le mur), « surannée » (deux n), « châle » (accent circonflexe), « matinale », « aujourd’hui » (apostrophe).</p></div>
<p class="bareme">Barème indicatif pour s’entraîner : on part de 10 points ; on retire 1 point par erreur d’orthographe grammaticale (accord, terminaison de verbe, homophone) et 0,5 point par erreur d’orthographe lexicale (mot mal écrit, accent oublié).</p>`
      },
      {
        titre: `Rédaction`,
        html: `<p><b>Sujet d’imagination : plan possible</b></p>
<p><b>1. L’ouverture (présent d’énonciation).</b> Le narrateur, aujourd’hui, annonce le souvenir et dit qu’il le revoit encore : « Aujourd’hui encore, quand je ferme les yeux… »</p>
<p><b>2. Avant la découverte (imparfait).</b> Le voyage, l’attente, l’impatience ; ce que l’enfant imaginait.</p>
<p><b>3. La découverte (passé simple).</b> Le moment précis où le paysage apparaît : sensations (vue, ouïe, odorat, toucher), comparaisons, personnification.</p>
<p><b>4. Les émotions de l’enfant.</b> Peur, émerveillement, vertige, joie : un vocabulaire précis et varié, des phrases courtes ou exclamatives.</p>
<p><b>5. Le regard d’aujourd’hui.</b> Ce que ce souvenir a changé : un goût, une passion, un métier rêvé, une peur restée.</p>
<div class="exemple-redige"><p>Je devais avoir six ans quand je vis la montagne pour la première fois. Après des heures de voiture, mon père arrêta le moteur au bord d’un lacet et nous fit descendre. L’air était si froid qu’il me piqua les joues. Devant moi, une muraille blanche montait jusqu’au ciel, si haute que je dus renverser la tête pour en voir le sommet. Je restai muet, la main serrée dans celle de ma mère : la montagne me regardait, immobile et indifférente, comme un géant endormi. Aujourd’hui encore, chaque fois que je retrouve ce silence des sommets, je redeviens ce petit garçon minuscule et émerveillé.</p></div>
<p class="attendu"><b>On attend :</b> un récit à la première personne, organisé en paragraphes ; la description d’un paysage et des émotions de l’enfant ; le regard porté aujourd’hui sur ce souvenir ; une langue correcte.</p>
<p class="valorise"><b>On valorise :</b> une description frappante, qui fait appel aux cinq sens ; des images (comparaisons, personnifications) ; l’alternance réussie entre passé et présent d’énonciation.</p>
<p><b>Sujet de réflexion : plan possible</b></p>
<p><b>Introduction.</b> Amorce : Pierre Loti raconte comment, tout petit, il a rencontré la mer, qui a ensuite rempli sa vie de marin. Question : nos souvenirs d’enfance font-ils de nous ce que nous sommes ? Annonce du plan.</p>
<p><b>I. Oui, l’enfance façonne nos goûts et nos choix.</b> Une émotion forte peut décider d’une vocation (Loti et la mer) ; Marcel Pagnol, dans <i>La Gloire de mon père</i>, découvre dans les collines un amour de la Provence qui ne le quittera plus.</p>
<p><b>II. L’enfance laisse aussi des blessures.</b> Peurs, injustices, secrets marquent l’adulte : dans <i>Un Secret</i>, Philippe Grimbert explique comment un secret de famille a pesé sur son enfance.</p>
<p><b>III. Mais nous ne sommes pas prisonniers de notre enfance.</b> On peut changer, se construire par ses rencontres, ses lectures, ses choix ; écrire ses souvenirs, c’est justement les comprendre et les dépasser. Grimbert devient psychanalyste et écrit pour mettre des mots sur le secret.</p>
<p><b>Conclusion.</b> Les souvenirs d’enfance nous construisent en partie, mais nous restons libres de ce que nous en faisons. Ouverture : l’autobiographie comme moyen de se connaître.</p>
<div class="exemple-redige"><p>Tout d’abord, certains souvenirs d’enfance décident de nos goûts et même de notre avenir. En effet, une émotion très forte vécue tôt laisse une trace que le temps n’efface pas. Ainsi, dans <i>Le Roman d’un enfant</i>, Pierre Loti raconte sa première rencontre avec la mer : terrifié mais « fasciné », il a déjà le « pressentiment » qu’elle finira par le « prendre ». Devenu officier de marine, il passera sa vie à naviguer. De même, Marcel Pagnol n’oubliera jamais les collines découvertes à la Bastide-Neuve. Nos souvenirs d’enfance peuvent donc tracer le chemin de toute une vie.</p></div>
<p class="attendu"><b>On attend :</b> un propos construit et argumenté qui répond à la question ; des exemples pertinents et développés ; une langue correcte, des connecteurs logiques.</p>
<p class="valorise"><b>On valorise :</b> la diversité des exemples (lectures, films, peinture) ; une réponse nuancée ; une langue riche et soignée.</p>
<p class="bareme">Barème indicatif (grille officielle) : 1 à 12 points pour une copie qui ne répond pas au sujet ; 13 à 22 points pour une réponse partielle ; 23 à 34 points pour une réponse satisfaisante ; 35 à 40 points pour une réponse très satisfaisante, riche et bien écrite.</p>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Lire le texte en repérant ses étapes.</b> Le narrateur adulte annonce le souvenir (l. 1-6) ; l’enfant part vers la mer (l. 7-19) ; la découverte et la peur (l. 20-32) ; le face-à-face et la fuite vers la mère (l. 34-44). Chaque question porte sur une de ces étapes.</li>
<li><b>Distinguer les deux époques.</b> Le présent d’énonciation (« j’éprouve encore ») est la voix de l’adulte ; le passé simple et l’imparfait racontent l’enfant. La question 5 demande de relier les deux : l’enfant a peur, l’adulte sait qu’il est devenu marin.</li>
<li><b>Rédiger les réponses longues.</b> Une phrase qui répond, puis pour chaque élément : idée, citation courte avec la ligne, explication. Pour la question 3, trois aspects de la mer = trois petits paragraphes.</li>
<li><b>Analyser un procédé.</b> Je cite, je nomme (champ lexical, personnification, hyperbole, pronom indéfini, comparaison), j’explique l’effet sur le lecteur : ici, faire ressentir la peur.</li>
<li><b>Question sur l’image.</b> Je décris le tableau (personnage, geste, lumière), puis je donne deux points communs (solitude face à l’immensité, le salut comme une rencontre) et une différence (la lumière et le calme contre la nuit et la peur).</li>
<li><b>Réussir la réécriture au présent.</b> Je souligne chaque verbe conjugué et je cherche son sujet (« quelque chose », « qui », « ça », « un ciel » inversé). Je conjugue au présent en surveillant les verbes difficiles : apparaître (il apparaît), se démener (il se démène), s’étendre (il s’étend). Le plus-que-parfait devient un passé composé.</li>
<li><b>Relire la dictée.</b> Passé simple (ouvrit, entra, apparut) ; accords des participes (accompagnée, semé) ; participes présents invariables ; conditionnel « paraîtrait ».</li>
<li><b>Préparer la rédaction.</b> Imagination : cinq étapes, les cinq sens, le regard d’aujourd’hui à la fin. Réflexion : « oui… mais… », un exemple précis par paragraphe (Loti, Pagnol, Grimbert).</li>
</ol>
<p class="tip">Astuce : quand un texte décrit un paysage, cherchez si l’auteur le transforme en personnage (personnification). C’est souvent la clé des questions sur les émotions du narrateur.</p>`
  }
);
