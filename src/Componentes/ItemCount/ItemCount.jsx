import "./ItemCount.css"
import { useState } from "react";

export default function Counter(){
    const [valorInicial,ValorModificado]= useState(0)

    const resta=()=>{
        if(valorInicial > 0 ){
            ValorModificado(valorInicial - 1)
        }  
    }

    const suma=()=>{
        if (valorInicial < 10){
            ValorModificado(valorInicial + 1)
        }
    }

    return(
        
        <div className="contador-cantidad">
            <div className="counter">
            <p>Cantidad: <span className="span-cantidad">{valorInicial}</span></p>
            <div className="container-input">           
                <button onClick={resta} className="button-resta">-</button>
                <button onClick={suma} className="button-counter">+</button>
            </div>
            </div>
            
            
        </div>
    )
}