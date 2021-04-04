function buenosDias(callback) {
    setTimeout(() => {
        console.log('Buenos días🌞');   
        callback();
    }, 1000);
}

function buenasNoches() {
    console.log('Buenas noches');
}

buenosDias(buenasNoches);

