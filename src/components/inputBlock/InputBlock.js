import {
  TextService,
  useEffect,
  setText,
  setError,
  setRight,
  setResetError,
  setInput,
  setActive,
  setCurrIndex,
  setFinished,
  useDispatch,
  useSelector,
  uuidv4
} from './imports';
import ResultBlock from '../resultBlock/ResultBlock';
import mouse from '../../styles/img/mouse.svg';
import './InputBlock.scss';

const InputBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const {finished, text, currIndex, active, paragraphs, input, checkUpperCase } = useSelector(state => ({
    text: state.text,
    currIndex: state.currIndex,
    active: state.active,
    paragraphs: state.paragraphs,
    finished: state.finished,
    input: state.input,
    checkUpperCase: state.checkUpperCase
  }));
  const { getText } = TextService();

  useEffect(() => {
    dispatch(setFinished(false));
    dispatch(setCurrIndex(0));
    dispatch(setResetError(0));
    onRequest();
    // eslint-disable-next-line 
  }, [paragraphs]);

  const onRequest = () => {
      getText(paragraphs)
          .then(res => dispatch(setText(res[0].split(''))))
  };
 
  const textCheck = (e) => {
    const value = e.target.value;
    dispatch(setInput(value));
    const isCorrect = checkUpperCase ? value === text[currIndex] : value.toUpperCase() === text[currIndex].toUpperCase();
    isCorrect ? dispatch(setRight(value)) : dispatch(setError(state));
    e.target.value = '';
    if (currIndex === text.length - 1) {
      dispatch(setFinished(true));
    }
  };

  const handleFocus = () => {
    dispatch(setActive(!active));
  };

  const renderText = () => {
    return text.map((item, index) => {
      const isCurrent = index === currIndex;
      const isCorrect = index < currIndex;
      const isIncorrect = isCurrent && currIndex > 0 && text[currIndex - 1].toUpperCase() !== input.toUpperCase();
      return (
        <span
          key={uuidv4()}
          className={`${isCurrent ? 'current' : ''}
                      ${isCorrect ? 'correct-color' : ''} 
                      ${isIncorrect ? 'incorrect-color' : ''}`}>
          {item}
        </span>
      );
    });
  };
 
  const textBlock = () => {
    return(
      <div onFocus={handleFocus}
             onBlur={handleFocus}
             className={`text__block ${active ? '' : 'blurred'}`}>
        <div className="text__block-value blur">  
          {text.length > 0 ? renderText(): null}
          <input className="text__block-input" type="text" onChange={textCheck} />
        </div>
      </div>
    )
  }

  return (
    <>
      
      <div className='text'>
        {finished ? <div className={`text__block`}>{<ResultBlock />}</div> : textBlock()}
        <div className={`check_active ${active ? '' : 'active'}`}> <img src={mouse} alt="mose" /> Click to start</div>
      </div>  
    </> 
  )
}

export default InputBlock;