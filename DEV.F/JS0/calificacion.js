let nota = Number(prompt("Ingresa tu calificación:"));
let resultado; 

if (nota >= 90) {
    resultado = "excelente!!!!!!!"; 
} else if (nota >= 75 && nota <= 89) {
    resultado = "bien";
}else if (nota >=60 && nota <= 74) {
    resultado = "suficiente";
}else {
    resultado = "no aprobado xd"; 
}

console.log(resultado);
alert("Saliste " + resultado);