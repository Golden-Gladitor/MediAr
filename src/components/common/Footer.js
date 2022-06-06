import React from 'react';
import { styled } from '@mui/material';
import faceBookImg from '../../assets/images/footer/facebook.png';
import linkedInImg from '../../assets/images/footer/linked.png';
import twitterImg from '../../assets/images/footer/twitter.png';

const Content = styled('div')(({ theme }) => ({
    background: 'linear-gradient(270deg,rgba(46,132,181,0.5)0%,rgba(253,216,51,0.5)100%), #000000',
    minHeight: '337px',
    width: '100%',
    paddingTop: '94px',
    boxSizing: 'border-box',
}));

const ContactSection = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}));

const OthersSection = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}));

const ConnectWithUsSection = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}));

const Heading = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '32px',
    lineHeight: '37px',
    color: '#0A0A0A',
    marginBottom: '30px',
    fontWeight: 'bold'
}));

const Text = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '22px',
    lineHeight: '25.78px',
    color: '#FFFFFF'
}));

const Image = styled('img')(({ theme }) => ({
    marginLeft: '24px'
}));

const ImageSection = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

const FirstRow = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    boxSizing: 'border-box',
    justifyContent: 'space-around'
}));

const CopyRight = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: '22px',
    lineHeight: '26px',
    letterSpacing: '0.1em',
    textAlign: 'center',
    color: '#E4E4E4',
    opacity: 0.8,
    marginTop: '15px'
}));

export default function Footer() {
    return (
        <Content>
            <FirstRow>
                <ContactSection>
                    <Heading>
                        Contact Us
                </Heading>
                    <Text>
                        245,Katubedda,<br />
                        Moratuwa,Sri Lanka.<br />
                        medi26@gmail.com<br />
                        +94713409789
                </Text>
                </ContactSection>
                <OthersSection>
                    <Heading>
                        Others
                </Heading>
                    <Text>
                        Teams & Conditions<br />
                        Privacy & Policy<br />
                        About Us
                </Text>
                </OthersSection>
                <ConnectWithUsSection>
                    <Heading style={{ color: '#FFFFFF', fontWeight: 'normal' }}>
                        Connect with us
                </Heading>
                    <ImageSection>
                        <Image src={faceBookImg} alt='facebook' />
                        <Image src={linkedInImg} alt='linkedIn' />
                        <Image src={twitterImg} alt='twitter' />
                    </ImageSection>
                </ConnectWithUsSection>
            </FirstRow>
            <CopyRight>
                Copyright by @ Golden Gladiators
            </CopyRight>
        </Content>
    )
};
