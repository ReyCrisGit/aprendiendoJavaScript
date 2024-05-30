const invertir = (cadena) => {
  if (isNaN(cadena)) {
    let b = new Array(cadena.length);
    let aux = b.length - 1;
    console.log(aux);
    console.log(b);
    for (let i = 0; i < b.length; i++) {
      b[i] = cadena[aux];
      console.log(cadena[aux]);
      aux--;
    }

    let cadena2 = b.join(" ");
    console.log(cadena2);
  } else {
    return `${cadena} no es una cadena de texto`;
  }
};
invertir("Barrios");

/* El método join() te permite especificar un separador personalizado para los elementos del array. Si no se proporciona un separador, se usa una coma por defecto. */
