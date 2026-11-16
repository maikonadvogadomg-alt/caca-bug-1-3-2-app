// service-worker.js — gerado pelo Mini SK em 16/11/2026, 14:19:46
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-caca-bug-1-3-';
const CACHE = PREFIXO + 'mwjj3ogy';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./Caca-Bug-1-3/css/app.css",
  "./Caca-Bug-1-3/favicon.ico",
  "./Caca-Bug-1-3/ferramentas/ai-code-studio.js",
  "./Caca-Bug-1-3/ferramentas/analisador-universal.js",
  "./Caca-Bug-1-3/ferramentas/cirurgiao.js",
  "./Caca-Bug-1-3/ferramentas/gerador-eas.js",
  "./Caca-Bug-1-3/ferramentas/limpador.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/css/app.css",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/icons/icon-192.png",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/icons/icon-512.png",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/index.html",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/00-base.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/10-banco.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/20-provedores.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/30-memoria.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/33-contextos.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/34-guia.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/35-jeito.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/40-voz.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/50-internet.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/60-previa.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/70-texto.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/80-chat.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/85-config.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/87-cofre.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/90-backup.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/95-ponte-lab.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/99-app.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/cofre-arquivo.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/guia-maikon.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/guia-versoes.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/jszip.min.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/LEIA-ME.txt",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/manifest.json",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/sw.js",
  "./Caca-Bug-1-3/ferramentas/Meu-Chat/voz-francisco.py",
  "./Caca-Bug-1-3/ferramentas/montar.py",
  "./Caca-Bug-1-3/ferramentas/ordem.txt",
  "./Caca-Bug-1-3/ferramentas/perito.js",
  "./Caca-Bug-1-3/ferramentas/projeto-lab.js",
  "./Caca-Bug-1-3/ferramentas/triagem.js",
  "./Caca-Bug-1-3/icons/apple-touch-icon.png",
  "./Caca-Bug-1-3/icons/icon-16.png",
  "./Caca-Bug-1-3/icons/icon-32.png",
  "./Caca-Bug-1-3/icons/icon-48.png",
  "./Caca-Bug-1-3/icons/icon-72.png",
  "./Caca-Bug-1-3/icons/icon-96.png",
  "./Caca-Bug-1-3/icons/icon-128.png",
  "./Caca-Bug-1-3/icons/icon-144.png",
  "./Caca-Bug-1-3/icons/icon-152.png",
  "./Caca-Bug-1-3/icons/icon-180.png",
  "./Caca-Bug-1-3/icons/icon-192.png",
  "./Caca-Bug-1-3/icons/icon-384.png",
  "./Caca-Bug-1-3/icons/icon-512.png",
  "./Caca-Bug-1-3/icons/icon.svg",
  "./Caca-Bug-1-3/icons/maskable-192.png",
  "./Caca-Bug-1-3/icons/maskable-512.png",
  "./Caca-Bug-1-3/icons/maskable.svg",
  "./Caca-Bug-1-3/index.html",
  "./Caca-Bug-1-3/js/00-core.js",
  "./Caca-Bug-1-3/js/20-zip.js",
  "./Caca-Bug-1-3/js/30-projeto.js",
  "./Caca-Bug-1-3/js/40-ferramentas.js",
  "./Caca-Bug-1-3/js/45-organizar.js",
  "./Caca-Bug-1-3/js/50-relatorios.js",
  "./Caca-Bug-1-3/js/60-comparar.js",
  "./Caca-Bug-1-3/js/70-ia.js",
  "./Caca-Bug-1-3/js/99-app.js",
  "./Caca-Bug-1-3/js/lib/expo-core.js",
  "./Caca-Bug-1-3/js/lib/organizar-core.js",
  "./Caca-Bug-1-3/js/lib/plano-core.js",
  "./Caca-Bug-1-3/LEIA-ME.md",
  "./Caca-Bug-1-3/lib/diff-LICENSE.txt",
  "./Caca-Bug-1-3/lib/diff.min.js",
  "./Caca-Bug-1-3/lib/jszip-LICENSE.md",
  "./Caca-Bug-1-3/lib/jszip.min.js",
  "./Caca-Bug-1-3/manifest.json",
  "./Caca-Bug-1-3/service-worker.js",
  "./Caca-Bug-1-3/sw.js",
  "./favicon.ico",
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
  "./manifest.json",
  "./PLANO.md",
  "./RECEITA.md"
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
