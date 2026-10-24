import { useEffect, useState } from "react";
import { GetFuncionesProximas } from "../api/GetFunciones";

export function useFunciones() {
  const [proximasFunciones, setProximasFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFuncionesProximas()
      .then((data) => setProximasFunciones(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { proximasFunciones, loading, error };
}
