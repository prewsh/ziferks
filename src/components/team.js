import React from 'react'
import styled from 'styled-components';
import mem1 from "../images/mem1.png"

const Container = styled.div `
    width: 100%;
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
            <Heading>Meet the Team</Heading>
            <Team>
                <Member>
                    <Images src={mem1} />
                    <Images src={mem1} />
                </Member>
                <Member2>
                    <Images src={mem1} />
                </Member2>
                <Member3>
                    <Images src={mem1} />
                    <Images src={mem1} />
                </Member3>
            </Team>
        </Container>
    )
}

export default team
