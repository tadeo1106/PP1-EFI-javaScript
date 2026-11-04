import { useState } from "react";
import { useTodasFunciones } from "../../hook/UseTodasFunciones";
import { usePeliculas } from "../../hook/UsePeliculas";
import { useSalas } from "../../hook/UseSalas";
import {
  GetFunciones,
  CrearFuncion,
  ActualizarFuncion,
  EliminarFuncion,
} from "../../api/GetFunciones";
import { CampoTexto } from "../general/CampoTexto";
import { CampoSelect } from "../general/CampoSelect";
import { TablaAdmin } from "./TablaAdmin";

export function AdminFunciones() {
  const { funciones, loading, error } = useTodasFunciones();
  const { peliculas } = usePeliculas("", 100);
  const { salas } = useSalas();
  const [listaLocal, setListaLocal] = useState(null);
  const lista = listaLocal ?? funciones;

  const [peliculaId, setPeliculaId] = useState("");
  const [salaId, setSalaId] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [precio, setPrecio] = useState("");
  const [entradasDisponibles, setEntradasDisponibles] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const opcionesPeliculas = peliculas.map((p) => ({
    value: p.id,
    label: p.nombre,
  }));

  const opcionesSalas = salas.map((s) => ({
    value: s.id,
    label: `${s.nombre} (Capacidad: ${s.capacidad})`,
  }));

  const mostrarFeedback = (tipo, mensaje) => {
    setFeedback({ tipo, mensaje });
    setTimeout(() => setFeedback(null), 5000);
  };

  const handleCancelar = () => {
    setPeliculaId("");
    setSalaId("");
    setFechaHora("");
    setPrecio("");
    setEntradasDisponibles("");
    setEditandoId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!peliculaId) {
      mostrarFeedback("error", "Tenes que seleccionar una pelicula");
      return;
    }
    if (!salaId) {
      mostrarFeedback("error", "Tenes que seleccionar una sala");
      return;
    }
    if (!fechaHora) {
      mostrarFeedback("error", "Tenes que ingresar la fecha y hora");
      return;
    }
    if (!precio || Number(precio) <= 0) {
      mostrarFeedback("error", "El precio debe ser mayor a 0");
      return;
    }
    if (!entradasDisponibles || Number(entradasDisponibles) <= 0) {
      mostrarFeedback("error", "Las entradas disponibles deben ser mayor a 0");
      return;
    }

    try {
      const data = {
        pelicula_id: Number(peliculaId),
        sala_id: Number(salaId),
        fecha_hora: fechaHora,
        precio: Number(precio),
        entradas_disponibles: Number(entradasDisponibles),
      };

      if (editandoId) {
        await ActualizarFuncion(editandoId, data);
        mostrarFeedback("", "funcion actualizada correctamente");
      } else {
        await CrearFuncion(data);
        mostrarFeedback("", "funcion creada correctamente");
      }

      handleCancelar();
      const res = await GetFunciones();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback(
        "error",
        "Error al guardar la funcion (la sala puede estar ocupada en ese horario)",
      );
    }
  };

  const handleEditar = (fila) => {
    setPeliculaId(fila.pelicula_id);
    setSalaId(fila.sala_id);
    setFechaHora(fila.fecha_hora.slice(0, 16));
    setPrecio(fila.precio);
    setEntradasDisponibles(fila.entradas);
    setEditandoId(fila.id);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Estas seguro de eliminar esta funcion?")) return;
    try {
      await EliminarFuncion(id);
      mostrarFeedback("", "funcion eliminada correctamente");
      if (editandoId === id) {
        handleCancelar();
      }
      const res = await GetFunciones();
      setListaLocal(res.items);
    } catch {
      mostrarFeedback("error", "Error al eliminar la funcion");
    }
  };

  const columnas = [
    { key: "pelicula", label: "Pelicula" },
    { key: "sala", label: "Sala" },
    { key: "fecha_hora", label: "Fecha y hora" },
    { key: "precio", label: "Precio" },
    { key: "entradas", label: "Entradas disponibles" },
  ];

  const filas = lista.map((f) => ({
    id: f.id,
    pelicula: f.pelicula.nombre,
    sala: f.sala.nombre,
    fecha_hora: f.fecha_hora,
    precio: f.precio,
    entradas: f.entradas_disponibles,
  }));

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-black bg-white dark:bg-neutral-800 p-6 mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold">
            {editandoId ? "Editar funcion" : "Nueva funcion"}
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
          <CampoSelect
            label="Pelicula"
            name="pelicula"
            value={peliculaId}
            onChange={(e) => setPeliculaId(e.target.value)}
            opciones={opcionesPeliculas}
          />

          <CampoSelect
            label="Sala"
            name="sala"
            value={salaId}
            onChange={(e) => setSalaId(e.target.value)}
            opciones={opcionesSalas}
          />

          <CampoTexto
            label="Fecha y hora"
            name="fecha_hora"
            type="datetime-local"
            value={fechaHora}
            onChange={(e) => setFechaHora(e.target.value)}
          />

          <CampoTexto
            label="Precio ($)"
            name="precio"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <CampoTexto
            label="Entradas disponibles"
            name="entradas_disponibles"
            type="number"
            value={entradasDisponibles}
            onChange={(e) => setEntradasDisponibles(e.target.value)}
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
