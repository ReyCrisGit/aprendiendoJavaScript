let cadena =
  "Lorem lorem dolor sit, amet lorem adipisicing elit. Harum quod iure corporis vero temporibus fugit sint, maxime maiores ut tenetur reprehenderit commodi, impedit reiciendis velit! Pariatur ad nobis fugiat tempore!";
let expReg = new RegExp("lorem", "");
let expReg2 = /lorem{1}/gi;

console.log(expReg.test(cadena));
// !test es bool

console.log(expReg.exec(cadena));
// arreglo con objetos con informacion
