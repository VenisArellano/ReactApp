import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import rinconparts from "./img/logo/rinconparts.png";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import {useContext} from "react";
import UseCart from "./UseCart";
import Badge from 'react-bootstrap/Badge'


/* Barra de Navegacion */

const NavBar = () => {

    const {cart} = useContext(UseCart);

    let itemsTotales = cart.reduce((sum, value) => (typeof value.quantity == "number" ? sum + value.quantity : sum),0)
    
    return(
        <>
            <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img src={rinconparts} alt=" "/>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="categorias">Inicio</Link>
                            
                            <Link to="/contacto" className="categorias">Contacto</Link>
                            
                            <Link to="/tipo/Llantas" className="categorias">Llantas</Link>
                            
                            <Link to="/tipo/Neumaticos" className="categorias">Neumàticos</Link>

                            <Link to="/tipo/Motor" className="categorias">Motor</Link>

                            <Link to="/tipo/Accesorios" className="categorias">Accesorios</Link>
                        </Nav>
                        
                        <Nav>
                            <Link to="/registrarse" className="categorias">Registrarse</Link>
                        </Nav>
                        <div>
                            {(itemsTotales > 0) ?
                                <>
                                    <div>
                                        <p className="colorText"><CartWidget/><Badge bg="dark">{itemsTotales}</Badge></p>
                                    </div>
                                </>
                                :
                                    <div>
                                        <CartWidget/>
                                    </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;