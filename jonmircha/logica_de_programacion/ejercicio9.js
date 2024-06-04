const numAleatorio = (n = "") =>
  !n
    ? console.log("No ingresaste ningun argumento")
    : console.log(`${Math.round(Math.random(n) * 100 + 500)}`);
numAleatorio(2);
