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
console.log(multiplicarNumeros(2, 3, 4, 10, "a", 2, "s"));
