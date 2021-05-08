/**
 * *Elementos del documento
 */
// console.log(document.head);
// console.log(document.links);
// console.log(document.images);

/**
 **Devuelve el texto seleccionado en el document */

// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);

/**
 ** Nodos, elementos y selectores
 */

// console.log(document.getElementById('menu'));
// console.log(document.querySelector('.cards'));
// console.log(document.querySelectorAll('.cards'));

/**
 ** Atributos y Data-attributes
 */
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));

// const $linkDOM = document.documentElement.querySelector('.link-dom');
// console.log($linkDOM.setAttribute('rel', 'noopener'));
// console.log($linkDOM.hasAttribute('rel'));
// $linkDOM.removeAttribute('rel');
// //Data-attributes
// console.log($linkDOM.dataset.description);

/**
 ** Estilos y variables CSS
 */

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log(getComputedStyle($linkDOM));
// $linkDOM.style.backgroundColor = 'yellow';
// $linkDOM.style.setProperty('background-color', 'pink');
// console.log($linkDOM.style.backgroundColor);
// console.log(getComputedStyle($linkDOM).getPropertyValue('background-color'));

/**
 ** Variables CSS - Custom properties CSS
 */

const $html = document.documentElement;
const $body = document.body;

// let darkColor = getComputedStyle($html).getPropertyValue('--dark-color');
// let yellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
// console.log(darkColor, yellowColor);

// $html.style.backgroundColor = darkColor;
// $html.style.color = yellowColor;

/**
 ** Clases CSS
 */

const $card = document.querySelector('.card');
const $emoji = document.querySelector('.emoji');
// console.log($card.classList);
// console.log($card.classList.contains('rotate-45'));
// $card.classList.add('rotate-360');
// $card.classList.remove('rotate-45');
// $card.classList.replace('rotate-360', 'rotate-45');

// setInterval(() => {
//   //   $body.classList.toggle('dark-mode');
//   //   $card.classList.toggle('rotate-45');
//   //   $emoji.classList.toggle('emoji');
// }, 1000);

/**
 ** Texto y  HTML
 */

// const $parrafo = document.getElementById('que-es');
// $parrafo.innerText = '<h1>Hola</h1>';
// $parrafo.textContent = '<h1>Hola</h1>';
// $parrafo.innerHTML = '<h1>Hola</h1>';
// $parrafo.outerHTML = '<h1>Hola</h1>';

/**
 ** Recorriendo el DOM - DOM Traversing
 */

// console.log($card.firstElementChild);
// console.log($card.lastElementChild);
// console.log($card.parentElement);
// console.log($card.children);
// console.log($card.nextElementSibling);
// console.log($card.children[1].closest('input'));

/**
 ** Creando elementos y Fragmentos
 */

// const $figure = document.createElement('figure');
// const $img = document.createElement('img');
// const $figcaption = document.createElement('figcaption');
// const $figcapText = document.createTextNode('Animal Dinamic');
const $cards = document.querySelector('.cards');

// $img.setAttribute('src', 'https://placeimg.com/200/200/animals');
// $img.setAttribute('alt', 'Animals');
// $figure.classList.add('card');
// $figcaption.appendChild($figcapText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// const $figure2 = document.createElement('figure');
// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/day" alt="Dias">
// <figcation>Dias</figcaption>`;

// $figure2.classList.add('card');
// $cards.appendChild($figure2);
// document.write('<h2>Continentes</h2>');
// const continentes = ['Africa', 'Europa', 'América', 'Asia', 'Oceanía'];
// const $ul = document.createElement('ul');
// document.body.appendChild($ul);
// continentes.forEach((element) => ($ul.innerHTML += `<li>${element}</li>`)); //Exige más rendimiento

// //Fragmentos
// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
// const $ul2 = document.createElement('ul');
// const $fragment = document.createDocumentFragment();

// meses.forEach((element) => {
//   const $li = document.createElement('li');
//   $li.textContent = element;
//   $fragment.appendChild($li);
// });

// document.write('<h2>Meses</h2');
// $ul2.appendChild($fragment);
// document.body.appendChild($ul2);

/**
 ** Templates HTML
 */
// const $template = document.getElementById('template-card').content;
// const $fragment = document.createDocumentFragment();
// const cardContent = [
//   {
//     title: 'Tecnología',
//     img: 'https://placeimg.com/200/200/tech'
//   },
//   {
//     title: 'Animales',
//     img: 'https://placeimg.com/200/200/animals'
//   },
//   {
//     title: 'Arquitectura',
//     img: 'https://placeimg.com/200/200/arch'
//   },
//   {
//     title: 'Gente',
//     img: 'https://placeimg.com/200/200/people'
//   },
//   {
//     title: 'Naturaleza',
//     img: 'https://placeimg.com/200/200/nature'
//   }
// ];

// cardContent.forEach((element) => {
//   $template.querySelector('img').setAttribute('src', element.img);
//   $template.querySelector('img').setAttribute('alt', element.title);
//   $template.querySelector('figcaption').textContent = element.title;
//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

/**
 ** Modificando elementos
 */
// const $newCard = document.createElement('figure');
// $contentCard = `
// <img src="https://placeimg.com/200/200/any">
// <figcaption></figcaption>`;
// $newCard.insertAdjacentHTML('beforeend', $contentCard);
// $newCard.querySelector('figcaption').insertAdjacentText('beforeend', 'Any');
// $newCard.classList.add('card');
// $cards.insertAdjacentElement('afterbegin', $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard); //! Metodos nativos de JS/

//*Handler Events - Manejadores de eventos

function saludar(nombre = 'Desconocido') {
  alert(`Hola ${nombre}!`);
  console.log(event);
}

//* Manejador semántico
const btn1 = document.getElementById('btn-semantic');
btn1.onclick = (e) => {
  alert('Manejador semántico');
  console.log(e);
};

//* Eventos multiples
const btn2 = document.getElementById('btn-multiple');
btn2.addEventListener('click', saludar);

btn2.addEventListener('click', () => {
  console.log('Eventos multiples pa🤑');
});

//* Eventos con parametros

btn2.addEventListener('click', () => saludar());

//* Removiendo eventos

const btn3 = document.getElementById('btn-remove');

const removeEvent = (e) => {
  console.log(`Removiendo evento de tipo ${e.type}`);
  btn3.removeEventListener('dblclick', removeEvent);
  btn3.disabled = true;
};

btn3.addEventListener('dblclick', removeEvent);

//*Flujo de eventos: burbuja
//* StopPropagation y prevenDefault

function flujoEvent(e) {
  console.log(`Hola, soy ${this}, evento originado en ${e.target.className}`);
  e.stopPropagation();
}

$divs = document.querySelectorAll('.eventos-flujo div');
$link = document.querySelector('.eventos-flujo div a');
// $divs.forEach((div) => {
//   div.addEventListener('click', flujoEvent, {
//     capture: false
//     // once: true
//   });
// });

// $link.addEventListener('click', (e) => {
//   alert('Irás a Google!');
//   e.preventDefault();
//   e.stopPropagation();
// });

//* DELEGACIÓN DE EVENTOS

// document.addEventListener('click', (e) => {
//   console.log(`Click en ${e.target}`);
//   if (e.target.matches('.eventos-flujo div')) {
//     flujoEvent(e);
//   }
// });

document.addEventListener('click', function (e) {
  e.target.matches('.eventos-flujo div')
    ? flujoEvent(e)
    : console.log(`Click en ${e.target.localName}`);
});
