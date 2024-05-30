function textRecortado(cadena, n) {
  let c = "";
  if (typeof cadena === "string" && typeof n === "number") {
    if (n > 0 && n < cadena.length) {
      for (let i = 0; i < n; i++) {
        c += cadena[i];
      }
    } else {
      return `${n} es mayor que la cadena de ${cadena.length} caracteres`;
    }

    return c;
  } else {
    return `El primer argumento tiene que ser una cadena y el segundo un entero`;
  }
}
console.log(textRecortado("JavaScript", 4));
