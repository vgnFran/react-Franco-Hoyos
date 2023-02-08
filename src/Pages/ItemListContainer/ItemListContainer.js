import "./ItemListContainer.css"
import { products } from "../../Data/products"
import { useEffect,useState} from "react"
import ItemList from "../../Componentes/ItemList/ItemList"

const ItemListContainer= ( {} )=>{
    const [productList, setProductList]= useState([])
    const getProducts= new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })

    useEffect(()=>{
        getProducts
        .then((response)=>{
            setProductList(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])



    return(
        <div>
            <ItemList productList={productList}/>
        </div>
    )



} 


export default ItemListContainer