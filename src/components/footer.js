import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    text-align: center;
    background: rgba(31, 31, 31, 0.71);

`
const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    color: rgba(255, 255, 255, 0.72);

    font-family: Poppins;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 36px;
    color: rgba(255, 255, 255, 0.72);

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 30px;
    }
`

const Details1 = styled.div`
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    ${'' /* font-weight: 600; */}
    font-size: 1.5rem;
    line-height: 36px;
    color: rgba(255, 255, 255, 0.72);

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 30px;
    }
`

const Phone = styled.div`
padding: 5px;

`

const Email = styled.div`
    padding: 5px;
`

const Address = styled.div`
    padding: 5px;
`

const Details2 = styled.div`

`

const Details3 = styled.div`

`

const Foot = styled.div`
    background: rgba(196, 196, 196, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 20px;

    font-family: Poppins;
    font-style: normal;
    ${'' /* font-weight: 600; */}
    font-size: 1.2rem;
    line-height: 36px;
    /* identical to box height */


color: rgba(255, 255, 255, 0.34);

@media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        font-size: 0.75rem;
        line-height: 30px;
    }
`

const Copyright = styled.div`

`

const Terms = styled.div`

`

const Nothing = styled.div`

`

const footer = () => {
    return (
        <Container>
            <Details>
                <Details1>
                    <Phone>Phone No: <br/>
                    +2349122807307 </Phone>
                    <Email>Email: <br/>
                    Ziferksolutions@gmail.com</Email>
                    <Address>Address: <br/>
                    Suite B13  Saham Plaza,wuse II
Abuja’</Address>
                </Details1>
                <Details2>
                    Follow us on...
                </Details2>
                <Details3>
                    Send Us a request
                </Details3>
            </Details>
            <Foot>
                <Copyright>Copyright@2021</Copyright>
                <Terms>Terms & Conditions</Terms>
                <Nothing></Nothing>
            </Foot>
        </Container>
    )
}

export default footer
