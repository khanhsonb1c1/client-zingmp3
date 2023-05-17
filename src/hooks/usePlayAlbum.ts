import { useEffect, useState } from "react";
import _Album from "../types/_Album";

export default function usePlayAlbum({ item }: { item: _Album }) {
  const [playlist, setPlayList] = useState(Array<string>);
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (item.musics?.length) {
      const list = item.musics.map((music) => {
        return music.play_url;
      });
      setPlayList(list);
    }

    const info = {
      name: item.name,
      image_url: item.image_url,
      updated_at: item.updated_at,
      singers_name: item.singers_name,
    };

    setInfo(info);
  }, [item]);

  return { playlist, info };
}
