export default function narrador(txtArea, btn) {
    const $txtArea = document.querySelector(txtArea); 
    document.addEventListener('click', (e) => {
        if (e.target.matches(btn)){
            let utterance = new SpeechSynthesisUtterance($txtArea.value)
            speechSynthesis.speak(utterance);
            console.log(speechSynthesis.getVoices());            
        }
    });
}