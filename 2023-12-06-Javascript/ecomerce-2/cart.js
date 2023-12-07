let arrayProductos = JSON.parse(localStorage.getItem("productos"));

let contenedorCar = document.getElementById("contenedorCar");

for (let i = 0; i < arrayProductos.length; i++) {
  const divContenedor = document.createElement("div");
  const divHijoContenedor = document.createElement("div");
  const img = document.createElement("img");
  const h5 = document.createElement("h5");
  const a = document.createElement("button");

  img.src = `${arrayProductos[i].img}`;
  img.alt = "Logo Javascript";
  img.style = "width: 18rem;";
  img.className = "card-img-top bg-dark";

  h5.className = "card-title";
  h5.innerText = "Hola cartas";

  a.className = "btn btn-primary quitar";
  a.innerText = `Quitar el ${arrayProductos[i].nombre}`;
  a.id = `${arrayProductos[i].id}`;

  divContenedor.className = "card";
  divContenedor.style = "width: 18rem;";

  divHijoContenedor.className = "card-body";
  divHijoContenedor.appendChild(h5);
  divHijoContenedor.appendChild(a);

  divContenedor.appendChild(img);
  divContenedor.appendChild(divHijoContenedor);

  contenedorCar.appendChild(divContenedor);
}
let filtrar = [];
let arrayProductosAux = JSON.parse(localStorage.getItem("productos"));

let scar = document.getElementsByClassName("quitar");

for (let i = 0; i < scar.length; i++) {
  scar[i].addEventListener("click", () => {
    filtrar = arrayProductosAux.filter((producto) => scar[i].id != producto.id);
    localStorage.setItem("productos", JSON.stringify(filtrar));
    location.href = "cart.html";
  });
}
