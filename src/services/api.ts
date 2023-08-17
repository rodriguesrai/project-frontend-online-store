export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = (await result).json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(id: string, query: string) {
  const result = await fetch(`https://api.mercadolibre.com/sites/${id}/search?q=$${query}`);
  const data = await result.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
