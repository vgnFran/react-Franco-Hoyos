import { BsCart } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget(){

    const {cart}= useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cart.reduce((prev,curr)=> prev + curr.quantity, 0))
    },[cart])

    return (
        <div style={{display:"flex",alignItems:"center"}}>
            <BsCart/>
            <div style={{marginLeft:"4px"}}>{total}</div>
        </div>
    )
}