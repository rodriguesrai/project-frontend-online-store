import React from 'react';
import { ProductInfoType } from '../../services/types';

type ProductCardProps = {
  product: ProductInfoType,
  addCart: (product: ProductInfoType) => void
};

export default function ProductCard({ product, addCart }: ProductCardProps) {
  const formattedPrice = product
    .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Função que captura o objeto selecionado pelo onClick do button
  const handleProducts = () => {
    addCart(product);
  //  console.log(product);
  };

  return (
    <div data-testid="product">
      <h2>{product.title}</h2>
      <img src={ product.thumbnail } alt={ product.title } />
      <h3>{formattedPrice}</h3>
      <button
        data-testid="product-add-to-cart"
        onClick={ handleProducts }
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
