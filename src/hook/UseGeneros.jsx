import { useEffect, useState } from "react";
import { GetGeneros } from "../api/GetGeneros";

export function useGeneros() {
  const [generos, setGeneros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetGeneros()
      .then((data) => setGeneros(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { generos, loading, error };
}
