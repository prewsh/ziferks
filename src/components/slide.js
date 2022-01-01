import React from 'react'
import styled from 'styled-components';


    const Button = styled.button `
    font: poppins;
    width: 143px;
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
    font-size: 2.5rem;
    width: 100%;
    margin-top: 450px;
    padding: 1px;

    @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin-top: 250px;
    padding: 1px;
}
`

const MainText = styled.h4`

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
                <Button>Explore</Button>
            </Text>
        </Container>



    )
}

export default Slide
