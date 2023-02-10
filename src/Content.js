// import React, { useEffect } from "react";
// import { useRef, useState } from "react";
// import TimeSlider from "react-input-slider";
// import Provider from "./Provider";
// import MusicProvider from "./MusicList/MusicProvider";
// import PlayProvider from "./PlayContent/PlayProvider";
// import { list } from "./MusicList/List.js";
// import PrevIcon from "./icons/PrevIcon";
// import NextIcon from "./icons/NextIcon";
// import PauseIcon from "./icons/PauseIcon";
// import PlayIcon from "./icons/PlayIcon";
// import PauseButton from "./icons/PauseButton";
// import RepeatIcon from "./icons/RepeatIcon";
// import RandomIcon from "./icons/RandomIcon";
// import SpeakerIcon from "./icons/SpeakerIcon";
// import "./css/MusicList.css";
// import "./css/PlayContent.css";
// import "./css/PlayProvider.css";
// import { type } from "@testing-library/user-event/dist/type";

// function Content() {
//   const audio = useRef();
//   const musicRef = useRef();
//   const [index, setIndex] = useState(() => {
//     const storageIndex = JSON.parse(localStorage.getItem("index"));

//     return storageIndex || 0;
//   });
//   const [player, setPlayer] = useState(list[index]);
//   const [isPlay, setIsPlay] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [timeDuration, setTimeDuration] = useState(0);

//   const [currentMinute, setCurrentMinute] = useState(0);
//   const [currentSecond, setCurrentSecond] = useState(0);

//   const [volume, setVolume] = useState(1);
//   const maxVolume = 1;

//   const loadedData = () => {
//     setDuration(audio.current.duration);
//     if (isPlay) audio.current.play();
//   };

//   const handlePlayer = () => {
//     if (isPlay) {
//       audio.current.pause();
//     } else {
//       audio.current.play();
//     }
//     setIsPlay(!isPlay);
//   };

//   const handlePrev = () => {
//     if (index === 0) {
//       setIndex(list.length - 1);
//     } else {
//       setIndex((prevIndex) => (prevIndex = prevIndex - 1));
//     }
//   };

//   const handleNext = () => {
//     if (index === list.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex((prevIndex) => (prevIndex = prevIndex + 1));
//     }
//   };

//   const randomAudio = () => {
//     let i = Math.floor(Math.random() * list.length);
//     setIndex(i);
//   };

//   const handleTimeSlider = ({ x }) => {
//     audio.current.currentTime = x;
//     setCurrentTime(x);
//   };

//   const handleVolume = ({ x }) => {
//     audio.current.volume = x;
//     console.log(audio.current.volume);
//     setVolume(x);
//   };

//   // const handleVolume = ({ y }) => {
//   //   audio.current.volume = y;
//   //   console.log(audio.current.volume);
//   //   setVolume(y);
//   // };

//   useEffect(() => {
//     setIndex((prevIndex) => {
//       const saveIndex = prevIndex;

//       const jsonIndex = JSON.stringify(saveIndex);
//       localStorage.setItem("index", jsonIndex);

//       return saveIndex;
//     });
//     setPlayer(list[index]);
//   }, [index]);

//   return (
//     <Provider>
//       <PlayProvider>
//         <div className="header">
//           <h4>MUSIC PLAYER</h4>
//           <h2>{player.name}</h2>
//           <h5>Artist: {player.artist}</h5>
//         </div>

//         <div className="cd">
//           <img className="song-thumbnail" src={player.image} />
//         </div>

//         <div className="controls">
//           {/* <div className="btn-repeat">{<RepeatIcon />}</div> */}
//           <div className="btn-random" onClick={randomAudio}>
//             {<RandomIcon />}
//           </div>
//           <div className="btn-previous" onClick={handlePrev}>
//             {<PrevIcon />}
//           </div>
//           <div className="btn-play-pause" onClick={handlePlayer}>
//             {isPlay ? <PauseButton /> : <PlayIcon />}
//           </div>
//           <div className="btn-next" onClick={handleNext}>
//             {<NextIcon />}
//           </div>

//           <div className="btn-volume">
//             <div className="icon">
//               <SpeakerIcon />
//               <div className="volume-slider">
//                 <TimeSlider
//                   // axis="y"
//                   // ymax={maxVolume}
//                   // ystep="0.001"
//                   // y={volume}
//                   // yreverse
//                   // onChange={handleVolume}
//                   // styles={{
//                   //   track: {
//                   //     margin: "10px",
//                   //     backgroundColor: "#9B9B9B",
//                   //     width: "5px",
//                   //     height: "25em",
//                   //   },
//                   //   active: {
//                   //     backgroundColor: "#fff",
//                   //     width: "5px",
//                   //   },
//                   //   thumb: {
//                   //     width: "15px",
//                   //     height: "15px",
//                   //     backgroundColor: "#fff",
//                   //     borderRadius: 100,
//                   //   },
//                   // }}
//                   axis="x"
//                   xmax={maxVolume}
//                   xstep="0.001"
//                   x={volume}
//                   onChange={handleVolume}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="audio-time-slider">
//           <div className="current-time">
//             {(currentMinute > 9 ? currentMinute : "0" + currentMinute) +
//               ":" +
//               (currentSecond > 9 ? currentSecond : "0" + currentSecond)}
//           </div>
//           <TimeSlider
//             className="time-slider"
//             axis="x"
//             xmax={duration}
//             x={currentTime}
//             onChange={handleTimeSlider}
//             styles={{
//               track: {
//                 margin: "10px",
//                 backgroundColor: "#9B9B9B",
//                 height: "5px",
//                 width: "25em",
//               },
//               active: {
//                 backgroundColor: "#fff",
//                 height: "5px",
//               },
//               thumb: {
//                 width: "15px",
//                 height: "15px",
//                 backgroundColor: "#fff",
//                 borderRadius: 100,
//               },
//             }}
//           />
//           <div className="max-time">
//             {(Math.floor(duration / 60) > 9
//               ? Math.floor(duration / 60)
//               : "0" + Math.floor(duration / 60)) +
//               ":" +
//               (Math.floor(duration % 60) > 9
//                 ? Math.floor(duration % 60)
//                 : "0" + Math.floor(duration % 60))}
//           </div>
//         </div>
//       </PlayProvider>
//       <MusicProvider>
//         {list.map((music, index) => {
//           return (
//             <div
//               key={music.id}
//               className="music"
//               onClick={() => {
//                 setIndex(() => {
//                   const saveIndex = music.id;

//                   const jsonIndex = JSON.stringify(saveIndex);
//                   localStorage.setItem("index", jsonIndex);

//                   return saveIndex;
//                 });
//                 setPlayer(list[index]);
//               }}
//             >
//               <img className="music-img" src={music.image} />
//               <div className="music-title">
//                 <div>{music.name}</div>
//                 <div>{music.artist}</div>
//                 <div className="tags">
//                   {music.type.map((type) => (
//                     <a>{type}</a>
//                   ))}
//                 </div>
//                 {/* <div>{music.type}</div> */}
//               </div>
//             </div>
//           );
//         })}
//       </MusicProvider>
//       <audio
//         ref={audio}
//         src={player.url}
//         onTimeUpdate={() => {
//           setCurrentTime(audio.current.currentTime);
//           setCurrentMinute(Math.floor(audio.current.currentTime / 60));
//           setCurrentSecond(Math.floor(audio.current.currentTime % 60));
//         }}
//         onVolumeChange={() => setVolume(audio.current.volume)}
//         onLoadedData={loadedData}
//       />
//     </Provider>
//   );
// }

// export default Content;

import React from "react";
import MusicList from "./MusicList/MusicList.js";
import PlayContent from "./PlayContent/PlayContent.js";
import { store } from "./redux/store/store.js";

function Content() {
  return (
    <div className="content">
      <PlayContent />
      <MusicList />
      {console.log(store.getState())}
    </div>
  );
}

export default Content;
