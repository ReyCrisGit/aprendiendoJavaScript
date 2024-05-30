function numCaracteres(cadena = "") {
  if (typeof cadena === "string") {
    console.log(cadena.length);
  } else {
    console.log("No es una cadena");
  }
}
numCaracteres("Cristian Barrios");
const obj = {
  nombre: "Cristian",
  apellido: "Barrios",
};
numCaracteres(obj);
