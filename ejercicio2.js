let op, n1, n2;
op = parseInt(
  prompt(
    "1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\nSelecciona una opcion"
  )
);
try {
  if (isNaN(op)) {
    console.log("No es un numero valido");
  } else {
    const { numero1, numero2 } = peticion();
    switch (op) {
      case 1:
        suma(numero1, numero2);
        break;
      case 2:
        resta(numero1, numero2);
        break;
      case 3:
        multiplicacion(numero1, numero2);
        break;
      case 4:
        division(numero1, numero2);
        break;
      default:
        console.log("Opcion invalida");
    }
  }
} catch (error) {}

function suma(n1, n2) {
  console.log(n1 + n2);
}
function resta(n1, n2) {
  console.log(n1 - n2);
}
function multiplicacion(n1, n2) {
  console.log(n1 * n2);
}
function division(n1, n2) {
  console.log(n1 / n2);
}

function peticion() {
  n1 = parseInt(prompt("Ingrese el primer numero"));
  n2 = parseInt(prompt("Ingrese el segundo numero"));
  const objeto = {
    numero1: n1,
    numero2: n2,
  };
  return objeto;
}
