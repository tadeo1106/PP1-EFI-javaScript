import { MovieCard } from "../commponets/CardPelicula";
import { Hero } from "../commponets/Hero";
import { Navar } from "../commponets/navar";
import { Footer } from "../commponets/Footer";
import { useFunciones } from "../hook/UseFunciones";
export function Home() {
  const { proximasFunciones, isLoading, error } = useFunciones();

  return (
    <>
      <div className="m-5">
        <Navar />
        <section className="mt-10 mb-50">
          <Hero />

          <div className="border-b border-black mt-25">
            <h1 className="font-mono p-2"> En Cartelera</h1>
          </div>
          <div className="grid gap-7 grid-cols-3  mt-10 mx-5">
            {proximasFunciones.map((funcion) => {
              const fecha = new Date(funcion.fecha_hora);
              const mes = fecha
                .toLocaleDateString("es-AR", { month: "short" })
                .replace(".", "")
                .slice(0, 3);

              return (
                <MovieCard
                  dia={fecha.getDate()}

                  imagen={funcion.pelicula.portada}
                  titulo={funcion.pelicula.nombre}
                  mes={mes}
                ></MovieCard>
              );
            })}
          </div>
          <div className="flex justify-end ">
            <a href="" className="font-mono mx-5 mt-2 p-2 border-b">
              explorar cartelera →
            </a>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
