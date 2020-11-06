const cipher = {

  encode(offset, yourMsg) {
    const abcLength = 26; // tamanho do alfabeto
    const asciiLetterA = 65; // correspondente à primeira letra do alfabeto MAIÚSCULO no ASCII
    let finalMsg = ""; // variável que armazenará msg codificada
    
    if (!offset || !yourMsg) {
      throw new TypeError("ERRO: Campos não preenchidos ou deslocamento 0(zero)");
    } else {
      for (let p = 0; p < yourMsg.length; p++) {
        const initialAscii = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
        if (initialAscii >= 65 && initialAscii <=90) {
          const newAscii = (((initialAscii + asciiLetterA + offset) % abcLength) + asciiLetterA); // código ASCII da letra após deslocamento
          const showLetter = String.fromCharCode(newAscii);
          finalMsg += showLetter;
        } else {
          const newAscii = initialAscii;
          const showLetter = String.fromCharCode(newAscii);
          finalMsg += showLetter;
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
        const initialAscii = yourMsg.charCodeAt(p); // código ASCII da letra inserida sem deslocamento
        if (initialAscii >= 65 && initialAscii <=90) {
          const newAscii = (((initialAscii + asciiLetterA - offset) % abcLength) + asciiLetterA); // código ASCII da letra após deslocamento
          const showLetter = String.fromCharCode(newAscii);
          finalMsg += showLetter;
        } else {
          const newAscii = initialAscii;
          const showLetter = String.fromCharCode(newAscii);
          finalMsg += showLetter;
        }
      }
      return finalMsg;
    }
  }
};

export default cipher;
