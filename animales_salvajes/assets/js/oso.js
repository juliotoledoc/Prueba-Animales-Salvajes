// Importando clase padre

import Animal from "./animal.js";

// Creando y exportando clase hija
export default class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Gruñir() {
        this.setSonido("assets/sounds/Gruñido.mp3");
    }
}