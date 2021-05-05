export default function getWinner(id, btn) {
  const $items = document.querySelectorAll(id);
  let random;
  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      random = Math.floor(Math.random() * $items.length);
      alert(`El ganador es: ${$items[random].textContent}`);
    }
  });
}
