import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Navbar";
import ListarEquipos from "./ListarEquipos";
import FormularioEquipos from "./FormularioEquipos";
import EditarEquipo from "./ActualizarEq";
import Actualizar from "./Actualizar";




const App: React.FC = () => {
  return (
    <Router>
      <Navbars></Navbars>
      <Routes>
        <Route path="/Crear"element={<FormularioEquipos></FormularioEquipos>}></Route>
        <Route path="/Listar" element={<ListarEquipos></ListarEquipos>}></Route>
        <Route path="/Actualizar" element={<Actualizar></Actualizar>}></Route>
        <Route path="/ActualizarEq" element={<EditarEquipo></EditarEquipo>}></Route>
      </Routes>
    </Router>
  )
}
export default App
