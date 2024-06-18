# Encriptador CTC: Grupo 3

Este encriptador esta hecho con un cifrado XOR

# Tools

HTML, CSS, JavaScript y Git

# Integrantes:

Shirley Gutierrez
Diana Guzman
Adriana Vargas
Paola

# Como probar la aplicación

1. Ingresa el texto que quieras encriptar en el primer cuadro de texto
2. Ingresa un número entero natural en el segundo cuadro de texto
3. Click en 'Cifrar'

La aplicación tomará los valores binarios de cada letra ingresada en el primer cuadro de texto y el valor binario del número que ingresaste como clave, utilizará estos valores binarios para hacer una operación XOR y encriptar tu mensaje, retornando un valor binario que, al convertirlo en decimal o hexadecimal este será un valor de un caracter en la tabla ASCII, retornando así un texto legible pero sin coherencia, este es el resultado de haber encriptado un mensaje con clave XOR.
Para descifrarlo se deberá hacer el mismo procedimiento, tomando el valor binario de cada caracter del mensaje encriptado y el valor binario del número clave, realizando la operación XOR nos devolverá valores binarios que convirtiendo a hexadecimal o decimal será un caracter de la tabla ASCII que podemos interpretar, convirtiendo nuestro mensaje encriptado nuevamente a un mensae legible y comprensible.

# NOTA

Es importante aclarar que al momento de encriptar un mensaje con una clave, es importante no cambiar la clave para decifrarlo, ya que si se cambia la clave y se quiere decifrar un mensaje encriptado, este no podrá hacerlo y devolverá otros caracteres diferentes a los que eran antes de encriptarse.

Por lo tanto, la clave que se usó al encriptar debe ser la misma para poder decifrar sin problemas.
