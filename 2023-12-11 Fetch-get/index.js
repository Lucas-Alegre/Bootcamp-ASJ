let img = document.getElementById("img");
let button = document.getElementById("button");
let h2 = document.getElementById("h2");

console.log("utilizando FETCH");

fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => response.json()) //convertir a JSON
  .then((json) => {
    console.log(json)
    h2.innerText = json.value;
    img.setAttribute("src", json.icon_url);
  })
  .catch((error) => console.log("Ocurrió un error: " + error));

button.addEventListener("click", () => {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      h2.innerText = json.value;
      //info.innerText = json.name;
      //imagen.setAttribute("src", json.sprites.front_default);
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});
