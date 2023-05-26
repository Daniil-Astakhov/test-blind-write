import TextService from '../../services/TextService';
import { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { setText, setError, setRight, setInput, setActive, setCurrIndex } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Information from '../information/Information';
import KeyboardBlock from '../keyboardBlock/KeyboardBlock';
import mouse from '../../styles/img/mouse.svg'
import './InputBlock.scss'

const InputBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const { text, currIndex, active, paragraphs } = useSelector(state => ({
    text: state.text,
    currIndex: state.currIndex,
    active: state.active,
    paragraphs: state.paragraphs
  }));
  

  const { getText } = TextService();

  useEffect(() => {
    dispatch(setText(''));
    dispatch(setCurrIndex(0));
      onRequest();

    }, [paragraphs]);

  const onRequest = () => {
      getText(paragraphs)
          .then(res => dispatch(setText(res[0].split(''))))};

  const textCheck = (e) => {
      const value = e.target.value;
      dispatch(setInput(value));     
      if (value === text[currIndex]) {
        dispatch(setRight(value));
      } else {
        dispatch(setError(state));
      }  
      e.target.value = '';
    };
    
  const renderText = () => {
    return (
      text.map((item, index) => {
        const isCurrent = index === currIndex ;
        const isCorrect = index < currIndex;
        return (
          <span key={index} className={`${isCurrent ? 'correct' : ''} ${isCorrect ? 'correct-color' : ''}`}>{item}</span>
        );
      })
    );
  };

  const onFocus = () => {
    dispatch(setActive(true))
  }
  const onBlur = () => {
    dispatch(setActive(false))
  }
   
  return (
    <>
      <div onFocus={onFocus}
          onBlur={onBlur} 
          className={`text__block ${active ? '' : 'blurred'}`}>
          <div className="text__block-value blur">
            {text.length > 0 ? renderText(): null}
            <LinearProgress variant="determinate" style={{color: 'red', position: 'relative', opacity: '0.5', marginTop: '30px', width: "30%", left: '50%', transform: 'translateX(-50%)', background: '#1a1b1b'}} value={(currIndex / text.length) * 100} />
            <input className="text__block-input" type="text" onChange={textCheck} />
          </div>
      </div>
      <div className={`check_active ${active ? '' : 'active'}`}> <img src={mouse} alt="mose" /> Click to start</div>
      <Information />
      <KeyboardBlock /> 
    </>    
  )
}
export default InputBlock;