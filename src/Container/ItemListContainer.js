import React, { useState , useEffect } from "react";
import { ItemCount } from "./ItemCount";
import { Itemlist } from "./itemlist";
import { useParams } from "react-router-dom";

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

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true);

const {id} = useParams();

const URL_BASE ='https://fakestoreapi.com/products'

const URL_CAT =`${URL_BASE}/category/${id}`

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((json)=>setProductos(json))
  .catch((error) =>{

  })
  .finally(setLoading(false));
}, [id]);




   
   return(

   <>
   <Itemlist productos={productos}></Itemlist>
   <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
   

   </>

   )

}

export default ItemListContainer 