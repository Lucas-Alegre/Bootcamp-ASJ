let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");

btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  h1.innerText=name
  h2.innerText=lastName
});
