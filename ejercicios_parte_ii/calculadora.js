export class Calculadora {
  sumar(...numeros) {
    const op = numeros.reduce((acumulador, num) => {
      if (typeof num === "number") {
        return acumulador + num;
      } else {
        console.log("No es un numero: ", num);
        return acumulador;
      }
    }, 0);
    return `Total: ${op}`;
  }
  restar(...numeros) {
    const op = numeros.reduce((acumulador, num) => {
      if (typeof num === "number") {
        return acumulador - num;
      } else {
        console.log("No es un numero: ", num);
        return acumulador;
      }
    }, 0);
    return `Total: ${op}`;
  }
  multiplicar(...numeros) {
    const op = numeros.reduce((acumulador, num) => {
      if (typeof num === "number") {
        return acumulador * num;
      } else {
        console.log("No es un numero: ", num);
        return acumulador;
      }
    }, 1);
    return `Total: ${op}`;
  }
  dividir(...numeros) {
    const op = numeros.reduce((acumulador, num) => {
      if (typeof num === "number") {
        if (num === 0) {
          console.log("No se puede dividir entre cero", num);
          return acumulador;
        }
        return acumulador / num;
      } else {
        console.log("No es un numero: ", num);
        return acumulador;
      }
    });
    return `Total: ${op}`;
  }
}
