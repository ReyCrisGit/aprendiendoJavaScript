const arreglo = (a = undefined) => {
  let prom = 0;
  if (a === undefined) {
    return console.warn("No inserto ningun parametro");
  }
  if (!(a instanceof Array)) {
    return console.warn("No inserto un arreglo");
  } else {
    if (a.length > 1) {
      for (const x of a) {
        if (typeof x === "number") {
          prom += x;
        }
      }
      prom /= a.length;
    }
  }
  console.log(prom);
};

const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(a.length);
arreglo(a);
