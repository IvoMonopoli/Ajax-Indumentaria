import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import  "./ItemCount.css"
import { useState } from 'react';

export const ItemCount = ({stock , initial , onAdd}) => {

    const [count, setCount] = useState(initial)

    const handleClickSubtract = () => {
        if(count > 1)
        setCount(count - 1)
    }
    
    const handleClickAdd = () => {
        if(count < stock)
        setCount(count + 1)
    }
    
    const handleClickAgregar = () => {
        onAdd(count)
    }

  return (
    <>
    <div className='sumador'>
    <button onClick={handleClickSubtract}><RemoveCircleIcon></RemoveCircleIcon></button>
    <h2>{count}</h2>
    <button onClick={handleClickAdd}><AddCircleIcon></AddCircleIcon></button>
    </div>
    <div className='agregarCarrito'>
    <button disable={stock === 0} onClick={handleClickAgregar}>
    <span>{stock === 0 ? "no tenemos stock" : "Agregar al carrito"}</span>
    </button>
    </div>
    </>
    )
}
