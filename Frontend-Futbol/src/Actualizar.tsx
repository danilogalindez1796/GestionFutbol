import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Equipos{
    id:number;
    nombre:string;
    anio_fundado:number;
    dni_presidente:number;
}

const Actualizar: React.FC =()=>{
    const navigate=useNavigate()
    const [equipos,setEquipos]=useState<Equipos[]>([])
    const Listar= async ()=>{
     const rest=await  fetch('http://localhost:7000/equipos')
     const datos= await rest.json()
     console.log(datos)
     setEquipos(datos.data);

    }

    const Eliminar = async(id:number)=>{
        console.log(id)
        const restp=await fetch(`http://localhost:7000/Equipos/${id} `,
            {
                method:'DELETE'
            })
        const msj= await restp.json()
        console.log(msj)
        Listar()
    }

    const actualizar2 = (ids: number) => {
      navigate('/ActualizarEq', { state: ids });
};


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
                                <td><button onClick={()=>Eliminar(index.id)}>Eliminar</button></td>
                                <td><button onClick={()=>actualizar2(index.id)}>Actualizar</button></td>

                            </tr>
                         ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default Actualizar;