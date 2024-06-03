const eliminar = (cadena, del) => {
  if (typeof cadena === "string") {
    let palabras = cadena.split(", ");
    let aux = [];
    let newArray = [];
    let contador = 0;
    let contador2 = 0;
    for (let i = 0; i < palabras.length; i++) {
      /* for (let j = 0; j < palabras[i].length; j++) {
        console.log(`${palabras[i][j]}\n`);
        
      } */
      for (let a = 0; a < palabras[i].length; a++) {
        aux[contador] = palabras[i][a];
        for (let b = 0; b < aux.length; b++) {
          for (let c = 0; c < del.length; c++) {
            if (del[c] === aux[contador]) {
              aux[contador] = null;
            }
          }
          console.log("\n");
        }
        contador++;
      }
    }
    console.log(aux);
    for (let z = 0; z < aux.length; z++) {
      if (aux[z] !== null) {
        newArray[contador2] = aux[z];
        contador2++;
      }
    }
    console.log(newArray);
  } else {
    console.warn("No es una cadena de texto");
  }
};

eliminar("xyz1, x234xa, xyz3, xyz4, xyz5", "xyz");
eliminar(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quaerat asperiores, error repudiandae, officiis similique facere ipsa, nemo autem libero porro sint dolore eius debitis! Perferendis sequi soluta id.",
  "o"
);
/* const a = [1, 2, 3];
console.log(a);
a[1] = null;
console.log(a);
let aux = a[a.length - 1];
a[a.length - 1] = a[a.length - 2];
console.log(a);
a[a.length - 2] = aux;
console.log(a);
a.pop();
console.log(a); */
/* const a = "Hola";
const b = [];
for (let i = 0; i < a.length; i++) {
  b[i] = a[i];
}
console.log(b); */
