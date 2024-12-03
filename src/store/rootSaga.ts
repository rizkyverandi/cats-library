import { all } from "redux-saga/effects";
import catSaga from "../features/cats/catSaga";

export default function* rootSaga() {
  yield all([catSaga()]);
}
