/* const producto = {
  precioTotal: 250,
  cantidadStock: 15,
  calcularTotal() {
    return this.precioTotal * this.cantidadStock;
  },
};
const total = producto.calcularTotal(12, 800);
console.log(total);
 */
// Definición de la función constructora Producto
function Producto(nombre, precioTotal, cantidadStock) {
  this.nombre = nombre;
  this.precioTotal = precioTotal;
  this.cantidadStock = cantidadStock;
}

// Método calcularTotal agregado al prototipo de Producto
Producto.prototype.calcularTotal = function () {
  return this.precioTotal * this.cantidadStock;
};

// Crear una instancia de Producto
const producto = new Producto("Manzana", 2.5, 10);

// Calcular el total utilizando el método calcularTotal
const total = producto.calcularTotal();
console.log(total); // Salida: 25
