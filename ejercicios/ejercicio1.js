/* let nombre = "Cristian";
const edad = 25; */
//console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
//Crea un objeto llamado persona con propiedades nombre y edad que correspondan a los valores de las variables que definiste en el ejercicio anterior.
const information = {
  nombre: "Cristian",
  edad: "25",
};
console.log(information);
const colores = ["rojo", "verde", "azul"];
console.log(colores);
let numeroDecimal = 10.564;
numeroDecimal = Math.floor(numeroDecimal);
console.log(numeroDecimal);

//let esMayorDeEdad = edad >= 18 ? true : false;
//console.log(esMayorDeEdad);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
//saludar(nombre);

let n1 = 4,
  n2 = 3;
function suma(n1, n2) {
  console.log(n1 + n2);
}
function resta(n1, n2) {
  console.log(n1 - n2);
}
function producto(n1, n2) {
  console.log(n1 * n2);
}
function division(n1, n2) {
  console.log(n1 / n2);
}
suma(n1, n2);
resta(n1, n2);
producto(n1, n2);
division(n1, n2);
//esMayorDeEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
//console.log(esMayorDeEdad);

for (let i = 1; i < 11; i++) {
  console.log(i);
}

let aux = 2;
while (aux <= 10) {
  console.log(aux);
  aux += 2;
}
/* let numero;
do {
  numero = parseInt(
    prompt("Ingrese un numero entre 1 a 10 (presione uno diferente para salir)")
  );
  console.log(numero);
} while (numero > 0 && numero < 11); */

for (const key in information) {
  console.log(`${key}: ${information[key]}`);
}

for (const iterator of colores) {
  console.log(iterator);
}

try {
  let div = 2 / p;
  console.log(div);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}

const { nombre, edad } = information;
console.log(`Nombre: ${nombre}\nEdad: ${edad}`);
