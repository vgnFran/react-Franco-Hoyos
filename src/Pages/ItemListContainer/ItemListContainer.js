import "./ItemListContainer.css"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"


const ItemListContainer= ( {} )=>{

    const [productList, setProductList]= useState([])
        
    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setProductList(data); 
          })
          .catch((error) => console.log(error));
      }, []);



    return(
        <div >
            <ItemList productList={productList}/>
        </div>
    )



} 


export default ItemListContainer