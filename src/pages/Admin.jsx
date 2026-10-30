import { NavLink, Outlet } from "react-router-dom";
import { Navar } from "../commponets/general/navar";
import { Footer } from "../commponets/general/Footer";

const SECCIONES = [
  { key: "peliculas", titulo: "Películas" },
  { key: "funciones", titulo: "Funciones" },
  { key: "salas", titulo: "Salas" },
  { key: "generos", titulo: "Géneros" },
];

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
            {SECCIONES.map(({ key, titulo }) => (
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
                {titulo}
              </NavLink>
            ))}
          </div>

          {/* Subruta anidada activa */}
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
