let dibujo = "";
let dibujo2 = "";
let espacio;
let numeroADibujar = parseInt(
  prompt("Ingrese una cantidad de escalones a dibujar")
);

for (let i = 0; i < numeroADibujar; i++) {
  //filas
  for (let j = -1; j < i; j++) {
    //columnas de ateriscos
    dibujo += "* ";
    if (j < numeroADibujar && j > -1) {
      dibujo2 = "* " + dibujo2 + " ";
    }
  }

  if (i < numeroADibujar - 1) {
    dibujo += "\n";
  }

  dibujo2 = "\n" + dibujo2;
}
// Big O ( n 2 )

alert(dibujo + dibujo2);
