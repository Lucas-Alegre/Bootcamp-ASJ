let fibonacci = [0, 1];
let numero = 0;

function mostrarSecuenciaDeFibonacci() {
  for (i = 0; i <= 20; i++) {
    numero = fibonacci.at(-1) + fibonacci.at(-2);
    fibonacci.push(numero);
  }
}

mostrarSecuenciaDeFibonacci()

let numeroCorte = 8;
let aux = [];

for (let i = 0; i < numeroCorte+2; i++) {
  aux.push(fibonacci[i]);
}

console.log(aux);