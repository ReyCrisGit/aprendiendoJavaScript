const factorial = (n = "") => {
  if (!n) {
    console.warn("No ingresaste ningun argumento");
  } else if (isNaN(n)) {
    console.warn(`${n} no es una cadena de texto`);
  } else {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
};

let f = factorial(6);
console.log(f);
