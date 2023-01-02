import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAudio, updateList } from "../redux/action/action.js";
import { list } from "./List";
import MusicProvider from "./MusicProvider";
import "../css/MusicList.css";
import "../css/MusicProvider.css";
import { store } from "../redux/store/store.js";

function MusicList() {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(changeAudio({ index }));
  };

  const [dragIndex, setDragIndex] = useState(0);
  const [dragOverIndex, setDragOverIndex] = useState(0);
  const [dragItem, setDragItem] = useState(list[0]);
  const musicList = useSelector((state) => state.list.audioList);

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
            setDragItem(musicList[index]);
            e.dataTransfer.effectAllowed = "all";
            e.dataTransfer.setDragImage(e.target, 20, 20);
          }}
          onDragOver={() => {
            console.log(index);
            setDragOverIndex(index);
            let List = musicList.filter((audio) => audio !== dragItem);
            List.splice(index, 0, dragItem);
            dispatch(changeAudio({ index }));
            dispatch(updateList({ audioList: List }));
          }}
          onDragEnd={() => {
            console.log({ index, musicList });
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
