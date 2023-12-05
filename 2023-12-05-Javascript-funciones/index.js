const saludar = () => {
  console.log("Hola, buenos dias!!!");
};

const pedirAlgo = (numeroOrden) => {
  switch (numeroOrden) {
    case 1:
      let numeroOrdenProducto = parseInt(
        prompt(
          "Que producto desea?  \n 1- Gaseosa $50. \n 2- Medialuna  $100. \n 3- Cafe  $75."
        )
      );
      switch (numeroOrdenProducto) {
        case 1:
          console.log("Usted acaba de recibir una gaseosa a $50");
          total += 50;
          break;

        case 2:
          console.log("Usted acaba de recibir una Medialuna  $100");
          total += 100;
          break;

        case 3:
          console.log("Usted acaba de recibir Cafe $75");
          total += 75;
          break;

        default:
          break;
      }
      break;

    case 2:
      console.log("tu cuenta es un total de " + total);
      break;

    case 3:
      console.log(
        "Te cuento este chiste: \n Me sacaron del grupo de whatsApp de paracaidismo. Se ve que no caía bien ."
      );
      break;

    default:
      break;
  }
};

const entrarAMirar = () => {
  console.log("Hola, buenas, que disfrute este lugar");
};

let numero2 = parseInt(
  prompt(
    "Hola usuario, que desea hacer? \n 1- Saludar. \n 2- Pedir algo. \n 3- Solo entrar a mirar"
  )
);
let numero = 2;

let total = 0;
while (numero != 0) {
  switch (numero) {
    case 1:
      saludar();
      break;

    case 2:
      let numeroOrden = parseInt(
        prompt(
          "Que desea pedir?  \n 1- Pedir producto. \n 2- Pedir la cuenta. \n 3- Pedir que me cuente un chiste"
        )
      );
      pedirAlgo(numeroOrden);
      break;

    case 3:
      entrarAMirar();
      break;
  }

  numero = parseInt(
    prompt(
      "Hola usuario, que desea hacer? \n 1- Saludar. \n 2- Pedir algo. \n 3- Solo entrar a mirar"
    )
  );
}
