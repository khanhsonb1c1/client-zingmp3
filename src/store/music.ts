import { createSlice } from "@reduxjs/toolkit";
import { music } from "../service/music";

interface Music {
  list: String[];
  detail: Object;
  loading: Boolean;
}
// Define the initial state using that type
const initialState: Music = {
  list: [],
  detail: {},
  loading: false,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      state.loading = true;
      state.list = action.payload
    },

    fetchDetail(state, action) {
      state.loading = true;
    },
  },
});

const { actions, reducer } = musicSlice;
export const { fetchAll, fetchDetail } = actions; // name export
export default reducer; // default export
