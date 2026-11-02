import { useEffect, useState } from "react";
import { GetFunciones } from "../api/GetFunciones";

export function useTodasFunciones() {
  const [funciones, setFunciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetFunciones()
      .then((data) => setFunciones(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { funciones, loading, error };
}
