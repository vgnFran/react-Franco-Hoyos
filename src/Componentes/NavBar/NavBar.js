import "./NavBar.css"
import "../Logo/Logo.js"
import Logo from "../Logo/Logo.js"
import CartWidget from "../CartWidget/CartWidget.js";

export default function NavBar(){
    return (
        <div className="container-navbar">
            <div className="container-logo">
                <Logo/>
            </div>
            <div className="navbar">
                <div className="input-busqueda">
                    <input type="text" placeholder="¿Buscas algo?"/>
                </div>
                <li>Todos los Productos</li>
                <li>Buzos</li>
                <li>Remeras</li>
                <li>Pantalones</li>
                <li className="carrito"> <CartWidget/> 1</li>
            </div>
        </div>
    );
}
