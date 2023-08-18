export type ProductInfoType = {
  id: string,
  title: string,
  thumbnail:string,
  price: number,
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
