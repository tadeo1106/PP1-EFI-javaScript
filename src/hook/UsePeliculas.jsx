import { useEffect, useState } from "react";
import { GetPeliculas } from "../api/GetPeliculas";

export function usePeliculas(estado, limit) {
  const [peliculas, setPeliculas] = useState([]);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeliculas(estado, limit)
      .then((data) => setPeliculas(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [estado, limit]);

  return { peliculas, loading, err };
}
