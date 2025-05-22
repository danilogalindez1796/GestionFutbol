import pgDatabase from "../database/pgDatabase.js";

export default class  PresidenteController {


 async EditarPresidente({ request, response, params }) {
    const dni = params.dni;
    const { nombre } = request.body();

    const result = await pgDatabase.query(
        'UPDATE "Presidentes" SET "nombre" = $1,  WHERE "dni" = $2',
        [nombre, dni]
    );

    if (result.rowCount > 0) {
        return response.json({
            mensaje: "Equipo actualizado exitosamente",
            data: { dni, nombre }
        });
    } else {
        return response.json({ mensaje: "Equipo no encontrado o no se actualizó" });
    }
  }
}

