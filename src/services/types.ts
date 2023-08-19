export type ProductInfoType = {
  id: string,
  title: string,
  thumbnail:string,
  price: number,
  // Adicionei a váriavel quantity para ser utilizada dentro do carrinho de compra
  quantity: number,
  variations_data: {
    id: {
      thumbnail: string,
    }
  },
};

export type ProductCategory = {
  id: string,
  name: string,
};
