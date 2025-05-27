import pgDatabase from "../database/pgDatabase.js";

export default class EquiposController {

    async listarEquipos ({request, response}){
        const result = await pgDatabase.query('SELECT * FROM "Equipos"');
        return response.json ({mensaje: "Informacion del equipo obtenida", data: result.rows});
    }


    async EquiposID({params, request, response}) {
        const id=params.id;
        const result= await pgDatabase.query (`SELECT * FROM "Equipos" WHERE "id" = ${id}; `)
        return response.json({mensaje: result.rows})
    }


    async CrearEquipo ({request, response}){
        const { nombre, anio_fundado, dni_presidente } = request.body();

        if (typeof nombre !== "string") {
            return response.json({mensaje: "El equipo debe llevar un nombre."});
        }
        if (typeof anio_fundado !== "number"){
            return response.json({mensaje: "El quipo debe llevar una fecha de fundacion."})
        }
        const result = await pgDatabase.query(
            'INSERT INTO "Equipos" ( "nombre", "anio_fundado", "dni_presidente") VALUES ($1, $2, $3 ) RETURNING *',
            [nombre, anio_fundado, dni_presidente]
        );
        if (result.rowCount >0) {
            return response.json({mensaje: "Equipo nuevo creado", data:result.rows[0]});
        }
        else {
            return response.json ({mensaje:"El equipo no se creo"});
        }
    }


    async EditarEquipo({ request, response, params }) {
    const id = params.id;
    const { nombre, anio_fundado, dni_presidente } = request.body();

    const result = await pgDatabase.query(
        'UPDATE "Equipos" SET "nombre" = $1, "anio_fundado" = $2, "dni_presidente" = $3 WHERE "id" = $4',
        [nombre, anio_fundado, dni_presidente, id]
    );

    if (result.rowCount > 0) {
        return response.json({
            mensaje: "Equipo actualizado exitosamente",
            data: { id, nombre, anio_fundado, dni_presidente }
        });
    } else {
        return response.json({ mensaje: "Equipo no encontrado o no se actualizó" });
    }
  }



    async EliminarEquipo({ params, request, response }) {
        const id = params.id;

        await pgDatabase.query(
            'DELETE FROM "Equipos" WHERE id = $1',[id]);

        return response.json({ mensaje: "Equipo y presidente eliminados" });
    }




    async buscarEquipos({ request, response, params }) {
    const valor = params.valor;

    const result = await pgDatabase.query(
        `SELECT * FROM "Equipos"
         WHERE nombre ILIKE $1 OR anio_fundado = $2`,
        [`%${valor}%`, Number(valor) || -1]
    );

     if (result.rowCount > 0) {
        return response.json({
            mensaje: "Equipo encontrado exitosamente",
            data:result.rows[0]
        });
    } else {
        return response.json({ mensaje: "Equipo no encontrado"  });
    }

    }   
}