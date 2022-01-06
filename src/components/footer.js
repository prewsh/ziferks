import React from 'react'
import styled from 'styled-components';
// import FormDiv from "./sendrequest";

const Container = styled.div `
    width: 100%;
    margin: 0px auto;
    text-align: center;
    background: rgba(31, 31, 31, 0.71);

`
const Details = styled.div`
    padding: 50px 153px;
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
`

const ContactUs = styled.div`
    background: #FFFFFF;
    ${'' /* clip-path: circle(64.0% at 50% 32%); */}
    width: 100%;
    padding: 50px 153px;

`

const ContactDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10px;


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
    width: 50%;
    text-align: left;
`

const ContactRight = styled.div`
    width: 50%;
`

const FormDiv =styled.div`
margin: 0px auto;
    width: 180px;
    ${'' /* height: 49px; */}
    display: flex;
    flex-direction: column;
    text-align: left;

input{
    ${'' /* width: 169px; */}
    ${'' /* height: 26px; */}

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.26);
    box-sizing: border-box;
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
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.26);
    box-sizing: border-box;
}

.tel-email{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tel-email > div > input{
    width: 88px;
}

.tel-email> div{
    margin: ;
}



`

const footer = () => {
    return (
        <Container>
            
            <ContactUs>
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
                <form className="form">

                        <FormDiv className="name">

                        <label for="Name">Name</label>
                        <input
                                type="text"
                                name="Name"
                                className="Name"
                                tabIndex="1"
                        />

                        <div className='tel-email'>
                            <div>
                            <label for="Email">Email</label>
                            <input
                                    type="email"
                                    name="email"
                                    className="email"
                                    tabIndex="2"
                            />
                            </div>

                            <div>
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

                            
                        </FormDiv>
                    </form>
                </ContactRight>
                <button type="submit" className="send">Send Message</button>
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
