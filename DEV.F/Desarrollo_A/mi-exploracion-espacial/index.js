const planetas = require("./planetas");
const cowsay = require("cowsay");

planetas.forEach((planeta) => {
  const message = `¡Planeta ${planeta.nombre} descubierto!\nDescripción: ${planeta.descripcion}\nDescubierto en: ${planeta.descubiertoEn}`;
  const dibujo = cowsay.say({ text: message });
  console.log(dibujo);
});

