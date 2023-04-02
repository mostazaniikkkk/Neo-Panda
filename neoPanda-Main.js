/*
const data = {
    "canales":
    {
        "canal": "watones y weones SA.",
        "customCSS": "https://cdn.statically.io/gh/mostazaniikkkk/Neo-Panda/main/config.css",
        "customJS": "",
        "customCanales": ""
    }
}

var array = Object.keys(data).map(function(key) {
    return [key, data[key]];
  });
*/
function isDebug(){
    var debug = false;
    const verificador = document.getElementById("search-form");
    if(verificador == null){
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = "file:///E:/Descargas/Youtube/external/yt-text.css";
        document.getElementsByTagName("head")[0].appendChild(css)
        debug = true;
    } else {
        console.log(neopanda + "Modo Debug Falso")
    }
    return debug;
}

function loadChannelInfo(){
    var nombreCanal = document.querySelector("#text.ytd-channel-name");
    if(nombreCanal === "watones y weones SA."){
        console.log(neopanda + nombreCanal);
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.statically.io/gh/mostazaniikkkk/Neo-Panda/main/PersonalData/canalConfig.js";
        document.getElementsByTagName("head")[0].appendChild(script)
    } else {
        console.log(neopanda + "No se ha reconocido el canal.")
    }
}

const neopanda = "NeoPanda: "
console.log(neopanda + "inicializado correctamente");
console.log(neopanda + "Iniciando test")
const debug = isDebug();
console.log(neopanda + "El modo debug se encuentra en " +debug);
