import React from 'react'
import styled from 'styled-components'
import Todo from './Todo';
import TodoListBottom from './TodoListBottom';


function TodosList({todosArr, onCheck, onDelete, onClear, filter, filterButtons}) {

  const newTodos = todosArr.filter(filterButtons[filter])
    .map((todo) => (
      <Todo 
        id={todo.id}
        todo={todo.todo}
        completed={todo.completed} 
        onCheck={onCheck}
        onDelete={onDelete}  
        key={todo.id}                      
      />    
    ))

  return (
    <Container>
      <Ul>
        {newTodos}
      </Ul>

      <TodoListBottom 
        onClear={onClear}
        length={newTodos.length} 
      /> 
    </Container>
  )
}

export default TodosList;

const Ul = styled.ul`
  border-radius: 5px 5px 0 0;
  background-color: ${({theme}) => theme.todoBG};
    // border-radius: 5px;
`
const Container = styled.div` 
`