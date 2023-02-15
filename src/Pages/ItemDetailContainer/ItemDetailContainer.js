import React from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const { id } = useParams()
  console.log(id)
  

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer