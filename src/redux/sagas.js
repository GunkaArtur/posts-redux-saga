import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POST } from "./types";
import { showLoader, hideLoader, showAlert } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorder);
}

function* sagaWorder() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=7"
  );
  return await responce.json();
}
