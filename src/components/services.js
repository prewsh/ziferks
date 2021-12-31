import React from 'react';
import styled from 'styled-components';
import SerImage from '../images/services.png';

const Container = styled.div `
    width: 100%;
    padding: 30px;
    text-align: center;



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
`

const Left = styled.div `
    width: 50%;
    text-align: left;
    padding-top: 100px;

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

const Button = styled.div `
    width: 106px;
    height: 40px;
    color: white;
    background: #38B6FF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Images = styled.img `
    width: 100%
`


const services = () => {
    return (
        <Container>

        <Heading>Services</Heading>

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
    )
}

export default services
