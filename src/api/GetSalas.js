export async function GetSalas(page = 1, size = 50) {
  try {
    const respuesta = await fetch(
      `http://127.0.0.1:8000/salas/?page=${page}&size=${size}`,
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
    const respuesta = await fetch(`http://127.0.0.1:8000/salas/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la sala");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
