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
export const setError = (text) => {
  return {
    type: "SET_ERROR_TEXT",
    payload: text.error + 1
  }
}
export const setInput = (text) => {
  return {
    type: "SET_INPUT_TEXT",
    payload: text
  }
  
}
export const setWrong = (bool) => {
  return {
    type: "SET_WRONG_TEXT",
    payload: bool
  }
}
