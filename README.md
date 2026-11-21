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
| `app.js`, `style.css` | Le moteur et le style du site d'origine, étendus |
| `brevet.css` | Les styles des pages ajoutées |

Pour ajouter un chapitre, copier un bloc existant dans un fichier de `cours/`, puis vérifier :

```sh
node tools/check.js
```

Le site est statique : pas de compilation. Il est publié tel quel par GitHub Pages depuis la branche `main`.

Contenu ajouté rédigé d'après le programme de 3ᵉ : si le cahier emploie d'autres mots ou d'autres exemples, garder ceux du cahier.
