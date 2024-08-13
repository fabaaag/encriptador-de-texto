/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

*/
document.addEventListener("DOMContentLoaded", function(){
    let input_text = document.getElementById("input-text");
    let output_text = document.getElementById("texto-encriptado");
    let mensaje_vacio = document.getElementById("mensaje-vacio");

    input_text.addEventListener("input", function(){
        let texto_ingresado = input_text.value.trim();

        if(texto_ingresado===""){
            mensaje_vacio.style.display = "block";
            output_text.style.display = "none";
        }

    });
    input_text.dispatchEvent(new Event('input'));
});


function encriptarTexto(texto){
    const reemplazos = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        textoEncriptado += reemplazos[letra] || letra;
    }

    return textoEncriptado;
}
function desencriptarTexto(texto){
    const reemplazos = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    let textoDesencriptado = texto;

    for (let clave in reemplazos) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(clave, 'g'), reemplazos[clave]);
    }

    return textoDesencriptado;
}

function ingresarTextoNormal(){
    let texto_ingresado = document.getElementById("input-text").value.trim();
    let mensaje_vacio = document.getElementById("mensaje-vacio");
    let output = document.getElementById("texto-encriptado");
    if(texto_ingresado===""){
        mensaje_vacio.style.display = "block";
        output.style.display = "none";
    }else{
        let texto_encriptado = encriptarTexto(texto_ingresado);

        output.value = texto_encriptado;
        output.style.display = "block";
        mensaje_vacio.style.display = "none";
    }
}

function ingresarTextoEncriptado(){
    let texto_ingresado = document.getElementById("input-text").value;
    let texto_desencriptado = "";
    console.log(texto_ingresado);
    texto_desencriptado = desencriptarTexto(texto_ingresado);
    document.getElementById("texto-encriptado").value = texto_desencriptado;
}

function copiarTexto(){
    let textarea = document.getElementById("texto-encriptado");

    if (textarea) {
        navigator.clipboard.writeText(textarea.value)
            .then(() => alert("Texto copiado al portapapeles"))
            .catch(err => console.error("Error al copiar texto: ", err));
    } else {
        console.error("Elemento textarea no encontrado.");
    }
}