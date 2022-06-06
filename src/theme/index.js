import { createTheme } from '@mui/material';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Open Sans', 'Roboto', 'Lato', 'Barlow', 'Poppins']
    }
});

const theme = createTheme({

});

export default theme;