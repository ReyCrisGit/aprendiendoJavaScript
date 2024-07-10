let a = ["x", 10, "x", 2, "10", 10, true, true];
//let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cont = 0;
//console.log(b);
for (let i = 0; i < a.length; i++) {
  cont = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[i] === a[j]) {
      console.log(`${a[i]} = ${a[j]}`);
      cont++;
    }
  }
  console.log(`contador = ${cont}`);
  if (cont === 1) {
    console.warn("No Hay duplicados");
  } else {
    console.error(`${a[i]} existe`);
    a[i] = a.splice(i, a[i]);
    console.log(`a = ${a}`);
  }
}
console.log(a);
