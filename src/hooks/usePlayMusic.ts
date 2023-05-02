import { PropsWithChildren, useEffect, useState } from "react";
import Singer from "../types/Singer";

type MusicType = PropsWithChildren<{
  id: string;
  _id: string;
  name: string;
  play_url: string;
  image_url: string;
  ranker: number;
  updated_at: number;
  singers: Array<Singer>;
}>;

export default function usePlayMusic({ item }: { item: MusicType }) {
  const [playlist, setPlayList] = useState(Array<string>);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const list = [item.play_url]
    setPlayList(list);

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
