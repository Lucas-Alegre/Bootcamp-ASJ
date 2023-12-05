let numerro1 = "";
let numerando1 = 0;
let seSumo = 0;
let seResto = 0;
let seMultiplico = 0;
let seDividio = 0;

let btn0 = document.getElementById("btn-0");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let btn7 = document.getElementById("btn-7");
let btn8 = document.getElementById("btn-8");
let btn9 = document.getElementById("btn-9");

let btndividir = document.getElementById("btn-dividir");
let btnmultiplicar = document.getElementById("btn-multiplicar");
let btnrestar = document.getElementById("btn-restar");
let btnsumar = document.getElementById("btn-sumar");
let btntotal = document.getElementById("total");
let btnigual = document.getElementById("btn-igual");

btn0.addEventListener("click", () => {
  numerro1 = numerro1 + "0";
});
btn1.addEventListener("click", () => {
  numerro1 = numerro1 + "1";
});
btn2.addEventListener("click", () => {
  numerro1 = numerro1 + "2";
});
btn3.addEventListener("click", () => {
  numerro1 = numerro1 + "3";
});

btn4.addEventListener("click", () => {
  numerro1 = numerro1 + "4";
});
btn5.addEventListener("click", () => {
  numerro1 = numerro1 + "5";
});
btn6.addEventListener("click", () => {
  numerro1 = numerro1 + "6";
});

btn7.addEventListener("click", () => {
  numerro1 = numerro1 + "7";
});
btn8.addEventListener("click", () => {
  numerro1 = numerro1 + "8";
});
btn9.addEventListener("click", () => {
  numerro1 = numerro1 + "9";
});

btnsumar.addEventListener("click", () => {
  numerando1 += parseInt(numerro1);
  numerro1 = "";
  seSumo++;
});

btnrestar.addEventListener("click", () => {
  numerando1 += parseInt(numerro1);
  numerro1 = "";
  seResto++;
});

btnmultiplicar.addEventListener("click", () => {
  numerando1 += parseInt(numerro1);
  numerro1 = "";
  seMultiplico++;
});

btndividir.addEventListener("click", () => {
  numerando1 += parseInt(numerro1);
  numerro1 = "";
  seDividio++;
});

btnigual.addEventListener("click", () => {
  let a = parseInt(numerro1);

  if (seSumo) {
    //alert(numerando1 + a);
    btntotal.innerText = numerando1 + a;
    seSumo = 0;
  }
  if (seResto) {
    btntotal.innerText = numerando1 - a;
    seResto = 0;
  }
  if (seMultiplico) {
    btntotal.innerText = numerando1 * a;
    seMultiplico = 0;
  }
  if (seDividio) {
    btntotal.innerText = numerando1 / a;
    seDividio = 0;
  }
  numerro1 = "";
  numerando1 = 0;
});
