import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setParagraphs} from '../../actions/actions';
import blindFace from '../../styles/img/blindFace.svg'
import Timer from '../../services/Timer';

import './Information.scss'


const Information = () => {
    const dispatch = useDispatch();
    const {error, active} = useSelector(state => state)


    const changeP = (e) => {
        dispatch(setParagraphs(e.target.value))
    }
    return (
        <div className={`telemetry ${!active ? 'on' : ''}`}>
            <img className='logo' src={blindFace} alt="logo" />
            <FormControl  fullWidth>
                <InputLabel style={{color: '#EBEDF0', fontSize: '1.3rem'}} variant="standard" htmlFor="uncontrolled-native">
                    Paragraphs
                </InputLabel>
                <NativeSelect
                    defaultValue={1}
                    onChange={changeP}
                    style={{color: '#fff'}}>
                    <option className='option' value={1}>{'>_< - 1'}</option>
                    <option className='option' value={2}>{'^_^ - 2'}</option>
                </NativeSelect>
            </FormControl>
            <div className='telemetry-error'>{error}</div>
            <Timer />
        </div>
    )
}
export default Information;