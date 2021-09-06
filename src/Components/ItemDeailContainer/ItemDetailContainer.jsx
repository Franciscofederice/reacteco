import { useState, useEffect } from "react"
import { getProduc } from "../../utlis/promesas";
import ItemDetail from "./ItemDetail";

//codigo js

function ItemDetailContainer() {
    //codigo js
    const [ producto, setProducto ] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
       getProduc
       .then(resp => {
           setProducto(resp)
           setloading(false)
       }) 
    }, [])

    console.log(producto);

    return (
        <>
            {loading ? 
                    <h2>Cargando Productos...</h2>
                : 
                    <ItemDetail producto={producto}  />
            }
            
        </>
    )
}

export default ItemDetailContainer
