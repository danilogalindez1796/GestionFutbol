import Router from "@adonisjs/core/services/router";
import PresidenteController from "../../app/controller/PresidenteController.js";

const Presidente = new PresidenteController();
Router.put('/presidente', Presidente.EditarPresidente);
Router.post('/presidente', Presidente.CrearPresidente)