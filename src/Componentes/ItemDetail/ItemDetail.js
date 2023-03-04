import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({detail}) => {

  const [count,setCount]= useState(1)

  
  const navigate= useNavigate()  

  const {addItem, inCart} = useContext(CartContext)
  
  return (
    <div className="detail-container">
      <div className="detail">
        <img src={`/images/${detail.imagen}`} alt={detail.nombre} />
        <h2> {detail.nombre} </h2>
        <h3> $ {detail.precio} </h3>
        <h4>{detail.descripcion}</h4>
        <h4>Cantidad disponible: ({detail.cantidad})</h4>

        <ItemCount count={count} setCount={setCount} cantidad={detail.cantidad}/>

        <button className="button-proDetail" onClick={()=> addItem(detail,count) }>Agregar al Carrito</button>

        <div className="buttons-fin">
          <button className="button-proDetail" onClick={()=>{navigate('/')}}>Seguir comprando</button>
          <button className="button-proDetail" onClick={()=>{navigate('/cart')}}>Finalizar Compra</button>    
        </div>

      </div>
        
    </div>
  )
}

export default ItemDetail