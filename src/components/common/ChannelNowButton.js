import React from 'react';
import { styled } from '@mui/material';
import { Link } from '@mui/material';

const Button = styled('div')(({ theme }) => ({
    width: '275px',
    minHeight: '76px',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Barlow',
    fontWeight: 'bold',
    lineHeight: '36px',
    color: '#000000',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '4px 4px 10px rgba(0,0,0,0.25)',
    borderRadius: '12px',
    margin: '0 auto',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#FFFFFF90',
    }
}));

export default function ChannelNowButton() {
    return <Button >Channel Now</Button>;
}
