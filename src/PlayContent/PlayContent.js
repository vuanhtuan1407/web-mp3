import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { ImPause, ImPlay2 } from "react-icons/im";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import {
  TbArrowsShuffle,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import PlayProvider from "./PlayProvider";
import "../css/PlayContent.css";
import "../css/PlayProvider.css";
import { list } from "../MusicList/List.js";
import { useDispatch, useSelector } from "react-redux";
import {
  nextAudio,
  previousAudio,
  randomAudio,
  repeatAudio,
} from "../redux/action/action.js";
import { playerAction } from "../redux/action/action.js";
import TimeSlider from "react-input-slider";
import playIcon from "../icons/play-button.svg";

function PlayContent() {
  const [isPlay, setIsPlay] = useState(false);
  const [isLoop, setIsLoop] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [volume, setVolume] = useState(1);
  // const [player, setPlayer] = useState(list[0]);

  const maxVolume = 1;

  const audio = useRef();

  const index = useSelector((state) => state.player.index);
  const musicList = useSelector((state) => state.list.audioList);

  const dispatch = useDispatch();

  const player = useMemo(() => musicList[index], [musicList, index]);

  console.log({ index, musicList, player });

  const loadedData = () => {
    setDuration(audio.current.duration);
    if (isPlay) audio.current.play();
    if (isMute) audio.current.volume = 0;
  };

  const handlePlay = () => {
    if (isPlay) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlay(!isPlay);
  };

  const handleNext = () => {
    if (isShuffle) dispatch(randomAudio());
    else dispatch(nextAudio());
  };

  const handlePrevious = () => {
    if (isShuffle) dispatch(randomAudio());
    else dispatch(previousAudio());
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleTime = ({ x }) => {
    audio.current.currentTime = x;
    setCurrentTime(x);
  };

  const handleVolume = ({ y }) => {
    audio.current.volume = y;
    console.log(audio.current.volume);
    setVolume(y);
    if (y == 0) setIsMute(true);
    else setIsMute(false);
  };

  const toggleVolume = () => {
    if (isMute) audio.current.volume = 1;
    else audio.current.volume = 0;
    setIsMute(!isMute);
    console.log(isMute);
  };

  const toggleLoop = () => {
    setIsLoop(isLoop + 1);
  };

  const handleRepeat = () => {
    dispatch(repeatAudio());
    setIsPlay(true);
    audio.current.play();
  };

  const handleOnEnded = () => {
    if (isLoop == 2) handleRepeat();
    else handleNext();
  };

  useEffect(() => {
    if (isLoop % 3 == 0 && currentTime == duration) {
      audio.current.pause();
      setIsPlay(false);
    }
  }, [currentTime]);

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
        <div className="btn-controls">
          <div className="btn-loop" onClick={toggleLoop}>
            {isLoop % 3 == 0 ? (
              <RiRepeat2Fill size={22} />
            ) : isLoop % 3 == 1 ? (
              <RiRepeat2Fill size={22} color="purple" />
            ) : (
              <RiRepeatOneFill size={22} color="purple" />
            )}
          </div>
          <div className="btn-previous" onClick={handlePrevious}>
            {/* <GiPreviousButton size={30}/> */}
            <BsSkipStartFill size={30} />
          </div>
          <div className="btn-play-pause" onClick={handlePlay}>
            {isPlay ? <ImPause size={50} /> : <ImPlay2 size={50} />}
          </div>
          <div className="btn-next" onClick={handleNext}>
            {/* <GiNextButton size={30}/> */}
            <BsSkipEndFill size={30} />
          </div>
          <div className="btn-shuffle" onClick={handleShuffle}>
            {isShuffle ? (
              <TbArrowsShuffle size={25} color="purple" />
            ) : (
              <TbArrowsShuffle size={25} />
            )}
          </div>
          <div className="btn-volume">
            <div className="volume-icon" onClick={toggleVolume}>
              {isMute ? (
                <RxSpeakerOff size={25} />
              ) : (
                <RxSpeakerLoud size={25} />
              )}
            </div>
            <div className="volume-slider">
              <TimeSlider
                axis="y"
                yreverse
                ymax={maxVolume}
                ystep="0.001"
                y={volume}
                onChange={handleVolume}
              />
            </div>
          </div>
        </div>
        <div className="time-slider">
          <div className="current-time">
            {(currentMinute > 9 ? currentMinute : "0" + currentMinute) +
              ":" +
              (currentSecond > 9 ? currentSecond : "0" + currentSecond)}
          </div>

          <TimeSlider
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={handleTime}
            styles={{
              track: {
                margin: "10px",
                backgroundColor: "#9B9B9B",
                height: "5px",
                width: "25em",
              },
              active: {
                backgroundColor: "#fff",
                height: "5px",
              },
              thumb: {
                width: "15px",
                height: "15px",
                backgroundColor: "#fff",
                borderRadius: 100,
              },
            }}
          />

          <div className="duration-time">
            {(Math.floor(duration / 60) > 9
              ? Math.floor(duration / 60)
              : "0" + Math.floor(duration / 60)) +
              ":" +
              (Math.floor(duration % 60) > 9
                ? Math.floor(duration % 60)
                : "0" + Math.floor(duration % 60))}
          </div>
        </div>
      </div>

      <audio
        ref={audio}
        src={player.url}
        onTimeUpdate={() => {
          setCurrentTime(audio.current.currentTime);
          setCurrentMinute(Math.floor(audio.current.currentTime / 60));
          setCurrentSecond(Math.floor(audio.current.currentTime % 60));
        }}
        onVolumeChange={() => setVolume(audio.current.volume)}
        onLoadedData={loadedData}
        onEnded={handleOnEnded}
      />
    </PlayProvider>
  );
}

export default PlayContent;
