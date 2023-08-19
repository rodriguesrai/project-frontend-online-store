import React, { useEffect, useState } from 'react';
import { getCategories,
  getProductsFromCategoryAndQuery, getByCategoryId } from '../../services/api';
import Header from '../../components/header/header';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCategory, ProductInfoType } from '../../services/types';

type HomeProps = {
// Definição da propriedade da função addCart a partir do objeto product
  addCart: (product: ProductInfoType) => void
};

export default function Home({ addCart }: HomeProps) {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<ProductInfoType[]>([]);
  const [noSearch, setNoSearch] = useState(true);
  const [selectCategory, setSelectCategory] = useState<ProductInfoType[]>([]);
  const [showResults, setShowResults] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    const results = await getProductsFromCategoryAndQuery(undefined, inputValue);
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

  const handleClick = async (id: string) => {
    const productsCategory = await getByCategoryId(id);
    setSelectCategory(productsCategory.results);
    setShowResults(false);
    console.log(productsCategory);
  };

  // console.log(productCategories);

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
              onClick={ () => handleClick(category.id) }
            >
              {category.name}
            </button>
          ))}
        </aside>
        <div>
          {selectCategory.map(
            (product) => (
              <ProductCard
                key={ product.id }
                product={ product }
// Passando a função addCart que veio do App.tsx para o componente ProductCard com o propósito de pegar o onClick do button
                addCart={ addCart }
              />
            ),
          )}
          {(showResults && searchResults.length > 0) && (
            searchResults.map(
              (product) => (
                <ProductCard
                  key={ product.id }
                  product={ product }
// Passando a função addCart que veio do App.tsx para o componente ProductCard com o propósito de pegar o onClick do button
                  addCart={ addCart }
                />
              ),
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
