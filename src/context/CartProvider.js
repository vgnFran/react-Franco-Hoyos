import { useContext, useEffect } from "react";
import { CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {

    const [cart,setCart]=useState([])

    const addItem = (item,quantity)=>{
        if(quantity>0){

            if(inCart(item.id)){
              const cartRepeated = cart.map((prod)=>{
                if( prod.id == item.id){
                  prod.quantity = prod.quantity + quantity
                  return prod
                } else {
                  return prod
                }
              })
              setCart(cartRepeated)

            } else{
              const cartProduct= {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                categoria: item.categoria,
                imagen: item.imagen,
                cantidad:item.cantidad,
                quantity:quantity
            }
            setCart([...cart,cartProduct])
            }

        }
        
    }

    const clear= ()=>{
      setCart([])
    }

    const deleteProduct =(prod,id)=>{
      const deletedCart = cart.filter((prod)=>{
        return prod.id != id
      })
      setCart(deletedCart)
    }

    const inCart =(productId)=>{
      if(cart.find(prod => prod.id == productId)){
        return true
      }else{
        return false
      }
     
    }

    const [total, setTotal]=useState(0)

    const updateItem= (prodId,newQuantity)=>{
      const newCart= cart.map( (prod)=>{
        if (prodId == prod.id){
          return{
            ...prod,
            quantity:newQuantity
          }
        } else {
          return prod
        }
      })
      setCart(newCart)
    }

    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=> acc + curr.precio * curr.quantity, 0))
    },[cart])

  return (
    <CartContext.Provider value={{cart, addItem, clear, deleteProduct,inCart, total, setCart, updateItem}}>{children}</CartContext.Provider>
  )
}
export default CartProvider