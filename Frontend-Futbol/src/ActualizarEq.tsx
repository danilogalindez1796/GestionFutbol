import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditarEquipo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ids = location.state


  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [anio_fundado, setAnio_fundado] = useState<number>(0);
  const [dni_presidente, setDni_presidente]=useState<number>(0);
  const [mensaje, setMensaje] = useState<string>("");


  useEffect(() => {
    TraerEquipo();
  }, []);

  const TraerEquipo = async () => {
    const respuesta = await fetch(`http://localhost:7000/equipos/${ids}`);
    const dato = await respuesta.json();
    console.log(dato.data[0]);
    setId(dato.data[0].id);
    setNombre(dato.data[0].nombre);
    setAnio_fundado(dato.data[0].anio_fundado);
    setDni_presidente(dato.data[0].dni_presidente)
  };

  const actualizar = async () => {
    const msje=await fetch(`http://localhost:7000/equipos/${ids}`, 
        {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id, nombre, anio_fundado, dni_presidente }),
    });
    const mensaje= await msje.json()
    setMensaje(mensaje.mensaje)
    //navigate('/Listar')
  };

  return (
    <div>
      <input type="text" value={id}/>
      <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
      <input type="text" value={anio_fundado} onChange={(event) => setAnio_fundado(Number(event.target.value))} />
      <input type="text" value={dni_presidente} />
      <button onClick={actualizar}>Actualizar</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default EditarEquipo;