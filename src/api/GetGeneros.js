export async function GetGeneros(page = 1, size = 10) {
  try {
    const respuesta = await fetch(
      `http://127.0.0.1:8000/generos/?page=${page}&size=${size}`,
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
    const respuesta = await fetch(`http://127.0.0.1:8000/generos/${id}`);
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
