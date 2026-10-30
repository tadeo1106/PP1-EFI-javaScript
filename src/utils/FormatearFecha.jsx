export function FormatearFecha(fechaHora) {
  const fecha = new Date(fechaHora);
  const hh = String(fecha.getHours()).padStart(2, "0");
  const mm = String(fecha.getMinutes()).padStart(2, "0");

  const dia_num = fecha.getDate();

  const mes = fecha.toLocaleDateString("es-AR", { month: "short" });

  const dia = fecha.toLocaleDateString("es-AR", { weekday: "short" });

  const hora = `${hh}:${mm}`;

  return {
    dia: dia,
    hora: hora,
    dia_num: dia_num,
    mes: mes,
  };
}
