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
//anios(new Date("1998, 08, 04"));

const calcularAnios = (fecha = undefined) => {
  if (!fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha valida");

  let hoyMenosFecha = new Date().getTime - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos === -1)
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1998, 7, 4));
calcularAnios(new Date(2998, 7, 4));
