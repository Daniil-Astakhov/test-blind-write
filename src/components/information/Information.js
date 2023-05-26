import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setParagraphs} from '../../actions/actions';
import Timer from '../../services/Timer';

import './Information.scss'


const Information = () => {
    const dispatch = useDispatch();
    const {error, right, active} = useSelector(state => state)


    const changeP = (e) => {
        dispatch(setParagraphs(e.target.value))
    }

    return (
        <div className={`telemetry ${!active ? 'on' : ''}`}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{"<P>"}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    style={{color: '#fff'}}
                    onChange={changeP}
                    defaultValue={1}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
            <div className='telemetry__error'>{error}{!active? ' Errors' : ''}</div>
            <Timer />
        </div>
    )
}
export default Information;