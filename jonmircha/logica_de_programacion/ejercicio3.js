function separarText(cadena, separador) {
  let c = "";
  if (isNaN(cadena)) {
    c = cadena;
    let arreglo = c.split(separador);
    console.log(c);
    return arreglo;
  } else {
    console.log("Algo anda mal");
  }
}

const arreglo = separarText("Hola Cristian Barrios", " ");
arreglo.forEach((n) => {
  console.log(n);
});
console.log(arreglo);
