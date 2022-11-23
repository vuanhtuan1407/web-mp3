import React, { useRef, useState } from "react";
import PlayProvider from "./PlayProvider";
import "./PlayContent.css";
import { list } from "../MusicList/List.js";

// const list = [
//   {
//     name: "Into the night",
//     artist: "YOASOBI",
//     image:
//       "https://cdn-japantimes.com/wp-content/uploads/2021/08/np_file_105988-870x489.jpeg",
//     url:
//       "https://drive.google.com/uc?export=view&id=1AgGUBxx1USLSU8o7JCGQheYGoHwFD6fm",
//   },
//   {
//     name: "Hooked on a feeling",
//     artist: "Blue Swede",
//     image: "https://i.ytimg.com/vi/NrI-UBIB8Jk/mqdefault.jpg",
//     url:
//       "https://drive.google.com/uc?export=view&id=1H7MiuBR5ofRbdg7Mt2G3HrLrjEht_ehu",
//   },
//   {
//     name: "Reality",
//     artist: "Lost Frequencies",
//     image: "https://melodicpop.com/build/images/artists/lost-frequencies.png",
//     url:
//       "https://drive.google.com/uc?export=view&id=1WUy8BlH4gw8kQ72knJdzwtBSKKpLumOz",
//   },
//   {
//     name: "Believer",
//     artist: "Imagine Dragons",
//     image:
//       "https://i1.sndcdn.com/artworks-s3zOCWcV8XQVtQcv-0emq8A-t500x500.jpg",
//     url:
//       "https://drive.google.com/uc?export=view&id=18Th6PJCf-0JrkSdIYQ5_epeLSxgNGqRv",
//   },
//   {
//     name: "This girl",
//     artist: "Kungs vs Cookin’ on 3 Burner",
//     image: "https://i1.sndcdn.com/artworks-000146780072-z8inm0-t500x500.jpg",
//     url:
//       "https://drive.google.com/uc?export=view&id=1rA7nX4hJcqi-PpBQAemkVZnLZxk3x0AY",
//   },
//   {
//     name: "Counting Stars",
//     artist: "OneRepublic",
//     image: "https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg",
//     url:
//       "https://drive.google.com/uc?export=view&id=1T_Ro100XjNMnnIOcywTX5KnLIYXRFADR",
//   },
//   {
//     name: "Adventure of a lifetime",
//     artist: "Coldplay",
//     image:
//       "https://i1.sndcdn.com/artworks-YEwXu5sQShwND3Rc-r1FSRw-t500x500.jpg",
//     url:
//       "https://drive.google.com/uc?export=view&id=1CrCnTFEk9ATSQ-dAKYWMzu4rzz60eC1F",
//   },
//   {
//     name: "Something Just Like This",
//     artist: "The Chainsmokers & Coldplay",
//     image:
//       "https://upload.wikimedia.org/wikipedia/vi/5/57/Something_Just_Like_This.png",
//     url:
//       "https://drive.google.com/uc?export=view&id=1C1W8AJpTcZldKAMVhIEHrZVh_idd2OvH",
//   },
// ];

function PlayContent() {
  const audio = useRef();
  const [index, setIndex] = useState(0);
  const [player, setPlayer] = useState(list[index]);
  const [isPlay, setIsPlay] = useState(true);

  const handlePlayer = () => {
    if (isPlay) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlay(!isPlay);
  };

  const handleNext = () => {
    if (index === list.length) {
      setIndex(0);
      setPlayer(list[0]);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setPlayer(list[index]);
    }
  };

  return (
    <PlayProvider>
      <div className="header">
        <h4>MUSIC PLAYER</h4>
        <h2>{player.name}</h2>
      </div>

      <div className="cd">
        <img className="song-thumbnail" src={player.image} />
      </div>

      <div className="controls">
        <div className="btn-repeat"></div>
        <div className="btn-previous"></div>
        <div className="btn-play" onClick={handlePlayer}></div>
        <div className="btn-next">
          <button onClick={handleNext}>next</button>
        </div>
        <div className="btn-random"></div>
      </div>
      <audio src={player.url} controls />
    </PlayProvider>
  );
}

export default PlayContent;
