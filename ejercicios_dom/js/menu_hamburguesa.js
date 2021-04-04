export default function showPanel($btnPanel, panel, $option) {
  const doc = document;

  doc.addEventListener('click', (e) => {
    const listener = e.target;

    if (listener.matches($btnPanel) || listener.matches(`${$btnPanel} *`)) {
      doc.querySelector(panel).classList.toggle('is-active');
      doc.querySelector($btnPanel).classList.toggle('is-active');
    } else if (listener.matches($option) || listener.matches('.body *')) {
      doc.querySelector($btnPanel).classList.remove('is-active');
      doc.querySelector(panel).classList.remove('is-active');
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
