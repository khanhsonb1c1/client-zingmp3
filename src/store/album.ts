import { createSlice } from "@reduxjs/toolkit";
import Music from "../types/Music";
import _Album from "../types/_Album";
import TopAlbum from "../types/TopAlbums";

interface MusicType {
  list: {
    top100: Array<_Album>;
    top_trending: Array<_Album>;
  };
}

const initialState: MusicType = {
  list: {} as TopAlbum,
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    updateList(state, action) {
      state.list = action.payload;
      console.log(state.list, ": /list");
    },
  },
});

const { actions, reducer } = albumSlice;
export const { updateList } = actions; // name export
export default reducer; // default export
