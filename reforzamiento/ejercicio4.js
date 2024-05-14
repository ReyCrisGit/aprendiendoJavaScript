function Circulo(radio, color) {
  this.radio = radio;
  this.color = color;
}

Circulo.prototype.calcularArea = function () {
  const area = Math.PI * Math.pow(this.radio, 2);
  console.log(area.toFixed(2));
};

const circulo = new Circulo(12, "guindo");
circulo.calcularArea();
