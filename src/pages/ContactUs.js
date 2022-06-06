import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { styled, Box, Button, InputAdornment } from '@mui/material';
import topImage from '../assets/images/home/top-cover.png';


export default function ContactUs() {

    const FirstSection = styled('div')(({ theme }) => ({
   
        width: '100%',
        display: 'flex',
        backgroundImage: `url(${topImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        alignItems: 'center',
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        lineHeight: '75px',
        fontSize: '30px',
        fontWeight: '700',
        textAlign: 'center',
        height: '780px'
        
    
    }));
    return (
        <PageLayout>
           
           <FirstSection>
           MEDI Ar, is the Sri lankan leading web site which offering E-channeling service to customers from the convenience of their mobile phone and web site. 
The leading private hospitals groups in Sri Lanka are joined with us.

We provide e-commerce infrastructure for Sri Lanka’s healthcare sector.
Medi Ar, launched in 2022, has connected more than 2000+ doctors in over 100+ hospitals  within 1 year, throught its digital health platform whic is accessible to users via www.Medi-Ar.lk.  MEDI Ar currently offers docter chanelling service island wide for physical consultations while connecting qualified doctors, with the aim of the delivery the best and easy helathcare platform through the home based solution
Sri Lanka leading medical booking web site intergrated to all banks for multiple payment options like credit card and debit card.
The service is available for all 22 million plus Srl Lankans..
           </FirstSection>



        </PageLayout>
    )
}
