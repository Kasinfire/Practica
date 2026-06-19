/*
Eres el encargado de gestionar los datos de una tienda online. 
Tienes un listado de productos con información como nombre, precio y categoría. 
Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
4.Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
5.Muestra los resultados de la aplicación de cada métiodo en consola.
6.(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
*/

const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const nombreProductos = productos.map(function (productos) {
  return productos.nombre;
});

const productosBaratos = productos.filter(function (producto) {
  return producto.precio < 100;
});

const productosOrdenados = [...productos].sort(function (a, b) {
  return a.nombre.localeCompare(b.nombre);
});

const costoTotalInventario = productos.reduce(function (acumulador, producto) {
  return acumulador + producto.precio;
}, 0);

console.log("=== 1. Nombres de todos los productos ===");
console.log(nombreProductos);

console.log("\n=== 2. Productos que cuestan menos de $100 ===");
console.log(productosBaratos);

console.log("\n=== 3. Productos ordenados de la A a la Z ===");
console.log(productosOrdenados);

console.log("\n=== 4. Costo Total del Inventario (Método Opcional) ===");
console.log(`Total: $${costoTotalInventario}`);