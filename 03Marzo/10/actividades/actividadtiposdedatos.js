//Arrays de objetos
const peliculas = [
    {
        titulo: "Inception",
        director: "Christopher Nolan",
        año: 2010
    },
    {
        titulo: "Interstellar",
        director: "Christopher Nolan",
        año: 2014
    }
  ];
  
  console.log(peliculas, "\n");

  // mostrar los titulos de las peliculas
  peliculas.forEach(pelicula => {
    console.log("Título: ", pelicula.titulo)
  })
  // agregar unna nueva pelicula al array
  peliculas.push({
    titulo: "El Condemorr...",
    director: "Berlanga",
    año: 1996
  })
  
  console.log(peliculas, "\n")