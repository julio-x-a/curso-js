export function printUpButton(btnTop) {
  const $btnTop = document.querySelector(btnTop);
  let value = $btnTop.classList.contains('btn-active');

  if (scrollY >= 1000 && !value) {
    $btnTop.classList.toggle('btn-active');
  } else if (scrollY < 1000) {
    $btnTop.classList.remove('btn-active');
  }
}

export function goTop(btnTop) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(btnTop)) {
      scrollTo(0, 0);
    }
  });
}
