function valoracion(palabra) {
  switch (palabra) {
    case "Muy mala":
      console.log("Lo lamentamos mucho");
      break;

    case "Mala":
      console.log("Lamentamos por esta mala experiencia");
      break;

    case "Mediocre":
      console.log("Esperamos mejorar en tu proxima experiencia");
      break;

    case "Buena":
      console.log("Gracias por valorarnos");
      break;

    case "Muy buena":
      console.log("Muchas gracias, eres el mejor xd");
      break;

    default:
      break;
  }
}

valoracion("Muy buena");
