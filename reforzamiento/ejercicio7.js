const carro = {
  marca: "",
  modelo: "",
  anio: "",
  obtenerDetalles(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    return {
      marca,
      modelo,
      anio,
    };
  },
};

console.log(carro);
console.log(carro.obtenerDetalles("TOYOTA", "2", "2022"));
console.log(carro.modelo);
