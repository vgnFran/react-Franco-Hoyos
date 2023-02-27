import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Cart } from "../../Pages/Cart/Cart"
import { useNavigate } from "react-router-dom"

const ItemDetail = ({detail}) => {

  // console.log(detail)
  const [count,setCount]= useState(0)

  
  const toCart= (e)=>{
    e.preventDefault()
    if (count > 0){
      console.log({...detail,quantity:count})      
    }
   
    }
    
  const navigate= useNavigate()  


    
  return (
    <div className="detail-container">
      <div className="detail">
        <img src={detail.imagen} alt={detail.nombre} />
        <h2> {detail.nombre} </h2>
        <h3> $ {detail.precio} </h3>
        <h4>Cantidad disponible: ({detail.cantidad})</h4>
        <ItemCount count={count} setCount={setCount} cantidad={detail.cantidad}/>
        <button onClick={toCart}>Agregar al Carrito</button>
        <div className="buttons-fin">
          <button onClick={()=>{navigate('/')}}>Seguir comprando</button>
          <button onClick={()=>{navigate('/cart')}}>Finalizar Compra</button>    
        </div>

      </div>
        
    </div>
  )
}

export default ItemDetail