function Producto(nombre, precio, cantidadStock) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidadStock = cantidadStock;
}
const producto = new Producto("Manzana", 10.0, 100);
console.log(producto);
const producto2 = new Producto("Sandia", 5.0, 5);
console.log(producto2);
