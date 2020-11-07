import cipher from './cipher.js';


const btnEncoding = document.getElementById("btn-enc"); // variável botão CODIFICAR
btnEncoding.addEventListener("click", encrypt);

function encrypt() {
    const yourMsg = document.getElementById("msg").value.toUpperCase(); // msg digitada
    const offset = Number(document.getElementById("offset-key").value); // chave de deslocamento
    const finalMsg = cipher.encode(offset, yourMsg);
    document.getElementById("final-msg").innerHTML = "Sua mensagem <strong>codificada</strong> é: <br><br>" + finalMsg;
}


const btnDecoding = document.getElementById("btn-dec"); // variável botão DECODIFICAR
btnDecoding.addEventListener("click", decrypt);

function decrypt() {
    const yourMsg = document.getElementById("msg").value.toUpperCase(); // msg digitada
    const offset = Number(document.getElementById("offset-key").value); // chave de deslocamento
    const finalMsg = cipher.decode(offset, yourMsg);
    document.getElementById("final-msg").innerHTML = "Sua mensagem <strong>decodificada</strong> é: <br><br>" + finalMsg;
}
