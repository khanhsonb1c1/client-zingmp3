import React, { PropsWithChildren } from "react";
import PropTypes from "prop-types";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { updatePlayMusic } from "../store/playMusic";

PlayMusic.propTypes = {};

type typePlayMusic = PropsWithChildren<{
  played: {
    music_url: string;
  };
}>;

function PlayMusic() {
  const dispath = useDispatch();

  const play = useSelector((state: typePlayMusic) => state.played.music_url);

  const handleClick = () => {
    // const action = updatePlayMusic(); // action creator in store

    dispath(updatePlayMusic(""));
    // console.log(action)
    // dispath(action); // run action
  };

  return (
    <div className="play-music">
      <button onClick={handleClick}>thay doi ten ai hat</button>
      {play}
      <ReactAudioPlayer
        src={play}
        autoPlay
        controls
      />
    </div>
  );
}

export default PlayMusic;
