import { Reducer } from "react";
import { ActionTypes, ICartState } from "./types";
import produce from "immer";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

export const cart: Reducer<ICartState, any> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.AddProductToCartSucess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.AddProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};
