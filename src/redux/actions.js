import {
  CREATE_POST,
  FETCH_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };

  /* return async (dispatch) => {
    try {
      dispatch(showLoader());
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=7"
      );
      const json = await responce.json();
      dispatch({ type: FETCH_POST, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showAlert("Something went wrong!"));
      dispatch(hideLoader());
    }
  };*/
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
