import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    width: 100%;
    padding: 40px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 15px;
}
`

const Heading = styled.h3`
    color: #38B6FF;
    text-decoration: underline;
    font-weight: Bold;
`

const AboutText = styled.div`
    padding: 30px;

    @media (max-width: 768px) {
       padding: unset;
}
`;

const AboutTitle = styled.h3`

`;

const AboutBody = styled.p`
    Font-family: Poppins;
    font-style: normal;
    Font-size: 1.35rem;
    Line-height: 40px;
    text-align: Left;
    Vertical-align: Top;

`;



export const about = () => {
    return (
        <Container id='about'>
            <Heading>About</Heading>
            <AboutText>
                <AboutTitle>Who Are We?</AboutTitle>
                <AboutBody>Ziferk Solutions is a top information technology and software
                development company in Nigeria that provides information
                communication technology (ICT) solutions, products, and
                services using ultra-modern technologies. <br/>
                <br/> 
                We are committed to continuous advancement in
                our intellect and expertise and thus accomplishing
                our success through the pursuit of elevated
                performance and quality. We believe that our job
                is to listen, research and understand the
                requirements unique to each individual business.</AboutBody>
            </AboutText>
        </Container>
    )
}

export default about
