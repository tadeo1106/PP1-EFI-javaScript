import { CarteleraCard } from "../commponets/CardPelicula";
import { Navar } from "../commponets/navar";
import { usePeliculas } from "../hook/UsePeliculas";
import { useGeneros } from "../hook/UseGeneros";
import { CheckboxGeneros } from "../commponets/CheckboxGeneros";

export function Cartelera() {
  const { peliculas, loading, error } = usePeliculas();
  const { generos, isloading, err } = useGeneros();

  return (
    <div className="m-5">
      <Navar></Navar>
      <div className="grid grid-cols-4 mt-25 mx-25">
        <div className="flex flex-col gap-20">
          <div>
            <h1 className="font-mono text-3xl mb-5 text-gray-400">vista</h1>
            <h1 className="font-semibold border-l-4 border-red-600 p-2 text-2xl">
              Cartelera
            </h1>
            <h1 className="font-semibold border-l-4 p-2 border-gray-200 text-2xl">
              proximamente
            </h1>
          </div>
          <div className="">
            <h1 className="font-mono mb-4 text-2xl text-gray-400 ">Genero</h1>
            <div>
              {generos.map((genero, index) => (
                <CheckboxGeneros
                  index={index}
                  genero={genero.nombre}
                ></CheckboxGeneros>
              ))}
            </div>
          </div>
        </div>

        <section className="col-span-3 ">
          <div className="border-b-2 text-5xl px-0 pb-3 ">
            <h1 className="">Cartelera</h1>
          </div>
          <div>
            {peliculas.map((pelicula, index) => (
              <CarteleraCard
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
  );
}
