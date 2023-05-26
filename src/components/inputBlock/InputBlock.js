import TextService from '../../services/TextService';
import { useEffect } from 'react';
import { setText, setLengthText, setError, setRight, setInput, setWrong } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './InputBlock.scss'

const InputBlock = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state); 
    const text = useSelector(state => state.text);
    const length = useSelector(state => state.textLength)
    const error = useSelector(state => state.error)
    const right = useSelector(state => state.right)
    const currIndex = useSelector(state => state.currIndex)
    const wrong = useSelector(state => state.wrong)

    const { getText } = TextService();


    useEffect(() => {
        onRequest();
      }, []);

    const onRequest = () => {
        getText(1)
            .then(res => {
                dispatch(setText(res[0].split('')))
                dispatch(setLengthText(res[0]))})
    };

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


    return (
        <div>
        <h1>{text.length > 0 ? renderText(): null}</h1>
        <input type="text" onChange={textCheck} />
        <h3>{'Сейчас надо ввести ' + (text[currIndex] === ' ' ? 'space' : text[currIndex])}</h3>
        <h3>{'ошибок '+error}</h3>
        <h3>{'верных '+right}</h3>
        </div>
        
    )
}
export default InputBlock;