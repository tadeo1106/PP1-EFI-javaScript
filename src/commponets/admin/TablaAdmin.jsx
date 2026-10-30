export function TablaAdmin({
  columnas = [],
  filas = [],
  loading = false,
  error = null,
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
          Error al cargar los datos desde la API. Por favor verificá que el backend esté corriendo en http://127.0.0.1:8000.
        </p>
      </div>
    );
  }

  if (filas.length === 0) {
    return (
      <div className="border border-black bg-white p-12 text-center my-6">
        <p className="font-mono text-sm uppercase tracking-wider text-neutral-500">
          No hay registros
        </p>
      </div>
    );
  }

  return (
    <div className="border border-black bg-white overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-black bg-neutral-100">
            {columnas.map((col) => (
              <th
                key={col.key || col.label}
                className="p-3 font-mono text-xs uppercase tracking-wider border-r border-black"
              >
                {col.label}
              </th>
            ))}
            <th className="p-3 font-mono text-xs uppercase tracking-wider text-center w-40">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr
              key={fila.id}
              className="border-b border-black last:border-b-0 hover:bg-neutral-50 transition-colors"
            >
              {columnas.map((col) => (
                <td
                  key={col.key || col.label}
                  className="p-3 font-mono text-sm border-r border-black"
                >
                  {fila[col.key]}
                </td>
              ))}
              <td className="p-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="border border-black px-2.5 py-1 font-mono text-xs uppercase tracking-wider hover:bg-neutral-950 hover:text-white transition-colors cursor-pointer"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="border border-black px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-red-700 hover:bg-red-700 hover:text-white transition-colors cursor-pointer"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
