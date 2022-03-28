// Creando y exportando clase padre

export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;
        this.getSonido = () => _sonido;

        this.setSonido = (nuevoSonido) => _sonido = nuevoSonido;

    }

    get nombre() {
        return this.getNombre();
    }

    get edad() {
        return this.getEdad();
    }
    
    get img() {
        return this.getImg();
    }

    get comentarios() {
        return this.getComentarios();
    }

    get sonido() {
        return this.getSonido();
    }

    set sonido(nuevo_sonido) {
        this.setSonido(nuevo_sonido);
    }
}