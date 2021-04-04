const julio = {
    nombres: "Julio Acevedo",
    edad: 23,
    sayMyName: function () {
        console.log(`Mi nombre es ${this.nombres}`);
    },
    obj: {objeto: "objeto"}
};

console.log(Object.values(julio));
console.log(typeof julio);

let edad = 18;
console.log((edad >= 18) ? "Mayor" : "Menor");




