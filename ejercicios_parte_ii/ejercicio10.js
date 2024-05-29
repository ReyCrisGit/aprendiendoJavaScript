const arreglo1 = [1, 2, 3, 4, 5, 6];
const arreglo2 = ((a = new Array()) => {
  for (let i = 0; i < a.length; i++) {
    a[i] = Math.pow(a[i], 2);
  }
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
})(arreglo1);

//Chat GPT
const cuadrados = (function (numeros) {
  return console.log(numeros.map((n) => n * n));
})([1, 2, 3, 4, 5]);

console.log(cuadrados);
