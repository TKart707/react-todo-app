import React from 'react'
import styled from "styled-components";

function TodoListBottom({length, onClear}) {
  return (
    <Container>
        <span>{length} items left</span>
        <ClearCompleted onClick={onClear}>Clear Completed</ClearCompleted>
    </Container>
  )
}

export default TodoListBottom;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px 20px 22px 20px;

  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;

  color: ${({theme}) => theme.textColorFilter};
  background-color: ${({theme}) => theme.todoBG};
  border-radius: 0 0 5px 5px;
`
    
// const NumOfTodo = styled.span`
// `
const ClearCompleted = styled.span`
  @media only screen and (min-width: 1440px) {
    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.textColorHover};
    }
  }   
`
