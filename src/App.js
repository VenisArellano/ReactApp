import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Cart from "./components/Cart";
import Estilos from "./components/CSS/Estilos.css";
import CartContext from "./components/CartContext";

const App = () => {

    const greeting = "Nuestro Catalogo"

    return(
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route path="/" exact>
                    <ItemListContainer informacion={greeting}/>
                </Route>

                <Route path="/tipo/:id">
                    <ItemListContainer informacion={greeting}/>
                </Route>

                <Route path="/item/:id">
                    <ItemDetailContainer/>
                </Route>

                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default App;
