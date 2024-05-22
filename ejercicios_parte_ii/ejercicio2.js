class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  describir() {
    return `Marca: ${this.marca}\nModelo: ${this.modelo}`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo);
    this.puertas = puertas;
  }
  describir() {
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPuertas: ${this.puertas}`;
  }
}

const vehiculo = new Vehiculo("Toyota", 2021);
console.log(vehiculo);
const auto = new Auto("T-King", 2019, 2);
console.log(auto);
