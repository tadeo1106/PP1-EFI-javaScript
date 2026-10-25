import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/Cartelera" element={<Cartelera></Cartelera>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
