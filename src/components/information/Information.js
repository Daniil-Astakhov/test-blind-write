import { useSelector } from 'react-redux';
import MainIcon from '../../castomUI/castomicons/MainIcon';
import SetParagraph from '../../castomUI/castomInputs/SetParagraph'
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