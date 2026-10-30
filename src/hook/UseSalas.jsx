import { useEffect, useState } from "react";
import { GetSalas } from "../api/GetSalas";

export function useSalas() {
  const [salas, setSalas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSalas()
      .then((data) => setSalas(data.items || data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { salas, loading, isLoading: loading, isloading: loading, error, err: error };
}
