function Figura(nombre, color) {
  this.nombre = nombre;
  this.color = color;
}
/* function Rectangulo(nombre, color, ancho, alto) {
  this.ancho = ancho;
  this.alto = alto;
  this.super = Figura;
  this.super("Geometrica", "Red");
} */

//Rectangulo esta heredando de Figura
/* Rectangulo.prototype = new Figura();
Rectangulo.prototype.constructor = Rectangulo; */

//Otra manera de herencia prototípica
function Rectangulo(nombre, color, ancho, alto) {
  Figura.call(this, nombre, color);
  this.ancho = ancho;
  this.alto = alto;
}

Rectangulo.prototype = Object.create(Figura.prototype);
Rectangulo.prototype.constructor = Rectangulo;
Rectangulo.prototype.calcularArea = function () {
  console.log(this.ancho * this.alto);
};
const rectangulo = new Rectangulo("Rectángulo", "rojo", 2, 4);
console.log(rectangulo);
rectangulo.calcularArea();
