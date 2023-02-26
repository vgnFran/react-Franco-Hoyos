import "./ItemDetail.css"


const ItemDetail = ({detail}) => {

   console.log(detail)
    
    
  return (
    <div className="detail-container">
      <div className="detail">
      <img src={detail.imagen} alt={detail.nombre} />
      <h2> {detail.nombre} </h2>
      <h3> $ {detail.precio} </h3>
      <button>Agregar</button>
      </div>
      
      </div>
  )
}

export default ItemDetail