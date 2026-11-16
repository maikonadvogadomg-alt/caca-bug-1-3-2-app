// service-worker.js — gerado pelo Mini SK em 16/11/2026, 14:19:56
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-caca-bug-';
const CACHE = PREFIXO + 'mwjj3w35';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./css/app.css",
  "./favicon.ico",
  "./ferramentas/ai-code-studio.js",
  "./ferramentas/analisador-universal.js",
  "./ferramentas/cirurgiao.js",
  "./ferramentas/gerador-eas.js",
  "./ferramentas/limpador.js",
  "./ferramentas/Meu-Chat/css/app.css",
  "./ferramentas/Meu-Chat/icons/icon-192.png",
  "./ferramentas/Meu-Chat/icons/icon-512.png",
  "./ferramentas/Meu-Chat/index.html",
  "./ferramentas/Meu-Chat/js/00-base.js",
  "./ferramentas/Meu-Chat/js/10-banco.js",
  "./ferramentas/Meu-Chat/js/20-provedores.js",
  "./ferramentas/Meu-Chat/js/30-memoria.js",
  "./ferramentas/Meu-Chat/js/33-contextos.js",
  "./ferramentas/Meu-Chat/js/34-guia.js",
  "./ferramentas/Meu-Chat/js/35-jeito.js",
  "./ferramentas/Meu-Chat/js/40-voz.js",
  "./ferramentas/Meu-Chat/js/50-internet.js",
  "./ferramentas/Meu-Chat/js/60-previa.js",
  "./ferramentas/Meu-Chat/js/70-texto.js",
  "./ferramentas/Meu-Chat/js/80-chat.js",
  "./ferramentas/Meu-Chat/js/85-config.js",
  "./ferramentas/Meu-Chat/js/87-cofre.js",
  "./ferramentas/Meu-Chat/js/90-backup.js",
  "./ferramentas/Meu-Chat/js/95-ponte-lab.js",
  "./ferramentas/Meu-Chat/js/99-app.js",
  "./ferramentas/Meu-Chat/js/lib/cofre-arquivo.js",
  "./ferramentas/Meu-Chat/js/lib/guia-maikon.js",
  "./ferramentas/Meu-Chat/js/lib/guia-versoes.js",
  "./ferramentas/Meu-Chat/js/lib/jszip.min.js",
  "./ferramentas/Meu-Chat/LEIA-ME.txt",
  "./ferramentas/Meu-Chat/manifest.json",
  "./ferramentas/Meu-Chat/sw.js",
  "./ferramentas/Meu-Chat/voz-francisco.py",
  "./ferramentas/montar.py",
  "./ferramentas/ordem.txt",
  "./ferramentas/perito.js",
  "./ferramentas/projeto-lab.js",
  "./ferramentas/triagem.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/maskable.svg",
  "./index.html",
  "./js/00-core.js",
  "./js/20-zip.js",
  "./js/30-projeto.js",
  "./js/40-ferramentas.js",
  "./js/45-organizar.js",
  "./js/50-relatorios.js",
  "./js/60-comparar.js",
  "./js/70-ia.js",
  "./js/99-app.js",
  "./js/lib/expo-core.js",
  "./js/lib/organizar-core.js",
  "./js/lib/plano-core.js",
  "./LEIA-ME.md",
  "./lib/diff-LICENSE.txt",
  "./lib/diff.min.js",
  "./lib/jszip-LICENSE.md",
  "./lib/jszip.min.js",
  "./manifest.json",
  "./sw.js"
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index
      if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
