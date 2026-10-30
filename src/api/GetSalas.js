export async function GetSalas() {
  try {
    const respuesta = await fetch("http://127.0.0.1:8000/salas/?page=1&size=50");
    if (!respuesta.ok) {
      throw new Error("error al cargar las salas");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
