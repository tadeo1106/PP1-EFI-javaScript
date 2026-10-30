export function AdminSeccion({ campos = [], filas = [] }) {
  return (
    <div>
      {/* Formulario */}
      <form onSubmit={(e) => e.preventDefault()} className="border border-black bg-white p-6 mb-8">
        <h3 className="font-mono text-xs uppercase tracking-widest text-red-700 mb-4">
          Nuevo registro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campos.map((campo) => (
            <div key={campo.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={`input-${campo.name}`}
                className="font-mono text-xs tracking-wider uppercase text-neutral-800"
              >
                {campo.label}
              </label>
              <input
                id={`input-${campo.name}`}
                type={campo.type || "text"}
                name={campo.name}
                placeholder={`Ingresar ${campo.label.toLowerCase()}...`}
                className="border border-black p-2 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-red-700"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="bg-neutral-950 text-white hover:bg-red-700 transition-colors font-mono px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer"
          >
            Agregar
          </button>
        </div>
      </form>

      {/* Tabla */}
      <div className="border border-black bg-white overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-black bg-neutral-100">
              {campos.map((campo) => (
                <th
                  key={campo.name}
                  className="p-3 font-mono text-xs uppercase tracking-wider border-r border-black"
                >
                  {campo.label}
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
                {campos.map((campo) => (
                  <td
                    key={campo.name}
                    className="p-3 font-mono text-sm border-r border-black"
                  >
                    {fila[campo.name]}
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
    </div>
  );
}
