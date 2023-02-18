import React from "react";
import MusicList from "./MusicList/MusicList.js";
import PlayContent from "./PlayContent/PlayContent.js";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <PlayContent />
      <MusicList />
      {/* {console.log(store.getState())} */}
    </div>
  );
}

export default Content;
