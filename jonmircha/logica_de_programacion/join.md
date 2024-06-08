Para convertir un array de números a un string sin las comas, puedes utilizar el método `join` del array, y pasar una cadena vacía como separador. Aquí hay un ejemplo:

### Ejemplo
```javascript
const binario = [1, 2, 3];
const a = binario.join(''); // Une los elementos del array sin separadores
console.log(a); // "123"
```

### Explicación
- **`join('')`**: El método `join` toma un argumento que especifica el separador entre los elementos del array en la cadena resultante. Al pasar una cadena vacía (`''`), los elementos del array se unen sin ningún separador, resultando en una cadena continua.

### Código completo
```javascript
const binario = [1, 2, 3];
const a = binario.join('');
console.log(a); // Output: "123"
```

### Otros ejemplos de `join`
- **Con separador personalizado**:
  ```javascript
  const binario = [1, 2, 3];
  const a = binario.join('-');
  console.log(a); // Output: "1-2-3"
  ```

- **Con espacio como separador**:
  ```javascript
  const binario = [1, 2, 3];
  const a = binario.join(' ');
  console.log(a); // Output: "1 2 3"
  ```

Utilizando `join('')`, puedes convertir fácilmente un array de números en una cadena sin comas ni espacios, resultando en una cadena continua de los números.