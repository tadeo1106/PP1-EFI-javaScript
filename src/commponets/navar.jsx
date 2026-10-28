import { NavLink } from "react-router-dom";
const Enlaces = [
  { texto: "inicio", path: "/" },
  { texto: "cartelera", path: "/cartelera" },
  { texto: "admin", path: "/admin" },
];

export function Navar() {
  return (
    <div className="flex justify-between p-5 border-b border-black">
      <div>
        <h1 className="font-extrabold text-4xl">CINEMA</h1>
      </div>
      <div className="flex gap-5">
        {Enlaces.map((enlace, index) => (
          <div key={enlace.path}>
            {index > 0 && <span className="border-x border-black mr-4"></span>}
            <NavLink
              to={enlace.path}
              className={({ isActive }) =>
                `font-mono text-2xl uppercase ${isActive ? "text-red-600 font-bold" : "text-black hover:text-red-600"}`
              }
            >
              {enlace.texto}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
