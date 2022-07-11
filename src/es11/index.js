//////// ¿Qué se implementó en ES11?
//// Imports dinamicos

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
})

//// nuevo tipo de dato para valores numericos muy grandes BigInt

const aBigNumber = 9007199254n;
const anotherBigNumber = BigInt(9007199254);

console.log(aBigNumber, anotherBigNumber);

//// Promise allSettled: en cambio de Promise All que se ejecuta si todas las promesas fueron resueltas, allsettled permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promise1 = new Promise ((resolve, reject) => reject("reject"))
const promise2 = new Promise ((resolve, reject) => resolve("resolve"))
const promise3 = new Promise ((resolve, reject) => resolve("resolve 2"))

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response))

//// objeto global en el navegador y su this
// console.log(window)
console.log(globalThis)

//// Nullish Coalescing: El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.
const foo = null ?? "default string";
console.log(foo);

//// Optional Chaining: Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará un undefined.
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log("email")
} else {
  console.log("feil")
}