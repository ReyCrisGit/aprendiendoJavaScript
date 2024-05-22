# Ejercicios Parte II

### Clases y Herencia

#### Ejercicio 1 (Fácil)
**Crea una clase llamada `Animal` con propiedades como `nombre` y `edad`. Luego, crea una clase llamada `Perro` que herede de `Animal` y añada una propiedad `raza`. Instancia un objeto de `Perro` y muestra sus propiedades.**

```javascript
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }
}

const miPerro = new Perro("Fido", 3, "Labrador");
console.log(miPerro);
```

#### Ejercicio 2 (Medio)
**Añade un método `describir` a la clase `Animal` que retorne una cadena con la información del animal. Sobrescribe este método en la clase `Perro` para incluir la raza.**

```javascript
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  describir() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  describir() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`;
  }
}

const miPerro = new Perro("Fido", 3, "Labrador");
console.log(miPerro.describir());
```

#### Ejercicio 3 (Difícil)
**Crea una clase `Vehiculo` con propiedades `marca` y `modelo`. Luego, crea una clase `Auto` que herede de `Vehiculo` y añada una propiedad `puertas`. Añade un método `describir` a `Vehiculo` que retorne una cadena con la información del vehículo. Sobrescribe este método en `Auto` para incluir el número de puertas.**

```javascript
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  describir() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo);
    this.puertas = puertas;
  }

  describir() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Puertas: ${this.puertas}`;
  }
}

const miAuto = new Auto("Toyota", "Corolla", 4);
console.log(miAuto.describir());
```

### Métodos Estáticos, Getters y Setters

#### Ejercicio 4 (Fácil)
**Crea una clase llamada `Persona` con propiedades `nombre` y `edad`. Añade un método estático llamado `mayoriaDeEdad` que devuelva `true` si la edad es 18 o más, de lo contrario, `false`.**

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static mayoriaDeEdad(edad) {
    return edad >= 18;
  }
}

console.log(Persona.mayoriaDeEdad(20)); // true
console.log(Persona.mayoriaDeEdad(16)); // false
```

#### Ejercicio 5 (Medio)
**Crea una clase `Rectangulo` con propiedades `ancho` y `alto`. Añade getters y setters para ambas propiedades. Añade un getter `area` que calcule y devuelva el área del rectángulo.**

```javascript
class Rectangulo {
  constructor(ancho, alto) {
    this._ancho = ancho;
    this._alto = alto;
  }

  get ancho() {
    return this._ancho;
  }

  set ancho(valor) {
    this._ancho = valor;
  }

  get alto() {
    return this._alto;
  }

  set alto(valor) {
    this._alto = valor;
  }

  get area() {
    return this._ancho * this._alto;
  }
}

const miRectangulo = new Rectangulo(4, 5);
console.log(miRectangulo.area); // 20
miRectangulo.ancho = 6;
console.log(miRectangulo.area); // 30
```

#### Ejercicio 6 (Difícil)
**Crea una clase `CuentaBancaria` con propiedades `titular` y `saldo`. Añade un método estático `transferir` que transfiera un monto de una cuenta a otra. Utiliza getters y setters para `saldo`.**

```javascript
class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  static transferir(cuentaOrigen, cuentaDestino, monto) {
    if (cuentaOrigen.saldo >= monto) {
      cuentaOrigen.saldo -= monto;
      cuentaDestino.saldo += monto;
      return true;
    }
    return false;
  }
}

const cuenta1 = new CuentaBancaria("Alice", 1000);
const cuenta2 = new CuentaBancaria("Bob", 500);

console.log(CuentaBancaria.transferir(cuenta1, cuenta2, 300)); // true
console.log(cuenta1.saldo); // 700
console.log(cuenta2.saldo); // 800
```

### Objeto console, Date, Math, alert, confirm, prompt, expresiones regulares

#### Ejercicio 7 (Fácil)
**Utiliza el objeto `Math` para calcular el valor absoluto de -15 y redondea el resultado hacia arriba.**

```javascript
const valorAbsoluto = Math.abs(-15);
const redondeado = Math.ceil(valorAbsoluto);
console.log(redondeado); // 15
```

#### Ejercicio 8 (Medio)
**Crea una función que tome una fecha como argumento y devuelva el nombre del día de la semana. Usa el objeto `Date`.**

```javascript
function obtenerDiaSemana(fecha) {
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const dia = new Date(fecha).getDay();
  return diasSemana[dia];
}

console.log(obtenerDiaSemana("2024-05-16")); // "Jueves"
```

#### Ejercicio 9 (Difícil)
**Crea una función que valide si un correo electrónico es válido utilizando expresiones regulares.**

```javascript
function esCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

console.log(esCorreoValido("ejemplo@correo.com")); // true
console.log(esCorreoValido("ejemplo@correo")); // false
```

### Funciones anónimas autoejecutables

#### Ejercicio 10 (Fácil)
**Crea una función anónima autoejecutable que muestre "Hola Mundo" en la consola.**

```javascript
(function() {
  console.log("Hola Mundo");
})();
```

#### Ejercicio 11 (Medio)
**Crea una función anónima autoejecutable que tome dos números como argumentos y muestre su suma en la consola.**

```javascript
((a, b) => {
  console.log(a + b);
})(5, 7); // 12
```

#### Ejercicio 12 (Difícil)
**Crea una función anónima autoejecutable que tome un arreglo de números y devuelva un nuevo arreglo con esos números elevados al cuadrado.**

```javascript
const cuadrados = (function(numeros) {
  return numeros.map(n => n * n);
})([1, 2, 3, 4, 5]);

console.log(cuadrados); // [1, 4, 9, 16, 25]
```

### Módulos

#### Ejercicio 13 (Fácil)
**Crea un módulo llamado `util.js` que exporte una función llamada `saludar` que tome un nombre como argumento y devuelva un saludo. Luego, impórtalo en otro archivo y úsalo.**

**Archivo `util.js`**:
```javascript
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

**Archivo `main.js`**:
```javascript
import { saludar } from './util.js';

console.log(saludar('Cristian')); // "Hola, Cristian"
```

#### Ejercicio 14 (Medio)
**Crea un módulo llamado `math.js` que exporte dos funciones: `sumar` y `multiplicar`. Luego, impórtalo en otro archivo y úsalo para sumar y multiplicar dos números.**

**Archivo `math.js`**:
```javascript
export function sumar(a, b) {
  return a + b;
}

export function multiplicar(a, b) {
  return a * b;
}
```

**Archivo `main.js

`**:
```javascript
import { sumar, multiplicar } from './math.js';

console.log(sumar(5, 3)); // 8
console.log(multiplicar(5, 3)); // 15
```

#### Ejercicio 15 (Difícil)
**Crea un módulo llamado `calculadora.js` que exporte una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir. Luego, impórtalo en otro archivo y crea una instancia de `Calculadora` para realizar algunas operaciones.**

**Archivo `calculadora.js`**:
```javascript
export class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }
}
```

**Archivo `main.js`**:
```javascript
import { Calculadora } from './calculadora.js';

const calc = new Calculadora();

console.log(calc.sumar(5, 3)); // 8
console.log(calc.restar(5, 3)); // 2
console.log(calc.multiplicar(5, 3)); // 15
console.log(calc.dividir(6, 3)); // 2
```

¡Espero que estos ejercicios te sean útiles para mejorar tus habilidades en JavaScript! Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.