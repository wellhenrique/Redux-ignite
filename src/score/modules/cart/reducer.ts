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
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });

        break;
      }
      default: {
        return draft;
      }
    }
  });
};
