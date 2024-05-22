class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  describir() {
    return `Nombre: ${this.nombre} \nEdad ${this.edad}`;
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }
  describir() {
    return `Nombre: ${this.nombre} \nEdad: ${this.edad}\nRaza: ${this.raza}`;
  }
}

const animal = new Animal("Toby", 2);
console.log(animal);
console.log(animal.describir());

const perro = new Perro("Lobo", 1, "Siberiano");
console.log(perro);
console.log(perro.describir());
const perro2 = new Perro("Rambo", 1, "Mestizo");
console.log(perro2);
