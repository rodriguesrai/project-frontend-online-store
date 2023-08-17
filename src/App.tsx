import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
      </Route>
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  );
}

export default App;
