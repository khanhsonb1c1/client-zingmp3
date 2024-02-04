import type { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { updatePlayMusic } from "../../../store/playMusic";
import Singer from "../../../types/Singer";
import TextTime from "../../input/TextTime";
import usePlayMusic from "../../../hooks/usePlayMusic";

SongCard.propTypes = {};

// type CardType = PropsWithChildren<{
//   id: string;
//   _id: string;
//   name: string;
//   play_url: string;
//   image_url: string;
//   ranker: number;
//   singers: Array<Singer>;
//   updated_at: number;
// }>;

function SongCard({ item }: { item: any }) {
  const dispath = useDispatch();

  const { info , playlist } = usePlayMusic({item} as any)

  const handleClick = () => {
    dispath(updatePlayMusic({info, playlist}));
  };

  const convertNameSingers = () => {
    return String(item.singers.map((item: any) => item.name))
  }


  return (
    <div className="song-list__item" onClick={handleClick}>
      <img src={item.image_url} alt="" />
      <div className="song-list__item__content">
        <div className="song-list__item__content-name line-1">{item.name}</div>
        <div className="song-list__item__content-singer line-1">
         {convertNameSingers()}
        </div>
        <div className="song-list__item__content-date">
          <TextTime timestamp={item.updated_at}></TextTime>
        </div>
      </div>

      <div className="song-list__item-btn">
        <i className="lni lni-more"></i>
      </div>
    </div>
  );
}

export default SongCard;
