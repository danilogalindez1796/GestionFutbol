import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Equipos{
    id:number;
    nombre:string;
    anio_fundado:number;
    dni_presidente:number;
}

const ListarEquipos: React.FC =()=>{
    const navigate=useNavigate()
    const [equipos,setEquipos]=useState<Equipos[]>([])
    const Listar= async ()=>{
     const rest=await  fetch('http://localhost:7000/equipos')
     const datos= await rest.json()
     console.log(datos)
     setEquipos(datos.data);

    }
    useEffect(()=>{
        Listar();
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Año Fundado</th>
                        <th>Dni Presidente</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        equipos.map((index)=>(
                            <tr>
                                <td>{index.id}</td>
                                <td>{index.nombre}</td>
                                <td>{index.anio_fundado}</td>
                                <td>{index.dni_presidente}</td>
                            </tr>
                         ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default ListarEquipos;