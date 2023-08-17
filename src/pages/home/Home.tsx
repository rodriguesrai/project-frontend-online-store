import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';

type ProductCategory = {
  id: string,
  name: string,
};

export default function Home() {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const categories = async () => {
      const result = await getCategories();
      setProductCategories(result);
    };
    categories();
  }, []);

  return (
    <div>
      <aside>
        {productCategories.map((category) => (
          <button
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </button>
        ))}
      </aside>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}
