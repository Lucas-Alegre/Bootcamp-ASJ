let btnInput = document.getElementById("input-text");
let h1 = document.getElementById("h1");
let varAux=""
btnInput.addEventListener("keyup", () => {
  if (btnInput.value === "a" || btnInput.value === "b") {
    btnInput.value+="-"
    h1.innerText = "-";
  } else {
    h1.innerText = btnInput.value;
  }
});

