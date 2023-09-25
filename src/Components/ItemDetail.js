import ItemCount from "./ItemCount"



const ItemDetail = ({id, name, img, category, description, stock, price}) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img}/>
            <p> $ {price}</p>
            <p>Descripcion: {description}</p>
            <ItemCount/>
        </div>
       
    )
}

export default ItemDetail