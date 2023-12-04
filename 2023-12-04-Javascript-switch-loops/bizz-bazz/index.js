/*FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".*/

let numero = parseInt(prompt("Ingrese un numero"));
let indice = 1;

while (indice <= 100) {
  if (indice % 3 === 0 && indice % 5 === 0) {
    console.log("FizzBuzz");
    indice++;
  }
  if (indice % 3 === 0) {
    if (indice !== 99) {
      indice++;
    }
    console.log("Fizz");
  }
  if (indice % 5 === 0) {
    if (indice !== 100) {
        indice++;
      }
    console.log("Buzz");
  }

  if (!(indice % 3 === 0 || indice % 5 === 0)) {
    console.log("Numero " + indice);
  }

  indice++;
}
