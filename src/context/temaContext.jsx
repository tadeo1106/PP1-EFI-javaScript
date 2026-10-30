import { createContext, useContext, useState, useEffect } from "react";
const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(() => {
    if (localStorage.tema === "dark" || localStorage.tema === "light") {
      return localStorage.tema;
    }
    const pcDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return pcDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
  }, [tema]);

  const toggletema = () => {
    setTema((prev) => {
      const nuevoTema = prev === "dark" ? "light" : "dark";
      localStorage.tema = nuevoTema;

      return nuevoTema;
    });
  };
  return (
    <TemaContext.Provider value={{ toggletema, isDark: tema === "dark" }}>
      {children}
    </TemaContext.Provider>
  );
}
export function useTema() {
  return useContext(TemaContext);
}
