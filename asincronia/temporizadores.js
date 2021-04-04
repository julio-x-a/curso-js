console.log('Inicio');


setTimeout(() => {
    console.log('Hola');
}, 2000);

let temp = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temp); //Cancela el setInterval   