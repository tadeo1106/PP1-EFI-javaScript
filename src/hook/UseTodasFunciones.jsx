import { useEffect, useState } from "react";
import { GetFuncionesProximas } from "../api/GetFunciones";

export function useTodasFunciones() {
  const [funciones, setFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFuncionesProximas()
      .then((data) => setFunciones(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { funciones, loading, error };
}
