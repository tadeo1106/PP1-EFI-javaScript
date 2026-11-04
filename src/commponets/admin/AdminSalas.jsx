import { useState } from "react";
import { useSalas } from "../../hook/UseSalas";
import {
  GetSalas,
  CrearSala,
  ActualizarSala,
  EliminarSala,
} from "../../api/GetSalas";
import { CampoTexto } from "../general/CampoTexto";
import { TablaAdmin } from "./TablaAdmin";

export function AdminSalas() {
  const { salas, loading, error } = useSalas();
  const [listaLocal, setListaLocal] = useState(null);
  const lista = listaLocal ?? salas;

  const [nombre, setNombre] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const mostrarFeedback = (tipo, mensaje) => {
    setFeedback({ tipo, mensaje });
    setTimeout(() => setFeedback(null), 5000);
  };

  const handleCancelar = () => {
    setNombre("");
    setCapacidad("");
    setEditandoId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      mostrarFeedback("error", "El nombre de la sala es obligatorio");
      return;
    }
    if (!capacidad || Number(capacidad) <= 0) {
      mostrarFeedback("error", "La capacidad debe ser mayor a 0");
      return;
    }

    try {
      const data = { nombre, capacidad: Number(capacidad) };
      if (editandoId) {
        await ActualizarSala(editandoId, data);
        mostrarFeedback("", "Sala actualizada correctamente");
      } else {
        await CrearSala(data);
        mostrarFeedback("", "Sala creada correctamente");
      }
      handleCancelar();
      const res = await GetSalas();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback("error", "Error al guardar la sala");
    }
  };

  const handleEditar = (fila) => {
    setNombre(fila.nombre);
    setCapacidad(fila.capacidad);
    setEditandoId(fila.id);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("Estas seguro de eliminar esta sala?")) return;
    try {
      await EliminarSala(id);
      mostrarFeedback("exito", "Sala eliminada correctamente");
      if (editandoId === id) {
        handleCancelar();
      }
      const res = await GetSalas();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback(
        "error",
        "Error al eliminar la sala (puede tener funciones asignadas)",
      );
    }
  };

  const columnas = [
    { key: "nombre", label: "Nombre" },
    { key: "capacidad", label: "Capacidad" },
  ];

  const filas = lista.map((s) => ({
    id: s.id,
    nombre: s.nombre,
    capacidad: s.capacidad,
  }));

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-black bg-white dark:bg-neutral-800 p-6 mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold">
            {editandoId ? "Editar sala" : "Nueva sala"}
          </h3>
          {feedback && (
            <div
              className={`font-mono text-xs px-3 py-1.5 border ${
                feedback.tipo === "error"
                  ? "bg-red-50 border-red-700 text-red-700 font-bold"
                  : "bg-neutral-100 border-neutral-300 text-neutral-800"
              }`}
            >
              {feedback.mensaje}
            </div>
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

        <div className="mt-6 flex justify-end gap-3">
          {editandoId && (
            <button
              type="button"
              onClick={handleCancelar}
              className="border border-black px-6 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="bg-neutral-950 text-white hover:bg-red-700 transition-colors font-mono px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer"
          >
            {editandoId ? "Actualizar" : "Agregar"}
          </button>
        </div>
      </form>

      <TablaAdmin
        columnas={columnas}
        filas={filas}
        loading={loading}
        error={error}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
        onCancelar={handleCancelar}
        editandoId={editandoId}
      />
    </div>
  );
}
