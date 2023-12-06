let btnComprar = document.getElementById("comprar");
let listaProducto = [];
btnComprar.addEventListener("click", () => {
  if (localStorage.getItem("productos")) {
    listaProducto = JSON.parse(localStorage.getItem("productos"));
    listaProducto.push({ img: "./buso.jpeg", nombre: "Buzo", id: "1",precio: "100" });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  } else {
    listaProducto.push({ img: "./buso.jpeg", nombre: "Buzo" });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  }
});
