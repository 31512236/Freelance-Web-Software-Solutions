//Este es un ejemplo de cómo se van a traducir los textos
const TRADUCCIONES = {
    es: {
        imgGaleria: "assets/UI/boton_galeria_es.png",
        urlGaleria: "galeria.html", //cuando queremos modificar una imagen dependiendo del idioma 
        altGaleria: "Botón Galería"
    },
    en: {
        imgGaleria: "assets/UI/boton_galeria_en.png",
        urlGaleria: "galeria.html?lang=en", // Le pasamos un truco por URL para que la siguiente página sepa que va en inglés
        altGaleria: "Gallery Button"
    }
};