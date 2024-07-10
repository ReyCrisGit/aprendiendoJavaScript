const a = [7, 5, 7, 8, 6];
console.log(a);
console.log(a instanceof Array);
console.log(a.length);
const b = a.sort();
console.log(b);
const c = b.reverse();
console.log(c);
const arreglos = (arreglo = undefined) => {
  let arregloAsc = [];
  let arregloDes = [];
  if (arreglo === undefined) {
    return console.warn("No inserto ningun parametro");
  }
  if (!(arreglo instanceof Array)) {
    return console.warn("No inserto un arreglo");
  } else {
    if (arreglo.length > 0) {
      arregloAsc = [...arreglo].sort();
      arregloDes = [...arregloAsc].reverse();
      console.log(`Asc = ${arregloAsc}`);
      console.log(`Des = ${arregloDes}`);
    } else {
      console.warn("El arreglo esta vacio");
    }
  }
};

arreglos(a);
arreglos("hola");

arreglos();
arreglos([]);
