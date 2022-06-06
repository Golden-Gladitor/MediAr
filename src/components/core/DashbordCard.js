import React from 'react';
import { styled } from '@mui/material';

const Card = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '21px',
    boxShadow: '4px 4px 10px #E5E5E5',
    maxWidth: '313px',
    height: '300px',
    boxSizing: 'border-box',
    padding: '12px 12px'
}));

const Heading = styled('div')(({ theme }) => ({
    fontFamily: 'Lato',
    lineHeight: '30px',
    fontWeight: 'bold',
    fontSize: '25px'
}));

const Content = styled('div')(({ theme }) => ({
    fontFamily: 'Barlow',
    lineHeight: '22px',
    fontSize: '18px'
}));

export default function DashbordCard({
    heading = 'heading',
    image,
    content = 'content',
    alt
}) {
    return (
        <Card>
            <Heading>
                {heading}
            </Heading>
            <img src={image} alt={alt} />
            <Content>
                {content}
            </Content>
        </Card>
    )
};
