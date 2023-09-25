import React from "react"
import {useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "./productsMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    },[categoryId] )
    
    return(
        <div>
            <h1>Estos son nuestros productos</h1>
            <br></br>
            <ItemList products={products}/> 
            
        </div>

    );

}

export default ItemListContainer