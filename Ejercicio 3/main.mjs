// Importar la clase Calculadora desde calculadora.mjs
import Calculadora from './calculadora.mjs';

// Creo una instancia de la clase Calculadora 
const calc = new Calculadora; 

// Utilizo los métodos multiplicar y dividir 
console.log ('Multiplicación de 2 y 2:', calc.multiplicar(2, 2)); 
console.log ('División de 10 y 5:', calc.dividir(10, 5)); 