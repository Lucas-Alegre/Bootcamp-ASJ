let btnComprar = document.getElementById("comprar");
let listaProducto = [];
btnComprar.addEventListener("click", () => {
  if (localStorage.getItem("productos")) {
    listaProducto = JSON.parse(localStorage.getItem("productos"));
    listaProducto.push({ img: "./pagina33.jpg", nombre: "Jeans" , id: "3",precio: "375"});
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  } else {
    listaProducto.push({ img: "./pagina33.jpg", nombre: "Jeans" });
    localStorage.setItem("productos", JSON.stringify(listaProducto));
  }
});
