/*
Hoy en día, muchas personas necesitan guardar notas rápidas o recordatorios. 
Crear una aplicación para gestionar estas notas en archivos puede ser una solución útil para practicar manejo de archivos y entender cómo interactuar con el sistema de archivos en Node.js. 
La aplicación debe permitir al usuario:

    1.Crear una nueva nota y guardarla en un archivo.
    2.Leer todas las notas existentes.
    3.Eliminar una nota específica según su título.


1.Crea un archivo `gestorNotas.js`.
2.Usa el módulo `fs` para realizar las operaciones de manejo de archivos.
3.Las notas deben almacenarse en un archivo JSON llamado `notas.json`. Usa el formato JSON para guardar la información en el archivo.
4.Implementa la Funcionalidad del Programa descrita anteriormente:
5.Crear una nota: Agrega una nueva nota con un título y contenido.
6.Listar notas: Lee el archivo `notas.json` y muestra todas las notas en la consola.
7.Eliminar una nota: Borra una nota específica según su título.
*/

import { existsSync, readFileSync, writeFileSync } from "fs";

const filePath = "./notas.json";
let notas = [];

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  if (existsSync(filePath)) {
    let notasExistentes = readFileSync(filePath, "utf-8");
    notas = JSON.parse(notasExistentes);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  writeFileSync(filePath, JSON.stringify(notas, null, 2), "utf-8");
  console.log("Nota agregada con éxito.");
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (existsSync(filePath)) {
    let notasExistentes = readFileSync(filePath, "utf-8");
    notas = JSON.parse(notasExistentes);

    console.log("Tus notas guardadas son:");
    console.log(notas);
  } else {
    console.log("No hay notas guardadas.");
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (existsSync(filePath)) {
    let notasExistentes = readFileSync(filePath, "utf-8");
    notas = JSON.parse(notasExistentes);

    let notasRestantes = notas.filter((nota) => nota.titulo !== titulo);
    writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2), "utf-8");
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log("No hay notas para eliminar.");
  }
}


agregarNota("Compras", "Comprar leche y pan.");
agregarNota("Leer", "Leer un libro");
listarNotas();
eliminarNota("Compras");