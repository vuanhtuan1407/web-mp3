import React from "react";
import "../css/MusicList.css";

function MusicProvider({ children }) {
  return <div className="music-provider">{children}</div>;
}

export default MusicProvider;
