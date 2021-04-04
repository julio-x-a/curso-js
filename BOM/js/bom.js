//*Propiedades y eventos del BOM

// window.addEventListener('resize', (e) => {
//   console.clear();
//   console.log(`X: ${window.innerWidth}, Y: ${window.innerHeight}`);
// });

// window.addEventListener('scroll', (e) => {
//   console.clear();
//   console.log(`Scroll X: ${window.scrollX} Scroll Y:${window.scrollY}`);
// });

window.addEventListener('load', (e) => {
  //   console.clear();
  console.log(`${window.screenX} ${window.screenY}`);
});

document.addEventListener('DOMContenLoaded', (e) => {
  console.log(`${window.screenX} ${window.screenY}`);
});

const $btnOpen = document.getElementById('btn-open');
const $btnClose = document.getElementById('btn-close');
const $btnPrint = document.getElementById('btn-print');
let ventana;

$btnOpen.addEventListener('click', () => {
  ventana = open('https://google.com');
});
$btnClose.addEventListener('click', () => {
  ventana.close();
});
$btnPrint.addEventListener('click', () => {
  print();
});

//* Objetos: URL, Historial y Navegador

console.log(location);
console.log(history);
console.log(navigator.serviceWorker);
