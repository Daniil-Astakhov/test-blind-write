import { useDispatch, useSelector } from 'react-redux';
import './Information.scss'


const Information = () => {

const error = useSelector(state => state.error)
const right = useSelector(state => state.right)
const text = useSelector(state => state.text);
const currIndex = useSelector(state => state.currIndex)

    return (
        <div className="telemetry">
            <p>{'Errors '+ error}</p>
            <p>{'Right '+ right}</p>
            <p>{'Индекс '+ currIndex}</p>
        </div>
    )
}
export default Information;