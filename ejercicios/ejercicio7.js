function Producto(nombre, precio, cantidadStock) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidadStock = cantidadStock;
}
const producto = new Producto("Manzana", 10.0, 100);
console.log(producto);

function Libro(nombre, precio, cantidadStock, autor, genero) {
  Producto.call(this, nombre, precio, cantidadStock);
  this.autor = autor;
  this.genero = genero;
}

Libro.prototype = new Producto();
Libro.prototype.constructor = Libro;

const libro = new Libro("Maria", 40, 1, "Carlos", "Romantisismo");
console.log(libro);
