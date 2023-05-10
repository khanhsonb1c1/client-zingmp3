import { createSlice } from "@reduxjs/toolkit";
import _Album from "../types/_Album";
import Singer from "../types/Singer";


interface _Singer {
  list_top: Array<Singer>;
  detail: Singer;
  loading: Boolean;
}
const initialState: _Singer = {
  list_top: [],
  detail: {} as Singer,
  loading: false,
};

export const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {
    updateListTop: (state, action) => {
      state.loading = true;
      state.list_top = action.payload;
    },
    updateDetail: (state, action) => {
      state.loading = true;
      state.list_top = action.payload;
    },
  },
});

const { actions, reducer } = singerSlice;
export const { updateListTop, updateDetail } = actions; // name export
export default reducer; // default export
