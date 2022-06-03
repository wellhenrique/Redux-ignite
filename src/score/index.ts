import { configureStore } from "@reduxjs/toolkit";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (applyMiddleware) => applyMiddleware().concat(...middlewares),
});

sagaMiddleware.run(rootSaga);
