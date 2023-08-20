import React, { useState, useEffect } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { ProductInfoType } from '../../services/types';

type CartProps = {
  cart: ProductInfoType[],
  removeCart: (product: ProductInfoType) => void,
  addQuantity: (product: ProductInfoType) => void,
  removeQuantity: (product: ProductInfoType) => void,
};

export default function Cart(
  { cart, removeCart, addQuantity, removeQuantity }: CartProps,
) {
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
                <button
                  data-testid="product-decrease-quantity"
                  onClick={ () => removeQuantity(eachProduct) }
                >
                  <AiFillMinusCircle />
                </button>
                <h4 data-testid="shopping-cart-product-quantity">
                  {`Qtd: ${eachProduct.quantity}`}
                </h4>
                <button
                  data-testid="product-increase-quantity"
                  onClick={ () => addQuantity(eachProduct) }
                >

                  <AiFillPlusCircle />
                </button>
                <button
                  onClick={ () => removeCart(eachProduct) }
                  data-testid="remove-product"
                >
                  Remover
                </button>
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
