import TextService from '../../services/TextService';
import { useEffect } from 'react';
import { setText, setError, setRight, setInput, setActive } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Information from '../../information/Information';
import mouse from '../../styles/img/mouse.svg'
import './InputBlock.scss'

const InputBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state); 
  const text = useSelector(state => state.text);
  const currIndex = useSelector(state => state.currIndex)
  const active = useSelector(state => state.active)

  const { getText } = TextService();


  useEffect(() => {
      onRequest();
    }, []);

  const onRequest = () => {
      getText(4)
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
        const isCurrent = index === currIndex;
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
          <input className="text__block-input" type="text" onChange={textCheck} />
        </div>
    </div>
    <div className={`check_active ${active ? '' : 'active'}`}> <img src={mouse} alt="mose" /> Click to start</div>
    <Information />
    </>
    
  )
}
export default InputBlock;