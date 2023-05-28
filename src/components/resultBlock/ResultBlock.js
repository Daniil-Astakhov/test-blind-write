import { useSelector } from 'react-redux';

import ResetBtn from '../../castomUI/castomButtons/ResetBtn'
import './ResultBlock.scss'


const ResultBlock = () => {

    const {text, error, simbolsPerMin} = useSelector(state => ({
        simbolsPerMin: state.simbolsPerMin,
        text: state.text,
        error: state.error,
      }));
    const errorPercentage = Math.floor((error / text.length) * 100);

    return(
        <div className="result">
            <div className="result__errors">You made mistakes in: <span>{errorPercentage}%</span> of symbols.</div>
            <div className="result__time">Symbols per minute: <span>{simbolsPerMin}</span></div>
            <ResetBtn/>          
        </div>
    )
}

export default ResultBlock;