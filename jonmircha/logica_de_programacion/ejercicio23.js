/* const miArreglo = (arreglo = "") => {
  if (!arreglo) return console.warn("No insertaste ningun parametro");
  if (arreglo instanceof Array) {
    const objeto = { pares: [], impares: [] };
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        objeto.pares.push(arreglo[i]);
      } else {
        objeto.impares.push(arreglo[i]);
      }
    }
    return objeto;
  } else {
    return console.error("No es un arreglo");
  }
};

vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
miArreglo();
miArreglo("hola");
res = miArreglo(vector);
console.log(res); */

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arr instanceof Array))
    return console.error("El valor ingresado no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado no es un numero`);
  }
  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impartes: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares();
separarParesImpares("hola");
separarParesImpares([]);
separarParesImpares([2, 4, "j"]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
