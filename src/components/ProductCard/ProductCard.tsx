import React from 'react';
import { ProductInfoType } from '../../services/types';

type ProductCardProps = {
  product: ProductInfoType,
};

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = product
    .price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div data-testid="product">
      <h2>{product.title}</h2>
      <img src={ product.thumbnail } alt={ product.title } />
      <h3>{formattedPrice}</h3>
      <button>Adicionar ao carrinho</button>
    </div>
  );
}
