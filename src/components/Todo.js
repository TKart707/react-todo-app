import React from 'react'
import styled from 'styled-components';
import { Circle } from './styles/themes';
import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

function Todo({id, todo, completed, onCheck, onDelete}) {
// console.log(id)

// console.log(id)
  return (
    <Container>  
        <Div>       
            <CheckDiv 
                onClick={() => onCheck(id)}
                completed={completed}
            >
                {completed ? <CheckImg src={check} alt="check icon" /> : null}
            </CheckDiv> 

            {
                completed ? <CheckedLi>{todo}</CheckedLi>
                          : <Li>{todo}</Li>
            }                            
        </Div>
        <ImgDiv onClick={() => onDelete(id)}>
            <Img                           
                src={cross} 
                alt="icon of cross" 
            />
        </ImgDiv>
        
    </Container>
  )
}

export default Todo;

const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    
    padding: 16px 20px;

    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;

    color: ${({theme}) => theme.textColorTodo};
    
    border-bottom: 1px solid ${({theme}) => theme.line};

    @media only screen and (min-width: 1440px) {
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.25px;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const Li = styled.li` 
    list-style-type: none;
` 
const CheckedLi = styled(Li)`
    text-decoration-line: line-through;
    color: ${({theme}) => theme.textColorStrike};
`

const ImgDiv = styled.div``

const Img = styled.img`
    width: 15px;
    height: 15px;
`

const CheckDiv = styled(Circle)`
    display: flex;
    align-items: center;
    justify-content: center;


    border-radius: 50%;
    background: ${props => props.completed 
        ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)" 
        : "none"}

    @media only screen and (min-width: 1440px) {
        :hover {
            border: 2px solid "red";
        }
    }
    
`
const CheckImg = styled.img`
`
