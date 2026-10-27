import { useParams } from "react-router-dom";
import { Navar } from "../commponets/navar";
import { usePeliculaDetalle } from "../hook/UsePeliculaDetalle";
import { Footer } from "../commponets/Footer";
import { FuncionCard } from "../commponets/FuncionCard";

export function Pelicula() {
  const { id } = useParams();
  const { pelicula, error, isLoading } = usePeliculaDetalle(id);

  const DIAS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  function formatearFuncion(fechaHora) {
    const fecha = new Date(fechaHora);
    const hh = String(fecha.getHours()).padStart(2, "0");
    const mm = String(fecha.getMinutes()).padStart(2, "0");

    const dia_num = fecha.getDate();

    const mes = fecha
      .toLocaleDateString("es-AR", { month: "short" })
      .replace(".", "")
      .slice(0, 3);

    const dia = DIAS[fecha.getDay()];

    const hora = `${hh}:${mm}`;

    return { dia, hora, dia_num, mes };
  }

  if (isLoading) {
    return (
      <div className="m-5">
        <Navar />
        <div className="flex justify-center items-center h-96">
          <p className="font-mono text-xl animate-pulse">Cargando...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !pelicula) {
    return (
      <div className="m-5">
        <Navar />
        <div className="flex flex-col justify-center items-center h-96 gap-4">
          <p className="text-red-600 font-mono text-xl">
            {error ? "Error al cargar la película" : "Película no encontrada"}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="m-5">
        <Navar />
        <div className="grid grid-cols-3 mx-5">
          <div className="flex flex-col  gap-5 mt-20 ">
            <h1 className="font-extrabold text-5xl">{pelicula.nombre}</h1>
            <div className="relative w-2/5 overflow-hidden bg-neutral-100 ">
              <img
                src={pelicula.portada}
                alt={pelicula.nombre}
                className="w-full h-full object-cover   hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span className="border w-2/3 "></span>
            <h1 className="text-red-600 font-mono text-2xl">
              {pelicula.genero.nombre} . {pelicula.duracion} min
            </h1>
            <div>
              <p className="w-full max-w-2/3 text-pretty">
                {pelicula.descripcion}
              </p>
            </div>
          </div>

          <div className="mt-20 col-span-2">
            <div className="border-b-2 text-4xl px-0 pb-3">
              <h1 className="font-bold uppercase">Funciones</h1>
            </div>
            <div>
              {pelicula.funciones && pelicula.funciones.length > 0 ? (
                pelicula.funciones.map((funcion) => {
                  const { dia, hora, dia_num, mes } = formatearFuncion(
                    funcion.fecha_hora,
                  );
                  return (
                    <FuncionCard
                      key={funcion.id}
                      dia={dia}
                      hora={hora}
                      precio={funcion.precio}
                      dia_num={dia_num}
                      mes={mes}
                    />
                  );
                })
              ) : (
                <p className="text-neutral-400 font-mono mt-4">
                  PROXIMAMENTE...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
