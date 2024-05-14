function crearAnimal(nombre, edad) {
  const animal = {
    nombre,
    edad,
  };
  return animal;
}
const animal = crearAnimal("Perro", 10);
console.log(animal);
