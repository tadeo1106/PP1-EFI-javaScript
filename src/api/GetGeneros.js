export async function GetGeneros() {
  try {
    const respuesta = await fetch(
      "http://127.0.0.1:8000/generos/?page=1&size=50",
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
