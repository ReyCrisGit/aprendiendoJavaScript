const esPrimo = (n = undefined) => {
  let contador = 0;
  if (!n) console.warn("No ingreso ningun argumento");
  if (typeof n === "number") {
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) contador++;
      }
    } else {
      console.error("Un numero negativo o cero no es primo");
    }
    if (contador === 2) {
      console.log(`${n} es primo`);
    } else {
      console.log(`${n} no es primo`);
    }
  } else {
    console.warn("No es un numero");
  }
};

esPrimo(83);
