import { useState } from "react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

export function LoginAdmin({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === ADMIN_USER && password === ADMIN_PASS) {
      setError(false);
      localStorage.setItem("isAdmin", "true");
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm border border-black bg-white p-6 md:p-8">
        <p className="font-mono text-xs text-red-700 uppercase tracking-widest mb-1">
          Acceso admin
        </p>
        <h2 className="text-2xl font-black tracking-tight mb-6">
          Iniciar sesión
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="admin-usuario"
              className="font-mono text-xs uppercase tracking-wider text-neutral-800"
            >
              Usuario
            </label>
            <input
              id="admin-usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="admin"
              className="border border-black p-2 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-red-700"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="admin-password"
              className="font-mono text-xs uppercase tracking-wider text-neutral-800"
            >
              Contraseña
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              className="border border-black p-2 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-red-700"
              required
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-red-700">
              Datos incorrectos
            </p>
          )}

          <button
            type="submit"
            className="mt-2 bg-neutral-950 text-white hover:bg-red-700 transition-colors font-mono py-2.5 px-4 text-xs uppercase tracking-wider cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
