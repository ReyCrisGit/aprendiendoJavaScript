/**
 * Crea un objeto persona con el nombre y edad proporcionados
 * @param {string} nombre El nombre de la persona
 * @param {number} edad La edad de la persona
 * @returns {object} El objeto persona creado
 */
function crearPersona(nombre, edad) {
  if (typeof nombre !== "string" || typeof edad !== "number") {
    throw new Error(
      "Se requiere un nombre de tipo cadena y una edad de tipo entero"
    );
  }
  const persona = { nombre, edad };
  return persona;
}
const persona = crearPersona("Barrios", 25);
document.write(`Hola ${persona.nombre} de ${persona.edad}`);
