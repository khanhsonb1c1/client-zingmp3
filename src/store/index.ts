import { configureStore } from "@reduxjs/toolkit";
import playMusicReducer from "./playMusic";


const rootReducer = {
  played: playMusicReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
