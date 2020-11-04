import cipher from './cipher.js';


console.log(cipher);


// Declarar variáveis para alfabeto e ASCII

const abcLength = 26; // tamanho do alfabeto
const asc1stLetter = 65; // correspondente à primeira letra do alfabeto no ASCII


const btnEncoding = document.getElementById("btn-enc"); // variável botão CODIFICAR
btnEncoding.addEventListener("click", encrypt);

function encrypt() {
    const yourMsg = document.getElementById("msg").value.toUpperCase(); // msg digitada
    const offset = Number(document.getElementById("offset-key").value); // chave de deslocamento
    let finalMsg = ""; // variável que armazenará msg codificada
        for (let p = 0; p < yourMsg.length; p++) {
            let initialAsc = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
            let newAsc = (((initialAsc + asc1stLetter + offset) % abcLength) + asc1stLetter); // código ASCII da letra após deslocamento
            let showLetter = String.fromCharCode(newAsc);
            finalMsg += showLetter;
        }
        
        document.getElementById("final-msg").innerHTML = "Sua mensagem <strong>codificada</strong> é: <br><br>" + finalMsg;
}


const btnDecoding = document.getElementById("btn-dec"); // variável botão DECODIFICAR
btnDecoding.addEventListener("click", decrypt);

function decrypt() {
    const yourMsg = document.getElementById("msg").value.toUpperCase(); // msg digitada
    const offset = Number(document.getElementById("offset-key").value); // chave de deslocamento
    let finalMsg = ""; // variável que armazenará msg decodificada
        for (let p = 0; p < yourMsg.length; p++) {
            let initialAsc = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
            let newAsc = (((initialAsc + asc1stLetter - offset) % abcLength) + asc1stLetter); // código ASCII da letra após deslocamento
            let showLetter = String.fromCharCode(newAsc);
            finalMsg += showLetter;
        }
        
        document.getElementById("final-msg").innerHTML = "Sua mensagem <strong>decodificada</strong> é: <br><br>" + finalMsg;
}






/*  A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z

    0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
    
    65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90
*/