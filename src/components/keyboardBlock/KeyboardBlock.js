import './KeyboardBlock.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const KeyboardBlock = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const currIndex = useSelector((state) => state.currIndex);

  const keyRow = (keys) => {
    return keys.map((key) => {
      const isCurrent = currIndex < text.length && key.toLowerCase() === text[currIndex].toLowerCase();
      return (
        <span key={key} className={`keyboard_key ${isCurrent ? 'key_active' : ''}`}>
          {key}
        </span>
      );
    });
  };

    return (
        <div className="keyboard">
            <div className="keyboard_row" data-line='1'>
                {keyRow(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'])}
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
