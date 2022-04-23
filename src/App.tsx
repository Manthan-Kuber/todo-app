import { AppWrapper, Main, MainWrapper } from "./App.styles";
import AddTodo from "./components/AddTodo/AddTodo";
import Tabs from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1>#todo</h1>
        <MainWrapper>
          <Main>
            <Tabs />
            <AddTodo />
            <TodoList />
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
