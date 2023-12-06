let numerro1 = "";
let numerando1 = 0;
let operacionRealizada = "";

let botonesPrueba = document.getElementsByClassName("botonesPrueba");

let btntotal = document.getElementById("total");
let btnigual = document.getElementById("btn-igual");

for (let btnPrueba of botonesPrueba) {
  btnPrueba.addEventListener("click", () => {
    if (
      btnPrueba.value === "+" ||
      btnPrueba.value === "-" ||
      btnPrueba.value === "%" ||
      btnPrueba.value === "*"
    ) {
      numerando1 += parseInt(numerro1);
      numerro1 = "";
      operacionRealizada = btnPrueba.value;
    } else {
      numerro1 = numerro1 + btnPrueba.value;
    }
  });
}


btnigual.addEventListener("click", () => {
  let a = parseInt(numerro1);

  switch (operacionRealizada) {
    case "+":
      btntotal.innerText = numerando1 + a;
      operacionRealizada = "";
      break;

    case "-":
      btntotal.innerText = numerando1 - a;
      operacionRealizada = "";
      break;

    case "*":
      btntotal.innerText = numerando1 * a;
      operacionRealizada = "";
      break;

    case "%":
      btntotal.innerText = numerando1 / a;
      operacionRealizada = "";
      break;
  }

  numerro1 = "";
  numerando1 = 0;
});
