export function CampoSelect({
  label,
  name,
  value,
  onChange,
  opciones,
  required = true,
}) {
  const selectId = `select-${name}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={selectId}
        className="font-mono text-xs tracking-wider uppercase text-neutral-800 dark:text-white"
      >
        {label}
      </label>
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white dark:bg-neutral-800 text-black dark:text-white placeholder:text-neutral-400 border border-black p-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
      >
        <option value="" className="bg-white text-black">
          Seleccionar {label}...
        </option>
        {opciones.map((opcion) => {
          const valor = opcion.value;
          const texto = opcion.label;

          return (
            <option key={valor} value={valor} className="bg-white text-black">
              {texto}
            </option>
          );
        })}
      </select>
    </div>
  );
}
