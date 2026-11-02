import { useEffect, useState } from "react";
import { GetPeliculasDetalle } from "../api/GetPeliculas";

export function usePeliculaDetalle(id) {
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    GetPeliculasDetalle(id)
      .then((peli) => setPelicula(peli))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { pelicula, loading, error };
}
