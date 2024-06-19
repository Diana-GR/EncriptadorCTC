
let clave; 
function obtenerClave() { 

  clave = parseInt(document.getElementById('clave').value);
   if (isNaN(clave)) { 
    alert('Por favor ingresa una clave válida.'); 
    return false; } return true; 
  }

  function habilitarBotones() {
    let texto = document.getElementById('texto').value.trim();
    let claveInput = document.getElementById('clave').value.trim();
    let resultado = document.getElementById('resultado').value.trim();
  
    // Verificar si ambos campos tienen contenido y la clave es un número válido
    if (texto !== '' && claveInput !== '' ) {
      document.getElementById('cifrar').removeAttribute('disabled');
     // document.getElementById('descifrar').removeAttribute('disabled');
    } else if( claveInput !== '' && resultado !== '' ) {

     // document.getElementById('cifrar').setAttribute('disabled', 'disabled');
      document.getElementById('descifrar').removeAttribute('disabled');
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
     
    // Cifrado César con clave y XOR
    for (let i = 0; i < textoOriginal.length; i++) {
      let letra = textoOriginal.charCodeAt(i);  //su valor en ascci de la letra en posicion i
  
      // Cifrado César con clave
      if (letra >= 97 && letra <= 122) { // Caracteres minúsculos 'a'-'z'
        letra = ((letra - 97 + clave) % 26) + 97;  
      }
  
      // XOR con clave
      letra = letra ^ clave;  //0110 1010    //104  en bin  0110 1000
  
     textoCifrado += String.fromCharCode(letra);  //reemplaza el valor ascii por la letra correspondiente y lo concatenamos
    }
  
    document.getElementById('resultado').value = textoCifrado;
  }
  
  function descifrarTexto() {
    let textoCifrado = document.getElementById('resultado').value.toLowerCase();
    if (!obtenerClave()) return;
    if (textoCifrado === '') {
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