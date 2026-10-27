import { useState } from "react";
import { GetPeliculasDetalle } from "../api/GetPeliculas";
import { useEffect } from "react";

export function usePeliculaDetalle(id) {
  const [error, SetError] = useState(null);
  const [pelicula, SetPelicula] = useState([null]);
  const [isLoading, SetIsloading] = useState(true);

  useEffect(() => {
    GetPeliculasDetalle(id)
      .then((peli) => SetPelicula(peli))
      .catch((err) => SetError(err))
      .finally(() => SetIsloading(false));
  }, [id]);
  return { pelicula, error, isLoading };
}
