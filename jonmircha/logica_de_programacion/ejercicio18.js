const anios = (fecha) => {
  if (typeof fecha === "object") {
    const hoy = new Date();
    const intervalo = hoy - fecha;
    const a = intervalo / (365 * 24 * 60 * 60 * 1000);
    console.log(`${Math.round(a)} años`);
  } else {
    console.log("no funciona");
  }
};
anios(new Date("1998, 08, 04"));
