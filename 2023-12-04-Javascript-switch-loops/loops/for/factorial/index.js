let numeroFactorial = parseInt(prompt("Ingrese un numero"));
resultado = 1;

for (let i = 1; i <= numeroFactorial; i++) {
  resultado *= i;
}

alert(resultado);
