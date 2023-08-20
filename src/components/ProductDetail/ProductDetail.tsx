import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { initialProductDetails, ProductInfoType } from '../../services/types';
import { getProductById } from '../../services/api';

type ProductDetailProps = {
  addCart: (product: ProductInfoType) => void;
};

export default function ProductDetail({ addCart }: ProductDetailProps) {
  const [product, setProduct] = useState<ProductInfoType>(
    initialProductDetails,
  );
  const { id } = useParams();
  useEffect(() => {
    const productByID = async () => {
      const result = await getProductById(id as string);
      setProduct(result);
    };
    productByID();
  }, []);

  const handleProducts = () => {
    addCart(product);
  };
  console.log(product);

  return (
    <div>
      <h3 data-testid="product-detail-name">{ product.title }</h3>
      <img
        data-testid="product-detail-image"
        src={ product.thumbnail }
        alt={ product.title }
      />
      <h3 data-testid="product-detail-price">
        {`Preço: R$ ${product.price.toFixed(2)}`}
      </h3>
      <button data-testid="product-detail-add-to-cart" onClick={ handleProducts }>
        Adicionar ao carrinho
      </button>
      <h4>Especificação técnica do produto:</h4>
      <p>{ product.warranty }</p>
      <p>{`Quantidade vendida: ${product.sold_quantity}`}</p>
      <p>{`Quantidade disponível: ${product.available_quantity}`}</p>
      <p>
        {`Entrega grátis: ${product.shipping?.free_shipping ? 'Sim' : 'Não'}`}
      </p>
      <p>
        {`Condição: ${product.condition === 'new' ? 'Novo' : 'Usado'}`}
      </p>
      <p>
        {`Status do anúncio: ${product.status === 'active' ? 'Ativo' : 'Inativo'}`}
      </p>
      <Link data-testid="shopping-cart-button" to="/Cart"
      >
        <button>
          Ir para o carrinho de compras
        </button>
      </Link>
    </div>
  );
}
