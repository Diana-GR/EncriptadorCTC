
let clave; 
let textoOriginal;
let textoCifrado;

function obtenerClave() { 
clave = parseInt(document.getElementById('clave').value);
    if (isNaN(clave)) { 
        alert('Por favor ingresa una clave válida.'); 
        return false;
    }
    return true; 
}

function cifradoCesar(letra, clave) {
    if (letra >= 97 && letra <= 122) { // Caracteres minúsculos 'a'-'z'
      return ((letra - 97 + clave) % 26) + 97;
    }
    return letra;
}

function habilitarBotones() {
    textoOriginal = document.getElementById('texto').value.trim();
    clave = parseInt(document.getElementById('clave').value.trim());
    textoCifrado = document.getElementById('resultado').value.trim();
  
        // Verifica si hay texto y clave para cifrar
    if (textoOriginal !== '' && clave !== '' ) {
      document.getElementById('cifrar').removeAttribute('disabled'); //se habilita el boton cifrar
    
      // Verifica si hay clave y texto cifrado para descifrar
    } else if( clave !== '' && textoCifrado !== '' ) {
      document.getElementById('descifrar').removeAttribute('disabled'); //se habilita el boton descifrar
    }
}

function cifrarTexto() {
  let textoOriginal = document.getElementById('texto').value.toLowerCase();
  if (!obtenerClave()) return;

    if (textoOriginal === '') {
      alert('Por favor ingresa un texto y una clave válida.');
      return;
    }
  
    let textoCifrado = '';
     
    // Ciclo para cifrar caracter por caracter
    for (let i = 0; i < textoOriginal.length; i++) {
      let letra = textoOriginal.charCodeAt(i);  //su valor en ascci de la letra en posicion i
  
      // Cifrado César con clave
      letra = cifradoCesar(letra, clave);  //la letra avanza 'clave' letras del abecedario
  
      // XOR con clave
      letra = letra ^ clave;  //realiza la operacion XOR con los valores binarios de la letra y clave
  
     textoCifrado += String.fromCharCode(letra);  //reemplaza el valor ascii por la letra correspondiente y lo concatenamos
    }
  
    document.getElementById('resultado').value = textoCifrado;
  }
  
  function descifrarTexto() {
    textoCifrado = document.getElementById('resultado').value.toLowerCase();
    if (!obtenerClave()) return;
    if (textoCifrado === '') {
      alert('Por favor ingresa un texto cifrado y una clave válida.');
      return;
    }
  
    let textoDescifrado = '';
  
    // Ciclo para cifrar caracter por caracter
    for (let i = 0; i < textoCifrado.length; i++) {
      let letra = textoCifrado.charCodeAt(i);
  
      // XOR con clave
      letra = letra ^ clave; //realiza la operacion XOR con los valores binarios de la letra y clave
  
      // Descifrado César con clave
      letra = cifradoCesar(letra, - clave + 26); //-clave para poder obtener la letra original
  
      textoDescifrado += String.fromCharCode(letra);
    }
  
    document.getElementById('texto').value = textoDescifrado;
  }