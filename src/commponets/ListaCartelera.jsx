import { useOutletContext } from "react-router-dom";
import { usePeliculas } from "../hook/UsePeliculas";
import { CarteleraCard } from "./CardPelicula";

export function ListaCartelera({ estado }) {
  const { generoSelecionado = "todos" } = useOutletContext();

  const { peliculas, loading, err } = usePeliculas(estado, 10);

  const tituloSeccion =
    estado === "en-cartelera" ? "Cartelera" : "Proximamente";

  if (loading) {
    return (
      <div>
        <div className="text-5xl px-0 pb-3 mb-8 border-b-2 dark:border-neutral-800">
          <h1 className="font-bold uppercase">{tituloSeccion}</h1>
        </div>
        <div className="flex justify-center items-center h-64">
          <p className="font-mono text-xl animate-pulse text-neutral-600">
            Cargando películas...
          </p>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div>
        <div className="border-b-2 text-5xl px-0 pb-3 mb-8 dark:border-neutral-800">
          <h1 className="font-bold uppercase">{tituloSeccion}</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-64 gap-2">
          <p className="font-mono text-xl text-red-600">
            Error al cargar las películas.
          </p>
        </div>
      </div>
    );
  }

  const peliculasFiltradas =
    generoSelecionado === "todos"
      ? peliculas
      : peliculas.filter(
          (pelicula) => pelicula.genero?.nombre === generoSelecionado,
        );

  return (
    <div>
      <div className="border-b-2 text-5xl px-0 pb-3 dark:border-neutral-800">
        <h1 className="font-bold uppercase">{tituloSeccion}</h1>
      </div>

      {peliculasFiltradas.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-mono text-lg text-neutral-500">
            No se encontraron películas para el género "{generoSelecionado}".
          </p>
        </div>
      ) : (
        <div key={`${estado}-${generoSelecionado}`}>
          {peliculasFiltradas.map((pelicula, index) => (
            <CarteleraCard
              key={pelicula.id}
              id={pelicula.id}
              index={index}
              imagen={pelicula.portada}
              titulo={pelicula.nombre}
              duracion={pelicula.duracion}
              genero={pelicula.genero?.nombre}
            />
          ))}
        </div>
      )}
    </div>
  );
}
