function crearContadorConMetodos() {
  let contador = 0;
  const objeto = {
    incrementar() {
      contador++;
    },
    obtenerContador() {
      return contador;
    },
  };
  return objeto;
}
const contadorIncrementar1 = crearContadorConMetodos();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
contadorIncrementar1.incrementar();
const contadorValor1 = contadorIncrementar1.obtenerContador();
console.log(contadorIncrementar1.obtenerContador());
