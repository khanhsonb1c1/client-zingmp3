import { PropsWithChildren, useState } from "react";
import Music from "../../../types/Music";
import {useTimeMusic} from "../../../hooks/useTimeMusic";
import { useDispatch } from "react-redux";
import { updatePlayMusic } from "../../../store/playMusic";
import usePlayMusic from "../../../hooks/usePlayMusic";

SongCardSmall.propTypes = {};

type CardType = PropsWithChildren<{
  item: Music;
  name: string;
}>;

function SongCardSmall({ item, name }: CardType) {
  const dispath = useDispatch();

  const [duration, setDuration] = useState('00:00');

  const time = useTimeMusic(Number(duration));

  const {info, playlist} = usePlayMusic({item})

  const names = () => {
    const x = item.singers.map((i) => {
      return i.name;
    });

    return String(x);
  };

  const getDuration = (meta: any) => {
    // return meta.target;
    console.log(meta.target.duration, '/duration')

    setDuration(meta.target.duration)
  }

  const handlePlayMusic = () => {
    dispath(updatePlayMusic({info, playlist}))
  }

  return (
    <div className="song__row" onClick={handlePlayMusic}>
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
        <audio id="audioTime" src={item.play_url} onLoadedData={getDuration} />
        <p className="float-end">{time}</p>
      </div>
    </div>
  );
}

export default SongCardSmall;
