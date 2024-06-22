const binario = (valor) => {
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
  console.log(`${resultado} base ${10}`);
};
const decimal = (valor) => {
  let a = "";
  let resto = 0;
  let binario = [];
  while (valor >= 2) {
    resto = Math.round(valor % 2);
    a += resto;
    if (valor === 2) {
      a += valor / 2;
      let cociente = valor / 2;
    }
    valor = Math.floor(valor / 2);
  }
  binario = a.split("");
  a = binario.join("");
  console.log(`${a} base 2`);
};
const convertir = (valor = undefined, unidad = undefined) => {
  if (valor === undefined) console.warn("Debe ingresar el valor");
  if (!unidad) console.warn("Debe ingresar la unidad");
  if (typeof valor === "number" && typeof unidad === "number") {
    if (unidad === 2) {
      binario(valor);
    } else if (unidad === 10) {
      decimal(valor);
    }
  } else {
    console.log("Ambos argumentos debe ser numeros validos");
  }
};

convertir(1011001, 2);
convertir(18, 10);
convertir(23, 10);
convertir(43, 10);
