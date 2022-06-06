import React from 'react';
import { styled } from '@mui/material';
import AuthButton from '../core/AuthButton';
import logo from '../../assets/images/logo.png';

const Card = styled('div')(({ theme }) => ({
    height: '81px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const Logo = styled('img')(({ theme }) => ({
    height: '75px',
    width: 'auto',
    marginLeft: '21px'
}));

const LinkSection = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '742px',
    width: '100%',
    marginRight: '21px'
}));

const Link = styled('a')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '24px',
    lineHeight: '28px',
    textDecoration: 'none',
    color: '#000000',
    '&:hover': {
        opacity: 0.5
    }
}));

export default function Header() {
    return <Card>
        <Logo src={logo} alt='logo' />
        <LinkSection>
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About Us</Link>
            <Link href='/contact-us'>Contact Us</Link>
            <AuthButton href='/sign-in' signIn />
            <AuthButton href='/sign-up' />
        </LinkSection>
    </Card>;
};