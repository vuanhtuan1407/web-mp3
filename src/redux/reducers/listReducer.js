import { list } from "../../MusicList/List.js";
import { systemAction } from "../action/action.js";

const initState = { audioList: list };

function listReducer(state = initState, action) {
  switch (action.type) {
    case systemAction.UPDATE_LIST: {
      let newList = action.payload.list;
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}

export default listReducer;
