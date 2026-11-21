/* Permet de réviser sans connexion.

   Stratégie « réseau d'abord » : à chaque chargement, on va chercher la
   version la plus récente sur le serveur. Donc dès que tu remets le dossier
   en ligne, un simple rafraîchissement suffit pour voir les changements.

   Le cache ne sert que de filet de sécurité : plus de connexion, ou réseau
   trop lent (au-delà de 3 secondes). */

const CACHE = 'revision-brevet-v8';
const DELAI = 3000;

const FICHIERS = [
  './', 'index.html', 'style.css', 'brevet.css', 'data.js', 'app.js',
  'cours/zones.js', 'cours/francais.js', 'cours/maths-a.js', 'cours/maths-b.js',
  'cours/histoire.js', 'cours/svt.js', 'cours/svt-rappels-5e.js', 'cours/svt-rappels-4e.js', 'cours/cartes-svt.js',
  'cours/physique.js', 'cours/techno.js',
  'brevet/brevet.js',
  'examens.css', 'cartes.css', 'examens/francais.js', 'examens/maths.js', 'examens/histoire.js',
  'examens/svt.js', 'examens/physique.js', 'examens/techno.js',
  'manifest.webmanifest', 'favicon.svg', 'favicon.ico',
  'icon-192.png', 'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FICHIERS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function reseauDabord(requete) {
  const cache = await caches.open(CACHE);
  try {
    const reponse = await Promise.race([
      fetch(requete, { cache: 'no-store' }),
      new Promise((_, rejeter) => setTimeout(() => rejeter(new Error('lent')), DELAI))
    ]);
    if (reponse && reponse.ok) cache.put(requete, reponse.clone()).catch(() => {});
    return reponse;
  } catch (err) {
    const secours = await cache.match(requete) || await cache.match('./');
    if (secours) return secours;
    throw err;
  }
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(reseauDabord(e.request));
});
