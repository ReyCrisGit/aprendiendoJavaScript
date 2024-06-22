const miArreglo = (arreglo = "") => {
  let mayorMenor = [];
  if (!arreglo) return console.warn("Es ingreso ningun parametro");
  if (arreglo instanceof Array) {
    let mayor = arreglo[0];
    let menor = arreglo[0];
    if (arreglo.length > 0) {
      for (let i = 0; i < arreglo.length; i++) {
        if (mayor < arreglo[i]) {
          mayor = arreglo[i];
        }
        if (menor > arreglo[i]) {
          menor = arreglo[i];
        }
      }
      mayorMenor.push(mayor);
      mayorMenor.push(menor);
      return console.log(mayorMenor);
    }
  } else {
    return console.error("No es un arreglo");
  }
};

miArreglo();
miArreglo(1);
miArreglo([1, 4, 5, -99, 3]);
/* arreglo = [1, 2, 3];
console.log(arreglo);
arreglo.push(10);
aux = [];
aux.push(12);
aux.push(32);
console.log(aux);
let a = 7;
aux.push(a);
console.log(aux); */
