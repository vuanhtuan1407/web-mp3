import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayContent from "./PlayContent/PlayContent.js";
import MusicList from "./MusicList/MusicList";
import Content from "./Content.js"


function App() {
  return (
    <div className="App">
      {/* <PlayContent />
      <MusicList /> */}
      <Content />
    </div>
  );
}

export default App;
