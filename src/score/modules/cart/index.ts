import { Reducer } from "react";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<void, ICartState> = () => {
  return INITIAL_STATE;
};
