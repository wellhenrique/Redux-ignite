export interface IProduct {
  id: number;
  price: number;
  title: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  type?: string;
}
