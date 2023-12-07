let btnComprar = document.getElementById("comprar");
let listaProducto = [];
btnComprar.addEventListener("click", () => {
  if (localStorage.getItem("productos")) {
    listaProducto = JSON.parse(localStorage.getItem("productos"));
    listaProducto.push({
      img: "./pagina4.jpg",
      nombre: "Zapass",
      id: "4",
      precio: "100",
    });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  } else {
    listaProducto.push({ img: "./pagina4.jpg", nombre: "Zapass" });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  }
});
