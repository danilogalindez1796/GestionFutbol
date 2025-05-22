import Router from "@adonisjs/core/services/router";
import EquiposController from "../../app/controller/EquiposController.js";

const Equipos = new EquiposController()

Router.get('/equipos', Equipos.listarEquipos);
Router.get('/equipos/:id', Equipos.EquiposID);
Router.post('/equipos', Equipos.CrearEquipo);
Router.put('/equipos/:id', Equipos.EditarEquipo)
Router.delete('/equipos/:id', Equipos.EliminarEquipo)