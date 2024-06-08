const montoFinal = (costo = undefined, descuento = 0) => {
  if (!costo) console.warn("Costo no definido");
  if (!descuento) console.warn("Descuento no definido");
  if (typeof costo === "number" && costo >= 0) {
    if (typeof descuento === "number" && descuento > 0) {
      return costo - (costo * descuento) / 100;
    } else {
      return costo;
    }
  } else if (costo < 0) {
    return `No puede ser negativo`;
  }
};
console.log(`${montoFinal()}`);
console.log(`${montoFinal(1)}`);
console.log(`${montoFinal("1", "10")}`);
console.log(`${montoFinal(1, "1")}`);
//console.log(`Pago: ${montoFinal(1000, 20)}`);
