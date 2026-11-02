import { API_URL } from "./config";

export async function GetGeneros(page = 1, size = 10) {
  try {
    const respuesta = await fetch(
      `${API_URL}/generos/?page=${page}&size=${size}`,
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar los generos");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetGeneroDetalle(id) {
  try {
    const respuesta = await fetch(`${API_URL}/generos/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar el genero");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const GetGeneroPorId = GetGeneroDetalle;

export async function CrearGenero(data) {
  try {
    const respuesta = await fetch(`${API_URL}/generos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al crear el genero");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function ActualizarGenero(id, data) {
  try {
    const respuesta = await fetch(`${API_URL}/generos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al actualizar el genero");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EliminarGenero(id) {
  try {
    const respuesta = await fetch(`${API_URL}/generos/${id}`, {
      method: "DELETE",
    });
    if (!respuesta.ok) {
      throw new Error("error al eliminar el genero");
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
