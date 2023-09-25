import { useState} from "react"

const ItemCount = ({initial= 1}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        setCount(prev => prev + 1)

    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button>Agregar</button>
            <button onClick={increment}>+</button>
        </div>
        
    )
}

export default ItemCount