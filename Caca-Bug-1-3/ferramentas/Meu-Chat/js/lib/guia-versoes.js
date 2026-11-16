/* 🧭 Guia das VERSÕES — o que é cada app do Maikon, qual a versão atual, e COMO USAR (passo a passo).
   Uma fonte só: o painel 🧭 do Meu Chat mostra isto para ele ler, e a IA recebe o mesmo texto
   (junto do guia-maikon.js) para saber explicar. Atualizado pelo Claude a cada versão nova. */
(function () {
  'use strict';
  const ATUALIZADO = '16/11/2026';

  const APPS = [
    {
      id: 'meuchat', icone: '💬', nome: 'Meu Chat', versao: '16/11-F', onde: 'Celular e computador (abre no navegador; também vem dentro do Laboratório, do Laboratório 2 e do SK Jurídico)',
      instalador: 'Instalador-Meu-Chat-16-11-F',
      oque: 'O seu chat pessoal e o seu GUIA. Conversa com qualquer IA grátis (Gemini, Groq, OpenRouter, Ollama…), pesquisa na internet, vê fotos e prints, lê arquivos e .zip, guarda memória e fala com a voz Francisco.',
      quando: 'Para conversar, tirar dúvidas, pedir explicação de como usar os seus apps (ele sabe tudo deste guia), e para pensar junto.',
      passos: [
        'Primeira vez: ⚙️ Configurar → cole uma chave grátis (a do Gemini serve).',
        'Escreva ou toque em 🎤 para falar. ➤ envia.',
        '📷 manda foto ou print. 📎 manda arquivo ou .zip de projeto.',
        '🧠 Memória: o que você escrever ali vai junto em toda conversa.',
        '🧭 Guia (este painel): o que é cada app e como usar. O botão 🤖 Perguntar faz a pergunta por você.',
      ],
    },
    {
      id: 'juridico176', icone: '⚖️', nome: 'SK Jurídico 1.7.6 (o modelo final)', versao: '1.7.6', onde: 'Computador (.exe) — e também roda no Mini SK / Laboratório do celular com o terminal',
      instalador: 'Instalador-SK-Juridico-1.7.6-PC',
      oque: 'O SEU JURÍDICO PRINCIPAL: é o 1.7.2 que você testou e funcionou, com os consertos. Tem duas partes: a TELA e o SERVIDOR (o "motor" que fala com a IA). No .exe o servidor liga sozinho.',
      quando: 'Para trabalhar nos processos: importar o PDF do processo (até 1 GB), gerar peças, refinar, pesquisar jurisprudência com fonte, auditoria e comparador.',
      passos: [
        'No computador: instale e abra o programa — ele liga o motor sozinho.',
        '🔑 Chave própria: cole a chave (Gemini AIza… ou a nova AQ.…, Claude sk-ant-…, Groq, OpenRouter, ChatGPT, ou escreva ollama).',
        '🔄 Ver modelos: mostra os modelos que existem hoje; toque no que quiser.',
        '✏️ Prefixos: se um dia mudarem o começo das chaves, cadastre o novo ali.',
        'Botões no topo: 💬 Meu Chat · 🔗 Links (Colador com 📌 links fixos) · 🧰 Ferramentas (Mini Jurídico, Caça-Bug, Montador, 🦙 Ollama, Verificador de Citações, Calculadora) · Auditoria · Comparador.',
        'Se der "falta o servidor": o motor não ligou. Feche e abra de novo; se continuar, mande o registro.txt (pasta SK-Juridico) para o Claude.',
      ],
    },
    {
      id: 'juridicominisk', icone: '⚖️', nome: 'Jurídico Mini SK', versao: '15/11-H', onde: 'Celular (dentro do Mini SK ou do Laboratório, com o Termux) e computador',
      instalador: 'Instalador-Juridico-MiniSK-15-11-H',
      oque: 'Outra versão do jurídico, feita para rodar dentro do Mini SK. Lê o PDF na própria tela (sem servidor). Para GERAR com a IA, precisa do servidor ligado.',
      quando: 'Quando estiver só com o celular. No computador, prefira o SK Jurídico 1.7.6.',
      passos: [
        'Abra no Mini SK → 📱 Termux → ▶ Ligar tudo → 🚀 Rodar o projeto.',
        'Mesmos botões novos: 💬 Meu Chat, 🔗 Links, 🧰 Ferramentas, 🔑 chave de qualquer IA com 🔄 Ver modelos.',
        'OCR (ler PDF escaneado) só roda se você aceitar — é lento no celular.',
      ],
    },
    {
      id: 'assistente', icone: '📄', nome: 'Assistente Jurídico / Jurídico modular', versao: '15/11 (modular 12/11-I)', onde: 'Celular e computador, HTML puro (não precisa de servidor)',
      instalador: 'Instalador-Assistente-Juridico-Celular-15-11 · Instalador-Assistente-Juridico-PC-15-11',
      oque: 'O jurídico em HTML puro: Limpador (com Ollama), Processar, Editor A4, conversa por voz, 📏 Regras (a primeira é NUNCA inventar jurisprudência).',
      quando: 'Quando quiser algo leve, sem servidor.',
      passos: ['Abra o index.html (ou instale como app).', 'Limpador → "Mandar para Processar".', '⚙️ → cole a chave da IA.'],
    },
    {
      id: 'minisk', icone: '🛠️', nome: 'Mini SK', versao: '15/11-I', onde: 'Celular (APK/PWA) e computador (.exe)',
      instalador: 'Instalador-Mini-SK-15-11-I · Instalador-Mini-SK-PC-15-11-I',
      oque: 'O EDITOR principal: abrir, mexer, consertar, rodar e PUBLICAR projetos grandes (APK, site, .exe). Tem terminal de verdade.',
      quando: 'Para EDITAR e PUBLICAR. (Para olhar, comparar e aprender: Laboratório.)',
      passos: [
        '🗂 Projetos → abrir o .zip do projeto.',
        '📱 Termux (celular) ou 💻 Terminal (PC) → ▶ Ligar tudo → 🚀 Rodar o projeto.',
        '🧰 Verificar e instalar o que falta: confere Node, Python, Git, Java 17, Flask e a voz, e instala só o que falta.',
        '🗣 Ligar a voz Francisco (celular; no PC liga sozinha). 🩺 Terminal parado?: manda Ctrl+C e um teste; se caiu, liga de novo.',
        '🧩 Montar: junta várias ferramentas HTML num app só. 🚀 Publicar: APK, site, .exe.',
      ],
    },
    {
      id: 'lab', icone: '🔬', nome: 'Laboratório', versao: '15/11-Y', onde: 'Celular e computador (.exe)',
      instalador: 'Instalador-Laboratorio-15-11-Y · Instalador-Laboratorio-PC-15-11-Y',
      oque: 'O lugar de ANALISAR, COMPARAR, APRENDER e JUNTAR pedaços de códigos. Abre bem os projetos TSX (como o jurídico) na 🧪 Prévia.',
      quando: 'Para entender um projeto, comparar versões, recuperar códigos de apps velhos, juntar pedaços de vários códigos.',
      passos: [
        '📂 Projetos: importe o .zip (ou pasta). Escolha o projeto lá em cima — todas as abas usam ele.',
        '🧪 Prévia: vê a tela do projeto. 🗺️ Plano macro: resumo do projeto para a IA. ⚖️ Comparar A × B: o que mudou entre duas versões.',
        '✂️ Fatiador: corta arquivo grande em pedaços para levar à IA (exporta .md). ♻️ Recuperar: tira os códigos de um backup .json de app velho.',
        '🧬 COMBINAR (juntar pedaços): escolha funções/peças de projetos diferentes → ele traz junto o que cada peça precisa → "Montar" cria um projeto NOVO (index.html + pecas.js + FICHA.md). Os originais não mudam.',
        '🧩 GRUPOS: junte várias ferramentas HTML num grupo. O que uma ferramenta baixa vai para a 🗄 mesa, e dali você entrega para a outra (ex.: o Limpador entrega o texto para o Processar).',
        '📦 DESEMBRULHAR: acha as ferramentas escondidas DENTRO de um HTML grande (montadores, bundles) e separa cada uma num arquivo.',
        '🔍 Raio-X APK/EXE: diz como um APK ou .exe foi feito (Capacitor, Expo, PyInstaller…) e tira o que dá para aproveitar.',
        '💻 Terminal: ▶ Ligar tudo · 🚀 Rodar · 🦙 Ollama · 🗣 Voz · 🧰 Verificar e instalar · 🩺 Terminal parado?',
        '🧰 Ferramentas: Meu Chat, AI Code Studio, Colador e outras, abrindo aqui dentro.',
      ],
    },
    {
      id: 'lab2', icone: '🔬', nome: 'Laboratório 2', versao: '16/11-A', onde: 'Celular e computador (.exe, porta 7700 — abre junto com o Mini SK e o Laboratório)',
      instalador: 'Instalador-Laboratorio2-16-11-A · Instalador-Laboratorio2-PC-16-11-A',
      oque: 'O seu outro laboratório (que veio do ProjetoLens): importa o projeto e faz muita análise de uma vez — dependências, rotas de API, bugs, mapa — e manda para as 🧰 Ferramentas. Quebra menos.',
      quando: 'Para importar um projeto e ver tudo dele de uma vez; para testar no terminal de verdade; para usar as ferramentas de faxina, arrumador e numerador.',
      passos: [
        '📦 Importar Projeto: o .zip. Depois veja 📁 Explorador, 🧩 Dependências, 🔍 Analisador, 🛣️ Rotas de API.',
        '🔪 Desmontar HTML: separa um HTML único em partes. 💾 Exportar: baixa o projeto/relatório.',
        '💻 Terminal de verdade: igual ao do Laboratório (▶ Ligar tudo, 🚀 Rodar, 🦙, 🗣, 🧰, 🩺). No PC liga sozinho.',
        '🧸 Terminal de treino: só OLHA o projeto (ls, cat, grep, analyze). Não roda nada de verdade.',
        '🧰 Ferramentas: 💬 Meu Chat, 🔗 Colador, Faxina de Repetidos, Arrumador de Backups, Numerador, Preparador Universal…',
      ],
    },
    {
      id: 'aicode', icone: '🤖', nome: 'AI Code Studio', versao: '15/11-X', onde: 'Dentro do Laboratório (🧰 Ferramentas)',
      instalador: 'vem no Laboratório',
      oque: 'Chat de CÓDIGO HTML: a IA escreve o código e você vê a prévia na hora. Sabe o projeto que está aberto no Laboratório e lê este guia.',
      quando: 'Para criar ou consertar uma ferramenta HTML pequena.',
      passos: ['🧰 Ferramentas → AI Code Studio.', 'Cole a chave, peça o que quer. 📎 manda imagem, .zip ou arquivo.', '⤢ só a prévia: vê a tela grande.'],
    },
    {
      id: 'colecionador', icone: '🧰', nome: 'Colecionador de comandos', versao: '16/11-A', onde: 'Celular e computador',
      instalador: 'Instalador-Colecionador-16-11-A',
      oque: 'Guarda os comandos (Termux, PC, adb, Replit) com explicação e botão 📋 copiar. Os do seu colecionador antigo foram conferidos: são de verdade.',
      quando: 'Quando precisar de um comando e não lembrar.',
      passos: ['Escolha onde vai rodar (Termux, PC, adb…).', 'Toque em 📋 e cole no terminal.'],
    },
    {
      id: 'colador', icone: '🔗', nome: 'Colador de Links', versao: '15/11-c', onde: 'Sozinho, e dentro do Laboratório, Laboratório 2 e SK Jurídico',
      instalador: 'Colador-de-Links-15-11-c',
      oque: 'Guarda os links das suas versões e PWAs.',
      quando: 'Para achar rápido o link de cada app.',
      passos: ['🔗 Links → cole o link e o nome.', '📌 Fixar os links no arquivo: baixa um colador.html com os links DENTRO dele — mesmo se apagar tudo, eles voltam.'],
    },
    {
      id: 'cacabug', icone: '🐛', nome: 'Caça-Bug', versao: '1.3', onde: 'Celular e computador',
      instalador: 'Instalador-Caca-Bug-1-3',
      oque: 'Acha os defeitos de verdade num projeto (botão que não funciona, tela branca, erro).',
      quando: 'Quando algo quebrou e você não sabe onde.',
      passos: ['Importe o projeto e rode a análise.', '(Próxima versão: terminal de verdade e .exe, igual aos laboratórios.)'],
    },
    {
      id: 'calc', icone: '🧮', nome: 'Calculadora da Sentença · Verificador de Citações', versao: '13/11', onde: 'Celular e computador (e dentro do jurídico)',
      instalador: 'Calculadora-da-Sentenca.html · Verificador-de-Citacoes.html',
      oque: 'A Calculadora calcula SÓ pelo que a sentença manda (índices do BCB, tabela do TJMG). O Verificador confere se a jurisprudência citada existe e tem fonte.',
      quando: 'Cálculo de sentença; antes de usar qualquer julgado que uma IA citou.',
      passos: ['Cole o texto da sentença / a citação.', 'Confira sempre a fonte antes de usar.'],
    },
  ];

  const QUAL = [
    ['Trabalhar no processo (Leandro, seu pai)', 'SK Jurídico 1.7.6 no computador'],
    ['Só com o celular e precisa do jurídico', 'Jurídico Mini SK dentro do Mini SK, ou o Assistente Jurídico (HTML)'],
    ['Conversar, tirar dúvida, aprender a usar os apps', 'Meu Chat (🧭 Guia)'],
    ['Editar e publicar um projeto (APK, site, .exe)', 'Mini SK'],
    ['Entender, comparar, recuperar ou juntar pedaços de código', 'Laboratório (🧬 Combinar, 🧩 Grupos, 📦 Desembrulhar)'],
    ['Importar um projeto e ver tudo dele de uma vez', 'Laboratório 2'],
    ['Testar os três jurídicos lado a lado', 'No computador: Mini SK + Laboratório + Laboratório 2 abertos juntos'],
    ['Lembrar um comando', 'Colecionador'],
    ['Achar o link de um app', 'Colador de Links'],
    ['Algo quebrou e não sei onde', 'Caça-Bug'],
  ];

  function texto() {
    const L = ['══ VERSÕES ATUAIS E COMO USAR (atualizado ' + ATUALIZADO + ') — esta parte VALE MAIS que versões antigas citadas acima ══'];
    APPS.forEach((a) => {
      L.push('', a.icone + ' ' + a.nome + ' — versão ' + a.versao + ' · ' + a.onde + ' · instalador: ' + a.instalador);
      L.push('  O que é: ' + a.oque);
      L.push('  Quando usar: ' + a.quando);
      L.push('  Como usar: ' + a.passos.map((p, i) => (i + 1) + ') ' + p).join(' '));
    });
    L.push('', 'QUAL USAR PARA QUÊ:');
    QUAL.forEach((q) => L.push(' • ' + q[0] + ' → ' + q[1]));
    L.push('', 'Ele já disse que se acha "burro" quando não entende: NÃO é. O problema são muitas versões e nomes parecidos. Explique um passo de cada vez, com o NOME do botão e ONDE ele fica, sem pressa e sem julgamento.');
    return L.join('\n');
  }

  window.GuiaVersoes = { ATUALIZADO, APPS, QUAL, texto };
})();
