export function MovieCard({
  dia,
  titulo,
  imagen,
  etiqueta = "ESTA SEMANA",
  mes,
}) {
  return (
    <article className="relative flex border border-black bg-white">
      <div className="w-14 shrink-0 bg-neutral-950 text-white flex flex-col items-center justify-center">
        <span className="text-3xl font-black leading-none">{dia}</span>
        <span className="font-bold text-red-700">{mes}</span>
      </div>

      <div className="relative w-28 aspect-[2/3] shrink-0 m-3 overflow-hidden bg-neutral-100">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-red-700 uppercase">
            {etiqueta}
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight">
            {titulo}
          </h3>
        </div>

        <div className="flex items-end justify-end">
          <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors">
            →
          </button>
        </div>
      </div>
    </article>
  );
}

export function CarteleraCard({ imagen, titulo, duracion, genero }) {
  return (
    <>
      <div className="flex gap-10 items-center border-b py-2 w-full ">
        <div className="relative w-28 aspect-[2/3] shrink-0 m-3 overflow-hidden bg-neutral-100">
          <img
            src={imagen}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl">{titulo}</h1>
          <h1 className="text-neutral-400 font-bold text-2xl">
            {genero}. {duracion}
          </h1>
        </div>
      </div>
    </>
  );
}
