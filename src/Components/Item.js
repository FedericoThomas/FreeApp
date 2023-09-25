import { Link } from "react-router-dom"

const Item  = ({ id, name, img, price}) => {
    return (
        <div id="Card">
            <img src={img} /> 
            <h4>{name}</h4>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item