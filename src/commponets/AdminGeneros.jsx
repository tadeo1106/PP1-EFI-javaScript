import { useGeneros } from "../hook/UseGeneros";
import { AdminSeccion } from "./AdminSeccion";

export function AdminGeneros() {
  const { generos, isLoading, err } = useGeneros();

  const campos = [{ name: "nombre", label: "Nombre", type: "text" }];

  const filas = (generos || []).map((g) => ({
    id: g.id,
    nombre: g.nombre,
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
