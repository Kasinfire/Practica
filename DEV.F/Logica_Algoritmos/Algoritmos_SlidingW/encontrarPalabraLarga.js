/* 
Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. 
El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. 

1.Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
2.Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
3.Devuelve la palabra más larga al final del proceso.
*/

function findLongestWord(text) {
    const words = text.split(' ')
    let longestWord = ''; 
    let len = words.length;

    for (let i=0; i<len; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}


const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));