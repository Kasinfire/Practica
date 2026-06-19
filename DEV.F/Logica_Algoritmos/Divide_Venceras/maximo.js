/*
 Dado un arreglo de números, implementa una función que utilice el 
 enfoque Divide and Conquer para encontrar el número máximo.

1.Divide el arreglo en dos mitades.
2.Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
3.Combina las soluciones comparando los máximos de ambas mitades.
4.Devuelve el número máximo encontrado.
*/

function findMax(arr) {
    if (arr.length == 1) {
        return arr[0];
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid); 
    const right = arr.slice(mid);
    
    const leftMax = findMax(left);
    const rightMax = findMax(right)

    if(leftMax > rightMax){
        return leftMax;
    }else {
        return rightMax;
    }
}
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers));