function repetir(cadena, numero) {
  if (typeof cadena === "string" && typeof numero === "number") {
    if (numero > 0) {
      for (let i = 0; i < numero; i++) {
        console.info(cadena);
      }
    } else {
      console.log(`${numero} debe ser mayor a 0`);
    }
  } else {
    console.log("El primer argumento debe ser cadena y el segundo un entero");
  }
}
repetir("Barrios", 5);
