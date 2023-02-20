import React from "react";
import { list } from "../../MusicList/List.js";
import { playerAction, systemAction } from "../action/action.js";

const initState = JSON.parse(localStorage.getItem("index") || "null") || {
  index: 0,
};

function playerReducer(state = initState, action) {
  switch (action.type) {
    case playerAction.CHANGE_AUDIO: {
      let index = action.payload.index;
      const newState = {
        ...state,
        index,
      };
      const jsonState = JSON.stringify(newState);
      localStorage.setItem("index", jsonState);
      // return {
      //   ...state,
      //   index,
      // };
      return newState;
    }

    case playerAction.NEXT_AUDIO: {
      let index = state.index + 1;
      if (index >= list.length) index = 0;
      const newState = {
        ...state,
        index,
      };
      const jsonState = JSON.stringify(newState);
      localStorage.setItem("index", jsonState);
      // return {
      //   ...state,
      //   index,
      // };
      return newState;
    }

    case playerAction.PREVIOUS_AUDIO: {
      let index = state.index - 1;
      if (index < 0) index = list.length - 1;
      const newState = {
        ...state,
        index,
      };
      const jsonState = JSON.stringify(newState);
      localStorage.setItem("index", jsonState);
      // return {
      //   ...state,
      //   index,
      // };
      return newState;
    }

    case playerAction.RANDOM_AUDIO: {
      let index = Math.floor(Math.random() * list.length);
      const newState = {
        ...state,
        index,
      };
      const jsonState = JSON.stringify(newState);
      localStorage.setItem("index", jsonState);
      // return {
      //   ...state,
      //   index,
      // };
      return newState;
    }

    case playerAction.REPEAT_AUDIO: {
      return state;
    }

    default:
      return state;
  }
}

export default playerReducer;
