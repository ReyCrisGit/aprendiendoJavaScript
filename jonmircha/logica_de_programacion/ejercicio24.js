const ordenar = (arreglo = undefined) => {
  if (!arreglo) return console.warn("No insertaste ningun parametro");
  if (arreglo instanceof Array) {
    /* for (const iterator of arreglo) {
      if (typeof iterator !== "number") {
        return console.error("El arreglo debe contener solamente numeros");
      }
    } */
    if (arreglo.length === 0) {
      return console.warn("El arreglo esta vacio");
    } else {
      let menor,
        pos = -1;
      const asc = [];
      let ul;
      let ini;
      for (let i = 0; i < arreglo.length; i++) {
        menor = arreglo[i];
        ul = arreglo[arreglo.length - 1];
        ini = arreglo[i];
        for (let j = 0; j < arreglo.length; j++) {
          if (menor > arreglo[j]) {
            menor = arreglo[j];
            pos = j;
          }
        }
        if (!asc.includes(menor)) {
          asc.push(menor);
        }
        for (let k = arreglo.length - 1; k >= 0; k--) {
          arreglo[k] = arreglo[k - 1];
        }
        arreglo[i] = menor;
        arreglo.splice(pos, pos);
        //asc.push(menor);
        console.log(menor);
      }
      console.log(asc);
    }
  } else {
    return console.error("No es un arreglo");
  }
};
// ordenar();
// ordenar(true);
// ordenar([]);
// ordenar([1, 3, "ho", true]);
ordenar([7, 5, 7, 8, 6]);
