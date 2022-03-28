// Importando clase padre

import Animal from "./animal.js";

// Creando y exportando clase hija
export default class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        this.setSonido("assets/sounds/Siseo.mp3");
    }
}