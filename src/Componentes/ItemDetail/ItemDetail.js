import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({detail}) => {

  const [count,setCount]= useState(1)
  
  useEffect(()=>{
    setCount(detail.cantidad == 0? 0 : 1)
  },[detail])
  
  const navigate= useNavigate()  

  const {addItem, inCart, notification} = useContext(CartContext)
  
  return (
    <div className="detail-container">
      <div className="detail">
        <img src={`/images/${detail.imagen}`} alt={detail.nombre} />
        <h2> {detail.nombre} </h2>
        <h3> $ {detail.precio} </h3>
        <h4>{detail.descripcion}</h4>
        <h4>Cantidad disponible: ({detail.cantidad})</h4>

        <ItemCount count={count} setCount={setCount} cantidad={detail.cantidad}/>

        <button disabled={detail.cantidad == 0} className="button-proDetail to-cart" onClick={()=> 
          addItem(detail,count) }>Agregar al Carrito</button>

        <div className="buttons-fin">
          <button className="button-proDetail left" onClick={()=>{navigate('/')}}>Seguir comprando</button>
          <button className="button-proDetail " onClick={()=>{navigate('/cart')}}>Continuar Compra</button>    
        </div>

      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#9e6ffc", color:"white" }}/>
    </div>
  )
}

export default ItemDetail