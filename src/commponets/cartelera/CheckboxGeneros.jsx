export function CheckboxGeneros({ genero, index, isCheked, onChange }) {
  return (
    <div
      style={{ animationDelay: `${Math.min(index, 8) * 80}ms` }}
      className="... animate-fade-up motion-reduce:animate-none ..."
    >
      <label className="flex items-center gap-4 mb-4 cursor-pointer">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isCheked}
          onChange={onChange}
        />
        <span className="w-8 h-8 border-2 border-black peer-checked:bg-black dark:border-neutral-800 dark:peer-checked:bg-red-600" />
        <span>{genero}</span>
      </label>
    </div>
  );
}
