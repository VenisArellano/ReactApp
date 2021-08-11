import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {

    const greeting = "Nuestro Catalogo"

    return(
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route path="/" exact>
                    <ItemListContainer informacion={greeting}/>
                </Route>

                <Route path="/categoria/:id">
                    <ItemListContainer informacion={greeting}/>
                </Route>

                <Route path="/item/:id">
                    <ItemDetailContainer/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default App
