/**
 *
 * @param {String} txtArea Representa el input textarea HTML
 * @param {String} btn Representa el botón HTML
 * @param {String} select Representa el elemento Select HTML
 */

export default function narrador(txtArea, btn, select) {
  const $txtArea = document.querySelector(txtArea);

  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      fillSelect(select);
      let utterance = new SpeechSynthesisUtterance($txtArea.value);
      speechSynthesis.speak(utterance);
    }
  });
}

function fillSelect(select) {
  const $select = document.querySelector(select);
  const voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    console.log(voice);
    const $option = document.createElement('option');
    $option.textContent = voice.name;
    $select.appendChild($option);
  });
}
