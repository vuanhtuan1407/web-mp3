import React, { useMemo, useRef, useState } from "react";
import PlayProvider from "./PlayProvider";
import "../css/PlayContent.css";
import { list } from "../MusicList/List.js";
import { useDispatch, useSelector } from "react-redux";
import { nextAudio } from "../redux/reducers/rootReducer.js";

function PlayContent() {
  // const [index, setIndex] = useState(0);
  // const [player, setPlayer] = useState(list[index]);
  const [isPlay, setIsPlay] = useState(true);

  const audio = useRef();

  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();

  const player = useMemo(() => list[index], [index]);

  const handlePlayer = () => {
    if (isPlay) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlay(!isPlay);
  };

  const handleNext = () => {
    // if (index === list.length) {
    //   setIndex(0);
    //   setPlayer(list[0]);
    // } else {
    //   setIndex((prevIndex) => prevIndex + 1);
    //   setPlayer(list[index]);
    // }
    dispatch(nextAudio());
  };

  const handleMusic = (music) => {
    // let i = music.id;
    // setPlayer(list[i]);
    // setIndex(i);
  };

  return (
    <PlayProvider>
      <div className="header">
        <h4>MUSIC PLAYER</h4>
        <h2>{player.name}</h2>
      </div>

      <div className="cd">
        <img className="song-thumbnail" src={player.image} />
      </div>

      <div className="controls">
        <div className="btn-repeat"></div>
        <div className="btn-previous"></div>
        <div className="btn-play" onClick={handlePlayer}></div>
        <div className="btn-next">
          <button onClick={handleNext}>next</button>
        </div>
        <div className="btn-random"></div>
      </div>
      <audio
        ref={audio}
        src={player.url}
        autoPlay
        // onTimeUpdate={() => {
        //   setCurrentTime(audio.current.currentTime);
        //   setCurrentMinute(Math.floor(audio.current.currentTime / 60));
        //   setCurrentSecond(Math.floor(audio.current.currentTime % 60));
        // }}
        // onVolumeChange={() => setVolume(audio.current.volume)}
        // onLoadedData={loadedData}
      />
    </PlayProvider>
  );
}

export default PlayContent;
