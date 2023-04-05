import MusicPlay from "./MusicPlay";

export default interface Album {
    id: string;
    title: string;
    singer: string;
    img: string;
    updated_at: string;
    play: Array<MusicPlay>
  }
  