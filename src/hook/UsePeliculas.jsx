import { useEffect, useState } from "react";
import { GetPeliculas } from "../api/GetPeliculas";

export function usePeliculas(
  estado = "",
  limit = 50,
  page = 1,
  estado_semana = null,
  genero_id = null,
) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetPeliculas(estado, limit, page, estado_semana, genero_id)
      .then((data) => setPeliculas(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [estado, limit, page, estado_semana, genero_id]);

  return { peliculas, loading, error };
}
