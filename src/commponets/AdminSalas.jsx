import { useSalas } from "../hook/UseSalas";
import { AdminSeccion } from "./AdminSeccion";

export function AdminSalas() {
  const { salas, isLoading, err } = useSalas();

  const campos = [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "capacidad", label: "Capacidad", type: "number" },
  ];

  const filas = (salas || []).map((s) => ({
    id: s.id,
    nombre: s.nombre,
    capacidad: s.capacidad,
  }));

  return (
    <AdminSeccion
      campos={campos}
      filas={filas}
      loading={isLoading}
      error={err}
    />
  );
}
