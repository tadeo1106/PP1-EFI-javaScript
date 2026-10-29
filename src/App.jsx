import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Cartelera } from "./pages/Cartelera";
import { ListaCartelera } from "./commponets/ListaCartelera";
import { Pelicula } from "./pages/Pelicula";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="peliculas" element={<div></div>} />
          <Route path="funciones" element={<div></div>} />
          <Route path="salas" element={<div></div>} />
          <Route path="generos" element={<div></div>} />
        </Route>
        <Route path="/cartelera/*" element={<Cartelera />}>
          <Route index element={<Navigate to="en-cartelera" replace />} />
          <Route
            path="en-cartelera"
            element={<ListaCartelera estado="en-cartelera" />}
          />
          <Route
            path="proximamente"
            element={<ListaCartelera estado="proximamente" />}
          />
        </Route>

        <Route path="/pelicula/:id" element={<Pelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
