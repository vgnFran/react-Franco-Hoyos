import "./ItemListContainer.css"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import ItemCount from "../../Componentes/ItemCount/ItemCount"


const ItemListContainer= ( {} )=>{

    const [productList, setProductList]= useState([])

    const {categoryId}= useParams()

    const getInfo=()=>{
    const db= getFirestore()
    const querySnap= collection(db,"products")

      if(categoryId){
        const queryFilter = query(querySnap, where("categoria","==",categoryId))
          getDocs(queryFilter)
            .then((res)=>{
              const list = res.docs.map((doc)=>{
                return {
                  id:doc.id,
                  ...doc.data()
                }
              })
              setProductList(list)
            })
            .catch((err)=> console.log(err))
          }
      
          else {
            getDocs(querySnap)
            .then((res)=>{
              const list = res.docs.map((doc)=>{
                return {
                  id:doc.id,
                  ...doc.data()
                }
              })
              setProductList(list)
            })
            .catch((err)=> console.log(err))
          }

      }

    
      

        
    useEffect(() => {
          getInfo()
      }, [categoryId]);

      

    return(
        <div >
            <ItemList productList={productList}/>
            <ItemCount/>
        </div>
    )



} 


export default ItemListContainer