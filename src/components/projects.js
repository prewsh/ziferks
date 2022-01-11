import React from 'react'
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


import project1 from "../images/proj1.png"
import project2 from "../images/proj2.png"
import project3 from "../images/proj3.png"


const Container = styled.div `
    width: 100%;
    margin: 0px auto;
    padding: 50px 153px;
    text-align: center;
    background: rgba(28, 62, 136, 0.8);

    @media (max-width: 768px) {
        padding: 30px;
}

`

const Heading = styled.h3 `
    font-family: Poppins;
    font-style: normal;
    ${'' /* font-weight: 600; */}
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */


    color: #FFFFFF;
    ${'' /* text-decoration: underline; */}

    @media(max-width: 768px){
        font-size: 14px;
        line-height: 21px;
    }
`

const Images = styled.img`
    width: 100%;
    height: 100%;
`
const Text = styled.p`
    margin: 0px auto;
    width: 530px;
    height: 115px;

    color: white;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    @media(max-width: 768px){
        width: 100%;
        height: 100%;
        font-size: 12px;
        line-height: 18px;
    }
`

const TextA = styled.a`
    color: white;
    padding: 3px;
`


export const projects = () => {
    return (
        <Container id='portfolio'>
           <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> <Heading>Our Projects</Heading> </ScrollAnimation>

           <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay>
            <div className='item'>
                <Images src={project1} /> 
                <Text>Waste Management System Application
                        A TETFUND PROJECT
                      <TextA>https://wmhas.org.ng/</TextA>  </Text>
            </div>
            <div className='item'>
                <Images src={project2} /> 
                <Text>School Management system
NNUOLA INTERNATIONAL SCHOOL

                      <TextA>https://nnoula.sch.ng/portal/</TextA>  </Text>
            </div>
            <div className='item'>
                <Images src={project3} /> 
                <Text>IHECHUKWU MADUBUIKE
INSTITUTE OF TECHNOLOGY
                      <TextA>https://imit.edu.ng</TextA>  </Text>
            </div>
            </OwlCarousel>
            </ScrollAnimation>
        </Container>
    )
}

export default projects
