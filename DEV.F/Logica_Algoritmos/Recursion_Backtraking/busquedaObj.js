/*
Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. 
La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. 
Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple. 

1.Escribe una función recursiva que busque un regalo específico en un arreglo.
2.Si el regalo se encuentra, devuelve un mensaje indicando su posición.
3.Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
*/

const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    return findGift(gifts, giftName, index+1);
}

console.log(findGift(gifts, "Muñeca")); 
console.log(findGift(gifts, "Rompecabezas"));  
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
