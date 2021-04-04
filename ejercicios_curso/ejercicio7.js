class Pelicula{
    static generos = [
        'Acción', 'Drama',
        'Terror', 'Aventura',
    ];
    constructor({id, titulo, director, anio, pais, genero, nota}){
        this.validarId(id);
        this.validarTitle(titulo);
        this.validarDirector(director);
        this.validarAnio(anio);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarNota(nota);
    }
    validarId(id){
        if (!/^([a-z]){2}([0-9]){7}$/.test(id)) console.error('Error');
        this.id = id;
    }
    
    validarTitle(titulo){
        if(typeof titulo !== 'string') return `'${titulo}' No es una cadena`;
        if(titulo.length > 100) return 'El titulo no debe superar los 100 carácteres';
        this.titulo = titulo;
    }

    validarDirector(director){
        if(typeof director !== 'string') return `'${director}' No es una cadena`;
        if(director.length > 50) return 'El titulo no debe superar los 50 carácteres';
        this.director = director;
    }

    validarAnio(anio){
        if(typeof anio !== 'number') return `'${anio}' No es un número`;
        if(anio.toString().length !== 4) return 'Ingresa un año válido';
        this.anio = anio;
    }

    validarPais(pais){
        if(!pais instanceof Array) return `'${pais}' No es un arreglo`;
        this.pais = pais;
    }

    validarGenero(genero = []){
        if(!genero instanceof Array) return;
        genero.forEach(element => {
            if(!Pelicula.generos.includes(element)) console.error('error de genero');
        });
        this.genero = genero;
    }

    validarNota(nota){
        if(typeof nota !== 'number') return `${nota} No es un número`;
        if(nota < 0 || nota > 10) return 'La nota debe estár entre 0 y 10';
        this.nota = nota;
    }

    getFicha(){
        let {id, titulo, director, anio, pais, genero, nota} = this;
        return `Id: ${id} Titulo: ${titulo} Director: ${director} Año: ${anio} Pais: ${pais} Genero: ${genero} Nota: ${nota}`
    }

    static getGeneros(){
        return `Los géneros válidos son: ${this.generos.join(',')}`;
    }

}

const peli = new Pelicula({
    id: 'sm12345678',
    titulo: 'Superman',
    director: 'J.J',
    anio: 1990,
    pais: ['USA'],
    genero: ['Acción', 'Aventura'],
    nota: 8.3
});

    console.log(peli);