const esPar = (n) => {
  if (!n) console.log("No ingresaste ningun argumento");
  if (typeof n === "number") {
    if (n % 2 === 0) console.log(`${n} es par`);
    else console.log(`${n} no es par`);
  } else console.log(`${n} no es un numero valido`);
};

esPar(10);
