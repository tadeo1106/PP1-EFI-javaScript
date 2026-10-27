import { CarteleraCard } from "../commponets/CardPelicula";
import { Navar } from "../commponets/navar";
import { usePeliculas } from "../hook/UsePeliculas";
import { useGeneros } from "../hook/UseGeneros";
import { CheckboxGeneros } from "../commponets/CheckboxGeneros";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Footer } from "../commponets/Footer";

export function Cartelera() {
  const { estado } = useParams();
  const estadoApi = estado;

  const [generoSelecionado, SetGeneroSelecionado] = useState("todos");

  const { peliculas, loading, error } = usePeliculas(estadoApi, 10);
  const { generos, isloading, err } = useGeneros();

  const handleSelectGenero = (nombre) => {
    SetGeneroSelecionado((prev) => (prev == nombre ? "todos" : nombre));
  };

  const peliculasFiltradas =
    generoSelecionado === "todos"
      ? peliculas
      : peliculas.filter(
          (pelicula) => pelicula.genero.nombre === generoSelecionado,
        );

  return (
    <>
      <div className="m-5">
        <Navar></Navar>
        <div className="grid grid-cols-4 mt-25 mx-25">
          <div className="flex flex-col gap-20">
            <div>
              <h1 className="font-mono text-3xl mb-5 text-gray-400">vista</h1>
              <div className="flex flex-col">
                <NavLink
                  to="/cartelera/en-cartelera"
                  className={({ isActive }) =>
                    `font-semibold text-left p-2 text-2xl border-l-4 hover:scale-110 duration-400 ${isActive ? "border-red-600 text-red-600" : "border-gray-200 hover:text-red-600"}`
                  }
                >
                  Cartelera
                </NavLink>
                <NavLink
                  to="/cartelera/proximamente"
                  className={({ isActive }) =>
                    `font-semibold text-left p-2 text-2xl border-l-4 hover:scale-110 duration-400   ${isActive ? "border-red-600 text-red-600" : "border-gray-200 hover:text-red-600"}`
                  }
                >
                  proximamente
                </NavLink>
              </div>
            </div>
            <div className="">
              <h1 className="font-mono mb-4 text-2xl text-gray-400 ">Genero</h1>
              <div>
                <CheckboxGeneros
                  genero="Todos"
                  isCheked={generoSelecionado === "todos"}
                  onChange={() => SetGeneroSelecionado("todos")}
                />
                {generos.map((genero, index) => (
                  <CheckboxGeneros
                    key={genero.id}
                    index={index}
                    genero={genero.nombre}
                    isCheked={generoSelecionado === genero.nombre}
                    onChange={() => handleSelectGenero(genero.nombre)}
                  ></CheckboxGeneros>
                ))}
              </div>
            </div>
          </div>

          <section className="col-span-3 ">
            <div className="border-b-2 text-5xl px-0 pb-3 ">
              <h1 className="font-bold uppercase">Cartelera</h1>
            </div>
            <div key={`${estado}-${generoSelecionado}`}>
              {peliculasFiltradas.map((pelicula, index) => (
                <CarteleraCard
                  key={estado.id}
                  index={index}
                  imagen={pelicula.portada}
                  titulo={pelicula.nombre}
                  duracion={pelicula.duracion}
                  genero={pelicula.genero.nombre}
                ></CarteleraCard>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
