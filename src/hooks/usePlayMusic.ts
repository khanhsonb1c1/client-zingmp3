import { PropsWithChildren, useEffect, useState } from "react";
import Singer from "../types/Singer";
import Music from "../types/Music";

// type MusicType = PropsWithChildren<{
//   id: string;
//   name: string;
//   play_url: string;
//   image_url: string;
//   ranker: number;
//   updated_at: number;
//   singers: Array<Singer>;
// }>;

export default function usePlayMusic({ item }: { item: Music }) {
  const [playlist, setPlayList] = useState(Array<string>);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setPlayList([item.play_url]);

    const info = {
      name: item.name,
      image_url: item.image_url,
      updated_at: item.updated_at,
    };

    const singers = String(item.singers.map((x) => x.name)).replace(
      /,/gi,
      ", "
    );
    setInfo({ ...info, singers: singers });
  }, [item]);

  return { playlist, info };
}
