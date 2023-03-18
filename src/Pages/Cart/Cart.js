import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

export const Cart = () => {
  const navigate= useNavigate()
  const { cart, clear, deleteProduct } = useContext(CartContext)
  console.log(cart)

  const createOrder=()=>{
    const db= getFirestore()
    const query= collection(db, "orders")
    const buyer= {
      email: "prueba@prueba.com",
      nombre: "Franco",
      telefono: "1131741010"
    }
    addDoc(query,{
      buyer: buyer,
      products:cart.map((product)=>{
        return ({
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          quantity: product.quantity
        })
      }),
      total: cart.reduce((acc,curr)=> acc + curr.precio * curr.quantity, 0)
    } )
    .then((resp)=>{
      console.log(resp.id )
      alert (`Orden ${resp.id} creada`)
    })
    .catch((err)=>console.log(err))
  }


  return (
    <div>
      {cart.map((prod)=>(
          <div key={prod.nombre}>
            <p>{prod.nombre}</p>
            <p>{prod.quantity}</p>
            <button id={prod.id} onClick={()=>{
              const id= prod.id
              deleteProduct(prod,id)
            }} >X</button>
          </div>
        ))}
        {cart.length >0 && (
          <div>
            <button onClick={()=>{clear()}}>Vaciar Carrito</button>
            <button onClick={()=> navigate("/")}>Seguir comprando</button>
            <div>
              <button onClick={()=> createOrder()}>Finalizar Compra</button>
            </div>
          </div>
        )}
        {cart.length == 0 && <p>No hay productos en el Carrito.</p>}
    </div>
  )
}
