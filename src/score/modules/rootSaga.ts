import { all } from "redux-saga/effects";

import cart from "./cart/saga";

export default function* rootSaga(): any {
  let response = yield all([cart]);
  return response;
}
