function multiplicarPor(numero) {
  //let mul = Math.round(Math.random(1, 10) * 100);
  let mul = 3;
  return function () {
    console.log(numero * mul);
  };
}
const producto1 = multiplicarPor(5);
producto1();
const producto2 = multiplicarPor(4);
producto2();
