const capicua = (n = "") => {
  let numero = "";
  let aux = 0;
  let cont = 0;
  if (!n) {
    console.warn("No ingresaste ningun argumento");
  } else if (typeof n === "number") {
    numero += n;
    aux = Math.floor(numero.length - 1);
    for (let i = 0; i < Math.floor(numero.length / 2); i++) {
      if (numero[i] === numero[numero.length - 1 - i]) {
        cont++;
      }
    }
    if (cont === Math.floor(numero.length / 2)) {
      console.log(`${n} es capicua`);
    } else {
      console.log(`${n} no es capicua`);
    }
  } else {
    console.log(`${n} no es un numero`);
  }
};

capicua(123321);
capicua(212.212);
