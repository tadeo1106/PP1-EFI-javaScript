export async function GetPeliculas(estado) {
  try {
    const respuesta = await fetch(
      `http://127.0.0.1:8000/peliculas/?estado=${estado}&page=1&size=10`,
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
