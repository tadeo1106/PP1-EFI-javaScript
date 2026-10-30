import { useEffect, useState } from "react";
import { GetSalas } from "../api/GetSalas";

export function useSalas() {
  const [salas, setSalas] = useState([]);
  const [err, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetSalas()
      .then((data) => {
        if (Array.isArray(data)) {
          setSalas(data);
        } else if (data && Array.isArray(data.items)) {
          setSalas(data.items);
        } else {
          setSalas([]);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { salas, isLoading, err };
}
