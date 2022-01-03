import React from 'react'
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 50px 158px;
    text-align: center;
    background: #C4C4C4;

    form{
        width: 1157px;
        height: 60px;
        margin: 0px auto;
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
`

const FormDiv = styled.div`
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-item: center;

        label{
            text-align: left;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 45px;
            /* identical to box height */


            color: rgba(0, 0, 0, 0.53);
        }

        input{
            width: 1160px;
            height: 60px;
            margin-bottom: 32px;
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border: none;
            font-size: 30px;
        }

        textarea{
            width: 1160px;
            height: 252px;
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border: none;
            font-size: 30px;
        }

        textarea::placeholder{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 45px;
            /* identical to box height */


            color: rgba(0, 0, 0, 0.54);
        }

        button{
            width: 366px;
            height: 62px;
            background: #38B6FF;
            margin: 0px auto;
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 45px;
            color: #FFFFFF;
            outline: none;
            border: none;
            margin-top: 45px;
        }
`

const sendrequest = () => {
    return (
        <Container>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> <Heading>Send A Request</Heading> </ScrollAnimation>


    <form className="form">

    <FormDiv className="name">

       <label for="Name">Name</label>
       <input
            type="text"
            name="Name"
            className="Name"
            tabIndex="1"
       />
       <label for="Email">Email</label>
       <input
            type="email"
            name="email"
            className="email"
            tabIndex="2"
       />
        <label for="phone">Phone No</label>
       <input
            type="number"
            name="phoneNo"
            className="phoneNo"
            tabIndex="3"
       />
        <label for="product">Our Product</label>
       <input
            type="text"
            name="product"
            className="product"
            tabIndex="4"
       />
       <label for="message">Message</label>

        <textarea
        placeholder="Enter your message..."
        className="message"
        name="message"
        />

        <button type="submit" className="send">Send Message</button>
    </FormDiv>
 </form>
        </Container>
    )
}

export default sendrequest
