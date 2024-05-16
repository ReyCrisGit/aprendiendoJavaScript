# Tutorial completo sobre closures en JavaScript

## Teoría de Closures

### ¿Qué es un Closure?

Un closure es una función que recuerda el entorno léxico en el que se creó. Esto significa que una función tiene acceso a las variables y parámetros de su contexto externo, incluso después de que la función externa haya terminado de ejecutarse.

### ¿Por qué son útiles los Closures?

Los closures son útiles porque permiten:
- **Encapsulación:** Crear variables privadas que solo pueden ser accedidas por funciones específicas.
- **Memorización:** Recordar el estado de variables entre llamadas a funciones.
- **Funciones de retorno:** Crear funciones que pueden mantener acceso a las variables de su contexto de creación.

### ¿Cómo funcionan los Closures?

Cuando una función se crea, se guarda una referencia a su contexto léxico. Esto incluye todas las variables y funciones que estaban en el alcance en el momento de la creación de la función.

### Ejemplo Básico de un Closure

```javascript
function saludar(nombre) {
  const saludo = "Hola, ";
  return function() {
    console.log(saludo + nombre);
  };
}

const saludoCristian = saludar("Cristian");
saludoCristian(); // Imprime: "Hola, Cristian"
```

En este ejemplo:
- La función `saludar` toma un argumento `nombre` y define una variable `saludo`.
- Retorna una nueva función que, cuando se ejecuta, accede a `saludo` y `nombre`.
- `saludoCristian` es un closure que recuerda `saludo` y `nombre` de su contexto léxico.

## Práctica con Closures

### Ejemplo 1: Contador con Closure

Vamos a crear una función `crearContador` que retorna un closure. Este closure incrementará un contador interno cada vez que se llame.

```javascript
function crearContador() {
  let contador = 0;
  return function() {
    contador++;
    console.log(contador);
  };
}

const contador1 = crearContador();
contador1(); // Imprime: 1
contador1(); // Imprime: 2
contador1(); // Imprime: 3

const contador2 = crearContador();
contador2(); // Imprime: 1
contador2(); // Imprime: 2
```

### Ejemplo 2: Variables Privadas con Closure

Vamos a crear un objeto `Persona` que use closures para encapsular y proteger las variables internas.

```javascript
function crearPersona(nombre, edad) {
  return {
    obtenerNombre: function() {
      return nombre;
    },
    obtenerEdad: function() {
      return edad;
    },
    cambiarNombre: function(nuevoNombre) {
      nombre = nuevoNombre;
    },
    cambiarEdad: function(nuevaEdad) {
      edad = nuevaEdad;
    }
  };
}

const persona = crearPersona("Cristian", 30);
console.log(persona.obtenerNombre()); // Imprime: Cristian
console.log(persona.obtenerEdad()); // Imprime: 30
persona.cambiarNombre("Juan");
persona.cambiarEdad(35);
console.log(persona.obtenerNombre()); // Imprime: Juan
console.log(persona.obtenerEdad()); // Imprime: 35
```

### Ejemplo 3: Funciones Constructoras y Closures

Vamos a crear una función constructora `Carro` que utiliza closures para encapsular las propiedades.

```javascript
function Carro(marca, modelo) {
  let _marca = marca;
  let _modelo = modelo;

  this.obtenerMarca = function() {
    return _marca;
  };

  this.obtenerModelo = function() {
    return _modelo;
  };

  this.cambiarMarca = function(nuevaMarca) {
    _marca = nuevaMarca;
  };

  this.cambiarModelo = function(nuevoModelo) {
    _modelo = nuevoModelo;
  };
}

const miCarro = new Carro("Toyota", "Corolla");
console.log(miCarro.obtenerMarca()); // Imprime: Toyota
console.log(miCarro.obtenerModelo()); // Imprime: Corolla
miCarro.cambiarMarca("Honda");
miCarro.cambiarModelo("Civic");
console.log(miCarro.obtenerMarca()); // Imprime: Honda
console.log(miCarro.obtenerModelo()); // Imprime: Civic
```

## Ejercicios Prácticos

### Ejercicio 1: Temporizador con Closure

Crea una función `temporizador` que acepte un número de segundos y devuelva una función que, cuando se ejecute, imprima el número de segundos restantes y disminuya el contador en uno.

```javascript
function temporizador(segundos) {
  let contador = segundos;
  return function() {
    if (contador > 0) {
      console.log(contador);
      contador--;
    } else {
      console.log("El tiempo ha terminado");
    }
  };
}

const temporizador10 = temporizador(10);
temporizador10(); // Imprime: 10
temporizador10(); // Imprime: 9
// ...continúa llamando hasta que imprime: "El tiempo ha terminado"
```

### Ejercicio 2: Almacenamiento de Datos con Closure

Crea una función `almacenamiento` que devuelva un objeto con métodos para `guardarDato` y `obtenerDato`. Usa closures para encapsular los datos.

```javascript
function almacenamiento() {
  let datos = {};

  return {
    guardarDato: function(clave, valor) {
      datos[clave] = valor;
    },
    obtenerDato: function(clave) {
      return datos[clave];
    }
  };
}

const miAlmacenamiento = almacenamiento();
miAlmacenamiento.guardarDato("nombre", "Cristian");
console.log(miAlmacenamiento.obtenerDato("nombre")); // Imprime: Cristian
```

## Conclusión

Los closures son una característica poderosa de JavaScript que permiten crear funciones que "recuerdan" su entorno léxico. Esta capacidad es muy útil para la encapsulación, la creación de funciones con estados internos y muchos otros patrones de diseño.

Practicar con closures te ayudará a entender mejor cómo funcionan las variables y los contextos en JavaScript, y te permitirá escribir código más robusto y modular. Si tienes alguna pregunta o necesitas más ejemplos, ¡no dudes en preguntar!