import { useEffect, useState } from "react";
import { GetGeneros } from "../api/GetGeneros";

export function useGeneros() {
  const [generos, setGeneros] = useState([]);
  const [err, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetGeneros()
      .then((data) => setGeneros(data.items))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { generos, isLoading, err };
}
