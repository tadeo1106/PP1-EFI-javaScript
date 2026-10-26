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

      <div className="relative w-28 aspect-2/3 shrink-0 m-3 overflow-hidden bg-neutral-100">
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

export function CarteleraCard({ imagen, titulo, duracion, genero, index }) {
  return (
    <div
      style={{ animationDelay: `${Math.min(index, 8) * 80}ms` }}
      className="animate-fade-up motion-reduce:animate-none "
    >
      <div
        className="flex gap-10 items-center border-b py-2 w-full
                  group relative transition-all duration-300
                   hover:bg-neutral-50 hover:zoom-120"
      >
        <span
          className="absolute left-0 top-0 h-full w-1 bg-red-600 origin-top
                     scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
        ></span>
        <div className="relative w-28 aspect-2/3 shrink-0 m-3 overflow-hidden bg-neutral-100">
          <img
            src={imagen}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl group-hover:text-red-600 transition-colors">
            {titulo}
          </h1>
          <h1 className="text-neutral-400 font-mono text-2xl py-2">
            {genero} . {duracion} min
          </h1>
        </div>
      </div>
    </div>
  );
}
