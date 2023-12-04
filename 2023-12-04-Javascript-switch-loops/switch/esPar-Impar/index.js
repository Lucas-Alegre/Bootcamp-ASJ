//let numero = parseInt(prompt("Ingrese un numero"));

function par(num) {
  switch (num%2) {
    case 1:
      console.log("impar");
      break;
    case 0:
      console.log("par");
      break;
    default:
      console.log(
        "Esto se muestra por defecto en el caso de no encontrar una coincidencia."
      );
  }
  return 0;
}

par(4)