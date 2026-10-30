import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Cartelera } from "./pages/Cartelera";
import { ListaCartelera } from "./commponets/cartelera/ListaCartelera";
import { Pelicula } from "./pages/Pelicula";
import { TemaProvider } from "./context/temaContext";
import { AdminPeliculas } from "./commponets/admin/AdminPeliculas";
import { AdminFunciones } from "./commponets/admin/AdminFunciones";
import { AdminSalas } from "./commponets/admin/AdminSalas";
import { AdminGeneros } from "./commponets/admin/AdminGeneros";

function App() {
  return (
    <BrowserRouter>
      <TemaProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Navigate to="/admin/peliculas" replace />} />
          <Route path="/admin/*" element={<Admin />}>
            <Route index element={<Navigate to="peliculas" replace />} />
            <Route path="peliculas" element={<AdminPeliculas />} />
            <Route path="funciones" element={<AdminFunciones />} />
            <Route path="salas" element={<AdminSalas />} />
            <Route path="generos" element={<AdminGeneros />} />
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
      </TemaProvider>
    </BrowserRouter>
  );
}

export default App;
