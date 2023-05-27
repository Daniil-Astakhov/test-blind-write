import TextService from '../../services/TextService';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { setText, setError, setRight, setResetError, setInput, setActive, setCurrIndex, setFinished } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Information from '../information/Information';
import KeyboardBlock from '../keyboardBlock/KeyboardBlock';
import ResultBlock from '../resultBlock/ResultBlock';
import mouse from '../../styles/img/mouse.svg'
import './InputBlock.scss'

const InputBlock = () => {
  const [inputSimbol, setInputSimbol] = useState('')
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const {finished, text, currIndex, active, paragraphs } = useSelector(state => ({
    text: state.text,
    currIndex: state.currIndex,
    active: state.active,
    paragraphs: state.paragraphs,
    finished: state.finished,
  }));
  
  const { getText } = TextService();

  const styles = () => {
    return {color: 'red',
            position: 'relative',
            opacity: '0.5',
            bottom: '50px',
            width: "20vw",
            left: '30vw',
            background: '#1a1b1b'}
  }

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
      setInputSimbol(value)
      dispatch(setInput(value));     
      if (value === text[currIndex]) {
        dispatch(setRight(value));
      } else {
        dispatch(setError(state));
      }  
      e.target.value = '';
      if (currIndex === (text.length - 1)){
        dispatch(setFinished(true))
      }
    };

  const handleFocus = () => {
    dispatch(setActive(!active));
  };

  const renderText = () => {
    return text.map((item, index) => {
      const isCurrent = index === currIndex;
      const isCorrect = index < currIndex;
      const isIncorrect = isCurrent && currIndex > 0 && text[currIndex - 1] !== inputSimbol;
      return (
        <span
          key={index}
          className={`${isCurrent ? 'current' : ''} ${
            isCorrect ? 'correct-color' : ''
          } ${isIncorrect ? 'incorrect-color' : ''}`}
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
      <LinearProgress variant="determinate" style={styles()} value={(currIndex / text.length) * 100} />
      <KeyboardBlock /> 
    </div>  
    </>
      
  )
}
export default InputBlock;