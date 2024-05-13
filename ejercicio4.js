const colorPrimario = ["Rojo", "Green", "Blue"];
const colorSecundario = ["Cian", "Magenta", "Amarillo"];
const colores = [...colorPrimario, ...colorSecundario];
document.write(`Colores: ${colores}`);

colorPrimario.push("blanco");
document.write(`<br>Colores: ${colores}`);
document.write(`<br>Colores: ${colorPrimario}`);
console.log(colores);
