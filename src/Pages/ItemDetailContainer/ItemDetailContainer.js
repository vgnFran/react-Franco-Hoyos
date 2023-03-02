import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ItemDetail from "../../Componentes/ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

  const { id } = useParams()
  console.log(id)

  const [productId,SetproductId]=useState({})

  useEffect(()=>{
    const detailProduct= fetch("/data.json")
  .then((data)=> data.json())
  .then((data) =>{
    if(id){
      const filterDetails= data.find((prod)=> prod.id == id)
      SetproductId(filterDetails)
    }
  })

  },[id])

  console.log(productId)

  
  return (
    <div><ItemDetail detail={productId}/></div>
  )
}

export default ItemDetailContainer