import { useState } from "react";
import { useTodasFunciones } from "../hook/UseTodasFunciones";
import { usePeliculas } from "../hook/UsePeliculas";
import { useSalas } from "../hook/UseSalas";
import { CampoTexto } from "./CampoTexto";
import { CampoSelect } from "./CampoSelect";
import { TablaAdmin } from "./TablaAdmin";

export function AdminFunciones() {
  const { funciones, loading, error } = useTodasFunciones();
  const { peliculas } = usePeliculas("", 100);
  const { salas } = useSalas();

  const [pelicula, setPelicula] = useState("");
  const [sala, setSala] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [feedback, setFeedback] = useState(null);

  const opcionesPeliculas = (peliculas || []).map((p) => ({
    value: p.nombre,
    label: p.nombre,
  }));

  const opcionesSalas = (salas || []).map((s) => ({
    value: s.nombre,
    label: s.nombre,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("Función preparada para agregar (endpoint POST pendiente de backend)");
    setTimeout(() => setFeedback(null), 4000);
  };

  const columnas = [
    { key: "pelicula", label: "Película" },
    { key: "sala", label: "Sala" },
    { key: "fecha_hora", label: "Fecha y hora" },
  ];

  const filas = (funciones || []).map((f) => ({
    id: f.id,
    pelicula: typeof f.pelicula === "object" ? f.pelicula?.nombre : f.pelicula,
    sala: typeof f.sala === "object" ? f.sala?.nombre : f.sala || "Sala Principal",
    fecha_hora: f.fecha_hora,
  }));

  return (
    <div>
      {/* Formulario escrito a mano */}
      <form onSubmit={handleSubmit} className="border border-black bg-white p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700">
            Nuevo registro
          </h3>
          {feedback && (
            <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-3 py-1 border border-neutral-300">
              {feedback}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CampoSelect
            label="Película"
            name="pelicula"
            value={pelicula}
            onChange={(e) => setPelicula(e.target.value)}
            opciones={opcionesPeliculas}
          />

          <CampoSelect
            label="Sala"
            name="sala"
            value={sala}
            onChange={(e) => setSala(e.target.value)}
            opciones={opcionesSalas}
          />

          <CampoTexto
            label="Fecha y hora"
            name="fecha_hora"
            type="datetime-local"
            value={fechaHora}
            onChange={(e) => setFechaHora(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-neutral-950 text-white hover:bg-red-700 transition-colors font-mono px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer"
          >
            Agregar
          </button>
        </div>
      </form>

      {/* Tabla con filas mapeadas */}
      <TablaAdmin
        columnas={columnas}
        filas={filas}
        loading={loading}
        error={error}
      />
    </div>
  );
}
