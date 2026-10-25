import { useEffect, useState } from "react";
import { GetPeliculas } from "../api/GetPeliculas";

export function usePeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeliculas()
      .then((data) => setPeliculas(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { peliculas, loading, error };
}
