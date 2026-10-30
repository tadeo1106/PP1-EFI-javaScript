import { useEffect, useState } from "react";
import { GetGeneroDetalle } from "../api/GetGeneros";

export function useGeneroDetalle(id) {
  const [genero, setGenero] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    GetGeneroDetalle(id)
      .then((data) => setGenero(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    genero,
    loading,
    isLoading: loading,
    isloading: loading,
    error,
    err: error,
  };
}
