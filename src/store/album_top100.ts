import { createSlice } from "@reduxjs/toolkit";
import _Album from "../types/_Album";

interface AlbumTopType {
  list_top_Vpop: [];
  list_top_CPop: Array<_Album>;
  list_top_NonLyric: Array<_Album>;
  list_top_Kpop: Array<_Album>;
  list_top_US_UK: Array<_Album>;
  detail: _Album;
}

const initialState: AlbumTopType = {
  list_top_Vpop: [],
  list_top_CPop: [],
  list_top_NonLyric: [],
  list_top_Kpop: [],
  list_top_US_UK: [],
  detail: {} as _Album,
};

export const musicSlice = createSlice({
  name: "album_top100",
  initialState,
  reducers: {
    updateListVPOP: (state, action) => {
      state.list_top_Vpop = action.payload;
    },
    updateListCPOP: (state, action) => {
      state.list_top_CPop = action.payload;
    },
    updateListNonLyric: (state, action) => {
      state.list_top_NonLyric = action.payload;
    },
    updateListKPOP: (state, action) => {
      state.list_top_Kpop = action.payload;
    },
    updateListUSUK: (state, action) => {
      state.list_top_US_UK = action.payload;
    },

    updateDetail(state, action) {},
  },
});

const { actions, reducer } = musicSlice;
export const {
  updateListVPOP,
  updateDetail,
  updateListCPOP,
  updateListNonLyric,
  updateListUSUK,
  updateListKPOP,
} = actions; // name export
export default reducer; // default export
