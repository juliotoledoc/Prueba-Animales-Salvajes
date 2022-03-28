// Importando clase padre

import Animal from "./leon.js";

// Creando y exportando clase hija

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        this.setSonido("assets/sounds/Chillido.mp3");
    }
}