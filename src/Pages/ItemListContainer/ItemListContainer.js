import "./ItemListContainer.css"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer= ( {} )=>{

    const [productList, setProductList]= useState([])

    const {categoryId}= useParams()
    console.log(categoryId)
        
    useEffect(() => {
        const traer = fetch("/data.json")
          .then((response) => response.json())
          .then((data) => {
            
            if (categoryId){
              console.log("va")
            }

            setProductList(data); 
            
            
          })
          .catch((error) => console.log(error));
      }, [categoryId]);

      

    return(
        <div >
            <ItemList productList={productList}/>
        </div>
    )



} 


export default ItemListContainer