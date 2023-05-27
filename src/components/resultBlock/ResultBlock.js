import './ResultBlock.scss'
import ResetBtn from '../../styles/lables/castomButtons/ResetBtn';

import { useSelector } from 'react-redux';

const ResultBlock = () => {
    const {text, error, simbolsPerMin} = useSelector(state => ({
        simbolsPerMin: state.simbolsPerMin,
        text: state.text,
        error: state.error,
      }));

    
    const errorPercentage = Math.floor((error / text.length) * 100);
    return(
        <div className="result">
            <div className="result__errors">You made mistakes in: {errorPercentage}% of symbols.</div>
            <div className="result__time">Symbols per minute: {simbolsPerMin}</div>
            <ResetBtn/>
            
            {/* <button onClick={resets}>
              <div class="sign"></div>
                <img src={reset} alt="" />
              <div class="texts">Logout</div>
            </button> */}
            
        </div>
    )

}





export default ResultBlock;