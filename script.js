function cifrarTexto() {
    let textoOriginal = document.getElementById('texto').value.toLowerCase();
    let clave = parseInt(document.getElementById('clave').value);
  
    if (textoOriginal === '' || isNaN(clave)) {
      alert('Por favor ingresa un texto y una clave válida.');
      return;
    }
  
    let textoCifrado = '';
     
    // Cifrado César con clave y XOR
    for (let i = 0; i < textoOriginal.length; i++) {
      let charCode = textoOriginal.charCodeAt(i);
  
      // Cifrado César con clave
      if (charCode >= 97 && charCode <= 122) { // Caracteres minúsculos 'a'-'z'
        charCode = ((charCode - 97 + clave) % 26) + 97;
      }
  
      // XOR con clave
      charCode = charCode ^ clave;
  
      textoCifrado += String.fromCharCode(charCode);
    }
  
    document.getElementById('resultado').value = textoCifrado;
  }
  
  function descifrarTexto() {
    let textoCifrado = document.getElementById('resultado').value.toLowerCase();
    let clave = parseInt(document.getElementById('clave').value);
  
    if (textoCifrado === '' || isNaN(clave)) {
      alert('Por favor ingresa un texto cifrado y una clave válida.');
      return;
    }
  
    let textoDescifrado = '';
  
    // Descifrado XOR con clave y César
    for (let i = 0; i < textoCifrado.length; i++) {
      let charCode = textoCifrado.charCodeAt(i);
  
      // XOR con clave
      charCode = charCode ^ clave;
  
      // Descifrado César con clave
      if (charCode >= 97 && charCode <= 122) { // Caracteres minúsculos 'a'-'z'
        charCode = ((charCode - 97 - clave + 26) % 26) + 97;
      }
  
      textoDescifrado += String.fromCharCode(charCode);
    }
  
    document.getElementById('texto').value = textoDescifrado;
  }