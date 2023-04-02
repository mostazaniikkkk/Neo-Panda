neopanda = "NeoPanda: "
console.log(neopanda + "inicializado correctamente");

//Inicializar elementos
function isDebug(){
    var debug = false;
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    var div = document.getElementById("links-holder");
    if(div == null){
        css.href = "file:///E:/Descargas/Youtube/external/yt-text.css";
        debug = true;
    } else {
        css.href = "https://cdn.statically.io/gh/mostazaniikkkk/Neo-Panda/main/yt-text.css";
        var div = document.getElementById("links-holder"); // obtener el elemento div por su id
        console.log(neopanda + div);
        div.remove(); // eliminar el elemento div
        console.log("atata")
    }
    document.getElementsByTagName("head")[0].appendChild(css);
    return debug;
}

//Definicion debug
console.log(neopanda + "Iniciando test")
const debug = isDebug();
console.log(neopanda + "El modo debug se encuentra en " +debug);