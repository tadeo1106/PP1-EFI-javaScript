import { API_URL } from "./config";

export async function GetPeliculas(
  estado = "",
  limit = 10,
  page = 1,
  estado_semana = null,
  genero_id = null,
) {
  try {
    let url = `${API_URL}/peliculas/?page=${page}&size=${limit}`;
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
    const respuesta = await fetch(`${API_URL}/peliculas/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la pelicula");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function CrearPelicula(data) {
  try {
    const respuesta = await fetch(`${API_URL}/peliculas/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al crear la pelicula");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function ActualizarPelicula(id, data) {
  try {
    const respuesta = await fetch(`${API_URL}/peliculas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al actualizar la pelicula");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EliminarPelicula(id) {
  try {
    const respuesta = await fetch(`${API_URL}/peliculas/${id}`, {
      method: "DELETE",
    });
    if (!respuesta.ok) {
      throw new Error("error al eliminar la pelicula");
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
