import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import rinconparts from "./img/logo/rinconparts.png";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

/* Barra de Navegacion */

const NavBar = () => {
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img src={rinconparts} alt=" "/>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link to="/">
                                <Nav.Link>Inicio</Nav.Link>
                            </Link>

                            <Link to="/contacto">
                                <Nav.Link>Contacto</Nav.Link>
                            </Link>

                            <Link to="/accesorios/categoria/1">
                                <Nav.Link>Accesorios</Nav.Link>
                            </Link>
                        </Nav>
                        
                        <Nav>
                            <Link to="/registrarse">
                                <Nav.Link>Registrarse</Nav.Link>
                            </Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;