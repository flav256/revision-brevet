/* examens/techno.js — examens blancs de technologie (format DNB 2027, épreuve de sciences : partie technologie, 30 minutes, 10 points) */
DATA.examens = DATA.examens || [];
DATA.examens.push(

  /* ================================================================
     Sujet 1 — réseau local du collège (te-ch1)
     ================================================================ */
  {
    id: 'ex-techno-1',
    matiere: 'techno',
    numero: 1,
    titre: "Le réseau de la salle de technologie",
    epreuve: "SCIENCES — TECHNOLOGIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['te-ch1'],
    methodes: ['te-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Le réseau de la salle de technologie",
        points: 10,
        html: `<p class="consigne"><b>TECHNOLOGIE – Durée 30 minutes – 10 points</b><br>Les démarches engagées et les essais, même non aboutis, seront pris en compte.</p>
<p>Le collège installe un réseau local dans sa salle de technologie. Les élèves doivent pouvoir enregistrer leurs travaux sur le serveur de fichiers, envoyer leurs pièces à l'imprimante 3D, imprimer leurs documents et consulter des sites sur Internet. Le technicien du collège a réalisé le schéma de ce réseau.</p>
<p class="source">Situation et données fictives, construites pour l'entraînement.</p>

<div class="doc"><p class="doc-titre">Document 1 : schéma du réseau de la salle de technologie</p>
<svg class="fig-ex" viewBox="0 0 360 296" role="img" aria-label="Schéma du réseau de la salle : Internet est relié à l'élément 2, lui-même relié à l'élément 1. L'élément 1 est relié par câble au poste du professeur, aux postes élèves 1, 2 et 3, au serveur, à l'imprimante 3D et à l'imprimante. Le poste élève 4, en pointillés, n'est pas encore installé."><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M140 46 a12 12 0 0 1 2 -22 a16 16 0 0 1 28 -12 a18 18 0 0 1 32 4 a14 14 0 0 1 18 30 z"/><line x1="180" y1="46" x2="180" y2="64"/><rect x="152" y="64" width="56" height="26" rx="4"/><line x1="180" y1="90" x2="180" y2="112"/><rect x="160" y="112" width="40" height="176" rx="4"/><rect x="4" y="121" width="122" height="28" rx="4"/><line x1="126" y1="135" x2="160" y2="135"/><rect x="234" y="121" width="122" height="28" rx="4"/><line x1="200" y1="135" x2="234" y2="135"/><rect x="4" y="166" width="122" height="28" rx="4"/><line x1="126" y1="180" x2="160" y2="180"/><rect x="234" y="166" width="122" height="28" rx="4"/><line x1="200" y1="180" x2="234" y2="180"/><rect x="4" y="211" width="122" height="28" rx="4"/><line x1="126" y1="225" x2="160" y2="225"/><rect x="234" y="211" width="122" height="28" rx="4"/><line x1="200" y1="225" x2="234" y2="225"/><rect x="4" y="256" width="122" height="28" rx="4"/><line x1="126" y1="270" x2="160" y2="270"/><rect x="234" y="256" width="122" height="28" rx="4" stroke-dasharray="5 4"/><line x1="200" y1="270" x2="234" y2="270" stroke-dasharray="5 4"/></g><g fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle"><text x="180" y="37">Internet</text><text x="180" y="83" font-size="17">②</text><text x="180" y="208" font-size="17">①</text><text x="65" y="140">Professeur</text><text x="295" y="140">Serveur</text><text x="65" y="185">Élève 1</text><text x="295" y="185">Imprimante 3D</text><text x="65" y="230">Élève 2</text><text x="295" y="230">Imprimante</text><text x="65" y="275">Élève 3</text><text x="295" y="275">Élève 4</text></g></svg>
<p>Chaque trait représente une liaison par câble Ethernet. « Professeur » et « Élève 1 » à « Élève 4 » sont des ordinateurs fixes. Les éléments ① et ② sont à identifier. L'élément ① possède 24 prises (ports) Ethernet. Le poste élève 4, en pointillés, n'est pas encore installé.</p></div>

<div class="doc"><p class="doc-titre">Document 2 : adresses des appareils déjà installés</p>
<table class="tab"><tr><th>Appareil</th><th>Adresse IP</th><th>Adresse MAC</th></tr>
<tr><td>Élément ②</td><td>192.168.1.1</td><td>9C:5C:8E:12:A0:01</td></tr>
<tr><td>Serveur de fichiers</td><td>192.168.1.2</td><td>00:1B:21:4C:7E:90</td></tr>
<tr><td>Poste professeur</td><td>192.168.1.10</td><td>3C:52:82:4F:A1:3E</td></tr>
<tr><td>Poste élève 1</td><td>192.168.1.21</td><td>3C:52:82:5B:02:C4</td></tr>
<tr><td>Poste élève 2</td><td>192.168.1.22</td><td>3C:52:82:5B:07:19</td></tr>
<tr><td>Poste élève 3</td><td>192.168.1.23</td><td>3C:52:82:5B:0A:F2</td></tr>
<tr><td>Imprimante 3D</td><td>192.168.1.40</td><td>B8:27:EB:6D:2F:8A</td></tr>
<tr><td>Imprimante</td><td>192.168.1.41</td><td>00:80:77:A3:15:6C</td></tr></table>
<p>Tous les appareils utilisent le masque de sous-réseau 255.255.255.0 : les trois premiers nombres de l'adresse IP désignent le réseau, le dernier nombre désigne l'appareil.</p></div>

<p class="q"><b>Question 1</b> <span class="pts">(2 points)</span> : à l'aide du document 1, nommer les éléments ① et ② du réseau. Pour chacun, indiquer son rôle et l'adresse qu'il lit pour acheminer les données (adresse IP ou adresse MAC).</p>

<p class="q"><b>Question 2</b> <span class="pts">(2 points)</span> : le technicien doit choisir l'adresse IP du poste élève 4. À l'aide du document 2, indiquer sur l'annexe, pour chaque adresse proposée, si elle peut être attribuée à ce poste, et justifier.</p>

<div class="doc"><p class="doc-titre">Document 3 : trois signalements reçus par le technicien</p>
<table class="tab"><tr><th>Signalement</th><th>Ce que constatent les utilisateurs</th></tr>
<tr><td>A</td><td>Le poste élève 3 n'accède plus ni au serveur, ni aux imprimantes, ni à Internet. Les autres postes fonctionnent normalement.</td></tr>
<tr><td>B</td><td>Tous les postes enregistrent leurs fichiers sur le serveur et impriment normalement, mais aucun n'accède à Internet.</td></tr>
<tr><td>C</td><td>Plus aucun appareil de la salle ne communique : ni avec le serveur, ni avec les imprimantes, ni avec Internet.</td></tr></table></div>

<p class="q"><b>Question 3</b> <span class="pts">(1,5 point)</span> : à l'aide des documents 1 et 3, indiquer pour chaque signalement l'élément probablement en panne : un câble, l'élément ① ou l'élément ②. Justifier chaque réponse.</p>

<div class="doc"><p class="doc-titre">Document 4 : câble ou Wi-Fi dans la salle de technologie ?</p>
<table class="tab"><tr><th></th><th>Liaison par câble Ethernet</th><th>Liaison Wi-Fi (borne fixée au plafond)</th></tr>
<tr><td>Débit mesuré pour un poste</td><td>100 Mbit/s</td><td>20 Mbit/s ; il baisse encore quand plusieurs appareils sont connectés en même temps</td></tr>
<tr><td>Stabilité de la liaison</td><td>Liaison stable</td><td>Coupures possibles : les murs et les armoires métalliques gênent les ondes</td></tr>
<tr><td>Sécurité</td><td>Il faut se brancher sur une prise de la salle</td><td>Les ondes sortent de la salle : une clé de sécurité (WPA2) est indispensable</td></tr>
<tr><td>Coût de l'installation</td><td>45 € par poste (câble, prise et pose)</td><td>300 € pour la borne et sa pose, quel que soit le nombre de postes (les ordinateurs ont déjà une carte Wi-Fi)</td></tr>
<tr><td>Déplacement</td><td>Le poste reste relié à sa prise</td><td>Un ordinateur portable ou une tablette peut être déplacé dans la salle</td></tr></table>
<p>Rappel : 1 octet = 8 bits.</p></div>

<p class="q"><b>Question 4</b> <span class="pts">(1,5 point)</span> : le professeur a déposé sur le serveur une vidéo de 300 Mo. À l'aide du document 4, calculer la durée de téléchargement de cette vidéo par un poste relié par câble, puis par un poste relié en Wi-Fi. Les calculs doivent être détaillés.</p>

<p class="q"><b>Question 5</b> <span class="pts">(3 points)</span> : l'an prochain, 8 nouveaux postes élèves fixes seront installés dans la salle. Le collège hésite entre deux solutions : les relier par câble à l'élément ①, ou installer une borne Wi-Fi. À l'aide de l'ensemble des documents et de la question 4, indiquer la solution que vous conseillez au collège et justifier ce choix par au moins trois arguments.<br>Une réponse rédigée d'au moins cinq lignes est attendue. La qualité de la rédaction sera évaluée.</p>`
      }
    ],
    annexe: `<p class="q"><b>Question 2</b> (2 points) : pour chaque adresse IP proposée pour le poste élève 4, indiquer si elle peut être attribuée à ce poste (oui ou non) et justifier à l'aide du document 2.</p>
<table class="tab"><tr><th>Adresse IP proposée</th><th>Utilisable ? (oui ou non)</th><th>Justification</th></tr>
<tr><td>192.168.1.300</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>192.168.2.24</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>192.168.1.22</td><td class="vide"></td><td class="vide"></td></tr>
<tr><td>192.168.1.24</td><td class="vide"></td><td class="vide"></td></tr></table>`,
    corrige: [
      {
        titre: "Le réseau de la salle de technologie",
        html: `<div class="rep"><p class="rq"><b>Question 1.</b> Nommer ① et ②, donner leur rôle et l'adresse qu'ils lisent.</p>
<p>① est le <b>commutateur</b> (switch) : il relie entre eux les appareils du réseau local de la salle ; il lit l'<b>adresse MAC</b> du destinataire et envoie les données seulement à l'appareil concerné. ② est le <b>routeur</b> : il relie le réseau de la salle à un autre réseau, Internet ; il lit l'<b>adresse IP</b> du destinataire et choisit le chemin des données.</p>
<p class="bareme">0,5 point par nom ; 0,5 point par rôle avec la bonne adresse.</p>
<p class="attendu"><b>On attend :</b> une lecture du schéma : ① est le point central auquel tous les appareils sont reliés (réseau en étoile) ; ② est le seul passage vers Internet.</p>
<p class="piege"><b>Piège :</b> inverser les adresses (le commutateur utilise les adresses MAC, le routeur les adresses IP), ou appeler ② « serveur » : le serveur est l'ordinateur qui rend un service, ici stocker les fichiers.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Adresses proposées pour le poste élève 4 (annexe).</p>
<table class="tab"><tr><th>Adresse</th><th>Utilisable ?</th><th>Justification</th></tr>
<tr><td>192.168.1.300</td><td>non</td><td>Adresse impossible : chaque nombre d'une adresse IPv4 va de 0 à 255, or 300 &gt; 255.</td></tr>
<tr><td>192.168.2.24</td><td>non</td><td>Les trois premiers nombres (192.168.2) ne sont pas ceux du réseau de la salle (192.168.1) : le poste serait sur un autre réseau.</td></tr>
<tr><td>192.168.1.22</td><td>non</td><td>Adresse déjà utilisée par le poste élève 2 : deux appareils d'un même réseau ne peuvent pas avoir la même adresse IP.</td></tr>
<tr><td>192.168.1.24</td><td>oui</td><td>Bon réseau (192.168.1), dernier nombre compris entre 1 et 254, adresse libre dans le document 2.</td></tr></table>
<p class="bareme">0,5 point par ligne (réponse et justification).</p>
<p class="piege"><b>Piège :</b> 192.168.2.24 et 192.168.1.22 sont bien écrites ; il faut aussi vérifier le réseau (les trois premiers nombres) et le tableau des adresses déjà prises.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Élément en panne pour chaque signalement.</p>
<p><b>A :</b> le <b>câble du poste élève 3</b> (ou sa prise, ou sa carte réseau). Les autres postes communiquent, donc l'élément ① fonctionne : seul le poste 3 est coupé du réseau.</p>
<p><b>B :</b> l'<b>élément ②, le routeur</b> (ou le câble qui le relie à ①, ou sa liaison vers Internet). Le réseau local fonctionne, puisque le serveur et les imprimantes répondent, donc ① marche ; c'est la sortie vers Internet, qui passe par ②, qui est coupée.</p>
<p><b>C :</b> l'<b>élément ①, le commutateur</b>. Le réseau est en étoile : tous les appareils passent par lui ; s'il tombe en panne, plus rien ne circule, ni dans la salle ni vers Internet.</p>
<p class="bareme">0,5 point par signalement (élément et justification).</p>
<p class="attendu"><b>On attend :</b> un raisonnement par élimination appuyé sur le schéma : ce qui fonctionne encore ne peut pas être en panne.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Durée de téléchargement de la vidéo de 300 Mo.</p>
<p class="calc">Quantité de données : 300 Mo × 8 = 2 400 Mbit</p>
<p class="calc">Par câble : durée = quantité de données ÷ débit = 2 400 Mbit ÷ 100 Mbit/s = 24 s</p>
<p class="calc">En Wi-Fi : durée = 2 400 Mbit ÷ 20 Mbit/s = 120 s = 2 min</p>
<p>La vidéo se télécharge en 24 s par câble et en 2 min en Wi-Fi, soit 5 fois plus lentement, et encore plus si plusieurs postes sont connectés en même temps.</p>
<p class="bareme">0,5 point pour la conversion en Mbit ; 0,5 point par durée, avec son unité.</p>
<p class="piege"><b>Piège :</b> oublier de multiplier par 8 (300 ÷ 100 = 3 s est faux) : la taille du fichier est en <b>octets</b>, le débit en <b>bits</b> par seconde.</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> Question ouverte : câble ou Wi-Fi pour les 8 nouveaux postes ?</p>
<p><b>Arguments possibles</b> (trois suffisent) : débit 5 fois plus grand par câble (100 Mbit/s contre 20 Mbit/s ; 24 s contre 2 min pour la vidéo) ; liaison stable, utile pour les envois au serveur et à l'imprimante 3D ; meilleure sécurité, car aucune onde ne sort de la salle ; l'élément ① a assez de prises (8 utilisées aujourd'hui, 9 avec le poste élève 4, 17 avec les 8 nouveaux postes, pour 24 prises) ; coût proche : 8 × 45 = 360 € contre 300 €, soit seulement 60 € de plus ; la mobilité du Wi-Fi est inutile pour des postes fixes.</p>
<div class="exemple-redige">Je conseille au collège de relier les 8 nouveaux postes par câble. D'abord, le débit par câble est de 100 Mbit/s contre 20 Mbit/s en Wi-Fi : la vidéo de 300 Mo se télécharge en 24 s au lieu de 2 min, et le Wi-Fi ralentit encore quand plusieurs postes sont connectés. Ensuite, la liaison par câble est stable, alors que les murs et les armoires métalliques peuvent couper le Wi-Fi pendant un envoi au serveur ou à l'imprimante 3D. De plus, le câble est plus sûr : les ondes Wi-Fi sortent de la salle, il faudrait donc protéger le réseau par une clé WPA2. Enfin, le commutateur possède 24 prises et seulement 17 seront utilisées, et le câblage coûte 8 × 45 = 360 €, soit 60 € de plus que la borne. Comme les postes sont fixes, l'avantage du Wi-Fi, la mobilité, ne sert à rien ici.</div>
<p class="bareme">0,5 point pour un choix clairement annoncé ; 1,5 point pour trois arguments justifiés par les documents (0,5 chacun) ; 1 point pour la maîtrise de la langue (phrases complètes, connecteurs, orthographe, vocabulaire du cours).</p>
<p class="valorise"><b>On valorise :</b> un calcul (coût, nombre de prises) et une nuance : une borne Wi-Fi peut compléter le câble pour des tablettes ou des ordinateurs portables.</p>
<p class="piege"><b>Piège :</b> choisir le Wi-Fi « parce qu'il est moins cher » ou « parce qu'on peut se déplacer » sans tenir compte du débit ni des postes fixes. Un choix du Wi-Fi n'est accepté que s'il est justifié par les documents.</p></div>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Lire le schéma de haut en bas.</b> Partir d'Internet et descendre jusqu'aux postes : chaque trait est un câble. Repérer l'élément auquel tout est relié (le centre d'un réseau en étoile) et celui qui mène à Internet.</li>
<li><b>Nommer un élément par ce qu'il relie.</b> Il relie les appareils d'un même réseau local : c'est le commutateur, qui lit les adresses MAC. Il relie deux réseaux différents, la salle et Internet : c'est le routeur, qui lit les adresses IP.</li>
<li><b>Tester une adresse IP en trois contrôles.</b> Quatre nombres de 0 à 255 ; les trois premiers identiques à ceux du réseau (192.168.1) ; une adresse qui n'est pas déjà prise dans le tableau. Pour justifier un « non », citer le contrôle qui échoue.</li>
<li><b>Diagnostiquer une panne par élimination.</b> Ce qui fonctionne encore ne peut pas être en panne : si les autres postes marchent, le commutateur marche ; si le réseau local marche mais pas Internet, le problème vient du routeur.</li>
<li><b>Poser les calculs de débit.</b> Convertir d'abord les octets en bits (× 8), puis écrire durée = quantité de données ÷ débit, avec l'unité à chaque ligne, et finir par une phrase.</li>
<li><b>Construire la réponse ouverte.</b> Annoncer le choix dès la première phrase ; donner trois arguments, chacun appuyé sur une valeur du document 4, du document 1 ou de la question 4 ; les relier par des connecteurs (d'abord, ensuite, de plus, enfin) ; conclure en revenant au besoin : des postes fixes.</li>
<li><b>Gérer les 30 minutes.</b> Environ 4 minutes pour chacune des questions 1 à 4, 10 minutes pour la question 5, 2 minutes pour relire l'annexe et les unités.</li>
</ol>
<p class="tip">Un argument = une idée + une preuve tirée d'un document. « Le câble est plus rapide » ne suffit pas ; « le câble offre 100 Mbit/s contre 20 Mbit/s en Wi-Fi » convainc.</p>`
  },

  /* ================================================================
     Sujet 2 — concevoir et imprimer une pièce (te-ch2 + algorigramme)
     ================================================================ */
  {
    id: 'ex-techno-2',
    matiere: 'techno',
    numero: 2,
    titre: "Des crochets pour les casques de vélo",
    epreuve: "SCIENCES — TECHNOLOGIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['te-ch2'],
    methodes: ['te-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Des crochets pour les casques de vélo",
        points: 10,
        html: `<p class="consigne"><b>TECHNOLOGIE – Durée 30 minutes – 10 points</b><br>Les démarches engagées et les essais, même non aboutis, seront pris en compte.</p>
<p>Le collège vient d'installer un abri à vélos. Les élèves qui viennent à vélo laissent leur casque par terre dans le vestiaire, où il s'abîme. Une classe de 3<sup>e</sup> conçoit des crochets à visser au mur du vestiaire pour y suspendre les casques. Ils seront fabriqués en PLA avec l'imprimante 3D du fablab du collège.</p>
<p class="source">Situation et données fictives, construites pour l'entraînement.</p>

<div class="doc"><p class="doc-titre">Document 1 : le message de la conseillère principale d'éducation (CPE)</p>
<p>« Il faudrait 20 crochets, un par casque. Un casque pèse environ 350 g, mais les élèves y suspendent parfois aussi leur sac de sport : chaque crochet doit supporter au moins 2 kg sans casser. Pour que personne ne se blesse en passant, un crochet ne doit pas dépasser du mur de plus de 60 mm et ses angles doivent être arrondis. Chaque crochet sera fixé au mur avec 2 vis de 4 mm de diamètre. Le budget pour la matière est de 8 € pour les 20 crochets, et tout doit être prêt dans une semaine. »</p></div>

<p class="q"><b>Question 1</b> <span class="pts">(2 points)</span> : à l'aide du document 1, compléter le cahier des charges du crochet sur l'annexe.</p>

<div class="doc"><p class="doc-titre">Document 2 : croquis du crochet, vu de côté, fixé au mur</p>
<svg class="fig-ex" viewBox="0 0 360 232" role="img" aria-label="Croquis coté du crochet vu de côté, fixé au mur : une plaque verticale de 80 mm de haut vissée au mur, un bras horizontal en bas qui se termine par un bec relevé. Le crochet dépasse du mur de 58 mm. Deux trous de 4,5 mm de diamètre traversent la plaque. Le casque se suspend entre la plaque et le bec."><g fill="none" stroke="currentColor" stroke-width="1.5"><line x1="40" y1="14" x2="40" y2="216"/><line x1="40" y1="20" x2="30" y2="30"/><line x1="40" y1="34" x2="30" y2="44"/><line x1="40" y1="48" x2="30" y2="58"/><line x1="40" y1="62" x2="30" y2="72"/><line x1="40" y1="76" x2="30" y2="86"/><line x1="40" y1="90" x2="30" y2="100"/><line x1="40" y1="104" x2="30" y2="114"/><line x1="40" y1="118" x2="30" y2="128"/><line x1="40" y1="132" x2="30" y2="142"/><line x1="40" y1="146" x2="30" y2="156"/><line x1="40" y1="160" x2="30" y2="170"/><line x1="40" y1="174" x2="30" y2="184"/><line x1="40" y1="188" x2="30" y2="198"/><line x1="40" y1="202" x2="30" y2="212"/><polygon points="40,34 56,34 56,174 136,174 136,144 156,144 156,194 40,194" fill="currentColor" fill-opacity=".12"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><line x1="40" y1="69.5" x2="56" y2="69.5"/><line x1="40" y1="78.5" x2="56" y2="78.5"/><line x1="40" y1="139.5" x2="56" y2="139.5"/><line x1="40" y1="148.5" x2="56" y2="148.5"/></g><g fill="none" stroke="currentColor" stroke-width="1"><line x1="60" y1="34" x2="196" y2="34"/><line x1="160" y1="194" x2="196" y2="194"/><line x1="190" y1="34" x2="190" y2="194"/><line x1="156" y1="198" x2="156" y2="222"/><line x1="40" y1="216" x2="40" y2="222"/><line x1="40" y1="216" x2="156" y2="216"/><line x1="96" y1="112" x2="96" y2="168"/></g><g fill="currentColor"><polygon points="186,42 194,42 190,34"/><polygon points="186,186 194,186 190,194"/><polygon points="48,212 48,220 40,216"/><polygon points="148,212 148,220 156,216"/><polygon points="92,164 100,164 96,172"/></g><g fill="currentColor" font-family="sans-serif" font-size="14"><text x="22" y="124" transform="rotate(-90 22 124)" text-anchor="middle">mur</text><text x="196" y="120">80</text><text x="98" y="211" text-anchor="middle">58</text><text x="102" y="106" text-anchor="middle">casque</text><text x="226" y="56">Cotes en mm</text><text x="226" y="80">Largeur : 20 mm</text><text x="226" y="104">Trous : Ø 4,5 mm</text><text x="226" y="122" font-size="13">(pour vis de 4 mm)</text></g></svg>
<p>Après ce croquis, le groupe a modélisé le crochet avec un logiciel de CAO.</p></div>

<p class="q"><b>Question 2</b> <span class="pts">(1 point)</span> : pour imprimer le crochet, le modèle 3D est exporté en fichier STL, puis ouvert dans un logiciel trancheur. Expliquer le rôle du fichier STL, puis celui du logiciel trancheur.</p>

<div class="doc"><p class="doc-titre">Document 3 : deux orientations possibles sur le plateau de l'imprimante</p>
<svg class="fig-ex" viewBox="0 0 360 212" role="img" aria-label="Deux orientations du crochet sur le plateau. A : le crochet est couché sur le côté, son profil en J posé à plat sur le plateau (vue de dessus). B : la plaque est posée à plat sur le plateau et le bras est vertical ; le bec, en surplomb, repose sur des supports (vue de côté) ; les couches horizontales coupent le bras en travers."><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="10" width="142" height="150" stroke-width="1"/><polygon points="40,22 52.8,22 52.8,134 116.8,134 116.8,110 132.8,110 132.8,150 40,150" fill="currentColor" fill-opacity=".12"/><line x1="190" y1="160" x2="356" y2="160" stroke-width="2"/></g><g fill="none" stroke="currentColor" stroke-width="1"><line x1="196" y1="160" x2="188" y2="168"/><line x1="208" y1="160" x2="200" y2="168"/><line x1="220" y1="160" x2="212" y2="168"/><line x1="232" y1="160" x2="224" y2="168"/><line x1="244" y1="160" x2="236" y2="168"/><line x1="256" y1="160" x2="248" y2="168"/><line x1="268" y1="160" x2="260" y2="168"/><line x1="280" y1="160" x2="272" y2="168"/><line x1="292" y1="160" x2="284" y2="168"/><line x1="304" y1="160" x2="296" y2="168"/><line x1="316" y1="160" x2="308" y2="168"/><line x1="328" y1="160" x2="320" y2="168"/><line x1="340" y1="160" x2="332" y2="168"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><rect x="223" y="73.6" width="27" height="72"/><line x1="230" y1="74" x2="230" y2="145"/><line x1="237" y1="74" x2="237" y2="145"/><line x1="244" y1="74" x2="244" y2="145"/></g><g fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="205,160 349,160 349,145.6 223,145.6 223,73.6 250,73.6 250,55.6 205,55.6" fill="currentColor" fill-opacity=".12"/></g><g fill="none" stroke="currentColor" stroke-width=".8"><line x1="205" y1="85" x2="223" y2="85"/><line x1="205" y1="97" x2="223" y2="97"/><line x1="205" y1="109" x2="223" y2="109"/><line x1="205" y1="121" x2="223" y2="121"/><line x1="205" y1="133" x2="223" y2="133"/><line x1="256" y1="112" x2="268" y2="112"/><line x1="201" y1="110" x2="212" y2="110"/></g><g fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle"><text x="77" y="182">A : couché sur le côté</text><text x="77" y="200" font-size="13">(vue de dessus)</text><text x="272" y="182">B : plaque à plat,</text><text x="272" y="200" font-size="13">bras vertical (vue de côté)</text><text x="272" y="116" text-anchor="start">supports</text><text x="199" y="115" font-size="13" text-anchor="end">couches</text></g></svg>
<p>La figure n'est pas à l'échelle. Deux prototypes ont été imprimés avec le réglage 2 du document 4, puis testés en y suspendant des masses de plus en plus lourdes.</p>
<table class="tab"><tr><th></th><th>Orientation A</th><th>Orientation B</th></tr>
<tr><td>Hauteur imprimée</td><td>20 mm</td><td>58 mm</td></tr>
<tr><td>Supports</td><td>aucun</td><td>nécessaires sous le bec du crochet</td></tr>
<tr><td>Résultat de l'essai</td><td>supporte 6 kg sans casser</td><td>casse sous 1,5 kg : le bras se rompt entre deux couches</td></tr></table></div>

<p class="q"><b>Question 3</b> <span class="pts">(2 points)</span> : à l'aide des documents 1 et 3, choisir l'orientation A ou B pour imprimer les crochets. Justifier ce choix par deux arguments.</p>

<div class="doc"><p class="doc-titre">Document 4 : réglages testés dans le logiciel trancheur (un crochet, orientation A)</p>
<table class="tab"><tr><th>Réglage</th><th>Hauteur de couche</th><th>Taux de remplissage</th><th>Durée d'impression</th><th>Masse de PLA</th></tr>
<tr><td>1</td><td>0,1 mm</td><td>20 %</td><td>2 h 20 min</td><td>14 g</td></tr>
<tr><td>2</td><td>0,2 mm</td><td>20 %</td><td>1 h 10 min</td><td>14 g</td></tr>
<tr><td>3</td><td>0,2 mm</td><td>60 %</td><td>1 h 45 min</td><td>23 g</td></tr></table>
<p>Prix du PLA : 20 € la bobine de 1 kg. L'imprimante du fablab est disponible 6 heures par jour pendant les 5 jours de la semaine ; elle imprime un seul crochet à la fois.</p></div>

<div class="doc"><p class="doc-titre">Document 5 : fonctionnement simplifié de l'imprimante 3D</p>
<p>Au démarrage, l'imprimante chauffe la buse. Tant que la buse n'a pas atteint 200 °C, elle continue de la chauffer. Ensuite, elle dépose une couche de PLA, puis elle monte la buse d'une hauteur de couche. Elle recommence jusqu'à ce que la dernière couche soit déposée. Elle arrête alors le chauffage : l'impression est terminée.</p>
<p>L'algorigramme de ce fonctionnement, incomplet, se trouve sur l'annexe.</p></div>

<p class="q"><b>Question 4</b> <span class="pts">(2 points)</span> : a) à l'aide du document 5, compléter l'algorigramme sur l'annexe.<br>b) En orientation A, le crochet mesure 20 mm de haut sur le plateau. Calculer le nombre de couches déposées avec le réglage 1, puis avec le réglage 2 (document 4). En déduire pourquoi la durée d'impression du réglage 1 est le double de celle du réglage 2.</p>

<p class="q"><b>Question 5</b> <span class="pts">(3 points)</span> : le groupe hésite entre les trois réglages du document 4. Quel réglage faut-il choisir pour fabriquer les 20 crochets en respectant le cahier des charges ? Justifier la réponse à l'aide des documents 1, 3 et 4 ; les calculs doivent apparaître.<br>Une réponse rédigée, avec les calculs, est attendue. La qualité de la rédaction sera évaluée.</p>`
      }
    ],
    annexe: `<p class="q"><b>Question 1</b> (2 points) : compléter le cahier des charges du crochet à l'aide du document 1.</p>
<table class="tab"><tr><th>Exigence</th><th>Fonction ou contrainte ?</th><th>Critère</th><th>Niveau</th></tr>
<tr><td>Suspendre un casque et un sac</td><td>Fonction</td><td>Masse supportée sans casser</td><td>Au moins 2 kg</td></tr>
<tr><td>Ne pas blesser les élèves</td><td class="vide"></td><td>Distance entre le mur et le bout du crochet ; forme des angles</td><td class="vide"></td></tr>
<tr><td>Se fixer au mur</td><td>Fonction</td><td class="vide"></td><td>2 vis de 4 mm de diamètre</td></tr>
<tr><td>Coût de la matière</td><td>Contrainte</td><td>Prix du PLA utilisé pour un crochet</td><td class="vide"></td></tr>
<tr><td>Délai de fabrication</td><td class="vide"></td><td>Durée pour fabriquer les 20 crochets</td><td class="vide"></td></tr></table>
<p class="q"><b>Question 4 a)</b> : compléter l'algorigramme à l'aide du document 5 (texte des deux cases vides, et « oui » ou « non » sur les deux sorties marquées « …… »).</p>
<svg class="fig-ex" viewBox="0 0 360 486" role="img" aria-label="Algorigramme à compléter du fonctionnement de l'imprimante 3D : début, chauffer la buse, test de la température de la buse avec retour vers le chauffage si la réponse est non, déposer une couche de PLA, monter la buse d'une hauteur de couche, test de la dernière couche avec retour vers le dépôt d'une couche si la réponse est non, arrêter le chauffage, fin."><g fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="200" cy="22" rx="46" ry="16"/><line x1="200" y1="38" x2="200" y2="56"/><rect x="110" y="56" width="180" height="32" rx="2"/><line x1="200" y1="88" x2="200" y2="108"/><polygon points="200,108 300,145 200,182 100,145"/><polyline points="100,145 40,145 40,47 200,47"/><line x1="200" y1="182" x2="200" y2="204"/><rect x="96" y="204" width="208" height="32" rx="2"/><line x1="200" y1="236" x2="200" y2="254"/><rect x="96" y="254" width="208" height="40" rx="2"/><line x1="200" y1="294" x2="200" y2="314"/><polygon points="200,314 300,351 200,388 100,351"/><polyline points="100,351 40,351 40,195 200,195"/><line x1="200" y1="388" x2="200" y2="408"/><rect x="110" y="408" width="180" height="30" rx="2"/><line x1="200" y1="438" x2="200" y2="452"/><ellipse cx="200" cy="468" rx="46" ry="16"/></g><g fill="currentColor"><polygon points="196,48 204,48 200,56"/><polygon points="192,43 192,51 200,47"/><polygon points="196,100 204,100 200,108"/><polygon points="196,196 204,196 200,204"/><polygon points="192,191 192,199 200,195"/><polygon points="196,246 204,246 200,254"/><polygon points="196,306 204,306 200,314"/><polygon points="196,400 204,400 200,408"/><polygon points="196,444 204,444 200,452"/></g><g fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle"><text x="200" y="27">Début</text><text x="200" y="77">Chauffer la buse</text><text x="200" y="141">……………………</text><text x="200" y="159">……………………</text><text x="70" y="139">non</text><text x="216" y="198">oui</text><text x="200" y="225">Déposer une couche de PLA</text><text x="200" y="270">…………………………</text><text x="200" y="287">…………………………</text><text x="200" y="347">Dernière couche</text><text x="200" y="364">déposée ?</text><text x="70" y="345">……</text><text x="218" y="403">……</text><text x="200" y="428">Arrêter le chauffage</text><text x="200" y="473">Fin</text></g></svg>`,
    corrige: [
      {
        titre: "Des crochets pour les casques de vélo",
        html: `<div class="rep"><p class="rq"><b>Question 1.</b> Cahier des charges (annexe).</p>
<table class="tab"><tr><th>Exigence</th><th>Fonction ou contrainte ?</th><th>Critère</th><th>Niveau</th></tr>
<tr><td>Ne pas blesser les élèves</td><td><b>Contrainte</b> (sécurité)</td><td>Distance entre le mur et le bout du crochet ; forme des angles</td><td><b>60 mm au maximum ; angles arrondis</b></td></tr>
<tr><td>Se fixer au mur</td><td>Fonction</td><td><b>Nombre et diamètre des vis</b></td><td>2 vis de 4 mm de diamètre</td></tr>
<tr><td>Coût de la matière</td><td>Contrainte</td><td>Prix du PLA utilisé pour un crochet</td><td><b>0,40 € au maximum</b> (8 € ÷ 20 = 0,40 €)</td></tr>
<tr><td>Délai de fabrication</td><td><b>Contrainte</b></td><td>Durée pour fabriquer les 20 crochets</td><td><b>1 semaine au maximum</b></td></tr></table>
<p class="bareme">0,5 point par ligne complétée sans erreur.</p>
<p class="attendu"><b>On attend :</b> le critère est ce que l'on mesure ; le niveau est une valeur avec son unité, précisée par « au moins » ou « au maximum ».</p>
<p class="piege"><b>Piège :</b> écrire 8 € comme niveau : c'est le budget des 20 crochets, pas celui d'un crochet.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Rôle du fichier STL et du logiciel trancheur.</p>
<p>Le <b>fichier STL</b>, exporté depuis le logiciel de CAO, décrit la forme du crochet : sa surface est découpée en une multitude de petits triangles. Le <b>logiciel trancheur</b> ouvre ce fichier, découpe le crochet en couches horizontales, applique les réglages (hauteur de couche, remplissage, supports), calcule le trajet de la buse et produit le G-code que l'imprimante exécute ; il indique aussi la durée d'impression et la masse de matière.</p>
<p class="bareme">0,5 point par rôle.</p>
<p class="piege"><b>Piège :</b> le fichier STL ne contient pas les déplacements de la buse : ils sont dans le G-code fabriqué par le trancheur.</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Choix de l'orientation.</p>
<p>Il faut choisir l'<b>orientation A</b>. Premier argument, la solidité : en A, le prototype supporte 6 kg, plus que les 2 kg exigés par le cahier des charges ; en B, il casse sous 1,5 kg, moins que 2 kg, car les couches coupent le bras en travers et la pièce casse entre deux couches. Deuxième argument, les supports : en A, il n'en faut aucun, donc moins de matière, moins de temps et pas de traces à retirer ; en B, il faut des supports sous le bec.</p>
<p class="bareme">0,5 point pour le choix ; 0,75 point par argument justifié par les documents.</p>
<p class="valorise"><b>On valorise :</b> la hauteur imprimée plus faible en A (20 mm contre 58 mm), donc moins de couches et une pièce basse, stable sur le plateau ; le rappel du cours : une pièce casse plus facilement entre deux couches, on l'oriente donc selon les efforts qu'elle subira.</p>
<p class="piege"><b>Piège :</b> choisir B parce que la plaque, posée à plat, offre la plus grande face d'appui (80 mm × 20 mm) : c'est la règle générale, mais le bras est alors imprimé debout, ses couches le coupent en travers et il casse sous 1,5 kg. L'orientation se choisit aussi selon les supports et les efforts subis.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Algorigramme et nombre de couches.</p>
<p><b>a)</b> Premier losange : « La buse a-t-elle atteint 200 °C ? » (sa sortie « non » ramène à « Chauffer la buse »). Rectangle vide : « Monter la buse d'une hauteur de couche ». Second losange : la sortie qui remonte vers « Déposer une couche de PLA » est <b>non</b> ; la sortie vers « Arrêter le chauffage » est <b>oui</b>.</p>
<p class="calc">b) Réglage 1 : 20 mm ÷ 0,1 mm = 200 couches</p>
<p class="calc">Réglage 2 : 20 mm ÷ 0,2 mm = 100 couches</p>
<p>Avec le réglage 1, l'imprimante dépose deux fois plus de couches : la boucle de l'algorigramme est parcourue 200 fois au lieu de 100. Chaque couche demande à peu près le même temps, donc la durée double : 2 h 20 min = 2 × 1 h 10 min.</p>
<p class="bareme">a) 1 point (0,25 par élément) ; b) 0,5 point pour les calculs, 0,5 point pour l'explication.</p>
<p class="piege"><b>Piège :</b> 20 ÷ 0,2 = 100, et non 10. Écrire la condition du premier losange pour que la sortie « non » déjà indiquée fasse recommencer le chauffage : « Température inférieure à 200 °C ? » donnerait l'inverse.</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> Question ouverte : quel réglage choisir ?</p>
<p class="calc">Temps disponible : 6 h × 5 = 30 h</p>
<p class="calc">Réglage 1 : 20 × 2 h 20 min = 20 × 140 min = 2 800 min = 46 h 40 min &gt; 30 h → délai non respecté</p>
<p class="calc">Réglage 2 : 20 × 1 h 10 min = 20 × 70 min = 1 400 min = 23 h 20 min ≤ 30 h → délai respecté</p>
<p class="calc">Réglage 3 : 20 × 1 h 45 min = 20 × 105 min = 2 100 min = 35 h &gt; 30 h → délai non respecté</p>
<p class="calc">Prix du PLA : 20 € ÷ 1 000 g = 0,02 € par gramme</p>
<p class="calc">Réglages 1 et 2 : 20 × 14 g = 280 g ; 280 × 0,02 = 5,60 € ≤ 8 €</p>
<p class="calc">Réglage 3 : 20 × 23 g = 460 g ; 460 × 0,02 = 9,20 € &gt; 8 €</p>
<div class="exemple-redige">Il faut choisir le réglage 2. L'imprimante est disponible 6 h × 5 = 30 h dans la semaine. Avec le réglage 2, les 20 crochets demandent 20 × 1 h 10 min = 23 h 20 min, ce qui tient dans les 30 h ; il faudrait 46 h 40 min avec le réglage 1 et 35 h avec le réglage 3 : le délai d'une semaine ne serait pas respecté. Le PLA coûte 20 € le kilogramme, soit 0,02 € par gramme : avec le réglage 2, les 20 crochets utilisent 280 g de PLA, soit 5,60 €, ce qui respecte le budget de 8 €, alors que le réglage 3 coûterait 9,20 €. Enfin, le réglage 2 est assez solide : le prototype imprimé avec ce réglage en orientation A supporte 6 kg, bien plus que les 2 kg exigés. Il est donc inutile d'augmenter le remplissage ou d'affiner les couches : le réglage 2 respecte tout le cahier des charges.</div>
<p class="bareme">0,75 point pour le délai ; 0,75 point pour le coût ; 0,5 point pour la solidité et le choix final ; 1 point pour la maîtrise de la langue.</p>
<p class="valorise"><b>On valorise :</b> un raisonnement jour par jour : avec le réglage 2, 5 crochets par jour (5 × 70 min = 350 min ≤ 360 min), donc les 20 crochets sont prêts en 4 jours.</p>
<p class="piege"><b>Piège :</b> 1 h 10 min n'est pas 1,10 h : il faut passer en minutes (70 min). Choisir le réglage 3 « parce qu'il est plus solide » ou le réglage 1 « parce qu'il est plus beau », sans vérifier le délai et le coût.</p></div>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Passer du texte au cahier des charges.</b> Pour chaque phrase du message : est-ce ce que le crochet doit faire (fonction) ou ce qu'il doit respecter (contrainte : sécurité, coût, délai, dimensions) ? Le critère est la grandeur mesurée ; le niveau est une valeur avec son unité, précédée de « au moins » ou « au maximum ». Ramener le budget à un crochet : 8 € ÷ 20.</li>
<li><b>Lire le croquis.</b> Les cotes sont en millimètres : repérer celle qui se compare au cahier des charges (58 mm de saillie pour 60 mm au maximum) ; la largeur de 20 mm devient la hauteur imprimée quand le crochet est couché (orientation A).</li>
<li><b>Réciter la chaîne numérique dans l'ordre.</b> Croquis → modèle CAO → fichier STL → logiciel trancheur → G-code → impression → finition → essais. Pour chaque fichier ou logiciel, dire ce qu'il contient ou ce qu'il fait.</li>
<li><b>Choisir une orientation avec deux questions.</b> Faut-il des supports ? Comment les couches sont-elles placées par rapport à l'effort ? Comparer chaque résultat d'essai au niveau exigé (2 kg).</li>
<li><b>Compléter l'algorigramme en suivant le texte phrase par phrase.</b> « Tant que » et « jusqu'à ce que » annoncent un losange avec une flèche qui remonte ; vérifier que chaque losange a une sortie « oui » et une sortie « non ».</li>
<li><b>Calculer proprement.</b> Durées en minutes (1 h 10 min = 70 min), multiplication par 20, puis retour en heures et minutes ; prix au gramme (20 € ÷ 1 000 g) ; l'unité à chaque ligne.</li>
<li><b>Rédiger la question ouverte.</b> Tester chaque réglage sur chaque exigence (délai, coût, solidité), éliminer ceux qui échouent, puis conclure par une phrase qui nomme le réglage choisi et rappelle pourquoi.</li>
</ol>
<p class="tip">Au brouillon, un petit tableau « réglage / durée totale / coût / essai » évite les oublis. Sur la copie, recopier les calculs utiles puis rédiger la conclusion en phrases.</p>`
  },

  /* ================================================================
     Sujet 3 — site web d'un club, paquets, sécurité + médailles imprimées (te-ch1 + te-ch2)
     ================================================================ */
  {
    id: 'ex-techno-3',
    matiere: 'techno',
    numero: 3,
    titre: "Le tournoi du club de handball",
    epreuve: "SCIENCES — TECHNOLOGIE",
    duree: "30 minutes",
    points: 10,
    pointsRedaction: 0,
    cours: ['te-ch1', 'te-ch2'],
    methodes: ['te-m1'],
    garde: [
      "Durée 30 minutes – 10 points (une des deux disciplines de l'épreuve de sciences, 1 h 00 au total)",
      "Les essais et les démarches engagés, même non aboutis, sont pris en compte.",
      "L'usage de la calculatrice avec mode examen actif ou sans mémoire « type collège » est autorisé.",
      "L'utilisation du dictionnaire est interdite.",
      "ATTENTION : l'annexe est à rendre avec la copie."
    ],
    parties: [
      {
        titre: "Le tournoi du club de handball",
        points: 10,
        html: `<p class="consigne"><b>TECHNOLOGIE – Durée 30 minutes – 10 points</b><br>Les démarches engagées et les essais, même non aboutis, seront pris en compte.</p>
<p>Le club de handball de la ville organise un tournoi pour les joueurs de moins de 13 ans. Les familles inscrivent les enfants sur le site web du club. Chacun des 36 joueurs attendus recevra une médaille-souvenir imprimée en 3D au fablab du collège voisin.</p>
<p class="source">Situation et données fictives, construites pour l'entraînement.</p>

<div class="doc"><p class="doc-titre">Document 1 : du club-house au site web du club</p>
<svg class="fig-ex" viewBox="0 0 360 272" role="img" aria-label="Schéma : dans le club-house, l'ordinateur du secrétariat est relié par câble à la box et la tablette de la table de marque lui est reliée en Wi-Fi. La box est reliée par câble à Internet. Internet est relié au serveur DNS, au serveur web du club d'adresse IP 203.0.113.25, et au smartphone d'un parent par le réseau mobile."><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="26" width="150" height="240" rx="6" stroke-dasharray="6 4" stroke-width="1"/><rect x="19" y="44" width="120" height="40" rx="4"/><rect x="44" y="128" width="70" height="32" rx="4"/><rect x="19" y="206" width="120" height="40" rx="4"/><line x1="79" y1="84" x2="79" y2="128"/><line x1="79" y1="206" x2="79" y2="160" stroke-dasharray="5 4"/><line x1="114" y1="144" x2="178" y2="144"/><path d="M178 160 a12 12 0 0 1 2 -22 a15 15 0 0 1 24 -12 a17 17 0 0 1 30 6 a12 12 0 0 1 14 28 z"/><rect x="262" y="30" width="94" height="36" rx="4"/><rect x="262" y="116" width="94" height="56" rx="4"/><rect x="262" y="216" width="94" height="40" rx="4"/><line x1="236" y1="128" x2="262" y2="52"/><line x1="257" y1="146" x2="262" y2="146"/><line x1="236" y1="160" x2="262" y2="234" stroke-dasharray="5 4"/></g><g fill="currentColor" font-family="sans-serif" font-size="14" text-anchor="middle"><text x="79" y="18">Club-house</text><text x="79" y="61">Ordinateur</text><text x="79" y="77">du secrétariat</text><text x="79" y="149">Box</text><text x="79" y="223">Tablette (table</text><text x="79" y="239">de marque)</text><text x="213" y="152">Internet</text><text x="309" y="53">Serveur DNS</text><text x="309" y="134">Serveur web</text><text x="309" y="150">du club</text><text x="309" y="166" font-size="13">203.0.113.25</text><text x="309" y="233">Smartphone</text><text x="309" y="249">d'un parent</text></g></svg>
<p>Trait plein : liaison par câble. Pointillés : liaison sans fil (Wi-Fi ou réseau mobile 4G). Le site du club est hébergé sur un serveur web d'adresse IP 203.0.113.25.</p></div>

<p class="q"><b>Question 1</b> <span class="pts">(2 points)</span> : un parent tape sur son smartphone l'adresse <b>http://www.handball-exemple.fr/tournoi</b>.<br>a) Dans cette adresse, identifier le protocole utilisé et le nom de domaine.<br>b) À l'aide du document 1, numéroter sur l'annexe, dans l'ordre, les quatre échanges qui permettent d'afficher la page.<br>c) Indiquer quel appareil joue le rôle de client dans ces échanges. Justifier.</p>

<p class="q"><b>Question 2</b> <span class="pts">(2 points)</span> : depuis l'ordinateur du secrétariat, le secrétaire publie sur le site une photo des équipes, d'une taille de 3 Mo.<br>a) Les données de la photo sont découpées en paquets qui transportent chacun 1 500 octets de la photo. Calculer le nombre de paquets envoyés (1 Mo = 1 000 000 octets).<br>b) Ces paquets passent par la box. Nommer l'élément de la box qui les fait passer du réseau local du club-house vers Internet.<br>c) Les paquets ne prennent pas tous le même chemin et n'arrivent pas forcément dans l'ordre. Expliquer comment le serveur web reconstitue tout de même la photo.</p>

<div class="doc"><p class="doc-titre">Document 2 : les médailles-souvenirs</p>
<p>La médaille, en PLA, mesure 50 mm de diamètre et 4 mm d'épaisseur ; le logo du club est en relief et un trou permet de passer le ruban. Elle est imprimée à plat. Données du logiciel trancheur (hauteur de couche 0,2 mm, remplissage 20 %) :</p>
<table class="tab"><tr><th>Nombre de médailles imprimées en même temps sur le plateau</th><td>9</td></tr>
<tr><th>Durée d'impression d'un plateau de 9 médailles</th><td>3 h 30 min</td></tr>
<tr><th>Masse de PLA pour une médaille</th><td>6 g</td></tr></table>
<p>Prix du PLA : 20 € le kilogramme. Le fablab peut faire fonctionner l'imprimante 8 h le mercredi et 8 h le samedi qui précèdent le tournoi. Budget du club pour la matière des médailles : 5 €.</p>
<p>Une entreprise propose aussi de fabriquer les médailles par moulage : 600 € pour fabriquer le moule, puis 0,20 € par médaille.</p></div>

<p class="q"><b>Question 3</b> <span class="pts">(2 points)</span> : à l'aide du document 2, montrer que les 36 médailles peuvent être imprimées à temps et que le budget de 5 € est respecté. Les calculs doivent être détaillés.</p>

<p class="q"><b>Question 4</b> <span class="pts">(1 point)</span> : à l'aide du document 2, expliquer pourquoi l'impression 3D convient pour les 36 médailles du club, alors qu'un fabricant qui produit des dizaines de milliers de médailles identiques choisit le moulage.</p>

<div class="doc"><p class="doc-titre">Document 3 : les notes du secrétaire pour la page d'inscription</p>
<ul>
<li>Adresse de la page : http://www.handball-exemple.fr/tournoi (le site n'utilise pas encore le protocole HTTPS).</li>
<li>Informations demandées pour chaque enfant : nom, prénom, date de naissance, photo, adresse du domicile, nom de son école, numéro de téléphone d'un parent.</li>
<li>La liste des inscrits, avec le nom, la photo et la date de naissance de chaque enfant, sera affichée sur la page publique du tournoi, visible par tous.</li>
<li>Pour modifier le site, je me connecte à l'espace administrateur avec le mot de passe « hand13 ». C'est le même que pour ma messagerie : il est plus facile à retenir.</li>
</ul></div>

<p class="q"><b>Question 5</b> <span class="pts">(3 points)</span> : avant de mettre la page en ligne, le président du club vous demande votre avis. À l'aide du document 3 et de vos connaissances, relever trois problèmes de sécurité ou de protection des données personnelles, puis proposer pour chacun une amélioration en la justifiant.<br>Une réponse rédigée d'au moins six lignes est attendue. La qualité de la rédaction sera évaluée.</p>`
      }
    ],
    annexe: `<p class="q"><b>Question 1 b)</b> : numéroter de 1 à 4, dans l'ordre, les échanges qui permettent d'afficher la page http://www.handball-exemple.fr/tournoi sur le smartphone du parent.</p>
<table class="tab"><tr><th>Échange</th><th>Numéro</th></tr>
<tr><td>Le serveur web envoie au smartphone la page « tournoi », découpée en paquets.</td><td class="vide"></td></tr>
<tr><td>Le smartphone demande au serveur DNS : « Quelle est l'adresse IP de www.handball-exemple.fr ? »</td><td class="vide"></td></tr>
<tr><td>Le smartphone envoie au serveur 203.0.113.25 une requête HTTP : « Envoie-moi la page tournoi. »</td><td class="vide"></td></tr>
<tr><td>Le serveur DNS répond : « 203.0.113.25 ».</td><td class="vide"></td></tr></table>`,
    corrige: [
      {
        titre: "Le tournoi du club de handball",
        html: `<div class="rep"><p class="rq"><b>Question 1.</b> Adresse de la page, échanges, client.</p>
<p><b>a)</b> Le protocole est <b>HTTP</b> (sans « s » : les échanges ne sont pas chiffrés). Le nom de domaine est <b>www.handball-exemple.fr</b> ; « /tournoi » est le chemin de la page.</p>
<p><b>b)</b> 1 : le smartphone demande au serveur DNS l'adresse IP de www.handball-exemple.fr ; 2 : le DNS répond 203.0.113.25 ; 3 : le smartphone envoie la requête HTTP au serveur web ; 4 : le serveur web envoie la page en paquets. Dans l'ordre des lignes de l'annexe : <b>4 – 1 – 3 – 2</b>.</p>
<p><b>c)</b> Le <b>smartphone</b> est le client : c'est lui qui demande un service (l'adresse IP au DNS, puis la page au serveur web) ; les serveurs répondent.</p>
<p class="bareme">a) 0,5 point ; b) 1 point (0,5 si une seule inversion) ; c) 0,5 point.</p>
<p class="piege"><b>Piège :</b> le DNS ne fournit pas la page : il traduit le nom de domaine en adresse IP, comme un annuaire. Sans lui, le smartphone ne saurait pas à quel serveur envoyer sa requête : il intervient donc en premier.</p></div>

<div class="rep"><p class="rq"><b>Question 2.</b> Paquets, box, reconstitution de la photo.</p>
<p class="calc">a) 3 Mo = 3 × 1 000 000 = 3 000 000 octets ; 3 000 000 ÷ 1 500 = 2 000 paquets</p>
<p><b>b)</b> Le <b>routeur</b> : il relie le réseau local du club-house à Internet (la box contient aussi un commutateur et un point d'accès Wi-Fi).</p>
<p><b>c)</b> Chaque paquet contient, en plus d'un morceau de la photo, l'adresse IP de l'expéditeur, celle du destinataire et un <b>numéro d'ordre</b>. À l'arrivée, le protocole <b>TCP</b> vérifie que tous les paquets sont arrivés, fait renvoyer ceux qui manquent et les remet dans l'ordre grâce à leur numéro : la photo est reconstituée.</p>
<p class="bareme">a) 0,5 point ; b) 0,5 point ; c) 1 point.</p>
<p class="piege"><b>Piège :</b> 3 Mo ne font pas 3 000 octets. Ne pas confondre IP (qui achemine chaque paquet de routeur en routeur) et TCP (qui contrôle et remet dans l'ordre).</p></div>

<div class="rep"><p class="rq"><b>Question 3.</b> Délai et budget des 36 médailles.</p>
<p class="calc">Nombre de plateaux : 36 ÷ 9 = 4 plateaux</p>
<p class="calc">Durée : 4 × 3 h 30 min = 14 h ; temps disponible : 8 h + 8 h = 16 h ; 14 h ≤ 16 h</p>
<p class="calc">Masse : 36 × 6 g = 216 g = 0,216 kg ; coût : 0,216 kg × 20 €/kg = 4,32 € ≤ 5 €</p>
<p>Les médailles seront prêtes à temps : deux plateaux le mercredi et deux le samedi (2 × 3 h 30 min = 7 h ≤ 8 h chaque jour). Le PLA coûte 4,32 €, ce qui respecte le budget de 5 €.</p>
<p class="bareme">1 point pour le délai (nombre de plateaux et comparaison) ; 1 point pour le budget (masse, conversion et comparaison).</p>
<p class="piege"><b>Piège :</b> calculer 36 × 3 h 30 min : cette durée est celle d'un plateau de 9 médailles. Oublier de passer en kilogrammes : 216 × 20 donnerait 4 320 €.</p></div>

<div class="rep"><p class="rq"><b>Question 4.</b> Impression 3D ou moulage ?</p>
<p>Pour 36 médailles, le moulage coûterait 600 + 36 × 0,20 = 607,20 €, contre 4,32 € de PLA en impression 3D : le prix du moule n'est pas rentable pour si peu de pièces. L'impression 3D, une fabrication additive, n'a pas besoin de moule : elle convient aux petites quantités. Pour des dizaines de milliers de médailles, le prix du moule est réparti sur un très grand nombre de pièces et le moulage est rapide, alors que l'impression 3D serait beaucoup trop lente (3 h 30 min pour seulement 9 médailles).</p>
<p class="bareme">0,5 point pour la petite série (calcul ou argument du moule) ; 0,5 point pour la grande série (coût réparti, rapidité).</p></div>

<div class="rep"><p class="rq"><b>Question 5.</b> Question ouverte : sécurité et données personnelles.</p>
<p><b>Problèmes et améliorations attendus</b> (trois suffisent) : site en <b>HTTP</b>, donc échanges non chiffrés → passer en <b>HTTPS</b> ; mot de passe « hand13 » court, facile à deviner et réutilisé → mot de passe long (au moins 12 caractères), varié, différent pour chaque compte, et <b>double authentification</b> ; <b>données personnelles</b> d'enfants (nom, photo, date de naissance) publiées pour tous → ne publier que le prénom et l'équipe, avec l'accord des parents, ou réserver la liste aux familles ; données inutiles demandées (adresse du domicile, école) → ne demander que ce qui sert au tournoi.</p>
<div class="exemple-redige">La page d'inscription présente plusieurs problèmes. D'abord, elle utilise le protocole HTTP : les adresses et les numéros de téléphone saisis par les familles circulent sans être chiffrés et pourraient être interceptés. Il faut passer au protocole HTTPS, qui chiffre les échanges entre le navigateur et le serveur. Ensuite, le mot de passe « hand13 » est trop court, facile à deviner, et il sert aussi pour la messagerie : un pirate qui le découvrirait aurait accès aux deux comptes. Le secrétaire doit choisir un mot de passe d'au moins 12 caractères, mélangeant lettres, chiffres et symboles, différent pour chaque compte, et activer la double authentification. Enfin, publier le nom, la photo et la date de naissance des enfants sur une page visible par tous expose les données personnelles de mineurs. Le club devrait n'afficher que le prénom et l'équipe, avec l'accord des parents, et ne pas demander l'adresse ni l'école, inutiles pour un tournoi : ces données sont protégées par le RGPD.</div>
<p class="bareme">0,5 point par problème repéré avec une amélioration justifiée (1,5 point) ; 0,5 point pour le vocabulaire du cours (chiffrement, HTTPS, données personnelles, double authentification, RGPD) ; 1 point pour la maîtrise de la langue.</p>
<p class="valorise"><b>On valorise :</b> la mention du RGPD et de la CNIL, et une réponse organisée « problème, risque, solution ».</p>
<p class="piege"><b>Piège :</b> croire que HTTPS règle tout : il chiffre les échanges, mais il ne protège ni un mot de passe trop faible, ni des données que le club publie lui-même.</p></div>`
      }
    ],
    methode: `<ol class="etapes">
<li><b>Décomposer une URL.</b> Le protocole est avant « :// » (HTTP, ou HTTPS si les échanges sont chiffrés) ; le nom de domaine suit, jusqu'au « / » suivant ; la suite est le chemin de la page.</li>
<li><b>Suivre les échanges sur le schéma.</b> Le DNS intervient toujours en premier : il traduit le nom de domaine en adresse IP. Viennent ensuite la requête au serveur web, puis la réponse en paquets. Le client est l'appareil qui demande, le serveur celui qui répond.</li>
<li><b>Calculer un nombre de paquets.</b> Convertir la taille en octets (1 Mo = 1 000 000 octets), puis diviser par la taille d'un paquet. Rappeler ce que contient un paquet (adresses IP de l'expéditeur et du destinataire, numéro d'ordre) et le rôle de TCP.</li>
<li><b>Enchaîner les calculs des médailles.</b> Nombre de plateaux → durée totale → comparaison avec le temps disponible ; masse totale → conversion en kilogrammes → coût → comparaison avec le budget. Finir chaque calcul par une phrase de conclusion.</li>
<li><b>Choisir un procédé de fabrication.</b> Comparer le coût total pour 36 pièces, puis raisonner sur une grande série : un moule coûte cher, mais son prix se répartit sur des milliers de pièces ; l'impression 3D est faite pour les petites quantités.</li>
<li><b>Rédiger la question ouverte.</b> Un paragraphe par problème : citer le document (« le mot de passe hand13… »), expliquer le risque, proposer l'amélioration avec le mot juste du cours (HTTPS, chiffrement, double authentification, données personnelles, RGPD).</li>
<li><b>Gérer les 30 minutes.</b> Environ 15 minutes pour les questions 1 à 4, 10 minutes pour la question 5, 5 minutes pour l'annexe et la relecture.</li>
</ol>
<p class="tip">« Problème, risque, solution » : trois phrases par point suffisent, reliées par des connecteurs (d'abord, ensuite, enfin).</p>`
  }

);
