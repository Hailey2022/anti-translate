import { TextField, Box } from '@mui/material';

function Input() {

    const copyTextToClipboard = async event => {
        if ('target' in event)
        {
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

    return (
        <Box sx={{ p: 15 }} >
            <TextField rows={9}

                multiline onChange={copyTextToClipboard}
                label="Type here"
                variant="outlined"
                fullWidth />
        </Box>

    );
}

export default Input;