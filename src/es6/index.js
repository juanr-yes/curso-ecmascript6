//// Old way
function newFunction(name, age, country) {
  var name = name || "Juan";
  var age = age || 27;
  var country = country || "Chile";
  console.log(name, age, country)
}

newFunction();

// ES6, default function values
function newFunctionES6(name = "Juan", age = 27, country = "Chile") {
  console.log(name, age, country)
}

newFunctionES6();
newFunctionES6('Alberto', 26, "Venezuela");

//// Old way
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase)


// ES6, new way to concat
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//// This way allows you to insert jump lines without added characters

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n" + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let lorem2 = `Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

console.log(lorem)
console.log(lorem2)

//// New way to refer to object attributes

let person = {
  "name": "Juan",
  "age": 27,
  "country": "Chile"
};

console.log(person.name, person.age, person.country)

let {name, age, country} = person;
console.log(name, age, country);

//// Spread operator

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

//// Var is global, let and const are block scoped

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet)
}

console.log(globalVar)
console.log(globalLet)

//// Const cannot be reassigned

const a = "b";
a = "a"; // error, no se puede reasignar.

//// When variable names matches objects attributes, you can declare them without specifying the attribute name

let name2 = "Juan";
let age2 = 27;

obj = {
  name: name2,
  age: age2
}

obj2 = {name2, age2}; // es6
console.log(obj2)

//// Arrow functionsss!!!! unlinkable "this"? and new and shorter syntax

const names = [
  {
    name: "Juan",
    age: 27
  },
  {
    name: "Yesica",
    age: 33
  },
]

let listOfNames = names.map(function(person) {
  return person.name;
})

console.log(listOfNames)

let listOfNames2 = names.map(person => person.name);

console.log(listOfNames2);

const listOfNames3 = (name, age, country) => {
  // another example
}

const listOfNames4 = name => {
  // another one
}

// const square = num => num * num; || and another one

//// Promisesssssss!!!!!!!!!!!!!! Asynchronism, new way to handle callbacks, "something is going to happen"

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('sup!!');
    } else {
      reject("out!!");
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('testing!'))
  .catch(error => console.log(error))

//// Clases: La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO). La estructura consiste en: 1. Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula). 2. La función constructora sirve para crear las variables necesarias en la instancia del objeto. 3. Para definir atributos necesitas el contexto this, que representa la instancia del objeto. 4. Métodos para definir las acciones de la clase. 5. Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

console.log(calc.sum(2, 4))

//// importar modulos

import { hello } from "./module";
console.log(hello());

//// Generadores

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World.";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);