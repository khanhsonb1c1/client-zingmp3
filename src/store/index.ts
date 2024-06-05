import { configureStore } from "@reduxjs/toolkit";
import playMusicReducer from "./playMusic";
import musicReducer from "./music";
import albumReducer from "./album";
import singerReducer from "./singer";
import albumTop100Reducer from "./album_top100"
import userReducer from "./user"


const rootReducer = {
  played: playMusicReducer,
  music: musicReducer,
  album: albumReducer,
  singer: singerReducer,
  album_top100: albumTop100Reducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch