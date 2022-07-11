//////// ¿Qué se implementó en ES10?
//// aplanamiento de arrays mediante .flat()
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//// flatMap permite el mismo funcionamiento de flat con la posibilidad de iterar primero los elementos
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

//// trimStart permite remover espacios vacios del principio de un string
let hello = "              hello world";
console.log(hello);
console.log(hello.trimStart());


//// trimEnd permite remover espacios vacios del final de un string
let hello2 = "hello world               ";
console.log(hello2);
console.log(hello2.trimEnd());

//// El catch del 'trycatch' ahora no requiere obligatoriamente recibir el parametro error
try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}

//// Object.fromEntries para convertir arrays a objetos
let entries = [["name", "Juan"], ["age", 27]];
console.log(Object.fromEntries(entries));

//// Ahora los tipos primitivos symbol tienen una propiedad description que sirve para mostrar su valor.
let mySymbol = `Mi simbolo`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);