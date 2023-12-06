let btnComprar = document.getElementById("comprar");
let listaProducto = [];
btnComprar.addEventListener("click", () => {
  if (localStorage.getItem("productos")) {
    listaProducto = JSON.parse(localStorage.getItem("productos"));
    listaProducto.push({
      img: "./pagina2.jpg",
      nombre: "remera",
      id: "2",
      precio: "340",
    });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  } else {
    listaProducto.push({ img: "./pagina2.jpg", nombre: "remera" });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  }
});
