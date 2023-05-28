import { useSelector, useDispatch } from 'react-redux';
import { setParagraphs, setActive} from '../../actions/actions';
import { v4 as uuidv4 } from 'uuid';

import './KeyboardBlock.scss';
import reset from '../../styles/img/reset.svg'

const KeyboardBlock = () => {
    const keyLines = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
        [' ']
      ];
    const dispatch = useDispatch();
    const {paragraphs, text, currIndex } = useSelector(state => ({
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
                <span key={uuidv4()} className={`keyboard_key ${isCurrent ? 'key_active' : ''} ${additionalClassName}`}>
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
            <div className="keyboard_row" data-line='0'>
                {keyRow(keyLines[0])}
                <button onClick={resets} className='keyboard_key btn'><img src={reset} alt="spin"/></button>
            </div>
            <div className="keyboard_row" data-line='1'>
                {keyRow(keyLines[1])}
            </div>
            <div className="keyboard_row" data-line='2'>
                {keyRow(keyLines[2])}
            </div>
            <div className="keyboard_row" data-line='3'>
                {keyRow(keyLines[3])}
            </div> 
        </div>
    );
};

export default KeyboardBlock;
