export function CheckboxGeneros({ genero }) {
  return (
    <label className="flex items-center gap-4 mb-4 cursor-pointer">
      <input type="checkbox" defaultChecked className="peer sr-only" />
      <span className="w-8 h-8 border-2 border-black peer-checked:bg-black" />
      <span>{genero}</span>
    </label>
  );
}
