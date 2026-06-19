/* Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. 
   Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. 
   Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.


    1. Usa un puntero al inicio del arreglo y otro al siguiente elemento.
    2.Compara las iniciales de los nombres en las posiciones de ambos punteros.
    3.Si coinciden, detén la búsqueda y devuelve los nombres.
    4.Si no coinciden, avanza ambos punteros y repite.
    5.Detén la búsqueda si recorres toda la lista sin encontrar un par.
*/

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        let inicialInicio = arr[inicio][0];
        let siguienteSiguiente = arr[siguiente][0];

        if(inicialInicio == siguienteSiguiente){
            return [arr[inicio], arr[siguiente]];
        }
        inicio++
        siguiente++
    }

    return null; 
}

console.log(encontrarPareja(invitados));
