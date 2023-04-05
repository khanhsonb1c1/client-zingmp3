import { PropsWithChildren, useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import { useSelector } from "react-redux";
import MusicPlay from "../types/MusicPlay";

PlayMusic.propTypes = {};

type typePlayMusic = PropsWithChildren<{
  played: {
    // match with row 6 in index.ts in store folder
    play_list: Array<MusicPlay>;
  };
}>;

function PlayMusic() {
  // declare
  const audioRef: any = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const [currTime, setCurrTime] = useState({
    min: "00",
    sec: "00",
  });

  const [total_time, setToTalTime] = useState({
    min: "00",
    sec: "00",
  });

  const play_list = useSelector(
    (state: typePlayMusic) => state.played.play_list
  );

  // useEffect

  useEffect(() => {
    if (play_list.length) {
      setDuration(audioRef.current.duration);
      audioRef.current.play();
      setPlay(true);
    }
  }, [play_list]);

  // get time user listened this music
  useEffect(() => {
    const sec = currentTime;

    const min =
      Math.floor(sec / 60) < 10
        ? `0${Math.floor(sec / 60)}`
        : String(Math.floor(sec / 60));

    const secRemain =
      Math.floor(sec % 60) < 10
        ? `0${Math.floor(sec % 60)}`
        : String(Math.floor(sec % 60));

    setCurrTime({
      min: min,
      sec: secRemain,
    });
  }, [currentTime]);

  // get time of this music
  useEffect(() => {
    const sec = duration;

    const min =
      Math.floor(sec / 60) < 10
        ? `0${Math.floor(sec / 60)}`
        : String(Math.floor(sec / 60));

    const secRemain =
      Math.floor(sec % 60) < 10
        ? `0${Math.floor(sec % 60)}`
        : String(Math.floor(sec % 60));

    setToTalTime({
      min: min,
      sec: secRemain,
    });
  }, [duration]);

  // function

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handleTimeSliderChange = ({ x }: any) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    play_list.length && (
      <div className="play-music">
        <div className="play">
          <div className="button-group">
            <div className="btn-func">
              <i className="lni lni-spinner-arrow"></i>
            </div>
            <div
              className="btn-func"
              onClick={() => setAudioIndex((audioIndex - 1) % play_list.length)}
            >
              <i className="lni lni-backward"></i>
            </div>
            <div className="btn-func btn-play" onClick={handlePausePlayClick}>
              {isPlay ? (
                <i className="lni lni-pause"></i>
              ) : (
                <i className="lni lni-play"></i>
              )}
            </div>
            <div
              className="btn-func"
              onClick={() => setAudioIndex((audioIndex + 1) % play_list.length)}
            >
              <i className="lni lni-forward"></i>
            </div>
            <div className="btn-func">
              <i className="lni lni-shuffle"></i>
            </div>
          </div>
          <div className="timeline-group">
            <span>
              {currTime.min}:{currTime.sec}
            </span>
            <TimeSlider
              axis="x"
              xmax={duration}
              x={currentTime}
              onChange={handleTimeSliderChange}
              styles={{
                track: {
                  backgroundColor: "#e3e3e3",
                  height: "2px",
                },
                active: {
                  backgroundColor: "#333",
                  height: "2px",
                },
                thumb: {
                  marginTop: "-3px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#333",
                  borderRadius: 0,
                },
              }}
            />
            <span>
              {total_time.min}:{total_time.sec}
            </span>
            {play_list.length && (
              <audio
                ref={audioRef}
                src={play_list[audioIndex].play_url}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() =>
                  setCurrentTime(audioRef.current.currentTime)
                }
                onEnded={() => setPlay(false)}
              />
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default PlayMusic;
