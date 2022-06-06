import React from 'react';
import { styled } from '@mui/material';

const Button = styled('a')(({ theme, authtype }) => ({
    padding: '12px 35px',
    color: authtype === 'signUp' ? '#FFFFFF' : '#000000',
    backgroundColor: authtype === 'signIn' ? '#FFFFFF' : '#000000',
    borderRadius: '30px',
    border: authtype === 'signIn' ? '2px solid #2E84B5' : '2px solid #000000',
    fontFamily: 'Roboto',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '23px',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.7
    }
}));

export default function AuthButton({ signIn, href = '/' }) {
    return (
        <Button
            href={href}
            authtype={signIn ? 'signIn' : 'signUp'}
        >
            {signIn ? 'Login' : 'Sign up'}
        </Button>
    )
};
