import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="shadow-lg py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-info fs-4">
          ⚽ FutbolApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">

            <NavDropdown
              title={<span className="text-white text-uppercase fw-semibold">🆕 Crear</span>}
              id="crear-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/crear/equipos">
                🛡️ Crear Equipos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crear/presidente">
                👔 Crear Presidente
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="text-white text-uppercase fw-semibold">📋 Listar</span>}
              id="listar-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/listar/equipos">
                📝 Listar Equipos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/listar/presidentes">
                📄 Listar Presidentes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="text-white text-uppercase fw-semibold">🔁 Actualizar</span>}
              id="actualizar-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/actualizar/equipos">
                🔧 Actualizar Equipos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/actualizar/presidentes">
                🔄 Actualizar Presidentes
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
