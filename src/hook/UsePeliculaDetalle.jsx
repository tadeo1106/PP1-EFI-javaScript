import { useState } from "react";
import { GetPeliculasDetalle } from "../api/GetPeliculas";
import { useEffect } from "react";

export function usePeliculaDetalle(id) {
  const [error, setError] = useState(null);
  const [pelicula, setPelicula] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    GetPeliculasDetalle(id)
      .then((peli) => setPelicula(peli))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { pelicula, error, err: error, isLoading, loading: isLoading };
}
