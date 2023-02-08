
const Item = ({product}) => {
  return (
    <div>
        <h2>{product.nombre}</h2>
        <h3>{product.precio}</h3>
    </div>
  )
}

export default Item