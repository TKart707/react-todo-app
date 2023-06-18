import React from 'react'
import styled from 'styled-components'
import { Circle } from './styles/themes';

function CreateTodo({input, onInput, onKeyDown}) {


  return (
    <Container>
        <StyledInput 
            value={input}
            onChange={onInput}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Create a new todo..."
        />
        <StyledCircle></StyledCircle>
    </Container>
  )
}

export default CreateTodo;

const Container = styled.div`
    position: relative;
    margin: 40px 0 16px;

    @media only screen and (min-width: 1440px) {
        margin-bottom: 24px;
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    padding-left: 52px;

    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    
    color: ${({theme}) => theme.textColorInput};
    ::placeholder {
        color: ${({theme}) => theme.textColorPlaceholder}; 
    }
    background-color: ${({theme}) => theme.todoBG};
    box-shadow: ${({theme}) => theme.boxShadow};
    
    border-radius: 5px;
    outline: none;
    border: none;

    @media only screen and (min-width: 1440px) {
        height: 64px;
        padding-left: 72px;

        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.25px;
    }
`

const StyledCircle = styled(Circle)`
    
    position: absolute;
    top: 14px;
    left: 20px;

    @media only screen and (min-width: 1440px) {

        top: 20px;
        left: 24px;
    }
`