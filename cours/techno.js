/* ============================================================
   cours/techno.js — Technologie : chapitres et fiche méthode
   ajoutés pour le brevet blanc (même format que data.js).
   ============================================================ */

DATA.chapitres.push(

  /* ---------------------------------------------------------------- */
  {
    id: 'te-ch1',
    matiere: 'techno',
    ajout: true,
    zone: 'Informatique et réseaux',
    numero: 'Chapitre 1',
    titre: "Le réseau informatique et Internet",
    periode: "Réseau local, adresses, protocoles et sécurité",
    theme: "L'informatique et la programmation — comprendre le fonctionnement d'un réseau",

    essentiel: [
      "Un <b>réseau</b> relie des appareils qui échangent des données, par câble ou en Wi-Fi. Le <b>réseau local</b> est celui de la maison ou du collège ; <b>Internet</b> est le réseau mondial qui relie les réseaux entre eux.",
      "Le <b>commutateur</b> (switch) relie les appareils d'un même réseau local ; le <b>routeur</b> relie des réseaux différents et choisit le chemin des données. La <b>box</b> contient un routeur, un commutateur et un point d'accès Wi-Fi.",
      "L'<b>adresse IP</b> (ex. 192.168.1.12) identifie un appareil sur un réseau ; l'<b>adresse MAC</b> est l'identifiant unique de sa carte réseau. Le <b>DNS</b> traduit un nom de domaine en adresse IP.",
      "Un <b>protocole</b> est un ensemble de règles communes. <b>TCP/IP</b> découpe les données en <b>paquets</b> et les achemine ; <b>HTTP</b> sert au Web, <b>HTTPS</b> est sa version chiffrée. Le <b>client</b> demande, le <b>serveur</b> répond.",
      "Internet n'est pas le Web : le Web n'est qu'un de ses services. Se protéger : <b>mots de passe</b> longs et différents, <b>pare-feu</b>, mises à jour, prudence avec ses <b>données personnelles</b>."
    ],

    sections: [
      {
        titre: "Qu'est-ce qu'un réseau informatique ?",
        points: [
          "Un <b>réseau informatique</b> est un ensemble d'appareils reliés entre eux (ordinateurs, téléphones, imprimantes, consoles…) qui <b>échangent des données</b>.",
          "Un <b>réseau local</b> relie les appareils d'un même lieu : la maison, la salle de technologie, le collège.",
          "<b>Internet</b> est le réseau mondial qui <b>relie les réseaux entre eux</b> : c'est « le réseau des réseaux ».",
          "Les appareils sont reliés <b>par câble</b> (réseau filaire) ou <b>sans fil</b> (Wi-Fi). Pour se connecter, chaque appareil possède une <b>carte réseau</b>.",
          "Un <b>serveur</b> est un ordinateur qui <b>rend un service</b> : il héberge un site web, stocke des fichiers, gère des courriels. Un <b>client</b> est l'appareil qui <b>demande</b> ce service. C'est le modèle <b>client-serveur</b>.",
          "Exemple : au collège, un serveur de fichiers garde les dossiers partagés de la classe ; l'ordinateur de l'élève qui ouvre un dossier est le client."
        ]
      },
      {
        titre: "Les matériels du réseau",
        points: [
          "Le <b>commutateur</b> (en anglais <i>switch</i>) relie les appareils d'un <b>même réseau local</b>. Il lit l'adresse MAC du destinataire et envoie les données <b>seulement</b> à l'appareil concerné.",
          "Le <b>routeur</b> relie des <b>réseaux différents</b> entre eux, par exemple le réseau de la maison et Internet. Il lit l'adresse IP du destinataire et <b>choisit le chemin</b> des données.",
          "Le <b>point d'accès Wi-Fi</b> permet aux appareils de se connecter au réseau sans fil.",
          "La <b>box internet</b> regroupe tout cela : un modem pour la ligne (fibre ou ADSL), un routeur, un commutateur avec ses prises Ethernet et un point d'accès Wi-Fi. Elle donne aussi automatiquement une adresse IP à chaque appareil de la maison.",
          "Sur Internet, les données traversent de nombreux routeurs, reliés par des câbles en fibre optique (même sous les océans), des antennes et des satellites."
        ]
      },
      {
        titre: "Identifier les appareils : adresse IP, masque et adresse MAC",
        points: [
          "L'<b>adresse IP</b> identifie un appareil <b>sur un réseau</b>, comme une adresse postale. En IPv4, elle s'écrit avec <b>4 nombres de 0 à 255</b> séparés par des points : <b>192.168.1.12</b>.",
          "Deux appareils d'un même réseau ne peuvent pas avoir la même adresse IP. Les adresses IPv4 ne suffisent plus pour tous les appareils du monde : la nouvelle version, <b>IPv6</b>, en offre beaucoup plus.",
          "Le <b>masque de sous-réseau</b> indique quelle partie de l'adresse désigne le <b>réseau</b> et quelle partie désigne l'<b>appareil</b>. Avec le masque <b>255.255.255.0</b>, les 3 premiers nombres désignent le réseau et le dernier désigne l'appareil.",
          "Exemple : 192.168.1.12 et 192.168.1.30 sont sur le <b>même réseau</b> (192.168.1) ; 192.168.2.5 est sur un autre réseau, il faut passer par un routeur. Avec ce masque, le dernier nombre va de 1 à 254 : 0 et 255 sont réservés.",
          "L'<b>adresse MAC</b> est l'identifiant <b>unique de la carte réseau</b>, fixé par le fabricant. Elle s'écrit avec 6 paires de chiffres et de lettres de A à F : <b>3C:52:82:4F:A1:07</b>.",
          "À retenir : l'adresse IP peut <b>changer</b> selon le réseau où l'on se connecte ; l'adresse MAC reste <b>la même</b>. Le commutateur utilise les adresses MAC, le routeur les adresses IP."
        ]
      },
      {
        titre: "Communiquer : protocoles et paquets",
        points: [
          "Un <b>protocole</b> est un ensemble de <b>règles communes</b> qui permet à des appareils différents de se comprendre, comme une langue partagée.",
          "Les données ne voyagent pas d'un seul bloc : elles sont découpées en <b>paquets</b>. Chaque paquet contient un morceau des données, l'<b>adresse IP de l'expéditeur</b>, celle du <b>destinataire</b> et un <b>numéro d'ordre</b>.",
          "Le protocole <b>IP</b> se charge de l'adressage : chaque paquet est <b>acheminé</b> de routeur en routeur. Les paquets d'un même message peuvent prendre des <b>chemins différents</b>.",
          "Le protocole <b>TCP</b> découpe les données, <b>vérifie</b> que tous les paquets sont arrivés, fait renvoyer ceux qui manquent et les <b>remet dans l'ordre</b>. Les deux fonctionnent ensemble : on parle de <b>TCP/IP</b>.",
          "<b>HTTP</b> est le protocole du Web : il permet de demander et de recevoir des pages. <b>HTTPS</b> est sa version <b>sécurisée</b> : les échanges sont <b>chiffrés</b> (un cadenas s'affiche dans la barre d'adresse)."
        ]
      },
      {
        titre: "Ce qui se passe quand on ouvre un site web",
        points: [
          "On tape une adresse dans le <b>navigateur</b>, par exemple <i>www.exemple.fr</i>. Mais les machines, elles, ne connaissent que les adresses IP.",
          "<b>1.</b> Le <b>DNS</b> (système de noms de domaine) traduit le nom de domaine en <b>adresse IP</b> du serveur : c'est l'« annuaire » d'Internet.",
          "<b>2.</b> L'ordinateur, le <b>client</b>, envoie une <b>requête</b> HTTP ou HTTPS au <b>serveur</b> web : « envoie-moi cette page ».",
          "<b>3.</b> Le serveur <b>répond</b> en envoyant la page, découpée en <b>paquets</b> qui passent par de nombreux routeurs, puis par la box.",
          "<b>4.</b> Le navigateur <b>rassemble les paquets</b> dans l'ordre et <b>affiche</b> la page."
        ]
      },
      {
        titre: "Câble ou Wi-Fi ? L'organisation du réseau",
        points: [
          "<b>Filaire</b> : câble Ethernet (prise RJ45) ou fibre optique. C'est plus <b>rapide</b>, plus <b>stable</b> et plus <b>sûr</b>, mais l'appareil reste attaché à sa prise.",
          "<b>Wi-Fi</b> : les données passent par des <b>ondes radio</b>. On peut se déplacer et il n'y a pas de câble à tirer ; mais la portée est limitée (les murs gênent), le débit est partagé entre les appareils et les ondes peuvent être captées : il faut une <b>clé de sécurité</b> (WPA2 ou WPA3).",
          "Le <b>débit</b> est la quantité de données transmise par seconde, en <b>bits par seconde</b> (souvent en Mbit/s). Attention : <b>1 octet = 8 bits</b>.",
          "Exemple : un fichier de 100 Mo, soit 800 Mbit, se télécharge en théorie en 800 ÷ 100 = <b>8 s</b> avec un débit de 100 Mbit/s.",
          "<b>Topologie en étoile</b> : tous les appareils sont reliés à un <b>point central</b>, le commutateur. Si un câble est coupé, un seul poste perd le réseau ; mais si le commutateur tombe en panne, <b>tout le réseau</b> est coupé.",
          "Pour représenter un réseau, on fait un <b>schéma</b> : chaque appareil est un symbole, chaque liaison un trait, et on indique les adresses IP."
        ]
      },
      {
        titre: "Internet et le Web : ne pas confondre",
        points: [
          "<b>Internet</b> est l'<b>infrastructure</b> : l'ensemble des réseaux, câbles, routeurs et serveurs reliés dans le monde. Il est né aux États-Unis à la fin des années 1960, avec le réseau ARPANET.",
          "Le <b>Web</b> est un <b>service</b> qui utilise Internet : des pages reliées entre elles par des <b>liens hypertextes</b>, consultées avec un <b>navigateur</b>. Il a été inventé en <b>1989</b> par Tim Berners-Lee, au CERN.",
          "Internet offre bien d'autres services que le Web : le courrier électronique, la visioconférence, les jeux en ligne, le stockage en ligne (le « cloud »).",
          "Une <b>URL</b> est l'adresse complète d'une page : <i>https://www.exemple.fr/contact</i> (le protocole, puis le nom de domaine, puis le chemin).",
          "Ne pas confondre le <b>navigateur</b> (le logiciel qui affiche les pages) et le <b>moteur de recherche</b> (le site qui aide à trouver des pages).",
          "Le numérique a un <b>impact environnemental</b> : les serveurs des centres de données et les réseaux consomment beaucoup d'électricité, et fabriquer les appareils demande des métaux rares."
        ]
      },
      {
        titre: "Sécurité et données personnelles",
        points: [
          "Un bon <b>mot de passe</b> est <b>long</b> (au moins 12 caractères), mélange majuscules, minuscules, chiffres et caractères spéciaux, et il est <b>différent pour chaque compte</b>. On ne le partage jamais.",
          "La <b>double authentification</b> ajoute une deuxième vérification, par exemple un code reçu par SMS ou dans une application.",
          "Le <b>pare-feu</b> (<i>firewall</i>) est un logiciel ou un appareil qui <b>filtre</b> les communications entre le réseau et Internet : il bloque les connexions non autorisées.",
          "L'<b>antivirus</b> détecte les logiciels malveillants ; les <b>mises à jour</b> corrigent les failles de sécurité. L'<b>hameçonnage</b> (<i>phishing</i>) est un faux message qui imite une banque ou un site connu pour voler des identifiants.",
          "Les <b>données personnelles</b> sont toutes les informations qui permettent d'identifier une personne : nom, photo, adresse, numéro de téléphone, localisation, adresse IP… Chaque action en ligne laisse des <b>traces numériques</b>.",
          "En Europe, le <b>RGPD</b> (2018) protège ces données ; en France, la <b>CNIL</b> veille à son respect. On peut demander à un site de supprimer ses données."
        ]
      }
    ],

    mots: [
      ["Réseau local", "Appareils reliés dans un même lieu (maison, collège) qui échangent des données."],
      ["Internet", "Réseau mondial qui relie les réseaux entre eux : le réseau des réseaux."],
      ["Web", "Service d'Internet : des pages reliées par des liens hypertextes, consultées avec un navigateur."],
      ["Client", "Appareil qui demande un service à un serveur."],
      ["Serveur", "Ordinateur qui rend un service à des clients : site web, fichiers, courriels."],
      ["Commutateur (switch)", "Appareil qui relie les appareils d'un même réseau local et envoie les données au bon destinataire."],
      ["Routeur", "Appareil qui relie des réseaux différents et choisit le chemin des données."],
      ["Adresse IP", "Numéro qui identifie un appareil sur un réseau, par exemple 192.168.1.12 en IPv4."],
      ["Adresse MAC", "Identifiant unique de la carte réseau, fixé par le fabricant."],
      ["Masque de sous-réseau", "Indique quelle partie de l'adresse IP désigne le réseau. Avec 255.255.255.0, ce sont les 3 premiers nombres."],
      ["DNS", "Service qui traduit un nom de domaine (exemple.fr) en adresse IP : l'annuaire d'Internet."],
      ["Protocole", "Ensemble de règles communes qui permettent à des appareils de communiquer : TCP/IP, HTTP, HTTPS."],
      ["Paquet", "Petit morceau de données qui voyage seul sur le réseau, avec l'adresse de l'expéditeur et celle du destinataire."],
      ["Pare-feu", "Logiciel ou appareil qui filtre les communications et bloque les connexions non autorisées."]
    ],

    quiz: [
      { q: "Qu'est-ce qu'un réseau local ?",
        choix: ["Le réseau qui relie tous les pays du monde", "Des appareils reliés dans un même lieu, comme la maison ou le collège", "Un site web hébergé en France", "Le câble qui relie la box à la prise murale"],
        bonne: 1,
        why: "Un réseau local relie les appareils d'un même lieu ; c'est Internet qui relie les réseaux entre eux." },

      { q: "Quel appareil relie entre eux les ordinateurs d'une même salle ?",
        choix: ["Le commutateur (switch)", "Le serveur DNS", "Le pare-feu", "Le navigateur"],
        bonne: 0,
        why: "Le commutateur relie les appareils d'un même réseau local." },

      { q: "Quel est le rôle principal d'un routeur ?",
        choix: ["Stocker les sites web", "Afficher les pages web", "Donner une adresse MAC aux cartes réseau", "Relier des réseaux différents et choisir le chemin des données"],
        bonne: 3,
        why: "Le routeur fait passer les données d'un réseau à l'autre en lisant les adresses IP." },

      { q: "Laquelle de ces adresses IPv4 est correcte ?",
        choix: ["192.168.1.300", "192.168.1.25", "192.168.1", "3C:52:82:4F:A1:07"],
        bonne: 1,
        why: "Une adresse IPv4 a 4 nombres de 0 à 255 : 300 est trop grand, et 3C:52:82:4F:A1:07 est une adresse MAC." },

      { q: "Avec le masque 255.255.255.0, quel appareil est sur le même réseau que 192.168.1.12 ?",
        choix: ["192.168.2.12", "10.0.0.12", "192.168.1.40", "192.169.1.12"],
        bonne: 2,
        why: "Les 3 premiers nombres désignent le réseau : ils doivent être identiques, ici 192.168.1." },

      { q: "Qu'est-ce que l'adresse MAC ?",
        choix: ["L'identifiant unique de la carte réseau, fixé par le fabricant", "L'adresse d'un site web", "Le mot de passe du Wi-Fi", "L'adresse IP de la box"],
        bonne: 0,
        why: "L'adresse MAC est propre à la carte réseau ; l'adresse IP, elle, dépend du réseau où l'on se connecte." },

      { q: "À quoi sert le DNS ?",
        choix: ["À chiffrer les échanges", "À relier les ordinateurs d'une salle", "À protéger contre les virus", "À traduire un nom de domaine en adresse IP"],
        bonne: 3,
        why: "Le DNS est l'annuaire d'Internet : il trouve l'adresse IP qui correspond à un nom comme exemple.fr." },

      { q: "Qu'est-ce qu'un protocole ?",
        choix: ["Un câble réseau", "Un ensemble de règles communes pour communiquer", "Un type d'ordinateur", "Un logiciel antivirus"],
        bonne: 1,
        why: "Comme une langue commune, le protocole permet à des appareils différents de se comprendre." },

      { q: "Pourquoi les données sont-elles découpées en paquets ?",
        choix: ["Pour prendre moins de place sur le disque dur", "Pour les rendre secrètes", "Pour circuler plus facilement, chaque paquet pouvant prendre son propre chemin", "Pour changer l'adresse IP du destinataire"],
        bonne: 2,
        why: "Les paquets voyagent séparément de routeur en routeur, puis TCP les remet dans l'ordre à l'arrivée." },

      { q: "Dans TCP/IP, quel est le rôle de TCP ?",
        choix: ["Vérifier que tous les paquets sont arrivés et les remettre dans l'ordre", "Traduire les noms de domaine", "Fournir le courant électrique au réseau", "Afficher la page web"],
        bonne: 0,
        why: "IP achemine les paquets ; TCP contrôle qu'il n'en manque aucun et reconstitue les données." },

      { q: "Que signifient le cadenas et le « s » de HTTPS ?",
        choix: ["Le site est forcément honnête", "Le site est payant", "Les échanges entre le navigateur et le serveur sont chiffrés", "La connexion se fait par câble"],
        bonne: 2,
        why: "HTTPS chiffre les échanges, mais il ne garantit pas que le site soit digne de confiance." },

      { q: "Dans le modèle client-serveur, le client est :",
        choix: ["l'ordinateur qui rend un service", "le câble qui relie au réseau", "le fournisseur d'accès à Internet", "l'appareil qui demande un service"],
        bonne: 3,
        why: "Le client envoie une requête ; le serveur y répond." },

      { q: "Quelle est la différence entre Internet et le Web ?",
        choix: ["Ce sont deux mots pour la même chose", "Internet est le réseau mondial, le Web est un service qui l'utilise", "Le Web est plus ancien qu'Internet", "Internet ne sert qu'aux courriels"],
        bonne: 1,
        why: "Internet est l'infrastructure ; le Web, ce sont les pages reliées par des liens, un service parmi d'autres." },

      { q: "Dans un réseau en étoile, que se passe-t-il si le commutateur central tombe en panne ?",
        choix: ["Rien, les ordinateurs communiquent directement", "Un seul ordinateur est coupé", "Tout le réseau local est coupé", "Le Wi-Fi prend le relais automatiquement"],
        bonne: 2,
        why: "Tous les appareils passent par le point central : sans lui, plus rien ne circule." },

      { q: "Quel est un avantage d'une connexion par câble par rapport au Wi-Fi ?",
        choix: ["Elle est plus rapide et plus stable", "On peut se déplacer partout", "Elle n'a pas besoin de carte réseau", "Elle n'a pas besoin d'adresse IP"],
        bonne: 0,
        why: "Le câble offre un meilleur débit et moins de perturbations ; le Wi-Fi apporte la mobilité." },

      { q: "Que fait un pare-feu ?",
        choix: ["Il refroidit le serveur", "Il augmente le débit", "Il invente les mots de passe", "Il filtre les communications et bloque les connexions non autorisées"],
        bonne: 3,
        why: "Le pare-feu contrôle ce qui entre dans le réseau et ce qui en sort, selon des règles." },

      { q: "Lequel de ces mots de passe est le plus sûr ?",
        choix: ["123456", "Velo!Lune7-Cartable#Pluie", "Ton prénom suivi de ta date de naissance", "motdepasse"],
        bonne: 1,
        why: "Il est long et mélange lettres, chiffres et symboles ; les autres se devinent en quelques secondes." },

      { q: "Laquelle de ces informations est une donnée personnelle ?",
        choix: ["La température à Paris aujourd'hui", "Le prix d'un ticket de bus", "Ta photo de profil", "La capitale de l'Italie"],
        bonne: 2,
        why: "Une photo permet d'identifier une personne : c'est une donnée personnelle, protégée par le RGPD." },

      { q: "Avec un débit de 100 Mbit/s, combien de temps faut-il, en théorie, pour télécharger 800 Mbit ?",
        choix: ["8 s", "80 s", "0,8 s", "800 s"],
        bonne: 0,
        why: "Durée = quantité de données ÷ débit = 800 ÷ 100 = 8 s." },

      { q: "Que contient une box internet ?",
        choix: ["Seulement un câble", "Un serveur web et un antivirus", "Un écran et un clavier", "Un modem, un routeur, un commutateur et un point d'accès Wi-Fi"],
        bonne: 3,
        why: "La box regroupe plusieurs appareils du réseau dans un seul boîtier." }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'te-ch2',
    matiere: 'techno',
    ajout: true,
    zone: 'Design, innovation et conception',
    numero: 'Chapitre 2',
    titre: "Concevoir et fabriquer : de la CAO à l'impression 3D",
    periode: "Du besoin au prototype imprimé",
    theme: "Design, innovation et créativité — de l'idée à l'objet",

    essentiel: [
      "Tout part d'un <b>besoin</b>. Le <b>cahier des charges</b> liste les <b>fonctions</b> de l'objet, ses <b>contraintes</b>, et des <b>critères</b> avec leurs <b>niveaux</b> pour pouvoir vérifier.",
      "Les étapes : cahier des charges → <b>croquis</b> → <b>modélisation 3D</b> (CAO) → export en fichier <b>STL</b> → <b>logiciel trancheur</b> → impression → finition.",
      "Le trancheur découpe l'objet en couches. Réglages : <b>hauteur de couche</b> (qualité contre temps), <b>remplissage</b> (solidité contre matière et temps), <b>supports</b> (parties en surplomb), <b>orientation</b> de la pièce.",
      "<b>Fabrication additive</b> : on ajoute la matière couche par couche (impression 3D). <b>Soustractive</b> : on enlève de la matière (perçage, fraisage, découpe laser). <b>PLA</b> : plastique végétal, facile à imprimer ; <b>ABS</b> : issu du pétrole, plus résistant, plus délicat.",
      "On fabrique un <b>prototype</b>, on le <b>teste</b> critère par critère, on corrige puis on valide. On pense au <b>cycle de vie</b> : matières premières, fabrication, transport, utilisation, fin de vie."
    ],

    sections: [
      {
        titre: "Du besoin au cahier des charges",
        points: [
          "Tout objet répond à un <b>besoin</b> : un manque ou un désir d'un utilisateur. On le précise avec trois questions : à qui l'objet rend-il service ? Sur quoi agit-il ? Dans quel but ? C'est le diagramme « bête à cornes ».",
          "Le <b>cahier des charges</b> décrit ce que l'objet doit faire, sans dire encore comment. Il liste les <b>fonctions</b> (ce que l'objet doit faire) et les <b>contraintes</b> (ce qu'il doit respecter : dimensions, coût, matériau, sécurité, esthétique, environnement, délai).",
          "Chaque fonction se vérifie grâce à un <b>critère</b> (ce que l'on mesure) et un <b>niveau</b> (la valeur attendue).",
          "Exemple : un porte-crayons. Fonction : contenir des crayons ; critère : nombre de crayons ; niveau : au moins 10. Contrainte : ne pas dépasser 12 cm de hauteur.",
          "Le <b>design</b> cherche un objet à la fois <b>utile</b>, <b>agréable à utiliser</b> (ergonomie) et <b>beau</b> (esthétique). Une <b>innovation</b> est une nouveauté adoptée par les utilisateurs : l'amélioration d'un objet existant ou un objet vraiment nouveau."
        ]
      },
      {
        titre: "Du croquis à la modélisation 3D",
        points: [
          "On cherche d'abord <b>plusieurs idées</b> (en groupe, par remue-méninges), puis on les compare au cahier des charges pour choisir la meilleure.",
          "Le <b>croquis</b> est un dessin <b>à main levée</b>, rapide, pour exprimer une idée. On y note les dimensions principales (les <b>cotes</b>, en mm).",
          "La <b>CAO</b> (conception assistée par ordinateur) permet de créer un <b>modèle 3D</b> précis avec un logiciel de modélisation. Le plus souvent, on dessine une <b>esquisse</b> en 2D, puis on l'<b>extrude</b> (on lui donne une épaisseur) ; ensuite on creuse, on perce, on arrondit.",
          "Le modèle 3D permet de <b>vérifier avant de fabriquer</b> : dimensions, assemblage des pièces, aspect, et parfois de <b>simuler</b> un mouvement ou la résistance. Corriger un fichier coûte bien moins cher que refaire une pièce.",
          "Pour l'imprimer, on <b>exporte</b> le modèle au format <b>STL</b>, qui décrit la surface de l'objet par une multitude de petits triangles."
        ]
      },
      {
        titre: "Préparer l'impression : le logiciel trancheur",
        points: [
          "Le <b>logiciel trancheur</b> ouvre le fichier STL et <b>découpe l'objet en couches</b> horizontales très fines.",
          "Il calcule le <b>trajet de la buse</b> pour chaque couche et produit un fichier d'instructions, le <b>G-code</b>, que l'imprimante sait lire (envoyé par carte SD, clé USB ou réseau).",
          "Il indique aussi la <b>durée</b> d'impression et la <b>quantité de matière</b> : c'est utile pour comparer plusieurs réglages.",
          "L'imprimante 3D la plus courante au collège dépose un <b>fil de plastique</b> fondu : le fil est poussé dans une <b>buse chauffée</b> (vers 200 °C pour le PLA), qui se déplace et dépose la matière couche par couche sur le <b>plateau</b>.",
          "Après l'impression vient la <b>finition</b> : retirer les supports, ébavurer, poncer, éventuellement assembler ou peindre."
        ]
      },
      {
        titre: "Les réglages d'impression",
        points: [
          "<b>Hauteur de couche</b> (de 0,1 à 0,3 mm environ) : des couches fines donnent une surface plus lisse et plus précise, mais l'impression est <b>plus longue</b>.",
          "<b>Taux de remplissage</b> (en %) : l'intérieur de la pièce n'est pas plein, il est rempli d'un quadrillage. Plus le taux est élevé, plus la pièce est <b>solide</b>, mais plus elle demande de <b>matière</b> et de <b>temps</b>. Environ 15 à 20 % suffit souvent pour un objet décoratif.",
          "<b>Supports</b> : on ne peut pas déposer de la matière dans le vide. Les parties en <b>surplomb</b> (trop inclinées, au-delà de 45° environ) ont besoin de supports, retirés après l'impression. Ils consomment de la matière et laissent des traces.",
          "<b>Orientation</b> : on pose en général la pièce sur sa <b>plus grande face plane</b>. Elle est stable, adhère mieux au plateau et demande moins de supports. Attention : une pièce casse plus facilement entre deux couches, il faut donc l'orienter selon les efforts qu'elle subira.",
          "Autres réglages : la <b>température</b> de la buse et du plateau, selon le matériau ; une <b>bordure</b> autour de la pièce pour qu'elle colle mieux au plateau.",
          "Chaque réglage est un <b>compromis</b> entre qualité, solidité, durée et quantité de matière : on le justifie avec le cahier des charges."
        ]
      },
      {
        titre: "Fabrication additive ou soustractive ?",
        points: [
          "<b>Fabrication additive</b> : on <b>ajoute</b> de la matière couche par couche (impression 3D). Peu de chutes, des formes complexes ou creuses possibles, des pièces uniques sur mesure ; mais c'est lent et réservé aux petites quantités.",
          "<b>Fabrication soustractive</b> : on <b>enlève</b> de la matière dans un bloc brut : perçage, sciage, fraisage, tournage, découpe laser. Les pièces sont précises et solides, mais il y a des <b>copeaux</b> et des <b>chutes</b>.",
          "Il existe aussi la <b>mise en forme</b>, sans ajouter ni enlever de matière : moulage, thermoformage, pliage. Le moule coûte cher, mais c'est idéal pour produire en <b>grande série</b>.",
          "Imprimante 3D, fraiseuse et découpeuse laser sont des <b>machines à commande numérique</b> : elles suivent un fichier préparé sur ordinateur.",
          "Choisir le procédé : un prototype ou quelques pièces → impression 3D ; une forme plate à découper dans une plaque → découpe laser ; des milliers de pièces identiques → moulage."
        ]
      },
      {
        titre: "Les matériaux : PLA et ABS",
        points: [
          "Les matériaux sont classés en <b>familles</b> : métaux, matières plastiques, bois, céramiques et verres, matériaux composites. On les choisit selon leurs <b>propriétés</b> : solidité, masse, résistance à la chaleur, prix, recyclabilité.",
          "Le <b>PLA</b> est un plastique <b>biosourcé</b>, fabriqué à partir de végétaux (amidon de maïs, canne à sucre). Il s'imprime facilement vers <b>200 °C</b>, sans odeur forte : c'est le plus utilisé au collège.",
          "Limites du PLA : il est assez cassant et se <b>ramollit dès 60 °C</b> environ. Il n'est compostable que dans des installations industrielles, pas dans la nature.",
          "L'<b>ABS</b> est un plastique <b>issu du pétrole</b>, utilisé par exemple pour des briques de jeux de construction. Plus <b>résistant aux chocs et à la chaleur</b>, il s'imprime plus chaud (230 à 250 °C environ), demande un plateau chauffant, se déforme en refroidissant et dégage des <b>fumées</b> : il faut aérer.",
          "PLA et ABS sont des <b>thermoplastiques</b> : ils ramollissent à la chaleur et durcissent en refroidissant. C'est ce qui permet de les imprimer, et aussi de les recycler."
        ]
      },
      {
        titre: "Prototype, tests et validation",
        points: [
          "Un <b>prototype</b> est le <b>premier exemplaire</b> d'un objet, fabriqué pour être <b>testé</b> avant la production. Une <b>maquette</b>, elle, représente l'objet (souvent à échelle réduite) sans forcément fonctionner.",
          "On <b>teste</b> le prototype critère par critère : on mesure, on essaie, on note les résultats dans un tableau.",
          "On compare chaque résultat au <b>niveau</b> attendu dans le cahier des charges : le critère est respecté ou non.",
          "Si un critère n'est pas respecté, on <b>modifie</b> le modèle 3D ou les réglages, puis on refait un essai : la démarche est <b>itérative</b>, elle recommence jusqu'à ce que tout soit validé.",
          "Une fois validé, l'objet peut être <b>présenté</b> (fiche, diaporama, démonstration), puis éventuellement produit en série."
        ]
      },
      {
        titre: "Cycle de vie et impact environnemental",
        points: [
          "Le <b>cycle de vie</b> d'un objet compte cinq étapes : <b>extraction des matières premières</b>, <b>fabrication</b>, <b>transport</b> (distribution), <b>utilisation</b>, <b>fin de vie</b>.",
          "À chaque étape, l'objet consomme de l'<b>énergie</b> et des <b>ressources</b>, et produit des <b>déchets</b> et des gaz à effet de serre. L'<b>analyse du cycle de vie</b> mesure ces impacts.",
          "En fin de vie, l'objet peut être <b>réutilisé</b>, <b>réparé</b>, <b>recyclé</b> (sa matière sert à nouveau), <b>valorisé</b> (brûlé pour produire de l'énergie) ou, en dernier recours, mis en décharge.",
          "L'<b>écoconception</b> réduit l'impact dès la conception : moins de matière, des matériaux recyclables, un objet démontable et réparable, une durée de vie plus longue.",
          "L'impression 3D permet d'imprimer une <b>pièce de rechange</b> au lieu de jeter un objet, et produit peu de chutes. Mais les essais ratés, les supports et l'électricité consommée comptent aussi : on n'imprime que ce qui est utile."
        ]
      }
    ],

    mots: [
      ["Besoin", "Manque ou désir d'un utilisateur, auquel l'objet doit répondre."],
      ["Cahier des charges", "Document qui liste les fonctions de l'objet, ses contraintes, et les critères et niveaux à respecter."],
      ["Contrainte", "Limite que l'objet doit respecter : dimensions, coût, matériau, sécurité, environnement."],
      ["Critère et niveau", "Le critère est ce que l'on mesure pour vérifier une fonction ; le niveau est la valeur attendue."],
      ["Croquis", "Dessin à main levée, rapide, pour exprimer une idée."],
      ["CAO", "Conception assistée par ordinateur : création d'un modèle 3D précis avec un logiciel."],
      ["Fichier STL", "Format d'export du modèle 3D, qui décrit sa surface par de petits triangles."],
      ["Logiciel trancheur", "Logiciel qui découpe le modèle en couches et prépare les instructions (G-code) pour l'imprimante."],
      ["Taux de remplissage", "Part de matière à l'intérieur de la pièce, en % : plus il est élevé, plus la pièce est solide, lourde et longue à imprimer."],
      ["Fabrication additive", "Fabrication par ajout de matière, couche par couche, comme l'impression 3D."],
      ["Fabrication soustractive", "Fabrication par enlèvement de matière dans un bloc : perçage, fraisage, découpe."],
      ["PLA", "Plastique fabriqué à partir de végétaux, facile à imprimer vers 200 °C, le plus utilisé au collège."],
      ["Prototype", "Premier exemplaire d'un objet, fabriqué pour le tester avant de le produire."],
      ["Cycle de vie", "Les étapes de la vie d'un objet : matières premières, fabrication, transport, utilisation, fin de vie."]
    ],

    quiz: [
      { q: "Par quoi commence la conception d'un objet ?",
        choix: ["Par l'impression 3D", "Par l'identification du besoin", "Par le choix de la couleur", "Par l'export du fichier STL"],
        bonne: 1,
        why: "On conçoit un objet pour répondre à un besoin : c'est lui qui guide tout le reste." },

      { q: "Que contient le cahier des charges ?",
        choix: ["Les fonctions de l'objet, ses contraintes et des critères mesurables", "Le mode d'emploi de l'imprimante", "La liste des élèves du groupe", "Uniquement le prix de vente"],
        bonne: 0,
        why: "Il dit ce que l'objet doit faire et respecter, avec des valeurs qui permettront de le vérifier." },

      { q: "Pour la fonction « contenir des crayons », le critère est le nombre de crayons. Quel est un niveau possible ?",
        choix: ["Le plastique", "La couleur bleue", "Au moins 10 crayons", "L'imprimante 3D"],
        bonne: 2,
        why: "Le niveau est la valeur attendue du critère : c'est ce qui permettra de tester l'objet." },

      { q: "Que signifie CAO ?",
        choix: ["Calcul automatique des objets", "Contrôle après l'opération", "Commande d'atelier ordinaire", "Conception assistée par ordinateur"],
        bonne: 3,
        why: "La CAO permet de créer un modèle 3D précis avec un logiciel." },

      { q: "Que décrit un fichier STL ?",
        choix: ["La surface de l'objet, découpée en petits triangles", "La couleur et le prix de l'objet", "Les déplacements de la buse couche par couche", "Le cahier des charges"],
        bonne: 0,
        why: "Le STL décrit la forme ; ce sont les instructions du trancheur, le G-code, qui décrivent les déplacements de la buse." },

      { q: "Quel logiciel transforme le modèle 3D en instructions pour l'imprimante ?",
        choix: ["Le navigateur", "Le tableur", "Le logiciel trancheur", "L'antivirus"],
        bonne: 2,
        why: "Le trancheur découpe l'objet en couches et calcule le trajet de la buse." },

      { q: "Que se passe-t-il si on passe d'une hauteur de couche de 0,3 mm à 0,1 mm ?",
        choix: ["La pièce est plus lisse, mais l'impression est plus longue", "L'impression est plus rapide", "La pièce devient plus grande", "Il n'y a plus besoin de supports"],
        bonne: 0,
        why: "Des couches plus fines donnent un meilleur rendu, mais il en faut trois fois plus." },

      { q: "Un taux de remplissage de 100 % donne une pièce :",
        choix: ["creuse et légère", "pleine et solide, mais longue à imprimer et gourmande en matière", "transparente", "qui ne colle pas au plateau"],
        bonne: 1,
        why: "Plus on remplit, plus c'est solide, mais plus on consomme de matière et de temps." },

      { q: "Quand faut-il ajouter des supports ?",
        choix: ["Toujours, pour toutes les pièces", "Jamais avec du PLA", "Quand la pièce est petite", "Quand une partie de la pièce est en surplomb, dans le vide"],
        bonne: 3,
        why: "La matière ne peut pas être déposée dans le vide : les supports la soutiennent pendant l'impression." },

      { q: "En général, comment pose-t-on une pièce sur le plateau ?",
        choix: ["Sur sa plus petite face, pour gagner de la place", "Sur sa plus grande face plane, pour la stabilité et limiter les supports", "Toujours en biais, à 45°", "Peu importe, l'orientation ne change rien"],
        bonne: 1,
        why: "Une grande face plane adhère bien au plateau et évite souvent les supports." },

      { q: "L'impression 3D est une fabrication :",
        choix: ["soustractive, car on enlève de la matière", "par moulage", "additive, car on ajoute la matière couche par couche", "par pliage"],
        bonne: 2,
        why: "On construit l'objet en ajoutant de la matière, couche après couche." },

      { q: "Lequel de ces procédés est une fabrication soustractive ?",
        choix: ["L'impression 3D", "Le fraisage d'un bloc de bois", "Le collage de deux pièces", "Le moulage d'une coque"],
        bonne: 1,
        why: "Le fraisage enlève de la matière dans un bloc brut et produit des copeaux." },

      { q: "D'où vient le PLA ?",
        choix: ["Du pétrole", "Du sable", "Du métal recyclé", "De végétaux comme l'amidon de maïs"],
        bonne: 3,
        why: "Le PLA est un plastique biosourcé ; c'est l'ABS qui est issu du pétrole." },

      { q: "Pourquoi l'ABS est-il moins utilisé au collège que le PLA ?",
        choix: ["Il s'imprime plus chaud, se déforme en refroidissant et dégage des fumées", "Il est trop fragile", "Il n'existe qu'en blanc", "Il ne se vend pas en bobine"],
        bonne: 0,
        why: "L'ABS est plus résistant, mais plus délicat à imprimer et il faut aérer la salle." },

      { q: "À quoi sert un prototype ?",
        choix: ["À être vendu en grande série", "À décorer la classe", "À tester une solution avant de la produire", "À remplacer le cahier des charges"],
        bonne: 2,
        why: "Le prototype permet de vérifier les critères du cahier des charges avant la production." },

      { q: "Quelle liste donne les étapes du cycle de vie d'un objet ?",
        choix: ["Croquis, CAO, STL, impression", "Besoin, fonctions, critères, niveaux", "Acquérir, traiter, communiquer", "Matières premières, fabrication, transport, utilisation, fin de vie"],
        bonne: 3,
        why: "Le cycle de vie suit l'objet de l'extraction de ses matières premières jusqu'à sa fin de vie." },

      { q: "Après les tests, le prototype ne respecte pas un critère. Que fait-on ?",
        choix: ["On modifie la conception ou les réglages, puis on teste à nouveau", "On le produit en série quand même", "On retire le critère du cahier des charges", "On abandonne le projet"],
        bonne: 0,
        why: "La démarche est itérative : on corrige et on recommence jusqu'à la validation." },

      { q: "Quel est un avantage de l'impression 3D ?",
        choix: ["Elle est très rapide pour des milliers de pièces", "Elle donne des pièces plus solides que le métal", "Elle permet des formes complexes et des pièces uniques sur mesure", "Elle ne consomme pas d'énergie"],
        bonne: 2,
        why: "Elle est idéale pour un prototype ou une pièce unique, pas pour la grande série." },

      { q: "Le croquis, c'est :",
        choix: ["un modèle 3D en couleur", "un dessin à main levée pour exprimer rapidement une idée", "le fichier envoyé à l'imprimante", "une photo de l'objet fini"],
        bonne: 1,
        why: "Le croquis vient avant la CAO : il sert à chercher et à partager des idées." },

      { q: "Quel choix réduit l'impact environnemental d'une pièce imprimée ?",
        choix: ["Imprimer plusieurs essais pour comparer", "Mettre 100 % de remplissage pour un objet décoratif", "Ajouter beaucoup de supports par sécurité", "Limiter la matière et concevoir une pièce réparable"],
        bonne: 3,
        why: "C'est le principe de l'écoconception : moins de matière et une durée de vie plus longue." }
    ]
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'te-m1',
    matiere: 'techno',
    ajout: true,
    fiche: true,
    zone: 'Méthode',
    numero: 'Méthode',
    titre: "Analyser un objet technique et répondre en technologie",
    periode: "Besoin, chaînes, algorigramme, réponse rédigée",
    theme: "Épreuve de sciences du brevet — partie technologie",

    essentiel: [
      "Lire d'abord la <b>mise en situation</b> et repérer tous les documents : en technologie, la réponse se trouve souvent dans un schéma, un tableau ou un diagramme.",
      "Besoin → <b>fonction d'usage</b> → <b>fonctions techniques</b> → <b>solutions techniques</b> : on passe de « à quoi ça sert ? » à « avec quoi ? ».",
      "Chaîne d'information : <b>acquérir → traiter → communiquer</b>. Chaîne d'énergie : <b>alimenter → distribuer → convertir → transmettre</b>. Capteur = acquérir ; actionneur = convertir.",
      "Algorigramme : ovale = début ou fin, rectangle = action, losange = condition avec ses sorties <b>oui</b> et <b>non</b>. On le vérifie en le suivant avec des valeurs.",
      "Réponse argumentée : <b>je réponds</b>, <b>je justifie</b> avec une valeur du document ou un calcul (formule, unité), <b>je conclus</b>. 1 h pour deux sciences : environ 30 min pour la technologie."
    ],

    sections: [
      {
        titre: "Comprendre le sujet",
        etapes: true,
        points: [
          "<b>Gérer le temps</b> : l'épreuve de sciences du brevet dure <b>1 h pour deux disciplines</b> parmi la physique-chimie, les SVT et la technologie, soit environ <b>30 minutes</b> chacune. La technologie peut tomber : il faut être prêt.",
          "<b>Lire la mise en situation</b> : le texte du début présente l'objet étudié et son contexte. Souligner le besoin et les mots clés.",
          "<b>Repérer les documents</b> : photo, schéma, diagramme, tableau de données, algorigramme ou programme. Pour chacun : le titre, la légende, les unités.",
          "<b>Lire la consigne</b> : <i>identifier</i> ou <i>nommer</i> = donner le mot juste ; <i>décrire</i> = dire ce que fait l'objet ; <i>expliquer</i> = dire comment ou pourquoi ; <i>justifier</i> = prouver avec un document ou un calcul ; <i>compléter</i> = remplir le schéma ou l'algorigramme fourni.",
          "<b>Répondre</b> question par question, avec le vocabulaire de la technologie, puis <b>relire</b> : unités, phrases complètes."
        ]
      },
      {
        titre: "Analyser le besoin et les fonctions",
        points: [
          "Le <b>besoin</b> se précise avec trois questions (la « bête à cornes ») : à qui l'objet rend-il service ? Sur quoi agit-il ? Dans quel but ? Exemple : un thermostat connecté rend service aux habitants, agit sur la température du logement, pour avoir chaud tout en économisant l'énergie.",
          "La <b>fonction d'usage</b> dit à quoi sert l'objet, en une phrase simple : « maintenir le logement à la température choisie ».",
          "Les <b>fonctions techniques</b> disent ce que les éléments de l'objet doivent faire pour y arriver : mesurer la température, la comparer à la consigne, commander la chaudière, afficher la température…",
          "Chaque fonction technique est réalisée par une <b>solution technique</b>, c'est-à-dire un composant précis : mesurer la température → une sonde de température ; afficher → un écran ; commander à distance → une liaison Wi-Fi.",
          "Penser aussi aux <b>contraintes</b> du cahier des charges : coût, dimensions, autonomie, sécurité, impact sur l'environnement."
        ]
      },
      {
        titre: "Les chaînes d'information et d'énergie",
        points: [
          "Un objet automatisé s'organise en deux chaînes : la <b>chaîne d'information</b> décide, la <b>chaîne d'énergie</b> agit.",
          "<b>Chaîne d'information</b> : <b>acquérir</b> (des capteurs relèvent des informations) → <b>traiter</b> (une carte programmable et son microcontrôleur exécutent le programme) → <b>communiquer</b> (envoyer des ordres à la chaîne d'énergie, afficher un message, transmettre des données).",
          "<b>Chaîne d'énergie</b> : <b>alimenter</b> (pile, batterie, secteur, panneau solaire) → <b>distribuer</b> (relais, transistor, variateur : il laisse passer l'énergie quand il en reçoit l'ordre) → <b>convertir</b> (moteur, lampe, résistance chauffante) → <b>transmettre</b> (engrenages, poulies et courroie, pignon et crémaillère) → action sur l'objet.",
          "Un <b>capteur</b> transforme une grandeur physique (lumière, température, distance, présence) en signal électrique : il réalise la fonction <b>acquérir</b>. Exemples : photorésistance, sonde de température, capteur à ultrasons, détecteur de présence infrarouge, bouton-poussoir.",
          "Un <b>actionneur</b> transforme l'énergie reçue en action : il réalise la fonction <b>convertir</b>. Exemples : moteur (énergie mécanique), DEL ou lampe (énergie lumineuse), résistance chauffante (énergie thermique), buzzer (énergie sonore).",
          "Le lien entre les deux chaînes : les <b>ordres</b> partent de la chaîne d'information (communiquer) et arrivent à la fonction <b>distribuer</b> de la chaîne d'énergie."
        ],
        exemple: "<b>Objet</b> : un lampadaire solaire qui s'allume seul la nuit et éclaire plus fort quand quelqu'un passe.<br><b>Fonction d'usage</b> : éclairer la rue la nuit sans être relié au réseau électrique.<br><b>Chaîne d'information</b> — <b>Acquérir</b> : un capteur de luminosité mesure la lumière ambiante ; un détecteur de présence infrarouge repère les passants. <b>Traiter</b> : la carte électronique (microcontrôleur) compare la luminosité à un seuil et exécute le programme. <b>Communiquer</b> : elle envoie l'ordre d'allumer, plus ou moins fort, à la chaîne d'énergie.<br><b>Chaîne d'énergie</b> — <b>Alimenter</b> : le panneau solaire charge la batterie le jour ; la batterie fournit l'énergie la nuit. <b>Distribuer</b> : un transistor laisse passer plus ou moins de courant selon l'ordre reçu. <b>Convertir</b> : les DEL convertissent l'énergie électrique en énergie lumineuse (avec un peu de chaleur perdue). <b>Transmettre</b> : rien à transmettre ici, car il n'y a pas de mouvement ; un moteur de portail, lui, passerait par des engrenages."
      },
      {
        titre: "Lire et écrire un algorigramme",
        points: [
          "Un <b>algorigramme</b> représente un algorithme avec des symboles reliés par des flèches, que l'on suit de haut en bas.",
          "Les symboles : un <b>ovale</b> (ou rectangle arrondi) pour le <b>début</b> et la <b>fin</b> ; un <b>rectangle</b> pour une <b>action</b> (allumer la DEL, attendre 2 s) ; un <b>losange</b> pour une <b>condition</b>, avec deux sorties <b>oui</b> et <b>non</b>. Certains sujets utilisent un parallélogramme pour lire un capteur ou afficher une valeur.",
          "Une <b>boucle</b> fait répéter des instructions : une flèche remonte vers le haut. Un système automatique tourne souvent en boucle « répéter indéfiniment ».",
          "Une <b>variable</b> est une case mémoire qui porte un nom et contient une valeur qui peut changer : la luminosité mesurée, une température, un compteur.",
          "Pour <b>lire</b> un algorigramme, on le suit flèche par flèche avec des valeurs d'exemple. Pour le <b>compléter</b>, on vérifie que chaque losange a ses deux sorties et que chaque cas mène à une action.",
          "Il se traduit en <b>programme par blocs</b> (comme Scratch) : le losange devient « si … alors … sinon », la boucle devient « répéter indéfiniment »."
        ],
        exemple: "<b>Lampadaire automatique</b> (seuil choisi : 20 lux)<br>Début, puis <b>répéter indéfiniment</b> :<br>1. Lire la luminosité et le détecteur de présence.<br>2. Losange « luminosité inférieure à 20 lux ? » — <b>non</b> (il fait jour) : éteindre les DEL. — <b>oui</b> (il fait nuit) : passer au test suivant.<br>3. Losange « présence détectée ? » — <b>oui</b> : DEL à 100 %. — <b>non</b> : DEL à 30 %.<br>4. Revenir à l'étape 1 : c'est la boucle.<br><i>Vérification</i> : à 23 h, le capteur mesure 5 lux et personne ne passe. 5 est inférieur à 20, donc « oui » au premier test, puis « non » au second : les DEL éclairent à 30 %."
      },
      {
        titre: "Lire un schéma, un diagramme ou un graphique",
        points: [
          "Commencer par le <b>titre</b> et la <b>légende</b> : que représente le document ? Que signifient les symboles et les couleurs ?",
          "Dans un <b>schéma</b> ou un <b>diagramme de blocs</b>, chaque bloc est un élément de l'objet et chaque flèche un <b>flux</b> : de <b>matière</b>, d'<b>énergie</b> ou d'<b>information</b>. Repérer d'où part et où arrive chaque flèche.",
          "Dans un <b>schéma électrique</b>, reconnaître les symboles : générateur ou pile, interrupteur, lampe, DEL, moteur, résistance.",
          "Dans un <b>graphique</b> ou un <b>tableau</b>, lire les axes et les <b>unités</b>, puis relever des <b>valeurs précises</b> pour les citer dans la réponse.",
          "Dans un <b>diagramme des exigences</b> ou un cahier des charges, chaque exigence donne une valeur à respecter : on compare la valeur mesurée ou calculée à cette valeur."
        ]
      },
      {
        titre: "Rédiger une réponse argumentée",
        etapes: true,
        points: [
          "<b>Répondre</b> clairement à la question dès la première phrase, ou annoncer ce que l'on va calculer.",
          "<b>Justifier avec le document</b> : citer une valeur avec son unité (« d'après le document 2, la batterie stocke 600 Wh »).",
          "<b>Calculer</b> si besoin : écrire la formule, remplacer par les valeurs, donner le résultat avec son unité. Formule souvent utile : <b>E = P × t</b> (énergie en Wh, puissance en W, durée en h).",
          "<b>Employer le vocabulaire</b> de la technologie : capteur, actionneur, chaîne d'information, cahier des charges, critère, niveau…",
          "<b>Conclure</b> en revenant à la question : « le cahier des charges est respecté » ou « n'est pas respecté », et proposer une amélioration si on la demande."
        ],
        exemple: "<b>Question</b> : le cahier des charges exige que le lampadaire fonctionne <b>3 nuits</b> sans soleil. Est-ce le cas ? Données : batterie de 600 Wh ; DEL de 20 W allumées 12 h par nuit.<br><b>Réponse</b> : je calcule l'énergie consommée en une nuit : E = P × t = 20 W × 12 h = 240 Wh. Pour 3 nuits : 3 × 240 = 720 Wh. Or la batterie ne stocke que 600 Wh, ce qui est inférieur à 720 Wh. <b>Donc le cahier des charges n'est pas respecté</b> : le lampadaire ne tient que 600 ÷ 240 = 2,5 nuits. Pour l'améliorer, on peut choisir une batterie plus grosse, ou baisser la puissance des DEL quand personne ne passe."
      }
    ],

    mots: [
      ["Besoin", "Ce qui est nécessaire ou désiré par un utilisateur : à qui l'objet rend-il service, sur quoi agit-il, dans quel but ?"],
      ["Fonction d'usage", "Ce à quoi sert l'objet pour son utilisateur."],
      ["Fonction technique", "Ce qu'un élément de l'objet doit faire pour que la fonction d'usage soit assurée."],
      ["Solution technique", "Le composant ou le procédé choisi pour réaliser une fonction technique."],
      ["Chaîne d'information", "Partie de l'objet qui acquiert, traite et communique les informations : elle décide."],
      ["Chaîne d'énergie", "Partie de l'objet qui alimente, distribue, convertit et transmet l'énergie : elle agit."],
      ["Capteur", "Composant qui transforme une grandeur physique (lumière, température, présence) en signal électrique."],
      ["Actionneur", "Composant qui convertit l'énergie reçue en action : mouvement, lumière, chaleur, son."],
      ["Microcontrôleur", "Petit ordinateur d'une carte programmable, qui exécute le programme et traite les informations."],
      ["Algorigramme", "Représentation d'un algorithme avec des symboles normalisés reliés par des flèches."],
      ["Condition", "Test dont la réponse est oui ou non ; dans un algorigramme, elle s'écrit dans un losange."],
      ["Boucle", "Partie d'un algorithme qui se répète, un nombre de fois donné ou indéfiniment."],
      ["Variable", "Case mémoire qui porte un nom et contient une valeur qui peut changer."]
    ],

    quiz: [
      { q: "La fonction d'usage d'un objet, c'est :",
        choix: ["la façon dont il est fabriqué", "ce à quoi il sert pour l'utilisateur", "la liste de ses composants", "son prix"],
        bonne: 1,
        why: "La fonction d'usage répond à la question « à quoi sert l'objet ? »." },

      { q: "Quelles sont les trois fonctions de la chaîne d'information ?",
        choix: ["Acquérir, traiter, communiquer", "Alimenter, distribuer, convertir", "Concevoir, fabriquer, tester", "Lire, écrire, compter"],
        bonne: 0,
        why: "La chaîne d'information décide ; alimenter, distribuer et convertir appartiennent à la chaîne d'énergie." },

      { q: "Dans la chaîne d'énergie, quel élément réalise la fonction « convertir » ?",
        choix: ["La batterie", "Le relais", "Le moteur électrique", "Le capteur de lumière"],
        bonne: 2,
        why: "Le moteur convertit l'énergie électrique en énergie mécanique : c'est un actionneur." },

      { q: "Lequel de ces composants est un capteur ?",
        choix: ["Une DEL", "Un moteur", "Un haut-parleur", "Un détecteur de présence infrarouge"],
        bonne: 3,
        why: "Le détecteur relève une information (une présence) : il réalise la fonction acquérir." },

      { q: "Dans un algorigramme, quel symbole représente une condition ?",
        choix: ["Un rectangle", "Un losange", "Un ovale", "Une flèche"],
        bonne: 1,
        why: "Le losange contient un test et possède deux sorties, oui et non." },

      { q: "Quelle fonction de la chaîne d'énergie reçoit les ordres de la chaîne d'information ?",
        choix: ["Alimenter", "Transmettre", "Distribuer", "Convertir"],
        bonne: 2,
        why: "Le distributeur (relais, transistor, variateur) laisse passer ou non l'énergie selon l'ordre reçu." },

      { q: "Dans une réponse avec un calcul, qu'est-ce qui est indispensable ?",
        choix: ["La formule, les valeurs avec leurs unités et une phrase de conclusion", "Seulement le résultat", "Un dessin en couleur", "Recopier tout le document"],
        bonne: 0,
        why: "Le correcteur doit voir le raisonnement et la réponse à la question posée." },

      { q: "Combien de temps dure l'épreuve de sciences du brevet ?",
        choix: ["2 h pour une seule discipline", "30 min par discipline, sur deux jours", "3 h pour les trois disciplines", "1 h pour deux disciplines, soit environ 30 min chacune"],
        bonne: 3,
        why: "Deux disciplines parmi physique-chimie, SVT et technologie, en une heure : il faut surveiller l'horloge." }
    ]
  }

);
