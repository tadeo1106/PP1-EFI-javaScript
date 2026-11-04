import { HomePeliculaCard } from "./CardPelicula";
import { NavLink } from "react-router-dom";
export function SeccionHomePeliculas({
  titulo,
  etiqueta,
  peliculas,
  linkTo,
  linkTexto,
  loading,
  error,
}) {
  return (
    <>
      <div className="border-b border-black mt-25 dark:border-neutral-800">
        <h1 className="font-mono text-2xl p-2"> {titulo}</h1>
      </div>

      {loading && (
        <div className="flex justify-center items-center align-middle p-10">
          <p className="font-mono text-sm uppercase tracking-wider animate-pulse text-neutral-600">
            Cargando registros...
          </p>
        </div>
      )}
      {error && (
        <div className="flex justify-center align-middle p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold mb-1">
            Error al cargar los datos
          </p>
        </div>
      )}

      <div className="grid gap-7 grid-cols-3 mt-10 mx-5">
        {peliculas.map((pelicula) => (
          <HomePeliculaCard
            key={pelicula.id}
            id={pelicula.id}
            etiqueta={etiqueta}
            imagen={pelicula.portada}
            titulo={pelicula.nombre}
          />
        ))}
      </div>
      <div className="flex justify-end group relative transition-all">
        <NavLink
          to={linkTo}
          className="font-mono hover:text-red-600 mx-5 mt-2 p-2 border-b duration-400"
        >
          {linkTexto}
        </NavLink>
      </div>
    </>
  );
}
