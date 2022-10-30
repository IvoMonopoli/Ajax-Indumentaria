import React from 'react'
import{ Item } from "./Item"

export const Itemlist = ({productos}) =>{

  return (

          <>{
           productos.map((producto)=>{
            return(
              <Item producto={producto}/>
            )
           })

          }
           
          </>
    )}

  

