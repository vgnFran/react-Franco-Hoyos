import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget(){

    const {cart}= useContext(CartContext)
    console.log(cart)
    
    return (
        <div style={{display:"flex",alignItems:"center"}}>
            <BsCart/>
            <div style={{marginLeft:"4px"}}>{cart?.length}</div>
        </div>
    )
}