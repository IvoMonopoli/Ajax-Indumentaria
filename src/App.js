import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import  ItemListContainer  from './Container/ItemListContainer';
import Itemdetailcontainer from './Container/detail/itemdetailcontainer';
import Cartview from './Container/Cartview/Cartview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
        <Route path="/categorias/:id" element={<Itemdetailcontainer></Itemdetailcontainer>}/>
        <Route patch="/categorias/:id"/>
        <Route patch="/cart/" element={<Cartview />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
