export async function GetFuncionesProximas() {
  try {
    const respuesta = await fetch(
      "http://127.0.0.1:8000/funciones/proximas?limit=3",
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las funciones");
    }
    return respuesta.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function GetFunciones() {
  try {
    const respuesta = await fetch(
      "http://127.0.0.1:8000/funciones/?page=1&size=50",
    );
    if (!respuesta.ok) {
      throw new Error("error al cargar las funciones");
    }
    return respuesta.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
