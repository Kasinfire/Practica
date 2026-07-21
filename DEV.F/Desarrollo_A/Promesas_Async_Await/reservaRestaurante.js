const mesasDisponibles = 5; 

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesa reservada");
    } else {
        reject("No hay mesas disponibles por el momento");
    }
    }, 2000); 
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
             resolve("Correo enviado con exito!");
        } else {
            reject("El correo no se pudo enviar");
        }
        
    }, 1500); 
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); 
    console.log(disponibilidad);
    const correo = await enviarConfirmacionReserva(nombreCliente);
    console.log(correo);
  } catch (error) {
    console.log("Error:", error);
  }
}

hacerReserva("Juan Pérez", 3); 
hacerReserva("Ana López", 10);