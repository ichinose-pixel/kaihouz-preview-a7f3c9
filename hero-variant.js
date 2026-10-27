(() => {
  const manga = new URLSearchParams(location.search).get('fv') === 'manga';
  const source = manga ? 'assets/v18/01-manga.jpg' : 'assets/v18/01.jpg';
  const hero = document.querySelector('.hero');
  const first = document.querySelector('.gallery a');
  hero.src = source;
  first.href = source;
  first.querySelector('img').src = source;
  hero.alt = manga ? 'マンガ版TOP別案。O脚じゃない人は見ないでください。解放テーピングスパッツ。' : 'O脚じゃない人は見ないでください。解放テーピングスパッツ';
  document.querySelector('[data-fv="' + (manga ? 'manga' : 'standard') + '"]').setAttribute('aria-current', 'page');
})();
