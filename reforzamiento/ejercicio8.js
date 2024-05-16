function Vehiculo(marca, modelo, anio) {
  let _marca = marca;
  let _modelo = modelo;
  let _anio = anio;
  this.obtenerMarca = function () {
    return _marca;
  };
  this.obtenerModelo = function () {
    return _modelo;
  };
  this.obtenerAnio = function () {
    return _anio;
  };
}
Vehiculo.prototype.obtenerDetalles = function () {
  return `Marca: ${this.obtenerMarca()}\nModelo: ${this.obtenerModelo()}\nAnio: ${this.obtenerAnio()}`;
};
const vehiculo = new Vehiculo("Toyota", "Todo Terreno", "2022");
console.log(vehiculo.obtenerDetalles());
