//////// ¿Qué se implementó en ES9?
//// Rest: Los parámetros rest consisten en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array. Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.
const obj = {
  name: "Juan",
  age: 27,
  country: "CL"
};

let {name, ...all} = obj;
console.log(name, all);

//// Propagación con ..., para juntar arrays u objetos
const obj2 = {
  name: "Juan",
  age: 27,
}

const obj3 = {
  ...obj2,
  country: "CL"
}

console.log(obj2, obj3);

//// Metodo finally, se ejecuta luego de que se termina de ejecutar una promesa
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Hello World"), 1000)
    } else {
      reject(new Error("Test Error"))
    }
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("the end"));

//// Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación. En JavaScript se crea estre patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(day, month, year)