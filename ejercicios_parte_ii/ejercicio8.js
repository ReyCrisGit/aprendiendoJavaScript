let correo = "cristian@gmail.com";

let exp = /@gmail.com/i;
console.log(exp.test(correo));
console.log(exp.exec(correo));

console.log(exp.test(correo));
if (exp.test(correo)) {
  console.log("Correcto");
} else {
  console.log("Incorrecto");
}

//consultar esta funcion
function esCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

console.log(esCorreoValido("ejemplo@correo.com")); // true
console.log(esCorreoValido("ejemplo@correo")); // false
