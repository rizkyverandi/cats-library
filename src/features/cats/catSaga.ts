import { takeEvery, put, call } from "redux-saga/effects";
import { fetchCatsFailure, fetchCatsSuccess } from "./catSlice";
import { CatState } from "./catSlice";

export function* watchFetchCats() {
  try {
    const response: Response = yield call(() =>
      fetch("https://api.thecatapi.com/v1/breeds")
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: CatState[] = yield response.json();
    yield put(fetchCatsSuccess(data));
  } catch (error) {
    console.error("Error fetching cats:", error);
    yield put(fetchCatsFailure());
  }
}

export function* watchLoadMore() {
  try {
    const response: Response = yield call(() =>
      fetch("https://api.thecatapi.com/v1/breeds")
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: CatState[] = yield response.json();
    yield put(fetchCatsSuccess(data));
  } catch (error) {
    console.error("Error fetching cats:", error);
    yield put(fetchCatsFailure());
  }
}

export default function* catSaga() {
  yield takeEvery("cats/fetchCats", watchFetchCats);
}
