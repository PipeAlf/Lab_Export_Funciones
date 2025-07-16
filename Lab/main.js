import {PI,IVA,DESCUENTO, DIAS_SEMANA} from "./constantes.js";


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

//! Tarea 3 Ejercicio 1

console.log("El tercer día de la semana es: ",DIAS_SEMANA[2]);

//! Tarea 1 Ejercicio 2

import { sumar,restar,multiplicar,areaCirculo } from "./operaciones-matematicas.js";

console.log("Suma: ",sumar(9,7));
console.log("Resta: ",restar(9,7));
console.log("Multiplicación: ",multiplicar(9,7));
console.log("Area: ", areaCirculo(9), " mm^2");

//! Ejercicio 3

import { calcularTotal,aplicarImpuestos,aplicarDescuento } from "./operaciones-matematicas.js";

let producto1= calcularTotal(40,2);
console.log("El monto del primer producto es: ",producto1);
let producto2= calcularTotal(149,1);
console.log("El monto del segundo producto es: ", producto2);
let producto3= calcularTotal(50,3);
console.log("El monto del tercer producto es: ",producto3);
let total =0;
let total1=0;
total1=sumar(producto1,producto2);
total=sumar(total1,producto3);
console.log("El precio total de los productos es: ", total);

let impuestos=aplicarImpuestos(total);
console.log("El precio a pagar con impuestos es de: ",impuestos);

let desc=aplicarDescuento(impuestos);
console.log("El precio a pagar con descuento es de: ",desc);

//! Ejercicio 4

import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario } from "./usuarios.js";

const Usuario1= new crearUsuario("Pedro",ROLES.ADMIN);
const Usuario2= new crearUsuario("Carlos",ROLES.CLIENTE);

console.log("El usuario ha sido creado: ", Usuario1);
console.log("El usuario ha sido creado: ", Usuario2);