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
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeliculas(estado, limit, page, estado_semana, genero_id)
      .then((data) => setPeliculas(data.items || data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [estado, limit, page, estado_semana, genero_id]);

  return { peliculas, loading, isLoading: loading, isloading: loading, err, error: err };
}
