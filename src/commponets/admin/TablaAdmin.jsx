export function TablaAdmin({
  columnas = [],
  filas = [],
  loading = false,
  error = null,
  onEditar,
  onEliminar,
  onCancelar,
  editandoId = null,
}) {
  if (loading) {
    return (
      <div className="border border-black bg-white p-12 text-center my-6">
        <p className="font-mono text-sm uppercase tracking-wider animate-pulse text-neutral-600">
          Cargando registros...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border border-black bg-white p-6 my-6 border-l-4 border-l-red-700">
        <p className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold mb-1">
          Error
        </p>
        <p className="font-mono text-sm text-neutral-800">
          Error al cargar los datos
        </p>
      </div>
    );
  }

  if (filas.length === 0) {
    return (
      <div className="border border-black bg-white p-12 text-center my-6">
        <p className="font-mono text-sm uppercase tracking-wider text-neutral-500">
          No hay registros cargados
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filas.map((fila) => {
        const estaEditando = editandoId && fila.id === editandoId;

        return (
          <div
            key={fila.id}
            className={`border bg-white dark:bg-neutral-800 p-5 flex flex-col justify-between transition-all ${
              estaEditando
                ? "border-red-700 ring-2 ring-red-700 "
                : "border-black hover:border-neutral-700"
            }`}
          >
            <div className="space-y-3 mb-4">
              {estaEditando && (
                <div className="inline-block bg-red-700 text-white font-mono text-[10px] uppercase tracking-widest px-2 py-0.5">
                  En edicion
                </div>
              )}

              {columnas.map((col) => (
                <div
                  key={col.key || col.label}
                  className="border-b border-neutral-100 dark:border-neutral-700 pb-2 last:border-b-0"
                >
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {col.label}
                  </span>
                  <span className="block font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {String(fila[col.key])}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700 flex justify-end gap-2">
              {estaEditando ? (
                <button
                  type="button"
                  onClick={() => onCancelar && onCancelar()}
                  className="border border-black px-3 py-1.5 font-mono text-xs uppercase tracking-wider  transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onEditar && onEditar(fila)}
                  className="border border-black px-3 py-1.5 font-mono text-xs uppercase tracking-wider hover:bg-neutral-950 hover:text-white transition-colors cursor-pointer"
                >
                  Editar
                </button>
              )}
              <button
                type="button"
                onClick={() => onEliminar && onEliminar(fila.id)}
                className="border border-black px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-red-700 hover:bg-red-700 hover:text-white transition-colors cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
