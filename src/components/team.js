import React from 'react'
import styled from 'styled-components';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



import mem1 from "../images/mem1.png";
import mem2 from "../images/mem2.png";
import mem3 from "../images/mem3.png";
import mem4 from "../images/mem4.png";
import mem5 from "../images/mem5.png";

const Container = styled.div `
    width: 100%;
    margin: 0px auto;
    padding: 5px 80px;
    text-align: center;
    background: rgba(28, 62, 136, 0.8);

    @media(max-width: 768px){
        padding: unset;
    }

`

const Heading = styled.h3 `
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 60px;
    /* identical to box height */


    color: #FFFFFF;
    ${'' /* text-decoration: underline; */}
    padding-bottom: 10px;

    @media(max-width: 768px){
        font-size: 20px;
        line-height: 21px;
    }
`

const Team = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 0px auto;
`

const Member = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin: 0px auto;
    }
`

const Member2 = styled.div`

@media (max-width: 768px) {
        margin: 0px auto;
    }

`

const Member3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 768px) {
        margin: 0px auto;
    }
`

const Images = styled.img`
    margin-bottom: 126px;
    border: 5px solid white;
    border-radius: 50%;
    width: 226px;
    height: 226px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px){
        width: 170px;
        height: 170px;
        margin-bottom: 30px;
    }
`

const team = () => {
    return (
        <Container>
                <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
            <Heading>Meet the Team</Heading>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <Team>
                <Member>
                    <Images src={mem1} />
                    <Images src={mem2} />
                </Member>
                <Member2>
                    <Images src={mem3} />
                </Member2>
                <Member3>
                    <Images src={mem4} />
                    <Images src={mem5} />
                </Member3>
            </Team>
            </ScrollAnimation>
        </Container>
    )
}

export default team
