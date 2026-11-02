import { API_URL } from "./config";

export async function GetSalas(limit = 50) {
  try {
    const respuesta = await fetch(
      `${API_URL}/salas/?page=1&size=${limit}`,
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las salas");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetSalaDetalle(id) {
  try {
    const respuesta = await fetch(`${API_URL}/salas/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la sala");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function CrearSala(data) {
  try {
    const respuesta = await fetch(`${API_URL}/salas/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al crear la sala");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function ActualizarSala(id, data) {
  try {
    const respuesta = await fetch(`${API_URL}/salas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al actualizar la sala");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EliminarSala(id) {
  try {
    const respuesta = await fetch(`${API_URL}/salas/${id}`, {
      method: "DELETE",
    });
    if (!respuesta.ok) {
      throw new Error("error al eliminar la sala");
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
