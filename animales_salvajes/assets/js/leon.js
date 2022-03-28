// Importando clase padre

import Animal from "./animal.js";

// Creando y exportando clase hija

export default class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {   
        this.setSonido("assets/sounds/Rugido.mp3");
    }
}