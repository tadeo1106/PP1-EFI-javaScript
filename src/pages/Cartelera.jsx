import { Outlet, NavLink } from "react-router-dom";
import { Navar } from "../commponets/navar";
import { Footer } from "../commponets/Footer";
import { useGeneros } from "../hook/UseGeneros";
import { CheckboxGeneros } from "../commponets/CheckboxGeneros";
import { useState } from "react";

export function Cartelera() {
  const [generoSelecionado, SetGeneroSelecionado] = useState("todos");
  const { generos, isloading, err } = useGeneros();

  const handleSelectGenero = (nombre) => {
    SetGeneroSelecionado((prev) => (prev === nombre ? "todos" : nombre));
  };

  return (
    <>
      <div className="m-5">
        <Navar />
        <div className="grid grid-cols-4 mt-25 mx-25">
          <main className="flex flex-col gap-20">
            <div>
              <h1 className="font-mono text-3xl mb-5 text-gray-400">vista</h1>
              <div className="flex flex-col">
                <NavLink
                  to="/cartelera/en-cartelera"
                  className={({ isActive }) =>
                    `font-semibold text-left p-2 text-2xl border-l-4 hover:scale-110 duration-400 ${
                      isActive
                        ? "border-red-600 text-red-600"
                        : "border-gray-200 hover:text-red-600"
                    }`
                  }
                >
                  Cartelera
                </NavLink>
                <NavLink
                  to="/cartelera/proximamente"
                  className={({ isActive }) =>
                    `font-semibold text-left p-2 text-2xl border-l-4 hover:scale-110 duration-400 ${
                      isActive
                        ? "border-red-600 text-red-600"
                        : "border-gray-200 hover:text-red-600"
                    }`
                  }
                >
                  proximamente
                </NavLink>
              </div>
            </div>

            <div>
              <h1 className="font-mono mb-4 text-2xl text-gray-400">Genero</h1>
              <div>
                <CheckboxGeneros
                  genero="Todos"
                  isCheked={generoSelecionado === "todos"}
                  onChange={() => SetGeneroSelecionado("todos")}
                />
                {isloading && (
                  <p className="font-mono text-xs text-gray-400">
                    Cargando géneros...
                  </p>
                )}
                {err && (
                  <p className="font-mono text-xs text-red-600">
                    Error al cargar géneros
                  </p>
                )}
                {generos &&
                  generos.map((genero, index) => (
                    <CheckboxGeneros
                      key={genero.id}
                      index={index}
                      genero={genero.nombre}
                      isCheked={generoSelecionado === genero.nombre}
                      onChange={() => handleSelectGenero(genero.nombre)}
                    />
                  ))}
              </div>
            </div>
          </main>

          <section className="col-span-3">
            <Outlet context={{ generoSelecionado }} />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
