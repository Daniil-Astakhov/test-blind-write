export const setText = (text) => {
  return {
    type: 'SET_TEXT',
    payload: text
  };
};
export const setLengthText = (text) => {
  return {
    type: "SET_LENGTH_TEXT",
    payload: text.length - 1
  }
}
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