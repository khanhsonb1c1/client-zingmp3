import type { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { updatePlayMusic } from "../../../store/playMusic";
import MusicPlay from "../../../types/MusicPlay";

SongCard.propTypes = {};

type CardType = PropsWithChildren<{
  title: string;
  img: string;
  singer: string;
  play: Array<MusicPlay>;
  updated_at: string;
}>;

function SongCard({ item }: { item: CardType }) {
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(updatePlayMusic(item));
  };

  return (
    <div className="song-list__item" onClick={handleClick}>
      <img src={item.img} alt="" />
      <div className="song-list__item__content">
        <div className="song-list__item__content-name line-1">{item.title}</div>
        <div className="song-list__item__content-singer line-1">
          {item.singer}
        </div>
        <div className="song-list__item__content-date">{item.updated_at}</div>
      </div>

      <div className="song-list__item-btn">
        <i className="lni lni-more"></i>
      </div>
    </div>
  );
}

export default SongCard;
