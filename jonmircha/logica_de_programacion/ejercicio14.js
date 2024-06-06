function convertirGrados(n, grado) {
  if (!n || !grado) console.log("Se debe pasar si o si 2 argumentos validos");
  if (typeof n === "number" && typeof grado === "string") {
    temperatura = 0;
    grado = grado.toUpperCase();
    if (grado === "C") {
      temperatura = (n * 9) / 5 + 32;
      return `${temperatura}°F`;
    } else if (grado === "F") {
      temperatura = (n - 32) * (5 / 9);
      return `${temperatura} °C`;
    } else {
      return `${grado} no es valido`;
    }
  }
}

const grado = convertirGrados(10, "F");
console.log(grado);
