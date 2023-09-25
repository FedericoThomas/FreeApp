import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import { getProductById } from "./productsMock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    },[productId])

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>

    )
}

export default ItemDetailContainer 