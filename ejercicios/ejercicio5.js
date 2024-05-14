const sumarNumeros = (...numeros) => {
  return numeros.reduce((suma, num) => {
    if (isNaN(num)) {
      document.write(`${num} no es un numero`);
      return suma;
    } else {
      return suma + num;
    }
  }, 0);
};

document.write(sumarNumeros(1, 2, 3, 4, 2));
