import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Navbar";
import ListarEquipos from "./ListarEquipos";
import FormularioEquipos from "./FormularioEquipos";
import EditarEquipo from "./ActualizarEq";
import Actualizar from "./ActualizarEquipos";
import FormularioPresidente from "./FormularioPresidente";
import ListarPresidentes from "./ListarPresidente";
import ActualizarPresidentes from "./ActualizarPresidente";
import EditarPresidente from "./Actualizarps";




const App: React.FC = () => {
  return (
    <Router>
      <Navbars></Navbars>
      <Routes>
        <Route path="/crear/equipos"element={<FormularioEquipos></FormularioEquipos>}></Route>
        <Route path="/crear/presidente"element={<FormularioPresidente></FormularioPresidente>}></Route>
        <Route path="/Listar/equipos" element={<ListarEquipos></ListarEquipos>}></Route>
        <Route path="/Listar/presidentes" element={<ListarPresidentes></ListarPresidentes>}></Route>
        <Route path="/Actualizar/equipos" element={<Actualizar></Actualizar>}></Route>
        <Route path="/Actualizar/presidentes" element={<ActualizarPresidentes></ActualizarPresidentes>}></Route>
        <Route path="/ActualizarEq" element={<EditarEquipo></EditarEquipo>}></Route>
        <Route path="/ActualizarPresin" element={<EditarPresidente></EditarPresidente>}></Route>
      </Routes>
    </Router>
  )
}
export default App
