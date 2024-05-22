class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  get getAncho() {
    return this.ancho;
  }
  set setAncho(ancho) {
    this.ancho = ancho;
  }
  get getAlto() {
    return this.alto;
  }
  set setAlto(alto) {
    this.alto = alto;
  }
  get getArea() {
    return this.alto * this.ancho;
  }
}

const rectangulo = new Rectangulo(2, 4);
console.log(rectangulo.getArea);
