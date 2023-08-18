export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesResult = (await result).json();
  return categoriesResult;
}

export async function getProductsFromCategoryAndQuery(id = undefined, query: string) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${id}&q=$${query}`);
  const categoryAndQueryResult = await result.json();
  return categoryAndQueryResult;
}

export async function getProductById(id: string) {
  const result = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=$${id}`);
  const productByIDResult = await result.json();
  return productByIDResult;
}
