import { list } from "../../MusicList/List.js";
import { systemAction } from "../action/action.js";

const initState = JSON.parse(localStorage.getItem("music-list") || "null") || {
  audioList: list,
};

function listReducer(state = initState, action) {
  switch (action.type) {
    case systemAction.UPDATE_LIST: {
      const newState = {
        ...state,
        ...action.payload,
      };
      const jsonState = JSON.stringify(newState);
      localStorage.setItem("music-list", jsonState);
      // return {
      //   ...state,
      //   ...action.payload,
      // };
      return newState;
    }

    default:
      return state;
  }
}

export default listReducer;
