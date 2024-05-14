const multiplicarNumeros = (...numeros) => {
  let producto = 1;
  numeros.forEach(function (n) {
    if (isNaN(n)) {
      console.log("No es un numero");
    } else {
      producto *= n;
    }
  });
  return producto;
};
console.log(multiplicarNumeros("a", 2, "s", 2));
