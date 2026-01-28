/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 * - las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let p1="hola"
let p2="loha"

function palabras(p1, p2){
    if(p1.length == p2.length){
        console.log("Son del mismo tamano")
        
    }else{
        console.log("Diferente cantidad de Palabras 💀")
    }
}

palabras(p1,p2)
console.log("Esto es una prueba")