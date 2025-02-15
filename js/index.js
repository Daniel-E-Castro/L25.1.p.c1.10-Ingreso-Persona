/*
10. INGRESOS PERSONAS

Dado el nombre y el ingreso de varias personas. 
Determinar e imprimir: 
El monto del ingreso menor y el ingreso promedio.

Se dispone de los siguientes datos de varias personas: 
(nombre, ingreso) 
(Mary, 150),
(José, 135), 
(Carlos, 160), 
(Pedro, 75)

SAlIDA:
Monto del ingreso menor: 75$
Ingreso promedio: 130$  
*/

import Cl_Ingreso from "./Cl_Ingreso.js";
import Cl_Personas from "./Cl_Personas.js";

let Persona1 = new Cl_Personas("Mary", 150)
let Persona2 = new Cl_Personas("Jose", 135)
let Persona3 = new Cl_Personas("Carlos", 160)
let Persona4 = new Cl_Personas("Pedro", 75)

let ingreso = new Cl_Ingreso()

ingreso.procesar(Persona1)
ingreso.procesar(Persona2)
ingreso.procesar(Persona3)
ingreso.procesar(Persona4)

let salida = document.getElementById("salida");
salida.innerHTML = `
Monto del ingreso menor: ${ingreso.montoIngresoMenor()}$
<br>Ingreso promedio: ${ingreso.ingresoPersona()}$
`