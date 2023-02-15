import "./NavBar.css"
import "../Logo/Logo.js"
import Logo from "../Logo/Logo.js"
import CartWidget from "../CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import { Cart } from "../../Pages/Cart/Cart";

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
                <li> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/" > Todos los Productos </NavLink> </li>
                <li> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/category/buzo"> Buzos </NavLink> </li>
                <li> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/category/campera"> Camperas </NavLink> </li>
                <li> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/category/pantalon"> Pantalones </NavLink> </li>
                <li> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/category/remera"> Remeras </NavLink> </li>
                <li className="carrito"> <NavLink className={( {isActive} )=> (isActive ? "select" : "not-select") } to="/pages/Cart/Cart"> <CartWidget/> 1 </NavLink> </li>
            </div>
        </div>
    );
}
