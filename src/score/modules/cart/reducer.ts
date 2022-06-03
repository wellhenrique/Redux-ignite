import { Reducer } from "react";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState, any> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      return {
        ...state,
        items: [...state.items, { product, quantity: 1 }],
      };
    }
    default: {
      return state;
    }
  }
};
