import React from "react";
import { list } from "../../MusicList/List.js";

const initState = list[0];

const CHANGE_AUDIO = "change_audio";
export const changeAudio = (payload) => {
  return {
    type: CHANGE_AUDIO,
    payload: payload,
  };
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_AUDIO:
      let index = action.payload.id;
      return list[index];
    default:
      throw new Error("Unknown action");
  }
}


export default rootReducer;
