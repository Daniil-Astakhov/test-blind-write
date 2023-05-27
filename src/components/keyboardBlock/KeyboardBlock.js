import './KeyboardBlock.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setParagraphs, setActive} from '../../actions/actions';


const KeyboardBlock = () => {
    const dispatch = useDispatch();
    const {paragraphs,text, currIndex } = useSelector(state => ({
        text: state.text,
        currIndex: state.currIndex,
        paragraphs: state.paragraphs,
    }));

  const keyRow = (keys) => {
    return keys.map((key) => {
        const isSpace = key === ' ';
        const additionalClassName = isSpace ? 'keyboard_space' : '';
        const isCurrent = currIndex < text.length && key.toLowerCase() === text[currIndex].toLowerCase();
        return (
            <span key={key} className={`keyboard_key ${isCurrent ? 'key_active' : ''} ${additionalClassName}`}>
            {key}
          </span>
      );
    });
  };
  const resets = () => {
    const newParagraphs = paragraphs === 1 ? 2 : 1;
    dispatch(setParagraphs(newParagraphs));
    dispatch(setActive(false));
  };

    return (
        <div className="keyboard">
        
            <div className="keyboard_row" data-line='1'>
                {keyRow(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'])}
                <button onClick={resets} className='keyboard_key'>RESET</button>
            </div>
            <div className="keyboard_row" data-line='2'>
                {keyRow(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"])}
            </div>
            <div className="keyboard_row" data-line='3'>
                {keyRow(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'])}
            </div>
            <div className="keyboard_row" data-line='3'>
                {keyRow([' '])}
            </div>
            
        </div>
    );
};

export default KeyboardBlock;
