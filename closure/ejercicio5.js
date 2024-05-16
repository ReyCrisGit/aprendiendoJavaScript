function crearTemporizador(segundos) {
  function temporizador() {
    if (segundos !== 0) {
      console.log(segundos);
      segundos--;
    } else {
      console.log("El tiempo a terminado");
    }
  }
  return temporizador;
}
const tiempo = crearTemporizador(5);
tiempo();
tiempo();
tiempo();
tiempo();
tiempo();
tiempo();
tiempo();
