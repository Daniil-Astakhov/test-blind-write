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
export const setParagraphs = (val) => {
  return {
    type: "SET_PARAGRAPHS",
    payload: val
  }
}
export const setCurrIndex = (val) => {
  return {
    type: "SET_CURRINDEX",
    payload: val
  }
}
export const setFinished = (val) => {
  return {
    type: "SET_FINISHED",
    payload: val
  }
}
export const setSpeedSec = (val) => {
  return {
    type: "SET_SPEED_SEC",
    payload: val
  }
}
export const setSpeedMin = (val) => {
  return {
    type: "SET_SPEED_MIN",
    payload: val
  }
}

