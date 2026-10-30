import { useState } from "react";
import { usePeliculas } from "../../hook/UsePeliculas";
import { useGeneros } from "../../hook/UseGeneros";
import { CampoTexto } from "../general/CampoTexto";
import { CampoSelect } from "../general/CampoSelect";
import { TablaAdmin } from "./TablaAdmin";

export function AdminPeliculas() {
  const { peliculas, loading, err: error } = usePeliculas("en-cartelera", 100);
  const { generos } = useGeneros();

  const [nombre, setNombre] = useState("");
  const [portada, setPortada] = useState("");
  const [duracion, setDuracion] = useState("");
  const [genero, setGenero] = useState("");
  const [feedback, setFeedback] = useState(null);

  const opcionesGeneros = (generos || []).map((g) => ({
    value: g.nombre,
    label: g.nombre,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("Película preparada para agregar (endpoint POST pendiente de backend)");
    setTimeout(() => setFeedback(null), 4000);
  };

  const columnas = [
    { key: "nombre", label: "Nombre" },
    { key: "portada", label: "Portada (URL)" },
    { key: "duracion", label: "Duración (min)" },
    { key: "genero", label: "Género" },
  ];

  const filas = (peliculas || []).map((peli) => ({
    id: peli.id,
    nombre: peli.nombre,
    portada: peli.portada,
    duracion: peli.duracion,
    genero: typeof peli.genero === "object" ? peli.genero?.nombre : peli.genero,
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
          <CampoTexto
            label="Nombre"
            name="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <CampoTexto
            label="Portada (URL)"
            name="portada"
            type="url"
            value={portada}
            onChange={(e) => setPortada(e.target.value)}
          />

          <CampoTexto
            label="Duración (min)"
            name="duracion"
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />

          <CampoSelect
            label="Género"
            name="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            opciones={opcionesGeneros}
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
