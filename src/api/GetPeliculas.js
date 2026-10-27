export async function GetPeliculas(estado, limit) {
  try {
    const respuesta = await fetch(
      `http://127.0.0.1:8000/peliculas/?estado=${estado}&page=1&size=${limit}`,
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las peliculas");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetPeliculasDetalle(id) {
  try {
    const respuesta = await fetch(`http://127.0.0.1:8000/peliculas/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la pelicula");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
