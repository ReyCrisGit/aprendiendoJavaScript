function contador() {
  let cont = 0;
  function incrementar() {
    cont++;
    console.log(cont);
  }
  return incrementar;
}
const numero = contador();
numero();
numero();
const numero2 = contador();
numero2();
numero2();
numero2();
for (let i = 0; i < 5; i++) {
  numero2();
}

/* function crearContador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  return incrementar;
}

const contador1 = crearContador();
contador1(); // Salida: 1
contador1(); // Salida: 2

const contador2 = crearContador();
contador2(); // Salida: 1 */
