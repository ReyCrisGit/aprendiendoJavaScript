const persona1 = {
  nombre: "Cristian",
  edad: 22,
  pais: "Bolivia",
};
const persona2 = {
  nombre: "Maria",
  edad: 23,
  pais: "Bolivia",
};
const personas = { ...persona1, ...persona2 };
console.log(personas);

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [...a, ...b];
console.log(c);
