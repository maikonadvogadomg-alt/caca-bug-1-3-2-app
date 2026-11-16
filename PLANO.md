# 📋 Plano do projeto: Caca-Bug-1-3 (2)

_Gerado em 16/11/2026, 14:18:16 — sem IA, lendo os arquivos._

## 📊 Visão geral
| Item | Valor |
|---|---|
| Arquivos | 62 |
| Linhas | 5.368 |
| Telas/páginas | 2 |
| Rotas do backend | 0 |
| Chamadas do app | 3 |
| Tabelas do banco | 0 |
| Variáveis de ambiente | 3 |

**Linguagens:** JavaScript (45), Imagem (4), Outros (3), CSS (2), HTML (2), JSON (2), Python (2), Markdown (2)

## 💡 O que fazer (em ordem)
1. 🧹 Tirar a Replit de 12 arquivo(s) (🏗️ Preparar → Fazer tudo)
2. 🔐 Criar um .env.example com: BASE_PATH, GITHUB_STEP_SUMMARY, PORT (os valores você coloca no servidor, nunca no código)
3. 📝 Criar um README.md explicando como rodar
4. 🚫 Criar .gitignore (não mandar node_modules ao GitHub)

## 🚀 Por onde começa
- `Caca-Bug-1-3/ferramentas/Meu-Chat/index.html`
- `Caca-Bug-1-3/index.html`

## 📱 Telas e páginas
| Endereço | Arquivo |
|---|---|
| `Caca-Bug-1-3/ferramentas/Meu-Chat/index.html` | Caca-Bug-1-3/ferramentas/Meu-Chat/index.html |
| `Caca-Bug-1-3/index.html` | Caca-Bug-1-3/index.html |

## 🖥️ Rotas do backend
_Nenhum encontrado._

## 📡 O que o app pede ao servidor
| Método | Endereço | Onde |
|---|---|---|
| POST | `/models/${encodeURIComponent(c.modelo)}:generateContent` | Caca-Bug-1-3/ferramentas/cirurgiao.js |
| POST | `/messages` | Caca-Bug-1-3/ferramentas/cirurgiao.js |
| POST | `/chat/completions` | Caca-Bug-1-3/ferramentas/cirurgiao.js |

## 🔌 O que falta no backend
✅ Tudo que o app chama tem rota no projeto (ou o app não usa servidor).

## 🗄️ Banco de dados
_Nenhuma tabela encontrada._

## 🔐 Variáveis de ambiente (configurar no servidor)
- `BASE_PATH`
- `GITHUB_STEP_SUMMARY`
- `PORT`

_Só os nomes. Os valores (chaves, senhas) nunca vão no código nem no GitHub._

## 🤖 IA usada
- api.openai.com
- api.groq.com
- openrouter.ai
- generativelanguage.googleapis.com
- api.anthropic.com
- console.groq.com
- platform.openai.com
- console.anthropic.com

## 🌐 Serviços de fora que ele acessa
- aistudio.google.com
- api-dashboard.search.brave.com
- api.anthropic.com
- api.deepseek.com
- api.groq.com
- api.mistral.ai
- api.openai.com
- api.perplexity.ai
- api.search.brave.com
- api.tavily.com
- api.x.ai
- app.tavily.com
- cdn.jsdelivr.net
- cdn.tailwindcss.com
- cdnjs.cloudflare.com
- console.anthropic.com
- console.groq.com
- esm.sh
- expo.dev
- fonts.googleapis.com
- fonts.gstatic.com
- generativelanguage.googleapis.com
- github.com
- google.serper.dev
- meuchat.local
- nominatim.openstreetmap.org
- ns.adobe.com
- ollama.com
- openapi.monica.im
- openrouter.ai
- pje.tjmg.jus.br
- platform.deepseek.com
- platform.openai.com
- pypi.org
- r.jina.ai
- raw.github.com
- registry.npmjs.org
- serper.dev
- stuartk.com
- stuk.github.io
- u.expo.dev
- unpkg.com
- www.google.com
- www.npmjs.com
- www.perplexity.ai

## 🧹 Arquivos com coisa da Replit
- Caca-Bug-1-3/ferramentas/analisador-universal.js
- Caca-Bug-1-3/ferramentas/cirurgiao.js
- Caca-Bug-1-3/ferramentas/Meu-Chat/js/33-contextos.js
- Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/guia-maikon.js
- Caca-Bug-1-3/ferramentas/Meu-Chat/js/lib/guia-versoes.js
- Caca-Bug-1-3/ferramentas/montar.py
- Caca-Bug-1-3/ferramentas/projeto-lab.js
- Caca-Bug-1-3/js/30-projeto.js
- Caca-Bug-1-3/js/60-comparar.js
- Caca-Bug-1-3/js/99-app.js
- Caca-Bug-1-3/js/lib/expo-core.js
- Caca-Bug-1-3/js/lib/plano-core.js

## 🔁 Roteiro para recriar fora da Replit
1. Importar o projeto no Mini SK e tocar em 🏗️ Preparar → ✅ Fazer tudo (tira a Replit, cria os arquivos que faltam).
2. Não tem backend: o site sozinho basta (Netlify ou GitHub Pages).
3. Variáveis: cadastrar 3 variável(is) no servidor (lista acima).
4. Testar a prévia; se der erro, 🤖 Mandar os erros para a IA.
5. App: 📲 Instalável (PWA), 📦 APK ou 🖥️ Desktop (.exe) pelo 🏗️ Preparar.

## 🌳 Árvore de arquivos
```
└─ 📁 Caca-Bug-1-3/
   ├─ 📁 css/
   │  └─ app.css
   ├─ 📁 ferramentas/
   │  ├─ 📁 Meu-Chat/
   │  │  ├─ 📁 css/
   │  │  │  └─ app.css
   │  │  ├─ 📁 icons/
   │  │  │  ├─ icon-192.png
   │  │  │  └─ icon-512.png
   │  │  ├─ 📁 js/
   │  │  │  ├─ 📁 lib/
   │  │  │  │  ├─ cofre-arquivo.js
   │  │  │  │  ├─ guia-maikon.js
   │  │  │  │  ├─ guia-versoes.js
   │  │  │  │  └─ jszip.min.js
   │  │  │  ├─ 00-base.js
   │  │  │  ├─ 10-banco.js
   │  │  │  ├─ 20-provedores.js
   │  │  │  ├─ 30-memoria.js
   │  │  │  ├─ 33-contextos.js
   │  │  │  ├─ 34-guia.js
   │  │  │  ├─ 35-jeito.js
   │  │  │  ├─ 40-voz.js
   │  │  │  ├─ 50-internet.js
   │  │  │  ├─ 60-previa.js
   │  │  │  ├─ 70-texto.js
   │  │  │  ├─ 80-chat.js
   │  │  │  ├─ 85-config.js
   │  │  │  ├─ 87-cofre.js
   │  │  │  ├─ 90-backup.js
   │  │  │  ├─ 95-ponte-lab.js
   │  │  │  └─ 99-app.js
   │  │  ├─ index.html
   │  │  ├─ LEIA-ME.txt
   │  │  ├─ manifest.json
   │  │  ├─ sw.js
   │  │  └─ voz-francisco.py
   │  ├─ ai-code-studio.js
   │  ├─ analisador-universal.js
   │  ├─ cirurgiao.js
   │  ├─ gerador-eas.js
   │  ├─ limpador.js
   │  ├─ montar.py
   │  ├─ ordem.txt
   │  ├─ perito.js
   │  ├─ projeto-lab.js
   │  └─ triagem.js
   ├─ 📁 icons/
   │  ├─ icon-192.png
   │  └─ icon-512.png
   ├─ 📁 js/
   │  ├─ 📁 lib/
   │  │  ├─ expo-core.js
   │  │  ├─ organizar-core.js
   │  │  └─ plano-core.js
   │  ├─ 00-core.js
   │  ├─ 20-zip.js
   │  ├─ 30-projeto.js
   │  ├─ 40-ferramentas.js
   │  ├─ 45-organizar.js
   │  ├─ 50-relatorios.js
   │  ├─ 60-comparar.js
   │  ├─ 70-ia.js
   │  └─ 99-app.js
   ├─ 📁 lib/
   │  ├─ diff-LICENSE.txt
   │  ├─ diff.min.js
   │  ├─ jszip-LICENSE.md
   │  └─ jszip.min.js
   ├─ index.html
   ├─ LEIA-ME.md
   ├─ manifest.json
   └─ sw.js
```
