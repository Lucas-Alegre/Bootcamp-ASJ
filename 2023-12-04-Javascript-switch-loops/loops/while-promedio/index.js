let numero = parseInt(prompt("Ingrese un numero"));
let numeroAuxiliar = numero;
let suma = 0;

while (numero > 0) {
  suma += numero;
  numero--;
}

console.log("El promedio es " + suma / numeroAuxiliar);
