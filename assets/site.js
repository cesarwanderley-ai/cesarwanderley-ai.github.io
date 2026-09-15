(function () {
  'use strict';

  /* menu do celular */
  var botao = document.querySelector('.abre-menu');
  var menu = document.getElementById('menu');
  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
  }

  /* WhatsApp com mensagem pronta */
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = 'https://wa.me/5569992354842?text=' + encodeURIComponent(a.dataset.wa);
  });

  /* links externos em nova aba */
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.hostname !== location.hostname) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* filtros da página de artigos */
  var filtros = document.querySelector('.filtros');
  if (filtros) {
    var itens = document.querySelectorAll('[data-temas]');
    filtros.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      filtros.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var alvo = b.dataset.filtro;
      itens.forEach(function (li) {
        li.hidden = !(alvo === 'todos' || li.dataset.temas.split('|').indexOf(alvo) !== -1);
      });
    });
  }
})();
