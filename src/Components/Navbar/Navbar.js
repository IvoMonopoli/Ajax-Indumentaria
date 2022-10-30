import React from "react";
import logo from "../../Multimedia/logo.png"
import "./Navbar.css"
import "./CartWidget.css"
import { CartWidget } from "../Navbar/CartWidget";
import {Link , NavLink} from "react-router-dom"

const Navbar = () => {

    const categorias = [
        {nombre:"electronics", id:0, ruta:"/categoria/electronics" },
        {nombre:"jewelery", id:1, ruta:"/categoria/jewelery" },
        {nombre:"men's clothing", id:2, ruta:"/categoria/men's clothing" },
        {nombre:"women's clothing", id:3, ruta:"/categoria/women's clothing" }
        ];

    return(

        <header>
            <Link to="/">
                <img src={logo} alt="tienda online" className="loguito"  />
            </Link>
            <nav>
            {
                categorias.map((categoria) =>{
                    return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
                })
            }

            </nav>
            <div className="LogoCarrito">
            <Link className="LogoCarrito">
                <CartWidget/>
            </Link>
            </div>
        </header>
    );
};




export default Navbar

