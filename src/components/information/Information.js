import { useSelector } from 'react-redux';
import MainIcon from '../../styles/lables/icons/MainIcon';
import SetParagraph from '../../styles/lables/radioInputs/SetParagraph';
import Timer from '../../services/Timer';

import './Information.scss'


const Information = () => {
    const {error, active} = useSelector(state => state)
    return (
        <div className={`telemetry ${!active ? 'on' : ''}`}>
            <MainIcon />
            <p>Set paragraphs</p>
            <SetParagraph />
            <div className='telemetry-error'>{error}</div>
            <Timer />
        </div>
    )
}
export default Information;