export async function GetPeliculas(
  estado = "",
  limit = 10,
  page = 1,
  estado_semana = null,
  genero_id = null,
) {
  try {
    let url = `http://127.0.0.1:8000/peliculas/?page=${page}&size=${limit}`;
    if (estado) {
      url += `&estado=${estado}`;
    }
    if (genero_id) {
      url += `&genero_id=${genero_id}`;
    }
    if (estado_semana) {
      url += `&estado_semana=${estado_semana}`;
    }
    const respuesta = await fetch(url);
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
