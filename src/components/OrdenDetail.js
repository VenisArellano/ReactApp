import {useState, useEffect} from "react";
import {firestore} from "./Firebase";
import Loading from "./Loading";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const OrdenDetail = (id) => {

    const [compra, setCompra] = useState({});
    const [show, setShow] = useState(true);

    useEffect(()=> {
        const OC = firestore.collection('OC').doc(id.id).get()
        OC.then(res => setCompra(res.data()))
    }, [])

    return (
        <>
            {!!compra ? 
                <div className="ordenCompra">
                    <Alert show={show} variant="success">
                        <p>Su orden de compra es: <Alert.Heading>{id.id}</Alert.Heading></p>
                        <p>Total de la Compra: <strong>${compra.TotalPrice}</strong></p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">Cerrar Orden</Button>
                        </div>
                    </Alert>
                </div>
            :
                <Loading/>
            }
        </>
    )
}

export default OrdenDetail;