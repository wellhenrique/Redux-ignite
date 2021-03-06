import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { IState } from "../..";
import api from "../../../server/api";
import {
  AddProductToCartFailure,
  AddProductToCartRequest,
  AddProductToCartSucess,
} from "./actions";
import { ActionTypes } from "./types";

type CheckProductStockRequest = ReturnType<typeof AddProductToCartRequest>;
interface IStockResponse {
  id: number;
  quantity: number;
}
function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(AddProductToCartSucess(product));
  } else {
    yield put(AddProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.AddProductToCartRequest, checkProductStock),
]);
