import { useState } from "react";
import { useGeneros } from "../../hook/UseGeneros";
import {
  GetGeneros,
  CrearGenero,
  ActualizarGenero,
  EliminarGenero,
} from "../../api/GetGeneros";
import { CampoTexto } from "../general/CampoTexto";
import { TablaAdmin } from "./TablaAdmin";

export function AdminGeneros() {
  const { generos, loading, error } = useGeneros();
  const [listaLocal, setListaLocal] = useState(null);
  const lista = listaLocal ?? generos;

  const [nombre, setNombre] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const mostrarFeedback = (tipo, mensaje) => {
    setFeedback({ tipo, mensaje });
    setTimeout(() => setFeedback(null), 5000);
  };

  const handleCancelar = () => {
    setNombre("");
    setEditandoId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      mostrarFeedback("error", "el genero debe tener un nombre");
      return;
    }

    try {
      if (editandoId) {
        await ActualizarGenero(editandoId, { nombre });
        mostrarFeedback("", "genero actualizado correctamente");
      } else {
        await CrearGenero({ nombre });
        mostrarFeedback("", "genero creado correctamente");
      }
      handleCancelar();
      const res = await GetGeneros();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback("error", "Error al guardar el genero");
    }
  };

  const handleEditar = (fila) => {
    setNombre(fila.nombre);
    setEditandoId(fila.id);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("Estas seguro de eliminar este genero?")) return;
    try {
      await EliminarGenero(id);
      mostrarFeedback("exito", "genero eliminado correctamente");
      if (editandoId === id) {
        handleCancelar();
      }
      const res = await GetGeneros();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback(
        "error",
        "Error al eliminar el genero (puede tener peliculas asignadas)",
      );
    }
  };

  const columnas = [{ key: "nombre", label: "Nombre" }];

  const filas = lista.map((g) => ({
    id: g.id,
    nombre: g.nombre,
  }));

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-black bg-white dark:bg-neutral-800 p-6 mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold">
            {editandoId ? "Editar genero" : "Nuevo genero"}
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
