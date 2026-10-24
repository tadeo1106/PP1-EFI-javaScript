export function Hero() {
  return (
    <div className="relative border border-black min-h-[400px] flex flex-col items-center justify-center px-6 py-10">
      {/* Línea fina decorativa arriba */}
      <span className="absolute top-2 left-2 right-2 h-px bg-black" />

      {/* Etiqueta roja */}
      <p className="font-mono text-xs tracking-wid text-red-600 mb-4">
        Luces <span className="mx-1">·</span> Cámara{" "}
        <span className="mx-1">·</span> Emoción
      </p>

      {/* Título gigante */}
      <h1 className="text-center font-black text-7xl md:text-9xl">
        Hoy en <br /> cartelera
      </h1>

      {/* Rombos */}
      <div className="mt-8 flex items-center gap-3">
        <span className="w-2 h-2 bg-red-600 rotate-45" />
        <span className="w-3.5 h-3.5 bg-black rotate-45" />
        <span className="w-2 h-2 bg-red-600 rotate-45" />
      </div>
    </div>
  );
}
