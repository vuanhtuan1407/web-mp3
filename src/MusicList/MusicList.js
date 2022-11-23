import React from "react";
import { list } from "./List";
import MusicProvider from "./MusicProvider";

function MusicList() {
  return (
    <MusicProvider>
      {list.map((music) => (
        <div className="music">
          <img className="music-img" src={music.image} />
          <h4>{music.name}</h4>
          <h6>{music.artist}</h6>
        </div>
      ))}
    </MusicProvider>
  )
}

export default MusicList;
