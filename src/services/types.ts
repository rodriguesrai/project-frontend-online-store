export type ProductInfoType = {
  id: string,
  title: string,
  thumbnail:string,
  price: number,
  // Adicionei a váriavel quantity para ser utilizada dentro do carrinho de compra
  quantity: number,
  warranty?: string,
  sold_quantity?: string,
  status?: string,  
  available_quantity?: number,
  condition?: string,
  shipping?: {
  free_shipping?:boolean,
  },
  
};

export type ProductCategory = {
  id: string,
  name: string,
};
  
export const initialProductDetails = {
id: '',
title: '',
thumbnail: '',
warranty: '',
sold_quantity: '',
quantity: 0,
status: '',
price: 0,
available_quantity: 0,
condition: '',
shipping: {
free_shipping:false,
 },
}
  