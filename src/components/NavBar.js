import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import rinconparts from "./img/rinconparts.png";
import CartWidget from "./CartWidget";


const NavBar = () => {
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={rinconparts}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                            <NavDropdown title="Accesorios Vehiculos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#motor">Motor</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#suspension">Suspensiòn y Direcciòn</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#iluminacion">Iluminaciòn</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#neumaticos">Neumàticos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Nav>
                            <Nav.Link href="#registrarse">Registrarse</Nav.Link> 
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar