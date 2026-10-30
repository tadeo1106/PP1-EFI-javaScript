import { useState } from "react";
import { useSalas } from "../../hook/UseSalas";
import { CampoTexto } from "../general/CampoTexto";
import { TablaAdmin } from "./TablaAdmin";

export function AdminSalas() {
  const { salas, loading, error } = useSalas();

  const [nombre, setNombre] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("Sala preparada para agregar (endpoint POST pendiente de backend)");
    setTimeout(() => setFeedback(null), 4000);
  };

  const columnas = [
    { key: "nombre", label: "Nombre" },
    { key: "capacidad", label: "Capacidad" },
  ];

  const filas = (salas || []).map((s) => ({
    id: s.id,
    nombre: s.nombre,
    capacidad: s.capacidad,
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
            label="Capacidad"
            name="capacidad"
            type="number"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
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
