import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png"

const Header = () => {
  return (
        <Container>
            <div className='logo'>
            <img src={logo}/>
            </div>

            <div className='links'>
                <h3>About</h3>
                <h3>Services</h3>
                <h3>Projects</h3>
                <h3>Gallery</h3>
                <h3>Contact</h3>
            </div>
        </Container>
  )
}

const Container = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    gap:200px;

    img{
        cursor: pointer;
    }

    div.links{
        font-family: 'Heebo', sans-serif;
        display: flex;
        gap:50px;
        opacity: 0.7;
        h3{
            cursor: pointer;
            font-weight: 500;
            transition: 0.3s;
            :hover{
            opacity: 0.5;
            transform: translateY(-2px);
        }
        }
    }
`

export default Header