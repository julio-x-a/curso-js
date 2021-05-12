/**
 * Esta función se encarga de llenar un select dinamicamente con las voces disponibles
 * del navegador, a su vez narrara lo que se introduzca en el input de texto con la
 * voz del select actualmente seleccionada.
 * @param {String} inputText Representa un input de texto HTML
 * @param {String} btn Representa un input tipo button HTML
 * @param {String} select Representa el elemento select HTML
 */

export default function narrador(inputText, btn, select) {
  const $inputText = document.querySelector(inputText);
  const $select = document.querySelector(select);
  fillSelect($select);
  document.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
        let index = $select.selectedIndex;
        let utterance = new SpeechSynthesisUtterance($inputText.value);
        utterance.voice = speechSynthesis.getVoices()[index];
        speechSynthesis.speak(utterance);
    }
  });
}

function fillSelect(select) {
  let voices = [];
  speechSynthesis.addEventListener('voiceschanged', (e) => {
        voices = speechSynthesis.getVoices();
        voices.forEach((voice, index) => {
            const $option = document.createElement('option');
            $option.textContent = voice.name;
            $option.id = index;
            select.append($option);
        });
    })
}
