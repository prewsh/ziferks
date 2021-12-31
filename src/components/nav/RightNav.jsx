import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin: 5px 20px;
    ${'' /* font-family: "Montserrat"; */}
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 150%;
    color:  #1C3E88;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:  #1C3E88;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Send a Request</li>
      <li>Contact Us</li>
    </Ul>
  )
}

export default RightNav