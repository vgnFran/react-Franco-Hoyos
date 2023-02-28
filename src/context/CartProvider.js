import { useContext } from "react";
import { CartContext} from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {

    const [cart,setCart]=useState([])

    const addItem = (item,quantity)=>{
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

  return (
    <CartContext.Provider value={{cart, addItem}}>{children}</CartContext.Provider>
  )
}
export default CartProvider