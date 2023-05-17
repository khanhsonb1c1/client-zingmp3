import { PropsWithChildren, useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import { useSelector } from "react-redux";

type typePlayMusic = PropsWithChildren<{
  played: {
    playlist: Array<string>;
    info: any;
  };
}>;

function PlayMusic() {
  const audioRef: any = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isFoward, setIsFoward] = useState(false);
  // const [listened, setListened] = useState([] as Array<Number>);
  // const listend:any= useRef([]); // danh sách đã nghe, tránh random trúng mấy bài đã nghe
  const [currTime, setCurrTime] = useState({
    min: "00",
    sec: "00",
  });

  const [total_time, setToTalTime] = useState({
    min: "00",
    sec: "00",
  });

  const play_list = useSelector(
    (state: typePlayMusic) => state.played.playlist
  );

  const album_info = useSelector((state: typePlayMusic) => state.played.info);

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

  const randomMusic = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * play_list.length);
      
    } while (newIndex == audioIndex);

    setAudioIndex(newIndex);
  };

  const handleNextMusic = () => {
    if(isRandom){
      randomMusic()
    } else {
      setAudioIndex((audioIndex + 1) % play_list.length);
    }
    console.log(audioIndex, '/::audio index/')
  };

  const handlePrevMusic = () => {
    if(isRandom){
      randomMusic()
    } else {
      setAudioIndex((audioIndex - 1) % play_list.length);
    }
  };

  const handleEndedMusic = (event: any) => {
    if(isFoward){
      // setPlay(true)
      event.target.play()
    } else {
      if(audioIndex + 1 < play_list.length){
        handleNextMusic()
      } else {
        setPlay(false)
      }
    }
  }

  const handleRepeat = () => {
    setIsFoward(!isFoward)
  }

  const handleTimeSliderChange = ({ x }: any) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div>
      {play_list.length && (
        <div className="play-music">
          <div className="play">
            <div className="album-info">
              <div className="song-list__item play-running-album-content">
                <img
                  className={isPlay ? "img_running rolate" : "img_running"}
                  src={album_info.image_url}
                  alt=""
                />
                <div className="song-list__item__content">
                  <div className="song-list__item__content-name line-1">
                    {album_info.name}
                  </div>
                  <div className="song-list__item__content-singer line-1">
                    {album_info.singers}
                  </div>
                </div>
              </div>
              {/* <SongCard item={album_info} /> */}
            </div>
            <div className="play-center">
              <div className="button-group">
                <div className="btn-func" onClick={handleRepeat}>
                  <i className={isFoward ? "lni lni-spinner-arrow active" : "lni lni-spinner-arrow"}></i>
                </div>
                <div className="btn-func" onClick={handlePrevMusic}>
                  <i className="lni lni-backward"></i>
                </div>
                <div
                  className="btn-func btn-play"
                  onClick={handlePausePlayClick}
                >
                  {isPlay ? (
                    <i className="lni lni-pause"></i>
                  ) : (
                    <i className="lni lni-play"></i>
                  )}
                </div>
                <div className="btn-func" onClick={handleNextMusic}>
                  <i className="lni lni-forward"></i>
                </div>
                <div
                  className="btn-func"
                  onClick={() => setIsRandom(!isRandom)}
                >
                  <i
                    className={
                      isRandom ? "lni lni-shuffle active" : "lni lni-shuffle"
                    }
                  ></i>
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
                    src={play_list[audioIndex]}
                    onLoadedData={handleLoadedData}
                    onTimeUpdate={() =>
                      setCurrentTime(audioRef.current.currentTime)
                    }
                    onEnded={handleEndedMusic}
                  />
                )}
              </div>
            </div>

            <div className="play-left">
              <div className="btn-fuc">
                <i className="lni lni-volume-high"></i>
              </div>
              <div className="btn-fuc">
                <i className="lni lni-thumbs-up"></i>
              </div>
              <div className="btn-fuc">
                <i className="lni lni-mic"></i>
              </div>
              <div className="btn-heart">
                <i className="lni lni-heart"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayMusic;
