/*Imagina que eres parte del equipo encargado de actualizar una aplicación antigua 
  para planificar viajes. Los usuarios deben poder registrar destinos de viaje, 
  la fecha en que desean viajar, y calcular el costo total estimado del viaje en función
  de las opciones de alojamiento y transporte que elijan. 


    En primer lugar, entender el flujo básico de la aplicación existente: Registrar destinos, Calcular el costo y Mostrar el itinerario.
    Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.
    Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.
    Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.
    A continuación, deberás convertir algunas partes del código a ECMAScript(6).
    Reemplazar Funciones tradicionales por Funciones de flecha donde consideres necesario.
    Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y `const` para las que no cambiarán (como el arreglo de destinos).
    Divide el código en módulos (en archivos) para separar la lógica de gestión de viajes de la interacción con el usuario.
*/

const destinosGuardados= [];

const registrarDestino = (destino, fecha, transporte, costoEstimado) => {
    const nuevoViaje = { destino, fecha, transporte, costoEstimado };
    destinosGuardados.push(nuevoViaje);
};

const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    switch (destino.toLowerCase()) {
        case 'cancun': costoBase = 500; break;
        case 'oaxaca': costoBase = 300; break;
        case 'ciudad de mexico': costoBase = 250; break;
        default: costoBase = 400;
    }
    
    let costoTransporte = transporte.toLowerCase() === 'avion' ? 200 : 80;
    return costoBase + costoTransporte;
};

export { destinosGuardados, registrarDestino, calcularCosto };





