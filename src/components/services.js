import React from 'react';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// image imports 

import arrow from "../images/arrow.png";
import SerImage from '../images/services1.png';
import SerImage2 from "../images/services2.png";
import SerImage3 from "../images/services3.png";
import SerImage4 from "../images/services4.png";

const Container = styled.div `
    width: 100%;
    margin: 0px auto;
    padding: 50px 153px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 15px 50px;
}

`

const Heading = styled.h3 `
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */


    color: #38B6FF;
    text-decoration: underline;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const Carousel = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 1160px;
    height: 645px;
    margin: 10px auto;
    padding-left: 3px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.34);

    @media (max-width: 768px) {
    width: 100%;
    ${'' /* display: flex;
    flex-wrap: wrap; */}

    ${'' /* width: 449px; */}
    height: 214px;

}
`

const Left = styled.div `
    width: 50%;
    text-align: left;
    padding: 65px 30px;
    margin-top: 230px;

    @media (max-width: 768px) {
        padding: 10px 6px;
         margin-top: 10px;
}

`

const Right = styled.div `
    width: 50%;
`

const Title = styled.h3 `
    ${'' /* font-weight: bold; */}
    ${'' /* font-size: 20px; */}
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;

    color: #000000;

    @media(max-width: 768px){

    width: 100%;
    height: 46px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;

    color: #000000;
    }
`

const Text = styled.p `
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;

    color: #000000;

    @media(max-width: 768px){
        width: 100%;
        ${'' /* height: 58px; */}

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 10px;

        color: #000000;
    }
`

const Button = styled.button `
    width: 156px;
    height: 50px;
    color: white;
    background: #38B6FF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    margin: 0px auto;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    @media(max-width: 768px){
        width: 70px;
        height: 20px;
        font-size: 10px;
    }

    img{
        width: 38px !important;
        height: 20px;
        padding-left: 14px;

        @media(max-width: 768px){
            width: 7px;
            height: 7px;
        }
    }
`

const Images = styled.img `
    width: 100%;
    height: 100%;
`


const services = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'
        animateOut='fadeOut'>

        
                    <Container id="services">

                    <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'> <Heading>Services</Heading> </ScrollAnimation>

<OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay>
        <Carousel>
                <Left>
                    <Title>Web and Mobile app development</Title>
                    <Text>We build custom web and mobile app tailored to suite your business needs.</Text>
                    <Button> Explore <img src={arrow} alt="company logo"/> </Button>
                </Left>
                
                <Right>
                    <Images src={SerImage} />
                </Right>
        </Carousel>
        <Carousel>
                <Left>
                    <Title>Software development</Title>
                    <Text>Ziferk Solution is an experienced software development firm providding offshore software development services...</Text>
                    <Button> Explore <img src={arrow} alt="company logo"/> </Button>
                </Left>
                
                <Right>
                    <Images src={SerImage2} />
                </Right>
        </Carousel>
        <Carousel>
                <Left>
                    <Title>Hardware and Network security</Title>
                    <Text>Trust in Ziferk solution to provide the optimum level of protection for your business.</Text>
                    <Button> Explore <img src={arrow} alt="company logo"/> </Button>
                </Left>
                
                <Right>
                    <Images src={SerImage3} />
                </Right>
        </Carousel>
        <Carousel>
                <Left>
                    <Title>IT Consultancy</Title>
                    <Text>We offer consultancy services that span the entire IT lifecycle, from business process re-engineering to software design....</Text>
                    <Button> Explore <img src={arrow} alt="company logo"/> </Button>
                </Left>
                
                <Right>
                    <Images src={SerImage4} />
                </Right>
        </Carousel>
</OwlCarousel>


        </Container>
</ScrollAnimation>
       
    )
}

export default services
