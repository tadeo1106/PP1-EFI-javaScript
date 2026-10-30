export async function GetFunciones(page = 1, size = 10) {
  try {
    const respuesta = await fetch(
      `http://127.0.0.1:8000/funciones/?page=${page}&size=${size}`,
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

export async function GetFuncionDetalle(id) {
  try {
    const respuesta = await fetch(`http://127.0.0.1:8000/funciones/${id}`);
    if (!respuesta.ok) {
      throw new Error("error al cargar la funcion");
    }
    return respuesta.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
