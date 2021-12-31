import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  margin-top: 10px;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: -10px;
  left: 0px;
  z-index: 100;
  background-color: white;


  .logo {
    padding: 10px 0;
    ${'' /* font-family: Montserrat; */}
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 150%;
    /* identical to box height, or 37px */


    color: #024E95;
  }
`



const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      Ziferks
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar