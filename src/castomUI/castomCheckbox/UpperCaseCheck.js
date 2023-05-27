import './UpperCaseCheck.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setCheckUpperCase} from '../../actions/actions';

const UpperCaseCheck = () => {
    const dispatch = useDispatch();
    const checkUpperCase = useSelector(state => state.checkUpperCase)

    const handleCheckboxChange = () => {
        dispatch(setCheckUpperCase(!checkUpperCase));
      };


    return(
        <>
            
            <label className="switch">
                <input type="checkbox" onChange={handleCheckboxChange} />
                <span className="slider">{checkUpperCase + ''}</span>
                <div className="switch-descr">Upper Сase Check</div>
            </label>
        </>
        
    );
}

export default UpperCaseCheck;