import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Container = styled.div`
    width: 100%;
    padding: 50px 153px;
    text-align: center;
    margin: 0px auto;

    @media (max-width: 768px) {
        padding: 15px 50px;
}
`

const Heading = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;


    color: #38B6FF;
    ${'' /* text-decoration: underline; */}
    font-weight: Bold;

    @media(max-width: 768px){
        Font-size: 14px !important;
    }
`

const AboutText = styled.div`
    ${'' /* padding: 30px; */}

    @media (max-width: 768px) {
       padding: unset;
}
`;

const AboutTitle = styled.h3`
    text-align: left;
    Font-family: Poppins;
    font-style: normal;
    Font-size: 35px;
    Line-height: 60px;

    @media(max-width: 768px){
        Font-size: 14px !important;
    }
`;

const AboutBody = styled.p`
    Font-family: Poppins;
    font-style: normal;
    Font-size: 1.85rem;
    Line-height: 60px;
    text-align: Left;
    Vertical-align: Top;

    font-weight: normal;
    ${'' /* font-size: 40px; */}

    color: #000000;

    @media(max-width: 768px){
        Font-size: 14px;
        Line-height: 40px;
    }

`;



export const about = () => {
    return (
        <Container id='about'>
        <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'> <Heading>About</Heading> </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <AboutText>
                <AboutTitle>Who Are We?</AboutTitle>
                <AboutBody>Ziferk Solutions is a top information technology and software
                development company in Nigeria that provides information
                communication technology (ICT) solutions, products, and
                services using ultra-modern technologies. <br/>
                
                We are committed to continuous advancement in
                our intellect and expertise and thus accomplishing
                our success through the pursuit of elevated
                performance and quality. We believe that our job
                is to listen, research and understand the
                requirements unique to each individual business.</AboutBody>
            </AboutText>
            </ScrollAnimation>
        </Container>
    )
}

export default about
