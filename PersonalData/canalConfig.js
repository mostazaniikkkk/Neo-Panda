//Carga de elementos css
const css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://cdn.statically.io/gh/mostazaniikkkk/Neo-Panda/main/config.css";
document.getElementsByTagName("head")[0].appendChild(css)

//Se borran los archivos que estan en el banner
function deleteElementsById(id, type){
    switch(type){
        case "id":
            var divFile = document.getElementById(id);
            break;
        default:
            var divFile = document.querySelector(id);
    }
     // obtener el elemento div por su id
    divFile.remove(); // eliminar el elemento div
}

deleteElementsById("links-holder", "id");
//Se borra la ventana de