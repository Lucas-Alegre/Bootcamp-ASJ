let dibujo = "";
let numero = 5;

for (let i = 0; i < numero; i++) {
  for (let j = 0; j <= i; j++) {
    dibujo += "* ";
  }
  dibujo += "\n";
}
for (let i = numero-2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    dibujo += "* ";
  }
  dibujo += "\n";
}

console.log(dibujo);
