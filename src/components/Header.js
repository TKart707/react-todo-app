import React from 'react';
import styled from 'styled-components';
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Header({theme, themeToggler}) {
  return (
    <Container>
        <Logo>TODO</Logo>
        <Img 
            onClick={themeToggler}
            src={theme ? sun : moon} 
            alt={theme ? "icon of sun" : "icon of moon"} 
        />
    </Container>
  )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`
const Logo = styled.h1`   
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    letter-spacing: 5px;

    color: #fff;

    @media only screen and (min-width: 1440px) {
        font-size: 30px;
        line-height: 40px;
    }
`

const Img = styled.img`
    width: 20px;
    height: 20px;

    @media only screen and (min-width: 1440px) {
        width: 26px;
        height: 26px;
    }
`