export function CampoTexto({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`input-${name}`}
        className="font-mono text-xs tracking-wider uppercase text-neutral-800"
      >
        {label}
      </label>
      <input
        id={`input-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Ingresar ${label.toLowerCase()}...`}
        required={required}
        className="bg-white text-black placeholder:text-neutral-400 border border-black p-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
      />
    </div>
  );
}
