export const setText = (text) => {
  return {
    type: 'SET_TEXT',
    payload: text
  };
};
export const setCheckUpperCase = (bool) => {
  return {
    type: "SET_CHECK_UPPER_CASE",
    payload: bool
  };
};
export const setRight = (value) => {
  return {
    type: "SET_RIGHT_TEXT",
    payload: value
  }
}
export const setError = (state) => {
  return {
    type: "SET_ERROR_TEXT",
    payload: state.error + 1
  }
}
export const setResetError = (value) => {
  return {
    type: "SET_RESET_ERROR_TEXT",
    payload: value
  }
}
export const setInput = (text) => {
  return {
    type: "SET_INPUT_TEXT",
    payload: text
  }
}

export const setActive = (bool) => {
  return {
    type: "SET_ACTIVE",
    payload: bool
  }
}
export const setParagraphs = (value) => {
  return {
    type: "SET_PARAGRAPHS",
    payload: value
  }
}
export const setCurrIndex = (value) => {
  return {
    type: "SET_CURRINDEX",
    payload: value
  }
}
export const setFinished = (value) => {
  return {
    type: "SET_FINISHED",
    payload: value
  }
}
export const setSpeedSec = (value) => {
  return {
    type: "SET_SPEED_SEC",
    payload: value
  }
}
export const setSpeedMin = (value) => {
  return {
    type: "SET_SPEED_MIN",
    payload: value
  }
}

