import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";


let peticionApi = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((respuesta) => respuesta.json()).then((json) => {
            resolve(json);
        }).catch((error) => {
            reject(error);
        })
    })
}

let animalPreview = (() => {
    const getImage = async () => {
        const url = "http://localhost:5500/animales.json";
        const response = await fetch(url);
        const {animales} = await response.json();
        // const animalArray = data.animales;
        console.log(animales);
        
        $("#animal").change(() => {
            const animal = $("#animal").val();
            const imagenAnimal = animales
            .find((item) => item.name == animal)
            .imagen;
            $("#preview").css("background-image", `url("assets/imgs/${imagenAnimal}")`)
        })

    }
    return {
        showImage: () => {
            return getImage();
        }
    }
})();

$(() => {

    animalPreview.showImage();

    let modulo = (() => {
        let listaAnimales = [];

        let crearCard = () => {
            $("#Animales").html('');
            listaAnimales.forEach((item) => {
                $("#Animales").append(`
                    <div class="card" style="width: 14rem;">
                        <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
                        <div class="card-footer">
                            <audio controls>
                                <source src="${item.sonido}">
                            </audio>
                        </div>
                    </div>
                `)
            })
        }

        let agregar = animal => {
            listaAnimales.push(animal)
            crearCard();
        }

        return {
            agregarAnimal: animal => {
                agregar(animal);
            }
        }
    })();


    $("#btnRegistrar").click(evento => {
        evento.preventDefault();

        let nombre = $("#animal").val();
        let edad = $("#edad").val();
        let img = $("#preview").css("background-image");
        let comentarios = $("#comentarios").val();
        let sonido = "";

        switch (nombre) {
            case "Leon":
                var animal = new Leon(nombre, edad, img, comentarios, sonido);
                animal.Rugir();
            break;

            case "Lobo":
                var animal = new Lobo(nombre, edad, img, comentarios, sonido);
                animal.Aullar();
            break;

            case "Oso":
                var animal = new Oso(nombre, edad, img, comentarios, sonido);
                animal.Gruñir();
            break;

            case "Serpiente":
                var animal = new Serpiente(nombre, edad, img, comentarios, sonido);
                animal.Sisear();
            break;

            case "Aguila":
                var animal = new Aguila(nombre, edad, img, comentarios, sonido);
                animal.Chillar();
            break;
        }

        if ($("#animal").disabled) {
            alert("Debe seleccionar un animal");
        }else if ($("#edad").disabled) {
            alert("Debe seleccionar un rango de edad");
        }else if (comentarios == "") {
            alert("Debe ingresar un comentario");
        }else modulo.agregarAnimal(animal);
    })
});