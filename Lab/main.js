import {PI,IVA} from "./constantes.js";


//! Tarea 1 Ejercicio 1

class areaCirc{
    constructor(pi,radio){
        this.pi = pi;
        this.radio = radio;
    }

    calculoArea(){ 
        let ar=0;
        ar=this.pi*(this.radio*this.radio);
        console.log("El área del circulo es de: ",ar," cm^2 ");
    }
}

const area1 = new areaCirc(PI,2);
area1.calculoArea();

//! Tarea 2 Ejercicio 1

class Precio{
    constructor(precio,iva){
        this.precio = precio;
        this.iva = iva;
    }
    calculoIVA(){
        let tot=0;
        tot=(this.precio*this.iva)+this.precio;
        console.log("El precio con IVA del producto es de: ", tot," USD.");
    }
}

const precio1 = new Precio(50,IVA);
precio1.calculoIVA();

//! Tarea 1 Ejercicio 2

import { sumar,restar,multiplicar,areaCirculo } from "./operaciones-matematicas.js";

console.log("Suma: ",sumar(9,7));
console.log("Resta: ",restar(9,7));
console.log("Multiplicación: ",multiplicar(9,7));
console.log("Area: ", areaCirculo(9), " mm^2");