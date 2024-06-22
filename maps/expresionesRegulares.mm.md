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
