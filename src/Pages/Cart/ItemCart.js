import { useState, useEffect } from "react"
import ItemCount from "../../Componentes/ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const ItemCart = ({prod}) => {
    const {updateItem}=useContext(CartContext)
    const [quantity,setQuantity]=useState(prod.quantity)

    useEffect(()=>{
        updateItem(prod.id,quantity)
    },[quantity])
  return (
    <div className="prod-cart">
            <img src={`/images/${prod.imagen}`} alt={prod.nombre} />
            <p>{prod.nombre}</p>
            <p>{`Precio: $${prod.precio}`}</p>
            <ItemCount count={quantity} setCount={setQuantity} cantidad={prod.cantidad}/>
            
    </div>
  )
}

export default ItemCart