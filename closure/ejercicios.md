¡Claro! Aquí tienes 10 ejercicios sobre closures en JavaScript, ordenados de fácil a difícil. Cada ejercicio incluye una breve descripción y los requisitos.

### Ejercicio 1: Contador Básico

**Descripción:** Crea una función `crearContador` que devuelva una función que incremente un contador interno cada vez que se llame.

**Requisitos:**
- La función debe inicializar el contador a 0.
- Cada vez que se llame a la función devuelta, el contador debe incrementarse en 1 y el nuevo valor debe ser impreso en la consola.

```javascript
function crearContador() {
  // Tu código aquí
}

const contador1 = crearContador();
contador1(); // Imprime: 1
contador1(); // Imprime: 2
contador1(); // Imprime: 3

const contador2 = crearContador();
contador2(); // Imprime: 1
contador2(); // Imprime: 2
```

### Ejercicio 2: Contador con Valor Inicial

**Descripción:** Modifica el ejercicio anterior para que `crearContador` acepte un valor inicial para el contador.

**Requisitos:**
- La función debe aceptar un argumento que establezca el valor inicial del contador.
- Cada vez que se llame a la función devuelta, el contador debe incrementarse en 1 y el nuevo valor debe ser impreso en la consola.

```javascript
function crearContador(valorInicial) {
  // Tu código aquí
}

const contador1 = crearContador(5);
contador1(); // Imprime: 6
contador1(); // Imprime: 7

const contador2 = crearContador(10);
contador2(); // Imprime: 11
contador2(); // Imprime: 12
```

### Ejercicio 3: Closure con Parámetros

**Descripción:** Crea una función `multiplicarPor` que acepte un número y devuelva una función que multiplique cualquier número dado por el número original.

**Requisitos:**
- La función devuelta debe multiplicar su argumento por el número pasado a `multiplicarPor`.

```javascript
function multiplicarPor(num) {
  // Tu código aquí
}

const multiplicarPor5 = multiplicarPor(5);
console.log(multiplicarPor5(3)); // Imprime: 15
console.log(multiplicarPor5(10)); // Imprime: 50

const multiplicarPor10 = multiplicarPor(10);
console.log(multiplicarPor10(3)); // Imprime: 30
console.log(multiplicarPor10(10)); // Imprime: 100
```

### Ejercicio 4: Contador con Métodos

**Descripción:** Crea una función `crearContadorConMetodos` que devuelva un objeto con dos métodos: `incrementar` y `obtenerContador`.

**Requisitos:**
- `incrementar` debe incrementar el contador en 1.
- `obtenerContador` debe devolver el valor actual del contador.

```javascript
function crearContadorConMetodos() {
  // Tu código aquí
}

const contador = crearContadorConMetodos();
contador.incrementar();
contador.incrementar();
console.log(contador.obtenerContador()); // Imprime: 2
```

### Ejercicio 5: Temporizador

**Descripción:** Crea una función `crearTemporizador` que acepte un número de segundos y devuelva una función que, cuando se ejecute, imprima el número de segundos restantes y disminuya el contador en uno.

**Requisitos:**
- La función devuelta debe disminuir el contador de segundos cada vez que se llame.
- Cuando el contador llegue a 0, debe imprimir "El tiempo ha terminado".

```javascript
function crearTemporizador(segundos) {
  // Tu código aquí
}

const temporizador = crearTemporizador(5);
temporizador(); // Imprime: 5
temporizador(); // Imprime: 4
temporizador(); // Imprime: 3
temporizador(); // Imprime: 2
temporizador(); // Imprime: 1
temporizador(); // Imprime: El tiempo ha terminado
```

### Ejercicio 6: Encapsulamiento de Propiedades

**Descripción:** Crea una función `crearPersona` que devuelva un objeto con métodos para obtener y cambiar el nombre y la edad de una persona. Las propiedades `nombre` y `edad` deben estar encapsuladas y no ser accesibles directamente.

**Requisitos:**
- Métodos para obtener y cambiar el nombre.
- Métodos para obtener y cambiar la edad.

```javascript
function crearPersona(nombreInicial, edadInicial) {
  // Tu código aquí
}

const persona = crearPersona("Cristian", 30);
console.log(persona.obtenerNombre()); // Imprime: Cristian
persona.cambiarNombre("Juan");
console.log(persona.obtenerNombre()); // Imprime: Juan
console.log(persona.obtenerEdad()); // Imprime: 30
persona.cambiarEdad(35);
console.log(persona.obtenerEdad()); // Imprime: 35
```

### Ejercicio 7: Contador Avanzado

**Descripción:** Crea una función `crearContadorAvanzado` que devuelva un objeto con métodos para incrementar, decrementar y obtener el valor del contador.

**Requisitos:**
- `incrementar` debe incrementar el contador en 1.
- `decrementar` debe decrementar el contador en 1.
- `obtenerContador` debe devolver el valor actual del contador.

```javascript
function crearContadorAvanzado() {
  // Tu código aquí
}

const contador = crearContadorAvanzado();
contador.incrementar();
contador.incrementar();
contador.decrementar();
console.log(contador.obtenerContador()); // Imprime: 1
```

### Ejercicio 8: Función de Memorización

**Descripción:** Crea una función `memoria` que acepte una función `fn` y devuelva una nueva función que recuerde los resultados de `fn` para cada entrada.

**Requisitos:**
- La función devuelta debe almacenar en caché los resultados de `fn` y devolver el resultado almacenado en caché cuando se llame con los mismos argumentos.

```javascript
function memoria(fn) {
  // Tu código aquí
}

const suma = (a, b) => a + b;
const sumaMemorizada = memoria(suma);
console.log(sumaMemorizada(1, 2)); // Calcula y devuelve: 3
console.log(sumaMemorizada(1, 2)); // Devuelve el resultado en caché: 3
console.log(sumaMemorizada(2, 3)); // Calcula y devuelve: 5
```

### Ejercicio 9: Creación de Módulo con Closure

**Descripción:** Crea una función `crearModuloCarro` que devuelva un objeto con métodos para establecer y obtener las propiedades de un carro. Las propiedades `marca`, `modelo` y `año` deben estar encapsuladas.

**Requisitos:**
- Métodos para establecer `marca`, `modelo` y `año`.
- Métodos para obtener `marca`, `modelo` y `año`.

```javascript
function crearModuloCarro() {
  // Tu código aquí
}

const carro = crearModuloCarro();
carro.establecerMarca("Toyota");
carro.establecerModelo("Corolla");
carro.establecerAnio(2022);
console.log(carro.obtenerMarca()); // Imprime: Toyota
console.log(carro.obtenerModelo()); // Imprime: Corolla
console.log(carro.obtenerAnio()); // Imprime: 2022
```

### Ejercicio 10: Aplicación Completa con Closure

**Descripción:** Crea una función `crearCuentaBancaria` que devuelva un objeto con métodos para depositar, retirar y obtener el saldo. El saldo debe estar encapsulado.

**Requisitos:**
- `depositar` debe aumentar el saldo.
- `retirar` debe disminuir el saldo.
- `obtenerSaldo` debe devolver el saldo actual.

```javascript
function crearCuentaBancaria() {
  // Tu código aquí
}

const cuenta = crearCuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(50);
console.log(cuenta.obtenerSaldo()); // Imprime: 50
cuenta.retirar(60); // Imprime: Saldo insuficiente
console.log(cuenta.obtenerSaldo()); // Imprime: 50
```

Estos ejercicios te ayudarán a practicar y consolidar tu comprensión de closures en JavaScript. Si necesitas ayuda con algún ejercicio específico o tienes alguna duda, ¡no dudes en preguntar!