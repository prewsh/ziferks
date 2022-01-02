import React from 'react'
import styled from 'styled-components';

import arrow from "../images/arrow.png"


    const Button = styled.button `
    width: 163px;
    height: 64px;
    color: white;
    background-color: #38B6FF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 130px;


        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #FFFFFF;
    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;


    }
    img{
        width: 5px;
        height: 20px;
        padding-left: 5px;
    }

    @media (max-width: 768px) {

  }
`
const Container = styled.div `
    width: 100%;
    text-align: center;


    position: relative;
    text-align: center; 
    padding-top: 25px;
    color: White; 
    height: 100%; 
    width: 100%;
`

const Image = styled.img`
        position: absolute;
        top: 0; 
        right: 0; 
        bottom: 0; 
        left: 0;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;

        @media (max-width: 768px) {
        
}
`

const Text = styled.div`
    height: 100%; 
    width: 100%;
    margin-top: 516px;
    padding: 1px;



    @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin-top: 250px;
    padding: 1px;
}
`

const MainText = styled.h3`
    width: 724px;
    height: 89px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px !important;
    line-height: 60px;
    margin: 0px auto;
    text-align: left;
    margin-bottom: 50px;

    color: #FFFFFF;
`


const Slide = (props) => {
    const {img,  content} = props
    console.log(img)
    return (
       
        <Container>
            <Image src={img} alt="First slide" />

            <Text>
                <MainText>
                    {content}
                </MainText>
                <Button><a href='#about'>Explore <img src={arrow} alt="company logo"/> </a></Button>
            </Text>
        </Container>



    )
}

export default Slide
