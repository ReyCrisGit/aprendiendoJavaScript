const contar = (cadena, palabra) => {
  if (typeof cadena === "string" && typeof palabra === "string") {
    let palabras = cadena.split(" ");
    let cont = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === palabra) {
        cont++;
      }
    }
    return `${palabra} se repite ${cont} veces`;
  } else {
    return `Ambos parametros deben ser de tipo cadena`;
  }
};

console.log(contar("hola mundo adios mundo", "mundo"));
