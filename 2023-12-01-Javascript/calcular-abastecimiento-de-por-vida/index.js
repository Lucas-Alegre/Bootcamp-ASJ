var edadActual = 23;
var edadMaxima = 100;
var miSnackFavorito;
var snacksPorDia = 3;
var precioPorUnidad = 5;

var cantidadAniosEnDias = (edadMaxima - edadActual) * 365;
alert(
  "Necesitaras " +
    cantidadAniosEnDias * snacksPorDia +
    " Snacks para que te alcancen hasta los " +
    edadMaxima +
    " años. Y gastaras un total de $" +
    cantidadAniosEnDias * snacksPorDia * precioPorUnidad
);
