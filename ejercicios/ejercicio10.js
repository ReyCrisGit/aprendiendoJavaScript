function Producto(nombre, precio, cantidadStock) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidadStock = cantidadStock;
}

function Libro(nombre, precio, cantidadStock, autor, genero) {
  Producto.call(this, nombre, precio, cantidadStock);
  this.autor = autor;
  this.genero = genero;
}

Libro.prototype = Object.create(Producto.prototype);
Libro.prototype.constructor = Libro;

Libro.prototype.obtenerInformacion = function () {
  console.log(
    `Libro: ${this.nombre}\nPrecio: ${this.precio}\nCantidad en Stock ${this.cantidadStock}\nAutor: ${this.autor}\nGenero: ${this.genero}`
  );
};

const libro = new Libro("Maria", 40, 1, "Carlos", "Romantisismo");
libro.obtenerInformacion();
