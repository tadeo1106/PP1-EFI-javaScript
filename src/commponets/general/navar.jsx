import { NavLink } from "react-router-dom";
import { useTema } from "../../context/temaContext";
import { ButtonTema } from "./ButtonTema";
const Enlaces = [
  { texto: "inicio", path: "/" },
  { texto: "cartelera", path: "/cartelera" },
];

export function Navar() {
  const { isDark, toggletema } = useTema();

  return (
    <div className="flex justify-between items-center p-5 border-b border-black dark:border-neutral-800">
      <div>
        <h1 className="font-extrabold text-4xl">CINEMA</h1>
      </div>
      <div className="flex gap-5">
        {Enlaces.map((enlace, index) => (
          <div key={enlace.path}>
            {index > 0 && (
              <span className="border-x border-black dark:border-white mr-4"></span>
            )}
            <NavLink
              to={enlace.path}
              className={({ isActive }) =>
                `font-mono text-2xl uppercase ${isActive ? "text-red-600 font-bold" : "text-black dark:text-white hover:text-red-600"}`
              }
            >
              {enlace.texto}
            </NavLink>
          </div>
        ))}
      </div>
      <ButtonTema
        onClick={toggletema}
        titulo={isDark ? "oscuro" : "claro"}
      ></ButtonTema>
    </div>
  );
}
