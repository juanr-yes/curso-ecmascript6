//////// Que se implementó en ES8?
//// Object.entries para convertir objetos a arrays
const data = {
  frontend: "Juan",
  backend: "Alberto",
  design: "Alguien que no sea yo"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//// Object.values para convertir los valores de un objeto a un array
const data2 = {
  frontend: "Juan",
  backend: "Alberto",
  design: "Alguien que no sea yo"
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//// padStart y padEnd para alterar un string al principio o al final estableciendon la longitud total del mismo ademas del contenido a incluir
const string = "hello";
console.log(string.padStart(7, "hi"))
console.log(string.padEnd(12, " -----"))

//// Trailing commas: Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.
const obj = {
  "name": "Juan",
}

//// Async y Await!!!! 
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => resolve('Hello World'), 1000)
    } else {
      reject(new Error('Test Error'))
    }
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
}

anotherFunction();