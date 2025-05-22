import React, { useState } from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormularioEquipos: React.FC = () =>{
    const [nombre, setNombre] = useState<string>("");
    const [anio_fundado, setAnio_fundado] = useState<number>(0);
    const [dni_presidente, setDni_presidente] = useState<number>(0);
     const [mensaje, setMensaje] = useState<string>("");

    const GuardarEquipo = async () => {
        const respuesta = await fetch("http://localhost:7000/equipos",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre, anio_fundado, dni_presidente})
        });
        const msj = await respuesta.json();
        setMensaje(msj.mensaje);
    };
    return(
        <div>
            <Container>
                <Row>
                    <div>
                        <h2>Crear Nuevo Equipo</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Equipo</Form.Label>
                                <Form.Control type="text" placeholder="Escribe el Equipo" onChange={(e)=> setNombre(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Año de fundacionn</Form.Label>
                                <Form.Control type="number" placeholder="Fecha de cuando se fundo el equipo" onChange={(e) => setAnio_fundado(Number(e.target.value))}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>DNI del Presidente</Form.Label>
                                <Form.Control type="number" placeholder="Escribe el DNI del Presidente del equipo" onChange={(e) => setDni_presidente(Number(e.target.value))}></Form.Control>
                            </Form.Group>

                            <Button onClick={GuardarEquipo}>Nuevo Equipo</Button>
                        </Form>
                        {mensaje &&(<Alert variant="success">{mensaje}</Alert>)}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default FormularioEquipos