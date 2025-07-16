import { PI, DESCUENTO, IVA } from "./constantes.js";

export function sumar(a,b){
    return a + b;
}

export function restar(a,b){
    return a-b;
}

export function multiplicar(a,b){
    return a*b;
}

export function areaCirculo(radio){
    return (radio*radio*PI).toFixed(2);
}

export function calcularTotal(precio,cantidad){
    // let total=0;
    // for(let i=0;i<cantidad;i++){
    //     total+=precio;
    // }
    // return total;
    return (precio*cantidad);
}

export function aplicarImpuestos(total){
    return (total*IVA)+total;
}

export function aplicarDescuento(total){
    return (total-(total*DESCUENTO)).toFixed(2);
}