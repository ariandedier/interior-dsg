import React from 'react'
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
        <div className='title'>
        <h1>Interior <br/> <span>design</span></h1>
        </div>

        <div className='desc'>
            <h3>
                We will help you <br/>
                create your <br/>
                dream design
            </h3>
        </div>

        <div className='button'>
            <button>M O R E</button>
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 50px;
    margin-left: 50px;

    h1{
        user-select: none;
        font-family: 'Playfair Display', serif;
        font-size: 100px;
        font-weight: 400;
        text-decoration: underline;
        span{
            margin-left: 300px;
        }
    }

    h3{
        user-select: none;
        font-family: 'Heebo', sans-serif;
        font-weight: 300;
        font-size: 25px;
        opacity: 0.7;
    }

    button{
        cursor: pointer;
        font-family: 'Heebo', sans-serif;
        font-weight: 300;
        font-size: 20px;
        width: 300px;
        padding: 20px;
        border: none;
        background-color: #041E42;
        color: #fff;
        transition: 0.3s;
        :hover{
            opacity: 0.8;
        }
    }
`

export default Main