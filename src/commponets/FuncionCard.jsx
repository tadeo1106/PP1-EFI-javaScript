export function FuncionCard({ dia, hora, precio, dia_num, mes }) {
  return (
    <div className="flex justify-between border-b ">
      <div className="p-4">
        <h1 className="font-black text-4xl ">
          {dia} {hora}
        </h1>
        <h1 className="text-2xl font-semibold text-red-600">
          {dia_num} {mes}
        </h1>
      </div>
      <div className="p-4">
        <h1 className=" font-mono text-2xl border-b ">{precio}$</h1>
      </div>
    </div>
  );
}
