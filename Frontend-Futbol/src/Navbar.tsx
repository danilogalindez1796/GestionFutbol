import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Futbol
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Crear" className="text-white mx-2">
              Crear
            </Nav.Link>
            <Nav.Link as={Link} to="/Listar" className="text-white mx-2">
              Listar
            </Nav.Link>
            <Nav.Link as={Link} to="/Actualizar" className="text-white mx-2">
              Editar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;