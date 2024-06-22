const miArreglo = (arreglo = "") => {
  if (!arreglo) return console.warn("No insertaste ningun parametro");
  if (arreglo instanceof Array) {
    let x = 0;
    y = 0;
    const objeto = { pares: [], impares: [] };
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        objeto.pares.push(arreglo[i]);
        x++;
      } else {
        objeto.impares.push(arreglo[i]);
        y++;
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
console.log(res);
