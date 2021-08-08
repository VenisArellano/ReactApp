import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const greeting = "Nuestro Catalogo"

    return(
        <>
            <body>
                <Header/>
                {/*<ItemListContainer informacion={greeting}/>*/}

                <p>Implementacion del ItemDetailContainer</p>

                <ItemDetailContainer informacion={greeting}/>
            </body>
        </>
    )
}

export default App
