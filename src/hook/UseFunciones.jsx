import { useEffect, useState } from "react";
import { GetFuncionesProximas, GetFunciones } from "../api/GetFunciones";

export function useFunciones() {
  const [proximasFunciones, setProximasFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFuncionesProximas()
      .then((data) => setProximasFunciones(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { proximasFunciones, loading, error };
}

export function useTodasFunciones() {
  const [funciones, setFunciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFunciones()
      .then((data) => setFunciones(Array.isArray(data) ? data : data.items || []))
      .catch(() => {
        // Fallback si /funciones/ no existe pero /funciones/proximas sí
        return GetFuncionesProximas().then((data) =>
          setFunciones(Array.isArray(data) ? data : data.items || [])
        );
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { funciones, loading, error };
}
