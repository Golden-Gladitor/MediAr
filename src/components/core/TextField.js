import React from 'react';
import { Box, styled, TextField } from '@mui/material';

const Container = styled(Box)(({ theme, width, marginTop, marginBottom }) => ({
    width: width ? width : '100%',
    marginTop: marginTop ? marginTop : '7.5px',
    marginBottom: marginBottom ? marginBottom : '7.5px'
}));

export default function MyTextField({
    width,
    marginTop,
    marginBottom,
    ...rest
}) {
    return <Container
        width={width}
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <TextField
            size="small"
            type='text'
            {...rest}
        />
    </Container>;
};