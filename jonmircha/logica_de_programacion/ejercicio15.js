const convertir = (valor = undefined, unidad = undefined) => {
  if (!valor) console.warn("Debe ingresar el valor");
  if (!unidad) console.warn("Debe ingresar la unidad");
  if (typeof valor === "number" && typeof unidad === "number") {
    if (unidad === 2) {
      let tam = "";
      let potencia = 0;
      let resultado = 0;
      tam = valor.toString();
      tam = tam.split("");
      console.log(tam);
      for (let i = tam.length - 1; i >= 0; i--) {
        if (tam[i] === "0") {
          resultado += 0;
        } else if (tam[i] === "1") {
          resultado = resultado + Math.pow(2, potencia);
        }
        potencia++;
      }
      return resultado;
    } else if (unidad === 10) {
    }
  } else {
    console.log("Ambos argumentos debe ser numeros validos");
  }
};

console.log(convertir(1011001, 2));

/* let valor = 100;
let tam = "";
tam = valor.toString();
console.log(tam.length);
console.log(tam);
console.log(typeof tam);
tam = tam.split("");
console.log(tam);
console.log(typeof tam);
console.log(tam.length); */
