import { useEffect, useState } from "react";
import { GetPeliculas } from "../api/GetPeliculas";

export function usePeliculas(estado) {
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeliculas(estado)
      .then((data) => setPeliculas(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [estado]);

  return { peliculas, loading, error };
}
