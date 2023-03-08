import "./Item.css"
import { useState } from "react"

const Item = ({product}) => {
  // let oferta= 0

  // if(product.oferta){
  //   oferta=(product.precio /2)

  // }else{
  //  oferta= product.precio
  // }
 
  return (
    <div className="product">
        <div className="container-img">
          <img src={`/images/${product.imagen}`} alt={product.nombre}/>
        </div>
        <p className="product-name">{product.nombre}</p>
        <div>
          <p className="oferta"></p>
          <p className="product-price">$ {product.precio}</p>
        </div>
    </div>
  )
}

export default Item