(function () {
  console.log("Hola Barrios");
})();

/* 
Ejercicio 11 (Medio)
Crea una función anónima autoejecutable que tome dos números como argumentos y muestre su suma en la consola.
*/

(function (n1, n2) {
  console.log(n1 + n2);
})(12, 1);

((a, b) => {
  console.log(a + b);
})(24, 20);
