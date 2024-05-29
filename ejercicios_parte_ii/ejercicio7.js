function obtenerFecha(fecha) {
  const nombreDia = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  fecha = new Date(fecha);
  console.log(nombreDia[fecha.getDay()]);
}

obtenerFecha("2024/05/01");
