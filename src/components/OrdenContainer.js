import {useState, useEffect, useContext} from "react";
import UseCart from "./UseCart";
import {firestore} from "./Firebase";
import Loading from "./Loading";
import OrdenDetail from "./OrdenDetail";
import firebase from "firebase/app";
import "firebase/firestore";


const OrdenContainer = ({total}) => {

    const {cart} = useContext(UseCart);
    const [idOC, setidOC] = useState("")


    useEffect(() => {

        const collection = firestore.collection("OC")

        const buyer = {nombre:"userTest",email:"user@test.com",telefono:5455555555}

        const itemCart = cart.map(i => {
            return {id: i.item.id, title: i.item.nombre, UnitPrice: i.item.precio}
        })
        const newOC = {
            buyer: buyer,
            item: itemCart,
            data: firebase.firestore.Timestamp.fromDate(new Date()),
            TotalPrice: total
        }
        const query = collection.add(newOC)

        query.then((resultado)=>{
            setidOC(resultado.id)

        })
    }, [] )

    return (

            <div>
                {idOC.length > 0 ?
                    <OrdenDetail id={idOC}/>
                :
                    <Loading/>
                }
            </div>
    )
}

export default OrdenContainer;