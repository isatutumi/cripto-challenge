function codificar(texto) {
    texto = texto.toLowerCase(); 
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function decodificar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function codificarTexto() {
    let texto = document.getElementById("texto").value;
    if (!textareaVazio()) {
    let textoCodificado = codificar(texto);
    exibirResultado(textoCodificado);
    mostrarBotaoCopiar();
    }
}

function decodificarTexto() {
    let texto = document.getElementById("texto").value;
    if (!textareaVazio()) {
    let textoDecodificado = decodificar(texto);
    exibirResultado(textoDecodificado);
    mostrarBotaoCopiar();
    }
}

function exibirResultado(texto) {
    let resultadoSection = document.getElementById("resultado");
    let h2 = resultadoSection.querySelector("h2");
    let p = resultadoSection.querySelector("p");

    if (texto) {
        h2.textContent = "";
        p.textContent = texto;
    } else {
        h2.textContent = "Nenhuma mensagem encontrada";
        p.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}

function copiarTexto() {
    let texto = document.getElementById("resultado").querySelector("p").textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
            let botaoCopiar = document.querySelector("#resultado button");
            botaoCopiar.innerHTML = 'Copiado!';
            
            setTimeout(() => {
                botaoCopiar.textContent = "Copiar";
            }, 2000); 
        })
        .catch(err => {
            console.error("Falha ao copiar texto: ", err);
        });
}

function textareaVazio() {
    let textarea = document.getElementById("texto");
    return textarea.value.trim() === "";
}

function mostrarBotaoCopiar() {
    let botaoCopiar = document.querySelector(".copiar-oculto");
    botaoCopiar.classList.remove("copiar-oculto"); 
}

function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}