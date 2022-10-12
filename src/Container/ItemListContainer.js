import React, { useState , useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { Itemlist } from "./itemlist";

const productos = [
   {nombre:"Adidas" ,id:0 , precio:"5500" , stock:4},
   {nombre:"Nike" ,id:0 , precio:"6500" , stock:6},
   {nombre:"Puma" ,id:0 , precio:"4500" , stock:1},
   {nombre:"Reebok" ,id:0 , precio:"5000" , stock:2},
];
const onAdd = (count) =>{
   console.log(`Agregaste ${count} al carrito`)
}

const obtenerProductos = new Promise((resolve , reject)=>{
resolve(productos);
reject("algo salio mal");}
)


export const ItemListContainer = () =>{

const [Productos, setProductos] = useState([])

useEffect(() => {
  obtenerProductos
  .then((data)=>{
   setProductos(data);
  })
  .catch((error)=>{
   console.log("algo salio mal")
   console.log(error);
})
}, [])




   
   return(
      Productos.map((producto)=>{
         return(
            <h1 key={producto.id}>{producto.nombre}{producto.precio}</h1>
         )
      }),
      <>
   <Itemlist></Itemlist>

   <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>

   </>

   )

}

export default ItemListContainer 