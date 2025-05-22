import pgDatabase from "../database/pgDatabase.js";

export default class  PresidenteController {

    async CrearPresidente ({request, response}){
        const {  dni_presidente, nombre} = request.body();

        if (typeof nombre !== "string") {
            return response.json({mensaje: "El equipo debe llevar un nombre."});
        }
        
        const result = await pgDatabase.query(
            'INSERT INTO "Presidentes" ("dni_presidente", "nombre" ) VALUES ($1, $2) RETURNING *',
            [dni_presidente, nombre]
        );
        if (result.rowCount >0) {
            return response.json({mensaje: "nuevo presidente creado", data:result.rows[0]});
        }
        else {
            return response.json ({mensaje:"El presidente no se creo"});
        }
    }



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

