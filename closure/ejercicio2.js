function crearContador(valorInicial) {
  let _contador = valorInicial;
  function incrementar() {
    _contador++;
    console.log(_contador);
  }
  return incrementar;
}

const contador1 = crearContador(10);
contador1();
contador1();
contador1();
const contador2 = crearContador(7);
contador2();
contador2();
contador2();
