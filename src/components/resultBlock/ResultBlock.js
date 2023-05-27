import './ResultBlock.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setActive, setParagraphs } from '../../actions/actions';


const ResultBlock = () => {
    const dispatch = useDispatch();
    const {paragraphs, text, error, simbolsPerMin} = useSelector(state => ({
        simbolsPerMin: state.simbolsPerMin,
        text: state.text,
        error: state.error,
        paragraphs: state.paragraphs
      }));

      const resets = () => {
        const newParagraphs = paragraphs === 1 ? 2 : 1;
        dispatch(setParagraphs(newParagraphs));
        dispatch(setActive(false));
      };
    
    const errorPercentage = Math.floor((error / text.length) * 100);
    return(
        <div className="result">
            <div className="result__errors">You made mistakes in {errorPercentage}% of symbols.</div>
            <div className="result__time">TIME {simbolsPerMin}</div>
            <button onClick={resets}>RESET</button>
        </div>
    )

}

export default ResultBlock;