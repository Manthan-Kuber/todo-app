import {
  AppWrapper,
  DeleteButton,
  Main,
  MainWrapper,
  FallbackText,
} from "./App.styles";
import AddTodo from "./components/AddTodo/AddTodo";
import Tabs from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import GlobalStyles from "./GlobalStyles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { BiTrashAlt } from "react-icons/bi";
import { deleteAllTodos } from "./features/todo";
import { AnimatePresence } from "framer-motion";

function App() {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
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
            <AnimatePresence exitBeforeEnter>
              <TodoList />
              {todo.selectedTab === "Completed" &&
                todo.todoList.filter((item) => item.status === true).length !==
                  0 && (
                  <DeleteButton onClick={() => dispatch(deleteAllTodos())}>
                    <BiTrashAlt className="deleteIcon" size={14} />
                    Delete All
                  </DeleteButton>
                )}
              {todo.todoList.length === 0 && (
                <FallbackText>Nothing to see here!</FallbackText>
              )}
            </AnimatePresence>
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
