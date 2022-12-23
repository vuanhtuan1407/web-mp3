import React from "react";
import { useDispatch } from "react-redux";
import { changeAudio } from "../redux/action/action.js";
import { list } from "./List";
import MusicProvider from "./MusicProvider";
import "../css/MusicList.css"
import "../css/MusicProvider.css"

function MusicList() {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(changeAudio({ index }));
  };
  return (
    <MusicProvider>
      {list.map((music, index) => (
        <div key={index} className="music" onClick={() => handleClick(index)}>
          <img className="music-img" src={music.image} />
          <div className="music-title">
            <div>{music.name}</div>
            <div>{music.artist}</div>
            <div className="tags">
              {music.type.map((type) => (
                <a href="#">{type}</a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </MusicProvider>
    
  );
}
export default MusicList;
