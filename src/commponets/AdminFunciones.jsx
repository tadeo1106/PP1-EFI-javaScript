import { useTodasFunciones } from "../hook/UseFunciones";
import { usePeliculas } from "../hook/UsePeliculas";
import { useSalas } from "../hook/UseSalas";
import { AdminSeccion } from "./AdminSeccion";

export function AdminFunciones() {
  const { funciones, loading, error } = useTodasFunciones();
  const { peliculas } = usePeliculas("", 100);
  const { salas } = useSalas();

  const opcionesPeliculas = (peliculas || []).map((p) => ({
    value: p.nombre,
    label: p.nombre,
  }));

  const opcionesSalas = (salas || []).map((s) => ({
    value: s.nombre,
    label: s.nombre,
  }));

  const campos = [
    {
      name: "pelicula",
      label: "Película",
      type: "select",
      opciones: opcionesPeliculas,
    },
    {
      name: "sala",
      label: "Sala",
      type: "select",
      opciones: opcionesSalas,
    },
    { name: "fecha_hora", label: "Fecha y hora", type: "datetime-local" },
  ];

  const filas = (funciones || []).map((f) => ({
    id: f.id,
    pelicula: typeof f.pelicula === "object" ? f.pelicula?.nombre : f.pelicula,
    sala: typeof f.sala === "object" ? f.sala?.nombre : f.sala || "Sala Principal",
    fecha_hora: f.fecha_hora,
  }));

  return (
    <AdminSeccion
      campos={campos}
      filas={filas}
      loading={loading}
      error={error}
    />
  );
}
