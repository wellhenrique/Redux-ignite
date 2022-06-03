import { Reducer } from "react";
import { ICartState } from "./types";
import produce from "immer";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState, any> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART_SUCCESS": {
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
      case "ADD_PRODUCT_TO_CART_FAILURE": {
        console.log("failure", action.payload);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};
