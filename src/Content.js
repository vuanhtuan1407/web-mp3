import React, { useEffect } from "react";
import { useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import Provider from "./Provider";
import MusicProvider from "./MusicList/MusicProvider";
import PlayProvider from "./PlayContent/PlayProvider";
import { list } from "./MusicList/List.js";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PauseButton from "./icons/PauseButton";
import RepeatIcon from "./icons/RepeatIcon";
import RandomIcon from "./icons/RandomIcon";
import "./css/MusicList.css";
import "./css/PlayContent.css";
import "./css/styles.css";
import "./css/PlayProvider.css";

function Content() {
  const audio = useRef();
  const [index, setIndex] = useState(0);
  const [player, setPlayer] = useState(list[0]);
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const loadedData = () => {
    if (isPlay) audio.current.play();
  };

  const handlePlayer = () => {
    if (isPlay) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlay(!isPlay);
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(list.length - 1);
    } else {
      setIndex((prevIndex) => (prevIndex = prevIndex - 1));
    }
  };

  const handleNext = () => {
    if (index === list.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => (prevIndex = prevIndex + 1));
    }
  };

  const randomAudio = () => {
    let i = Math.floor(Math.random() * list.length);
    setIndex(i);
  };

  const handleTimeSlider = ({ x }) => {
    audio.current.currentTime = x;
    setCurrentTime(x);
  };

  useEffect(() => {
    setPlayer(list[index]);
  }, [index]);

  return (
    <Provider>
      <PlayProvider>
        <div className="header">
          <h4>MUSIC PLAYER</h4>
          <h2>{player.name}</h2>
        </div>

        <div className="cd">
          <img className="song-thumbnail" src={player.image} />
        </div>

        <div className="controls">
          <div className="btn-repeat">{<RepeatIcon />}</div>
          <div className="btn-previous" onClick={handlePrev}>
            {<PrevIcon />}
          </div>
          <div className="btn-play-pause" onClick={handlePlayer}>
            {isPlay ? <PauseButton /> : <PlayIcon />}
          </div>
          <div className="btn-next" onClick={handleNext}>
            {<NextIcon />}
          </div>
          <div className="btn-random" onClick={randomAudio}>
            {<RandomIcon />}
          </div>
        </div>
        <TimeSlider
          className="time-slider"
          axis="x"
          x={currentTime}
          onChange={handleTimeSlider}
          styles={{
            track: {
              margin: "10px",
              backgroundColor: "#e3e3e3",
              height: "5px",
              width: "25em",
            },
            active: {
              backgroundColor: "#333",
              height: "5px",
            },
            thumb: {
              width: "15px",
              height: "15px",
              backgroundColor: "#333",
              borderRadius: 100,
            },
          }}
        />
      </PlayProvider>
      <MusicProvider>
        {list.map((music) => (
          <div
            key={music.id}
            className="music"
            onClick={() => setIndex((prevIndex) => (prevIndex = music.id))}
          >
            <img className="music-img" src={music.image} />
            <div className="music-title">
              <div>{music.name}</div>
              <div>{music.artist}</div>
            </div>
          </div>
        ))}
      </MusicProvider>
      <audio
        ref={audio}
        src={player.url}
        onTimeUpdate={() => setCurrentTime(audio.current.currentTime)}
        onLoadedData={loadedData}
      />
    </Provider>
  );
}

export default Content;
