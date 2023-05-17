import { createSlice } from "@reduxjs/toolkit";
import MusicPlay from "../types/MusicPlay";
// // import type { RootState } from '../../app/store'

interface PlayMusicState {
  playlist: Array<MusicPlay>;
  info: any;
}

// Define the initial state using that type
const initialState: PlayMusicState = {
  playlist: [] as Array<MusicPlay>,
  info: {} as any,
};

export const playMusicSlice = createSlice({
  name: "played", // match with row 6 in index.ts in store folder
  initialState,
  reducers: {
    updatePlayMusic(state, action) {
      console.log("action: ", action.payload);

      // playlist : array<play_url:string>
      // info: music or album ( have name and image_url)
      state.playlist = action.payload.playlist
      state.info = action.payload.info

      console.log(state.playlist, '/playlist/')
    },
  },
});

const { actions, reducer } = playMusicSlice;
export const { updatePlayMusic } = actions; // name export
export default reducer; // default export
