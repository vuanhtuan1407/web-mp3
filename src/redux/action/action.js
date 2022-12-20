export const playerAction = {
  CHANGE_AUDIO: "change-audio",
  NEXT_AUDIO: "next-audio",
  PREVIOUS_AUDIO: "previous-audio",
  RANDOM_AUDIO: "random-audio",
  REPEAT_AUDIO: "repeat-audio",
};

export const changeAudio = (payload) => {
  return {
    type: playerAction.CHANGE_AUDIO,
    payload: payload,
  };
};

export const nextAudio = () => {
  return {
    type: playerAction.NEXT_AUDIO,
  };
};

export const previousAudio = () => {
  return {
    type: playerAction.PREVIOUS_AUDIO,
  };
};

export const randomAudio = () => {
  return {
    type: playerAction.RANDOM_AUDIO,
  };
};

export const repeatAudio = () => {
  return {
    type: playerAction.REPEAT_AUDIO,
  };
};
