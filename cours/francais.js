/* ============================================================
   cours/francais.js — chapitres et fiches méthode ajoutés (français)
   Chargé après data.js : complète DATA.chapitres.
   ============================================================ */

DATA.chapitres.push(
  {
    id: 'fr-ch9',
    matiere: 'francais',
    ajout: true,
    zone: 'Étude de la langue',
    numero: 'Orthographe',
    titre: "Accords et homophones",
    periode: "Orthographe grammaticale — dictée et réécriture",
    theme: "Accord sujet-verbe, accords dans le groupe nominal, participe passé, terminaisons en [e] et homophones grammaticaux",

    essentiel: [
      "Le verbe s'accorde toujours avec son <b>sujet</b>. Pour le trouver, on l'encadre par « <b>C'est … qui</b> », même s'il est <b>inversé</b>, <b>éloigné</b> du verbe, ou si c'est le pronom relatif <b>qui</b> (le verbe s'accorde alors avec l'antécédent).",
      "Dans le <b>groupe nominal</b>, le déterminant et les adjectifs s'accordent en <b>genre</b> et en <b>nombre</b> avec le nom noyau.",
      "Le <b>participe passé</b> : avec <b>être</b>, il s'accorde avec le sujet ; avec <b>avoir</b>, jamais avec le sujet, mais avec le <b>COD placé avant</b> le verbe ; <b>employé seul</b>, il s'accorde comme un adjectif.",
      "Pour une terminaison en [e], on remplace par un verbe du 3<sup>e</sup> groupe : <b>vendre</b> → -er, <b>vendu</b> → -é, <b>vendez</b> → -ez, <b>vendait</b> → -ait.",
      "Les <b>homophones grammaticaux</b> se prononcent pareil mais n'ont pas la même classe : on les distingue par une <b>astuce de remplacement</b> (a → avait, est → était, sont → étaient, ont → avaient)."
    ],

    sections: [
      {
        titre: "L'accord du sujet et du verbe",
        points: [
          "<b>Règle</b> : le verbe conjugué s'accorde en <b>personne</b> et en <b>nombre</b> avec son sujet. Pour le trouver, on pose « <b>Qui est-ce qui</b> + verbe ? » ou on l'encadre par « <b>C'est … qui</b> ».",
          "<b>Sujet inversé</b> (placé après le verbe) : après un complément en tête de phrase, dans une question ou dans une incise. « Au loin <b>brillaient</b> les <u>lumières</u> du port. » · « Que <b>disent</b> les <u>élèves</u> ? » · « Nous arrivons », <b>répondirent</b> les <u>marins</u>.",
          "<b>Sujet éloigné</b> : des mots peuvent séparer le sujet du verbe. « Les <u>enfants</u> de ma voisine, qui habite au bout de la rue, <b>jouent</b> dehors. » Le sujet est « les enfants », pas « ma voisine ». De même : « La <u>boîte</u> de chocolats <b>est</b> vide. »",
          "<b>Pronom placé devant le verbe</b> : un pronom complément (le, la, les, leur) n'est jamais le sujet. « Ma <u>sœur</u> les <b>regarde</b>. » (et non « regardent »)",
          "<b>Plusieurs sujets</b> → verbe au pluriel : « Mon <u>frère</u> et ma <u>cousine</u> <b>partent</b>. » « Toi et moi » équivaut à « nous » : « Toi et moi <b>irons</b> au cinéma. »",
          "<b>Sujet « qui »</b> (pronom relatif) : le verbe s'accorde avec l'<b>antécédent</b> de « qui ». « Les <u>oiseaux</u> qui <b>chantent</b> » · « C'est <u>moi</u> qui <b>ai</b> gagné. » · « C'est <u>toi</u> qui <b>as</b> raison. »"
        ]
      },
      {
        titre: "Les accords dans le groupe nominal",
        points: [
          "Dans un GN, le <b>nom noyau</b> donne son genre et son nombre au <b>déterminant</b> et aux <b>adjectifs</b> : « de <b>vieilles</b> malles <b>poussiéreuses</b> ».",
          "Un adjectif qui qualifie un nom <b>masculin</b> et un nom <b>féminin</b> se met au <b>masculin pluriel</b> : « un pantalon et une veste <b>neufs</b> ».",
          "L'<b>attribut du sujet</b> (après être, sembler, paraître, devenir, rester) s'accorde avec le sujet : « Les <u>collines</u> semblaient <b>immenses</b>. »",
          "<b>Pluriel des noms</b> : en général, on ajoute -s. Les noms en -eau, -au, -eu prennent -x (des bateaux, des feux ; sauf des pneus, des bleus). Les noms en -al font souvent -aux (des chevaux ; sauf des festivals, des bals). Sept noms en -ou prennent -x : bijou, caillou, chou, genou, hibou, joujou, pou.",
          "Un <b>adjectif de couleur</b> qui vient d'un nom (marron, orange) reste invariable : des yeux <b>marron</b>. Mais rose, mauve, fauve et pourpre s'accordent : des robes <b>roses</b>."
        ]
      },
      {
        titre: "Le participe passé avec « être » et employé seul",
        points: [
          "Le participe passé sert à former les <b>temps composés</b> (passé composé, plus-que-parfait…) et la <b>voix passive</b>. Il se termine par -é, -i, -u, -s ou -t : chanté, fini, venu, pris, écrit.",
          "<b>Astuce pour la lettre muette finale</b> : on met le participe au féminin. pris → prise, donc « il est pris » ; écrit → écrite, donc « il a écrit » ; fini → finie, donc pas de consonne.",
          "<b>Avec l'auxiliaire être</b>, le participe s'accorde avec le <b>sujet</b> : « <u>Elles</u> sont part<b>ies</b>. » · « La <u>porte</u> avait été ferm<b>ée</b>. » (voix passive)",
          "<b>Verbes pronominaux</b> (se lever, s'enfuir) : le plus souvent, le participe s'accorde avec le sujet : « <u>Elle</u> s'est lev<b>ée</b>. » Attention : si un COD est placé après le verbe, pas d'accord : « Elle s'est lavé <u>les mains</u>. »",
          "<b>Employé seul</b> (sans auxiliaire), le participe s'accorde comme un adjectif avec le nom qu'il complète : « Les <u>volets</u> ferm<b>és</b>, la maison semblait endormie. » · « une <u>lettre</u> oubli<b>ée</b> »."
        ]
      },
      {
        titre: "Le participe passé avec « avoir »",
        points: [
          "Avec l'auxiliaire <b>avoir</b>, le participe ne s'accorde <b>jamais avec le sujet</b> : « Elles ont mang<b>é</b>. »",
          "Il s'accorde avec le <b>COD</b> seulement si celui-ci est <b>placé avant</b> le verbe. On cherche le COD (« a mangé quoi ? »), puis on regarde où il se trouve.",
          "<b>COD placé après</b> le verbe → pas d'accord : « Il a cueilli <u>des fleurs</u>. »",
          "<b>COD placé avant</b> → accord. Trois cas fréquents : le pronom relatif <b>que</b> (« les fleurs <u>qu'</u>il a cueill<b>ies</b> ») ; un <b>pronom personnel</b> le, la, l', les (« ces fleurs, il <u>les</u> a cueill<b>ies</b> ») ; une <b>question</b> (« <u>Quelles fleurs</u> as-tu cueill<b>ies</b> ? »).",
          "Avec « que », on remonte à son <b>antécédent</b> pour connaître le genre et le nombre : « la lettre <u>qu'</u>elle a écrit<b>e</b> » (que = la lettre, féminin singulier)."
        ]
      },
      {
        titre: "Les terminaisons en [e] : -é, -er, -ez, -ait",
        points: [
          "Quand on entend [e] à la fin d'un verbe, on le remplace par un verbe du 3<sup>e</sup> groupe comme <b>vendre</b> ou <b>prendre</b>, qui ne se prononce pas pareil à chaque forme.",
          "On peut dire <b>vendre</b> → infinitif en <b>-er</b> : « Il va <b>manger</b>. » (il va vendre) Après une préposition (à, de, pour, sans) ou un verbe comme vouloir, pouvoir, falloir, on a un infinitif.",
          "On peut dire <b>vendu</b> → participe passé en <b>-é</b>, qui suit les règles d'accord : « Il a <b>mangé</b>. » · « Elles sont <b>arrivées</b>. »",
          "On peut dire <b>vendez</b> → <b>-ez</b>, avec « vous » ou à l'impératif : « Vous <b>mangez</b>. » · « <b>Mangez</b> ! »",
          "On peut dire <b>vendait</b> → imparfait : -ais (je, tu), -ait (il, elle, on), -aient (ils, elles) : « Il <b>mangeait</b>. » · « Ils <b>mangeaient</b>. »",
          "<b>-ai ou -ais ?</b> On remplace « je » par « nous » : je mangeai → nous mangeâmes (passé simple, -ai) ; je mangeais → nous mangions (imparfait, -ais). Même astuce pour le futur (je mangerai → nous mangerons) et le conditionnel (je mangerais → nous mangerions)."
        ]
      },
      {
        titre: "Les homophones grammaticaux : verbe ou pas ?",
        points: [
          "<b>a / à</b> : « a » est le verbe avoir, on peut dire « <b>avait</b> » (il a faim → il avait faim). Sinon, c'est la préposition « à » (il va à Paris).",
          "<b>et / est</b> : « est » est le verbe être, on peut dire « <b>était</b> » (il est tard → il était tard). « et » est une conjonction de coordination, on peut dire « et puis ».",
          "<b>son / sont</b> : « sont » est le verbe être, on peut dire « <b>étaient</b> ». « son » est un déterminant possessif, on peut dire « mon » (son chien → mon chien).",
          "<b>on / ont</b> : « ont » est le verbe avoir, on peut dire « <b>avaient</b> ». « on » est un pronom, on peut dire « il ». Attention à la négation : « On <b>n'</b>a rien vu » (il n'a rien vu).",
          "<b>ou / où</b> : « ou » marque un choix, on peut dire « <b>ou bien</b> ». « où » indique un lieu ou un moment : « la ville où je suis né », « le jour où il est parti ».",
          "<b>ce / se</b> : « se » est un pronom réfléchi, devant un verbe pronominal ; on peut conjuguer avec « je » (il se lève → je <b>me</b> lève). « ce » est un déterminant devant un nom (ce livre-là) ou un pronom (ce que je vois, c'est)."
        ]
      },
      {
        titre: "Les autres homophones grammaticaux",
        points: [
          "<b>ces / ses / c'est / s'est</b> : <b>ces</b> = démonstratif, on peut ajouter « -là » (ces livres-là) ; <b>ses</b> = possessif, on peut dire « mes » ou « les siens » ; <b>c'est</b> = « cela est » ; <b>s'est</b> = verbe pronominal au passé composé, on peut dire « je me suis » (il s'est levé → je me suis levé).",
          "<b>leur / leurs</b> : devant un <b>verbe</b>, « leur » est un pronom (= à eux), toujours invariable : « je <b>leur</b> parle » (je lui parle). Devant un <b>nom</b>, c'est un déterminant possessif qui s'accorde : « <b>leur</b> maison », « <b>leurs</b> enfants ».",
          "<b>la / l'a / l'as / là</b> : « la » est un article (la porte) ou un pronom (je la vois) ; « l'a », « l'as » = pronom + avoir, on peut dire « l'avait » (il l'a vue → il l'avait vue) ; « là » indique un lieu, on peut dire « ici ».",
          "<b>quel(le)(s) / qu'elle(s)</b> : « qu'elle » = que + elle, on peut dire « qu'il » (je veux qu'elle vienne → qu'il vienne). « quel » est un déterminant qui s'accorde avec le nom : quelle chance ! quels livres ?",
          "<b>sans / s'en</b> : « sans » est une préposition, le contraire de « avec » (sans bruit). « s'en » = se + en, devant un verbe : on peut dire « je m'en » (il s'en va → je m'en vais)."
        ]
      },
      {
        titre: "Relire sa dictée : les bons réflexes",
        points: [
          "On ne relit pas tout en une fois : on fait <b>plusieurs passages</b>, avec une seule question en tête à chaque fois.",
          "<b>Passage 1</b> : pour chaque verbe conjugué, je trouve son <b>sujet</b> et je vérifie la terminaison.",
          "<b>Passage 2</b> : pour chaque nom, je vérifie le <b>déterminant</b> et les <b>adjectifs</b> (genre et nombre).",
          "<b>Passage 3</b> : pour chaque participe passé ou mot en [e], j'applique la règle (être ; avoir + COD placé avant ; vendre / vendu).",
          "<b>Passage 4</b> : je repère les <b>homophones</b> et je fais le test de remplacement. La méthode complète est dans la fiche « Réussir la dictée et la réécriture »."
        ]
      }
    ],

    mots: [
      ["Accord", "Changement de forme d'un mot (genre, nombre, personne) pour s'adapter au mot qui le commande."],
      ["Sujet", "Mot ou groupe qui commande l'accord du verbe. On le trouve avec « C'est … qui »."],
      ["Sujet inversé", "Sujet placé après le verbe, par exemple dans une question ou une incise : « dit-il »."],
      ["Antécédent", "Nom ou pronom repris par un pronom relatif. Le verbe dont « qui » est sujet s'accorde avec lui."],
      ["Groupe nominal", "Groupe de mots dont le noyau est un nom ; le déterminant et les adjectifs s'accordent avec ce nom."],
      ["Attribut du sujet", "Mot relié au sujet par un verbe d'état (être, sembler, devenir) ; il s'accorde avec le sujet."],
      ["Participe passé", "Forme du verbe (chanté, fini, pris) qui sert aux temps composés ou s'emploie comme un adjectif."],
      ["Auxiliaire", "Verbe être ou avoir qui aide à former les temps composés : il est venu, il a mangé."],
      ["COD", "Complément d'objet direct. Avec avoir, le participe passé s'accorde avec lui s'il est placé avant le verbe."],
      ["Participe passé employé seul", "Participe sans auxiliaire ; il s'accorde comme un adjectif : des volets fermés."],
      ["Verbe pronominal", "Verbe conjugué avec un pronom réfléchi (me, te, se, nous, vous) : se lever, s'enfuir."],
      ["Homophones", "Mots qui se prononcent de la même façon mais s'écrivent différemment : a et à."],
      ["Homophones grammaticaux", "Petits mots homophones de classes différentes (verbe, préposition, déterminant…), qu'on distingue en les remplaçant."],
      ["Infinitif", "Forme non conjuguée du verbe, en -er pour le 1er groupe ; on peut la remplacer par « vendre »."]
    ],

    quiz: [
      { q: "« Au fond du jardin … deux vieux chênes. » Quelle forme convient ?",
        choix: ["se dresse", "se dressait", "se dresses", "se dressent"],
        bonne: 3,
        why: "Le sujet est inversé : ce sont « deux vieux chênes » qui se dressent, donc le verbe est au pluriel." },

      { q: "« Les cahiers de mon frère … sur la table. »",
        choix: ["traîne", "traînent", "traînes", "traînait"],
        bonne: 1,
        why: "Le sujet est « les cahiers », pas « mon frère » : le verbe est au pluriel." },

      { q: "« C'est toi qui … gagné. »",
        choix: ["a", "ont", "as", "avez"],
        bonne: 2,
        why: "Le verbe s'accorde avec l'antécédent de « qui », « toi » : 2e personne du singulier." },

      { q: "« Ma sœur les … chaque soir. »",
        choix: ["appelle", "appellent", "appelles", "appeler"],
        bonne: 0,
        why: "« les » est un pronom COD, pas le sujet : le sujet est « ma sœur », 3e personne du singulier." },

      { q: "Quel groupe nominal est correctement accordé ?",
        choix: ["des yeux marrons", "des chevals blancs", "des genous écorchés", "une veste et un pantalon neufs"],
        bonne: 3,
        why: "Avec un nom féminin et un nom masculin, l'adjectif se met au masculin pluriel." },

      { q: "« Les filles sont … très tôt. »",
        choix: ["parti", "partis", "parties", "partie"],
        bonne: 2,
        why: "Avec être, le participe passé s'accorde avec le sujet « les filles » : féminin pluriel." },

      { q: "« Elles ont … toute la journée. »",
        choix: ["marché", "marchées", "marchés", "marcher"],
        bonne: 0,
        why: "Avec avoir, le participe ne s'accorde jamais avec le sujet, et il n'y a pas de COD placé avant." },

      { q: "« Les photos qu'il a … sont magnifiques. »",
        choix: ["pris", "prises", "prise", "prit"],
        bonne: 1,
        why: "Le COD « qu' » reprend « les photos » et il est placé avant le verbe : féminin pluriel." },

      { q: "« Cette lettre, je l'ai … hier. »",
        choix: ["écrit", "écrits", "écrire", "écrite"],
        bonne: 3,
        why: "« l' » reprend « cette lettre » : c'est un COD placé avant, donc accord au féminin singulier." },

      { q: "« Elle s'est lavé les mains. » Pourquoi « lavé » ne s'accorde-t-il pas ?",
        choix: ["Parce que l'auxiliaire est avoir", "Parce que le sujet est masculin", "Parce que le COD « les mains » est placé après le verbe", "C'est une erreur : il faut écrire « lavées »"],
        bonne: 2,
        why: "Pour ce verbe pronominal, le COD « les mains » est placé après le verbe : pas d'accord." },

      { q: "« Il faut … la table. »",
        choix: ["débarrasser", "débarrassé", "débarrassez", "débarrassait"],
        bonne: 0,
        why: "On peut dire « il faut vendre » : c'est un infinitif en -er." },

      { q: "« Les volets … , la maison semblait vide. »",
        choix: ["fermé", "fermés", "fermer", "fermées"],
        bonne: 1,
        why: "Participe passé employé seul : il s'accorde avec « les volets », masculin pluriel." },

      { q: "« Demain, je … ma grand-mère. » (verbe voir au futur)",
        choix: ["verrais", "verrait", "verré", "verrai"],
        bonne: 3,
        why: "Avec « nous », on dirait « nous verrons » : c'est le futur, en -ai. « Je verrais » est le conditionnel." },

      { q: "« Ce livre est … ma sœur. »",
        choix: ["a", "à", "as", "ah"],
        bonne: 1,
        why: "On ne peut pas dire « avait » : c'est la préposition « à »." },

      { q: "« Ils … venus avec … chien. »",
        choix: ["sont / son", "son / sont", "sont / sont", "son / son"],
        bonne: 0,
        why: "« sont » peut être remplacé par « étaient », et « son » par « mon »." },

      { q: "« Les voisins … tout entendu. »",
        choix: ["on", "sont", "ont", "son"],
        bonne: 2,
        why: "On peut dire « les voisins avaient tout entendu » : c'est le verbe avoir, « ont »." },

      { q: "« Il … levé tôt pour finir … devoirs. »",
        choix: ["c'est / ces", "ses / s'est", "c'est / ses", "s'est / ses"],
        bonne: 3,
        why: "« s'est » : verbe pronominal (je me suis levé) ; « ses » : possessif (mes devoirs)." },

      { q: "« Je … ai donné … cahiers. »",
        choix: ["leur / leur", "leurs / leurs", "leur / leurs", "leurs / leur"],
        bonne: 2,
        why: "Devant un verbe, « leur » est un pronom invariable ; devant un nom pluriel, le déterminant prend un -s." },

      { q: "« Je crois … est partie. »",
        choix: ["qu'elle", "quel", "quelle", "qu'elles"],
        bonne: 0,
        why: "On peut dire « je crois qu'il est parti » : c'est « que » + « elle », au singulier." },

      { q: "« Tu préfères le thé … le café ? Dis-moi … tu vas. »",
        choix: ["où / ou", "ou / où", "ou / ou", "où / où"],
        bonne: 1,
        why: "Le premier marque un choix (ou bien) ; le second indique un lieu." }
    ]
  },

  {
    id: 'fr-m1',
    matiere: 'francais',
    ajout: true,
    zone: 'Méthode',
    numero: 'Méthode',
    fiche: true,
    titre: "Comprendre et analyser un texte",
    periode: "Fiche méthode — questions sur le texte et l'image",
    theme: "Lire et situer le texte, comprendre la consigne, répondre et justifier, analyser un procédé, une image ou une phrase",

    essentiel: [
      "Je lis le texte <b>deux fois</b> et je le situe : qui parle, à qui, où, quand, quel <b>genre</b>, quel <b>point de vue</b>.",
      "Je repère le <b>verbe de la consigne</b> (relevez, justifiez, expliquez, analysez) et le nombre d'éléments demandés.",
      "Je réponds par une <b>phrase complète</b>, puis je justifie avec une <b>citation courte entre guillemets</b>, suivie de sa ligne.",
      "Pour un procédé : je <b>cite</b> → je <b>nomme</b> → j'explique son <b>effet</b> (voir « Les procédés d'écriture »).",
      "En grammaire, je donne <b>classe et fonction</b>, <b>temps et valeur</b>, avec une phrase modèle."
    ],

    sections: [
      {
        titre: "Avant les questions : lire et situer le texte",
        etapes: true,
        points: [
          "<b>Lire le paratexte</b> : titre, nom de l'auteur, date, phrase d'introduction en italique, notes de bas de page. Ils donnent souvent des indices précieux (époque, genre, personnages).",
          "<b>Lire le texte une première fois</b> en entier, pour comprendre l'histoire : que se passe-t-il ?",
          "<b>Le relire crayon en main</b> : souligner les mots importants, les sentiments, les procédés, les changements de temps ou de lieu.",
          "<b>Situer l'énonciation</b> : qui parle (un narrateur « je » ou « il »), à qui, où, quand. Dans une <b>autobiographie</b>, auteur, narrateur et personnage ne font qu'un, et le narrateur adulte peut commenter ses souvenirs au <b>présent d'énonciation</b>.",
          "<b>Identifier le genre</b> (roman, nouvelle, autobiographie, poésie, théâtre) et le <b>point de vue</b> : <b>interne</b> (on voit par les yeux d'un personnage), <b>externe</b> (comme une caméra, sans connaître les pensées), <b>omniscient</b> (le narrateur sait tout de tous)."
        ]
      },
      {
        titre: "Comprendre ce que demande la question",
        points: [
          "<b>Relevez / citez</b> : recopier exactement des mots du texte, entre guillemets, sans les commenter.",
          "<b>Justifiez</b> : donner une réponse, puis la prouver par une citation du texte.",
          "<b>Expliquez</b> : dire avec ses propres mots pourquoi ou comment ; une citation seule ne suffit pas.",
          "<b>Analysez / montrez que</b> : étudier comment le texte est écrit (les procédés) et ce que cela produit sur le lecteur.",
          "<b>Interprétez / selon vous / que révèle…</b> : proposer un sens ou un avis personnel, toujours appuyé sur le texte.",
          "Lire la question jusqu'au bout : repérer le <b>nombre d'éléments</b> demandés (« deux procédés », « trois indices ») et les <b>lignes</b> indiquées."
        ]
      },
      {
        titre: "Rédiger une réponse complète",
        etapes: true,
        points: [
          "<b>Je reprends les mots de la question</b> dans une phrase complète (jamais « Oui, parce que… » ni une citation seule).",
          "<b>J'affirme mon idée</b> clairement, en une phrase.",
          "<b>Je justifie</b> avec une citation courte, entre guillemets, suivie de la ligne : « … » (l. 12).",
          "<b>J'explique</b> le lien entre la citation et la question : « Ce mot montre que… », « Cette expression révèle… ».",
          "Pour une question longue, j'écris un petit paragraphe : idée → citation → explication, éventuellement deux fois."
        ],
        exemple: "<b>Question</b> : Quel sentiment le narrateur éprouve-t-il en entrant dans la chambre ? Justifiez.<br><b>Réponse</b> : En entrant dans la chambre, le narrateur éprouve de la <b>peur</b>. On le voit au champ lexical de la peur : « je tremblais » (l. 4), « mon cœur battait à tout rompre » (l. 6). Ces expressions montrent qu'il est terrifié et rendent la scène angoissante pour le lecteur."
      },
      {
        titre: "Analyser un procédé : citer, nommer, expliquer",
        etapes: true,
        points: [
          "<b>Citer</b> le passage précis, entre guillemets, avec la ligne.",
          "<b>Nommer</b> le procédé avec le mot exact : comparaison, métaphore, hyperbole, gradation, antithèse, champ lexical, question rhétorique, phrase non verbale, propositions juxtaposées, présent de narration, pronom « on » (voir « Les procédés d'écriture »). À connaître aussi : la <b>personnification</b> (une chose ou un animal agit comme un humain : « le vent gémit »), l'<b>énumération</b> (une liste de termes) et l'<b>anaphore</b> (un même mot répété en début de phrase ou de vers).",
          "<b>Expliquer l'effet</b> : ce que le procédé fait ressentir ou comprendre (une émotion, une atmosphère, un rythme, une insistance). Phrases utiles : « Ce procédé permet de… », « L'auteur cherche à… ».",
          "<b>Relier à la question</b> : l'effet doit répondre à ce qui est demandé (le sentiment du personnage, l'atmosphère, l'intention de l'auteur). Le chapitre « Analyse de texte : l'extrait de la peluche » montre comment repérer ces procédés dans un texte entier."
        ],
        exemple: "« La vieille maison dormait, ses volets clos comme des paupières. »<br>L'auteur utilise une <b>personnification</b> (la maison « dormait ») et une <b>comparaison</b> (« comme des paupières »). La maison semble vivante mais endormie : ces images créent une atmosphère calme et mystérieuse, comme si la maison gardait un secret."
      },
      {
        titre: "Les questions sur l'image",
        points: [
          "Le sujet peut associer au texte un <b>document iconographique</b> : tableau, photographie, gravure, affiche, dessin, image de film. Les questions demandent de le décrire, de l'interpréter et de le <b>comparer</b> au texte.",
          "<b>Présenter</b> le document : sa nature, son auteur, son titre et sa date (ils sont indiqués sous l'image).",
          "<b>Décrire</b> avec le vocabulaire de l'image : <b>premier plan</b>, <b>arrière-plan</b>, centre, couleurs (chaudes ou froides), lumière et ombre, cadrage (gros plan, plan d'ensemble), angle de vue (<b>plongée</b> : vu d'en haut, le sujet paraît petit ; <b>contre-plongée</b> : vu d'en bas, il paraît grand et puissant).",
          "<b>Interpréter</b> : quelle atmosphère, quelle émotion, quel message ? Chaque remarque s'appuie sur un détail précis de l'image.",
          "<b>Comparer avec le texte</b> : chercher les points communs (thème, personnage, atmosphère) et les différences (époque, point de vue, ce que l'image montre ou ne montre pas). Phrase utile : « Comme le texte, l'image… ; en revanche… »."
        ]
      },
      {
        titre: "Les questions de grammaire et de vocabulaire",
        points: [
          "<b>Classe grammaticale</b> (ce que le mot est : nom, verbe, adjectif, pronom…) et <b>fonction</b> (ce qu'il fait dans la phrase : sujet, COD, attribut, complément circonstanciel…). Si on demande les deux, on donne les deux (voir « Les classes grammaticales et les expansions du nom »).",
          "<b>Temps et valeur</b> : on nomme le temps et le mode (présent de l'indicatif), puis la valeur (présent de narration, d'énonciation, de vérité générale…). Dans un récit au passé, l'<b>imparfait</b> sert à décrire, à exprimer l'habitude ou l'arrière-plan ; le <b>passé simple</b> raconte les actions principales, au premier plan.",
          "<b>Phrases et propositions</b> : compter les verbes conjugués pour trouver les propositions, puis dire si elles sont juxtaposées (virgule), coordonnées (mais, ou, et, or, ni, car) ou subordonnées (relative, complétive, circonstancielle).",
          "<b>Vocabulaire</b> : expliquer un mot grâce au contexte, donner un synonyme ou un antonyme, décomposer un mot (préfixe, radical, suffixe).",
          "La <b>réécriture</b> fait aussi partie de cette étape de l'épreuve : sa méthode est dans la fiche « Réussir la dictée et la réécriture »."
        ],
        exemple: "Phrase : « Chaque été, ma mère ouvrait la malle du grenier. »<br><b>Question</b> : Donnez la classe grammaticale et la fonction de « la malle du grenier », puis le temps et la valeur de « ouvrait ».<br><b>Réponse</b> : « la malle du grenier » est un <b>groupe nominal</b>, <b>COD</b> du verbe « ouvrait ». « ouvrait » est conjugué à l'<b>imparfait de l'indicatif</b> ; il a une valeur d'<b>habitude</b>, soulignée par le complément « Chaque été »."
      }
    ],

    mots: [
      ["Paratexte", "Tout ce qui entoure le texte : titre, auteur, date, introduction, notes."],
      ["Situation d'énonciation", "Qui parle, à qui, où et quand."],
      ["Narrateur", "Celui qui raconte l'histoire. Ce n'est pas forcément l'auteur, sauf dans une autobiographie."],
      ["Point de vue interne", "Le récit est vu à travers les yeux et les pensées d'un personnage."],
      ["Point de vue externe", "Le narrateur décrit comme une caméra, sans connaître les pensées des personnages."],
      ["Point de vue omniscient", "Le narrateur sait tout : les pensées de tous les personnages, leur passé, leur avenir."],
      ["Genre", "Famille de textes : roman, nouvelle, autobiographie, poésie, théâtre."],
      ["Relever", "Recopier exactement des mots du texte, entre guillemets."],
      ["Justifier", "Prouver sa réponse par une citation du texte."],
      ["Citation", "Passage recopié mot pour mot, entre guillemets, avec la ligne."],
      ["Personnification", "Procédé qui donne des traits humains à une chose ou à un animal : le vent gémit."],
      ["Anaphore", "Répétition d'un même mot ou groupe de mots en début de phrase ou de vers."],
      ["Document iconographique", "Image proposée avec le texte : tableau, photographie, affiche, gravure, image de film."],
      ["Plongée, contre-plongée", "Vue d'en haut, qui rend le sujet petit ; vue d'en bas, qui le rend grand et puissant."]
    ],

    quiz: [
      { q: "Que demande la consigne « Relevez » ?",
        choix: ["Expliquer avec ses propres mots", "Recopier des mots ou expressions du texte, entre guillemets", "Donner son avis", "Résumer le texte"],
        bonne: 1,
        why: "Relever, c'est recopier exactement des mots du texte, sans les commenter." },

      { q: "Comment présenter une citation dans une réponse ?",
        choix: ["Courte, entre guillemets, avec le numéro de ligne", "Sans guillemets, en recopiant tout le paragraphe", "En la résumant avec ses mots", "En soulignant le passage sur le sujet"],
        bonne: 0,
        why: "Une citation courte et précise, entre guillemets, avec la ligne, prouve la réponse." },

      { q: "Dans quel ordre analyse-t-on un procédé ?",
        choix: ["Nommer, expliquer, citer", "Expliquer, citer, nommer", "Citer, nommer, expliquer l'effet", "Citer, résumer, conclure"],
        bonne: 2,
        why: "On cite le passage, on nomme le procédé, puis on explique l'effet produit." },

      { q: "Le récit montre seulement ce que voit et pense un personnage. Quel est le point de vue ?",
        choix: ["Externe", "Omniscient", "Il n'y a pas de point de vue", "Interne"],
        bonne: 3,
        why: "Le point de vue interne fait voir l'histoire à travers les yeux et les pensées d'un personnage." },

      { q: "Dans une question sur un tableau, que désigne le « premier plan » ?",
        choix: ["La partie la plus éloignée", "La partie la plus proche du spectateur", "Le titre du tableau", "La signature du peintre"],
        bonne: 1,
        why: "Le premier plan est la partie la plus proche ; l'arrière-plan est la plus éloignée." },

      { q: "Dans « Il traverse le jardin », quelle réponse est complète pour « le jardin » ?",
        choix: ["C'est un nom", "C'est un COD", "C'est un GN", "C'est un GN, COD du verbe « traverse »"],
        bonne: 3,
        why: "Quand on demande la classe et la fonction, il faut donner les deux et préciser le verbe complété." },

      { q: "Par quoi commence une bonne réponse de compréhension ?",
        choix: ["Une phrase complète qui reprend les mots de la question", "« Oui » ou « Non »", "Une citation seule", "« Parce que »"],
        bonne: 0,
        why: "On reprend les mots de la question dans une phrase complète, puis on justifie." },

      { q: "Dans un récit au passé, à quoi sert le plus souvent le passé simple ?",
        choix: ["À décrire le décor", "À exprimer une habitude", "À raconter les actions principales, au premier plan", "À exprimer une vérité générale"],
        bonne: 2,
        why: "Le passé simple raconte les actions principales ; l'imparfait décrit ou exprime l'habitude." }
    ]
  },

  {
    id: 'fr-m2',
    matiere: 'francais',
    ajout: true,
    zone: 'Méthode',
    numero: 'Méthode',
    fiche: true,
    titre: "La rédaction : sujet d'imagination ou de réflexion",
    periode: "Fiche méthode — la rédaction du brevet",
    theme: "Analyser le sujet, faire un plan, rédiger un récit ou une argumentation, se relire",

    essentiel: [
      "Je lis les <b>deux sujets</b> et je choisis vite celui pour lequel j'ai le plus d'idées et d'exemples.",
      "Je <b>souligne les contraintes</b> : qui parle, à quel temps, quel type de texte, pour qui, quelle longueur.",
      "Je fais un <b>plan au brouillon</b>, sans tout rédiger : je n'aurais pas le temps de recopier.",
      "Imagination : je reste <b>cohérent avec le texte support</b>. Réflexion : <b>un argument et un exemple</b> par paragraphe, reliés par des <b>connecteurs</b>.",
      "Je garde <b>10 minutes</b> pour relire : accords, homophones, ponctuation, paragraphes."
    ],

    sections: [
      {
        titre: "Ce qui vous attend au brevet",
        points: [
          "La rédaction dure <b>1 h 30</b> et c'est l'exercice qui rapporte le plus de points de l'épreuve de français. On <b>choisit un sujet</b> parmi deux : un <b>sujet d'imagination</b> ou un <b>sujet de réflexion</b>.",
          "Les deux sujets sont en général liés au <b>texte support</b> de la première partie de l'épreuve et à son thème (l'enfance, la mémoire, la famille, la guerre…).",
          "Au brevet, le <b>dictionnaire</b> de langue française est autorisé pendant la rédaction : il sert à vérifier l'orthographe ou le sens d'un mot. Pour le brevet blanc, on vérifie ce qui est permis.",
          "La consigne fixe souvent une <b>longueur minimale</b>, en pages ou en lignes (environ deux pages) : une copie trop courte perd des points.",
          "<b>Ce qui est évalué</b> : le respect du sujet et de ses contraintes ; l'organisation (plan, paragraphes, connecteurs) ; la richesse de l'expression (vocabulaire précis, phrases variées, procédés) ; la <b>maîtrise de la langue</b> (orthographe, grammaire, ponctuation), qui compte beaucoup.",
          "<b>Gestion du temps</b> : environ 10 minutes pour analyser le sujet et faire le plan, 1 h 10 pour rédiger, 10 minutes pour relire."
        ]
      },
      {
        titre: "Analyser le sujet et préparer le brouillon",
        etapes: true,
        points: [
          "<b>Lire les deux sujets</b> en entier, puis choisir en deux ou trois minutes : celui pour lequel on a des idées, du vocabulaire et des exemples.",
          "<b>Souligner les mots clés</b> et noter les contraintes : <b>qui parle</b> (je, il), <b>quel temps</b> (passé, présent), <b>quel type de texte</b> (récit, lettre, dialogue, journal intime, article, discours), <b>quel destinataire</b>, <b>quelle situation</b> (lieu, époque, personnages).",
          "<b>Reformuler le sujet</b> en une phrase simple : « On me demande de… ». Cela évite le hors-sujet.",
          "<b>Chercher les idées</b> au brouillon, en vrac : moments du récit, sentiments, détails ; ou arguments et exemples.",
          "<b>Faire le plan</b> : les grandes étapes du récit, ou les parties de l'argumentation. On ne rédige au brouillon que les premières lignes ou l'introduction.",
          "<b>Vérifier</b> que le plan respecte toutes les contraintes soulignées, puis rédiger au propre, en paragraphes."
        ]
      },
      {
        titre: "Le sujet d'imagination",
        points: [
          "<b>Formes fréquentes</b> : écrire la suite du texte, raconter la scène d'un autre point de vue, raconter un souvenir ou une expérience, écrire une lettre ou un dialogue. Le récit est souvent à la 1<sup>re</sup> personne.",
          "<b>Rester cohérent avec le texte support</b> : mêmes personnages (noms, caractère), même époque, même lieu, même point de vue, même ton. Ne rien inventer qui contredise le texte.",
          "<b>Construire le récit</b> : situation initiale → élément déclencheur → péripéties → dénouement → situation finale. Un paragraphe par étape, avec un alinéa.",
          "<b>Choisir les temps</b> : au passé, le <b>passé simple</b> pour les actions et l'<b>imparfait</b> pour le décor, les descriptions et les habitudes ; le présent si le texte support est au présent. On ne change pas de temps en cours de route. Dans un récit autobiographique, le narrateur adulte peut commenter au présent d'énonciation.",
          "<b>Faire vivre le texte</b> : exprimer les <b>émotions</b> (verbes de sentiment, champ lexical, pensées du personnage), décrire avec les cinq sens, utiliser des procédés (comparaison, personnification, phrases courtes pour le suspense).",
          "<b>Ponctuer le dialogue</b> : deux-points et guillemets pour l'ouvrir, tiret à chaque changement de personnage, verbes de parole variés (murmura, s'écria, répliqua) et incises (« dit-il »)."
        ],
        exemple: "<i>Sujet : « Comme Marcel dans La Gloire de mon père, racontez un souvenir d'enfance où vous avez été fier (ou fière) d'un proche. »</i><br>Je devais avoir huit ans. Ce dimanche-là, le soleil chauffait déjà le petit stade quand mon grand-père enfila son vieux maillot délavé. Autour de nous, les autres joueurs ricanaient : à soixante-dix ans, que pouvait-il bien faire ? Je baissai les yeux, le cœur serré, honteux pour lui. Je ne savais pas encore que cet après-midi allait changer pour toujours le regard que je portais sur lui. Aujourd'hui encore, quand j'y repense, je souris.<br><i>1<sup>re</sup> personne ; passé simple pour les actions, imparfait pour le décor ; des sentiments ; une question rhétorique ; le présent d'énonciation du narrateur adulte à la fin.</i>"
      },
      {
        titre: "Le sujet de réflexion : construire son argumentation",
        points: [
          "<b>Comprendre la question</b> : « Pensez-vous que… ? », « Selon vous… ? », « Est-il… ? ». On doit y <b>répondre</b> clairement, en donnant son avis (la <b>thèse</b>) et en le justifiant.",
          "<b>Choisir le plan</b> : plusieurs raisons qui vont dans le même sens (plan thématique), ou « oui… mais… » pour nuancer (plan dialectique). Deux ou trois parties suffisent, une par paragraphe.",
          "<b>L'introduction</b> : amener le sujet par une phrase générale, poser la question, annoncer le plan.",
          "<b>Les exemples</b> : tirés des lectures (Un Secret, La Gloire de mon père, Histoire de ma vie de George Sand), de films, de l'histoire ou de l'actualité ; l'expérience personnelle en dernier recours. Un exemple précis vaut mieux que trois exemples vagues.",
          "<b>Les connecteurs logiques</b> : addition (d'abord, de plus, ensuite, enfin) ; cause (car, en effet, parce que) ; conséquence (donc, ainsi, c'est pourquoi) ; opposition (mais, cependant, pourtant, en revanche) ; illustration (par exemple, comme le montre) ; conclusion (en somme, finalement).",
          "<b>La conclusion</b> : faire le bilan, donner une réponse nette à la question, puis ouvrir sur une idée proche."
        ],
        exemple: "<i>Sujet : « Selon vous, pourquoi raconter ses souvenirs d'enfance ? »</i><br>Beaucoup d'écrivains, de George Sand à Marcel Pagnol, ont raconté leur propre vie. Dans <i>La Gloire de mon père</i>, Pagnol fait revivre les étés de la Bastide-Neuve et l'admiration qu'il portait à son père. Mais pourquoi revenir sur ces années lointaines ? Raconter ses souvenirs d'enfance est-il un simple plaisir, ou cela a-t-il une utilité plus profonde ? Nous verrons d'abord que ce récit aide à mieux se connaître, puis qu'il permet de garder la mémoire de ceux que l'on a aimés, avant de nous demander s'il est toujours possible de tout dire.<br><i>Amorce, question posée, annonce du plan en trois parties.</i>"
      },
      {
        titre: "Rédiger un paragraphe argumenté",
        etapes: true,
        points: [
          "<b>Annoncer l'argument</b> avec un connecteur : « Tout d'abord, raconter son enfance permet de… ».",
          "<b>L'expliquer</b> : « En effet, … ».",
          "<b>L'illustrer par un exemple précis</b> : « Ainsi, dans … ».",
          "<b>Conclure le paragraphe</b> en revenant à la question : « Raconter ses souvenirs est donc… »."
        ],
        exemple: "<b>Tout d'abord</b>, raconter ses souvenirs d'enfance permet de mieux se connaître. <b>En effet</b>, en revenant sur son passé, on comprend d'où viennent ses peurs, ses rêves et ses choix. <b>Ainsi</b>, dans <i>Un Secret</i>, Philippe Grimbert raconte comment, enfant chétif, il s'inventait un frère aîné, avant d'apprendre que ce frère, Simon, avait réellement existé. Écrire ce récit lui permet de comprendre le secret qui pesait sur sa famille et sur lui-même. Raconter son enfance est <b>donc</b> une manière de se construire."
      },
      {
        titre: "Se relire avant de rendre sa copie",
        etapes: true,
        points: [
          "<b>Relire la consigne</b> : toutes les contraintes sont-elles respectées (personne, temps, type de texte, longueur) ?",
          "<b>Vérifier l'organisation</b> : des paragraphes bien visibles (alinéa), une introduction et une conclusion, des connecteurs.",
          "<b>Vérifier les temps et la ponctuation</b> : pas de passage du passé au présent sans raison, des phrases pas trop longues, un dialogue bien ponctué.",
          "<b>Corriger l'orthographe</b> en plusieurs passages : accords sujet-verbe, accords dans le GN, participes passés, homophones (voir « Accords et homophones »).",
          "<b>Améliorer le vocabulaire</b> : remplacer les verbes trop vagues (faire, dire, il y a) et les répétitions par des mots précis.",
          "<b>Soigner la présentation</b> : une écriture lisible et des ratures nettes, faites d'un simple trait."
        ]
      }
    ],

    mots: [
      ["Sujet d'imagination", "Sujet qui demande d'écrire un texte narratif : suite de texte, récit, lettre, dialogue."],
      ["Sujet de réflexion", "Sujet qui pose une question et demande d'y répondre en argumentant."],
      ["Consigne", "Énoncé du sujet ; elle fixe les contraintes à respecter."],
      ["Contrainte", "Obligation imposée par le sujet : personne, temps, type de texte, longueur…"],
      ["Texte support", "Texte étudié dans la première partie de l'épreuve, auquel le sujet de rédaction est lié."],
      ["Hors-sujet", "Texte qui ne répond pas à ce que demande la consigne ; il est très pénalisé."],
      ["Schéma narratif", "Étapes d'un récit : situation initiale, élément déclencheur, péripéties, dénouement, situation finale."],
      ["Thèse", "Opinion que l'on défend en réponse à la question posée."],
      ["Argument", "Idée qui justifie la thèse."],
      ["Exemple", "Fait précis (lecture, film, événement historique) qui illustre un argument."],
      ["Connecteur logique", "Mot qui relie les idées et montre leur lien : de plus, cependant, donc, en effet."],
      ["Plan dialectique", "Plan qui examine le pour et le contre avant de conclure : oui… mais…"],
      ["Ouverture", "Dernière phrase de la conclusion, qui élargit la réflexion à une idée proche."],
      ["Alinéa", "Retrait au début de la première ligne d'un paragraphe."]
    ],

    quiz: [
      { q: "Au brevet, combien de sujets de rédaction faut-il traiter ?",
        choix: ["Les deux", "Un seul, choisi entre un sujet d'imagination et un sujet de réflexion", "Un sujet imposé", "Trois sujets courts"],
        bonne: 1,
        why: "On choisit un seul sujet parmi les deux proposés." },

      { q: "Que faut-il faire en premier face au sujet choisi ?",
        choix: ["Écrire directement au propre", "Écrire la conclusion", "Chercher des mots compliqués", "Repérer et souligner les contraintes de la consigne"],
        bonne: 3,
        why: "Les contraintes (personne, temps, type de texte, longueur) guident tout le travail et évitent le hors-sujet." },

      { q: "Le sujet dit : « Racontez à la première personne… ». Que faut-il faire ?",
        choix: ["Écrire avec « je »", "Écrire avec « il »", "Écrire seulement un dialogue", "Écrire une lettre"],
        bonne: 0,
        why: "La première personne du singulier, c'est « je »." },

      { q: "Dans un récit au passé, quel temps utilise-t-on pour décrire le décor ?",
        choix: ["Le passé simple", "Le futur", "L'imparfait", "Le présent de vérité générale"],
        bonne: 2,
        why: "L'imparfait sert aux descriptions ; le passé simple, aux actions." },

      { q: "Qu'est-ce qu'un bon paragraphe argumenté ?",
        choix: ["Un argument, expliqué et illustré par un exemple précis", "Une liste d'exemples sans explication", "Un dialogue", "Une question sans réponse"],
        bonne: 0,
        why: "Chaque paragraphe développe un argument, l'explique et l'illustre par un exemple." },

      { q: "Quel connecteur introduit une conséquence ?",
        choix: ["Cependant", "Par exemple", "D'abord", "C'est pourquoi"],
        bonne: 3,
        why: "« C'est pourquoi » annonce une conséquence ; « cependant » marque une opposition." },

      { q: "Que trouve-t-on dans l'introduction d'un sujet de réflexion ?",
        choix: ["La réponse finale et l'ouverture", "Tous les exemples", "Une amorce, la question posée et l'annonce du plan", "Un résumé du texte support"],
        bonne: 2,
        why: "L'introduction amène le sujet, pose la question et annonce le plan." },

      { q: "Pourquoi garder du temps pour la relecture ?",
        choix: ["Pour recopier le sujet", "Pour corriger l'orthographe, la ponctuation et vérifier les consignes", "Pour ajouter un titre", "Ce n'est pas utile"],
        bonne: 1,
        why: "La maîtrise de la langue compte beaucoup dans la note : la relecture fait gagner des points." }
    ]
  },

  {
    id: 'fr-m3',
    matiere: 'francais',
    ajout: true,
    zone: 'Méthode',
    numero: 'Méthode',
    fiche: true,
    titre: "Réussir la dictée et la réécriture",
    periode: "Fiche méthode — l'orthographe à l'épreuve de français",
    theme: "Écouter, écrire, relire ; transformer un passage sans oublier un seul mot",

    essentiel: [
      "Dictée : j'écoute la première lecture <b>sans écrire</b> pour savoir qui parle, à quel temps, et si les personnages sont au masculin ou au féminin, au singulier ou au pluriel.",
      "Je relis en <b>plusieurs passages</b>, un seul type d'erreur à la fois : verbes, groupes nominaux, participes passés, homophones.",
      "Réécriture : je repère <b>ce qui change</b> (personne, nombre, genre, temps) et je <b>souligne tous les mots touchés</b> avant d'écrire.",
      "Je recopie le reste <b>sans aucune faute de copie</b>, puis je compare mot à mot avec le texte de départ."
    ],

    sections: [
      {
        titre: "La dictée au brevet",
        points: [
          "Elle dure environ <b>20 minutes</b> et compte pour <b>10 points</b> sur 100. Le texte est court (quelques lignes), le plus souvent extrait d'une œuvre littéraire.",
          "Le professeur lit d'abord le texte en entier, puis le dicte par groupes de mots, et le relit à la fin.",
          "Les <b>noms propres</b> et les mots rares sont en général écrits au tableau : il faut les recopier exactement.",
          "On distingue l'<b>orthographe lexicale</b> (l'écriture des mots eux-mêmes : « parfois », « longtemps ») et l'<b>orthographe grammaticale</b> (les accords et les terminaisons). Les erreurs grammaticales sont les plus nombreuses, et les plus faciles à éviter avec une bonne relecture."
        ]
      },
      {
        titre: "Pendant la dictée",
        etapes: true,
        points: [
          "<b>Écouter la première lecture sans écrire</b> : comprendre l'histoire, repérer qui parle (je, nous, il, elles), le temps du récit, le genre et le nombre des personnages.",
          "<b>Écrire au rythme du professeur</b>, lisiblement, en pensant au sens de chaque phrase. Laisser un peu de place pour corriger proprement.",
          "<b>Écouter les indices</b> : on entend [z] dans « ils ont » et [s] dans « ils sont » ; une liaison en [z] (« les enfants ») signale un pluriel ; les pauses et l'intonation indiquent la ponctuation.",
          "<b>Ne pas rester bloqué</b> sur un mot : l'écrire au mieux, faire un petit repère discret, et continuer pour ne pas perdre la suite.",
          "<b>Pendant la dernière lecture</b> : vérifier qu'aucun mot ne manque, placer la ponctuation et les majuscules."
        ]
      },
      {
        titre: "Relire sa dictée en plusieurs passages",
        etapes: true,
        points: [
          "<b>Les verbes</b> : pour chaque verbe conjugué, je cherche le sujet (« C'est … qui ») et je vérifie la terminaison, même si le sujet est loin ou inversé.",
          "<b>Les groupes nominaux</b> : pour chaque nom, je vérifie le déterminant, le pluriel du nom et les adjectifs.",
          "<b>Les participes passés et les mots en [e]</b> : avec être, accord avec le sujet ; avec avoir, accord avec le COD seulement s'il est placé avant ; sinon, test « vendre / vendu ».",
          "<b>Les homophones</b> : a/à, et/est, son/sont, on/ont, ou/où, ce/se, ces/ses… je fais le test de remplacement (avait, était…).",
          "<b>Le reste</b> : accents, majuscules, ponctuation, mots oubliés. Toutes les règles sont dans le chapitre « Accords et homophones »."
        ],
        exemple: "Phrase dictée : « Les feuilles que le vent avait arrachées tourbillonnaient dans la cour déserte. »<br><b>Verbes</b> : ce sont « les feuilles » qui tourbillonnaient → -aient, même si le sujet est éloigné du verbe.<br><b>GN</b> : « la cour déserte » → féminin singulier.<br><b>Participe</b> : « avait arrachées » → auxiliaire avoir, COD « que » (= les feuilles) placé avant → féminin pluriel.<br><b>Homophones</b> : « la » est un article, devant le nom « cour »."
      },
      {
        titre: "La réécriture : la méthode",
        etapes: true,
        points: [
          "<b>Lire la consigne</b> et repérer ce qui change : la <b>personne</b> (je → nous), le <b>nombre</b> (singulier → pluriel), le <b>genre</b> (masculin → féminin), le <b>temps</b> (présent → passé), ou le passage du <b>discours direct</b> au <b>discours indirect</b>.",
          "<b>Souligner dans le texte tous les mots touchés</b> : verbes, pronoms (sujets, compléments, réfléchis), déterminants possessifs, noms, adjectifs, participes passés.",
          "<b>Transformer</b> : conjuguer au bon temps et à la bonne personne, puis faire tous les accords.",
          "<b>Recopier tout le passage</b> en ne changeant que ce qui doit changer : les fautes de copie peuvent aussi être sanctionnées.",
          "<b>Relire mot à mot</b> en comparant avec le texte de départ, et vérifier qu'aucun mot souligné n'a été oublié."
        ],
        exemple: "Consigne : réécrire en remplaçant « je » par « nous » (deux filles).<br>« <u>Je</u> <u>me</u> <u>suis</u> <u>levée</u> tôt et <u>j'ai</u> rangé <u>mes</u> affaires. »<br>→ « <b>Nous nous sommes levées</b> tôt et <b>nous avons</b> rangé <b>nos</b> affaires. »<br>« rangé » ne change pas : avec avoir, le COD « nos affaires » est placé après le verbe."
      },
      {
        titre: "Les pièges de la réécriture",
        points: [
          "<b>Changement de personne</b> : penser aux déterminants possessifs (mon, ma, mes → notre, nos ; son, sa, ses → leur, leurs) et aux pronoms réfléchis (je me lève → nous nous levons).",
          "<b>Passage au féminin ou au pluriel</b> : accorder les adjectifs, les attributs et les participes passés employés avec être (« Il était fatigué » → « Elles étaient fatiguées »).",
          "<b>Passage au passé simple</b> : 1<sup>er</sup> groupe en -ai, -as, -a, -âmes, -âtes, -èrent (il marcha, ils marchèrent) ; les autres verbes en -is ou -us (il prit, ils prirent ; il voulut, ils voulurent), et -ins pour venir et tenir (il vint).",
          "<b>Passage à l'imparfait</b> : -ais, -ais, -ait, -ions, -iez, -aient pour tous les verbes (je finissais, ils prenaient).",
          "<b>Passage au passé composé</b> : choisir le bon auxiliaire (être avec certains verbes de mouvement ou de changement d'état comme aller, venir, partir, arriver, tomber, naître, mourir, et avec les verbes pronominaux), puis accorder le participe.",
          "<b>Concordance des temps</b> : si le verbe principal passe au passé, les verbes qui en dépendent changent aussi : présent → imparfait, futur → conditionnel, passé composé → plus-que-parfait. « Il dit qu'il viendra » → « Il a dit qu'il viendrait »."
        ],
        exemple: "Au passé : « Il ouvre la porte, regarde la pièce et comprend qu'il est seul. »<br>→ « Il <b>ouvrit</b> la porte, <b>regarda</b> la pièce et <b>comprit</b> qu'il <b>était</b> seul. » (les actions au passé simple, l'état à l'imparfait)<br>Au féminin pluriel : « Le garçon, épuisé, s'est assis sur le banc. »<br>→ « <b>Les fillettes</b>, <b>épuisées</b>, <b>se sont assises</b> sur le banc. »"
      },
      {
        titre: "S'entraîner avant l'épreuve",
        points: [
          "Faire régulièrement une <b>courte dictée</b> (quelques lignes lues par quelqu'un), puis la corriger soi-même avec le texte.",
          "<b>Classer ses erreurs</b> (accords, participes, homophones, mots mal orthographiés) dans un carnet : on repère vite ses points faibles.",
          "Revoir les <b>conjugaisons</b> les plus demandées (présent, imparfait, passé simple, futur, conditionnel, passé composé) pour être, avoir, aller, faire, dire, prendre, venir et les verbes du 1<sup>er</sup> groupe.",
          "S'entraîner à la réécriture sur n'importe quel texte : changer « je » en « nous », le présent en passé, un personnage masculin en féminin."
        ]
      }
    ],

    mots: [
      ["Dictée", "Exercice où l'on écrit un texte lu à voix haute ; elle évalue l'orthographe."],
      ["Orthographe lexicale", "Écriture des mots eux-mêmes, telle qu'on la trouve dans le dictionnaire."],
      ["Orthographe grammaticale", "Écriture qui dépend de la phrase : accords, terminaisons des verbes."],
      ["Réécriture", "Exercice qui consiste à transformer un passage (personne, nombre, genre, temps) en faisant toutes les modifications nécessaires."],
      ["Personne", "Je, tu, il (singulier) ; nous, vous, ils (pluriel). Elle commande la terminaison du verbe."],
      ["Nombre", "Singulier ou pluriel."],
      ["Genre", "Masculin ou féminin."],
      ["Déterminant possessif", "Mon, ton, son, notre, votre, leur… Il change quand la personne change."],
      ["Pronom réfléchi", "Pronom des verbes pronominaux : me, te, se, nous, vous."],
      ["Concordance des temps", "Règle qui fait changer le temps des verbes dépendants quand le verbe principal passe au passé."],
      ["Discours direct", "Paroles rapportées telles quelles, entre guillemets : « Je pars », dit-il."],
      ["Discours indirect", "Paroles rapportées dans une subordonnée, sans guillemets : il dit qu'il part."],
      ["Liaison", "Son ajouté entre deux mots (les enfants : [z]) ; elle aide à entendre un pluriel."],
      ["Faute de copie", "Erreur sur un mot que l'on devait seulement recopier ; elle peut être sanctionnée."]
    ],

    quiz: [
      { q: "Pendant la première lecture de la dictée, que faut-il faire ?",
        choix: ["Écrire le plus vite possible", "Corriger ses fautes", "Écouter sans écrire, pour comprendre le texte", "Recopier les mots du tableau"],
        bonne: 2,
        why: "La première lecture sert à comprendre : qui parle, à quel temps, masculin ou féminin, singulier ou pluriel." },

      { q: "Pourquoi relire sa dictée en plusieurs passages ?",
        choix: ["Pour se concentrer sur un seul type d'erreur à la fois", "Pour gagner du temps", "Parce que c'est obligatoire", "Pour réécrire le texte au propre"],
        bonne: 0,
        why: "Chercher une seule chose à la fois (verbes, GN, participes, homophones) permet de ne rien laisser passer." },

      { q: "On entend une liaison en [z] dans « les enfants ». Qu'indique-t-elle ?",
        choix: ["Un féminin", "Un verbe", "Un mot oublié", "Un pluriel"],
        bonne: 3,
        why: "La liaison en [z] après « les », « des », « ils » signale un pluriel." },

      { q: "Réécriture : « je » devient « nous ». Que devient « mes livres » ?",
        choix: ["mes livres", "nos livres", "notre livres", "leurs livres"],
        bonne: 1,
        why: "Le déterminant possessif change avec la personne : mes devient nos." },

      { q: "Réécriture au féminin : « Il est arrivé, fatigué. » devient :",
        choix: ["Elle est arrivé, fatigué.", "Elle est arrivée, fatiguée.", "Elle est arrivée, fatigué.", "Elle est arrivé, fatiguée."],
        bonne: 1,
        why: "Le participe avec être et l'adjectif s'accordent tous les deux avec « elle »." },

      { q: "Réécriture au passé : « Il dit qu'il viendra. » devient :",
        choix: ["Il a dit qu'il viendra.", "Il dira qu'il viendrait.", "Il disait qu'il venait.", "Il a dit qu'il viendrait."],
        bonne: 3,
        why: "Quand le verbe principal passe au passé, le futur devient conditionnel : c'est la concordance des temps." },

      { q: "Dans une réécriture, que faut-il faire du reste du passage ?",
        choix: ["Le recopier à l'identique, sans faute", "L'améliorer avec ses mots", "Le résumer", "Le laisser de côté"],
        bonne: 0,
        why: "Seuls les mots touchés par la transformation changent ; les fautes de copie peuvent être sanctionnées." },

      { q: "Réécrire « Je me suis levé tôt » avec « nous » (des garçons) :",
        choix: ["Nous me sommes levés tôt.", "Nous nous sommes levé tôt.", "Nous nous sommes levés tôt.", "Nous nous sont levés tôt."],
        bonne: 2,
        why: "Le pronom réfléchi, l'auxiliaire et le participe passé changent tous : nous nous sommes levés." }
    ]
  }
);
