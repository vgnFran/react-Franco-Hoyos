import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ItemDetail from "../../Componentes/ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams()
  console.log(id)

  const [productId,SetproductId]=useState({})


  const detailProduct=()=>{
    const db= getFirestore()
    const query= doc(db,"products",id)
    getDoc(query)
    .then((res)=>{
      SetproductId({
        id:res.id,
        ...res.data()
      })
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{

  //   const detailProduct= fetch("/data.json")
  // .then((data)=> data.json())
  // .then((data) =>{
  //   if(id){
  //     const filterDetails= data.find((prod)=> prod.id == id)
  //     SetproductId(filterDetails)
  //   }
  // })

    detailProduct()
  },[id])

  console.log(productId)

  
  return (
    <div><ItemDetail detail={productId}/></div>
  )
}

export default ItemDetailContainer