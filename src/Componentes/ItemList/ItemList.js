import { Link } from "react-router-dom"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productList}) => {
  
  return (
    <div className="body-list">
        {productList.map((product)=>(
                <Link to={`/item/${product.id}`}>
                  <Item key={product.id} product={product}/>
                </Link>
                
          ))}
    </div>
  )
}

export default ItemList