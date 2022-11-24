import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Provider from "./Provider";
import MusicProvider from "./MusicList/MusicProvider";
import PlayProvider from "./PlayContent/PlayProvider";
import { list } from "./MusicList/List.js";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PauseButton from "./icons/PauseButton";
import "./css/MusicList.css";
import "./css/PlayContent.css";
import "./css/styles.css";

function Content() {
  const audio = useRef();
  const [index, setIndex] = useState(0);
  const [player, setPlayer] = useState(list[0]);
  const [isPlay, setIsPlay] = useState(false);

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
          <div
            className="btn-previous"
            onClick={() => {
              setIndex(index - 1);
              setPlayer(list[index]);
            }}
          >
            {<PrevIcon />}
          </div>
          <div className="btn-play-pause" onClick={handlePlayer}>
            {isPlay ? <PauseButton /> : <PlayIcon />}
          </div>
          <div
            className="btn-next"
            onClick={() => {
              setIndex(index + 1);
              setPlayer(list[index]);
            }}
          >
            {<NextIcon />}
          </div>
          <div className="btn-random"></div>
        </div>
        <audio ref={audio} src={player.url} onLoadedData={loadedData} />
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
