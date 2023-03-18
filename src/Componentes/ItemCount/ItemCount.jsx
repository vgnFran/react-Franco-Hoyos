import "./ItemCount.css"


export default function ItemCount( {count,setCount,cantidad} ){


    const resta=()=>{

        if(count > 0 && count <=cantidad){
            setCount(count - 1)
        
        }  
    }

    const onAdd=()=>{
        if (count < cantidad){
            setCount(count + 1)
        }

    }

    return(
        
        <div className="contador-cantidad">
            <div className="counter">
            <p className="p-counter">Cantidad: <span className="span-cantidad">{count}</span></p>
            <div className="container-input">           
                <button  onClick={resta} className="button-resta">-</button>
                <button  onClick={onAdd} className="button-counter">+</button>
            </div>
            </div>
            
            
        </div>
    )
}