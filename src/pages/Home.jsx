import { MovieCard } from "../commponets/CardPelicula";
import { Hero } from "../commponets/Hero";
import { Navar } from "../commponets/navar";
import { Footer } from "../commponets/Footer";
import { useFunciones } from "../hook/UseFunciones";
import { NavLink } from "react-router-dom";
import { usePeliculas } from "../hook/UsePeliculas";
import { FormatearFecha } from "../utils/FormatearFecha";
export function Home() {
  const { proximasFunciones, isLoading, error } = useFunciones();
  const { peliculas, loading, err } = usePeliculas("proximamente", 3);
  return (
    <>
      <div className="m-5">
        <Navar />
        <section className="mt-10 mb-50">
          <Hero />

          <div className="border-b border-black mt-25 dark:border-neutral-800">
            <h1 className="font-mono text-2xl p-2"> En Cartelera</h1>
          </div>
          <div className="grid gap-7 grid-cols-3  mt-10 mx-5 ">
            {proximasFunciones.map((funcion) => {
              const fecha = FormatearFecha(funcion.fecha_hora);

              return (
                <MovieCard
                  id={funcion.pelicula.id}
                  dia={fecha.dia_num}
                  etiqueta={"esta semena"}
                  imagen={funcion.pelicula.portada}
                  titulo={funcion.pelicula.nombre}
                  mes={fecha.mes}
                ></MovieCard>
              );
            })}
          </div>
          <div className="flex justify-end group relative transition-all ">
            <NavLink
              to="/cartelera/en-cartelera"
              className="font-mono hover:text-red-600 mx-5 mt-2 p-2 border-b duration-400"
            >
              explorar cartelera →
            </NavLink>
          </div>
          <div className="border-b  mt-25 dark:border-neutral-800 ">
            <h1 className="font-mono text-2xl p-2">Proximamente</h1>
          </div>
          <div className="grid gap-7 grid-cols-3  mt-10 mx-5">
            {peliculas.map((pelicula) => (
              <MovieCard
                id={pelicula.id}
                etiqueta={"proximamente"}
                imagen={pelicula.portada}
                titulo={pelicula.nombre}
              ></MovieCard>
            ))}
          </div>
          <div className="flex justify-end ">
            <NavLink
              to="/cartelera/proximamente"
              className="font-mono mx-5 mt-2 p-2 border-b hover:text-red-600 duration-400"
            >
              explorar proximos estrenos →
            </NavLink>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
