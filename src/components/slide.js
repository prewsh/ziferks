import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const imageCss = {
    'position': 'absolute' , 
    "top": '0', 
    "right": '0', 
    "bottom": '0', 
    "left": '0',
    'z-index': "-1",
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'height': '100%'
}

    const Button = styled.div `
    width: 163px;
    height: 64px;
    color: white;
    background-color: #38B6FF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    padding: 20px;

    @media (max-width: 768px) {

  }
`





const Slide = (props) => {
    const {img, title, content} = props
    console.log(img)
    return (
        <div style={{position: 'relative' , textAlign: 'center', paddingTop: '25px', color: 'White', height: '100%', width: '100%', }}  className="item"> 
            <img style={imageCss}  className="d-block w-100 img-fluid slid-image" src={img} alt="First slide"/>

            <div style={{ height: '89px', fontSize: '2.5rem', width: '724px', marginTop: '450px'}} className="slide-text caption d-md-block">
                <p style={{ }} className="content">{content}</p>
                         
            </div>
            <Button>Explore</Button> 
        </div>

    )
}

export default Slide
