import Navbar from "react-bootstrap/Navbar";
import {GiCarWheel} from "react-icons/gi";


const NavBar = () => {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <container>
                    <Navbar.Brand href="#home">
                        <GiCarWheel/>
                        {' '}
                        RinconParts
                    </Navbar.Brand>
                </container>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-info" href="#">Inicio</a>
                    </li>

                    <li class="nav-item">
                        <a href="#/contacto" class="nav-link active text-info">Contacto</a>
                    </li>

                    <li class="nav-item">
                        <a href="#/registrarse" class="nav-link active text-info">Registrarse</a>
                    </li>
                </ul>
            </Navbar>
        </>
    )
}

export default NavBar