import React from 'react'
import styled from 'styled-components';

import fb from "../images/fb.png";
import insta from "../images/insta.png";

const Container = styled.div `
    width: 100%;
    margin: 0px auto;
    text-align: center;
    background: rgba(31, 31, 31, 0.71);



`
const Details = styled.div`
    padding: 15px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    
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
    font-size: 24px;
    line-height: 36px;
    color: rgba(255, 255, 255, 0.72);

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 30px;
    }
`

const Phone = styled.div`
padding: 5px;
margin-bottom: 30px;

@media (max-width: 768px) {
    }

`

const Email = styled.div`
    padding: 5px;
    margin-bottom: 30px;
`

const Address = styled.div`
    padding: 5px;
    margin-bottom: 30px;
`

const Details2 = styled.div`
    display: flex;
    justify-content: right;
    align-items: flex-start;
    flex-direction: column;
`

const Details3 = styled.div`

`

const Foot = styled.div`
    background: rgba(196, 196, 196, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 153px;


    font-family: Poppins;
    font-style: normal;
    ${'' /* font-weight: 600; */}
    font-size: 1.2rem;
    line-height: 36px;
    /* identical to box height */


    color: rgba(255, 255, 255, 0.34);

    ${'' /* padding: 0px 15%; */}

@media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        font-size: 0.75rem;
        line-height: 30px;
        padding: 3px 50px;
    }
`

const Copyright = styled.div`

`

const Terms = styled.div`

`

const Nothing = styled.div`

`


// contact styling

const Heading = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;


    color: #38B6FF;
    ${'' /* text-decoration: underline; */}
    font-weight: Bold;

    @media(max-width: 768px){
        font-size: 20px;
    }
`

const ContactUs = styled.div`
    background: #FFFFFF;
    ${'' /* clip-path: circle(64.0% at 50% 32%); */}
    width: 100%;
    padding: 50px 153px;
    

    @media(max-width: 768px){
        padding: 15px 50px;

    }

`

const ContactDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10px;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;  
    }


    .send{
    width: 110px;
    height: 29px;
    background: #38B6FF;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
}
`

const ContactLeft = styled.div`
    width: 40%;
    text-align: left;

    @media(max-width: 768px){
        width: 100%;
    }
    
`

const ContactRight = styled.div`
    width: 60%;
    margin-bottom: 10px;

    @media(max-width: 768px){
        width: 100%;
    }
`

const FormDiv =styled.div`
margin: 0px auto;
    width: 100%;
    ${'' /* height: 49px; */}
    display: flex;
    flex-direction: column;
    text-align: left;

input{
    ${'' /* width: 596px; */}
    height: 63px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.26);
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: 26px;
    }

    }

label{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */


    color: rgba(0, 0, 0, 0.4);
}

textarea{
    height: 151px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.26);
    box-sizing: border-box;

    @media (max-width: 768px) {
        ${'' /* width: 169px; */}
        height: 49px;
    }
}

.tel-email{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tel-email > div > input{
    width: 100%;
}

.tel-email> div{
    display: flex;
    flex-direction: column;
    width: 100%;
}

button{
    margin: 12px auto;
}

.phoneNo{
    margin-left: 10px;
}



`

const footer = () => {
    return (
        <Container>
            
            <ContactUs id="contact">
            <Heading>Contact Us</Heading>
            <ContactDetails>
                <ContactLeft>
                    <Address>
                        <h3>Address</h3>
                        <p>Suite B13  Saham Plaza,wuse II <br/> Abuja’</p>
                    </Address>
                    <Phone>
                        <h3>Call Us</h3>
                        <p>+2349122807307</p>
                    </Phone>
                    <Email>
                        <h3>Email</h3>
                        <p>Ziferksolutions@gmail.com</p>
                    </Email>
                </ContactLeft>
                <ContactRight>
                {/* <form className="form"> */}

                        <FormDiv className="name">

                        <label for="Name">Name</label>
                        <input
                                type="text"
                                name="Name"
                                className="Name"
                                tabIndex="1"
                        />

                        <div className='tel-email'>
                            <div className='tel-email-inner'>
                            <label for="Email">Email</label>
                            <input
                                    type="email"
                                    name="email"
                                    className="email"
                                    tabIndex="2"
                            />
                            </div>

                            <div className='tel-email-inner'>
                            <label for="phone">Tel</label>
                            <input
                                    type="number"
                                    name="phoneNo"
                                    className="phoneNo"
                                    tabIndex="3"
                            />
                            </div>
                        </div>

                        <label for="message">Message</label>

                            <textarea
                            placeholder="Enter your message..."
                            className="message"
                            name="message"
                            />

<button type="submit" className="send">Submit</button>
                        </FormDiv>
                    {/* </form> */}
                </ContactRight>
                
                </ContactDetails>
            </ContactUs>


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
                    <div>
                        <img style={{width:'50px ', height: '50px '}} src={insta} alt=" "/>
                        <img style={{width:' 100px', height: '50px'}} src={fb} alt=" "/>
                    </div>
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
