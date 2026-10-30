import { useEffect, useState } from "react";
import { GetFunciones } from "../api/GetFunciones";

export function useTodasFunciones() {
  const [funciones, setFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFunciones()
      .then((data) => setFunciones(data.items || data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { funciones, loading, isLoading: loading, isloading: loading, error, err: error };
}
