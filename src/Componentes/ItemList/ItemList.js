import Item from "../Item/Item"

const ItemList = ({productList}) => {
  return (
    <div>
        {productList.map((product)=>(
            <div key={product.id}>
                <Item product={product}/>
            </div>  
            ))}
    </div>
  )
}

export default ItemList