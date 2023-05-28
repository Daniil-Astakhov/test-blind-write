const initialState = {
  text: '',
  currIndex: 0,
  right: 0,
  error: 0,
  loading: false,
  input: '',
  active: false,
  paragraphs: 1,
  finished: false,
  simbolsPerSec: 0,
  simbolsPerMin: 0,
  checkUpperCase: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHECK_UPPER_CASE":
      return {
        ...state,
        checkUpperCase: action.payload
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload
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
    case "SET_ACTIVE":
      return{
        ...state,
        active: action.payload
      }
    case "SET_PARAGRAPHS":
      return{
        ...state,
        paragraphs: action.payload
      }
    case "SET_CURRINDEX":
      return{
        ...state,
        currIndex: action.payload
      }
    case "SET_FINISHED":
      return{
        ...state,
        finished: action.payload
      }
    case "SET_SPEED_SEC":
      return{
        ...state,
        simbolsPerSec: action.payload
      }
    case "SET_SPEED_MIN":
      return{
        ...state,
        simbolsPerMin: action.payload
      }
    case "SET_RESET_ERROR_TEXT":
      return{
        ...state,
        error: action.payload
      }
    case "SET_INPUT_TEXT":
      return{
        ...state,
        input: action.payload
      } 
    default:
      return state;
  }
};

export default reducer;
