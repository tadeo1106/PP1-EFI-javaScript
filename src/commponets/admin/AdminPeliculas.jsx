import { useState } from "react";
import { usePeliculas } from "../../hook/UsePeliculas";
import { useGeneros } from "../../hook/UseGeneros";
import {
  GetPeliculas,
  CrearPelicula,
  ActualizarPelicula,
  EliminarPelicula,
} from "../../api/GetPeliculas";
import { CampoTexto } from "../general/CampoTexto";
import { CampoSelect } from "../general/CampoSelect";
import { TablaAdmin } from "./TablaAdmin";

export function AdminPeliculas() {
  const { peliculas, loading, error } = usePeliculas("", 100);
  const { generos } = useGeneros();
  const [listaLocal, setListaLocal] = useState(null);
  const lista = listaLocal ?? peliculas;

  const [nombre, setNombre] = useState("");
  const [portada, setPortada] = useState("");
  const [duracion, setDuracion] = useState("");
  const [generoId, setGeneroId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const opcionesGeneros = generos.map((g) => ({
    value: g.id,
    label: g.nombre,
  }));

  const mostrarFeedback = (tipo, mensaje) => {
    setFeedback({ tipo, mensaje });
    setTimeout(() => setFeedback(null), 5000);
  };

  const handleCancelar = () => {
    setNombre("");
    setPortada("");
    setDuracion("");
    setGeneroId("");
    setDescripcion("");
    setEditandoId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      mostrarFeedback("error", "El nombre de la pelicula es obligatorio");
      return;
    }
    if (!generoId) {
      mostrarFeedback("error", "Tenés que seleccionar un genero");
      return;
    }
    if (!duracion || Number(duracion) <= 0) {
      mostrarFeedback("error", "La duración debe ser mayor a 0 minutos");
      return;
    }

    try {
      const data = {
        nombre,
        portada: portada,
        duracion: Number(duracion),
        genero_id: Number(generoId),
        descripcion: descripcion,
      };

      if (editandoId) {
        await ActualizarPelicula(editandoId, data);
        mostrarFeedback("", "Pelicula actualizada correctamente");
      } else {
        await CrearPelicula(data);
        mostrarFeedback("", "Pelicula creada correctamente");
      }

      handleCancelar();
      const res = await GetPeliculas("", 20);
      setListaLocal(res.items);
    } catch {
      mostrarFeedback("error", "Error al guardar la pelicula");
    }
  };

  const handleEditar = (fila) => {
    const peli = lista.find((p) => p.id === fila.id);
    setNombre(peli.nombre);
    setPortada(peli.portada);
    setDuracion(peli.duracion);
    setGeneroId(peli.genero_id);
    setDescripcion(peli.descripcion);
    setEditandoId(fila.id);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("Estás seguro de eliminar esta pelicula?")) return;
    try {
      await EliminarPelicula(id);
      mostrarFeedback("", "Pelicula eliminada correctamente");
      if (editandoId === id) {
        handleCancelar();
      }
      const res = await GetPeliculas("", 20);
      setListaLocal(res.items);
    } catch {
      mostrarFeedback(
        "error",
        "Error al eliminar la pelicula (puede tener funciones asignadas)",
      );
    }
  };

  const columnas = [
    { key: "nombre", label: "Nombre" },
    { key: "genero", label: "Genero" },
    { key: "duracion", label: "Duración (min)" },
    { key: "portada", label: "Portada (URL)" },
    { key: "descripcion", label: "descripcion de la pelicula" },
  ];

  const filas = lista.map((peli) => ({
    id: peli.id,
    nombre: peli.nombre,
    genero: peli.genero.nombre,
    duracion: peli.duracion,
    portada: peli.portada,
    descripcion: peli.descripcion,
  }));

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-black bg-white dark:bg-neutral-800 p-6 mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold">
            {editandoId ? "Editar pelicula" : "Nueva pelicula"}
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
            label="Portada (URL)"
            name="portada"
            type="str"
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
            label="Genero"
            name="genero"
            value={generoId}
            onChange={(e) => setGeneroId(e.target.value)}
            opciones={opcionesGeneros}
          />

          <div className="md:col-span-2">
            <CampoTexto
              label="Descripción"
              name="descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
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
