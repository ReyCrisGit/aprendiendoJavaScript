function crearContador() {
  let _contador = 0;
  function incrementar() {
    _contador++;
    console.log(_contador);
  }
  return incrementar;
}

const contador1 = crearContador();
contador1();
contador1();
contador1();
const contador2 = crearContador();
contador2();
contador2();
contador2();
