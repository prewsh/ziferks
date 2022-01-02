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
    ${'' /* margin: 0px auto; */}
    padding: 50px;
    text-align: center;
    background: rgba(28, 62, 136, 0.8);

`

const Heading = styled.h3 `
    color: #ffffff;
    text-decoration: underline;
    padding-bottom: 10px;
`

const Team = styled.div`
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

    @media (max-width: 768px) {
        margin: 0px auto;
    }
`

const Images = styled.img`
    margin-bottom: 20px;
    border: 5px solid white;
    border-radius: 50%;
`

const team = () => {
    return (
        <Container>
                <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
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
