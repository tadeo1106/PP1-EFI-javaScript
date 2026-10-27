import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Cartelera } from "./pages/Cartelera";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/cartelera"
          element={<Navigate to="/cartelera/en-cartelera" replace />}
        />
        <Route path="/cartelera/:estado" element={<Cartelera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
