import TextService from '../../services/TextService';
import { useEffect } from 'react';
import { setText, setError, setRight, setResetError, setInput, setActive, setCurrIndex, setFinished } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Information from '../information/Information';
import KeyboardBlock from '../keyboardBlock/KeyboardBlock';
import ResultBlock from '../resultBlock/ResultBlock';
import mouse from '../../styles/img/mouse.svg'
import './InputBlock.scss'

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
          .then(res => dispatch(setText(res[0].split(''))))};
 
  const textCheck = (e) => {
    const value = e.target.value;
    dispatch(setInput(value));

    const isCorrect =
      checkUpperCase
        ? value === text[currIndex]
        : value.toUpperCase() === text[currIndex].toUpperCase();

    if (isCorrect) {
      dispatch(setRight(value));
    } else {
      dispatch(setError(state));
    }

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
          key={index}
          className={`${isCurrent ? 'current' : ''}
                      ${isCorrect ? 'correct-color' : ''} 
                      ${isIncorrect ? 'incorrect-color' : ''}`}
          >
          {item}
        </span>
      );
    });
  };


  
  

  return (
    <>
      <Information />
      <div className='text'>
      {finished ? <div style={{opacity: '1'}} className={`text__block`}>{<ResultBlock />}</div> : 
        <div onFocus={handleFocus}
             onBlur={handleFocus}
             style={{opacity: '1'}}
             className={`text__block ${active ? '' : 'blurred'}`}>
          <div className="text__block-value blur">  
            {text.length > 0 ? renderText(): null}
            
            <input className="text__block-input" type="text" onChange={textCheck} />
          </div>
        </div>
      }
      <div className={`check_active ${active ? '' : 'active'}`}> <img src={mouse} alt="mose" /> Click to start</div>
      <KeyboardBlock /> 
    </div>  
    </>
      
  )
}
export default InputBlock;