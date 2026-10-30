import { useState } from "react";

const INPUT_CLASS =
  "bg-white text-black placeholder:text-neutral-400 border border-black p-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-700";

export function AdminSeccion({
  campos = [],
  filas = [],
  loading = false,
  error = null,
  onAgregar,
}) {
  const estadoInicial = () => {
    const init = {};
    campos.forEach((campo) => {
      init[campo.name] = campo.defaultValue ?? "";
    });
    return init;
  };

  const [formData, setFormData] = useState(estadoInicial);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAgregar) {
      onAgregar(formData);
    } else {
      setFeedback("Registro preparado para enviar (endpoint POST pendiente de backend)");
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  return (
    <div>
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="border border-black bg-white p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-red-700">
            Nuevo registro
          </h3>
          {feedback && (
            <span className="font-mono text-xs text-neutral-600 bg-neutral-100 px-3 py-1 border border-neutral-300">
              {feedback}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campos.map((campo) => (
            <div key={campo.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={`input-${campo.name}`}
                className="font-mono text-xs tracking-wider uppercase text-neutral-800"
              >
                {campo.label}
              </label>

              {campo.type === "select" ? (
                <select
                  id={`input-${campo.name}`}
                  name={campo.name}
                  value={formData[campo.name] ?? ""}
                  onChange={(e) => handleChange(campo.name, e.target.value)}
                  required={campo.required !== false}
                  className={INPUT_CLASS}
                >
                  <option value="" className="bg-white text-black">
                    Seleccionar {campo.label.toLowerCase()}...
                  </option>
                  {(campo.opciones || []).map((opcion) => (
                    <option
                      key={opcion.value}
                      value={opcion.value}
                      className="bg-white text-black"
                    >
                      {opcion.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`input-${campo.name}`}
                  type={campo.type || "text"}
                  name={campo.name}
                  value={formData[campo.name] ?? ""}
                  onChange={(e) => handleChange(campo.name, e.target.value)}
                  placeholder={`Ingresar ${campo.label.toLowerCase()}...`}
                  required={campo.required !== false}
                  className={INPUT_CLASS}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-neutral-950 text-white hover:bg-red-700 transition-colors font-mono px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer"
          >
            Agregar
          </button>
        </div>
      </form>

      {/* Estados visibles: Loading / Error */}
      {loading && (
        <div className="border border-black bg-white p-12 text-center my-6">
          <p className="font-mono text-sm uppercase tracking-wider animate-pulse text-neutral-600">
            Cargando registros...
          </p>
        </div>
      )}

      {error && !loading && (
        <div className="border border-black bg-white p-6 my-6 border-l-4 border-l-red-700">
          <p className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold mb-1">
            Error
          </p>
          <p className="font-mono text-sm text-neutral-800">
            Error al cargar los datos desde la API. Por favor verificá que el backend esté corriendo en http://127.0.0.1:8000.
          </p>
        </div>
      )}

      {/* Tabla */}
      {!loading && !error && (
        <div className="border border-black bg-white overflow-x-auto">
          {filas.length === 0 ? (
            <div className="p-12 text-center">
              <p className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                No hay registros
              </p>
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
}
