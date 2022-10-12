import React from "react";
import logo from "../../Multimedia/logo.png"
import "./Navbar.css"
import "./CartWidget.css"
import { CartWidget } from "../Navbar/CartWidget";
const Navbar = () => {

    const categorias = [
        {nombre:"Zapatillas", id:0, ruta:"" },
        {nombre:"Nosotros", id:1, ruta:"" },
        {nombre:"Contacto", id:2, ruta:"" },
        {nombre:"Otros", id:3, ruta:"" }
        ];

    return(

        <header>
                <img src={logo} alt="tienda online" className="loguito"  />
            <nav>
            {
                categorias.map((categoria) =>{
                    return <a key={categoria.id} href={categoria.ruta}>{categoria.nombre}</a>
                })
            }

            </nav>
            <div className="LogoCarrito">
            <CartWidget/>
            </div>
        </header>
    );
};




export default Navbar

