function traducir(palabra) {
  switch (palabra) {
    case "casa":
      console.log("house");
      break;
    case "perro":
      console.log("dog");
      break;
    case "pelota":
      console.log("ball");
      break;
    case "arbol":
      console.log("tree");
      break;
    case "genio":
      console.log("genius");
      break;
    default:
      console.log("La palabra ingresada es incorrecta");
  }
  return 0;
}

traducir("pero")