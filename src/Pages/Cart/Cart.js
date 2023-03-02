import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {

  const { cart, clear, deleteProduct } = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      {cart.map((prod)=>(
          <div key={prod.nombre}>
            <p>{prod.nombre}</p>
            <button id={prod.id} onClick={()=>{
              const id= prod.id
              deleteProduct(prod,id)
            }} >X</button>
          </div>
        ))}
        {cart.length > 0 && <button onClick={()=>{clear()}}>Vaciar Carrito</button>}
    </div>
  )
}
