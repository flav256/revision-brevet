# révision brevet

Site de révision de 3ᵉ, version « révision brevet » du site [llm révision](https://llmrevision.com/).
Il reprend son moteur, son style et ses chapitres, et ajoute trois choses :

- **Zones thématiques** : dans chaque matière, les chapitres sont rangés par grand thème du programme
  (par exemple, en maths : nombres et calculs, géométrie, fonctions, algorithmique).
  En SVT, une zone « Rappels de 5ᵉ et 4ᵉ » reprend la reproduction (animaux, végétaux, populations,
  appareils reproducteurs, formation d'un nouvel être humain).
- **Méthodes** : des fiches de savoir-faire par matière (analyser un texte, rédiger, analyser un document,
  écrire un développement construit, faire un croquis, rédiger une démonstration, exploiter un document en sciences…).
- **Révision** : 28 sessions, rangées par matière. Chaque session contient l'essentiel, un QCM interactif,
  des exercices et le corrigé (caché jusqu'à ce qu'on l'ouvre), avec des liens vers le cours et la méthode à relire.
- **Cartes mentales** (SVT) : un bouton « Carte mentale » sur chaque chapitre ouvre une carte des idées clés.
  Sur grand écran les branches rayonnent autour du chapitre ; sur téléphone et tablette en hauteur, c'est un
  arbre vertical. Mode révision : cacher les mots-clés et les retrouver. Impression en A4 paysage.
- **Examens blancs** : trois sujets par matière (français, maths, histoire-géographie-EMC, SVT,
  physique-chimie, technologie) au format des épreuves du brevet 2027, sur les chapitres du 1er trimestre.
  Chaque sujet a sa page de garde, son chronomètre, son impression, et une page de corrigé (réponses,
  explications, méthode de rédaction). En français, la dictée peut être lue par la synthèse vocale du navigateur.
- **Impression / PDF** : chaque chapitre et chaque session s'imprime sur une feuille A4 recto verso
  (rappel de cours au recto, QCM et exercices au verso ; le corrigé reste à l'écran). La taille du texte
  s'ajuste pour que chaque face tienne sur une page.

Site en ligne : https://flav256.github.io/revision-brevet/

## Organisation

| Fichier | Contenu |
| --- | --- |
| `data.js` | Les matières, évaluations et chapitres du site d'origine, sans modification |
| `cours/zones.js` | L'ordre des zones thématiques et la zone de chaque chapitre d'origine |
| `cours/*.js` | Les chapitres et fiches méthode ajoutés (`ajout: true`), une matière par fichier |
| `brevet/brevet.js` | La zone révision : sessions, QCM, corrigés et liens vers le cours |
| `examens/*.js`, `examens/img/` | Les examens blancs (un fichier par matière) et leurs images, du domaine public |
| `examens.css` | Les styles des sujets et des corrigés |
| `cours/cartes-svt.js`, `cartes.css` | Le contenu et le style des cartes mentales (une carte par chapitre, `DATA.cartes`) |
| `app.js`, `style.css` | Le moteur et le style du site d'origine, étendus |
| `brevet.css` | Les styles des pages ajoutées |

Pour ajouter un chapitre, copier un bloc existant dans un fichier de `cours/`, puis vérifier :

```sh
node tools/check.js
```

Le site est statique : pas de compilation. Il est publié tel quel par GitHub Pages depuis la branche `main`.

Format des examens blancs : note de service du 11 septembre 2026 (BO spécial n° 4 du 17 septembre 2026)
définissant les épreuves du DNB à partir de la session 2027, sujets officiels 2026 et sujets de référence Éduscol.

Contenu ajouté rédigé d'après le programme de 3ᵉ : si le cahier emploie d'autres mots ou d'autres exemples, garder ceux du cahier.
