import React from "react";
import { list } from "./List";
import MusicProvider from "./MusicProvider";


function MusicList() {

  return (
    <MusicProvider>
      {list.map((music) => (
        <div className="music">
          <img className="music-img" src={music.image} />
          <div className="music-title">
            <div>{music.name}</div>
            <div>{music.artist}</div>
          </div>
        </div>
      ))}
    </MusicProvider>
  );
}

export default MusicList;
