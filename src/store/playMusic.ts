import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// // import type { RootState } from '../../app/store'

interface PlayMusicState {
  music_url: string;
}

// Define the initial state using that type
const initialState: PlayMusicState = {
  music_url: "",
};

export const playMusicSlice = createSlice({
  name: "played",
  initialState,
  reducers: {
    updatePlayMusic(state, action) {
      console.log('state: ',state)
      console.log('action: ',action.payload)
      state.music_url = action.payload
      
    },
  },
});

const { actions, reducer } = playMusicSlice;
export const { updatePlayMusic } = actions; // name export
export default reducer; // default export
