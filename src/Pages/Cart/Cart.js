import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'
import "./Cart.css"
import ItemCount from '../../Componentes/ItemCount/ItemCount'
import ItemCart from './ItemCart'

export const Cart = () => {
  const navigate= useNavigate()
  const { cart, clear, deleteProduct, total, setCart } = useContext(CartContext)
  const db= getFirestore()
  const [formValue, setFormValue] = useState({
    name:"",
    phone:"",
    email:"",
    confirm:"",
  })
  const createOrder=()=>{
    const query= collection(db, "orders")
    const buyer= {
      email: formValue.email,
      confirm:formValue.confirm,
      nombre: formValue.name,
      telefono: formValue.phone
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
      total:total
    } )
    .then((resp)=>{
      alert (`Orden ${resp.id} creada`)
      updateProducts()
    })
    .catch((err)=>console.log(err))
  }


  const updateProducts=()=>{
    cart.forEach(prod => {
      const query= doc(db, "products", prod.id)
      updateDoc(query,{
        cantidad: prod.cantidad - prod.quantity
      })
      .then(()=>{
        console.log("stock actualizado")
      })
      .catch((err)=>console.log(err))
    });
  } 

  const completeImputs=(e)=>{

    setFormValue({
      ...formValue,
      [e.target.name]:e.target.value,
    })

  }

  return (
    <div className='container-cart'>
      {cart.map((prod)=>(
          <div key={prod.nombre} className="prod-cart"> 
            <ItemCart prod={prod}/>
            <button className='button-quit' id={prod.id} onClick={()=>{
              const id= prod.id
              deleteProduct(prod,id)
            }} >X</button>
          </div>
        ))}
        {cart.length >0 && (
          <div className='buttons-cart'>

            <div>
              <p className='total'>{`Total: $${total}`}</p>
            </div>

            <div className='container-buttons'>
            <button onClick={()=>{clear()}} className="vaciar">Vaciar Carrito</button>
            <button onClick={()=> navigate("/")}>Seguir comprando</button>
            </div>

            <div className='form-container'>
              <form>
                <input type="text" placeholder='Nombre' value={formValue.name} onChange={completeImputs} name="name"/>
                <input type="text" placeholder='Telefono' value={formValue.phone} onChange={completeImputs} name="phone"/>
                <input type="email" placeholder='Email' value={formValue.email} onChange={completeImputs} name="email"/>
                <input type="email" placeholder='Confirmar Email' value={formValue.confirm} onChange={completeImputs} name='confirm'/>
              </form>
              <button onClick={()=> {
                if(formValue.email != formValue.confirm){
                  alert("email distintos")
                } else if(formValue.name != "" && formValue.email != "" && formValue.phone != ""){
                  createOrder()
                  setCart([])
                }
              }}>Finalizar Compra</button>
            </div>

          </div>
        )}
        {cart.length == 0 && <p>No hay productos en el Carrito.</p>}
    </div>
  )
}
