export function CampoSelect({
  label,
  name,
  value,
  onChange,
  opciones = [],
  required = true,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`select-${name || label}`}
        className="font-mono text-xs tracking-wider uppercase text-neutral-800"
      >
        {label}
      </label>
      <select
        id={`select-${name || label}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white text-black placeholder:text-neutral-400 border border-black p-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
      >
        <option value="" className="bg-white text-black">
          Seleccionar {label.toLowerCase()}...
        </option>
        {opciones.map((opcion) => {
          const val = typeof opcion === "object" ? opcion.value : opcion;
          const txt = typeof opcion === "object" ? opcion.label : opcion;
          return (
            <option key={val} value={val} className="bg-white text-black">
              {txt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
