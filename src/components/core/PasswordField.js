import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ReactComponent as PasswordIcon } from '../../assets/svg/password-lock.svg';

export default function MyPasswordField({
    themeType,
    error,
    fullWidth,
    helperText,
    name,
    onBlur,
    onChange,
    value,
    variant,
    placeholder,
}) {
    const [isVisibble, setVisibble] = React.useState(false);

    return <TextField
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        variant={variant}
        placeholder={placeholder}
        size="small"
        type={isVisibble ? 'text' : 'password'}
        InputProps={{
            startAdornment: <InputAdornment position="start" ><PasswordIcon /></InputAdornment>,
            endAdornment:
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setVisibble(state => !state)}
                        edge="end"
                    >
                        {isVisibble ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
        }}
    />;
};