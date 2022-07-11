//////// ¿Qué se implementó en ES12?

//// replaceAll, a diferencia de replace() reemplaza todas las incidencias
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python")
console.log(replacedString)
const replacedString2 = string.replaceAll("JavaScript", "Python")
console.log(replacedString2)

//// Metodos privados agregando # al inicio de la declaración
class Message {
  #show(val) {
    console.log(val)
  };
}

const message = new Message();
message.show("Hola")

//// Promise.any para retornar la primera promesa resuelta

const promise1 = new Promise((resolve, reject) => reject(1))
const promise2 = new Promise((resolve, reject) => resolve(2))
const promise3 = new Promise((resolve, reject) => resolve(3))

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response))

//// Un objeto WeakRef consiste en mantener una referencia débil a otro objeto

class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

//// Nuevos operadores comparadores

// Antes de ES2021
x && (x = y)
x || (x = y)
x ?? (x = y)

// Después de ES2021
x &&= y
x ||= y
x ??= y