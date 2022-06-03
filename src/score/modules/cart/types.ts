export enum ActionTypes {
  AddProductToCartRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  AddProductToCartSucess = "ADD_PRODUCT_TO_CART_SUCCESS",
  AddProductToCartFailure = "ADD_PRODUCT_TO_CART_FAILURE",
}

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
  failedStockCheck: number[];
}
