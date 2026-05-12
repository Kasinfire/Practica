let frutas = ["Uva", "Mango", "Sandía", "Mandarina", "Mandarina", "Uva", "Sandía", "Mandarina" ];
let conteoFrutas ={};

for (var i=0; i < frutas.length; i++ ) {
    let frutaActual = frutas[i];
    if (conteoFrutas[frutaActual]){
        conteoFrutas[frutaActual] = conteoFrutas[frutaActual] + 1;
    }else {
        conteoFrutas[frutaActual] = 1;
    }
}

console.log("Con for: ", conteoFrutas);

let conteoFrutas2 ={};
let j=0;
while(j <frutas.length) {
    let frutaActual = frutas[j];
    if (conteoFrutas2[frutaActual]){
        conteoFrutas2[frutaActual] = conteoFrutas2[frutaActual] + 1;
    }else {
        conteoFrutas2[frutaActual] = 1;
    }
    j++;
}

console.log("Con while: ",conteoFrutas2);


