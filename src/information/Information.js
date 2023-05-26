import { useDispatch, useSelector } from 'react-redux';
import './Information.scss'


const Information = () => {

const error = useSelector(state => state.error)
const right = useSelector(state => state.right)
const text = useSelector(state => state.text);
const currIndex = useSelector(state => state.currIndex)

    return (
        <div className="telemetry">
            <p>{(text[currIndex] === ' ' ? 'space' : text[currIndex])}</p>
            <p>{'Errors '+ error}</p>
            <p>{'Right '+ right}</p>
        </div>
    )
}
export default Information;