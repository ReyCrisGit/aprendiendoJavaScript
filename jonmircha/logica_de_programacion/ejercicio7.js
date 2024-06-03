function palindrono(cadena = "") {
  if (cadena === "") {
    console.warn("No agragaste una cadena de texto");
  } else if (typeof cadena === "string") {
    let cont = 0;
    cadena = cadena.toLowerCase();
    for (let i = 0, j = 0; i < Math.ceil(cadena.length / 2); i++, j++) {
      if (cadena[i] === cadena[cadena.length - 1 - i]) {
        cont++;
      }
    }
    if (cont === Math.ceil(cadena.length / 2)) {
      return true;
    } else {
      return false;
    }
  } else {
    console.warn(`no es un texto`);
  }
}

console.log(palindrono("Arenera"));
