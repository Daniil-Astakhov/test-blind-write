import { useSelector } from 'react-redux';
import Timer from '../../services/Timer';
import MainIcon from '../castomUI/castomicons/MainIcon';
import UpperCaseCheck from '../castomUI/castomCheckbox/UpperCaseCheck';
import SetParagraph from '../castomUI/castomInputs/SetParagraph'

import './Information.scss'

const Information = () => {
    const {error, active} = useSelector(state => state)
    return (
        <div className={`telemetry ${!active ? 'on' : ''}`}>
            <MainIcon />
            <SetParagraph />
            <UpperCaseCheck />
            <div className='telemetry-error'>{error}</div>
            <Timer/>
        </div>
    )
}
export default Information;