import { TextField, Box } from '@mui/material';
import {c} from './App.css'
function Input() {
    const copyTextToClipboard = async event => {
        if ('target' in event) {
            const value = event.target.value;
            let text = "";
            for (let i in value) {
                text += value[i] + '\uFEFF'
            }
            if ('clipboard' in navigator) {
                return await navigator.clipboard.writeText(text);
            } else {
                return document.execCommand('copy', true, text);
            }
        }
    }
    return document.queryCommandSupported('copy') ?
        (
            <Box sx={{ p: 15 }}>
                <TextField rows={9}
                    multiline onChange={copyTextToClipboard}
                    label="Type here"
                    variant="outlined"
                    fullWidth
                />
            </Box>
        )
        :
        (
            <div className={c}>
                <p>Not supported!</p>
            </div>
        )

}

export default Input;