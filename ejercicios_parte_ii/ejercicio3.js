class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  static mayoriaDeEdad(e) {
    return e >= 18;
  }
}

console.log(Persona.mayoriaDeEdad(19));
