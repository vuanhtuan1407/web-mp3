import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeAudio, updateList } from "../redux/action/action.js";
import { list } from "./List";
import MusicProvider from "./MusicProvider";
import "../css/MusicList.css";
import "../css/MusicProvider.css";

function MusicList() {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(changeAudio({ index }));
  };

  const [dragIndex, setDragIndex] = useState(0);
  // const [dragOverIndex, setDragOverIndex] = useState(0);
  const [dragItem, setDragItem] = useState();
  const [musicList, setMusicList] = useState(list);

  return (
    <MusicProvider>
      {musicList.map((music, index) => (
        <div
          key={index}
          className="music"
          onClick={() => handleClick(index)}
          draggable
          onDragStart={(e) => {
            setDragIndex(index);
            setDragItem(list[index]);
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setDragImage(e.target, 20, 20);
          }}
          onDragOver={() => {
            console.log(index);
            if (index === dragIndex) return;
            let audioList = list.filter((audio) => audio !== dragItem);
            audioList.splice(index, 0, dragItem);
            console.log(audioList);
            setMusicList(audioList);
            dispatch(updateList({ index }));
          }}
          onDragEnd={() => {
            console.log(index);
          }}
        >
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
