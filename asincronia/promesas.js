const p = new Promise((resolve, recject) => {
    setTimeout(() => {
        resolve('Datos correctos.');
    }, 3000);

    setTimeout(() => {
        recject('Error.');
    }, 3000);

});

p.then(msg => {
    console.log(msg);
}).catch(error =>{
    console.log(error);
});




