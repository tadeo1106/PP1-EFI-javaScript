import { usePeliculas } from "../hook/UsePeliculas";
import { useGeneros } from "../hook/UseGeneros";
import { AdminSeccion } from "./AdminSeccion";

export function AdminPeliculas() {
  const { peliculas, loading, err } = usePeliculas("", 100);
  const { generos } = useGeneros();

  const opcionesGeneros = (generos || []).map((g) => ({
    value: g.nombre,
    label: g.nombre,
  }));

  const campos = [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "portada", label: "Portada (URL)", type: "url" },
    { name: "duracion", label: "Duración (min)", type: "number" },
    {
      name: "genero",
      label: "Género",
      type: "select",
      opciones: opcionesGeneros,
    },
  ];

  const filas = (peliculas || []).map((peli) => ({
    id: peli.id,
    nombre: peli.nombre,
    portada: peli.portada,
    duracion: peli.duracion,
    genero: typeof peli.genero === "object" ? peli.genero?.nombre : peli.genero,
  }));

  return (
    <AdminSeccion
      campos={campos}
      filas={filas}
      loading={loading}
      error={err}
    />
  );
}
