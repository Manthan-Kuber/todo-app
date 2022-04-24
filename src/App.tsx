import { AppWrapper, DeleteButton, Main, MainWrapper } from "./App.styles";
import AddTodo from "./components/AddTodo/AddTodo";
import Tabs from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import GlobalStyles from "./GlobalStyles";
import { useAppSelector } from "./app/hooks";
import { StyledButton } from "./components/AddTodo/AddTodo.styles";
import { BiTrashAlt } from "react-icons/bi";

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
            {todo.selectedTab === "Completed" && (
              <DeleteButton>
                <BiTrashAlt className="deleteIcon" size={14} />
                Delete All
              </DeleteButton>
            )}
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
