import { useEffect, useState } from "react";
import { GetFuncionesProximas } from "../api/GetFunciones";

export function useFunciones(limit) {
  const [proximasFunciones, setProximasFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFuncionesProximas(limit)
      .then((data) => setProximasFunciones(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [limit]);

  return { proximasFunciones, loading, isLoading: loading, error };
}
