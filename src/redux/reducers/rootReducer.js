import React from "react";
import { list } from "../../MusicList/List.js";
import { playerAction } from "../action/action.js";

const initState = { index: 0 };

function rootReducer(state = initState, action) {
  switch (action.type) {
    case playerAction.CHANGE_AUDIO: {
      let index = action.payload.index;
      return {
        ...state,
        ...action.payload,
      };
    }

    case playerAction.NEXT_AUDIO: {
      let index = state.index + 1;
      if (index >= list.length) index = 0;
      return {
        ...state,
        index,
      };
    }

    case playerAction.PREVIOUS_AUDIO: {
      let index = state.index - 1;
      if (index < 0) index = list.length - 1;
      return {
        ...state,
        index,
      };
    }

    case playerAction.RANDOM_AUDIO: {
      let index = Math.floor(Math.random() * list.length);
      return {
        ...state,
        index,
      };
    }

    case playerAction.REPEAT_AUDIO: {
      return state;
    }

    default:
      return state;
  }
}

export default rootReducer;
