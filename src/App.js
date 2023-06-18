import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./components/styles/themes";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";
import FilterButton from "./components/FilterButton";

const FILTER_BUTTONS = {
  All: () => true,
  Active: (todo) => !todo.completed, 
  Completed: (todo) => todo.completed,
}

const FILTER_BUTTONS_NAMES = Object.keys(FILTER_BUTTONS);

function App() {
  const [theme, setTheme] = useState(false);
  const [input, setInput] = useState('');
  const [todosArr, setTodosArr] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input !== "") {
      setTodosArr([
        {
          id: `todo-${nanoid()}`,
          todo: input,
          completed: false
        },...todosArr
      ])
      setInput('');
    }
  } 

  const handleClickCheck= (id) => {
    const updatedTodosArr = todosArr.map((todo) => {
      if (id === todo.id ) {
        return {...todo, completed: !todo.completed}
      } 
      return todo;
      
    });
    setTodosArr(updatedTodosArr);
  }

  const handleClickDelete = (id) => {
    setTodosArr(
      todosArr.filter((todo) => id !== todo.id)
    )
  }

  const handleClickActive = () => {
    setTodosArr(
      todosArr.filter(todo => todo.completed === false)
    )
  }

  const handleClickClear = () => {
    setTodosArr(
      todosArr.filter(todo => todo.completed === false)
    )
  }
  
  
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme} >
      <GlobalStyles />
        <Wrapper>
          <Header theme={theme} themeToggler={() => setTheme(!theme)} />

          <CreateTodo 
            input={input} 
            onInput={handleChangeInput}
            onKeyDown={handleKeyDown}
          />

          <TodosList 
            todosArr={todosArr}
            filter={filter}
            filterButtons={FILTER_BUTTONS}
            onCheck={handleClickCheck}
            onDelete={handleClickDelete}
            onActive={handleClickActive}
            onClear={handleClickClear}
          />

          <Container>           
            {FILTER_BUTTONS_NAMES.map((name) => (
              <FilterButton 
                name={name}
                onClick={setFilter}
                key={name}
              />
            ))}           
          </Container>
        </Wrapper>
    </ThemeProvider>
  );
}

export default App;


const Wrapper = styled.div`
  width: 375px;
  height: 100vh;
  padding: 48px 24px 0 24px;
  margin: 0 auto;
  background-image: ${({theme}) => theme.mobileBgImg};
  background-repeat: no-repeat;
  background-size: 100% 200px;

  background-color: ${({theme}) => theme.appBG};

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    padding: 70px 450px 0 450px;

    background-image: ${({theme}) => theme.desktopBgImg};
    background-repeat: no-repeat;
    background-size: 100% 300px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 16px;
  padding: 15px 80px 19px 81px;
  
  background-color: ${({theme}) => theme.todoBG};
  boder-radius: 5px;   
   
  Button:nth-child(1) {
    color: #3A7CFD;
  }
`
