import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3066BE',
        },
        secondary: {
            main: '#FA7E61',
        },
        error: {
            main: red.A400,
        },
    }
});

export default theme;