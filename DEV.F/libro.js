let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: "${titulo}"`);
}

function mostrarLibrosLeidos() {
    console.log("\nLibros leidos")
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}

agregarLibro("El Principito");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();