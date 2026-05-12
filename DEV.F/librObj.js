const miLibro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible",
    capitulos: [], 

    describirLibro: function() {
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(`Se agregó el capítulo: "${nombreCapitulo}"`);
    },

    eliminarCapitulo: function(nombreCapitulo) { 
        let indice = this.capitulos.indexOf(nombreCapitulo);

        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Se eliminó el capitulo: "${nombreCapitulo}"`);
        } else {
            console.log(`No se encontró el capítulo: "${nombreCapitulo}"`);
        }
    }
};   

miLibro.describirLibro();

miLibro.agregarCapitulo("Capítulo 1: El sombrero");
miLibro.agregarCapitulo("Capítulo 2: El asteroide B 612");
miLibro.agregarCapitulo("Capítulo 3: Los baobabs");

console.log("Capítulos actuales:", miLibro.capitulos);
miLibro.eliminarCapitulo("Capítulo 2: El asteroide B 612");
console.log("Capítulos finales:", miLibro.capitulos);