export function sumar(...n) {
  return n.reduce((suma, num) => {
    if (isNaN(num)) {
      console.log("No es un numero");
      return suma;
    } else {
      return suma + num;
    }
  }, 0);
}

export function multiplicar(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return "Ambos parametros tienen que ser enteros";
  } else {
    return n1 * n2;
  }
}
