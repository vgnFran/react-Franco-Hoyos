import { Link } from "react-router-dom"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productList}) => {
  
  return (
    <div className="body-list">
        {productList.map((product)=>(
                <div key={product.id}>
                  <Link to={`/item/${product.id}`}>
                  <Item key={product.id} product={product}/>
                </Link>
                </div>
                
                
          ))}
    </div>
  )
}

export default ItemList