import './SetParagraph.scss';
import { useDispatch } from 'react-redux';
import { setParagraphs} from '../../actions/actions';

const SetParagraph = () => {
    const dispatch = useDispatch();


    const changeP = (e) => {
        dispatch(setParagraphs(e.target.value))
    }
  return (

      
    <div className="radio-input">  
      <div className='radio-input-descr'>Set paragraphs</div>  
      <input onChange={changeP} value="1" name="value-radio" id="value-1" type="radio" />
      <input onChange={changeP} value="2" name="value-radio" id="value-3" type="radio" />
    </div>

    
  );
};

export default SetParagraph;
