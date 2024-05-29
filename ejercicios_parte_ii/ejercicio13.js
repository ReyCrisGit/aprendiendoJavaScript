/* class Calculadora {
  sumar(...numero) {
    return numero.reduce((acumulador, num) => {
      if (typeof num === "string") {
        console.log("No es un numero");
        return acumulador;
      } else {
        acumulador += num;
        return `Total: ${acumulador}`;
      }
    }, 0);
  }

  sumar(...numeros) {
    const suma = numeros.reduce((acumulador, num) => {
      if (typeof num === "number") {
        return acumulador + num;
      } else {
        console.log("No es un numero: ", num);
        return acumulador;
      }
    }, 0);
    return `Total: ${suma}`;
  }
}
const calculadora = new Calculadora();
console.log(calculadora.sumar(1, 3, "1", 100, "k"));
 */

import { Calculadora } from "./calculadora.js";
const calculadora = new Calculadora();
console.log(calculadora.sumar(1, 10));
console.log(calculadora.restar(1, 10));
console.log(calculadora.multiplicar(1, 10));
console.log(calculadora.dividir(10, "w", 0, 2));
