const miArreglo = (arreglo = "") => {
  aux = [];
  if (!arreglo) return console.warn("No ingresaste ningun parametro");
  if (arreglo instanceof Array) {
    if (arreglo.length !== 0) {
      for (let i = 0; i < arreglo.length; i++) {
        aux.push(arreglo[i] ** 2);
      }
      return console.log(aux);
    } else {
      return console.warn("El arreglo esta vacio");
    }
  } else {
    return console.error("No es un arreglo");
  }
};

miArreglo();
hola = "hola";
miArreglo(hola);
v = [1, 4, 5];
b = [];
miArreglo(v);
