function contadorIncremental() {
  let contador = 0;
  function incrementar() {
    console.log(contador++);
  }
  return incrementar;
}
const contador1 = contadorIncremental();
