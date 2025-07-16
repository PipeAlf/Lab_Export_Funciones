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
    return (precio*cantidad);
}

export function aplicarImpuestos(total){
    return (total*IVA)+total;
}

export function aplicarDescuento(total){
    return (total-(total*DESCUENTO)).toFixed(2);
}

//! Ejercicio 5

import { ROLES } from "./usuariosConstantes.js";   

export function aplicarDescuentoPorRol(total,usuario){
    let totalF=0
    if(usuario==ROLES.ADMIN){
        totalF=total*0.8;
    }else if(usuario==ROLES.CLIENTE){
        totalF=total-(total*DESCUENTO);
    }
    return totalF;
}