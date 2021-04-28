export default function getWinner(id, btn) {
    const items = document.querySelectorAll(id);
    let random;
    document.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            random = generarNumero(1, items.length);
            items.forEach(item => {
                if (parseInt(item.id) === random ){
                    return alert(`El ganador es: ${item.textContent}`);
                }
            })            
        }
    });
}

const generarNumero = (min, max) => 
Math.round(Math.random() * (max - min) + min);
