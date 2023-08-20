export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesResult = (await result).json();
  return categoriesResult;
}

export async function getProductsFromCategoryAndQuery(
  id: string | undefined,
  query: string | undefined,
) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`);
  const categoryAndQueryResult = await result.json();
  return categoryAndQueryResult;
}

export async function getProductById(id: string) {
  const result = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const productByIDResult = await result.json();
  return productByIDResult;
}

export async function getByCategoryId(id: string) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const byCategoryID = await result.json();
  return byCategoryID;
  }
  
