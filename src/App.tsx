import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';
import { ProductInfoType } from './services/types';

function App() {
  const [shoppingCart, setShoppingCart] = useState<ProductInfoType[]>([]);

  const addCart = (product: ProductInfoType) => {
    const productAlreadyAdd = shoppingCart
      .find((productAdd) => product.id === productAdd.id);
    // if para verificar se o item que foi selecionado pelo clique do botão, já não havia sido clicado e no caso, ele soma +1 toda vez que clicar
    if (productAlreadyAdd) {
      // Adiciona a quantidade atual do produto que foi clicado com mais um, caso o produto ja tenha sido selecionado anteriormente
      productAlreadyAdd.quantity += 1;
      // os "..." servem para pegar o que ja foi salvo no shoppingCart e no caso, adicionar a eles o product também
      localStorage.setItem('cart', JSON.stringify([...shoppingCart, product]));
      setShoppingCart([...shoppingCart]);
    } else {
      localStorage.setItem('cart', JSON.stringify([...shoppingCart, product]));
      // atualiza o estado do carrinho e adiciona a propriedade quantity ja que ela nao esta na API
      setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
    }
  //  console.log(product);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={ <Home addCart={ addCart } /> }
      />
      <Route
        path="/cart"
        element={ <Cart cart={ shoppingCart } /> }
      />
      <Route
        path="/details/:id"
        element={ <ProductDetail addCart={ addCart } /> } />
    </Routes>
  );
}

export default App;
