import { PropsWithChildren } from "react";
import Music from "../../../types/Music";

SongCardSmall.propTypes = {};

type CardType = PropsWithChildren<{
  item: Music;
  name: string;
}>;

function SongCardSmall({ item, name }: CardType) {
  const names = () => {
    const x = item.singers.map((i) => {
      return i.name;
    });

    return String(x);
  };

  return (
    <div className="song__row">
      <div className="song__row-left col-5">
        <i className="lni lni-music"></i>
        <div className="song-content">
          <img src={item.image_url} className="ratio" />
          <div className="song-info">
            <div className="song-info__name line-1">{item.name}</div>
            <div className="song-info__singers line-1">{names()}</div>
          </div>
        </div>
      </div>
      <div className="song__row-mid col-25">
        <p className="line-1">{name}</p>
      </div>

      <div className="song__row-right col-25">
        <p className="float-end">03:01</p>
      </div>
    </div>
  );
}

export default SongCardSmall;
