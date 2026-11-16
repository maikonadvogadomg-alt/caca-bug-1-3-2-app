/* 🧭 Painel do Guia (16/11): o que é cada app do Maikon, a versão atual e COMO USAR, passo a passo.
   🔊 lê em voz alta (voz Francisco ou a do aparelho) · 🤖 Perguntar: o chat explica aquele app. */
(function () {
  'use strict';
  const E = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function textoDe(a) { return a.nome + '. Versão ' + a.versao + '. ' + a.oque + ' Quando usar: ' + a.quando + ' Como usar: ' + a.passos.join(' '); }
  function pintar(filtro) {
    const G = window.GuiaVersoes; const corpo = MC.$('#guia-corpo'); if (!G || !corpo) return;
    const f = String(filtro || '').toLowerCase();
    const lista = G.APPS.filter((a) => !f || (a.nome + ' ' + a.oque + ' ' + a.quando + ' ' + a.passos.join(' ')).toLowerCase().includes(f));
    corpo.innerHTML =
      '<details class="guia-app" open><summary><b>🧭 Qual usar para quê</b></summary><ul>' + G.QUAL.map((q) => '<li>' + E(q[0]) + ' → <b>' + E(q[1]) + '</b></li>').join('') + '</ul></details>' +
      lista.map((a) => '<details class="guia-app" data-id="' + a.id + '"><summary><b>' + a.icone + ' ' + E(a.nome) + '</b> <span class="mudo pequeno">v' + E(a.versao) + '</span></summary>' +
        '<p><b>O que é:</b> ' + E(a.oque) + '</p><p><b>Quando usar:</b> ' + E(a.quando) + '</p><p class="mudo pequeno"><b>Onde:</b> ' + E(a.onde) + ' · <b>Instalador:</b> ' + E(a.instalador) + '</p>' +
        '<p><b>Como usar:</b></p><ol>' + a.passos.map((p) => '<li>' + E(p) + '</li>').join('') + '</ol>' +
        '<div class="linha"><button class="bt" data-ler="' + a.id + '">🔊 Ler em voz alta</button><button class="bt primario" data-perguntar="' + a.id + '">🤖 Perguntar sobre ele</button></div></details>').join('') +
      (lista.length ? '' : '<p class="mudo">Nada com "' + E(filtro) + '". Pergunte no chat.</p>') +
      '<p class="mudo pequeno">Atualizado em ' + E(G.ATUALIZADO) + '. Não é burrice se perder: são muitas versões com nomes parecidos. Vá um passo de cada vez.</p>';
  }
  function iniciar() {
    if (!MC.$('#bt-guia')) return;
    MC.$('#bt-guia').onclick = () => { pintar(MC.$('#guia-busca').value); MC.abrirPainel('painel-guia'); };
    MC.$('#guia-busca').oninput = (e) => pintar(e.target.value);
    MC.$('#painel-guia').addEventListener('click', (e) => {
      const G = window.GuiaVersoes; if (!G) return;
      const l = e.target.closest('[data-ler]'); const p = e.target.closest('[data-perguntar]');
      const a = G.APPS.find((x) => x.id === ((l && l.dataset.ler) || (p && p.dataset.perguntar)));
      if (!a) return;
      if (l) { try { MC.voz.pararFala && MC.voz.pararFala(); MC.voz.falar(textoDe(a)); } catch (err) {} }
      if (p) {
        const ent = MC.$('#entrada'); ent.value = 'Me explique, um passo de cada vez e em português simples, como eu uso o ' + a.nome + ' (versão ' + a.versao + '). Diga o nome de cada botão e onde ele fica.';
        MC.fecharPaineis(); ent.focus(); ent.dispatchEvent(new Event('input'));
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
  MC.guia = { pintar };
})();
