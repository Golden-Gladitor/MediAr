import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { styled } from '@mui/material';
import ChannelNowButton from '../components/common/ChannelNowButton';
import DashboardCard from '../components/core/DashbordCard';
import topImage from '../assets/images/home/top-cover.png';

// second section image import 
import claimRefund from '../assets/images/home/cards/claim-refund.png';
import convenient from '../assets/images/home/cards/convinent.png';
import divisionSecretariat from '../assets/images/home/cards/ds.png';
import effective from '../assets/images/home/cards/effective.png';
import find from '../assets/images/home/cards/find.png';
import professional from '../assets/images/home/cards/professional.png';

// third section image import
import thirdImage from '../assets/images/home/third-img.png';

const FirstSection = styled('div')(({ theme }) => ({
    minHeight: '714px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${topImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    alignItems: 'center'
}));

const FirstHeading = styled('div')(({ theme }) => ({
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    maxWidth: '779px',
    lineHeight: '70px',
    fontSize: '60px',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '230px'
}));

const FirstContent = styled('div')(({ theme }) => ({
    maxWidth: '1084px',
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '26px',
    lineHeight: '39px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '30px',
    marginBottom: '96px'
}));

const SecondSection = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '723px',
    backgroundColor: '#BDBBBB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const SecondBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    maxWidth: '1003px',
    minHeight: '632px'
}));

const secondData = [
    {
        title: 'Claim refund.',
        image: claimRefund,
        content: `Could not use the service of the expert you channeled?  
        Do not worry, your money will be refunded to you`,
    },
    {
        title: 'It`s  convenient.',
        image: convenient,
        content: 'Do it on your own time and communicate with  your therapist whenever you want at your own pace.',
    },
    {
        title: 'Find doctors near you',
        image: find,
        content: 'Do it on your own time and communicate with  your therapist whenever you want at your own pace.',
    },
    {
        title: 'Professional.',
        image: professional,
        content: 'All of our therapists are licensed and certified. You can contact with them in a secure and private online setting with superior help. Everything you share is confidential.',
    },
    {
        title: 'Divisional Secretariat.',
        image: divisionSecretariat,
        content: 'Do not waste your time in queue.  Book your appointment for the Colombo or any  Divisional Secretariat with one click',
    },
    {
        title: 'It`s effective',
        image: effective,
        content: 'You can change therapists at any time if you are not getting enough benefit. Unlimited treatment is available for a low fee.',
    }
];

const ThirdSection = styled('div')(({ theme }) => ({
    minHeight: '671px',
    backgroundColor: '#2E84B5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 60px'
}));

const ThirdHeading = styled('div')(({ theme }) => ({
    color: '#FFFFFF',
    fontFamily: 'Lato',
    maxWidth: '921px',
    lineHeight: '54px',
    fontSize: '45px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '32px'
}));

const ThirdBox = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '22px'
}));

const ThirdImage = styled('img')(({ theme }) => ({
    width: '624px',
    height: '501px',
    borderRadius: '20px'
}));

const ThirdContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '60px'
}));

const ThirdParagraph = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '32px',
    lineHeight: '37px',
    letterSpacing: '0.05em',
    width: '100%',
    color: '#FFFFFF'
}));

export default function Home() {
    return (
        <PageLayout>
            <FirstSection>
                <FirstHeading>
                    Doctor glance at his watch for meet you
                </FirstHeading>
                <FirstContent>
                    This system helps in the reduction of patient wait times.
                    You have  the option of scheduling an appointment at a time that is convenient for you.
                </FirstContent>
                <ChannelNowButton />
            </FirstSection>

            <SecondSection>
                <SecondBox>
                    {secondData.map(itm => <DashboardCard
                        key={itm.title}
                        heading={itm.title}
                        alt={itm.title}
                        image={itm.image}
                        content={itm.content}
                    />)}
                </SecondBox>
            </SecondSection>

            <ThirdSection>
                <ThirdHeading>
                    Booking the doctor  has never been easy
                    </ThirdHeading>
                <ThirdBox>
                    <ThirdImage src={thirdImage} alt='Booking the doctor  has never been easy' />
                    <ThirdContent>
                        <ThirdParagraph>
                            1. Select the docotor of your choice.
                        </ThirdParagraph>
                        <ThirdParagraph>
                            2. Select your preferred date and time.
                        </ThirdParagraph>
                        <ThirdParagraph>
                            3. Select your preferred hospital.
                        </ThirdParagraph>
                        <ThirdParagraph>
                            4. You can pay for booking through online payment methods
                        </ThirdParagraph>
                        <ChannelNowButton style={{ marginTop: '40px' }} />
                    </ThirdContent>
                </ThirdBox>

            </ThirdSection>
        </PageLayout>
    )
};
