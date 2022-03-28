// Importando clases hijas

import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";

//Método para consultar API

let peticionApi = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((respuesta) => respuesta.json()).then((json) => {
            resolve(json);
        }).catch((error) => {
            reject(error);
        })
    })
};

// Módulo IIFE para mostrar la imagen en el preview al seleccionar un animal

let animalPreview = (() => {
    const getImage = async () => {
        const { animales } = await peticionApi("http://localhost:5500/animales.json");

        $("#animal").change(() => {
            const animal = $("#animal").val();
            const imagenAnimal = animales.find((item) => item.name == animal).imagen;
            $("#preview").css("background-image", `url("assets/imgs/${imagenAnimal}")`)
        })

    }
    return {
        showImage: () => {
            return getImage();
        }
    }
})();

// Módulo IIFE que recibe las instancias para crear la tarjeta y el modal correspondiente

let tarjetaModal = (() => {
    let listaAnimales = [];
    
    window.mostrarModal = (index) => {
        let animalModal = listaAnimales[index]
        $("#exampleModal .modal-body").html("");
        $("#exampleModal .modal-body").html(`
            <img src="assets/imgs/${animalModal.img}" width="100%">
            <div class="text-center text-light">
                <p class="pt-2">${animalModal.edad}</p>
                <p>Comentarios</p>
                <hr>
                <p>${animalModal.comentarios}</p>
            </div>
        `);
        $("#exampleModal").modal("show");
    }

    let crearTarjeta = () => {
        $("#Animales").html("");
        listaAnimales.forEach((item, indice) => {
            $("#Animales").append(`
                <div class="card mx-1" style="width: 14rem;">
                    <img src="assets/imgs/${item.img}" class="card-img-top" alt="${item.nombre}" onClick="mostrarModal(${indice})">
                    <div class="card-footer">
                        <audio controls class="w-100">
                            <source src="${item.sonido}">
                        </audio>
                    </div>
                </div>
            `)
        })
    }

    let agregar = animal => {
        listaAnimales.push(animal);
        crearTarjeta();
    }

    return {
        agregarAnimal: animal => {
            agregar(animal);
        }
    }
})();

$(() => { // Función Ready

    animalPreview.showImage();

    // Funcionalidad del botón que registra animales

    $("#btnRegistrar").click(evento => {
        evento.preventDefault();

        var nombre = $("#animal").val();
        let edad = $("#edad").val();
        let comentarios = $("#comentarios").val();
        let sonido = "";

        // Declaración switch para generar la instancia correspondiente de acuerdo al animal que se selecciona

        switch (nombre) {
            case "Leon":
                var animal = new Leon(nombre, edad, "Leon.png", comentarios, sonido);
                animal.Rugir();
                break;

            case "Lobo":
                var animal = new Lobo(nombre, edad, "Lobo.jpg", comentarios, sonido);
                animal.Aullar();
                break;

            case "Oso":
                var animal = new Oso(nombre, edad, "Oso.jpg", comentarios, sonido);
                animal.Gruñir();
                break;

            case "Serpiente":
                var animal = new Serpiente(nombre, edad, "Serpiente.jpg", comentarios, sonido);
                animal.Sisear();
                break;

            case "Aguila":
                var animal = new Aguila(nombre, edad, "Aguila.png", comentarios, sonido);
                animal.Chillar();
                break;
        }

        // Validando que todos los campos contengan información antes de registrar un animal

        if (nombre && edad && comentarios) {
            tarjetaModal.agregarAnimal(animal);
        } else {
            alert("Faltan datos por llenar")
        }

        // Limpiando el formulario

        $("#animal option:first").prop("selected", "selected");
        $("#edad option:first").prop("selected", "selected");
        $("#comentarios").val("");
        $("#preview").css("background-image", `url("assets/imgs/lion.svg")`)
    })
});