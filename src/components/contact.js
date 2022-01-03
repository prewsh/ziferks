import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 50px 158px;
    text-align: center;
    background: #FFFFFF;
    ${'' /* background: rgba(31,31,31,0.71); */}
    ${'' /* clip-path: circle(64.0% at 50% 32%); */}

    form{
        width: 1157px;
        height: 60px;
        margin: 0px auto;
    }

`

const Heading = styled.h3 `
    font-family: Poppins;
    font-style: normal;
    ${'' /* font-weight: 600; */}
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */


    color: #38B6FF;
    ${'' /* text-decoration: underline; */}
`


const contact = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> <Heading>Contact Us</Heading> </ScrollAnimation>


        </Container>
    )
}

export default contact
