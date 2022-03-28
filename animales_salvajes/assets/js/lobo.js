// Importando clase padre

import Animal from "./animal.js";

// Creando y exportando clase hija
export default class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        this.setSonido("assets/sounds/Aullido.mp3");
    }
}