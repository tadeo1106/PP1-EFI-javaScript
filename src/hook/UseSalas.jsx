import { useEffect, useState } from "react";
import { GetSalas } from "../api/GetSalas";

export function useSalas() {
  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetSalas()
      .then((data) => setSalas(data.items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { salas, loading, error };
}
