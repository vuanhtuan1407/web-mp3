import React from "react";
import { list } from "../../MusicList/List.js";

const initState = { index: 0 };

const CHANGE_AUDIO = "change_audio";
export const changeAudio = (payload) => {
  return {
    type: CHANGE_AUDIO,
    payload: payload,
  };
};

const NEXT_AUDIO = "next_audio";
export const nextAudio = () => {
  return {
    type: NEXT_AUDIO,
  };
};

function rootReducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_AUDIO: {
      let index = action.payload.index;
      return {
        ...state,
        ...action.payload,
      };
    }

    case NEXT_AUDIO: {
      let index = state.index + 1;
      if (index >= list.length) index = 0;
      return {
        ...state,
        index,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
