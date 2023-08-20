import React, { useState, useEffect } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { ProductInfoType } from '../../services/types';

type CartProps = {
  cart: ProductInfoType[],
};

export default function Cart({ cart }: CartProps) {
  //  console.log(cart);
  const [value, setValue] = useState(0);

  const totalValue = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setValue(total);
  };

  useEffect(() => {
    if (cart) {
      totalValue();
    }
  }, [cart]);

  return (
  // renderização de cada Cart após clicar no botão de adicionar ao carrinho
    <>
      <div>
        <h1>Carrinho de compras</h1>
        {cart.length === 0 && (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}

        {(cart.length > 0) && (
          cart.map(
            (eachProduct) => (
              <div key={ eachProduct.id }>
                <h3 data-testid="shopping-cart-product-name">
                  { eachProduct.title }
                </h3>
                <img src={ eachProduct.thumbnail } alt={ eachProduct.title } />
                <h2>
                  {(eachProduct.quantity * eachProduct.price)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </h2>
                <AiFillMinusCircle />
                <h4 data-testid="shopping-cart-product-quantity">
                  {`Qtd: ${eachProduct.quantity}`}
                </h4>
                <AiFillPlusCircle />
              </div>
            ),
          )
        )}
      </div>
      <div>
        {(cart.length > 0) && (
          <div>
            <h1>Valor total da compra:</h1>
            <h3>
              {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h3>
            <button>Finalizar compra</button>
          </div>
        )}
      </div>
    </>

  );
}
