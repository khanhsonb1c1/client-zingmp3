import { createSlice } from "@reduxjs/toolkit";
import Music from "../types/Music";
import _Album from "../types/_Album";

interface MusicType {
  list: Array<Music>;
  detail: Object;
}

// Define the initial state using that type
const initialState: MusicType = {
  list: [],
  detail: {} as _Album,
};

export const trendingAlbumSlice = createSlice({
  name: "trending_album", 
  initialState,
  reducers: {
    fetchAll(state, action) {
      state.list = action.payload
    },

    fetchDetail(state, action) {
        //
    },
  },
});

const { actions, reducer } = trendingAlbumSlice;
export const { fetchAll, fetchDetail } = actions; // name export
export default reducer; // default export
