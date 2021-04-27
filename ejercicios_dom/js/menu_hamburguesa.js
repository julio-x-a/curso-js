const toggleClass = function (element, className) {
  document.querySelector(element).classList.toggle(className);
};
const removeClass = function (element, className) {
  document.querySelector(element).classList.remove(className);
};

export default function showPanel(btnPanel, panel, option) {
  const doc = document;

  doc.addEventListener('click', (e) => {
    const listener = e.target;

    if (listener.matches(btnPanel) || listener.matches(`${btnPanel} *`)) {
      toggleClass(panel, 'is-active');
      toggleClass(btnPanel, 'is-active');
    } else if (listener.matches(option) || listener.matches('.body *')) {
      removeClass(panel, 'is-active');
      removeClass(btnPanel, 'is-active');
    }
  });
}

// const $btnPanel = document.getElementById('btn-panel');
// const $panel = document.querySelector('.panel');

// document.addEventListener('click', (e) => {
//   if (e.target === $btnPanel) showPanel();
// });

// function showPanel() {
//   $panel.classList.toggle('is-active');
// }
