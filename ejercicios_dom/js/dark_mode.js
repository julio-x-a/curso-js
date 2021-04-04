const lclst = localStorage;
const $body = document.querySelector('body');

const lightMode = (btn) => {
  $body.classList.remove('body-dark');
  document.querySelector(btn).textContent = '🌚';
  lclst.setItem('theme', 'light');
};
const darkMode = (btn) => {
  $body.classList.add('body-dark');
  document.querySelector(btn).textContent = '🌞';
  lclst.setItem('theme', 'dark');
};

export default function setTheme(btn) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if ($body.classList.contains('body-dark')) {
        lightMode(btn);
      } else {
        darkMode(btn);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    if (lclst === null) lclst.setItem('theme', 'light');
    if (lclst.getItem('theme') === 'light') lightMode(btn);
    if (lclst.getItem('theme') === 'dark') darkMode(btn);
  });
}
