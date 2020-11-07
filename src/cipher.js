const cipher = {

  encode(offset, yourMsg) {
    const abcLength = 26; // tamanho do alfabeto
    const asciiLetterA = 65; // correspondente à primeira letra do alfabeto MAIÚSCULO no ASCII
    let finalMsg = ""; // variável que armazenará msg codificada
    
    if (!offset || !yourMsg) {
      throw new TypeError("ERRO: Campos não preenchidos ou deslocamento 0(zero)");
    } else {
      for (let p = 0; p < yourMsg.length; p++) {
        const origAscii = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
        if (origAscii >= 65 && origAscii <= 90) {
          const newAscii = (((origAscii + asciiLetterA + offset) % abcLength) + asciiLetterA); // código ASCII da letra após deslocamento
          finalMsg += String.fromCharCode(newAscii);
        } else {
          finalMsg += String.fromCharCode(origAscii);
        }
      }
      return finalMsg;
    }
  },

  decode(offset, yourMsg) {
    const abcLength = 26; // tamanho do alfabeto
    const asciiLetterA = 65; // correspondente à primeira letra do alfabeto no ASCII
    let finalMsg = ""; // variável que armazenará msg decodificada
    
    if (!offset || !yourMsg) {
      throw new TypeError("ERRO: Campos não preenchidos ou deslocamento 0(zero)");
    } else {
      for (let p = 0; p < yourMsg.length; p++) {
        const origAscii = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
        if (origAscii >= 65 && origAscii <= 90) {
          const newAscii = (((origAscii + asciiLetterA - offset) % abcLength) + asciiLetterA); // código ASCII da letra após deslocamento
          finalMsg += String.fromCharCode(newAscii);
        } else {
          finalMsg += String.fromCharCode(origAscii);
        }
      }
      return finalMsg;
    }
  }
};

export default cipher;
