import { destinosGuardados, registrarDestino, calcularCosto } from './viajes.js';

const mostrarItinerario = () => {
    console.log("=== Tu Itinerario de Viaje ===");
    destinosGuardados.forEach((viaje, indice) => {
        console.log(`${indice + 1}. Destino: ${viaje.destino} | Fecha: ${viaje.fecha} | Transporte: ${viaje.transporte} | Costo Estimado: $${viaje.costoEstimado}`);
    });
};

const destino1 = "Cancun";
const fecha1 = "2026-07-15";
const transporte1 = "Avion";
const costo1 = calcularCosto(destino1, transporte1);
registrarDestino(destino1, fecha1, transporte1, costo1);

const destino2 = "Oaxaca";
const fecha2 = "2026-12-05";
const transporte2 = "Autobus";
const costo2 = calcularCosto(destino2, transporte2);
registrarDestino(destino2, fecha2, transporte2, costo2);

mostrarItinerario();
