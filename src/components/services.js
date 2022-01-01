import React from 'react';
import styled from 'styled-components';
import SerImage from '../images/services.png';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div `
    width: 100%;
    padding: 30px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 2px;
}

`

const Heading = styled.h3 `
    color: #38B6FF;
    text-decoration: underline;
`

const Carousel = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 50%;
    margin: 10px auto;
    padding-left: 3px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.34);

    @media (max-width: 768px) {
    width: 100%;

}
`

const Left = styled.div `
    width: 50%;
    text-align: left;
    padding-top: 100px;

    @media (max-width: 768px) {
        padding-top: unset;
}

`

const Right = styled.div `
    width: 50%;
`

const Title = styled.h3 `
    font-weight: bold;
    font-size: 20px;
`

const Text = styled.p `

`

const Button = styled.button `
    width: 106px;
    height: 40px;
    color: white;
    background: #38B6FF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
`

const Images = styled.img `
    width: 100%
`


const services = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'
        animateOut='fadeOut'>
                    <Container id="services">

                    <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight'> <Heading>Services</Heading> </ScrollAnimation>

        <Carousel>
                <Left>
                    <Title>Web and Mobile app development</Title>
                    <Text>We build custom web and mobile app tailored to suite your business needs.</Text>
                    <Button> Explore </Button>
                </Left>
                
                <Right>
                    <Images src={SerImage} />
                </Right>
        </Carousel>

        </Container>
</ScrollAnimation>
       
    )
}

export default services
