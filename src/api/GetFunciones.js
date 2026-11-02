import { API_URL } from "./config";

export async function GetFunciones(page = 1, size = 50) {
  try {
    const respuesta = await fetch(
      `${API_URL}/funciones/?page=${page}&size=${size}`,
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las funciones");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetFuncionesProximas(limit = 3) {
  try {
    const respuesta = await fetch(
      `${API_URL}/funciones/proximas?limit=${limit}`,
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las funciones proximas");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetFuncionDetalle(id) {
  try {
    const respuesta = await fetch(`${API_URL}/funciones/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la funcion");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function CrearFuncion(data) {
  try {
    const respuesta = await fetch(`${API_URL}/funciones/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al crear la funcion");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function ActualizarFuncion(id, data) {
  try {
    const respuesta = await fetch(`${API_URL}/funciones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!respuesta.ok) {
      throw new Error("error al actualizar la funcion");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function EliminarFuncion(id) {
  try {
    const respuesta = await fetch(`${API_URL}/funciones/${id}`, {
      method: "DELETE",
    });
    if (!respuesta.ok) {
      throw new Error("error al eliminar la funcion");
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
