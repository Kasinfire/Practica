/*
Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo.
Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.

Crea un arreglo vacío llamado listaDeCompras.
Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
Implementa una función mostrarLista() que imprima todos los productos de la lista.
Asegúrate de que no haya productos duplicados en la lista.
*/

const listaDeCompras =[];

function agregarProducto(producto) {
    listaDeCompras.push(producto);
}

function eliminarProducto(producto) {
    const indice = listaDeCompras.indexOf(producto);
    if(indice != -1){
        listaDeCompras.splice(indice, 1);
    }
}

function mostrarLista(listaDeCompras){
    let productos = [... new Set(listaDeCompras)];
    return productos;
}

export { listaDeCompras, eliminarProducto, mostrarLista, agregarProducto };
