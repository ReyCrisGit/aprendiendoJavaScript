# Expresiones Regulares en JavaScript
Expresiones regulares en formato Markmap:

```markmap
# Curso de Expresiones Regulares en JavaScript

## Introducción
### ¿Qué son las expresiones regulares?
- Secuencias de caracteres que forman un patrón de búsqueda.
- Utilizadas para realizar coincidencias, sustituciones y validaciones de texto.

### Uso de Expresiones Regulares en JavaScript
- Métodos principales:
  - `test()`
  - `exec()`
  - `match()`
  - `replace()`
  - `search()`
  - `split()`

## Sintaxis Básica
### Literales y Metacaracteres
- Literales: `a`, `b`, `1`, `2`, `A`, `B`
- Metacaracteres: `.`, `^`, `$`, `*`, `+`, `?`, `{}`, `[]`, `()`, `|`, `\`

### Ejemplo
```javascript
const regex = /abc/;
const testString = "abcdef";
console.log(regex.test(testString)); // true
```

## Caracteres Especiales
### Punto `.`
- Coincide con cualquier carácter excepto un salto de línea.
### Ejemplo
```javascript
const regex = /a.c/;
console.log(regex.test("abc")); // true
console.log(regex.test("a c")); // true
console.log(regex.test("ac")); // false
```

### Corchetes `[]`
- Definen una clase de caracteres.
### Ejemplo
```javascript
const regex = /[abc]/;
console.log(regex.test("a")); // true
console.log(regex.test("d")); // false
```

### Rango `-`
- Define un rango de caracteres.
### Ejemplo
```javascript
const regex = /[a-z]/;
console.log(regex.test("g")); // true
console.log(regex.test("G")); // false
```

## Repeticiones
### Asterisco `*`
- Coincide con cero o más repeticiones del patrón anterior.
### Ejemplo
```javascript
const regex = /a*/;
console.log(regex.test("aaa")); // true
console.log(regex.test("b")); // true (coincide con cero 'a')
```

### Más `+`
- Coincide con una o más repeticiones del patrón anterior.
### Ejemplo
```javascript
const regex = /a+/;
console.log(regex.test("aaa")); // true
console.log(regex.test("b")); // false
```

### Interrogación `?`
- Coincide con cero o una repetición del patrón anterior.
### Ejemplo
```javascript
const regex = /a?/;
console.log(regex.test("a")); // true
console.log(regex.test("b")); // true (coincide con cero 'a')
```

## Agrupación y Alternancia
### Paréntesis `()`
- Agrupan una parte del patrón.
### Ejemplo
```javascript
const regex = /(abc)+/;
console.log(regex.test("abcabc")); // true
```

### Alternancia `|`
- Define una elección entre patrones.
### Ejemplo
```javascript
const regex = /a|b/;
console.log(regex.test("a")); // true
console.log(regex.test("b")); // true
console.log(regex.test("c")); // false
```

## Anclas
### Circunflejo `^`
- Coincide con el inicio de la línea.
### Ejemplo
```javascript
const regex = /^a/;
console.log(regex.test("abc")); // true
console.log(regex.test("bca")); // false
```

### Dólar `$`
- Coincide con el final de la línea.
### Ejemplo
```javascript
const regex = /a$/;
console.log(regex.test("bca")); // true
console.log(regex.test("abc")); // false
```

## Clases de Caracteres Predefinidas
### Dígitos `\d`
- Coincide con cualquier dígito.
### Ejemplo
```javascript
const regex = /\d/;
console.log(regex.test("1")); // true
console.log(regex.test("a")); // false
```

### No dígitos `\D`
- Coincide con cualquier carácter que no sea un dígito.
### Ejemplo
```javascript
const regex = /\D/;
console.log(regex.test("1")); // false
console.log(regex.test("a")); // true
```

### Espacios en blanco `\s`
- Coincide con cualquier espacio en blanco.
### Ejemplo
```javascript
const regex = /\s/;
console.log(regex.test(" ")); // true
console.log(regex.test("a")); // false
```

### No espacios en blanco `\S`
- Coincide con cualquier carácter que no sea un espacio en blanco.
### Ejemplo
```javascript
const regex = /\S/;
console.log(regex.test(" ")); // false
console.log(regex.test("a")); // true
```

## Métodos de String y RegExp
### `test()`
- Prueba si hay una coincidencia en la cadena.
### Ejemplo
```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
```

### `exec()`
- Ejecuta una búsqueda y devuelve un array con los resultados.
### Ejemplo
```javascript
const regex = /(\d+)/;
const result = regex.exec("123 abc");
console.log(result); // ["123", "123"]
```

### `match()`
- Devuelve las coincidencias encontradas en la cadena.
### Ejemplo
```javascript
const str = "hello world";
const regex = /hello/;
console.log(str.match(regex)); // ["hello"]
```

### `replace()`
- Reemplaza las coincidencias en la cadena.
### Ejemplo
```javascript
const str = "hello world";
const regex = /world/;
console.log(str.replace(regex, "JavaScript")); // "hello JavaScript"
```

### `search()`
- Busca una coincidencia y devuelve el índice.
### Ejemplo
```javascript
const str = "hello world";
const regex = /world/;
console.log(str.search(regex)); // 6
```

### `split()`
- Divide la cadena utilizando el patrón como delimitador.
### Ejemplo
```javascript
const str = "hello world";
const regex = / /;
console.log(str.split(regex)); // ["hello", "world"]
```

## Ejercicios Prácticos
### Validar un correo electrónico
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("test@example.com")); // true
```

### Extraer números de una cadena
```javascript
const numRegex = /\d+/g;
const str = "Hay 123 manzanas y 456 peras";
console.log(str.match(numRegex)); // ["123", "456"]
```

### Reemplazar espacios múltiples por uno solo
```javascript
const spaceRegex = /\s+/g;
const str = "Este   es    un    ejemplo";
console.log(str.replace(spaceRegex, " ")); // "Este es un ejemplo"
```

## Buenas Prácticas
### Utilizar Modificadores
- `i`: Ignorar mayúsculas y minúsculas.
- `g`: Búsqueda global.
- `m`: Multilínea.
### Ejemplo
```javascript
const regex = /hello/i;
console.log(regex.test("Hello world")); // true
```

### Escapar caracteres especiales
- Utiliza `\` para escapar caracteres especiales.
### Ejemplo
```javascript
const regex = /a\+b/;
console.log(regex.test("a+b")); // true
```

### Usar paréntesis para agrupar y capturar
### Ejemplo
```javascript
const regex = /(abc)+/;
console.log(regex.test("abcabc")); // true
```

## Recursos Adicionales
- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regex101](https://regex101.com/): Herramienta en línea para probar expresiones regulares.

## Conclusión
- Las expresiones regulares son herramientas poderosas para el manejo de texto.
- Practicar y entender la sintaxis es clave para su dominio.
```

Espero que este curso te sea útil para aprender y practicar expresiones regulares en JavaScript. ¡Buena suerte!