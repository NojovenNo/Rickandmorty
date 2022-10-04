import "./App.css";
import Inicio from "./components/Inicio.jsx";
import Character from "./components/Personaje.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
