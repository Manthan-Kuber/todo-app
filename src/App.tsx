import { AppWrapper, Main, MainWrapper } from "./App.styles";
import AddTodo from "./components/AddTodo/AddTodo";
import Tabs from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import GlobalStyles from "./GlobalStyles";
import { useAppSelector } from "./app/hooks";

function App() {
  const todo = useAppSelector((state) => state.todo.value);
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1>#todo</h1>
        <MainWrapper>
          <Main>
            <Tabs />
            {(todo.selectedTab === "All" || todo.selectedTab === "Active") && (
              <AddTodo />
            )}
            <TodoList />
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
