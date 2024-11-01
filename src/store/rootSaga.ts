import { all } from "redux-saga/effects";
import catSaga from "../features/cats/catSaga";

export default function* rootSaga() {
  console.log("rootSaga")
  yield all([catSaga()]);
}
