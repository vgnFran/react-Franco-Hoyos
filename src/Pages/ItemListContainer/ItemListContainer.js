import "./ItemListContainer.css"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import ItemCount from "../../Componentes/ItemCount/ItemCount"


const ItemListContainer= ( {} )=>{

    const [productList, setProductList]= useState([])

    const {categoryId}= useParams()
    console.log(categoryId)
        
    useEffect(() => {
        const traer = fetch("/data.json")
          .then((response) => response.json())
          .then((data) => {
          
            if (categoryId){             
              const filtre= data.filter((ele)=> ele.categoria == categoryId)
              setProductList(filtre); 
            } else {
              setProductList(data)
            }
                      
          })
          .catch((error) => console.log(error));
      }, [categoryId]);

      

    return(
        <div >
            <ItemList productList={productList}/>
            <ItemCount/>
        </div>
    )



} 


export default ItemListContainer