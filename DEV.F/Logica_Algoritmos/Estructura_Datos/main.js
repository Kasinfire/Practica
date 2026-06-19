import {
  listaDeCompras,
  eliminarProducto,
  mostrarLista,
  agregarProducto,
} from "./gestionCompras.js";

agregarProducto("Manzana");
agregarProducto("Pera");
agregarProducto("Leche");
agregarProducto("Panela");
agregarProducto("Manzana");
agregarProducto("Mango");

eliminarProducto("Leche");

console.log(mostrarLista(listaDeCompras));