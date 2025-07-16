import { PI } from "./constantes.js";

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