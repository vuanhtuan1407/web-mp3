import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAudio, updateList } from "../redux/action/action.js";
import { list } from "./List";
import MusicProvider from "./MusicProvider";
import "../css/MusicList.css";
import "../css/MusicProvider.css";
import { store } from "../redux/store/store.js";
import {} from "react-icons";
import { BsFillPlayFill, BsList } from "react-icons/bs";

function MusicList() {
  const storageList = JSON.parse(localStorage.getItem("music-list"));
  // const musicList = JSON.parse(localStorage.getItem("music-list"));
  // const [musicList, setMusicList] = useState(storageList);

  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(changeAudio({ index }));
  };

  const [dragIndex, setDragIndex] = useState(0);
  const [dragOverIndex, setDragOverIndex] = useState(0);
  const [dragItem, setDragItem] = useState(list[0]);
  const musicList = useSelector((state) => state.list.audioList);
  const newList = useSelector((state) => state.list.audioList);
  console.log(musicList);
  // if (musicList !== storageList) {
  //   dispatch(dispatch(updateList({ audioList: storageList })))
  //   const jsonList = JSON.stringify(newList);
  //   localStorage.setItem("music-list", jsonList);
  // }

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
          <BsList color="white" size={20} />
          <img className="music-img" src={music.image} />
          <div className="music-title">
            <div>{music.name}</div>
            <div>{music.artist}</div>
            <div className="tags">
              {music.type.map((type) => (
                <div className="tag">
                  <a href="#">
                    {type}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="music-length">
            <BsFillPlayFill />
            {music.length}
          </div>
        </div>
      ))}
    </MusicProvider>
  );
}

export default MusicList;
