import React from "react";
import { useRef, useState } from "react";
import Provider from "./Provider";
import MusicProvider from "./MusicList/MusicProvider";
import PlayProvider from "./PlayContent/PlayProvider";
import { list } from "./MusicList/List.js";
import "./PlayContent/PlayContent.css";
import "./MusicList/MusicProvider.css";

function Content() {
  const audio = useRef();
  const [index, setIndex] = useState(0);
  const [player, setPlayer] = useState(list[index]);
  const [isPlay, setIsPlay] = useState(true);

  const handlePlayer = () => {
    if (isPlay) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlay(!isPlay);
  };

  const handleNext = () => {
    if (index === list.length) {
      setIndex(0);
      setPlayer(list[0]);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setPlayer(list[index]);
    }
  };

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
          <div className="btn-repeat"></div>
          <div className="btn-previous"></div>
          <div className="btn-play" onClick={handlePlayer}></div>
          <div className="btn-next">
            <button onClick={handleNext}>next</button>
          </div>
          <div className="btn-random"></div>
        </div>
        <audio src={player.url} controls />
      </PlayProvider>
      <MusicProvider>
        {list.map((music) => (
          <div
            className="music"
            onClick={() => {
              let i = music.id;
              setIndex(i);
              setPlayer(list[i]);
            }}
          >
            <img className="music-img" src={music.image} />
            <div className="music-title">
              <div>{music.name}</div>
              <div>{music.artist}</div>
            </div>
          </div>
        ))}
      </MusicProvider>
    </Provider>
  );
}

export default Content;
