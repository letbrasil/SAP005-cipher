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






/*  A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z

    0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
    
    65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90
*/