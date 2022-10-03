import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ItemListContainer } from './Components/Navbar/ItemListContainer';


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <div>
    <ItemListContainer/>
    </div>

    </>
  );
};

export default App;
