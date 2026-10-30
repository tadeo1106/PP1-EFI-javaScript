export function ButtonTema({ onClick, titulo }) {
  return (
    <button
      onClick={onClick}
      className="font-mono text-[20px] uppercase  dark:border-white cursor-pointer  transition-colors"
    >
      <span className="dark:text-red-600">[</span>
      {titulo}
      <span className="dark:text-red-600">]</span>
    </button>
  );
}
