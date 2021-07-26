import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const greeting = "Proximamente Nuestro Catalogo"

    return(
        <>
            <body>
                <Header/>
                <ItemListContainer informacion={greeting}/>
            </body>
        </>
    )
}

export default App
