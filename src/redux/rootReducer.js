import { combineReducers } from "redux";
import { PostsReducer } from "./postsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  posts: PostsReducer,
  app: appReducer,
});
