import { NavLink, Outlet } from "react-router-dom";
import { Navar } from "../commponets/navar";
import { Footer } from "../commponets/Footer";

export const SECCIONES = {
  peliculas: {
    titulo: "Películas",
    campos: [
      { name: "nombre", label: "Nombre", type: "text" },
      { name: "portada", label: "Portada (URL)", type: "url" },
      { name: "duracion", label: "Duración (min)", type: "number" },
      { name: "genero", label: "Género", type: "text" },
    ],
    filas: [
      {
        id: 1,
        nombre: "Scarface",
        portada: "/scarface.jpg",
        duracion: 170,
        genero: "Crimen / Drama",
      },
      {
        id: 2,
        nombre: "The Batman",
        portada: "/batman.jpg",
        duracion: 176,
        genero: "Acción / Suspenso",
      },
      {
        id: 3,
        nombre: "Duna: Parte 2",
        portada: "/duna.jpg",
        duracion: 166,
        genero: "Ciencia Ficción",
      },
    ],
  },
  funciones: {
    titulo: "Funciones",
    campos: [
      { name: "pelicula", label: "Película", type: "text" },
      { name: "sala", label: "Sala", type: "text" },
      { name: "fecha_hora", label: "Fecha y hora", type: "datetime-local" },
    ],
    filas: [
      {
        id: 1,
        pelicula: "The Batman",
        sala: "Sala 1 - IMAX",
        fecha_hora: "2026-10-25T18:00",
      },
      {
        id: 2,
        pelicula: "Scarface",
        sala: "Sala 2 - 4DX",
        fecha_hora: "2026-10-25T21:30",
      },
      {
        id: 3,
        pelicula: "Duna: Parte 2",
        sala: "Sala 3 - Tradicional",
        fecha_hora: "2026-10-26T16:00",
      },
    ],
  },
  salas: {
    titulo: "Salas",
    campos: [
      { name: "nombre", label: "Nombre", type: "text" },
      { name: "capacidad", label: "Capacidad", type: "number" },
    ],
    filas: [
      { id: 1, nombre: "Sala 1 - IMAX", capacidad: 280 },
      { id: 2, nombre: "Sala 2 - 4DX", capacidad: 160 },
      { id: 3, nombre: "Sala 3 - Tradicional", capacidad: 220 },
    ],
  },
  generos: {
    titulo: "Géneros",
    campos: [{ name: "nombre", label: "Nombre", type: "text" }],
    filas: [
      { id: 1, nombre: "Acción" },
      { id: 2, nombre: "Ciencia Ficción" },
      { id: 3, nombre: "Terror" },
    ],
  },
};

export function Admin() {
  return (
    <>
      <div className="m-5">
        <Navar />

        <main className="mt-10 mb-28 max-w-7xl mx-auto">
          {/* Header del panel */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-black">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-red-700 uppercase">
                Panel de control
              </p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-1">
                Panel de administración
              </h1>
            </div>
          </div>

          {/* Pestañas de secciones */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(SECCIONES).map(([key, data]) => (
              <NavLink
                key={key}
                to={`/admin/${key}`}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer border border-black ${
                    isActive
                      ? "bg-neutral-950 text-white"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`
                }
              >
                {data.titulo}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
