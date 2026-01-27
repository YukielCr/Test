/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 0; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("fizzbuzz")
    } else {
        if (i % 5 == 0) {
            console.log("buzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}
// nota multiplos de 3
// \(\{0,3,6,9,12,15,18,21,24,27,30,\dots \}\)