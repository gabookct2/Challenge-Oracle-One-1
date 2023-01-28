const textArea = document.querySelector(".texto");
const Mensaje = document.querySelector(".textoD");
const imgD = document.querySelector(".Desaparecer");
const copyButton = document.querySelector(".copiar");

//boton Encriptar
function btnEncriptar() {
    const textoencriptado = encriptar(textArea.value)
    Mensaje.value = textoencriptado
    textArea.value = "";
    imgD.hidden = true;
}

//boton Desencriptar
function btnDesencriptar() {
    const textodesencriptado = desencriptar(textArea.value)
    Mensaje.value = textodesencriptado
    textArea.value = ""
    imgD.hidden = true;
}

//Boton para copiar al portapapeles
copyButton.addEventListener('click', async function() {
        try {
        await navigator.clipboard.writeText(Mensaje.value);
        alert("Copiado con exito!");
     } catch (err) {
         console.error('Failed to copy text: ', err);
     }
  });
    


//funcion encriptar
function encriptar(cadenaE) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
   cadenaE = cadenaE.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaE.includes(matrizCodigo[i][0])) {
            cadenaE = cadenaE.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return cadenaE
}


//funcion desencriptar
function desencriptar(cadenaD) {
    let matrizCodigo = [["e", "enter"], ["i", "imes",], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    cadenaD = cadenaD.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (cadenaD.includes(matrizCodigo[i][1])) {
            cadenaD = cadenaD.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return cadenaD
}