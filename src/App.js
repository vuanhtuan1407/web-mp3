import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayContent from './PlayContent/PlayContent.js'
import MusicList from './MusicList/MusicList';



function App() {
  return (
    <div className="App">
      <PlayContent />
      <MusicList />
    </div>
  );
}

export default App;
