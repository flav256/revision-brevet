/* ============================================================
   data.js — LE SEUL FICHIER À MODIFIER

   Tout le contenu du site est ici. Pour ajouter un chapitre ou
   une évaluation, copie un bloc existant et change le texte.
   Pas besoin de toucher aux autres fichiers.

   Après avoir modifié ce fichier : sauvegarde, puis reglisse le
   dossier sur Netlify. C'est tout.
   ============================================================ */

const DATA = {

  /* --- LES MATIÈRES -------------------------------------------------
     id       : identifiant court, sans espace ni accent
     nom      : ce qui s'affiche
     couleur  : la couleur de la pastille
  ------------------------------------------------------------------ */
  matieres: [
    { id: 'histoire',  nom: 'Histoire-Géo', couleur: '#FF9500' },
    { id: 'francais',  nom: 'Français',     couleur: '#FF375F' },
    { id: 'maths',     nom: 'Maths',        couleur: '#0A84FF' },
    { id: 'anglais',   nom: 'Anglais',      couleur: '#BF5AF2' },
    { id: 'svt',       nom: 'SVT',          couleur: '#30D158' },
    { id: 'physique',  nom: 'Physique-Chimie', couleur: '#64D2FF' },
    { id: 'espagnol',  nom: 'Espagnol',     couleur: '#FFD60A' },
    { id: 'techno',    nom: 'Techno',       couleur: '#5E5CE6' }
  ],

  /* --- LES ÉVALUATIONS ----------------------------------------------
     date      : format AAAA-MM-JJ
     chapitres : la liste des id de chapitres à réviser
  ------------------------------------------------------------------ */
  evaluations: [
    {
      id: 'ev-hg-1',
      matiere: 'histoire',
      titre: 'Évaluation d\'Histoire',
      date: '2026-09-16',
      chapitres: ['hg-ch1'],
      info: 'Questions de cours, dates, vocabulaire et étude de document.'
    },
    {
      id: 'ev-fr-1',
      matiere: 'francais',
      titre: "Évaluation de français",
      date: '2026-09-21',
      chapitres: ['fr-ch1'],
      info: "La formation des mots : radical, familles de mots, préfixes, suffixes et mots composés."
    },
    {
      id: 'ev-fr-2',
      matiere: 'francais',
      titre: "Évaluation de grammaire",
      date: '2026-09-22',
      chapitres: ['fr-ch3'],
      info: "Les classes grammaticales et les expansions du nom : épithète, complément du nom, apposition et proposition subordonnée relative."
    },
    {
      id: 'ev-es-1',
      matiere: 'espagnol',
      titre: "Évaluation d'espagnol",
      date: '2026-09-22',
      chapitres: ['es-ch2'],
      info: "Estar + gerundio : formation régulière et irrégulière, position du pronom réfléchi, vocabulaire des vacances et de la plage."
    },
    {
      id: 'ev-fr-4',
      matiere: 'francais',
      titre: "Évaluation de grammaire",
      date: '2026-10-06',
      chapitres: ['fr-ch4'],
      info: "Le présent de l'indicatif : valeurs temporelles, aspectuelles et stylistiques, conjugaison selon le groupe du verbe."
    },
    {
      id: 'ev-fr-5',
      matiere: 'francais',
      titre: "Analyse de texte",
      date: '2026-10-05',
      chapitres: ['fr-ch6'],
      info: "Analyse de l'extrait d'Un Secret où le narrateur découvre la peluche au grenier."
    },
    {
      id: 'ev-fr-6',
      matiere: 'francais',
      titre: "Lecture : La Gloire de mon père",
      date: '2026-10-20',
      chapitres: ['fr-ch7'],
      info: "Avoir lu La Gloire de mon père, de Marcel Pagnol."
    },
    {
      id: 'ev-fr-7',
      matiere: 'francais',
      titre: "Évaluation de français — séquence 1",
      date: '2026-10-26',
      chapitres: ['fr-ch8'],
      info: "Évaluation sommative de type brevet : compréhension et étude de la langue. Revoir les procédés d'écriture."
    }
  ],

  /* --- LES CHAPITRES ------------------------------------------------ */
  chapitres: [
    {
      id: 'hg-ch1',
      matiere: 'histoire',
      numero: 'Chapitre 1',
      titre: 'Civils et militaires dans la Première Guerre mondiale',
      periode: '1914 – 1918',
      theme: 'Thème 1 — L\'Europe, un théâtre majeur des guerres totales (1914-1945)',

      /* Les 5 choses à savoir si tu révises 3 minutes avant */
      essentiel: [
        'La guerre éclate le 28 juin 1914 après l\'attentat de Sarajevo, à cause des tensions entre puissances et du jeu des alliances.',
        'Trois phases : mouvement (1914), position dans les tranchées (1915-1918), puis de nouveau mouvement (1918).',
        'Verdun (1916) est le symbole de la violence de masse subie par les soldats.',
        'C\'est une guerre totale : l\'arrière est mobilisé (usines, femmes, propagande), et les civils en sont victimes — jusqu\'au génocide arménien.',
        'Elle se termine le 11 novembre 1918 et redessine l\'Europe avec le traité de Versailles (28 juin 1919).'
      ],

      sections: [
        {
          titre: 'L\'Europe en 1914',
          points: [
            'L\'Europe domine le monde, mais des tensions existent entre les puissances : coloniales, nationalistes et technologiques.',
            'Deux systèmes d\'alliances se font face : la <b>Triple-Entente</b> (France, Royaume-Uni, Russie) et la <b>Triple Alliance</b> (Empire allemand, Empire austro-hongrois, Italie).',
            'L\'Italie change de camp en 1915 et rejoint l\'Entente.'
          ]
        },
        {
          titre: 'Le déclenchement de la guerre',
          points: [
            'Le <b>28 juin 1914</b>, un nationaliste serbe assassine l\'héritier du trône d\'Autriche-Hongrie à Sarajevo, en Bosnie : c\'est l\'<b>attentat de Sarajevo</b>.',
            'L\'Autriche-Hongrie déclare la guerre à la Serbie. La Russie, qui protège la Serbie, déclare la guerre à l\'Autriche-Hongrie : le système des alliances entraîne toute l\'Europe.',
            'La guerre débute en <b>août 1914</b>. Avec la participation des colonies, puis des États-Unis en 1917, le conflit devient mondial.'
          ]
        },
        {
          titre: 'Les trois grandes phases',
          points: [
            '<b>1<sup>re</sup> phase — guerre de mouvement</b> (août-décembre 1914) : les armées lancent des offensives pour gagner du territoire. Bataille de la Marne, septembre 1914.',
            '<b>2<sup>e</sup> phase — guerre de position</b> (1915 - mars 1918) : les soldats s\'enterrent dans les tranchées et défendent le terrain. Batailles de Verdun (février-décembre 1916) et de la Somme (juillet-novembre 1916).',
            '<b>1917, année charnière</b> : les États-Unis entrent en guerre aux côtés de l\'Entente en avril, tandis que la Russie quitte le conflit (traité de Brest-Litovsk, mars 1918).',
            '<b>3<sup>e</sup> phase — retour de la guerre de mouvement</b> (mars-novembre 1918) : une contre-offensive alliée fait reculer l\'Allemagne.',
            'L\'Allemagne signe l\'<b>armistice le 11 novembre 1918</b>, dans un wagon à Rethondes, en forêt de Compiègne.'
          ]
        },
        {
          titre: 'Verdun, symbole de la violence de masse',
          points: [
            'La bataille dure toute l\'année <b>1916</b>, de février à décembre, dans le Nord-Est de la France (en Lorraine), près de la frontière allemande.',
            'Elle oppose les Français aux Allemands.',
            'La <b>Voie sacrée</b> est la seule route qui ravitaille Verdun en hommes et en munitions, jour et nuit. La <b>noria</b> désigne cette rotation continue des camions et des soldats.',
            'Bilan : environ <b>163 000 morts côté français</b> et <b>143 000 côté allemand</b>.'
          ]
        },
        {
          titre: 'Au front : les violences contre les soldats',
          points: [
            'C\'est une <b>guerre industrielle</b> : mitrailleuses, obus d\'artillerie, lance-flammes, obus à gaz asphyxiants. À la fin de la guerre apparaissent les tanks et l\'aviation de bombardement.',
            'Une guerre meurtrière : <b>10 millions de morts</b> et 6 millions de mutilés, appelés les « <b>gueules cassées</b> ». Les soldats sortent traumatisés.',
            'Les <b>poilus</b> vivent enterrés, les pieds dans la boue, au milieu des rats et des poux, souffrant du froid, de la faim et du manque de sommeil.',
            'Ils tiennent grâce à leurs camarades et aux liens avec l\'arrière : lettres (contrôlées) et permissions.',
            'En <b>1917</b>, la lassitude provoque des <b>mutineries</b> : certains régiments refusent de monter au combat.'
          ]
        },
        {
          titre: 'À l\'arrière : une guerre totale',
          points: [
            'Une <b>guerre totale</b> mobilise toutes les ressources du pays, pas seulement l\'armée.',
            '<b>Mobilisation économique</b> : emprunts, souscriptions, hausse des impôts. Les usines sont reconverties dans l\'armement — Renault produit des chars, des moteurs d\'avion et des millions d\'obus. C\'est une économie de guerre.',
            '<b>Mobilisation humaine</b> : à l\'arrière, les femmes et les hommes âgés remplacent ceux partis au front. Les ouvrières des usines d\'armes sont appelées les « <b>munitionnettes</b> ».',
            '<b>Mobilisation des esprits</b> : propagande (le « <b>bourrage de crâne</b> ») et censure. Les lettres des soldats sont contrôlées, la presse censurée, et l\'école met en avant le sacrifice des soldats.',
            '<b>Les civils victimes</b> : bombardements près du front, rationnement obligatoire à cause des pénuries, réquisitions et travaux forcés dans les zones occupées (Belgique, Nord de la France, Serbie).'
          ]
        },
        {
          titre: 'Le génocide arménien',
          points: [
            'En <b>1915-1916</b>, le gouvernement turc organise l\'extermination programmée du peuple arménien dans l\'Empire ottoman.',
            'Les Arméniens, une minorité chrétienne, sont accusés de comploter avec l\'ennemi.',
            'Le génocide commence par l\'arrestation et l\'exécution des intellectuels, puis se poursuit par des déportations et des massacres.',
            'Il fait plus de <b>1,2 million de morts</b>. C\'est le premier génocide du XX<sup>e</sup> siècle.'
          ]
        },
        {
          titre: 'Les conséquences de la guerre',
          points: [
            '<b>Bilan humain</b> : 10 millions de morts dont près de 9 millions de soldats, 21 millions de blessés et de mutilés, 3 millions de veuves et 6 millions d\'orphelins. Pour ceux qui l\'ont vécue, la guerre doit être « la <b>Der des Der</b> ».',
            '<b>Bilan moral</b> : les esprits et les corps sont durablement marqués. Des monuments aux morts sont érigés dans toutes les villes, ainsi que la tombe du Soldat inconnu. Le peintre allemand <b>Otto Dix</b>, engagé volontaire, peint les combats puis les anciens combattants mutilés.',
            '<b>Bilan matériel</b> : les territoires du front sont ravagés, l\'Europe est endettée et doit se reconstruire. Les <b>États-Unis</b>, préservés des combats, deviennent la première puissance mondiale.'
          ]
        },
        {
          titre: 'Le traité de Versailles et la nouvelle Europe',
          points: [
            'Signé le <b>28 juin 1919</b>, il est imposé par les vainqueurs. L\'Allemagne, humiliée, parle d\'un « <b>Diktat</b> ».',
            'L\'Allemagne est jugée responsable de la guerre : son armée est réduite à <b>100 000 hommes</b>, la <b>Rhénanie</b> est démilitarisée, elle perd des territoires (l\'Alsace-Lorraine, un couloir vers la Pologne), doit payer des réparations et perd toutes ses colonies.',
            'Les autres traités entraînent la <b>dislocation des empires</b> austro-hongrois, ottoman et en partie russe. De nouveaux États apparaissent.',
            'La <b>Société des Nations (SDN)</b> est créée pour maintenir la paix dans le monde et suscite de grands espoirs.',
            'L\'Europe connaît des troubles sociaux et une vague de révolutions inspirées de la révolution russe, comme celle des spartakistes en Allemagne.'
          ]
        },
        {
          titre: 'Les révolutions russes de 1917',
          points: [
            '<b>Février 1917</b> : les Russes sont très éprouvés par la guerre. Une révolution renverse le tsar et un gouvernement provisoire se met en place.',
            '<b>Octobre 1917</b> : le parti <b>bolchevik</b> de Lénine s\'empare du pouvoir par une seconde révolution.',
            'Conséquence : la Russie quitte la guerre en signant le traité de Brest-Litovsk avec l\'Allemagne, en mars 1918.'
          ]
        }
      ],

      dates: [
        ['28 juin 1914', 'Attentat de Sarajevo'],
        ['Août 1914', 'Début de la guerre en Europe'],
        ['Septembre 1914', 'Bataille de la Marne'],
        ['1915 - 1916', 'Génocide arménien'],
        ['Février - décembre 1916', 'Bataille de Verdun'],
        ['Juillet - novembre 1916', 'Bataille de la Somme'],
        ['Février 1917', 'Révolution russe : le tsar est renversé'],
        ['Avril 1917', 'Entrée en guerre des États-Unis'],
        ['Octobre 1917', 'Les bolcheviks de Lénine prennent le pouvoir'],
        ['Mars 1918', 'Traité de Brest-Litovsk : la Russie quitte la guerre'],
        ['11 novembre 1918', 'Armistice signé à Rethondes'],
        ['28 juin 1919', 'Traité de Versailles']
      ],

      mots: [
        ['Guerre de mouvement', 'Stratégie où les armées lancent des offensives pour gagner du territoire : les soldats sont en mouvement.'],
        ['Guerre de position', 'Stratégie où les armées défendent le territoire qu\'elles contrôlent : les soldats creusent des tranchées et s\'y enterrent.'],
        ['Tranchée', 'Fossé creusé par les soldats le long du front pour se protéger des tirs et des bombardements.'],
        ['Front', 'La zone où les deux armées s\'affrontent.'],
        ['L\'arrière', 'Tout le pays en dehors de la zone des combats, où vivent et travaillent les civils.'],
        ['Poilu', 'Surnom donné aux soldats français de la Première Guerre mondiale.'],
        ['Gueules cassées', 'Les soldats survivants au visage mutilé et défiguré par les combats.'],
        ['Mutinerie', 'Révolte de soldats qui refusent d\'obéir aux ordres et de monter au combat.'],
        ['Mobiliser', 'Appeler et rassembler les hommes et les ressources d\'un pays pour la guerre.'],
        ['Guerre totale', 'Guerre dans laquelle l\'État mobilise toutes les ressources du pays : économiques, humaines et morales.'],
        ['Pénurie', 'Manque de produits de première nécessité, comme la nourriture ou le charbon.'],
        ['Réquisition', 'Prise de force de biens ou de main-d\'œuvre par l\'autorité militaire ou l\'État.'],
        ['Propagande', 'Ensemble de messages diffusés pour influencer l\'opinion : ici, soutenir l\'effort de guerre et cacher la réalité du front. On parle aussi de « bourrage de crâne ».'],
        ['Censure', 'Contrôle des lettres, des journaux et des images pour empêcher la diffusion de certaines informations.'],
        ['Génocide', 'Extermination organisée et programmée d\'un peuple entier.'],
        ['Noria', 'Rotation continue des camions et des soldats mise en place pour ravitailler Verdun.'],
        ['Voie sacrée', 'La seule route qui ravitaillait Verdun en hommes et en munitions, jour et nuit.'],
        ['Armistice', 'Accord qui arrête les combats entre les armées.'],
        ['Diktat', 'Nom donné par les Allemands au traité de Versailles, qu\'ils jugent imposé et humiliant.'],
        ['SDN', 'Société des Nations : organisation créée en 1919 pour maintenir la paix dans le monde.'],
        ['Bolchevik', 'Membre du parti révolutionnaire de Lénine, qui prend le pouvoir en Russie en octobre 1917.']
      ],

      /* bonne : le numéro de la bonne réponse, en commençant à 0 */
      quiz: [
        { q: 'Quel événement déclenche la Première Guerre mondiale ?',
          choix: ['L\'invasion de la Belgique', 'L\'attentat de Sarajevo', 'La bataille de Verdun', 'La révolution russe'],
          bonne: 1,
          why: 'Le 28 juin 1914, un nationaliste serbe assassine l\'héritier du trône d\'Autriche-Hongrie à Sarajevo.' },

        { q: 'Quelle est la date exacte de l\'attentat de Sarajevo ?',
          choix: ['11 novembre 1914', '28 juin 1914', '2 août 1914', '28 juin 1919'],
          bonne: 1,
          why: 'Attention à ne pas la confondre avec le 28 juin 1919, date du traité de Versailles.' },

        { q: 'Quels pays forment la Triple-Entente en 1914 ?',
          choix: ['France, Royaume-Uni, Russie', 'France, Italie, Russie', 'Allemagne, Autriche-Hongrie, Italie', 'France, Royaume-Uni, États-Unis'],
          bonne: 0,
          why: 'La Triple-Entente, ce sont les « Alliés » : France, Royaume-Uni et Russie.' },

        { q: 'Quels pays forment la Triple Alliance en 1914 ?',
          choix: ['Allemagne, Russie, Serbie', 'Empire allemand, Empire austro-hongrois, Italie', 'Allemagne, Empire ottoman, Bulgarie', 'Autriche-Hongrie, Italie, Espagne'],
          bonne: 1,
          why: 'L\'Italie en fait partie au départ, mais elle change de camp en 1915.' },

        { q: 'Quel pays change de camp en 1915 ?',
          choix: ['La Russie', 'La Bulgarie', 'L\'Italie', 'La Roumanie'],
          bonne: 2,
          why: 'L\'Italie quitte la Triple Alliance pour rejoindre l\'Entente.' },

        { q: 'Dans quel pays se trouve Sarajevo au moment de l\'attentat ?',
          choix: ['En Serbie', 'En Bosnie', 'En Autriche', 'En Russie'],
          bonne: 1,
          why: 'L\'attentat a lieu en Bosnie, et c\'est un nationaliste serbe qui le commet.' },

        { q: 'Qu\'est-ce que la guerre de position ?',
          choix: ['Les armées lancent des offensives pour gagner du territoire', 'Les armées défendent le territoire qu\'elles contrôlent depuis des tranchées', 'Les armées se battent uniquement sur mer', 'Les civils remplacent les soldats au front'],
          bonne: 1,
          why: 'Guerre de position = tranchées. Guerre de mouvement = offensives pour avancer.' },

        { q: 'En quelle année se déroule la bataille de Verdun ?',
          choix: ['1914', '1915', '1916', '1917'],
          bonne: 2,
          why: 'De février à décembre 1916. C\'est LA date à retenir pour Verdun.' },

        { q: 'Où se situe Verdun ?',
          choix: ['Dans le Nord-Est de la France, en Lorraine', 'En Belgique', 'Dans le Sud de la France', 'En Alsace, côté allemand'],
          bonne: 0,
          why: 'Verdun est en Lorraine, près de la frontière allemande, sur la Meuse.' },

        { q: 'Quels sont les deux camps qui s\'opposent à Verdun ?',
          choix: ['Français et Britanniques', 'Français et Allemands', 'Allemands et Russes', 'Allemands et Américains'],
          bonne: 1,
          why: 'Verdun oppose l\'armée française à l\'armée allemande pendant dix mois.' },

        { q: 'À quoi sert la Voie sacrée ?',
          choix: ['À évacuer les civils de Verdun', 'À ravitailler Verdun en hommes et en munitions', 'À relier Paris à Berlin', 'À transporter les prisonniers'],
          bonne: 1,
          why: 'C\'est la seule route de ravitaillement de Verdun, utilisée jour et nuit.' },

        { q: 'Quel est le bilan humain de la bataille de Verdun ?',
          choix: ['Environ 10 000 morts au total', 'Environ 163 000 Français et 143 000 Allemands', 'Environ 1,2 million de morts', 'Environ 10 millions de morts'],
          bonne: 1,
          why: '1,2 million correspond au génocide arménien, et 10 millions au bilan total de la guerre.' },

        { q: 'Comment appelle-t-on les soldats français de la Première Guerre mondiale ?',
          choix: ['Les munitionnettes', 'Les bolcheviks', 'Les poilus', 'Les spartakistes'],
          bonne: 2,
          why: 'Les poilus vivent dans les tranchées, dans la boue, les rats et les poux.' },

        { q: 'Qui sont les « gueules cassées » ?',
          choix: ['Les soldats survivants au visage mutilé', 'Les déserteurs', 'Les prisonniers de guerre', 'Les ouvrières des usines d\'armement'],
          bonne: 0,
          why: 'Environ 6 millions de mutilés portent à vie les séquelles de la guerre.' },

        { q: 'En quelle année ont lieu les mutineries de soldats ?',
          choix: ['1914', '1916', '1917', '1918'],
          bonne: 2,
          why: 'En 1917, gagnés par la lassitude, certains régiments refusent de monter au combat.' },

        { q: 'Qui sont les « munitionnettes » ?',
          choix: ['Les infirmières du front', 'Les femmes qui travaillent dans les usines d\'armement', 'Les enfants mobilisés à l\'école', 'Les soldats qui fabriquent les obus'],
          bonne: 1,
          why: 'Elles remplacent à l\'arrière les hommes partis au front.' },

        { q: 'Qu\'est-ce qu\'une guerre totale ?',
          choix: ['Une guerre qui se déroule sur tous les continents', 'Une guerre où l\'État mobilise toutes les ressources du pays', 'Une guerre qui ne fait aucun prisonnier', 'Une guerre qui dure plus de quatre ans'],
          bonne: 1,
          why: 'Économie, population et esprits : tout le pays est mobilisé, front et arrière.' },

        { q: 'Que désigne le « bourrage de crâne » ?',
          choix: ['La censure du courrier', 'La propagande de guerre', 'Le rationnement', 'L\'entraînement militaire'],
          bonne: 1,
          why: 'C\'est le nom donné à la propagande omniprésente destinée à soutenir le moral.' },

        { q: 'Quelle grande usine est reconvertie dans la production d\'armes ?',
          choix: ['Renault', 'Michelin', 'Peugeot', 'Citroën'],
          bonne: 0,
          why: 'Renault produit des chars d\'assaut, des moteurs d\'avion et des millions d\'obus.' },

        { q: 'Quand a lieu le génocide arménien ?',
          choix: ['1914-1915', '1915-1916', '1917-1918', '1919-1920'],
          bonne: 1,
          why: 'Il se déroule pendant la guerre, d\'avril 1915 à octobre 1916.' },

        { q: 'Qui organise le génocide arménien ?',
          choix: ['Le gouvernement russe', 'Le gouvernement allemand', 'Le gouvernement turc, dans l\'Empire ottoman', 'Le gouvernement austro-hongrois'],
          bonne: 2,
          why: 'Les Arméniens, minorité chrétienne de l\'Empire ottoman, sont accusés de comploter avec l\'ennemi.' },

        { q: 'Combien de morts fait le génocide arménien ?',
          choix: ['Plus de 120 000', 'Plus de 1,2 million', 'Plus de 10 millions', 'Plus de 21 millions'],
          bonne: 1,
          why: 'C\'est le premier génocide du XXe siècle.' },

        { q: 'Quelle est la date de l\'armistice ?',
          choix: ['28 juin 1919', '11 novembre 1918', '2 août 1914', '1er mars 1918'],
          bonne: 1,
          why: 'Il est signé dans un wagon à Rethondes, en forêt de Compiègne.' },

        { q: 'Quel est le bilan humain total de la Première Guerre mondiale ?',
          choix: ['1 million de morts', '10 millions de morts', '21 millions de morts', '50 millions de morts'],
          bonne: 1,
          why: '10 millions de morts, dont près de 9 millions de soldats, et 21 millions de blessés.' },

        { q: 'Comment les Allemands appellent-ils le traité de Versailles ?',
          choix: ['La Der des Der', 'Le Diktat', 'L\'armistice', 'La paix de Rethondes'],
          bonne: 1,
          why: 'Ils le jugent imposé et humiliant, car l\'Allemagne est déclarée responsable de la guerre.' },

        { q: 'À combien d\'hommes l\'armée allemande est-elle réduite par le traité de Versailles ?',
          choix: ['10 000', '100 000', '500 000', '1 million'],
          bonne: 1,
          why: 'L\'Allemagne est démilitarisée et la Rhénanie devient une zone démilitarisée.' },

        { q: 'Quelle organisation est créée pour maintenir la paix après la guerre ?',
          choix: ['L\'ONU', 'La SDN', 'L\'OTAN', 'La Triple-Entente'],
          bonne: 1,
          why: 'La Société des Nations est créée en 1919 et suscite de grands espoirs.' },

        { q: 'Quel pays devient la première puissance mondiale après la guerre ?',
          choix: ['Le Royaume-Uni', 'La France', 'Les États-Unis', 'L\'Allemagne'],
          bonne: 2,
          why: 'Préservés des combats sur leur sol, ils sortent renforcés pendant que l\'Europe est ruinée.' },

        { q: 'Que se passe-t-il en Russie en février 1917 ?',
          choix: ['Lénine prend le pouvoir', 'Une révolution renverse le tsar', 'La Russie signe l\'armistice', 'La Russie entre en guerre'],
          bonne: 1,
          why: 'Un gouvernement provisoire se met alors en place. Lénine, lui, prend le pouvoir en octobre.' },

        { q: 'Qui s\'empare du pouvoir en Russie en octobre 1917 ?',
          choix: ['Le tsar Nicolas II', 'Le parti bolchevik de Lénine', 'Les spartakistes', 'Le gouvernement provisoire'],
          bonne: 1,
          why: 'C\'est la seconde révolution de 1917. La Russie quitte ensuite la guerre.' },

        { q: 'Qui est Otto Dix ?',
          choix: ['Un général allemand', 'Un peintre allemand qui a représenté les traumatismes de la guerre', 'Le chef du parti bolchevik', 'Un soldat français célèbre'],
          bonne: 1,
          why: 'Engagé volontaire, il peint les combats vécus puis les anciens combattants mutilés.' },

        { q: 'Que veut dire l\'expression « la Der des Der » ?',
          choix: ['La dernière bataille de la guerre', 'La dernière des guerres', 'Le dernier traité signé', 'Le dernier soldat mort'],
          bonne: 1,
          why: 'Ceux qui l\'ont vécue espéraient qu\'aucune autre guerre ne suivrait.' }
      ]
    }
    ,
    {
      id: 'fr-ch1',
      matiere: 'francais',
      numero: 'Séance 2',
      titre: "La formation des mots",
      periode: "Vocabulaire et formation des mots",
      theme: "Radical, famille de mots, dérivation et composition",

      essentiel: [
        "Le <b>radical</b> est l'élément de base d'un mot : la partie qui porte le sens principal.",
        "Tous les mots qui ont le même radical forment une <b>famille de mots</b>.",
        "Un <b>mot simple</b> n'a qu'un radical ; un <b>mot construit</b> se décompose en plusieurs éléments.",
        "Un <b>préfixe</b> se place avant le radical et change le sens ; un <b>suffixe</b> se place après et change le plus souvent la classe grammaticale.",
        "Un <b>mot composé</b> est formé de deux mots simples, juxtaposés, reliés par une préposition ou un trait d'union, ou soudés."
      ],

      sections: [
        {
          titre: "Le radical et la famille de mots",
          points: [
            "Le <b>radical</b> est l'élément de base d'un mot, la partie qui contient le sens principal. Exemple : dé-<b>noyau</b>-ter.",
            "L'ensemble des mots qui ont le même radical forment une <b>famille de mots</b> : geler, gel, dégel, congeler, congélateur.",
            "À cause de l'évolution de la langue, un radical peut apparaître sous des formes légèrement différentes : mer, amerrir, émerger, mais aussi marin, maritime.",
            "Attention : certains mots semblent de la même famille alors que leur radical a un sens différent : <b>terre</b> et <b>terreur</b>, <b>sale</b> et <b>saler</b>."
          ]
        },
        {
          titre: "Mots simples et mots construits",
          points: [
            "Les <b>mots simples</b> sont constitués d'un seul radical : livre, stylo, table.",
            "Ils s'opposent aux <b>mots construits</b>, que l'on peut décomposer en plusieurs éléments.",
            "Parmi les mots construits, on distingue les <b>mots dérivés</b> et les <b>mots composés</b>."
          ]
        },
        {
          titre: "Les mots dérivés",
          points: [
            "Ils sont formés par <b>dérivation</b> à partir d'un radical, en lui ajoutant un préfixe ou un suffixe.",
            "Le <b>préfixe</b> est placé <b>avant</b> le radical. Il modifie le sens du mot mais ne change pas sa classe grammaticale : faire → défaire, refaire.",
            "Le <b>suffixe</b> est placé <b>après</b> le radical. La plupart des suffixes servent à modifier la classe grammaticale : facile (adjectif), faciliter (verbe), facilement (adverbe).",
            "Certains suffixes ajoutent aussi un sens : <b>-ard, -asse, -âtre, -aud</b> sont dépréciatifs (braillard, blanchâtre, rougeaud) ; <b>-elle, -et, -elet, -ille, -illon, -on</b> sont diminutifs (ruelle, garçonnet, fillette, oisillon) ; <b>-able, -ible, -uble</b> marquent la possibilité (mangeable, crédible, soluble)."
          ]
        },
        {
          titre: "Les mots composés",
          points: [
            "Un <b>mot composé</b> est formé de deux mots simples, qui peuvent être :",
            "<b>juxtaposés</b> : vert pomme, bleu turquoise ;",
            "<b>reliés par une préposition</b> : salle à manger, pomme de terre ;",
            "<b>reliés par un trait d'union</b> : chou-fleur ;",
            "<b>soudés</b> : piquenique, portemanteau.",
            "Les mots composés à partir de mots latins et grecs sont parfois plus difficiles à reconnaître. <b>Technologie</b> vient de technè (« la technique ») et logos (« l'étude »).",
            "<b>Autobiographie</b> vient de auto (« soi-même »), bio (« la vie ») et graphie (« écrire ») : écrire soi-même sa vie."
          ]
        },
        {
          titre: "Les préfixes à connaître",
          points: [
            "<b>ad-, a-</b> (vers) : amener — <b>ante-</b> (avant) : antéposé — <b>con-, com-, col-, cor-, co-</b> (avec) : conjonction.",
            "<b>dé-, dés-</b> (action contraire) : désarmer — <b>in-, im-, il-, ir-</b> (dans) : ingérer — <b>in-, im-, il-, ir-</b> (privé de) : inutile.",
            "<b>inter-</b> (entre) : international — <b>juxta-</b> (à côté) : juxtaposer — <b>per-</b> (à travers) : perméable.",
            "<b>post-</b> (après) : post-opératoire — <b>pré-</b> (devant, avant) : préfixe — <b>pro-</b> (pour, à la place de) : pronom.",
            "<b>re-</b> (de nouveau) : revenir — <b>sub-, sou-, sous-</b> (sous) : soumettre — <b>super-, supra-</b> (au-dessus) : supermarché.",
            "<b>trans-</b> (à travers) : transfusion — <b>ultra-</b> (au-delà) : ultrason."
          ]
        },
        {
          titre: "Les suffixes à connaître",
          points: [
            "<b>Formation de noms</b> : -age (chauffage), -eur (douceur), -ateur (réformateur), -ier / -ière (cerisier, crémière), -té / -eté / -ité (étrangeté), -teur / -trice (inspecteur, inspectrice), -oir / -oire (lavoir, patinoire), -tion (parution), -ure (brûlure), -itude (solitude).",
            "<b>Formation d'adjectifs</b> : -able / -ible / -uble (capable, nuisible, soluble), -âtre au sens péjoratif (bleuâtre), -et / -ette au sens diminutif (rondelette), -el (fraternel).",
            "<b>Formation d'adverbes</b> : -ment (raisonnablement).",
            "<b>Formation de verbes</b> : -asser au sens péjoratif (rêvasser), -ifier / -iser (solidifier, standardiser), -eler (marteler), -eter (épousseter), -ir marquant la transformation (blanchir), -oyer (tutoyer)."
          ]
        },
        {
          titre: "La méthode au brevet",
          points: [
            "Pour expliquer la formation d'un mot, on repère le <b>radical</b>, puis le <b>préfixe</b> et le <b>suffixe</b>, et on donne le sens de chacun.",
            "Exemple : <b>honorable</b> est un mot construit par dérivation, formé du radical « honor » suivi du suffixe « -able » qui indique la possibilité. Honorable signifie « qui mérite le respect ».",
            "Exemple : <b>impénétrable</b> est formé du préfixe privatif « im- », du radical « pénétr- » (du verbe pénétrer) et du suffixe « -able ». Il signifie qu'on ne peut pas entrer dans la tête du personnage.",
            "Exemple : <b>incroyable</b> est formé du préfixe privatif « in- », du radical « croy- » (du verbe croire) et du suffixe « -able ». Il signifie « qui ne peut être réel »."
          ]
        }
      ],

      mots: [
        ["Radical", "Élément de base d'un mot, la partie qui contient son sens principal."],
        ["Famille de mots", "Ensemble des mots formés à partir du même radical."],
        ["Mot simple", "Mot constitué d'un seul radical, que l'on ne peut pas décomposer : livre, stylo, table."],
        ["Mot construit", "Mot que l'on peut décomposer en plusieurs éléments. Il peut être dérivé ou composé."],
        ["Dérivation", "Formation d'un mot nouveau en ajoutant un préfixe ou un suffixe à un radical."],
        ["Préfixe", "Élément placé avant le radical. Il modifie le sens du mot mais pas sa classe grammaticale."],
        ["Suffixe", "Élément placé après le radical. Il modifie le plus souvent la classe grammaticale du mot."],
        ["Mot composé", "Mot formé de deux mots simples, juxtaposés, reliés par une préposition ou un trait d'union, ou soudés."],
        ["Suffixe dépréciatif", "Suffixe qui donne au mot un sens négatif : -ard, -asse, -âtre, -aud (braillard, blanchâtre)."],
        ["Suffixe diminutif", "Suffixe qui indique la petitesse : -elle, -et, -elet, -ille, -illon, -on (fillette, oisillon)."],
        ["Champ lexical", "Ensemble des mots d'un texte qui se rapportent à un même thème."]
      ],

      quiz: [
        { q: "Qu'est-ce que le radical d'un mot ?",
          choix: ["L'élément placé avant le mot", "L'élément de base qui contient le sens principal", "La terminaison du mot", "La classe grammaticale du mot"],
          bonne: 1,
          why: "Dans « dénoyauter », le radical est « noyau »." },

        { q: "Qu'est-ce qu'une famille de mots ?",
          choix: ["Des mots qui se ressemblent", "Des mots qui ont le même radical", "Des mots de la même classe grammaticale", "Des synonymes"],
          bonne: 1,
          why: "Geler, gel, dégel, congeler et congélateur forment une famille de mots." },

        { q: "Ces deux mots sont-ils de la même famille : « terre » et « terreur » ?",
          choix: ["Oui, ils ont le même radical", "Non, leur radical a un sens différent", "Oui, ce sont des synonymes", "Non, ce sont des antonymes"],
          bonne: 1,
          why: "C'est un piège classique : ils se ressemblent mais leurs radicaux n'ont rien à voir. Même chose pour « sale » et « saler »." },

        { q: "Qu'est-ce qu'un mot simple ?",
          choix: ["Un mot court", "Un mot constitué d'un seul radical", "Un mot facile à comprendre", "Un mot sans suffixe mais avec un préfixe"],
          bonne: 1,
          why: "Livre, stylo, table sont des mots simples : on ne peut pas les décomposer." },

        { q: "Où se place un préfixe ?",
          choix: ["Avant le radical", "Après le radical", "Au milieu du mot", "À la fin de la phrase"],
          bonne: 0,
          why: "Faire → défaire, refaire. Le préfixe modifie le sens sans changer la classe grammaticale." },

        { q: "Qu'est-ce qu'un préfixe modifie ?",
          choix: ["La classe grammaticale du mot", "Le sens du mot", "La prononciation uniquement", "Le genre du mot"],
          bonne: 1,
          why: "« Défaire » reste un verbe comme « faire » : seul le sens a changé." },

        { q: "À quoi sert le plus souvent un suffixe ?",
          choix: ["À modifier la classe grammaticale du mot", "À rendre le mot plus court", "À inverser le sens du mot", "À marquer le pluriel"],
          bonne: 0,
          why: "Facile (adjectif) → faciliter (verbe) → facilement (adverbe)." },

        { q: "Que signifie le suffixe « -able » dans « mangeable » ?",
          choix: ["Le contraire", "La possibilité", "La petitesse", "Le mépris"],
          bonne: 1,
          why: "-able, -ible et -uble marquent la possibilité : capable, nuisible, soluble." },

        { q: "Quel est le sens des suffixes « -ard, -asse, -âtre, -aud » ?",
          choix: ["Diminutif", "Dépréciatif", "Possibilité", "Augmentatif"],
          bonne: 1,
          why: "Braillard, blanchâtre, rougeaud : le suffixe ajoute une nuance négative." },

        { q: "Quel est le sens des suffixes « -et, -ette, -illon » ?",
          choix: ["Dépréciatif", "Diminutif", "Possibilité", "Contraire"],
          bonne: 1,
          why: "Garçonnet, fillette, oisillon : ils indiquent la petitesse." },

        { q: "« Vert pomme » est un mot composé formé de deux mots :",
          choix: ["juxtaposés", "reliés par une préposition", "reliés par un trait d'union", "soudés"],
          bonne: 0,
          why: "Juxtaposés = simplement placés l'un à côté de l'autre, comme « bleu turquoise »." },

        { q: "« Pomme de terre » est un mot composé formé de deux mots :",
          choix: ["juxtaposés", "reliés par une préposition", "reliés par un trait d'union", "soudés"],
          bonne: 1,
          why: "Comme « salle à manger » : c'est la préposition qui relie les deux mots." },

        { q: "« Portemanteau » est un mot composé formé de deux mots :",
          choix: ["juxtaposés", "reliés par une préposition", "reliés par un trait d'union", "soudés"],
          bonne: 3,
          why: "Soudés : les deux mots n'en forment plus qu'un seul, comme « piquenique »." },

        { q: "De quelles racines grecques vient le mot « autobiographie » ?",
          choix: ["auto, bio, graphie", "auto, grapho, logos", "autos, bios, technè", "auto, vita, scribere"],
          bonne: 0,
          why: "Auto (soi-même) + bio (la vie) + graphie (écrire) : écrire soi-même sa vie." },

        { q: "De quoi est formé le mot « technologie » ?",
          choix: ["technè (la technique) et logos (l'étude)", "technos (la machine) et logie (la science)", "tech (l'outil) et logos (la parole)", "technè (l'art) et graphie (écrire)"],
          bonne: 0,
          why: "C'est un mot composé à partir de deux mots grecs." },

        { q: "Que signifie le préfixe « dé- / dés- » ?",
          choix: ["De nouveau", "L'action contraire", "Au-dessus", "À travers"],
          bonne: 1,
          why: "Désarmer, défaire : le préfixe inverse l'action." },

        { q: "Que signifie le préfixe « re- » ?",
          choix: ["Vers", "De nouveau", "Avant", "Sous"],
          bonne: 1,
          why: "Revenir, refaire : l'action se répète." },

        { q: "Dans « inutile », que signifie le préfixe « in- » ?",
          choix: ["Dans", "Privé de", "Entre", "Après"],
          bonne: 1,
          why: "Attention : « in- » peut avoir deux sens. Dans « ingérer » il signifie « dans », dans « inutile » il signifie « privé de »." },

        { q: "Que signifie le préfixe « inter- » ?",
          choix: ["À côté", "Entre", "Au-delà", "À travers"],
          bonne: 1,
          why: "International : entre les nations. « À côté » correspond à juxta-." },

        { q: "Que signifie le préfixe « pré- » ?",
          choix: ["Après", "Devant, avant", "Avec", "Contre"],
          bonne: 1,
          why: "Préfixe, prévoir. « Après » correspond à post- (post-opératoire)." },

        { q: "Comment expliquer la formation du mot « impénétrable » ?",
          choix: ["Radical « impénétr- » + suffixe « -able »", "Préfixe privatif « im- » + radical « pénétr- » + suffixe « -able »", "Préfixe « in- » + radical « pénétrable »", "Mot composé de deux mots soudés"],
          bonne: 1,
          why: "Le préfixe « im- » est privatif et « -able » marque la possibilité : ce qu'on ne peut pas pénétrer." },

        { q: "Comment expliquer la formation du mot « rarement » ?",
          choix: ["Radical « rare » + suffixe « -ment » qui forme un adverbe", "Préfixe « ra- » + radical « rement »", "Mot composé juxtaposé", "Radical « rarem » + suffixe « -ent »"],
          bonne: 0,
          why: "Le suffixe « -ment » indique la manière et construit un adverbe. Rarement signifie « pas fréquemment »." }
      ]
    },
    {
      id: 'fr-ch2',
      matiere: 'francais',
      numero: 'Séance 3',
      titre: "L'autobiographie et le pacte autobiographique",
      periode: "L'autobiographie",
      theme: "George Sand, Philippe Lejeune et les mots de l'autobiographie",

      essentiel: [
        "Dans une autobiographie, <b>l'auteur, le narrateur et le personnage ne font qu'un</b> : c'est la <b>triade narrative</b>.",
        "Le récit est mené la plupart du temps <b>à la première personne</b>.",
        "Le <b>pacte autobiographique</b> est un contrat d'authenticité : l'auteur s'engage à raconter sa vie avec la plus grande fidélité possible.",
        "Il s'oppose au <b>pacte de fiction</b> : un romancier ne promet pas la vérité, il propose seulement de jouer à y croire.",
        "Des écarts avec la réalité restent possibles : problèmes de <b>mémoire</b>, ou choix de passer certains éléments <b>sous silence</b>."
      ],

      sections: [
        {
          titre: "Qu'est-ce que le pacte autobiographique ?",
          points: [
            "L'autobiographie repose sur une <b>relation d'identité</b> : auteur, narrateur et personnage ne font qu'un. On appelle cela la <b>triade narrative</b>.",
            "Le récit est donc mené la plupart du temps <b>à la première personne</b>.",
            "Ce projet implique un <b>contrat d'authenticité</b> entre l'auteur et son lecteur : l'autobiographe s'engage à retranscrire ses souvenirs avec la plus grande fidélité possible. C'est le <b>pacte autobiographique</b>.",
            "Des écarts peuvent apparaître entre la réalité et ce qui est raconté : le plus souvent à cause des <b>problèmes liés à la mémoire</b>, ou parce que l'autobiographe choisit de <b>passer certains éléments sous silence</b>."
          ]
        },
        {
          titre: "Philippe Lejeune : pacte autobiographique et pacte de fiction",
          points: [
            "Le pacte autobiographique <b>s'oppose au pacte de fiction</b>. Un roman, même inspiré d'une vie réelle, ne demande pas d'y croire pour de bon : seulement de jouer à y croire.",
            "L'autobiographe, lui, promet que ce qu'il raconte est vrai, ou du moins ce qu'il croit vrai. Il se comporte comme un <b>historien ou un journaliste</b>, à la différence près que le sujet, c'est lui-même.",
            "Si le lecteur estime que l'autobiographe cache ou altère la vérité, il peut penser qu'il <b>ment</b>. On ne peut pas dire cela d'un romancier, qui ne s'est engagé à rien.",
            "Conséquence : un texte autobiographique peut être <b>vérifié par une enquête</b> et engage la <b>responsabilité juridique</b> de son auteur (diffamation, atteinte à la vie privée).",
            "Le lecteur reconnaît cet engagement au <b>titre</b> (Mémoires, Souvenirs, Histoire de ma vie), au <b>sous-titre</b> (autobiographie, récit, souvenirs, journal), ou simplement à l'absence de la mention « roman ».",
            "Très souvent, il y a <b>identité de nom</b> entre l'auteur dont le nom figure sur la couverture et le narrateur-personnage."
          ]
        },
        {
          titre: "George Sand, Histoire de ma vie (1855)",
          points: [
            "<b>Aurore Dupin</b> (1804-1876) a adopté un pseudonyme masculin, <b>George Sand</b>, scandalisant certains de ses contemporains déjà choqués par ses tenues et ses relations amoureuses.",
            "Écrire sur soi est un travail <b>pénible</b> et un <b>devoir</b> : rien n'est plus malaisé que de se définir et de se résumer. Le champ lexical de la difficulté le montre : « malaisé », « un devoir assez pénible », « cette tâche », « étude fastidieuse ».",
            "Ce travail engage aussi <b>les autres</b> : il les encourage à faire de même et leur sert de guide. L'autobiographie devient un lieu d'échange « qui élève la pensée de celui qui raconte et de celui qui écoute », dans un rapport « de confiance et de sympathie »."
          ]
        },
        {
          titre: "Pourquoi écrire une autobiographie selon George Sand ?",
          points: [
            "Pour <b>choisir les souvenirs déterminants</b>, ceux qui valent la peine d'être conservés.",
            "Pour <b>mieux se connaître</b>, par une étude sincère de sa propre nature.",
            "Pour <b>corriger les erreurs des biographes</b>, qui ont publié sur son compte des textes pleins d'erreurs, dans la louange comme dans le blâme.",
            "Pour <b>plonger dans sa vie intérieure</b>, raconter l'histoire de son propre esprit et de son propre cœur.",
            "Pour <b>faire partager son expérience</b> aux autres, « en vue d'un enseignement fraternel »."
          ]
        },
        {
          titre: "Le pacte selon George Sand",
          points: [
            "L'autobiographie est un pacte passé entre « <b>celui qui raconte</b> », l'auteur, et « <b>celui qui écoute</b> », le lecteur.",
            "C'est un <b>pacte de confiance</b> : l'autobiographe s'engage à dire la vérité et à faire preuve de courage et de persévérance, en « esprit sincère et sérieux ».",
            "Il doit faire l'effort de raconter sa « vie intérieure » pour devenir « un conseil et un guide pour les autres esprits »."
          ]
        },
        {
          titre: "Les mots de l'autobiographie",
          points: [
            "<b>Intime</b> vient du latin <i>intimus</i>, « ce qui est le plus en dedans, le fond de ». Un ami intime est un ami proche ; une maison intime est chaleureuse ; une fête intime se fait en petit comité ; l'intime conviction des jurés est une certitude.",
            "<b>Confidentia</b> a donné deux noms : <b>confiance</b> et <b>confidence</b>. De la même famille : le confident (celui qui reçoit les secrets), la confidentialité, confidentiel, confier, confidentiellement.",
            "<b>Mémoire</b> vient du latin <i>memini</i>, « je me souviens ». <b>La</b> mémoire est la faculté de se souvenir ; <b>un</b> mémoire est un document de recherche ; <b>des</b> Mémoires sont le récit de sa propre vie — de Gaulle a écrit ses Mémoires.",
            "Se souvenir, avoir souvenance, évoquer, se remémorer, se rappeler sont des <b>synonymes</b> avec des nuances d'intensité. <b>Ressasser</b> a un sens péjoratif.",
            "Un <b>souvenir</b> est précis et volontaire ; une <b>réminiscence</b> est vague et involontaire."
          ]
        }
      ],

      dates: [
        ["1804 - 1876", "Aurore Dupin, connue sous le pseudonyme de George Sand"],
        ["1855", "Histoire de ma vie, de George Sand"],
        ["XXe siècle", "Philippe Lejeune théorise le pacte autobiographique"]
      ],

      mots: [
        ["Autobiographie", "Récit qu'une personne fait de sa propre vie. Du grec auto (soi-même), bio (la vie) et graphie (écrire)."],
        ["Triade narrative", "Relation d'identité entre l'auteur, le narrateur et le personnage, qui ne font qu'un."],
        ["Pacte autobiographique", "Contrat d'authenticité par lequel l'auteur s'engage à raconter sa vie avec la plus grande fidélité possible."],
        ["Pacte de fiction", "Contrat du roman : l'auteur ne promet pas la vérité, il propose au lecteur de jouer à y croire."],
        ["Mémoires", "Récit qu'une personne fait de sa propre vie, souvent centré sur les événements dont elle a été témoin."],
        ["Un mémoire", "Document de recherche. À ne pas confondre avec la mémoire ni avec des Mémoires."],
        ["Journal intime", "Texte personnel écrit au jour le jour, sans destinataire prévu."],
        ["Souvenir", "Image du passé précise et rappelée volontairement."],
        ["Réminiscence", "Souvenir vague qui revient involontairement à l'esprit."],
        ["Ressasser", "Revenir sans cesse sur la même chose. Le mot a un sens péjoratif."],
        ["Confident", "Personne qui reçoit les secrets de quelqu'un."],
        ["Pseudonyme", "Nom d'emprunt choisi par un auteur. Aurore Dupin a choisi George Sand."],
        ["Diffamation", "Fait de porter atteinte à la réputation de quelqu'un. Un texte autobiographique peut engager la responsabilité juridique de son auteur."]
      ],

      quiz: [
        { q: "Dans une autobiographie, qui sont l'auteur, le narrateur et le personnage ?",
          choix: ["Trois personnes différentes", "Une seule et même personne", "L'auteur et le narrateur seulement", "Le narrateur et le personnage seulement"],
          bonne: 1,
          why: "C'est la relation d'identité que l'on appelle la triade narrative." },

        { q: "Comment appelle-t-on la relation d'identité entre auteur, narrateur et personnage ?",
          choix: ["Le pacte de fiction", "La triade narrative", "Le contrat de lecture", "La focalisation interne"],
          bonne: 1,
          why: "C'est ce qui distingue l'autobiographie du roman." },

        { q: "À quelle personne le récit autobiographique est-il mené la plupart du temps ?",
          choix: ["À la première personne", "À la deuxième personne", "À la troisième personne", "Sans narrateur"],
          bonne: 0,
          why: "« Je » désigne à la fois l'auteur, le narrateur et le personnage." },

        { q: "Qu'est-ce que le pacte autobiographique ?",
          choix: ["Un contrat signé avec l'éditeur", "Un contrat d'authenticité entre l'auteur et son lecteur", "Une promesse de ne rien inventer du tout", "Un accord entre l'auteur et sa famille"],
          bonne: 1,
          why: "L'autobiographe s'engage à retranscrire ses souvenirs avec la plus grande fidélité possible." },

        { q: "À quoi s'oppose le pacte autobiographique ?",
          choix: ["Au pacte de lecture", "Au pacte de fiction", "Au pacte narratif", "Au pacte éditorial"],
          bonne: 1,
          why: "Le romancier ne demande pas de croire pour de bon, seulement de jouer à y croire." },

        { q: "Selon Philippe Lejeune, peut-on dire qu'un romancier « ment » ?",
          choix: ["Oui, s'il invente des faits", "Non, car il ne s'est pas engagé à dire la vérité", "Oui, toujours", "Seulement dans un roman historique"],
          bonne: 1,
          why: "On peut juger un roman vraisemblable ou non, mais cela échappe à la distinction du vrai et du faux." },

        { q: "À qui Lejeune compare-t-il l'autobiographe ?",
          choix: ["À un poète", "À un historien ou un journaliste", "À un romancier", "À un avocat"],
          bonne: 1,
          why: "Avec cette différence que le sujet sur lequel il promet de donner une information vraie, c'est lui-même." },

        { q: "Pourquoi un texte autobiographique engage-t-il la responsabilité juridique de son auteur ?",
          choix: ["Parce qu'il est publié", "Parce qu'il peut être poursuivi pour diffamation ou atteinte à la vie privée", "Parce qu'il doit être déposé chez un notaire", "Parce qu'il est payé par l'éditeur"],
          bonne: 1,
          why: "Contrairement au roman, un texte autobiographique peut être vérifié par une enquête." },

        { q: "À quoi le lecteur reconnaît-il un pacte autobiographique ?",
          choix: ["À la longueur du livre", "Au titre, au sous-titre, ou à l'absence de la mention « roman »", "À la couverture illustrée", "Au nombre de chapitres"],
          bonne: 1,
          why: "Mémoires, Souvenirs, Histoire de ma vie annoncent clairement le projet." },

        { q: "Quel est le vrai nom de George Sand ?",
          choix: ["Aurore Dupin", "Marie Rouanet", "Aurore Sand", "Amantine Lejeune"],
          bonne: 0,
          why: "Aurore Dupin (1804-1876) a adopté un pseudonyme masculin, ce qui a scandalisé ses contemporains." },

        { q: "Quel est le titre de l'autobiographie de George Sand ?",
          choix: ["Mémoires d'une jeune fille", "Histoire de ma vie", "Les Confessions", "Souvenirs d'enfance"],
          bonne: 1,
          why: "Publiée en 1855." },

        { q: "Pourquoi écrire sur soi est-il un travail « pénible » selon George Sand ?",
          choix: ["Parce que cela prend beaucoup de temps", "Parce que rien n'est plus malaisé que de se définir et de se résumer", "Parce que les lecteurs sont sévères", "Parce qu'il faut beaucoup de documents"],
          bonne: 1,
          why: "Le champ lexical de la difficulté le montre : « malaisé », « devoir assez pénible », « étude fastidieuse »." },

        { q: "Quelle est l'une des raisons avancées par George Sand pour écrire son autobiographie ?",
          choix: ["Gagner de l'argent", "Corriger les erreurs des biographes", "Devenir célèbre", "Répondre à son éditeur"],
          bonne: 1,
          why: "Elle a laissé publier sur son compte des biographies pleines d'erreurs, dans la louange comme dans le blâme." },

        { q: "Selon George Sand, entre qui se passe le pacte autobiographique ?",
          choix: ["Entre l'auteur et l'éditeur", "Entre « celui qui raconte » et « celui qui écoute »", "Entre l'auteur et sa famille", "Entre le narrateur et le personnage"],
          bonne: 1,
          why: "C'est un pacte de confiance entre l'auteur et le lecteur." },

        { q: "En quoi l'écriture de soi engage-t-elle « les autres » selon George Sand ?",
          choix: ["Elle les oblige à répondre", "Elle les encourage à faire de même et leur sert de guide", "Elle les accuse", "Elle les divertit seulement"],
          bonne: 1,
          why: "L'autobiographie devient un échange « qui élève la pensée de celui qui raconte et de celui qui écoute »." },

        { q: "D'où vient le mot « intime » ?",
          choix: ["Du grec intimos, l'ami", "Du latin intimus, ce qui est le plus en dedans", "Du latin timere, craindre", "Du grec intima, le secret"],
          bonne: 1,
          why: "D'où « le fond de » : un ami intime, des secrets intimes." },

        { q: "Que signifie « l'intime conviction des jurés » ?",
          choix: ["Leur amitié", "Leur certitude", "Leur discrétion", "Leur hésitation"],
          bonne: 1,
          why: "Ici, « intime » a le sens de profond, donc de certitude." },

        { q: "Qui est le « confident » ?",
          choix: ["Celui qui garde un secret pour lui", "La personne qui reçoit les secrets de quelqu'un", "Celui qui trahit un secret", "Un document secret"],
          bonne: 1,
          why: "De la même famille : confidentialité, confidentiel, confier, confidentiellement." },

        { q: "D'où vient le mot « mémoire » ?",
          choix: ["Du latin memini, « je me souviens »", "Du grec mnemos, l'esprit", "Du latin memoria, le livre", "Du grec memoria, le passé"],
          bonne: 0,
          why: "La mémoire est la faculté de se souvenir." },

        { q: "Le général de Gaulle a écrit son mémoire ou ses Mémoires ?",
          choix: ["Son mémoire", "Ses Mémoires", "Les deux", "Ni l'un ni l'autre"],
          bonne: 1,
          why: "Des Mémoires sont le récit de sa vie. Un mémoire, au singulier, est un document de recherche." },

        { q: "Quelle est la différence entre un « souvenir » et une « réminiscence » ?",
          choix: ["Le souvenir est vague, la réminiscence est précise", "Le souvenir est précis et volontaire, la réminiscence est vague et involontaire", "Ce sont des synonymes exacts", "Le souvenir est ancien, la réminiscence est récente"],
          bonne: 1,
          why: "La réminiscence revient à l'esprit sans qu'on l'ait cherchée." },

        { q: "Parmi ces verbes, lequel a un sens péjoratif ?",
          choix: ["Se remémorer", "Évoquer", "Ressasser", "Avoir souvenance"],
          bonne: 2,
          why: "Ressasser, c'est revenir sans cesse sur la même chose. Les autres sont des synonymes neutres de « se souvenir »." },

        { q: "Pourquoi peut-il y avoir des écarts entre la réalité et le récit autobiographique ?",
          choix: ["Parce que l'auteur ment toujours", "À cause des problèmes de mémoire ou du choix de taire certains éléments", "Parce que l'éditeur coupe des passages", "Parce que c'est de la fiction"],
          bonne: 1,
          why: "Le pacte reste valable : l'auteur dit ce qu'il croit vrai, mais la mémoire est imparfaite." }
      ]
    },
    {
      id: 'fr-ch3',
      matiere: 'francais',
      numero: 'Séance 4',
      titre: "Les classes grammaticales et les expansions du nom",
      periode: "Grammaire",
      theme: "Classes grammaticales, expansions du nom et proposition subordonnée relative",

      essentiel: [
        "Les classes grammaticales se divisent en <b>variables</b> (nom, déterminant, adjectif, pronom, verbe) et <b>invariables</b> (adverbe, préposition, conjonctions, interjection, onomatopée).",
        "Pour donner la classe d'un <b>groupe de mots</b>, on identifie son <b>noyau</b> : si le noyau est un nom, c'est un groupe nominal.",
        "Les <b>expansions du nom</b> précisent un nom : l'<b>épithète</b> le complète directement, le <b>complément du nom</b> est relié par une préposition, l'<b>apposition</b> est séparée par une virgule.",
        "La <b>proposition subordonnée relative</b> complète un nom appelé son <b>antécédent</b> et joue le même rôle qu'un adjectif.",
        "Le <b>pronom relatif</b> change de forme selon sa fonction : qui (sujet), que (COD), dont (complément introduit par de), où (lieu et temps).",
        "La <b>classe grammaticale</b> dit ce qu'un mot <b>est</b> ; la <b>fonction</b> dit ce qu'il <b>fait</b> dans la phrase."
      ],

      sections: [
        {
          titre: "Les classes grammaticales variables",
          points: [
            "<b>Nom</b> : nom commun (table), nom propre (Afrique).",
            "<b>Déterminant</b> : article défini (le, la, les), indéfini (un, une, des), partitif (du, de la, des) ; démonstratif (ce, cet, cette, ces) ; possessif (mon, nos, leur) ; indéfini (plusieurs, certains, quelques) ; interrogatif ou exclamatif (quel… ?, quelle… !) ; numéral (un, deux, trois).",
            "<b>Adjectif</b> : qualificatif (lumineux), participe passé employé comme adjectif (fatigué), adjectif verbal (charmant).",
            "<b>Pronom</b> : personnel (je, me, moi, le, la, lui) ; démonstratif (celui-ci, celle-là) ; possessif (le mien, le nôtre) ; indéfini (on, quelques-uns, certains) ; interrogatif (que… ?, qui… ?) ; relatif (qui, que, quoi, dont, où, lequel) ; adverbial (en, y).",
            "<b>Verbe</b> : verbe d'action (marcher, agir) ou verbe d'état (être, devenir, paraître, sembler)."
          ]
        },
        {
          titre: "Les classes grammaticales invariables",
          points: [
            "<b>Adverbe</b> : de négation (non, ne… pas) ; de lieu, temps, manière (ici, demain, facilement) ; de comparaison (plus… que) ; de liaison (cependant, en effet, puis) ; interrogatif (où… ?, pourquoi… ?).",
            "<b>Préposition</b> : à, dans, par, pour, en, vers, avec, de, sans, sous.",
            "<b>Conjonction de coordination</b> : mais, ou, et, or, ni, car. Attention, « donc » est une locution conjonctive ou un adverbe.",
            "<b>Conjonction de subordination</b> : que, quand, comme, si, et les composés en « que » (puisque, lorsque, alors que, parce que).",
            "<b>Interjection</b> : ah, ouf, zut, oups. <b>Onomatopée</b> : crac, boum, plouf."
          ]
        },
        {
          titre: "La classe grammaticale des groupes de mots",
          points: [
            "Pour donner la classe grammaticale d'un groupe, il faut <b>identifier son noyau</b>. Si le noyau est un nom, c'est un <b>groupe nominal (GN)</b> : [la <u>voiture</u> qui est garée sur le parking].",
            "<b>Groupe adjectival</b> : Je suis [<u>prêt</u> à te suivre].",
            "<b>Groupe infinitif</b> : Je voudrais [me <u>mettre</u> à l'escrime].",
            "<b>Proposition</b> : J'aimerais [que vous <u>répondiez</u> à quelques questions]. On distingue la relative, la complétive et la circonstancielle.",
            "Quand un groupe est précédé d'une préposition, on le précise : <b>GN prépositionnel</b> (sur la table, contre la voiture blanche) et <b>groupe infinitif prépositionnel</b> (pour me détendre, sans me tromper)."
          ]
        },
        {
          titre: "Les expansions du nom : épithète et complément du nom",
          points: [
            "L'<b>épithète</b> complète <b>directement</b> le nom, sans préposition. Cette fonction peut être exercée par un adjectif (une <b>jolie</b> parure), un groupe adjectival (une <b>très jolie</b> parure) ou une proposition subordonnée relative (une nouvelle <b>qui m'a plu</b>).",
            "Le <b>complément du nom</b> est <b>relié au nom par une préposition</b>. Cette fonction est exercée par un groupe prépositionnel : GN prépositionnel (la nouvelle <b>de Maupassant</b>, la table <b>en bois</b>) ou groupe infinitif prépositionnel (une histoire <b>à dormir debout</b>).",
            "Plusieurs compléments du nom peuvent être <b>imbriqués</b> l'un dans l'autre : le miroir <b>de la chambre de mon frère</b>.",
            "Plusieurs épithètes peuvent être <b>juxtaposées ou coordonnées</b> : un récit surprenant, passionnant, et qui m'a beaucoup plu."
          ]
        },
        {
          titre: "L'apposition",
          points: [
            "L'apposition est une expansion d'un <b>GN</b> ou d'un <b>nom propre</b>, dont elle est <b>séparée par une virgule</b>.",
            "Elle peut être un <b>adjectif</b> ou un groupe adjectival : ce récit, <b>très court</b>, …",
            "Elle peut être une <b>proposition subordonnée relative</b> : cette nouvelle, <b>que nous avons étudiée en classe</b>, …",
            "Elle peut être un <b>nom</b> ou un GN : Fatoumata, <b>une adolescente</b>, …"
          ]
        },
        {
          titre: "La proposition subordonnée relative",
          points: [
            "Une proposition subordonnée relative <b>complète un nom</b> (ou un pronom), appelé son <b>antécédent</b>. Exemple : Il aime les <u>histoires</u> [<b>qui</b> font peur] → « qui » reprend « histoires ».",
            "Elle occupe les <b>mêmes fonctions qu'un adjectif</b> : <b>épithète</b> (Le roman <b>que je lis</b> est passionnant) ou <b>apposition</b> (Ce roman, <b>qui a été publié l'année dernière</b>, est passionnant).",
            "Elle est introduite par un <b>pronom relatif</b>, qui a lui-même une <b>fonction dans la relative</b> : Le roman [<b>que</b> je lis] → « que » est COD du verbe « lis »."
          ]
        },
        {
          titre: "La forme des pronoms relatifs",
          points: [
            "<b>Sujet</b> : qui.",
            "<b>COD</b> : que.",
            "<b>Complément introduit par « de »</b> : dont.",
            "<b>Complément introduit par X + de</b> : près de qui, près duquel, de laquelle, desquels, desquelles ; pour le neutre, près de quoi.",
            "<b>Complément introduit par « à »</b> : à qui, auquel, à laquelle, auxquels, auxquelles ; pour le neutre, à quoi.",
            "<b>Complément introduit par d'autres prépositions</b> (avec, pour…) : pour qui, avec lequel, laquelle, lesquels, lesquelles ; pour le neutre, contre quoi.",
            "<b>Complément de lieu et de temps</b> : où (et chez qui pour le lieu avec une personne)."
          ]
        },
        {
          titre: "La méthode pour analyser une relative",
          points: [
            "On suit toujours le même modèle : proposition subordonnée relative introduite par le pronom relatif « … », qui a pour antécédent « … ». Elle a pour fonction … du GN …",
            "Exemple : Cosette [<b>qui</b> est une très jeune fille] travaille pour Mme Thénardier. → relative introduite par « qui », antécédent « Cosette », fonction épithète du nom « Cosette ». Dans la relative, « qui » est sujet du verbe « est ».",
            "Exemple : Cosette, [<b>dont</b> la mère s'appelle Fantine], vit dans une famille d'accueil. → relative introduite par « dont », antécédent « Cosette », fonction apposition car elle est séparée par des virgules."
          ]
        },
        {
          titre: "Classe grammaticale ou fonction ?",
          points: [
            "La <b>classe grammaticale</b> (ou nature) est ce qu'un mot est, et elle ne change jamais : « chien » est toujours un nom.",
            "La <b>fonction</b> est le rôle du mot dans une phrase précise, et elle change d'une phrase à l'autre : dans « Le chien dort », chien est sujet ; dans « Je vois le chien », chien est COD.",
            "Une question d'examen demande souvent les deux : « donnez la classe grammaticale <b>et</b> la fonction »."
          ]
        },
        {
          titre: "Le sujet",
          points: [
            "<b>Ce que c'est</b> : le sujet indique qui fait l'action, ou de qui ou de quoi on parle. Il commande l'accord du verbe.",
            "<b>Comment le trouver</b> : on pose la question « <b>Qui est-ce qui</b> + verbe ? » ou « Qu'est-ce qui + verbe ? ». On peut aussi l'encadrer par « <b>C'est … qui</b> ».",
            "Exemple : « Les élèves révisent. » → Qui est-ce qui révise ? <b>Les élèves</b>. On peut dire « Ce sont les élèves qui révisent ».",
            "Le sujet peut être placé après le verbe (sujet inversé) : « Que dit <b>le professeur</b> ? »"
          ]
        },
        {
          titre: "Le COD — complément d'objet direct",
          points: [
            "<b>Ce que c'est</b> : il complète le verbe <b>directement</b>, sans préposition. Il subit l'action.",
            "<b>Comment le trouver</b> : après le verbe, on pose « <b>qui ?</b> » ou « <b>quoi ?</b> ».",
            "Exemple : « Paul lit <b>un roman</b>. » → Paul lit quoi ? un roman → COD.",
            "<b>Test</b> : le COD n'est ni déplaçable ni supprimable. « Paul lit » tout seul est incomplet.",
            "Le COD peut être un GN, un pronom (« Paul <b>le</b> lit »), un infinitif (« Paul aime <b>lire</b> ») ou une proposition (« Paul dit <b>qu'il viendra</b> »)."
          ]
        }
      ],

      mots: [
        ["Classe grammaticale", "Catégorie à laquelle appartient un mot : nom, verbe, adjectif, adverbe, etc."],
        ["Classe variable", "Classe dont les mots changent de forme : nom, déterminant, adjectif, pronom, verbe."],
        ["Classe invariable", "Classe dont les mots ne changent jamais : adverbe, préposition, conjonctions, interjection, onomatopée."],
        ["Noyau", "Mot principal d'un groupe. Il donne sa classe grammaticale au groupe entier."],
        ["Expansion du nom", "Mot ou groupe de mots qui précise un nom : épithète, complément du nom, apposition."],
        ["Épithète", "Expansion qui complète directement le nom, sans préposition : une jolie parure."],
        ["Complément du nom", "Expansion reliée au nom par une préposition : la table en bois."],
        ["Apposition", "Expansion d'un GN ou d'un nom propre, séparée par une virgule : ce récit, très court, …"],
        ["Proposition subordonnée relative", "Proposition qui complète un nom, son antécédent, et joue le même rôle qu'un adjectif."],
        ["Antécédent", "Nom ou pronom que la proposition subordonnée relative vient compléter."],
        ["Pronom relatif", "Mot qui introduit la relative et qui a une fonction dans celle-ci : qui, que, dont, où, lequel."],
        ["Conjonction de coordination", "Mais, ou, et, or, ni, car. Elle relie deux éléments de même nature."],
        ["Conjonction de subordination", "Que, quand, comme, si et les composés en « que ». Elle introduit une subordonnée."],
        ["Interjection", "Mot invariable qui exprime une émotion : ah, ouf, zut, oups."],
        ["Onomatopée", "Mot qui imite un bruit : crac, boum, plouf."],
        ["Fonction", "Rôle d'un mot ou d'un groupe dans la phrase : sujet, COD, COI, attribut, complément circonstanciel…"],
        ["COD", "Complément d'objet direct : complète le verbe sans préposition. Question : qui ? quoi ?"],
        ["Préposition", "Petit mot invariable qui introduit un complément : à, de, dans, par, pour, en, vers, avec, sans, sous."]
      ],

      quiz: [
        { q: "Parmi ces classes grammaticales, laquelle est invariable ?",
          choix: ["Le nom", "L'adjectif", "L'adverbe", "Le déterminant"],
          bonne: 2,
          why: "Les invariables sont : adverbe, préposition, conjonctions, interjection, onomatopée." },

        { q: "« Plusieurs », « certains », « quelques » sont des :",
          choix: ["pronoms indéfinis", "déterminants indéfinis", "adverbes", "adjectifs qualificatifs"],
          bonne: 1,
          why: "Ils déterminent un nom. Attention : « on », « quelques-uns », « certains » employés seuls sont des pronoms indéfinis." },

        { q: "« Qui, que, quoi, dont, où, lequel » sont des :",
          choix: ["pronoms interrogatifs", "pronoms relatifs", "conjonctions de subordination", "déterminants"],
          bonne: 1,
          why: "Ils introduisent une proposition subordonnée relative." },

        { q: "Quelles sont les conjonctions de coordination ?",
          choix: ["mais, ou, et, or, ni, car", "que, quand, comme, si", "à, dans, par, pour", "ah, ouf, zut"],
          bonne: 0,
          why: "Attention : « donc » est en réalité une locution conjonctive ou un adverbe." },

        { q: "« Puisque », « lorsque », « parce que » sont des :",
          choix: ["conjonctions de coordination", "conjonctions de subordination", "adverbes de liaison", "prépositions"],
          bonne: 1,
          why: "Ce sont des composés en « que » : ils introduisent une subordonnée." },

        { q: "« Crac », « boum », « plouf » sont des :",
          choix: ["interjections", "onomatopées", "adverbes", "conjonctions"],
          bonne: 1,
          why: "Une onomatopée imite un bruit. « Ah », « ouf », « zut » sont des interjections." },

        { q: "Comment donne-t-on la classe grammaticale d'un groupe de mots ?",
          choix: ["En regardant le premier mot", "En identifiant le noyau du groupe", "En comptant les mots", "En regardant le dernier mot"],
          bonne: 1,
          why: "Si le noyau est un nom, il s'agit d'un groupe nominal." },

        { q: "Dans « sur la table », de quel type de groupe s'agit-il ?",
          choix: ["Un GN", "Un GN prépositionnel", "Un groupe adjectival", "Un groupe infinitif"],
          bonne: 1,
          why: "Quand un groupe est précédé d'une préposition, on le précise." },

        { q: "Qu'est-ce qu'une épithète ?",
          choix: ["Une expansion reliée au nom par une préposition", "Une expansion qui complète directement le nom", "Une expansion séparée par une virgule", "Un complément du verbe"],
          bonne: 1,
          why: "Une jolie parure : l'adjectif complète le nom sans préposition." },

        { q: "Une proposition subordonnée relative peut-elle être épithète ?",
          choix: ["Non, jamais", "Oui, elle occupe les mêmes fonctions qu'un adjectif", "Seulement si elle est entre virgules", "Seulement avec le pronom « dont »"],
          bonne: 1,
          why: "Le roman que je lis est passionnant : la relative est épithète du nom « roman »." },

        { q: "Comment appelle-t-on le nom que complète une proposition subordonnée relative ?",
          choix: ["Le noyau", "L'antécédent", "Le référent", "Le complément"],
          bonne: 1,
          why: "Dans « les histoires qui font peur », l'antécédent de « qui » est « histoires »." },

        { q: "Dans « Le roman que je lis », quelle est la fonction du pronom relatif « que » ?",
          choix: ["Sujet", "COD du verbe « lis »", "Complément du nom", "Attribut"],
          bonne: 1,
          why: "Le pronom relatif a toujours une fonction à l'intérieur de la relative." },

        { q: "Quel pronom relatif utilise-t-on pour un complément introduit par « de » ?",
          choix: ["qui", "que", "dont", "où"],
          bonne: 2,
          why: "Cet homme, dont je me souviens… (se souvenir de quelqu'un)." },

        { q: "Quel pronom relatif utilise-t-on pour un complément de lieu ou de temps ?",
          choix: ["dont", "où", "que", "lequel"],
          bonne: 1,
          why: "Une île où le soleil ne se couche jamais." },

        { q: "Quel pronom relatif correspond à la fonction sujet ?",
          choix: ["qui", "que", "dont", "quoi"],
          bonne: 0,
          why: "Il aime les histoires qui font peur : « qui » est sujet de « font »." },

        { q: "Dans « Cosette, dont la mère s'appelle Fantine, vit dans une famille d'accueil », quelle est la fonction de la relative ?",
          choix: ["Épithète", "Apposition", "Complément du nom", "COD"],
          bonne: 1,
          why: "Elle est séparée par des virgules, donc apposition." },

        { q: "Dans « une histoire à dormir debout », « à dormir debout » est :",
          choix: ["un GN prépositionnel", "un groupe infinitif prépositionnel", "une proposition relative", "un adverbe"],
          bonne: 1,
          why: "Le noyau est l'infinitif « dormir », précédé de la préposition « à ». Sa fonction est complément du nom." },

        { q: "Plusieurs compléments du nom peuvent-ils être imbriqués ?",
          choix: ["Non, jamais", "Oui : le miroir de la chambre de mon frère", "Seulement avec « de »", "Seulement dans un texte littéraire"],
          bonne: 1,
          why: "« de la chambre de mon frère » complète « miroir », et « de mon frère » complète « chambre »." },

        { q: "« Fatigué » dans « un homme fatigué » est :",
          choix: ["un verbe", "un participe passé employé comme adjectif", "un adverbe", "un nom"],
          bonne: 1,
          why: "Un participe passé peut fonctionner comme un adjectif qualificatif." },
        { q: "Quelle est la différence entre classe grammaticale et fonction ?",
          choix: ["Il n'y en a pas", "La classe dit ce qu'un mot est, la fonction dit ce qu'il fait dans la phrase", "La classe change selon la phrase", "La fonction ne change jamais"],
          bonne: 1,
          why: "« Chien » est toujours un nom, mais il peut être sujet dans une phrase et COD dans une autre." },

        { q: "Quelle question pose-t-on pour trouver le sujet ?",
          choix: ["Qui est-ce qui + verbe ?", "Quoi ? après le verbe", "À qui ?", "Comment ?"],
          bonne: 0,
          why: "On peut aussi encadrer par « C'est … qui »." },

        { q: "Quelle question pose-t-on pour trouver le COD ?",
          choix: ["Qui est-ce qui ?", "Qui ? ou quoi ? après le verbe", "À qui ? à quoi ?", "Où ? quand ?"],
          bonne: 1,
          why: "Le COD suit le verbe sans préposition." },

        { q: "Dans « Paul, mon voisin, est arrivé », quelle est la fonction de « mon voisin » ?",
          choix: ["Épithète", "Apposition", "COD", "Attribut"],
          bonne: 1,
          why: "L'apposition est séparée par des virgules." },
      ]
    }
    ,
    {
      id: 'ma-ch1',
      matiere: 'maths',
      numero: 'Chapitre 1',
      titre: "Calcul numérique",
      periode: "Fractions, puissances et écriture scientifique",
      theme: "Écriture fractionnaire, puissances d'un nombre relatif, écriture scientifique et règles de calcul",

      essentiel: [
        "Deux fractions sont égales si on multiplie ou divise le numérateur <b>et</b> le dénominateur par le même nombre non nul.",
        "Pour <b>additionner</b> on met au même dénominateur ; pour <b>multiplier</b> on multiplie les numérateurs entre eux et les dénominateurs entre eux ; pour <b>diviser</b> on multiplie par l'inverse.",
        "aⁿ = a × a × … × a avec n facteurs. <b>a⁻ⁿ = 1/aⁿ</b> et <b>a⁰ = 1</b> pour tout a non nul.",
        "Les quatre règles : aⁿ × aᵖ = aⁿ⁺ᵖ, aⁿ ÷ aᵖ = aⁿ⁻ᵖ, (aⁿ)ᵖ = aⁿˣᵖ, (a × b)ⁿ = aⁿ × bⁿ.",
        "Écriture scientifique : <b>a × 10ⁿ</b> avec <b>1 ≤ a < 10</b>, donc un seul chiffre non nul avant la virgule."
      ],

      sections: [
        {
          titre: "Égalité de deux fractions",
          points: [
            "Deux écritures fractionnaires sont égales si on multiplie ou si on divise le numérateur et le dénominateur par un <b>même nombre non nul</b> : a/b = (a × k) / (b × k).",
            "<b>Simplifier</b> : 49/21 = (7 × 7)/(7 × 3) = 7/3. On simplifie par 7.",
            "<b>Transformer en fraction</b> : 2,2/6,61 = 220/661. On multiplie les deux nombres par 100 pour enlever les virgules.",
            "<b>Produit en croix</b> : si a/b = c/d alors a × d = b × c. Et inversement, si a × d = b × c alors a/b = c/d. C'est l'égalité des rapports."
          ]
        },
        {
          titre: "Addition et soustraction",
          points: [
            "Pour additionner deux nombres en écriture fractionnaire, il faut d'abord les mettre au <b>même dénominateur</b>. On additionne alors les numérateurs et on <b>garde le dénominateur commun</b> : a/b + c/b = (a + c)/b.",
            "Exemple : 2/7 + 5/14 = (2 × 2)/(7 × 2) + 5/14 = 4/14 + 5/14 = <b>9/14</b>.",
            "Erreur classique à éviter : on n'additionne <b>jamais</b> les dénominateurs entre eux.",
            "Pour trouver le dénominateur commun, on cherche un multiple commun aux deux dénominateurs — souvent leur produit, mais le plus petit est plus pratique."
          ]
        },
        {
          titre: "Multiplication",
          points: [
            "Pour multiplier deux nombres en écriture fractionnaire, on multiplie les <b>numérateurs entre eux</b> et les <b>dénominateurs entre eux</b> : (a/b) × (c/d) = (a × c)/(b × d).",
            "Il est préférable de <b>simplifier les facteurs communs avant</b> d'effectuer les multiplications : les calculs sont plus courts et le résultat est déjà simplifié.",
            "Exemple : 3/5 × (−7)/8 = (3 × (−7))/(5 × 8) = <b>−21/40</b>.",
            "Contrairement à l'addition, il n'y a <b>pas besoin</b> de mettre au même dénominateur pour multiplier."
          ]
        },
        {
          titre: "Division",
          points: [
            "Pour diviser par un nombre non nul, on peut <b>multiplier par son inverse</b>.",
            "L'inverse de a/b est b/a. L'inverse de 5 est 1/5.",
            "(a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d)/(b × c), avec b, c et d non nuls.",
            "Exemple : (3/8) ÷ (−5) = 3/8 × 1/(−5) = <b>−3/40</b>.",
            "Exemple avec une fraction de fractions : (3/4)/(4/5) = 3/4 ÷ 4/5 = 3/4 × 5/4 = <b>15/16</b>."
          ]
        },
        {
          titre: "La méthode pour un calcul avec plusieurs fractions",
          points: [
            "On respecte les <b>priorités opératoires</b> : parenthèses, puis puissances, puis multiplications et divisions, puis additions et soustractions.",
            "On transforme les divisions en multiplications par l'inverse.",
            "On met au même dénominateur uniquement pour les additions et soustractions.",
            "On simplifie le résultat final autant que possible."
          ]
        },
        {
          titre: "Puissance d'un nombre relatif",
          points: [
            "Si a est un nombre relatif et n un entier positif : <b>aⁿ = a × a × … × a</b>, avec n facteurs. n s'appelle l'<b>exposant</b>.",
            "Exemple : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Attention à ne pas confondre avec 2 × 5 = 10.",
            "Exposant négatif : <b>a⁻ⁿ = 1/aⁿ</b>. Exemple : 2⁻⁵ = 1/2⁵ = 1/32.",
            "Cas particuliers : <b>a¹ = a</b> (un nombre sans exposant est toujours à la puissance 1), <b>a⁰ = 1</b> par convention pour tout a non nul, et <b>a⁻¹ = 1/a</b> est l'inverse de a.",
            "Exemple avec une fraction : (−3/2)³ = (−3/2) × (−3/2) × (−3/2) = −27/8."
          ]
        },
        {
          titre: "Le piège des signes",
          points: [
            "<b>(−5)³ = (−5) × (−5) × (−5) = −125</b>, alors que 5⁻³ = 1/5³ = 1/125. Ce sont deux choses complètement différentes.",
            "<b>(−2)⁴ = (−2) × (−2) × (−2) × (−2) = +16</b> : quatre facteurs négatifs, le résultat est positif.",
            "<b>−2⁴ = −(2 × 2 × 2 × 2) = −16</b> : ici le signe moins n'est pas dans la puissance.",
            "Règle à retenir : un nombre négatif élevé à une puissance <b>paire</b> donne un résultat positif ; à une puissance <b>impaire</b>, un résultat négatif."
          ]
        },
        {
          titre: "Les puissances de 10",
          points: [
            "<b>10ⁿ = 10 × 10 × … × 10</b> (n facteurs) = 1 suivi de <b>n zéros</b>. Exemple : 10⁴ = 10 000 (il y a 4 zéros).",
            "<b>10⁻ⁿ = 1/10ⁿ = 0,00…01</b> avec <b>n chiffres après la virgule</b>, le dernier étant un 1. Exemple : 10⁻³ = 0,001 (3 chiffres après la virgule).",
            "Pour multiplier par 10ⁿ, on décale la virgule de n rangs vers la droite : 23,5 × 10³ = 23 500.",
            "Pour multiplier par 10⁻ⁿ, on décale la virgule de n rangs vers la gauche : 23,5 × 10⁻² = 0,235."
          ]
        },
        {
          titre: "Les règles de calcul",
          points: [
            "<b>aⁿ × aᵖ = aⁿ⁺ᵖ</b> : on additionne les exposants. Exemple : 2³ × 2⁴ = 2⁷.",
            "<b>aⁿ ÷ aᵖ = aⁿ⁻ᵖ</b> : on soustrait les exposants. Exemple : 7⁶ ÷ 7² = 7⁴.",
            "<b>(aⁿ)ᵖ = aⁿˣᵖ</b> : on multiplie les exposants. Exemple : (10³)² = 10⁶.",
            "<b>(a × b)ⁿ = aⁿ × bⁿ</b> : l'exposant se distribue sur un produit. Exemple : (3a)² = 9a².",
            "Attention : ces règles ne marchent que si la <b>base est la même</b>. 2³ × 5³ ne se simplifie pas en additionnant les exposants."
          ]
        },
        {
          titre: "L'écriture scientifique",
          points: [
            "L'écriture scientifique d'un nombre décimal est de la forme <b>a × 10ⁿ</b>, avec <b>1 ≤ a < 10</b> : a n'a qu'un seul chiffre, non nul, avant la virgule. n est un entier relatif.",
            "Exemples : 45 000 = <b>4,5 × 10⁴</b> et 0,0032 = <b>3,2 × 10⁻³</b>.",
            "23 500 = 235 × 10² = 23,5 × 10³ = <b>2,35 × 10⁴</b> : seule la dernière est l'écriture scientifique, car 2,35 est bien compris entre 1 et 10.",
            "Méthode : on place la virgule après le premier chiffre non nul, puis on compte de combien de rangs on l'a déplacée. Vers la gauche l'exposant est positif, vers la droite il est négatif."
          ]
        },
        {
          titre: "Les préfixes à connaître",
          points: [
            "<b>Tera</b> (T) = 10¹² — <b>Giga</b> (G) = 10⁹ — <b>Méga</b> (M) = 10⁶ — <b>kilo</b> (k) = 10³.",
            "<b>hecto</b> (h) = 10² — <b>déca</b> (da) = 10 — <b>déci</b> (d) = 10⁻¹ — <b>centi</b> (c) = 10⁻².",
            "<b>milli</b> (m) = 10⁻³ — <b>micro</b> (µ) = 10⁻⁶ — <b>nano</b> (n) = 10⁻⁹ — <b>pico</b> (p) = 10⁻¹².",
            "Exemple : 27 504 000 watts = 27,5 mégawatts, car un mégawatt vaut 10⁶ watts."
          ]
        }
      ],

      mots: [
        ["Numérateur", "Le nombre du haut dans une fraction."],
        ["Dénominateur", "Le nombre du bas dans une fraction. Il ne peut jamais être nul."],
        ["Simplifier une fraction", "Diviser le numérateur et le dénominateur par un même nombre pour obtenir une fraction égale plus simple."],
        ["Inverse d'un nombre", "Le nombre par lequel il faut le multiplier pour obtenir 1. L'inverse de a/b est b/a."],
        ["Opposé d'un nombre", "Le nombre de signe contraire. L'opposé de 3/4 est −3/4. À ne pas confondre avec l'inverse."],
        ["Produit en croix", "Si a/b = c/d, alors a × d = b × c."],
        ["Dénominateur commun", "Dénominateur identique auquel on ramène deux fractions pour pouvoir les additionner."],
        ["Priorités opératoires", "Parenthèses, puis puissances, puis × et ÷, puis + et −."],
        ["Puissance", "aⁿ se lit « a exposant n ». C'est le produit de n facteurs égaux à a."],
        ["Exposant", "Le petit nombre écrit en haut à droite. Il indique combien de fois on multiplie la base par elle-même."],
        ["Base", "Le nombre que l'on multiplie par lui-même. Dans 2⁵, la base est 2."],
        ["Écriture scientifique", "Écriture de la forme a × 10ⁿ avec 1 ≤ a < 10."],
        ["Exposant négatif", "a⁻ⁿ = 1/aⁿ. L'exposant négatif donne l'inverse, pas un nombre négatif."],
        ["Ordre de grandeur", "Puissance de 10 la plus proche d'un nombre, utile pour comparer rapidement deux nombres."],
        ["Méga", "Préfixe valant 10⁶, soit un million."],
        ["Micro", "Préfixe valant 10⁻⁶, soit un millionième."]
      ],

      quiz: [
        { q: "Comment obtient-on une fraction égale à une autre ?",
          choix: ["En ajoutant le même nombre en haut et en bas", "En multipliant ou divisant le numérateur et le dénominateur par un même nombre non nul", "En multipliant seulement le numérateur", "En inversant la fraction"],
          bonne: 1,
          why: "a/b = (a × k)/(b × k). Ajouter ne marche pas : 1/2 n'est pas égal à 2/3." },

        { q: "Combien vaut 49/21 une fois simplifiée ?",
          choix: ["7/3", "49/21", "3/7", "7/21"],
          bonne: 0,
          why: "49/21 = (7 × 7)/(7 × 3) : on simplifie par 7." },

        { q: "Que faut-il faire avant d'additionner deux fractions ?",
          choix: ["Les simplifier", "Les mettre au même dénominateur", "Les inverser", "Multiplier les dénominateurs entre eux"],
          bonne: 1,
          why: "On ne peut additionner que des fractions qui ont le même dénominateur." },

        { q: "Combien vaut 2/7 + 5/14 ?",
          choix: ["7/21", "9/14", "7/14", "10/14"],
          bonne: 1,
          why: "2/7 = 4/14, donc 4/14 + 5/14 = 9/14. On garde le dénominateur commun." },

        { q: "Quand on additionne deux fractions de même dénominateur, que fait-on du dénominateur ?",
          choix: ["On l'additionne aussi", "On le garde tel quel", "On le multiplie par 2", "On le simplifie"],
          bonne: 1,
          why: "a/b + c/b = (a + c)/b. Additionner les dénominateurs est l'erreur la plus fréquente." },

        { q: "Comment multiplie-t-on deux fractions ?",
          choix: ["Numérateurs entre eux et dénominateurs entre eux", "En mettant au même dénominateur", "En multipliant en croix", "En multipliant par l'inverse"],
          bonne: 0,
          why: "(a/b) × (c/d) = (a × c)/(b × d). Pas besoin de dénominateur commun." },

        { q: "Combien vaut 3/5 × (−7)/8 ?",
          choix: ["−21/40", "21/40", "−10/13", "−21/13"],
          bonne: 0,
          why: "(3 × (−7))/(5 × 8) = −21/40." },

        { q: "Pourquoi vaut-il mieux simplifier avant de multiplier ?",
          choix: ["Parce que c'est obligatoire", "Parce que les calculs sont plus courts et le résultat déjà simplifié", "Parce que sinon le résultat est faux", "Parce que cela change la valeur"],
          bonne: 1,
          why: "Le résultat est le même, mais on évite de manipuler de grands nombres." },

        { q: "Pour diviser par une fraction, que fait-on ?",
          choix: ["On divise les numérateurs et les dénominateurs", "On multiplie par son inverse", "On multiplie par son opposé", "On met au même dénominateur"],
          bonne: 1,
          why: "(a/b) ÷ (c/d) = (a/b) × (d/c)." },

        { q: "Quel est l'inverse de 3/8 ?",
          choix: ["−3/8", "8/3", "3/8", "−8/3"],
          bonne: 1,
          why: "On échange numérateur et dénominateur. L'opposé, lui, serait −3/8." },

        { q: "Quel est l'opposé de 3/4 ?",
          choix: ["4/3", "−3/4", "−4/3", "3/4"],
          bonne: 1,
          why: "L'opposé change le signe ; l'inverse échange le haut et le bas." },

        { q: "Combien vaut (3/4) ÷ (4/5) ?",
          choix: ["12/20", "15/16", "16/15", "3/5"],
          bonne: 1,
          why: "3/4 × 5/4 = 15/16." },

        { q: "Combien vaut (3/8) ÷ (−5) ?",
          choix: ["−3/40", "−15/8", "3/40", "−40/3"],
          bonne: 0,
          why: "Diviser par −5, c'est multiplier par 1/(−5) : 3/8 × 1/(−5) = −3/40." },

        { q: "Si a/b = c/d, quelle égalité peut-on écrire ?",
          choix: ["a + d = b + c", "a × d = b × c", "a × b = c × d", "a − c = b − d"],
          bonne: 1,
          why: "C'est le produit en croix, aussi appelé égalité des rapports." },

        { q: "Comment transformer 2,2/6,61 en fraction sans virgule ?",
          choix: ["En multipliant les deux nombres par 10", "En multipliant les deux nombres par 100", "En arrondissant", "En divisant par 100"],
          bonne: 1,
          why: "2,2/6,61 = 220/661. Il faut multiplier en haut ET en bas par le même nombre." },

        { q: "Dans quel ordre effectue-t-on les calculs ?",
          choix: ["De gauche à droite toujours", "Parenthèses, puissances, × et ÷, puis + et −", "Additions d'abord", "Multiplications en dernier"],
          bonne: 1,
          why: "Ce sont les priorités opératoires. Les parenthèses passent toujours en premier." },

        { q: "Combien vaut 1/6 + 3/6 ?",
          choix: ["4/12", "4/6, soit 2/3", "3/36", "4/6 sans simplification possible"],
          bonne: 1,
          why: "Même dénominateur : on additionne les numérateurs, puis on simplifie par 2." },

        { q: "Un dénominateur peut-il être égal à zéro ?",
          choix: ["Oui, cela donne zéro", "Non, jamais", "Oui si le numérateur est aussi zéro", "Seulement dans une division"],
          bonne: 1,
          why: "La division par zéro n'existe pas : le dénominateur doit toujours être non nul." },

        { q: "Combien vaut 8/12 une fois simplifiée ?",
          choix: ["2/3", "4/6", "2/4", "8/12 est déjà simplifiée"],
          bonne: 0,
          why: "On divise en haut et en bas par 4. 4/6 est correct mais pas complètement simplifié." },

        { q: "Combien vaut 5 + 3/2 ?",
          choix: ["8/2", "13/2", "5,3", "8/3"],
          bonne: 1,
          why: "5 = 10/2, donc 10/2 + 3/2 = 13/2." },

        { q: "Que vaut 40/72 simplifiée ?",
          choix: ["5/9", "4/7", "20/36", "10/18"],
          bonne: 0,
          why: "On divise par 8. 20/36 et 10/18 sont égales mais pas simplifiées au maximum." },

        { q: "Pour multiplier deux fractions, faut-il le même dénominateur ?",
          choix: ["Oui, toujours", "Non, jamais nécessaire", "Seulement si les numérateurs diffèrent", "Seulement avec des nombres négatifs"],
          bonne: 1,
          why: "Le même dénominateur n'est nécessaire que pour l'addition et la soustraction." },
        { q: "Combien vaut 2⁵ ?",
          choix: ["10", "25", "32", "16"],
          bonne: 2,
          why: "2 × 2 × 2 × 2 × 2 = 32. Il ne faut pas confondre avec 2 × 5 = 10." },

        { q: "Que vaut a⁰ pour tout nombre a non nul ?",
          choix: ["0", "1", "a", "Cela n'existe pas"],
          bonne: 1,
          why: "C'est une convention : tout nombre non nul à la puissance 0 vaut 1." },

        { q: "Que signifie un exposant négatif, comme dans 2⁻⁵ ?",
          choix: ["Le résultat est négatif", "C'est l'inverse : 1/2⁵", "Il faut soustraire", "L'exposant ne compte pas"],
          bonne: 1,
          why: "a⁻ⁿ = 1/aⁿ. Donc 2⁻⁵ = 1/32, un nombre positif." },

        { q: "Combien vaut (−2)⁴ ?",
          choix: ["−16", "+16", "−8", "+8"],
          bonne: 1,
          why: "Quatre facteurs négatifs : les signes s'annulent deux à deux, le résultat est positif." },

        { q: "Combien vaut −2⁴ ?",
          choix: ["+16", "−16", "−8", "+8"],
          bonne: 1,
          why: "Ici le signe moins est en dehors de la puissance : −(2 × 2 × 2 × 2) = −16. Attention à la différence avec (−2)⁴." },

        { q: "Combien vaut (−5)³ ?",
          choix: ["−125", "+125", "−15", "1/125"],
          bonne: 0,
          why: "Puissance impaire d'un nombre négatif : le résultat reste négatif." },

        { q: "Combien de zéros y a-t-il dans 10⁴ ?",
          choix: ["3", "4", "5", "10"],
          bonne: 1,
          why: "10⁴ = 10 000 : 1 suivi de 4 zéros." },

        { q: "Combien vaut 10⁻³ ?",
          choix: ["−1000", "0,001", "0,0001", "−0,001"],
          bonne: 1,
          why: "3 chiffres après la virgule, le dernier est un 1." },

        { q: "Que vaut 2³ × 2⁴ ?",
          choix: ["2⁷", "2¹²", "4⁷", "2¹"],
          bonne: 0,
          why: "Même base : on additionne les exposants." },

        { q: "Que vaut 7⁶ ÷ 7² ?",
          choix: ["7³", "7⁴", "7⁸", "7¹²"],
          bonne: 1,
          why: "Même base : on soustrait les exposants, 6 − 2 = 4." },

        { q: "Que vaut (10³)² ?",
          choix: ["10⁵", "10⁶", "10⁹", "100³"],
          bonne: 1,
          why: "(aⁿ)ᵖ = aⁿˣᵖ : on multiplie les exposants, 3 × 2 = 6." },

        { q: "Que vaut (a × b)ⁿ ?",
          choix: ["aⁿ + bⁿ", "aⁿ × bⁿ", "(a + b)ⁿ", "aⁿ ÷ bⁿ"],
          bonne: 1,
          why: "L'exposant se distribue sur un produit. Exemple : (3a)² = 9a²." },

        { q: "Quelle est la forme d'une écriture scientifique ?",
          choix: ["a × 10ⁿ avec 0 < a < 1", "a × 10ⁿ avec 1 ≤ a < 10", "a × 10ⁿ avec a entier", "a × 2ⁿ"],
          bonne: 1,
          why: "Un seul chiffre non nul avant la virgule." },

        { q: "Quelle est l'écriture scientifique de 45 000 ?",
          choix: ["45 × 10³", "4,5 × 10⁴", "0,45 × 10⁵", "4,5 × 10³"],
          bonne: 1,
          why: "4,5 est bien compris entre 1 et 10. Les autres écritures sont égales mais pas scientifiques." },

        { q: "Quelle est l'écriture scientifique de 0,0032 ?",
          choix: ["3,2 × 10³", "3,2 × 10⁻³", "32 × 10⁻⁴", "0,32 × 10⁻²"],
          bonne: 1,
          why: "On déplace la virgule de 3 rangs vers la droite, donc l'exposant est négatif." },

        { q: "Parmi ces écritures de 23 500, laquelle est l'écriture scientifique ?",
          choix: ["235 × 10²", "23,5 × 10³", "2,35 × 10⁴", "0,235 × 10⁵"],
          bonne: 2,
          why: "Toutes valent 23 500, mais seul 2,35 est compris entre 1 et 10." },

        { q: "Combien vaut 23,5 × 10³ ?",
          choix: ["2 350", "23 500", "235 000", "0,0235"],
          bonne: 1,
          why: "On décale la virgule de 3 rangs vers la droite." },

        { q: "Combien vaut 23,5 × 10⁻² ?",
          choix: ["2,35", "0,235", "0,0235", "2 350"],
          bonne: 1,
          why: "Exposant négatif : on décale la virgule de 2 rangs vers la gauche." },

        { q: "À quelle puissance de 10 correspond le préfixe « méga » ?",
          choix: ["10³", "10⁶", "10⁹", "10⁻⁶"],
          bonne: 1,
          why: "Méga = un million. Giga vaut 10⁹ et kilo 10³." },

        { q: "À quelle puissance de 10 correspond le préfixe « milli » ?",
          choix: ["10⁻²", "10⁻³", "10⁻⁶", "10³"],
          bonne: 1,
          why: "Milli = un millième. Micro vaut 10⁻⁶." },

        { q: "27 504 000 watts, cela fait combien de mégawatts ?",
          choix: ["2,75", "27,5", "275", "2 750"],
          bonne: 1,
          why: "On divise par 10⁶ : 27 504 000 / 1 000 000 ≈ 27,5." },

        { q: "Que vaut (3 × 10⁴) × (2 × 10²) en écriture scientifique ?",
          choix: ["6 × 10⁶", "6 × 10⁸", "5 × 10⁶", "6 × 10²"],
          bonne: 0,
          why: "On multiplie les nombres entre eux (3 × 2 = 6) et on additionne les exposants (4 + 2 = 6)." },

        { q: "Que vaut (6 × 10⁵) ÷ (3 × 10²) ?",
          choix: ["2 × 10³", "2 × 10⁷", "3 × 10³", "2 × 10²"],
          bonne: 0,
          why: "6 ÷ 3 = 2, et on soustrait les exposants : 5 − 2 = 3." }
      ]
    },
    {
      id: 'ma-ch2',
      matiere: 'maths',
      numero: 'Chapitre 2',
      titre: "Le théorème de Thalès et sa réciproque",
      periode: "Géométrie — chapitre en cours",
      theme: "Calculer des longueurs et démontrer que des droites sont parallèles",

      essentiel: [
        "Thalès sert à <b>calculer une longueur</b> quand on sait déjà que deux droites sont <b>parallèles</b>.",
        "La <b>réciproque</b> sert à <b>démontrer que deux droites sont parallèles</b> en comparant deux rapports.",
        "Configuration : deux droites sécantes en A, avec B et M sur l'une, C et N sur l'autre. Si (BC) // (MN), alors AM/AB = AN/AC = MN/BC.",
        "Pour la réciproque, il ne suffit pas que les rapports soient égaux : les points doivent être <b>alignés dans le même ordre</b>.",
        "On n'utilise <b>jamais de valeurs approchées</b> pour affirmer que deux quotients sont égaux."
      ],

      sections: [
        {
          titre: "Le théorème de Thalès",
          points: [
            "Soient deux droites (d) et (d') <b>sécantes en A</b>. B et M sont deux points de (d) distincts de A. C et N sont deux points de (d') distincts de A.",
            "<b>Si les droites (BC) et (MN) sont parallèles</b>, alors <b>AM/AB = AN/AC = MN/BC</b>.",
            "M et N peuvent être situés de l'autre côté de A par rapport à B et C : on parle alors d'une configuration « <b>en papillon</b> » ou « croisée ». Le théorème s'applique de la même façon.",
            "Le premier rapport comporte les noms des points de la droite (d), le second ceux de la droite (d'). Il faut écrire les rapports dans le bon ordre."
          ]
        },
        {
          titre: "La réciproque du théorème de Thalès",
          points: [
            "Soient (d) et (d') deux droites sécantes en A, avec B et M sur (d) et C et N sur (d'), tous distincts de A.",
            "<b>Si les points A, B, M d'une part et A, C, N d'autre part sont alignés dans le même ordre, et si AM/AB = AN/AC</b>, alors les droites <b>(BC) et (MN) sont parallèles</b>.",
            "<b>Attention</b> : il ne suffit pas de vérifier l'égalité des rapports. Il faut aussi s'assurer que les points sont bien placés dans le <b>même ordre</b>.",
            "<b>Attention</b> : il ne faut pas utiliser de valeurs approchées pour affirmer que deux quotients sont égaux. On compare des fractions exactes."
          ]
        },
        {
          titre: "Application 1 : calculer une longueur",
          points: [
            "On commence toujours par écrire les <b>hypothèses</b> : quelles droites sont sécantes et en quel point, et quelles droites sont parallèles.",
            "On applique le théorème et on écrit la <b>double égalité des rapports</b>.",
            "On remplace par les valeurs connues, puis on utilise le <b>produit en croix</b> pour trouver la longueur cherchée.",
            "Exemple : (CD) et (HT) parallèles, DG = 25 mm, GH = 45 mm, CG = 20 mm, HT = 27 mm. On écrit GC/GT = GD/GH = CD/HT, soit 20/GT = 25/45 = CD/27.",
            "Calcul de GT : 25 × GT = 45 × 20, donc GT = (45 × 20)/25 = <b>36 mm</b>.",
            "Calcul de CD : 25 × 27 = 45 × CD, donc CD = (25 × 27)/45 = <b>15 mm</b>."
          ]
        },
        {
          titre: "Application 2 : montrer que des droites ne sont pas parallèles",
          points: [
            "On calcule les <b>deux rapports séparément</b>, et on les met au même dénominateur pour les comparer sans arrondir.",
            "Exemple : TR = 11 cm, TS = 8 cm, TM = 15 cm, TE = 10 cm. D'une part TR/TM = 11/15 = 22/30. D'autre part TS/TE = 8/10 = 24/30.",
            "On constate que TR/TM ≠ TS/TE, <b>donc les droites (RS) et (ME) ne sont pas parallèles</b>.",
            "Remarquer l'astuce : mettre les deux fractions au même dénominateur (ici 30) permet de conclure de façon exacte."
          ]
        },
        {
          titre: "Application 3 : montrer que des droites sont parallèles",
          points: [
            "Exemple : MH = 4, MA = 3, MT = 8, ML = 6. D'une part MH/MA = 4/3. D'autre part MT/ML = 8/6 = 4/3.",
            "On constate que MH/MA = MT/ML. <b>De plus</b>, les points A, M, H d'une part et les points L, M, T d'autre part sont <b>alignés dans le même ordre</b>.",
            "<b>Donc d'après la réciproque du théorème de Thalès, les droites (AL) et (HT) sont parallèles.</b>",
            "La phrase de conclusion doit toujours contenir les trois éléments : l'égalité des rapports, l'alignement dans le même ordre, et le nom du théorème utilisé."
          ]
        }
      ],

      mots: [
        ["Droites sécantes", "Deux droites qui se coupent en un point."],
        ["Configuration de Thalès", "Deux droites sécantes coupées par deux droites parallèles."],
        ["Configuration papillon", "Cas où les deux triangles sont de part et d'autre du point d'intersection. Le théorème s'applique quand même."],
        ["Rapport", "Quotient de deux longueurs, par exemple AM/AB."],
        ["Réciproque d'un théorème", "Énoncé qui échange l'hypothèse et la conclusion. Thalès calcule des longueurs ; sa réciproque démontre un parallélisme."],
        ["Produit en croix", "Si a/b = c/d, alors a × d = b × c. C'est l'outil pour trouver la longueur manquante."],
        ["Valeur approchée", "Résultat arrondi. Interdit pour démontrer une égalité de rapports."]
      ],

      quiz: [
        { q: "À quoi sert le théorème de Thalès ?",
          choix: ["À démontrer que deux droites sont parallèles", "À calculer une longueur quand on sait que deux droites sont parallèles", "À calculer un angle", "À démontrer qu'un triangle est rectangle"],
          bonne: 1,
          why: "C'est sa réciproque qui sert à démontrer le parallélisme." },

        { q: "À quoi sert la réciproque du théorème de Thalès ?",
          choix: ["À calculer une longueur", "À démontrer que deux droites sont parallèles", "À calculer une aire", "À trouver un angle droit"],
          bonne: 1,
          why: "On compare deux rapports : s'ils sont égaux et que les points sont dans le même ordre, les droites sont parallèles." },

        { q: "Quelle est l'hypothèse du théorème de Thalès ?",
          choix: ["Les droites (BC) et (MN) sont parallèles", "Les rapports sont égaux", "Le triangle est rectangle", "Les points sont alignés dans le même ordre"],
          bonne: 0,
          why: "On part du parallélisme pour obtenir l'égalité des rapports." },

        { q: "Dans la configuration de Thalès, que donne le théorème ?",
          choix: ["AM/AB = AN/AC = MN/BC", "AM × AB = AN × AC", "AM + AB = AN + AC", "AM/AN = AB/BC"],
          bonne: 0,
          why: "C'est une double égalité de trois rapports." },

        { q: "Comment appelle-t-on la configuration où M et N sont de l'autre côté de A ?",
          choix: ["Configuration triangle", "Configuration papillon ou croisée", "Configuration inversée", "Configuration parallèle"],
          bonne: 1,
          why: "Le théorème s'applique exactement de la même façon." },

        { q: "Pour appliquer la réciproque, que faut-il vérifier en plus de l'égalité des rapports ?",
          choix: ["Que les longueurs sont entières", "Que les points sont alignés dans le même ordre", "Que le triangle est isocèle", "Que les droites sont perpendiculaires"],
          bonne: 1,
          why: "C'est la condition que les élèves oublient le plus souvent." },

        { q: "Peut-on utiliser des valeurs arrondies pour comparer deux rapports ?",
          choix: ["Oui, si on garde deux décimales", "Non, jamais", "Oui, si les nombres sont grands", "Seulement avec une calculatrice"],
          bonne: 1,
          why: "Deux valeurs arrondies identiques ne prouvent pas que les fractions sont égales." },

        { q: "TR/TM = 11/15 et TS/TE = 8/10. Que peut-on conclure ?",
          choix: ["Les droites sont parallèles", "Les droites ne sont pas parallèles", "On ne peut rien conclure", "Les triangles sont égaux"],
          bonne: 1,
          why: "11/15 = 22/30 et 8/10 = 24/30 : les rapports sont différents." },

        { q: "Pourquoi met-on les deux rapports au même dénominateur ?",
          choix: ["Pour simplifier l'écriture", "Pour les comparer de façon exacte, sans arrondir", "Parce que c'est obligatoire", "Pour calculer plus vite"],
          bonne: 1,
          why: "C'est ce qui permet de conclure rigoureusement." },

        { q: "MH/MA = 4/3 et MT/ML = 8/6. Les rapports sont-ils égaux ?",
          choix: ["Non", "Oui, car 8/6 se simplifie en 4/3", "On ne peut pas savoir", "Seulement si les droites sont parallèles"],
          bonne: 1,
          why: "8/6 = 4/3 après simplification par 2." },

        { q: "Dans un exercice, on donne DG = 25, GH = 45, CG = 20. Comment calcule-t-on GT si 20/GT = 25/45 ?",
          choix: ["GT = 25 × 45 / 20", "GT = 45 × 20 / 25", "GT = 20 × 25 / 45", "GT = 45 / 20"],
          bonne: 1,
          why: "Produit en croix : 25 × GT = 45 × 20, donc GT = 900/25 = 36 mm." },

        { q: "Que faut-il écrire avant d'appliquer le théorème de Thalès ?",
          choix: ["Le résultat", "Les hypothèses : droites sécantes et droites parallèles", "La figure uniquement", "La réciproque"],
          bonne: 1,
          why: "Une démonstration commence toujours par rappeler les hypothèses." },

        { q: "Dans le théorème, le premier rapport comporte les noms des points de quelle droite ?",
          choix: ["De la droite (d)", "De la droite (d')", "Des deux droites mélangées", "Peu importe"],
          bonne: 0,
          why: "Le second rapport comporte ceux de (d'). Mélanger les deux donne une égalité fausse." },

        { q: "Les droites (d) et (d') doivent être :",
          choix: ["parallèles", "sécantes en un point A", "perpendiculaires", "confondues"],
          bonne: 1,
          why: "Ce sont (BC) et (MN) qui sont parallèles, pas (d) et (d')." },

        { q: "Si (BC) et (MN) sont parallèles et AM/AB = 2/5, que vaut AN/AC ?",
          choix: ["5/2", "2/5", "On ne peut pas savoir", "4/10 seulement"],
          bonne: 1,
          why: "Les trois rapports du théorème sont égaux entre eux." },

        { q: "Quelle phrase conclut correctement une démonstration avec la réciproque ?",
          choix: ["Donc les droites sont parallèles", "Donc d'après la réciproque du théorème de Thalès, les droites (AL) et (HT) sont parallèles", "Donc d'après Thalès, les longueurs sont égales", "Donc les rapports sont égaux"],
          bonne: 1,
          why: "Il faut nommer le théorème utilisé et les droites concernées." },

        { q: "Si 25 × 27 = 45 × CD, combien vaut CD ?",
          choix: ["15", "45", "27", "25"],
          bonne: 0,
          why: "CD = (25 × 27)/45 = 675/45 = 15 mm." },

        { q: "Le théorème de Thalès permet-il de calculer un angle ?",
          choix: ["Oui, toujours", "Non, il porte sur des longueurs", "Oui, dans un triangle rectangle", "Seulement en configuration papillon"],
          bonne: 1,
          why: "Il donne des égalités de rapports de longueurs." },

        { q: "B et M doivent être :",
          choix: ["confondus avec A", "deux points de (d) distincts de A", "sur deux droites différentes", "les milieux des segments"],
          bonne: 1,
          why: "De même, C et N sont deux points de (d') distincts de A." },

        { q: "Si les rapports sont égaux mais que les points ne sont pas dans le même ordre, que peut-on conclure ?",
          choix: ["Les droites sont parallèles", "On ne peut pas appliquer la réciproque", "Les droites sont perpendiculaires", "La figure est fausse"],
          bonne: 1,
          why: "La condition d'ordre fait partie de l'énoncé de la réciproque." },

        { q: "Dans 20/GT = 25/45, quelle égalité donne le produit en croix ?",
          choix: ["20 × 45 = 25 × GT", "20 × 25 = GT × 45", "20 + 45 = 25 + GT", "20/25 = GT/45"],
          bonne: 0,
          why: "On multiplie en croix les termes opposés." },

        { q: "Thalès et sa réciproque s'utilisent dans quelle configuration ?",
          choix: ["Deux droites sécantes coupées par deux droites parallèles", "Un triangle rectangle", "Deux cercles sécants", "Un parallélogramme uniquement"],
          bonne: 0,
          why: "C'est la configuration en triangle ou en papillon." }
      ]
    },
    {
      id: 'es-ch1',
      matiere: 'espagnol',
      numero: 'Secuencia 0',
      titre: "Presentarse y presentar a alguien",
      periode: "Introducción",
      theme: "El presente de indicativo: verbos regulares e irregulares (ser, tener, estar)",

      essentiel: [
        "El presente de indicativo sirve para presentarse: decir cómo te llamas, qué edad tienes y dónde vives.",
        "Los verbos regulares en -AR, -ER e -IR tienen terminaciones propias en presente.",
        "Ser, tener y estar son irregulares y muy frecuentes: hay que aprender sus seis formas de memoria.",
        "Llamarse es un verbo reflexivo: se conjuga con un pronombre (me, te, se, nos, os, se) delante del verbo."
      ],

      sections: [
        {
          titre: "Los verbos regulares en presente",
          points: [
            "Verbos en -AR (ej. hablar): hablo, hablas, habla, hablamos, habláis, hablan.",
            "Verbos en -ER (ej. comer): como, comes, come, comemos, coméis, comen.",
            "Verbos en -IR (ej. vivir): vivo, vives, vive, vivimos, vivís, viven."
          ]
        },
        {
          titre: "El verbo llamarse (reflexivo)",
          points: [
            "me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman.",
            "El pronombre reflexivo (me, te, se, nos, os, se) se coloca siempre delante del verbo conjugado."
          ]
        },
        {
          titre: "Los verbos irregulares: ser, tener, estar",
          points: [
            "Ser: soy, eres, es, somos, sois, son.",
            "Tener: tengo, tienes, tiene, tenemos, tenéis, tienen.",
            "Estar: estoy, estás, está, estamos, estáis, están.",
            "Ser sirve para decir la profesión o el nombre (ej. es taxista) ; tener sirve sobre todo para la edad (ej. tengo seis años) ; estar sirve para decir dónde está algo (ej. mi casa está en la calle Naranjos)."
          ]
        },
        {
          titre: "Presentar a la familia",
          points: [
            "Para presentar a alguien: (nombre) + tener + edad + vivir en (ciudad) + ser (profesión).",
            "Ejemplo: mi papá se llama Miguel y es taxista ; mi mamá se llama Julia y es abogada.",
            "Gustar + infinitivo sirve para decir lo que a alguien le gusta hacer: me gusta ir a ver a mis abuelos ; nos gusta jugar con los animales."
          ]
        }
      ],

      mots: [
        ["Presente de indicativo", "Tiempo verbal usado para hablar de hechos actuales o habituales."],
        ["Verbo reflexivo", "Verbo que se conjuga con un pronombre (me, te, se, nos, os, se) porque la acción recae sobre el propio sujeto: llamarse."],
        ["Ser", "Verbo irregular usado para el nombre, la profesión o el origen: soy, eres, es, somos, sois, son."],
        ["Tener", "Verbo irregular usado sobre todo para la edad: tengo, tienes, tiene, tenemos, tenéis, tienen."],
        ["Estar", "Verbo irregular usado para el lugar o el estado: estoy, estás, está, estamos, estáis, están."],
        ["Gustar + infinitivo", "Estructura para decir lo que a alguien le gusta hacer: me gusta jugar."]
      ],

      quiz: [
        { q: "¿Cómo se conjuga « llamarse » en la primera persona del singular ?",
          choix: ["Llamo", "Me llamo", "Se llama", "Te llamas"],
          bonne: 1,
          why: "Llamarse es reflexivo: el pronombre « me » va delante del verbo conjugado." },

        { q: "¿Cuál es la terminación de los verbos en -IR en « yo » ?",
          choix: ["-o", "-as", "-e", "-es"],
          bonne: 0,
          why: "Vivir → vivo, como todos los verbos regulares en « yo »." },

        { q: "¿Qué forma tiene el verbo « tener » en « yo » ?",
          choix: ["Teno", "Tengo", "Tenio", "Tiengo"],
          bonne: 1,
          why: "Tener es irregular: tengo, tienes, tiene, tenemos, tenéis, tienen." },

        { q: "¿Qué verbo se usa para decir la profesión de alguien ?",
          choix: ["Estar", "Tener", "Ser", "Vivir"],
          bonne: 2,
          why: "Mi papá es taxista: se usa « ser » + profesión." },

        { q: "¿Qué verbo se usa para decir dónde está algo o alguien ?",
          choix: ["Ser", "Tener", "Estar", "Llamarse"],
          bonne: 2,
          why: "Mi casa está en la calle Naranjos: « estar » indica el lugar." },

        { q: "¿Cuál es la forma correcta de « ser » para « ellos » ?",
          choix: ["Son", "Sois", "Somos", "Es"],
          bonne: 0,
          why: "Soy, eres, es, somos, sois, son." },

        { q: "Para decir « tengo seis años », ¿qué verbo se usa para la edad ?",
          choix: ["Ser", "Estar", "Tener", "Vivir"],
          bonne: 2,
          why: "La edad se dice siempre con « tener »." },

        { q: "¿Dónde se coloca el pronombre reflexivo en « me llamo » ?",
          choix: ["Después del verbo", "Delante del verbo", "No se usa pronombre", "Al final de la frase"],
          bonne: 1,
          why: "Me, te, se, nos, os, se se colocan delante del verbo conjugado." },

        { q: "¿Cómo se dice « nosotros vivimos » en presente ?",
          choix: ["Vivimos", "Vivís", "Viven", "Vivo"],
          bonne: 0,
          why: "Vivir es regular en -IR: vivo, vives, vive, vivimos, vivís, viven." },

        { q: "¿Qué estructura se usa para decir lo que te gusta hacer ?",
          choix: ["Gustar + infinitivo", "Ser + gerundio", "Tener + infinitivo", "Estar + infinitivo"],
          bonne: 0,
          why: "Me gusta jugar, nos gusta ir a ver a mis abuelos." }
      ]
    },
    {
      id: 'es-ch2',
      matiere: 'espagnol',
      numero: 'Unidad 1',
      titre: "Estar + gerundio: el presente progresivo",
      periode: "Unidad 1 — De vacaciones",
      theme: "Formación del gerundio, verbos irregulares, verbos reflexivos y vocabulario de las vacaciones",

      essentiel: [
        "El presente progresivo (estar + gerundio) expresa una acción que está pasando en este momento.",
        "Verbos en -AR: gerundio en -ando (hablar → hablando). Verbos en -ER/-IR: gerundio en -iendo (comer → comiendo, vivir → viviendo).",
        "Gerundios irregulares: i→y (leyendo, yendo, construyendo), e→i (pidiendo, diciendo, viniendo, riendo), o→u (durmiendo).",
        "Con un verbo reflexivo, el pronombre se coloca delante de estar (me estoy lavando) o pegado detrás del gerundio con acento (estoy lavándome)."
      ],

      sections: [
        {
          titre: "Formación del gerundio",
          points: [
            "Verbos en -AR → -ando: hablar → hablando.",
            "Verbos en -ER / -IR → -iendo: comer → comiendo ; vivir → viviendo.",
            "Estar se conjuga: estoy, estás, está, estamos, estáis, están, seguido del gerundio."
          ]
        },
        {
          titre: "Los gerundios irregulares",
          points: [
            "i → y, cuando el radical termina en vocal: leer → leyendo ; ir → yendo ; construir → construyendo.",
            "e → i, en verbos en -ir con cambio vocálico: pedir → pidiendo ; decir → diciendo ; venir → viniendo ; reír → riendo.",
            "o → u: dormir → durmiendo."
          ]
        },
        {
          titre: "Los verbos reflexivos con estar + gerundio",
          points: [
            "Un verbo reflexivo indica una acción sobre uno mismo (ej. lavarse, relajarse, secarse).",
            "Opción A: el pronombre se coloca delante de estar → se está relajando.",
            "Opción B: el pronombre se pega detrás del gerundio, que lleva entonces un acento escrito → está relajándose."
          ]
        },
        {
          titre: "Vocabulario de las vacaciones",
          points: [
            "Lugares de vacaciones: la playa, la montaña, el campo.",
            "Verbos y expresiones: estar de vacaciones, estar tumbado/a, andar, tomar el sol, descansar, relajarse, disfrutar (de), aburrirse — el aburrimiento, jugar, charlar.",
            "En la playa: el castillo de arena, la orilla, las olas, las conchas, el quitasol / la sombrilla, el globo aerostático, la toalla, tomar el sol, el helado.",
            "El tiempo y las estaciones: la primavera, el verano, el otoño, el invierno, la nieve ; hacer buen/mal tiempo, hacer sol, hacer frío, hacer calor, el cielo despejado, el cielo nublado."
          ]
        }
      ],

      mots: [
        ["Estar de vacaciones", "Expresión para decir que uno está pasando sus vacaciones."],
        ["Tomar el sol", "Exponerse al sol para broncearse, generalmente en la playa."],
        ["Relajarse", "Descansar, calmarse ; en francés « se détendre »."],
        ["Disfrutar (de)", "Aprovechar algo con placer ; en francés « profiter (de) »."],
        ["Aburrirse / el aburrimiento", "Sentir o sentimiento de falta de interés ; en francés « s'ennuyer / l'ennui »."],
        ["El castillo de arena", "Estructura que se construye apilando y moldeando arena húmeda en la playa."],
        ["La orilla", "El borde donde la playa se encuentra con el agua del mar."],
        ["Las olas", "Ondas que se forman en la superficie del mar, generalmente por el viento."],
        ["El quitasol / la sombrilla", "Objeto grande que se clava en la arena para dar sombra en la playa."],
        ["El globo aerostático", "Vehículo volador formado por un globo grande lleno de aire caliente."],
        ["Gerundio", "Forma verbal invariable (-ando / -iendo) usada con « estar » para expresar una acción en curso."]
      ],

      quiz: [
        { q: "¿Cómo se forma el gerundio de un verbo en -AR como « hablar » ?",
          choix: ["hablando", "hableando", "hablendo", "hablido"],
          bonne: 0,
          why: "Verbos en -AR forman el gerundio en -ando: hablar → hablando." },

        { q: "¿Cuál es el gerundio de « vivir » ?",
          choix: ["viviendo", "vivando", "viviondo", "vivendo"],
          bonne: 0,
          why: "Verbos en -IR forman el gerundio en -iendo: vivir → viviendo." },

        { q: "¿Cuál es el gerundio irregular de « leer » ?",
          choix: ["leiendo", "leyendo", "leendo", "leyiendo"],
          bonne: 1,
          why: "Cuando el radical termina en vocal, la « i » de « -iendo » se convierte en « y »: leer → leyendo." },

        { q: "¿Cuál es el gerundio de « construir » ?",
          choix: ["construiendo", "construyendo", "construindo", "construeindo"],
          bonne: 1,
          why: "Mismo cambio i→y que en « leyendo » e « yendo »." },

        { q: "¿Cuál es el gerundio de « pedir » ?",
          choix: ["pediendo", "pidendo", "pidiendo", "pedendo"],
          bonne: 2,
          why: "Los verbos en -ir con cambio vocálico e→i: pedir → pidiendo." },

        { q: "¿Cuál es el gerundio de « decir » ?",
          choix: ["deciendo", "diciendo", "decindo", "dicendo"],
          bonne: 1,
          why: "Mismo cambio e→i que « pidiendo », « viniendo », « riendo »." },

        { q: "¿Cuál es el gerundio de « dormir » ?",
          choix: ["dormiendo", "durmiendo", "dormendo", "durmendo"],
          bonne: 1,
          why: "Dormir tiene un cambio o→u en el gerundio: durmiendo." },

        { q: "¿Qué verbo se usa junto al gerundio para formar el presente progresivo ?",
          choix: ["Ser", "Tener", "Estar", "Ir"],
          bonne: 2,
          why: "Estar + gerundio expresa una acción en curso: el chico está hablando por teléfono." },

        { q: "En la Opción A del reflexivo, ¿dónde va el pronombre ?",
          choix: ["Pegado al final del gerundio", "Delante de estar", "Después de estar", "No se usa"],
          bonne: 1,
          why: "Opción A: pronombre + estar + gerundio → me estoy lavando." },

        { q: "En la Opción B del reflexivo, ¿qué cambia en el gerundio ?",
          choix: ["Nada", "Pierde una sílaba", "Lleva un acento escrito", "Se vuelve irregular"],
          bonne: 2,
          why: "Estoy lavándome: al pegar el pronombre, el gerundio necesita un acento escrito." },

        { q: "¿Cómo se dice « se está relajando » con la Opción B ?",
          choix: ["Se relajándose", "Está relajándose", "Relajándose está", "Está se relajando"],
          bonne: 1,
          why: "El pronombre « se » se pega al final del gerundio con acento: relajándose." },

        { q: "¿Qué significa « estar tumbado/a » ?",
          choix: ["Estar de pie", "Estar acostado/a", "Estar corriendo", "Estar nadando"],
          bonne: 1,
          why: "Es lo contrario de « de pie »: tumbado/a significa acostado/a, como en la playa." },

        { q: "¿Cuál es el equivalente español de « bronzer » visto en clase ?",
          choix: ["Descansar", "Tomar el sol", "Disfrutar", "Charlar"],
          bonne: 1,
          why: "Tomar el sol = broncearse al sol." },

        { q: "¿Qué es « la orilla » ?",
          choix: ["La arena de la playa", "La parte de la tierra junto al agua", "Una ola grande", "Un tipo de concha"],
          bonne: 1,
          why: "La orilla es donde la tierra toca el agua." },

        { q: "¿Qué expresión española corresponde a « s'ennuyer » ?",
          choix: ["Disfrutar", "Relajarse", "Aburrirse", "Charlar"],
          bonne: 2,
          why: "Aburrirse / el aburrimiento = s'ennuyer / l'ennui." },

        { q: "¿Qué tiempo hace si el cielo está « despejado » ?",
          choix: ["Hay muchas nubes", "No hay nubes, hace buen tiempo", "Está lloviendo", "Hace mucho frío"],
          bonne: 1,
          why: "Cielo despejado = sin nubes, lo contrario de cielo nublado." }
      ]
    },
    {
      id: 'ma-ch3',
      matiere: 'maths',
      numero: 'Chapitre 3',
      titre: "Notion de fonction",
      periode: "Fonctions — définition, vocabulaire et représentations",
      theme: "Fonction, image, antécédent ; définir une fonction par une formule, un tableau ou un graphique",

      essentiel: [
        "Une fonction f associe à un nombre x un unique nombre transformé, noté f(x).",
        "Le nombre transformé f(x) s'appelle l'<b>image</b> de x par f ; le nombre de départ x s'appelle l'<b>antécédent</b> de f(x).",
        "Un nombre ne peut avoir qu'une seule image, mais peut avoir plusieurs antécédents.",
        "Une fonction peut être définie par une formule, un tableau de valeurs, ou un graphique (sa courbe représentative)."
      ],

      sections: [
        {
          titre: "Vocabulaire : image et antécédent",
          points: [
            "f(x) est l'image de x par la fonction f : elle se lit sur l'axe des ordonnées dans un graphique.",
            "x est l'antécédent de f(x) : il se lit sur l'axe des abscisses dans un graphique.",
            "Trouver une image : je connais x, je calcule f(x) en remplaçant x par le nombre donné dans la formule.",
            "Trouver un antécédent : je connais f(x), je résous l'équation f(x) = (la valeur donnée)."
          ]
        },
        {
          titre: "Définir une fonction par une formule",
          points: [
            "Exemple : f(x) = 3x + 5 signifie « à tout nombre x on associe 3x + 5 ».",
            "Pour calculer une image : on remplace x par le nombre donné. Ex : f(2) = 3×2+5 = 11.",
            "Pour calculer un antécédent : on résout l'équation f(x) = valeur donnée. Ex : pour l'antécédent de 2, on résout 3x+5=2, donc x=-1."
          ]
        },
        {
          titre: "Définir une fonction par un tableau",
          points: [
            "Un tableau de valeurs donne directement les antécédents (ligne x) et leurs images (ligne f(x)).",
            "Un même nombre peut apparaître plusieurs fois comme image : il a alors plusieurs antécédents."
          ]
        },
        {
          titre: "Définir une fonction par un graphique",
          points: [
            "La courbe représentative d'une fonction f est l'ensemble des points M de coordonnées (x ; f(x)).",
            "Pour lire l'image d'un nombre a : je place a sur l'axe des abscisses, je lis l'ordonnée du point de la courbe.",
            "Pour lire un antécédent d'un nombre b : je place b sur l'axe des ordonnées, je lis l'abscisse du point de la courbe.",
            "Un point appartient à la courbe de f si ses coordonnées (x;y) vérifient y = f(x)."
          ]
        }
      ],

      mots: [
        ["Fonction", "Relation qui associe à un nombre x un unique nombre transformé, noté f(x)."],
        ["Image", "Le nombre transformé f(x) obtenu à partir de x par la fonction f. Un nombre a une seule image."],
        ["Antécédent", "Le nombre de départ x qui donne f(x) par la fonction f. Un nombre peut avoir plusieurs antécédents."],
        ["Courbe représentative", "Dans un repère, l'ensemble des points de coordonnées (x ; f(x)) d'une fonction f."],
        ["Tableau de valeurs", "Tableau donnant, pour plusieurs antécédents, leur image par une fonction."]
      ],

      quiz: [
        { q: "Que représente f(x) ?",
          choix: ["L'antécédent de x", "L'image de x par f", "La fonction elle-même", "Le nombre de départ"],
          bonne: 1,
          why: "f(x) est le nombre transformé, c'est-à-dire l'image de x." },

        { q: "Combien d'images un nombre peut-il avoir par une fonction ?",
          choix: ["Une seule", "Deux", "Autant qu'il veut", "Aucune"],
          bonne: 0,
          why: "Par une fonction, un nombre ne peut avoir qu'une seule image." },

        { q: "Combien d'antécédents un nombre peut-il avoir ?",
          choix: ["Toujours un seul", "Jamais aucun", "Un ou plusieurs", "Toujours deux"],
          bonne: 2,
          why: "Un nombre peut avoir un seul antécédent, plusieurs, ou aucun." },

        { q: "Sur un graphique, où lit-on les antécédents ?",
          choix: ["Sur l'axe des ordonnées", "Sur l'axe des abscisses", "Sur la courbe entière", "On ne peut pas les lire"],
          bonne: 1,
          why: "Les antécédents (les x) se lisent sur l'axe des abscisses." },

        { q: "Sur un graphique, où lit-on les images ?",
          choix: ["Sur l'axe des abscisses", "Sur l'axe des ordonnées", "En dehors du repère", "Sur l'axe des antécédents"],
          bonne: 1,
          why: "Les images (les f(x)) se lisent sur l'axe des ordonnées." },

        { q: "Si f(x) = 3x+5, quelle est l'image de 2 ?",
          choix: ["6", "11", "8", "2"],
          bonne: 1,
          why: "f(2) = 3×2+5 = 6+5 = 11." },

        { q: "Si f(x) = 3x+5, quel est l'antécédent de 2 ?",
          choix: ["-1", "1", "-3", "2"],
          bonne: 0,
          why: "On résout 3x+5=2, soit 3x=-3, donc x=-1." },

        { q: "Pour trouver une image, que fait-on ?",
          choix: ["On résout une équation", "On remplace x par le nombre donné dans la formule", "On lit l'axe des abscisses seulement", "On cherche plusieurs solutions"],
          bonne: 1,
          why: "Calculer une image = remplacer x par le nombre connu dans f(x)." },

        { q: "Pour trouver un antécédent, que fait-on ?",
          choix: ["On remplace x directement", "On résout l'équation f(x) = valeur donnée", "On lit uniquement le tableau", "Ce n'est jamais possible"],
          bonne: 1,
          why: "Chercher un antécédent = résoudre l'équation f(x) = la valeur connue." },

        { q: "Un point de coordonnées (x;y) appartient à la courbe de f si...",
          choix: ["x = y", "y = f(x)", "x = f(y)", "x et y sont positifs"],
          bonne: 1,
          why: "La courbe représentative est l'ensemble des points (x; f(x)), donc il faut y = f(x)." },

        { q: "Soit h(x)=x²-3. Quelle est l'image de -3 ?",
          choix: ["6", "-6", "9", "0"],
          bonne: 0,
          why: "h(-3) = (-3)²-3 = 9-3 = 6." },

        { q: "Avec h(x)=x²-3, quel est l'antécédent de -3 ?",
          choix: ["3", "-3", "0", "9"],
          bonne: 2,
          why: "h(0) = 0²-3 = -3, donc l'antécédent de -3 est 0." },

        { q: "Quels sont les trois modes pour définir une fonction vus en cours ?",
          choix: ["Une formule, un tableau, un graphique", "Un tableau, une équation, un dessin", "Une formule, une phrase, un nombre", "Un graphique, une couleur, un symbole"],
          bonne: 0,
          why: "Une fonction peut être définie par une formule, un tableau de valeurs ou un graphique (sa courbe)." },

        { q: "Le point C(2,5 ; 5) appartient-il à la courbe de f(x)=x²-1 ?",
          choix: ["Oui, car f(2,5)=5", "Non, car f(2,5)=5,25", "Oui, car 2,5×2=5", "Non, car 2,5 n'est pas un nombre entier"],
          bonne: 1,
          why: "f(2,5) = 2,5²-1 = 6,25-1 = 5,25 ≠ 5, donc C n'appartient pas à la courbe." },

        { q: "Soit h(x) = -2x + 3. Quel est l'antécédent de 5 ?",
          choix: ["-1", "1", "-4", "4"],
          bonne: 0,
          why: "-2x+3=5 donne -2x=2, donc x=-1." },

        { q: "Soit h(x) = -2x + 3. Quelle est l'image de -3 ?",
          choix: ["-3", "3", "9", "-9"],
          bonne: 2,
          why: "h(-3) = -2×(-3)+3 = 6+3 = 9." },

        { q: "Soit g(x) = -3x + 9. Quelle est l'image de -2 ?",
          choix: ["3", "15", "-15", "6"],
          bonne: 1,
          why: "g(-2) = -3×(-2)+9 = 6+9 = 15." },

        { q: "Soit g(x) = -3x + 9. Que vaut g(2,5) ?",
          choix: ["1,5", "-1,5", "7,5", "16,5"],
          bonne: 0,
          why: "g(2,5) = -3×2,5+9 = -7,5+9 = 1,5." },

        { q: "Soit f(x) = -10x + 1. Quelle est l'image de -1 ?",
          choix: ["-9", "9", "11", "-11"],
          bonne: 2,
          why: "f(-1) = -10×(-1)+1 = 10+1 = 11." },

        { q: "Soit f(x) = -10x + 1. Quel est l'antécédent de 1 ?",
          choix: ["1", "-1", "0", "10"],
          bonne: 2,
          why: "-10x+1=1 donne -10x=0, donc x=0." },

        { q: "Soit f(x) = -4x + 8. Quelle est l'image de -3 ?",
          choix: ["-4", "4", "-20", "20"],
          bonne: 3,
          why: "f(-3) = -4×(-3)+8 = 12+8 = 20." },

        { q: "Soit f(x) = -4x + 8. Quel est l'antécédent de -20 ?",
          choix: ["-7", "7", "-3", "3"],
          bonne: 1,
          why: "-4x+8=-20 donne -4x=-28, donc x=7." },

        { q: "Soit f(x) = -4x + 8. Quelle est l'image de 4 ?",
          choix: ["8", "-8", "24", "-24"],
          bonne: 1,
          why: "f(4) = -4×4+8 = -16+8 = -8." },

        { q: "Avec le tableau x : -3,-2,-1,0,1,2 et f(x) : 5,0,-3,-2,2,0, quelle est l'image de -1 ?",
          choix: ["-3", "0", "-2", "5"],
          bonne: 0,
          why: "D'après le tableau, à x=-1 correspond f(x)=-3." },

        { q: "Avec ce même tableau, quels sont les antécédents de 0 ?",
          choix: ["-1 et 1", "-2 et 2", "0 et 2", "-3 et 1"],
          bonne: 1,
          why: "f(x)=0 pour x=-2 et pour x=2 : ce sont les deux antécédents de 0." },

        { q: "Un programme dit : « On choisit un nombre, on lui ajoute 4, on multiplie le résultat par 2, on enlève 8. » Quelle fonction obtient-on ?",
          choix: ["f(x) = 2x", "f(x) = 2x+8", "f(x) = x+4", "f(x) = 2x-4"],
          bonne: 0,
          why: "(x+4)×2-8 = 2x+8-8 = 2x : les deux dernières étapes s'annulent." },

        { q: "Avec ce programme (équivalent à f(x)=2x), quelle est l'image de 4 ?",
          choix: ["8", "4", "12", "16"],
          bonne: 0,
          why: "f(4) = 2×4 = 8." },

        { q: "Avec ce même programme, quel est l'antécédent de 4 ?",
          choix: ["8", "4", "2", "1"],
          bonne: 2,
          why: "2x=4 donne x=2." },

        { q: "« L'image de x par la fonction f est égale au produit de x par 7. » Quelle est l'expression de f(x) ?",
          choix: ["7x", "x+7", "x/7", "x-7"],
          bonne: 0,
          why: "Le produit de x par 7 se traduit par 7x." },

        { q: "« L'image de x par la fonction i est égale à la différence du double de x et de 8. » Quelle est l'expression de i(x) ?",
          choix: ["2x-8", "8-2x", "2x+8", "2(x-8)"],
          bonne: 0,
          why: "Le double de x est 2x, et sa différence avec 8 s'écrit 2x-8." }
      ]
    },
    {
      id: 'fr-ch4',
      matiere: 'francais',
      numero: 'Grammaire',
      titre: "Le présent de l'indicatif",
      periode: "Grammaire — valeurs et conjugaison du présent",
      theme: "Les valeurs temporelles, aspectuelles et stylistiques du présent ; la conjugaison selon le groupe du verbe",

      essentiel: [
        "Le présent a des valeurs temporelles : action en train de se dérouler (énonciation), description, passé très proche, futur proche, ou vérité toujours valable (vérité générale).",
        "Il a aussi des valeurs aspectuelles : le présent duratif (une action qui dure) et le présent itératif (une action qui se répète).",
        "Le présent de narration raconte un événement passé ou historique comme s'il se déroulait sous nos yeux.",
        "Le présent d'injonction remplace l'impératif pour donner un ordre sous forme d'affirmation.",
        "Les terminaisons du présent changent selon le groupe du verbe (1er, 2e ou 3e groupe), avec plusieurs cas particuliers à connaître."
      ],

      sections: [
        {
          titre: "Les valeurs temporelles du présent",
          points: [
            "Présent d'énonciation : une action qui a lieu au moment où elle est dite. Ex : Je t'écris pour te donner des nouvelles.",
            "Présent de description : il sert à décrire. Ex : Il porte un pantalon bleu.",
            "Présent à valeur de passé proche : une action qui vient de se produire. Ex : Je finis mon devoir à l'instant.",
            "Présent de futur proche : une action qui va se produire. Ex : Demain, je joue au tennis.",
            "Présent de vérité générale : un fait toujours vrai. Ex : La Terre tourne autour du Soleil."
          ]
        },
        {
          titre: "Les valeurs aspectuelles du présent (habitude)",
          points: [
            "Présent duratif : un fait qui se prolonge dans le temps, signalé par un complément circonstanciel de temps (CCT). Ex : Je vis à Paris depuis dix ans.",
            "Présent itératif : un fait qui se répète, signalé par un CCT. Ex : Tous les jours, je vais à la salle de sport."
          ]
        },
        {
          titre: "Les valeurs stylistiques et modales",
          points: [
            "Présent de narration : utilisé dans un récit au passé pour rendre une scène plus vivante, ou pour raconter un événement historique. Ex : Les femmes se révoltent et se dirigent vers la Bastille le 14 juillet 1789.",
            "Présent d'injonction : remplace l'impératif et exprime un ordre sous forme d'affirmation. Ex : Tu ranges ta chambre et tu ne discutes pas !"
          ]
        },
        {
          titre: "La conjugaison selon le groupe du verbe",
          points: [
            "1er groupe (verbes en -er) : terminaisons -e, -es, -e. Ex : je chante, tu chantes, il chante.",
            "2e groupe (verbes en -ir comme finir) : terminaisons -is, -is, -it. Ex : je finis, tu finis, il finit.",
            "3e groupe, verbes en -ir (dormir, partir, tenir, sentir...) : terminaisons -s, -s, -t. Ex : je pars, tu pars, il part. Exception : ouvrir, souffrir, couvrir, cueillir et leurs composés se conjuguent comme le 1er groupe (j'ouvre, tu ouvres, il ouvre).",
            "3e groupe, verbes en -re ou -oir (rire, vivre, voir, devoir) : terminaisons -s, -s, -t. Ex : je ris, tu ris, il rit."
          ]
        },
        {
          titre: "Les cas particuliers du 3e groupe",
          points: [
            "Pouvoir, vouloir : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent.",
            "Battre, mettre : je mets, tu mets, il met.",
            "Verbes en -dre (prendre, attendre, perdre) : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
            "Verbes en -eindre, -aindre, -oindre, -oudre (peindre, craindre, joindre, résoudre) : je peins, tu peins, il peint, nous peignons, vous peignez, ils peignent."
          ]
        },
        {
          titre: "Les verbes en -eler/-eter et en -yer",
          points: [
            "Verbes en -eler ou -eter : on ajoute un accent grave (è) avant la terminaison. Ex : peler → je pèle, nous pelons ; acheter → j'achète, nous achetons.",
            "Exception : appeler et jeter doublent la consonne (l ou t) au lieu d'ajouter un accent. Ex : appeler → j'appelle, nous appelons ; jeter → je jette, nous jetons.",
            "Verbes en -ayer : le y peut se changer en i devant un e muet, ou rester y. Ex : j'essaie ou j'essaye.",
            "Verbes en -uyer et -oyer : le y se change toujours en i devant un e muet. Ex : essuyer → j'essuie."
          ]
        }
      ],

      mots: [
        ["Présent d'énonciation", "Valeur du présent qui exprime une action au moment même où elle est dite."],
        ["Présent de vérité générale", "Valeur du présent pour un fait toujours vrai, comme une loi scientifique."],
        ["Présent duratif", "Valeur aspectuelle du présent pour une action qui dure dans le temps, souvent avec « depuis »."],
        ["Présent itératif", "Valeur aspectuelle du présent pour une action qui se répète régulièrement."],
        ["Présent de narration", "Emploi du présent dans un récit au passé pour rendre une scène plus vivante."],
        ["Présent d'injonction", "Emploi du présent à la place de l'impératif pour donner un ordre."]
      ],

      quiz: [
        { q: "« Je t'écris pour te donner des nouvelles » : quelle valeur du présent ?",
          choix: ["Présent de vérité générale", "Présent d'énonciation", "Présent de narration", "Présent d'injonction"],
          bonne: 1,
          why: "L'action a lieu au moment même où elle est énoncée : c'est le présent d'énonciation." },

        { q: "« La Terre tourne autour du Soleil » : quelle valeur ?",
          choix: ["Présent de description", "Présent de vérité générale", "Présent itératif", "Présent de futur proche"],
          bonne: 1,
          why: "C'est un fait toujours vrai, donc un présent de vérité générale." },

        { q: "« Je vis à Paris depuis dix ans » : quelle valeur ?",
          choix: ["Présent itératif", "Présent duratif", "Présent de narration", "Présent d'injonction"],
          bonne: 1,
          why: "L'action se prolonge dans le temps, signalée par « depuis » : c'est un présent duratif." },

        { q: "« Tous les jours, je vais à la salle de sport » : quelle valeur ?",
          choix: ["Présent itératif", "Présent duratif", "Présent de description", "Présent d'énonciation"],
          bonne: 0,
          why: "L'action se répète régulièrement : c'est un présent itératif." },

        { q: "« Tu ranges ta chambre et tu ne discutes pas ! » : quelle valeur ?",
          choix: ["Présent de narration", "Présent d'injonction", "Présent de vérité générale", "Présent duratif"],
          bonne: 1,
          why: "Le présent remplace ici l'impératif pour donner un ordre : c'est un présent d'injonction." },

        { q: "Dans un récit au passé, pour rendre une scène plus vivante, on utilise...",
          choix: ["Le présent de narration", "Le présent de description", "Le présent itératif", "Le présent d'énonciation"],
          bonne: 0,
          why: "Le présent de narration sert à rendre un événement passé plus vivant dans un récit." },

        { q: "Quelle est la terminaison de « je » pour un verbe du 1er groupe ?",
          choix: ["-s", "-is", "-e", "-x"],
          bonne: 2,
          why: "1er groupe : je chante, terminaison -e." },

        { q: "Quelle est la terminaison de « il » pour un verbe du 2e groupe comme finir ?",
          choix: ["-t", "-it", "-e", "-s"],
          bonne: 1,
          why: "2e groupe : il finit, terminaison -it." },

        { q: "Comment se conjugue « partir » à la 1ère personne du singulier ?",
          choix: ["Je partis", "Je pars", "Je parts", "Je parte"],
          bonne: 1,
          why: "Les verbes en -ir du 3e groupe comme partir prennent -s : je pars." },

        { q: "Comment se conjugue « ouvrir » à la 1ère personne du singulier ?",
          choix: ["J'ouvre", "J'ouvris", "J'ouvris pas", "J'ouvrit"],
          bonne: 0,
          why: "Ouvrir et ses composés se conjuguent comme le 1er groupe : j'ouvre." },

        { q: "Comment se conjugue « prendre » à la 3e personne du singulier ?",
          choix: ["Il prends", "Il prenait", "Il prend", "Il prendait"],
          bonne: 2,
          why: "Les verbes en -dre comme prendre : il prend (sans -s ni -t)." },

        { q: "Comment se conjugue « craindre » pour « nous » ?",
          choix: ["Nous craindons", "Nous craignons", "Nous craindrons", "Nous craignions"],
          bonne: 1,
          why: "Les verbes en -aindre comme craindre : nous craignons." },

        { q: "Comment se conjugue « acheter » à la 1ère personne du singulier ?",
          choix: ["J'achete", "J'achète", "J'achette", "J'achetai"],
          bonne: 1,
          why: "Les verbes en -eter comme acheter prennent un accent grave : j'achète." },

        { q: "Comment se conjugue « appeler », qui est une exception ?",
          choix: ["J'appèle", "J'appelle", "J'appele", "J'appellerai"],
          bonne: 1,
          why: "Appeler double le l au lieu de prendre un accent : j'appelle." },

        { q: "Comment se conjugue « essuyer » à la 1ère personne du singulier ?",
          choix: ["J'essuye", "J'essuie", "J'essuyai", "J'essuis"],
          bonne: 1,
          why: "Les verbes en -uyer changent toujours le y en i devant un e muet : j'essuie." },

        { q: "Pour un verbe en -ayer comme « essayer », quelles formes sont acceptées ?",
          choix: ["Seulement j'essaie", "Seulement j'essaye", "J'essaie ou j'essaye", "Aucune des deux"],
          bonne: 2,
          why: "Les verbes en -ayer peuvent garder le y ou le changer en i : les deux formes sont correctes." }
      ]
    },
    {
      id: 'fr-ch5',
      matiere: 'francais',
      numero: 'Lecture',
      titre: "Un Secret — résumé de lecture",
      periode: "Lecture suivie — Philippe Grimbert",
      theme: "Résumé chapitre par chapitre et personnages d'Un Secret, de Philippe Grimbert",

      essentiel: [
        "Un Secret (2004) est un roman autobiographique de Philippe Grimbert : enfant chétif, le narrateur s'invente un frère aîné fort, sans savoir qu'il a réellement existé.",
        "À quinze ans, Louise, la confidente de la famille, lui révèle que ce frère, Simon, était le fils que son père Maxime a eu avec sa première femme, Hannah.",
        "L'histoire remonte à l'Occupation : fuite en zone libre, puis déportation et mort d'Hannah et de Simon à Auschwitz.",
        "Le roman mêle le récit intime d'un enfant en quête d'identité et la mémoire douloureuse de la Shoah dans une famille juive française."
      ],

      sections: [
        {
          titre: "Chapitre I — Les doutes",
          points: [
            "Le narrateur, enfant chétif né en 1948, se sent très différent de ses parents Maxime et Tania, beaux et sportifs, et s'invente un frère aîné fort et protecteur.",
            "Il s'interroge sur des détails troublants de son enfance (un baptême tardif, l'orthographe étrange de son nom) sans trouver de réponse.",
            "Au grenier, il découvre un vieux chien en peluche qui trouble visiblement ses parents ; seule Louise, l'infirmière devenue sa confidente, l'écoute vraiment."
          ]
        },
        {
          titre: "Chapitre II — La version officielle",
          points: [
            "Le narrateur reconstitue l'histoire familiale telle qu'on la lui a racontée : Maxime, d'origine roumaine, rencontre Tania, championne de plongeon, à la piscine.",
            "Le couple se marie, transforme la boutique familiale en magasin de sport, puis fuit l'Occupation en 1942 pour la zone libre, à Saint-Gaultier.",
            "Après la guerre, naît un fils qui leur ressemble peu physiquement : le narrateur."
          ]
        },
        {
          titre: "Chapitre III — Le narrateur libéré",
          points: [
            "Adolescent calme mais toujours malhabile en sport, le narrateur recommence à se poser des questions en voyant des films sur la guerre.",
            "À quinze ans, des remarques antisémites d'un camarade pendant un documentaire sur les camps le mettent hors de lui : il se bat pour la première fois de sa vie.",
            "Couvert de bleus, il n'en confie l'origine qu'à Louise, qui comprend qu'il est temps de lui dire la vérité."
          ]
        },
        {
          titre: "Chapitre IV — La vérité",
          points: [
            "Louise révèle que la famille est entièrement juive : avant la guerre, Tania était mariée à Robert et Maxime à Hannah, la sœur de Robert, avec qui il a eu un fils, Simon.",
            "Maxime était tombé amoureux de Tania le jour de son propre mariage, mais les deux couples avaient étouffé ce sentiment.",
            "Pendant la guerre, Hannah, rongée par le désespoir de voir Maxime et Tania s'aimer, se dénonce elle-même à la Gestapo et se fait arrêter avec Simon.",
            "Après la guerre, Robert meurt en captivité, Hannah et Simon ne reviennent jamais des camps ; Maxime et Tania, libres de s'aimer, se marient et ont le narrateur."
          ]
        },
        {
          titre: "Chapitre V — Maxime déculpabilisé, et épilogue",
          points: [
            "Devenu psychanalyste, le narrateur apprend dans les archives qu'Hannah et Simon ont été gazés dès leur arrivée à Auschwitz — Maxime n'a donc jamais vraiment trahi Hannah, déjà morte.",
            "Après un accident vasculaire cérébral invalidant chez Tania, le couple met fin à ses jours ensemble ; Maxime est incinéré, Tania repose au carré juif du Père-Lachaise.",
            "Dans l'épilogue, le narrateur explique avoir écrit ce livre comme un tombeau pour Simon et Hannah, faute d'avoir pu leur offrir une sépulture."
          ]
        }
      ],

      mots: [
        ["Le narrateur", "Enfant unique chétif né en 1948, qui s'invente un frère imaginaire ; découvre le secret familial à 15 ans et devient plus tard psychanalyste."],
        ["Maxime", "Le père, athlétique, tient le magasin de sport familial ; premier mari d'Hannah, il tombe amoureux de Tania le jour de son propre mariage."],
        ["Tania", "La mère, championne de plongeon ; première épouse de Robert, elle s'éprend de Maxime pendant la guerre."],
        ["Louise", "Amie et confidente de la famille, infirmière âgée ; c'est elle qui révèle le secret au narrateur."],
        ["Hannah", "Première femme de Maxime et mère de Simon ; elle se fait arrêter volontairement avec son fils."],
        ["Simon", "Fils de Maxime et Hannah, demi-frère du narrateur ; il correspond exactement au frère imaginé."],
        ["Robert", "Frère d'Hannah et premier mari de Tania ; il meurt du typhus en captivité."],
        ["Esther", "Sœur de Maxime ; elle survit à la guerre."],
        ["Marcel", "Mari d'Esther, oncle du narrateur."]
      ],

      quiz: [
        { q: "Qui révèle au narrateur le secret de sa famille ?",
          choix: ["Maxime", "Tania", "Louise", "Esther"],
          bonne: 2,
          why: "Louise, confidente de la famille, est la seule à qui le narrateur se confie, et c'est elle qui lui révèle la vérité." },

        { q: "Qui est Simon ?",
          choix: ["Le meilleur ami du narrateur", "Le demi-frère du narrateur, né de Maxime et Hannah", "Le père du narrateur", "Le mari de Louise"],
          bonne: 1,
          why: "Simon est le fils que Maxime a eu avec sa première femme, Hannah — le frère que le narrateur s'était imaginé sans le savoir." },

        { q: "Avant la guerre, avec qui Tania était-elle mariée ?",
          choix: ["Maxime", "Robert", "Simon", "Marcel"],
          bonne: 1,
          why: "Tania était la première épouse de Robert, le frère d'Hannah." },

        { q: "Pourquoi Hannah se fait-elle arrêter avec Simon ?",
          choix: ["Elle est dénoncée par un voisin", "Rongée par le désespoir, elle révèle elle-même sa véritable identité", "Elle essaie de fuir vers l'Espagne", "Elle est arrêtée en même temps que Maxime"],
          bonne: 1,
          why: "Désespérée par l'amour naissant de Maxime et Tania, Hannah se dénonce elle-même à la Gestapo avec Simon." },

        { q: "Où Maxime et Tania se réfugient-ils pendant la guerre ?",
          choix: ["À Paris", "En zone libre, à Saint-Gaultier", "En Espagne", "En Suisse"],
          bonne: 1,
          why: "La famille fuit l'Occupation pour se réfugier en zone libre, à Saint-Gaultier dans l'Indre." },

        { q: "Qu'apprend le narrateur à propos d'Hannah et de Simon dans le dernier chapitre ?",
          choix: ["Ils ont survécu et vivent à l'étranger", "Ils ont été gazés dès leur arrivée à Auschwitz", "Ils se sont cachés toute la guerre", "Ils ont émigré aux États-Unis"],
          bonne: 1,
          why: "Le narrateur apprend dans les archives qu'Hannah et Simon ont été gazés dès leur arrivée à Auschwitz." },

        { q: "Quel métier exerce le narrateur une fois adulte ?",
          choix: ["Avocat", "Psychanalyste", "Professeur d'histoire", "Médecin"],
          bonne: 1,
          why: "Porté par la connaissance de son histoire, le narrateur devient psychanalyste." },

        { q: "Comment Maxime et Tania meurent-ils à la fin du roman ?",
          choix: ["Dans un accident de voiture", "Ils mettent fin à leurs jours ensemble", "De vieillesse, à des années d'écart", "Ils meurent pendant la guerre"],
          bonne: 1,
          why: "Ne supportant pas le déclin de Tania après son AVC, le couple met fin à ses jours ensemble." },

        { q: "Pourquoi le narrateur dit-il avoir écrit ce livre ?",
          choix: ["Pour devenir écrivain", "Comme une sorte de tombeau pour Simon et Hannah", "Pour accuser ses parents", "Pour gagner un prix littéraire"],
          bonne: 1,
          why: "Dans l'épilogue, il explique avoir écrit ce livre comme un tombeau pour Simon et Hannah, faute d'avoir pu leur offrir une sépulture." },

        { q: "Quel objet le narrateur découvre-t-il au grenier, enfant ?",
          choix: ["Une photo de Simon", "Un vieux chien en peluche", "Une lettre d'Hannah", "Un journal intime"],
          bonne: 1,
          why: "Il découvre un vieux chien en peluche qui trouble visiblement ses parents." },

        { q: "Qui est Esther dans le roman ?",
          choix: ["La sœur de Maxime", "La mère de Tania", "La fille de Louise", "La femme de Robert"],
          bonne: 0,
          why: "Esther est la sœur de Maxime ; elle survit à la guerre." },

        { q: "Quel événement déclenche la bagarre du narrateur à quinze ans ?",
          choix: ["Une dispute sur un match de foot", "Des remarques antisémites pendant un documentaire sur les camps", "Une broutille avec son frère imaginaire", "Une insulte contre Louise"],
          bonne: 1,
          why: "Lors d'un documentaire sur les camps de concentration, les remarques antisémites d'un camarade le mettent hors de lui." }
      ]
    },
    {
      id: 'fr-ch6',
      matiere: 'francais',
      numero: 'Méthode',
      titre: "Analyse de texte : l'extrait de la peluche",
      periode: "Analyse de texte — Un Secret",
      theme: "Le texte et son analyse, partie par partie",

      essentiel: [
        "Extrait étudié : dans Un Secret, le narrateur découvre au grenier, dans une malle, le chien en peluche ayant appartenu à Simon.",
        "Structure : introduction (décision de monter au grenier) → développement (description du grenier, ouverture de la malle, découverte de la peluche, réaction de l'enfant) → situation finale (l'attachement à la peluche, comme à un frère)."
      ],

      sections: [
        {
          titre: "Le texte, partie par partie",
          points: [
            "Introduction : la décision d'accompagner sa mère qui monte faire du rangement au grenier.",
            "Développement — description du grenier : atmosphère de vieillesse et d'abandon (poussière, araignées, lumière, meubles bancals, serrures rouillées, odeur de renfermé).",
            "Développement — ouverture de la malle : la mère cherche ses dessins, a un sursaut en découvrant la peluche.",
            "Développement — découverte de la peluche : un chien en peluche usé, aux yeux de bakélite, vêtu d'un manteau de tricot.",
            "Développement — réaction de l'enfant : il s'en empare aussitôt, la serre sur sa poitrine, refuse de la reposer malgré le malaise de sa mère.",
            "Situation finale : la nuit suivante, il la presse contre lui « comme contre la poitrine d'un frère » — un attachement qui ne le quittera plus."
          ]
        },
        {
          titre: "Les outils utilisés dans le texte",
          points: [
            "Narrateur présent : « je » = le narrateur lui-même, qui raconte sa propre histoire.",
            "Temps du passé : imparfait (description, habitude) et passé simple (actions précises).",
            "Champ lexical de la vieillesse : meubles bancals, serrures rouillées, odeur de renfermé, poussière.",
            "Comparaison et métaphore de la tristesse.",
            "Question rhétorique.",
            "Phrases non verbales ou courtes, pour marquer une rupture ou une émotion forte."
          ]
        }
      ],

      quiz: [
        { q: "Que découvre le narrateur en ouvrant la malle au grenier ?",
          choix: ["Des photos de famille", "Un chien en peluche", "Une lettre", "Des vêtements"],
          bonne: 1,
          why: "Il découvre un chien en peluche usé, aux yeux de bakélite, ayant appartenu à Simon." },

        { q: "Quelle est la réaction de la mère en découvrant la peluche ?",
          choix: ["Elle sourit", "Elle a un sursaut, un malaise", "Elle la jette", "Elle ne réagit pas"],
          bonne: 1,
          why: "Le texte décrit un sursaut et un malaise chez la mère à ce moment-là." },

        { q: "À quel champ lexical appartiennent « meubles bancals » et « serrures rouillées » ?",
          choix: ["La jeunesse", "La vieillesse", "La richesse", "La nature"],
          bonne: 1,
          why: "Ces mots installent un champ lexical de la vieillesse, qui donne son atmosphère au grenier." },

        { q: "Dans la situation finale, à quoi le narrateur compare-t-il la peluche serrée contre lui ?",
          choix: ["À un jouet neuf", "À la poitrine d'un frère", "À un oreiller", "À un animal vivant"],
          bonne: 1,
          why: "Il la presse « comme contre la poitrine d'un frère »." },

        { q: "Quels temps du passé sont utilisés dans ce récit ?",
          choix: ["Futur et conditionnel", "Imparfait et passé simple", "Présent seulement", "Passé composé uniquement"],
          bonne: 1,
          why: "L'imparfait décrit le cadre, le passé simple marque les actions précises." },

        { q: "Qui raconte cet extrait ?",
          choix: ["Un narrateur extérieur", "Le narrateur lui-même, à la première personne", "Simon", "Louise"],
          bonne: 1,
          why: "« Je » = le narrateur lui-même : c'est un récit autobiographique à la première personne." }
      ]
    },
    {
      id: 'hg-ch2',
      matiere: 'histoire',
      numero: 'Chapitre 2',
      titre: "Expériences totalitaires et démocraties fragilisées",
      periode: "1917 – 1939",
      theme: "L'URSS de Staline, l'Allemagne nazie et la France du Front populaire",

      essentiel: [
        "Dans l'entre-deux-guerres, l'URSS et l'Allemagne mettent en place des <b>régimes totalitaires</b> aux idéologies différentes : <b>communiste</b> en URSS, <b>nazie</b> en Allemagne.",
        "Ces régimes s'imposent par la <b>terreur</b>, l'<b>embrigadement</b> de la société et une <b>propagande</b> fondée sur les réalisations du régime et le <b>culte de la personnalité</b> du chef.",
        "Un <b>État totalitaire</b> repose sur trois piliers : le <b>contrôle du peuple</b> (propagande, terreur, embrigadement), le <b>contrôle de l'économie</b> par l'État, et un <b>dictateur</b> avec un parti unique et une idéologie.",
        "Les démocraties, comme la France, sont fragilisées par la crise des années 30 et la montée de l'<b>extrême droite</b>, mais résistent : le <b>Front populaire</b> (1936) maintient la démocratie et obtient de grandes réformes sociales."
      ],

      sections: [
        {
          titre: "De Lénine à Staline",
          points: [
            "En <b>1917</b>, la <b>révolution bolchevique</b> porte <b>Lénine</b> au pouvoir en Russie.",
            "En <b>1922</b>, il crée un État fédéral : l'<b>URSS</b>.",
            "À la mort de Lénine en <b>1924</b>, <b>Staline</b> écarte ses rivaux et s'impose comme son seul héritier."
          ]
        },
        {
          titre: "L'URSS de Staline : une économie contrôlée par l'État",
          points: [
            "À partir de <b>1929</b>, Staline accélère la <b>collectivisation des terres</b> : les terres sont mises en commun dans des exploitations collectives, les <b>kolkhozes</b>.",
            "Les paysans riches qui s'y opposent, les <b>koulaks</b> (ils abattent leur bétail ou délaissent leurs cultures en signe d'opposition), sont persécutés, éliminés ou déportés dans des camps de travail forcé : les <b>goulags</b>.",
            "L'économie est <b>planifiée</b> : des <b>plans quinquennaux</b> (sur cinq ans) fixent les objectifs. Les entreprises sont nationalisées et les terres collectivisées : l'économie est <b>étatisée</b>.",
            "Staline donne la priorité à l'<b>industrie lourde</b> (acier, charbon), aux biens d'équipement (chemins de fer, centrales électriques) et à l'armement. L'URSS devient la <b>3ᵉ puissance industrielle mondiale</b> en 1939.",
            "Mais la population manque de biens courants et de nourriture : entre <b>1931 et 1933</b>, de grandes famines font environ <b>6 millions</b> de victimes."
          ]
        },
        {
          titre: "L'URSS de Staline : un peuple contrôlé",
          points: [
            "<b>Propagande</b> : des affiches diffusent les idées du parti. Elles représentent les ouvriers, les paysans et les soldats (qui composent les <b>soviets</b>, conseils d'ouvriers et de paysans) et condamnent les capitalistes et les nazis.",
            "Symboles de l'URSS à reconnaître sur une affiche : l'<b>étoile</b> et le <b>drapeau rouges</b>, la <b>faucille et le marteau</b>, les lettres CCCP (URSS en russe).",
            "<b>Culte de la personnalité</b> : par les journaux et les radios, Staline est présenté comme le guide, le « père du peuple ».",
            "<b>Embrigadement</b> : jeunesses communistes, parades et défilés militaires.",
            "<b>Terreur</b> : les opposants sont éliminés ou envoyés au goulag. Entre <b>1936 et 1938</b> ont lieu les <b>grandes purges</b> (la Grande Terreur) : Staline fait éliminer des membres du parti communiste pour assurer son pouvoir absolu. La population est surveillée par la police politique, le <b>NKVD</b>."
          ]
        },
        {
          titre: "L'Allemagne nazie : la conquête légale du pouvoir",
          points: [
            "À partir de <b>1929</b>, l'Allemagne est touchée par la crise économique et le chômage augmente.",
            "<b>Hitler</b>, chef du parti nazi (<b>NSDAP</b>, extrême droite), profite des difficultés : il accuse le traité de Versailles, les Juifs et la République d'être responsables de la crise.",
            "Aux élections de <b>1932</b>, le parti nazi devient le <b>premier parti d'Allemagne</b>.",
            "Le <b>30 janvier 1933</b>, Hitler est nommé <b>chancelier</b> par le président Hindenburg : il s'agit d'une <b>conquête légale</b> du pouvoir (il n'a pas pris le pouvoir par la force)."
          ]
        },
        {
          titre: "Hitler met en place un régime totalitaire",
          points: [
            "Le <b>27 février 1933</b>, le Reichstag (le Parlement) brûle : le parti communiste en est accusé et il est <b>interdit</b> en 1933, comme les syndicats. Le parti nazi devient le <b>parti unique</b>.",
            "La presse et les médias sont <b>censurés</b> : seuls ceux du parti nazi sont autorisés. Lors des <b>autodafés</b> (mai 1933), les nazis brûlent publiquement des livres ; toute publication juive ou communiste est interdite.",
            "<b>Propagande</b> : Goebbels s'en charge. Médias, arts et culture sont au service du régime.",
            "<b>Embrigadement</b> : les jeunes de 6 à 18 ans sont enrôlés dans la <b>Jeunesse hitlérienne</b>. Il faut former l'« <b>homme nouveau</b> » : un bon nazi, dévoué au Führer, fort physiquement (blond, grand, fort).",
            "<b>Culte de la personnalité</b> : manifestations, grands spectacles et parades mettent en avant la grandeur du régime et de son chef.",
            "<b>Terreur</b> : les opposants sont arrêtés par la police politique, la <b>Gestapo</b>, tués ou déportés dans des <b>camps de concentration</b>, comme celui de <b>Dachau</b> ouvert en 1933.",
            "Lors de la <b>Nuit des longs couteaux</b> (<b>30 juin 1934</b>), les chefs des SA sont à leur tour assassinés par les SS : Hitler élimine ses rivaux à l'intérieur même du parti."
          ]
        },
        {
          titre: "Une doctrine raciste, antisémite et xénophobe",
          points: [
            "Hitler considère que les « races » humaines sont inégales et que la « race » supérieure est celle des <b>Aryens</b>, les Allemands. Cette idéologie raciste et antisémite est développée dans son livre <b>Mein Kampf</b> (1925).",
            "Il veut une « race pure » : les Juifs et les personnes porteuses de maladies génétiques doivent être éliminés. L'État mène une politique <b>raciste, antisémite et xénophobe</b>.",
            "Les <b>lois de Nuremberg</b> (<b>1935</b>) excluent les Juifs de la société : ils perdent leur citoyenneté et le droit de vote, le mariage avec un Allemand leur est interdit, ainsi que les emplois publics et les métiers indépendants.",
            "La <b>Nuit de Cristal</b> (<b>9-10 novembre 1938</b>) est un <b>pogrom</b> : violences, pillages, destruction de commerces, de synagogues et de foyers juifs dans tout le pays. C'est la première arrestation de masse : <b>30 000</b> hommes juifs sont déportés en camps de concentration.",
            "Les magasins juifs sont aussi <b>boycottés</b>."
          ]
        },
        {
          titre: "Une Allemagne qui se prépare à la conquête",
          points: [
            "À partir de <b>1935</b>, Hitler prépare le « <b>Grand Reich</b> » : il <b>réarme</b> le pays (service militaire, production d'armes) et remilitarise la Rhénanie, ce que le traité de Versailles interdisait.",
            "Il crée un réseau d'alliances : l'<b>Axe Berlin-Rome</b> avec l'Italie de Mussolini.",
            "En <b>1938</b>, il passe à l'<b>offensive</b> : en mars il annexe l'Autriche (l'<b>Anschluss</b>), puis il rattache les <b>Sudètes</b> (territoire de Tchécoslovaquie peuplé d'Allemands). Il commence ainsi la conquête de l'« <b>espace vital</b> » allemand."
          ]
        },
        {
          titre: "La France et le Front populaire",
          points: [
            "<b>Années 30</b> : la France est touchée par la <b>crise</b> économique et le chômage. Les gouvernements sont instables et les <b>ligues d'extrême droite</b> se développent contre la République parlementaire.",
            "Le <b>6 février 1934</b>, une manifestation des ligues à Paris tourne à l'<b>émeute</b>. (Attention : la fiche du cours écrit « 1936 », mais l'émeute a bien eu lieu en 1934 — vérifie avec ta prof quelle date elle attend.)",
            "Pour faire face à cette menace, la gauche s'unit dans le <b>Front populaire</b> : <b>SFIO</b> (parti socialiste), <b>PC</b> (parti communiste) et les <b>radicaux</b>.",
            "En <b>mai 1936</b>, le Front populaire gagne les élections législatives avec 63 % des sièges à la Chambre des députés. <b>Léon Blum</b> devient chef du gouvernement.",
            "Il doit faire face à une <b>grève générale</b> : les ouvriers occupent les usines, dans l'espoir de conquérir de nouveaux droits.",
            "Les <b>accords de Matignon</b> (<b>7 juin 1936</b>), négociés entre le patronat et les syndicats (CGT), et les lois sociales définissent les nouvelles conditions de travail : <b>semaine de 40 heures</b>, <b>premiers congés payés</b>, <b>augmentation des salaires</b>, conventions collectives, droit syndical, délégués du personnel dans les entreprises de plus de 10 ouvriers.",
            "Réformes économiques et culturelles : nationalisation des industries d'armement et des chemins de fer (création de la <b>SNCF</b> en 1937), des femmes au gouvernement, développement de la culture et des loisirs (musées, tarifs réduits, billets de train) : les classes populaires découvrent les <b>premières vacances</b>.",
            "<b>Bilan</b> : le Front populaire échoue à surmonter la crise (le chômage augmente) et se divise, notamment sur le refus d'intervenir dans la guerre civile d'Espagne. Blum démissionne en <b>juin 1937</b> ; le Front populaire prend fin en <b>1938</b> quand Daladier arrive au pouvoir et lance le réarmement face au danger nazi. Mais il a marqué la mémoire nationale par ses mesures sociales et surtout il a <b>maintenu la démocratie</b>."
          ]
        },
        {
          titre: "Synthèse : une Europe en crise (1919-1939)",
          points: [
            "Trois crises : <b>politique</b> (dictature politique, révolution bolchevique), <b>économique</b> (baisse de la production, fermeture d'usines), <b>sociale</b> (chômage et misère, manifestations et mécontentement populaire).",
            "Conséquence 1 — <b>renforcement des régimes totalitaires</b> : l'URSS soviétique et l'Allemagne nazie, qui gouvernent par la terreur et la propagande.",
            "Conséquence 2 — <b>fragilisation des démocraties</b> : la France du Front populaire, qui répond à la crise par des réformes sociales."
          ]
        },
        {
          titre: "Méthode : analyser une affiche de propagande",
          points: [
            "Rappel : la <b>propagande</b> est un ensemble de moyens utilisés pour répandre une opinion, une idée, pour influencer voire manipuler l'opinion publique. Elle utilise les <b>médias</b> : journaux, affiches, films, radio (aujourd'hui télévision et Internet).",
            "L'affiche de propagande est surtout utilisée par les dictatures (mais aussi par les démocraties en temps de crise ou de guerre). Elle <b>valorise</b> (glorifie) et elle <b>exagère</b> ou transforme la réalité : elle n'est ni neutre ni objective.",
            "<b>I. Présenter</b> l'affiche : sa <b>date</b>, son <b>auteur</b> (s'il est connu), son <b>commanditaire</b> (qui l'a commandée : un parti, un État...), ses <b>destinataires</b>, le <b>contexte historique</b>.",
            "<b>II. Décrire</b> l'affiche : le <b>contenu visuel</b> (personnages, symboles, couleurs, décor, attitudes, regards), le <b>contenu écrit</b> (message, slogan, devise), la <b>composition</b> (organisation, disposition et taille des éléments).",
            "<b>III. Interpréter</b> l'affiche : quel est son <b>message</b> ? Que veut-elle montrer ?",
            "Exemple soviétique — « Poursuivre la révolution communiste » (1934), commandée par le Parti communiste pour son 17ᵉ Congrès : à gauche Lénine et la révolution d'Octobre 1917, à droite Staline et une URSS modernisée (usines, grues), en bas le peuple qui manifeste son soutien. Messages : Staline est l'héritier de Lénine ; il a modernisé l'URSS ; le peuple le soutient (culte de la personnalité).",
            "Exemple nazi — « Unité de la jeunesse au sein de la Jeunesse hitlérienne ! » (1935) : un jeune blond et musclé en uniforme, tambour et drapeau à croix gammée, chasse des « trouble-fêtes » caricaturés en bas. Message : la jeunesse doit être unie dans la Jeunesse hitlérienne, à l'image de l'« homme nouveau » nazi, et les opposants doivent être chassés."
          ]
        },
        {
          titre: "Méthodes : présenter un document et rédiger une réponse construite",
          points: [
            "<b>Présenter un document</b> : sa nature (affiche, discours, photo...), son auteur, sa date, son destinataire et son contexte (que se passe-t-il à ce moment-là ?).",
            "<b>Réponse construite</b> : une courte introduction qui situe le sujet, puis un paragraphe par idée avec des exemples précis (dates, noms, chiffres), reliés par des connecteurs (d'abord, ensuite, de plus, enfin), et une phrase de conclusion.",
            "Ex : « Montrez que le régime nazi est totalitaire et raciste » → un paragraphe sur le régime totalitaire (parti unique, propagande, Jeunesse hitlérienne, Gestapo, camps), un paragraphe sur le racisme et l'antisémitisme (Mein Kampf, lois de Nuremberg, Nuit de Cristal)."
          ]
        }
      ],

      dates: [
        ["1917", "Révolution bolchevique : Lénine prend le pouvoir"],
        ["1922", "Création de l'URSS"],
        ["1924", "Mort de Lénine, Staline prend le pouvoir"],
        ["1929", "Début de la collectivisation en URSS ; la crise touche l'Allemagne, Hitler en profite"],
        ["1931 - 1933", "Grandes famines en URSS (6 millions de victimes)"],
        ["1932", "Le parti nazi devient le premier parti d'Allemagne aux élections"],
        ["30 janvier 1933", "Hitler nommé chancelier : prise du pouvoir"],
        ["27 février 1933", "Incendie du Reichstag, le parti communiste est accusé puis interdit"],
        ["1933", "Parti nazi parti unique, autodafés, camp de Dachau"],
        ["6 février 1934", "Émeute des ligues d'extrême droite à Paris (la fiche indique 1936)"],
        ["30 juin 1934", "Nuit des longs couteaux"],
        ["1935", "Lois de Nuremberg ; Hitler commence à réarmer"],
        ["1936 - 1938", "Grandes purges en URSS"],
        ["Mai 1936", "Victoire du Front populaire, Léon Blum au pouvoir"],
        ["7 juin 1936", "Accords de Matignon"],
        ["Juin 1937", "Démission de Léon Blum"],
        ["Mars 1938", "Anschluss : Hitler annexe l'Autriche, début de l'offensive"],
        ["1938", "Fin du Front populaire (Daladier) ; rattachement des Sudètes"],
        ["9 - 10 novembre 1938", "Nuit de Cristal"]
      ],

      mots: [
        ["Démocratie", "Régime politique dans lequel le pouvoir appartient au peuple."],
        ["Régime totalitaire", "Régime politique dans lequel un État impose ses idées par la propagande et la terreur, et contrôle le peuple et l'économie."],
        ["Communisme", "Système économique et politique qui impose la propriété collective pour supprimer les classes sociales."],
        ["Culte de la personnalité", "Utilisation de différents moyens pour mettre en valeur un homme présenté comme un guide."],
        ["Antisémitisme", "Ensemble des idées et des actions manifestant une haine des Juifs."],
        ["Xénophobie", "Hostilité envers les étrangers."],
        ["Propagande", "Ensemble des moyens utilisés pour répandre une idée et influencer, voire manipuler, l'opinion."],
        ["Embrigadement", "Fait d'enrôler la population, surtout la jeunesse, pour la soumettre aux idées du régime."],
        ["Collectivisation des terres", "Mise en commun des terres dans de grandes exploitations collectives."],
        ["Kolkhoze", "Exploitation collective appartenant à un groupe de paysans qui ont mis en commun leurs terres, outils et bétail."],
        ["Koulak", "Paysan aisé (mot russe), persécuté par Staline."],
        ["Plan quinquennal", "Plan décidé par l'État qui fixe les objectifs de production pour les cinq ans à venir."],
        ["Goulag", "Camps de travail forcé où Staline fait enfermer ceux qui s'opposent à lui."],
        ["Purges", "Éliminations massives d'opposants, y compris au sein du parti communiste (1936-1938)."],
        ["Gestapo", "Police politique de l'Allemagne nazie."],
        ["Camp de concentration", "Camp où les nazis enferment opposants et personnes persécutées (ex : Dachau, 1933)."],
        ["Nuit des longs couteaux", "30 juin 1934 : les chefs des SA sont assassinés par les SS sur ordre d'Hitler."],
        ["Mein Kampf", "Livre d'Hitler où il expose son idéologie raciste et antisémite."],
        ["Lois de Nuremberg", "Lois de 1935 qui excluent les Juifs de la société allemande."],
        ["Nuit de Cristal", "Pogrom contre les Juifs en Allemagne, les 9 et 10 novembre 1938."],
        ["Pogrom", "Violences collectives contre une communauté juive : pillages, destructions, meurtres."],
        ["Autodafé", "Destruction de livres en les brûlant publiquement."],
        ["Anschluss", "Annexion de l'Autriche par l'Allemagne nazie en mars 1938."],
        ["Espace vital", "Territoires que Hitler veut conquérir à l'Est pour assurer l'autosuffisance de l'Allemagne."],
        ["Ligues d'extrême droite", "Mouvements antiparlementaires qui s'agitent contre la République dans les années 30."],
        ["Front populaire", "Alliance de la SFIO, du PC et des radicaux, au pouvoir en France en 1936-1938."],
        ["Accords de Matignon", "Accords du 7 juin 1936 entre patronat et syndicats, qui donnent de nouveaux droits aux travailleurs."]
      ],

      quiz: [
        { q: "Qui prend le pouvoir en Russie lors de la révolution bolchevique de 1917 ?",
          choix: ["Staline", "Lénine", "Hitler", "Léon Blum"],
          bonne: 1,
          why: "En 1917, la révolution bolchevique porte Lénine au pouvoir." },

        { q: "En quelle année l'URSS est-elle créée ?",
          choix: ["1917", "1922", "1924", "1929"],
          bonne: 1,
          why: "Lénine crée l'URSS, un État fédéral, en 1922." },

        { q: "Que se passe-t-il en 1924 ?",
          choix: ["Hitler devient chancelier", "Lénine meurt et Staline s'impose", "Début du Front populaire", "Nuit de Cristal"],
          bonne: 1,
          why: "À la mort de Lénine en 1924, Staline écarte ses rivaux et prend le pouvoir." },

        { q: "Qu'est-ce que la collectivisation des terres ?",
          choix: ["La vente des terres aux paysans riches", "La mise en commun des terres dans des exploitations collectives (kolkhozes)", "La destruction des fermes", "Le partage des terres entre les nazis"],
          bonne: 1,
          why: "À partir de 1929, Staline regroupe les terres dans des kolkhozes." },

        { q: "Que sont les koulaks ?",
          choix: ["Des soldats de l'Armée rouge", "Des paysans riches persécutés par Staline", "Des policiers soviétiques", "Des ouvriers d'usine"],
          bonne: 1,
          why: "Les koulaks, paysans aisés qui s'opposent à la collectivisation, sont éliminés ou déportés au goulag." },

        { q: "À quel secteur Staline donne-t-il la priorité ?",
          choix: ["L'agriculture", "Les biens de consommation", "L'industrie lourde", "Le tourisme"],
          bonne: 2,
          why: "Les plans quinquennaux donnent la priorité à l'industrie lourde : acier, charbon, biens d'équipement." },

        { q: "Que sont les grandes purges (1936-1938) ?",
          choix: ["Des fêtes nationales", "Une répression massive : Staline fait éliminer des membres du parti", "Des réformes sociales", "Des élections libres"],
          bonne: 1,
          why: "Pendant la Grande Terreur, Staline élimine des membres du parti pour assurer son pouvoir absolu." },

        { q: "Quels sont les trois éléments d'un État totalitaire ?",
          choix: ["Élections, liberté de la presse, syndicats", "Contrôle du peuple, contrôle de l'économie, dictateur avec parti unique", "Roi, Église, armée", "Parlement, président, juges"],
          bonne: 1,
          why: "État totalitaire : contrôle de la population (propagande, terreur), contrôle de l'économie, dictature d'un chef et d'un parti unique." },

        { q: "Comment Hitler arrive-t-il au pouvoir le 30 janvier 1933 ?",
          choix: ["Par un coup d'État", "Il est nommé chancelier par Hindenburg : une conquête légale", "Par une révolution", "Il est élu roi"],
          bonne: 1,
          why: "Après la victoire de son parti aux élections de 1932, Hitler est nommé chancelier : c'est une conquête légale du pouvoir." },

        { q: "Qui est accusé de l'incendie du Reichstag en février 1933 ?",
          choix: ["Les Juifs", "Le parti communiste", "Les SS", "La France"],
          bonne: 1,
          why: "Le parti communiste est accusé, puis interdit en 1933 ; le parti nazi devient parti unique." },

        { q: "Qu'est-ce que la Nuit des longs couteaux (30 juin 1934) ?",
          choix: ["Un pogrom contre les Juifs", "L'assassinat des chefs des SA par les SS", "L'incendie du Reichstag", "Une révolte ouvrière"],
          bonne: 1,
          why: "Hitler fait assassiner les chefs des SA par les SS pour éliminer ses rivaux dans le parti." },

        { q: "Quel est le premier camp de concentration nazi, ouvert en 1933 ?",
          choix: ["Auschwitz", "Dachau", "Le goulag", "Nuremberg"],
          bonne: 1,
          why: "Dachau ouvre dès 1933 pour enfermer les opposants." },

        { q: "Dans quel livre Hitler expose-t-il son idéologie raciste ?",
          choix: ["Le Capital", "Mein Kampf", "Les lois de Nuremberg", "Le Manifeste"],
          bonne: 1,
          why: "Mein Kampf développe l'idéologie raciste et antisémite d'Hitler." },

        { q: "Que font les lois de Nuremberg (1935) ?",
          choix: ["Elles donnent les congés payés", "Elles excluent les Juifs de la société (citoyenneté, vote, mariage, emplois)", "Elles créent l'URSS", "Elles interdisent le parti nazi"],
          bonne: 1,
          why: "Les Juifs perdent leur citoyenneté, le droit de vote, et beaucoup de métiers leur sont interdits." },

        { q: "Qu'est-ce que la Nuit de Cristal (9-10 novembre 1938) ?",
          choix: ["Un pogrom contre les Juifs dans toute l'Allemagne", "Une fête nazie", "L'annexion de l'Autriche", "L'élection d'Hitler"],
          bonne: 0,
          why: "Synagogues, commerces et foyers juifs sont détruits ; 30 000 hommes juifs sont déportés en camps." },

        { q: "Qu'est-ce que l'Anschluss (mars 1938) ?",
          choix: ["L'annexion de l'Autriche par l'Allemagne", "Une loi antisémite", "Un plan quinquennal", "Un accord avec la France"],
          bonne: 0,
          why: "En 1938, Hitler passe à l'offensive : il annexe l'Autriche, puis les Sudètes." },

        { q: "Quels partis forment le Front populaire ?",
          choix: ["SFIO, PC et radicaux", "Parti nazi et PC", "Les ligues d'extrême droite", "SFIO et ligues"],
          bonne: 0,
          why: "Le Front populaire regroupe la SFIO (socialistes), le PC (communistes) et les radicaux." },

        { q: "Contre quelle menace la gauche s'unit-elle dans le Front populaire ?",
          choix: ["Le communisme", "Les ligues d'extrême droite", "L'Angleterre", "Les syndicats"],
          bonne: 1,
          why: "Les partis de gauche s'unissent face aux ligues d'extrême droite antiparlementaires." },

        { q: "Qui devient chef du gouvernement après la victoire du Front populaire en mai 1936 ?",
          choix: ["Daladier", "Léon Blum", "Hindenburg", "Clemenceau"],
          bonne: 1,
          why: "Léon Blum, socialiste, dirige le gouvernement du Front populaire." },

        { q: "Que donnent les accords de Matignon et les lois sociales de 1936 ?",
          choix: ["Semaine de 40 heures, congés payés, hausse des salaires", "La suppression des syndicats", "La collectivisation des terres", "Le droit de vote des femmes"],
          bonne: 0,
          why: "Accords de Matignon (7 juin 1936) : 40 heures, premiers congés payés, hausse des salaires, conventions collectives, délégués du personnel." },

        { q: "Quel est le principal succès du Front populaire selon le cours ?",
          choix: ["Il a fait disparaître le chômage", "Il a maintenu la démocratie et marqué la mémoire par ses mesures sociales", "Il a gagné la guerre d'Espagne", "Il a duré dix ans"],
          bonne: 1,
          why: "Il n'a pas réglé la crise, mais il a maintenu un régime démocratique et ses réformes sociales sont restées." },

        { q: "Dans la méthode d'analyse d'une affiche, quelles sont les trois étapes ?",
          choix: ["Recopier, colorier, résumer", "Présenter, décrire, interpréter", "Lire, apprendre, réciter", "Dater, signer, envoyer"],
          bonne: 1,
          why: "On présente l'affiche (date, auteur, commanditaire, destinataires, contexte), on la décrit, puis on interprète son message." },

        { q: "Qu'est-ce que le commanditaire d'une affiche ?",
          choix: ["Celui qui la regarde", "Celui qui a commandé l'affiche (un parti, un État...)", "Le dessinateur", "L'imprimeur"],
          bonne: 1,
          why: "Le commanditaire est celui qui a demandé la réalisation de l'affiche, par exemple le Parti communiste." },

        { q: "Sur l'affiche soviétique de 1934, que montre la présence de Lénine à gauche et de Staline à droite ?",
          choix: ["Qu'ils sont ennemis", "Que Staline est présenté comme l'héritier de Lénine", "Que Lénine est encore au pouvoir", "Que l'URSS est en guerre"],
          bonne: 1,
          why: "L'affiche relie la révolution de 1917 à l'URSS modernisée de Staline : Staline poursuit l'œuvre de Lénine." }
      ]
    },
    {
      id: 'fr-ch7',
      matiere: 'francais',
      numero: 'Lecture',
      titre: "La Gloire de mon père — résumé de lecture",
      periode: "Lecture suivie — Marcel Pagnol",
      theme: "Résumé partie par partie et personnages de La Gloire de mon père, de Marcel Pagnol",

      essentiel: [
        "La Gloire de mon père (1957) est le premier tome des Souvenirs d'enfance de Marcel Pagnol : un récit autobiographique où l'auteur raconte son enfance en Provence.",
        "Le narrateur, Marcel, admire son père Joseph, instituteur sérieux et laïque, et souffre de le voir moins doué que l'oncle Jules pour la chasse.",
        "Pendant les vacances à la Bastide-Neuve, dans les collines, Joseph réussit le « coup du roi » : il abat deux bartavelles d'un seul coup double. Marcel brandit les oiseaux : c'est « la gloire de son père ».",
        "Le livre est plein d'humour et de tendresse : Marcel découvre les collines, les adultes (qui mentent parfois) et que son père peut être fier comme tout le monde."
      ],

      sections: [
        {
          titre: "Chapitres 1 à 4 — Les origines",
          points: [
            "Marcel naît à Aubagne, au pied du Garlaban. Son grand-père était tailleur de pierre ; il s'est privé pour que ses enfants fassent des études.",
            "Son père, Joseph, est devenu instituteur après l'École normale : il est laïque, républicain et anticlérical (il se méfie des curés).",
            "Joseph rencontre Augustine, une petite couturière douce et timide, et l'épouse. Marcel est leur premier enfant."
          ]
        },
        {
          titre: "Chapitres 5 à 9 — L'enfance à Marseille",
          points: [
            "Tout petit, Marcel apprend à lire seul, au fond de la classe de son père, où sa mère le laisse en allant au marché. Augustine a peur qu'il se fatigue le cerveau !",
            "La famille s'installe à Marseille : Joseph est nommé dans une grande école, celle du chemin des Chartreux. Naît Paul, le petit frère.",
            "La tante Rose, sœur d'Augustine, emmène Marcel au parc Borély. Elle y rencontre un monsieur qui prétend être le propriétaire du parc : c'est Jules, qu'elle épouse. Marcel comprend que les adultes peuvent mentir.",
            "L'oncle Jules est catholique et va à la messe, alors que Joseph est anticlérical : ils deviennent pourtant de grands amis et se disputent gentiment.",
            "Avec la naissance de sa petite sœur et de son cousin, Marcel se demande d'où viennent les bébés."
          ]
        },
        {
          titre: "Chapitres 10 à 15 — La villa et le grand voyage",
          points: [
            "Joseph et l'oncle Jules louent ensemble une maison dans les collines pour l'été : la Bastide-Neuve.",
            "Il faut des meubles : Joseph et Marcel en achètent de vieux chez un brocanteur, en marchandant longuement, puis les réparent dans la cave pendant des semaines.",
            "À la mi-juillet, un paysan, François, transporte les meubles sur sa charrette tirée par un mulet. La famille prend le tram jusqu'à La Barasse, puis marche des heures en faisant de longs détours, car de grandes propriétés privées barrent le chemin.",
            "Ils passent par le village de La Treille et arrivent enfin à la Bastide-Neuve. Marcel tombe amoureux des collines : la garrigue, les pinèdes, et les sommets de Tête-Rouge, du Taoumé et du Garlaban."
          ]
        },
        {
          titre: "Chapitres 16 à 19 — Les vacances à la Bastide-Neuve",
          points: [
            "Marcel découvre la maison, les cigales, les fourmis, les insectes attirés par la lampe sous le figuier. Il parle de ces jours comme les plus beaux de sa vie.",
            "Avec Paul, il joue aux Indiens dans la garrigue.",
            "À table, Joseph et Jules discutent de politique et de religion ; les femmes calment les disputes. Marcel note dans un carnet les mots difficiles et les expressions de son oncle.",
            "Un jour de pluie, on part à la chasse aux escargots."
          ]
        },
        {
          titre: "Chapitres 20 à 26 — La préparation de la chasse",
          points: [
            "L'ouverture de la chasse approche. L'oncle Jules, chasseur expérimenté, présente le gibier des collines, dont la bartavelle, une perdrix rare et très recherchée.",
            "Les hommes préparent les cartouches. Jules a un fusil moderne, Joseph un vieux fusil. Marcel est déçu que son père en sache si peu sur la chasse et souffre de voir Jules le traiter comme un débutant.",
            "Jules raconte ses exploits ; Joseph s'entraîne au « coup du roi » : abattre deux oiseaux d'un coup double.",
            "Marcel supplie qu'on l'emmène. Les adultes font semblant d'accepter mais lui mentent sur la date. Paul découvre que la chasse commence le lendemain à l'aube : Marcel décide de suivre les chasseurs en cachette."
          ]
        },
        {
          titre: "Chapitres 27 à 30 — La chasse et les bartavelles",
          points: [
            "Marcel suit de loin. Jules tire très bien, tandis que Joseph rate tout et se fait réprimander : Marcel a honte et mal pour son père.",
            "Marcel se perd dans la garrigue. Il a peur, est attaqué par un grand rapace, se réfugie dans une cabane de pierre puis reprend courage.",
            "Il entend deux coups de feu : deux bartavelles tombent à côté de lui (l'une sur sa tête). Il entend Jules reprocher à Joseph d'avoir manqué les oiseaux.",
            "Marcel surgit en haut d'un rocher et brandit les deux bartavelles : c'est Joseph qui a réussi le coup du roi ! Marcel lève vers le ciel « la gloire de son père »."
          ]
        },
        {
          titre: "Chapitres 31 à 33 — Le triomphe de Joseph",
          points: [
            "De retour à la maison, Joseph est triomphant. Il fait le tour du village pour montrer ses bartavelles : à Mond des Parpaillouns, un vieux braconnier, au facteur, aux joueurs de boules.",
            "Le curé, que Joseph n'aime pourtant pas, le prend en photo avec ses bartavelles, et Joseph en est ravi.",
            "Marcel découvre que son père, si sérieux, peut lui aussi être fier et vaniteux : il parle d'un « flagrant délit d'humanité ». Loin d'être déçu, il l'aime encore plus."
          ]
        }
      ],

      mots: [
        ["Marcel", "Le narrateur : l'auteur enfant, curieux et sensible, qui admire son père et découvre les collines de Provence."],
        ["Joseph", "Le père de Marcel, instituteur laïque et anticlérical, sérieux et honnête ; chasseur débutant, il réussit le coup du roi."],
        ["Augustine", "La mère de Marcel, petite couturière douce, timide et protectrice."],
        ["Paul", "Le petit frère de Marcel, compagnon de jeux ; c'est lui qui révèle le mensonge des chasseurs."],
        ["La petite sœur", "Le troisième enfant de Joseph et Augustine, née à Marseille."],
        ["Tante Rose", "La sœur d'Augustine, qui emmène Marcel au parc Borély et y rencontre Jules."],
        ["Oncle Jules", "Le mari de tante Rose : catalan, catholique, il roule les « r » ; chasseur expérimenté, il se moque un peu de Joseph."],
        ["Le brocanteur", "Le marchand de vieux meubles avec qui Joseph marchande pour meubler la Bastide-Neuve."],
        ["François", "Le paysan qui transporte les meubles sur sa charrette jusqu'à la Bastide-Neuve."],
        ["Mond des Parpaillouns", "Un vieux braconnier du village, à qui Joseph montre fièrement ses bartavelles."],
        ["Le curé", "Le prêtre du village, qui photographie Joseph avec ses bartavelles."],
        ["Bartavelle", "Grosse perdrix des montagnes, rare et très recherchée par les chasseurs."],
        ["Coup du roi", "Exploit de chasse : abattre deux oiseaux d'un coup double, un avec chaque canon du fusil."],
        ["Garrigue", "Végétation des collines sèches de Provence : buissons, thym, romarin, chênes kermès."]
      ],

      quiz: [
        { q: "Qui est l'auteur de La Gloire de mon père ?",
          choix: ["Philippe Grimbert", "Marcel Pagnol", "Victor Hugo", "Alphonse Daudet"],
          bonne: 1,
          why: "C'est le premier tome des Souvenirs d'enfance de Marcel Pagnol, publié en 1957." },

        { q: "Quel est le métier de Joseph, le père de Marcel ?",
          choix: ["Tailleur de pierre", "Instituteur", "Curé", "Paysan"],
          bonne: 1,
          why: "Joseph est instituteur, laïque et anticlérical. C'est le grand-père qui était tailleur de pierre." },

        { q: "Dans quelle ville Marcel est-il né ?",
          choix: ["Marseille", "Aubagne", "Paris", "La Treille"],
          bonne: 1,
          why: "Marcel naît à Aubagne, au pied du Garlaban." },

        { q: "Comment Marcel apprend-il à lire ?",
          choix: ["Avec tante Rose au parc", "Tout seul, au fond de la classe de son père", "Avec l'oncle Jules", "À l'école du village"],
          bonne: 1,
          why: "Sa mère le laisse dans la classe de Joseph quand elle va au marché, et il apprend à lire tout petit." },

        { q: "Où tante Rose rencontre-t-elle l'oncle Jules ?",
          choix: ["À la messe", "Au parc Borély", "À la Bastide-Neuve", "À l'école"],
          bonne: 1,
          why: "Jules prétend être le propriétaire du parc Borély : Marcel découvre que les adultes peuvent mentir." },

        { q: "Qu'est-ce qui oppose Joseph et l'oncle Jules ?",
          choix: ["Le football", "La religion : Jules est catholique, Joseph anticlérical", "L'argent", "Ils ne se parlent jamais"],
          bonne: 1,
          why: "Ils se disputent sur la religion et la politique, mais restent de grands amis." },

        { q: "Comment s'appelle la maison des vacances dans les collines ?",
          choix: ["Le château de ma mère", "La Bastide-Neuve", "Le parc Borély", "La Barasse"],
          bonne: 1,
          why: "Joseph et Jules louent ensemble la Bastide-Neuve pour l'été." },

        { q: "Comment la famille se procure-t-elle les meubles de la Bastide-Neuve ?",
          choix: ["Elle les achète neufs", "Joseph les achète chez un brocanteur puis les répare avec Marcel", "Jules les fabrique", "Ils sont déjà dans la maison"],
          bonne: 1,
          why: "Joseph marchande de vieux meubles chez un brocanteur, puis les répare dans la cave." },

        { q: "Qui transporte les meubles jusqu'à la Bastide-Neuve ?",
          choix: ["Le curé", "François, un paysan, avec sa charrette", "Mond des Parpaillouns", "L'oncle Jules en voiture"],
          bonne: 1,
          why: "François charge les meubles sur sa charrette tirée par un mulet." },

        { q: "Qu'est-ce qu'une bartavelle ?",
          choix: ["Un lapin", "Une grosse perdrix rare", "Un sanglier", "Un fusil"],
          bonne: 1,
          why: "La bartavelle est une perdrix des montagnes, rare et très recherchée." },

        { q: "Qu'est-ce que le « coup du roi » ?",
          choix: ["Un tir raté", "Abattre deux oiseaux d'un coup double", "Une partie de boules", "Une ruse pour mentir"],
          bonne: 1,
          why: "C'est l'exploit de Joseph : deux bartavelles avec les deux canons de son fusil." },

        { q: "Qui révèle à Marcel que la chasse commence le lendemain ?",
          choix: ["Augustine", "Paul", "Tante Rose", "François"],
          bonne: 1,
          why: "Les adultes avaient menti sur la date ; c'est Paul qui découvre la vérité." },

        { q: "Que fait Marcel quand les deux bartavelles tombent près de lui ?",
          choix: ["Il les cache", "Il les brandit pour montrer que son père les a tuées", "Il les donne à Jules", "Il rentre seul à la maison"],
          bonne: 1,
          why: "Il lève les bartavelles vers le ciel : c'est « la gloire de son père »." },

        { q: "Qui prend Joseph en photo avec ses bartavelles ?",
          choix: ["L'oncle Jules", "Le curé", "Marcel", "Le facteur"],
          bonne: 1,
          why: "Ironie : le curé, que Joseph n'aime pas, le photographie, et Joseph en est ravi." },

        { q: "Que découvre Marcel sur son père à la fin du livre ?",
          choix: ["Qu'il a menti sur la chasse", "Qu'il peut être fier et vaniteux comme tout le monde, et il l'aime encore plus", "Qu'il n'aime pas la chasse", "Qu'il va quitter l'école"],
          bonne: 1,
          why: "Marcel parle d'un « flagrant délit d'humanité » : son père n'est pas parfait, et il l'en aime davantage." }
      ]
    },
    {
      id: 'fr-ch8',
      matiere: 'francais',
      numero: 'Séquence 1',
      titre: "Les procédés d'écriture",
      periode: "Fiche méthode — compréhension de texte",
      theme: "Repérer un procédé dans un texte et dire à quoi il sert",

      essentiel: [
        "À l'évaluation type brevet, il ne suffit pas de <b>nommer</b> un procédé : il faut dire <b>à quoi il sert</b> (son effet).",
        "Méthode : je cite le passage → je nomme le procédé → j'explique l'effet produit (émotion, idée, rythme, insistance...).",
        "Les procédés vus en classe : champ lexical, valeurs du présent, types de phrases, figures de style, question rhétorique et pronom « on »."
      ],

      sections: [
        {
          titre: "Le champ lexical",
          points: [
            "Un ensemble de mots qui se rapportent à un même thème.",
            "<b>Effet</b> : il fait ressortir une émotion, une idée ou un sentiment dans le texte."
          ]
        },
        {
          titre: "Les valeurs du présent",
          points: [
            "<b>Présent d'énonciation</b> : c'est le regard de l'auteur adulte, au moment où il écrit ; il réfléchit sur ce qu'il a vécu.",
            "<b>Présent de narration</b> : il raconte un événement passé au présent pour rendre le récit plus vivant et dynamique, et pour accentuer l'émotion ou le traumatisme."
          ]
        },
        {
          titre: "Les phrases",
          points: [
            "<b>Propositions juxtaposées</b> (séparées par des virgules ou des points-virgules, sans mot de liaison) : elles donnent un rythme saccadé, accélèrent l'action et dramatisent la scène.",
            "<b>Phrase non verbale</b> (sans verbe conjugué) : elle dramatise une idée, insiste dessus, la met en évidence."
          ]
        },
        {
          titre: "Les figures de style",
          points: [
            "<b>Gradation, accumulation</b> : une suite de mots (de plus en plus forts pour la gradation) qui accentue une idée et dramatise.",
            "<b>Hyperbole</b> : une exagération.",
            "<b>Antithèse</b> : elle oppose deux idées (un paradoxe) pour mettre en valeur une idée ou montrer une complexité.",
            "<b>Métaphore ou comparaison</b> : une image qui illustre une idée, l'accentue, la développe ou la rend plus marquante. La comparaison utilise un outil (comme, tel, pareil à...), la métaphore non."
          ]
        },
        {
          titre: "La question rhétorique",
          points: [
            "Une question posée sans attendre de réponse.",
            "<b>Effet</b> : elle exprime le doute, la colère, une remarque de l'auteur ou son incompréhension."
          ]
        },
        {
          titre: "Le pronom personnel « on »",
          points: [
            "<b>Effet</b> : l'auteur veut universaliser une idée (la rendre vraie pour tout le monde), ou réfléchir sur les personnages et l'emprise qu'ils subissent."
          ]
        }
      ],

      mots: [
        ["Procédé d'écriture", "Moyen utilisé par l'auteur pour produire un effet sur le lecteur."],
        ["Champ lexical", "Ensemble de mots liés à un même thème ; il évoque une émotion, une idée, un sentiment."],
        ["Présent d'énonciation", "Présent du moment de l'écriture : regard et réflexion de l'auteur adulte."],
        ["Présent de narration", "Présent utilisé pour raconter un fait passé, pour le rendre vivant et accentuer l'émotion."],
        ["Propositions juxtaposées", "Propositions placées côte à côte sans mot de liaison : rythme saccadé, accélération."],
        ["Phrase non verbale", "Phrase sans verbe conjugué, qui met une idée en évidence."],
        ["Gradation", "Suite de termes de plus en plus forts, qui accentue une idée."],
        ["Accumulation", "Suite de termes qui s'enchaînent, pour insister ou dramatiser."],
        ["Hyperbole", "Exagération."],
        ["Antithèse", "Opposition de deux idées ou de deux mots contraires."],
        ["Comparaison", "Rapprochement de deux éléments avec un outil de comparaison (comme, tel...)."],
        ["Métaphore", "Rapprochement de deux éléments sans outil de comparaison."],
        ["Question rhétorique", "Question qui n'attend pas de réponse : doute, colère, remarque, incompréhension."]
      ],

      quiz: [
        { q: "À quoi sert un champ lexical dans un texte ?",
          choix: ["À donner le rythme de la phrase", "À évoquer une émotion, une idée, un sentiment", "À poser une question", "À raconter au passé"],
          bonne: 1,
          why: "Les mots d'un même thème font ressortir une émotion, une idée ou un sentiment." },

        { q: "Dans un récit autobiographique, que montre le présent d'énonciation ?",
          choix: ["L'action en train de se dérouler dans l'histoire", "Le regard et la réflexion de l'auteur adulte au moment de l'écriture", "Une vérité scientifique", "Un ordre"],
          bonne: 1,
          why: "C'est le moment où l'auteur, devenu adulte, écrit et réfléchit sur ce qu'il a vécu." },

        { q: "Pourquoi un auteur raconte-t-il un souvenir au présent de narration ?",
          choix: ["Pour montrer que c'est faux", "Pour rendre le récit plus vivant et accentuer l'émotion", "Parce qu'il a oublié le passé simple", "Pour parler du futur"],
          bonne: 1,
          why: "Le présent de narration rend la scène vivante, dynamique, et accentue l'émotion ou le traumatisme." },

        { q: "« Il court, il tombe, il se relève, il repart. » Quel procédé ?",
          choix: ["Une phrase non verbale", "Des propositions juxtaposées", "Une antithèse", "Une question rhétorique"],
          bonne: 1,
          why: "Les propositions sont séparées par des virgules sans mot de liaison : rythme saccadé, accélération." },

        { q: "Quel est l'effet des propositions juxtaposées ?",
          choix: ["Un rythme lent et calme", "Un rythme saccadé qui accélère et dramatise la scène", "Une exagération", "Une opposition"],
          bonne: 1,
          why: "Elles donnent un rythme saccadé et dramatisent la scène." },

        { q: "« Quelle horreur ! » est...",
          choix: ["Une phrase non verbale", "Une proposition juxtaposée", "Une métaphore", "Un présent de narration"],
          bonne: 0,
          why: "Il n'y a pas de verbe conjugué : la phrase non verbale insiste et met l'émotion en évidence." },

        { q: "« Je suis mort de fatigue » est...",
          choix: ["Une antithèse", "Une hyperbole", "Une question rhétorique", "Une gradation"],
          bonne: 1,
          why: "C'est une exagération : une hyperbole." },

        { q: "« Va, cours, vole » est...",
          choix: ["Une gradation", "Une antithèse", "Une comparaison", "Une phrase non verbale"],
          bonne: 0,
          why: "Les verbes sont de plus en plus forts : c'est une gradation, qui accentue l'idée." },

        { q: "« Un silence assourdissant » est...",
          choix: ["Une hyperbole", "Une antithèse", "Une comparaison", "Un champ lexical"],
          bonne: 1,
          why: "Deux idées opposées sont rapprochées (silence / assourdissant) : c'est une antithèse." },

        { q: "À quoi sert une antithèse ?",
          choix: ["À exagérer", "À opposer deux idées pour en mettre une en valeur ou montrer une complexité", "À accélérer le rythme", "À universaliser une idée"],
          bonne: 1,
          why: "L'antithèse oppose deux idées : paradoxe, mise en valeur, complexité." },

        { q: "« Ses yeux brillaient comme des étoiles » est...",
          choix: ["Une métaphore", "Une comparaison", "Une hyperbole", "Une antithèse"],
          bonne: 1,
          why: "Il y a un outil de comparaison (« comme ») : c'est une comparaison." },

        { q: "« Cet enfant est un ange » est...",
          choix: ["Une comparaison", "Une métaphore", "Une question rhétorique", "Une gradation"],
          bonne: 1,
          why: "Il n'y a pas d'outil de comparaison : c'est une métaphore." },

        { q: "Que peut exprimer une question rhétorique ?",
          choix: ["Le doute, la colère ou l'incompréhension de l'auteur", "Une demande d'information", "Une description", "Une date"],
          bonne: 0,
          why: "Elle n'attend pas de réponse : elle exprime le doute, la colère, une remarque ou l'incompréhension." },

        { q: "« Comment aurais-je pu savoir ? » est...",
          choix: ["Une vraie question qui attend une réponse", "Une question rhétorique", "Une phrase non verbale", "Une antithèse"],
          bonne: 1,
          why: "Le narrateur n'attend pas de réponse : il exprime son incompréhension." },

        { q: "Pourquoi un auteur utilise-t-il le pronom « on » ?",
          choix: ["Pour parler seulement de lui", "Pour universaliser une idée ou réfléchir sur les personnages et leur emprise", "Pour poser une question", "Pour accélérer le rythme"],
          bonne: 1,
          why: "Le « on » rend l'idée vraie pour tous, ou permet une réflexion sur les personnages." },

        { q: "À l'évaluation, que faut-il faire quand on repère un procédé ?",
          choix: ["Seulement le nommer", "Citer le passage, nommer le procédé et expliquer son effet", "Le recopier sans commentaire", "Donner son avis sur l'auteur"],
          bonne: 1,
          why: "Une bonne réponse cite, nomme, puis explique l'effet produit sur le lecteur." }
      ]
    }
  ]
};
