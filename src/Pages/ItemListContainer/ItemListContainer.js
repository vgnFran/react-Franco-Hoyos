import "./ItemListContainer.css"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import ItemCount from "../../Componentes/ItemCount/ItemCount"


const ItemListContainer= ( {} )=>{

    const [productList, setProductList]= useState([])

    const {categoryId}= useParams()


    const getInfo=()=>{
      const db= getFirestore()
      const query= collection(db,"products")
      getDocs(query)
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


        
    useEffect(() => {
          getInfo()
          // getInfo
          // .then((data) => {
          
          //   if (categoryId){             
          //     const filtre= data.filter((ele)=> ele.categoria == categoryId)
          //     setProductList(filtre); 
          //   } else {
          //     setProductList(data)
          //   }
                      
          // })
          // .catch((error) => console.log(error));
      }, [categoryId]);

      

    return(
        <div >
            <ItemList productList={productList}/>
            <ItemCount/>
        </div>
    )



} 


export default ItemListContainer