import "./ItemListContainer.css"
export default function ItemListContainer({greetings,page}){

    return(
        <div className="container-h1">
            <h1>{greetings} a Nuestra tienda {page}.</h1>
        </div>
    
    )
}