function Promedio(arrayAlumnos, estadoParam){
    let nuevosAlumnos=[]
    [
        { nombreCompleto: "Mariano Damian Hernandez", promedio: 8, estado: "aprobado" }]

    for ( let i=0; i< arrayAlumnos.length; i++){
        let sum=0;
        for ( let j=0; j< arrayAlumnos[i].notas.length; j++){
            sum += arrayAlumnos[i].notas[j]
        }
        let promedio = sum/ arrayAlumnos[i].notas.length
        let estadoNota= ""
        if(promedio>=6){
            estadoNota= "aprobado"
        }else{
            estadoNota= "desaprobado"
        }
        let objet={nombreCompleto: arrayAlumnos[i].nombre + " "+ arrayAlumnos[i].apellido, promedio: promedio, estado: estadoNota}
        nuevosAlumnos.push(objet);
    }
    filtrados = nuevosAlumnos.filter((e) => e.estado==estadoParam )
    return filtrados
}

let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];

console.log(Promedio(alumnos,"aprobado"))