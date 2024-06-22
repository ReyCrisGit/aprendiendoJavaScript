const vocales = (cadena) => {
  let contadorVocales = 0,
    contadorConsonantes = 0;
  if (!cadena) return console.warn("No ingresaste ningun parametro");
  if (cadena === "") return console.warn("No ingresate ninguna cadena");
  if (typeof cadena === "string") {
    cadena = cadena.toLowerCase();
    for (let i = 0; i < cadena.length; i++) {
      if (
        cadena[i] === "a" ||
        cadena[i] === "a" ||
        cadena[i] === "e" ||
        cadena[i] === "i" ||
        cadena[i] === "o" ||
        cadena[i] === "u"
      ) {
        contadorVocales++;
      } else if (
        cadena[i] === "b" ||
        cadena[i] === "c" ||
        cadena[i] === "d" ||
        cadena[i] === "f" ||
        cadena[i] === "g" ||
        cadena[i] === "h" ||
        cadena[i] === "j" ||
        cadena[i] === "k" ||
        cadena[i] === "l" ||
        cadena[i] === "m" ||
        cadena[i] === "n" ||
        cadena[i] === "p" ||
        cadena[i] === "q" ||
        cadena[i] === "r" ||
        cadena[i] === "s" ||
        cadena[i] === "t" ||
        cadena[i] === "v" ||
        cadena[i] === "w" ||
        cadena[i] === "x" ||
        cadena[i] === "y" ||
        cadena[i] === "z"
      ) {
        contadorConsonantes++;
      }
    }
  } else {
    return console.warn("No es una cadena");
  }
  return console.log(
    `Vocales: ${contadorVocales}, Consonantes: ${contadorConsonantes}`
  );
};
vocales();
vocales(1);
vocales("");
vocales("Hola Mundo");
