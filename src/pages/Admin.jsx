import { NavLink, Outlet } from "react-router-dom";
import { Navar } from "../commponets/general/navar";
import { Footer } from "../commponets/general/Footer";

const SECCIONES = [
  { key: "peliculas", titulo: "Peliculas" },
  { key: "funciones", titulo: "Funciones" },
  { key: "salas", titulo: "Salas" },
  { key: "generos", titulo: "Generos" },
];

export function Admin() {
  return (
    <>
      <div className="m-5">
        <Navar />

        <main className="mt-10 mb-28 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-black">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-1">
                Panel de administracion
              </h1>
            </div>
          </div>

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

          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
