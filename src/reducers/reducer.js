const initialState = {
  text: '',
  textLength: 0,
  currIndex: 0,
  right: 0,
  error: 0,
  input: '',
  active: false, 

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_TEXT":
      return {
        ...state,
        text: action.payload
      };

    case "SET_LENGTH_TEXT":
      return {
        ...state,
        textLength: action.payload
      };
    case "SET_RIGHT_TEXT":
      return {
        ...state,
        right: state.right + 1,
        currIndex: state.currIndex + 1
      };
    case "SET_ERROR_TEXT":
      return{
        ...state,
        error: action.payload,
      }
    case "SET_ERROR_TEXT":
      return{
        ...state,
        input: action.payload
      }
    case "SET_ACTIVE":
      return{
        ...state,
        active: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
