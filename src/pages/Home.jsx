import { MovieCard } from "../commponets/CardPelicula";
import { Hero } from "../commponets/general/Hero";
import { Navar } from "../commponets/general/navar";
import { Footer } from "../commponets/general/Footer";
import { NavLink } from "react-router-dom";
import { usePeliculas } from "../hook/UsePeliculas";

export function Home() {
  const { peliculas: enCartelera } = usePeliculas("en-cartelera", 3, 1, true);
  const { peliculas: proximamente } = usePeliculas("proximamente", 3);

  return (
    <>
      <div className="m-5">
        <Navar />
        <section className="mt-10 mb-50">
          <Hero />
          <div className="border-b border-black mt-25 dark:border-neutral-800">
            <h1 className="font-mono text-2xl p-2"> En Cartelera</h1>
          </div>
          <div className="grid gap-7 grid-cols-3 mt-10 mx-5">
            {enCartelera.map((pelicula) => (
              <MovieCard
                key={pelicula.id}
                id={pelicula.id}
                etiqueta={"esta semana"}
                imagen={pelicula.portada}
                titulo={pelicula.nombre}
              />
            ))}
          </div>
          <div className="flex justify-end group relative transition-all">
            <NavLink
              to="/cartelera/en-cartelera"
              className="font-mono hover:text-red-600 mx-5 mt-2 p-2 border-b duration-400"
            >
              explorar cartelera →
            </NavLink>
          </div>
          <div className="border-b mt-25 dark:border-neutral-800">
            <h1 className="font-mono text-2xl p-2">Proximamente</h1>
          </div>
          <div className="grid gap-7 grid-cols-3 mt-10 mx-5">
            {proximamente.map((pelicula) => (
              <MovieCard
                key={pelicula.id}
                id={pelicula.id}
                etiqueta={"proximamente"}
                imagen={pelicula.portada}
                titulo={pelicula.nombre}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <NavLink
              to="/cartelera/proximamente"
              className="font-mono mx-5 mt-2 p-2 border-b hover:text-red-600 duration-400"
            >
              explorar proximos estrenos →
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
