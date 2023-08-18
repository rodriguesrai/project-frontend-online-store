import React, { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import Header from '../../components/header/header';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCategory, ProductInfoType } from '../../services/types';

export default function Home() {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<ProductInfoType[]>([]);
  const [noSearch, setNoSearch] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    const results = await getProductsFromCategoryAndQuery(undefined, inputValue);
    console.log(results.results);
    setNoSearch(false);
    setSearchResults(results.results);
  };
  useEffect(() => {
    const categories = async () => {
      const result = await getCategories();
      setProductCategories(result);
    };
    categories();
  }, []);

  return (
    <>
      <Header
        handleSearch={ handleSearch }
        handleInputChange={ handleInputChange }
        inputValue={ inputValue }
      />
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
        <div>
          {searchResults.length > 0 && (
            searchResults.map(
              (product) => <ProductCard key={ product.id } product={ product } />,
            )
          )}
          {(searchResults.length === 0 && !noSearch) && (
            <p>Nenhum produto foi encontrado</p>
          )}

          {noSearch && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
