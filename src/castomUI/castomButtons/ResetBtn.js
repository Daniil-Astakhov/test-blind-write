import './ResetBtn.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setActive, setParagraphs } from '../../actions/actions';

const ResetBtn = () => {
    const dispatch = useDispatch();
    const {paragraphs} = useSelector(state => ({
        paragraphs: state.paragraphs
      }));
      const resets = () => {
        const newParagraphs = paragraphs === 1 ? 2 : 1;
        dispatch(setParagraphs(newParagraphs));
        dispatch(setActive(false));
      };

    return (
        <button onClick={resets} class="reset-btn" type="button">
              <strong>Thanks! 
                      Try again</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
        </button>
    )
}

export default ResetBtn;