import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkUncheck, deleteTodos } from "../../features/todo";
import { StyledUl, Wrapper } from "./TodoList.styles";
import { BiTrashAlt } from "react-icons/bi";
import {  motion } from "framer-motion";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    
      <StyledUl
        as={motion.ul}
        key={todo.selectedTab ? todo.selectedTab : "empty" }
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
      >
        {todo.selectedTab === "All" ? (
          todo.todoList.map((item, index) => (
            <li key={index}>
              <Wrapper>
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => dispatch(checkUncheck(index))}
                />
                <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
              </Wrapper>
            </li>
          ))
        ) : todo.selectedTab === "Active" ? (
          todo.todoList
            .filter((item) => item.status === false)
            .map((item, index) => (
              <li key={index}>
                <Wrapper>
                  <input
                    type="checkbox"
                    checked={item.status}
                    // onChange={() => dispatch(checkUncheck(index))}
                  />
                  <p className={item.status ? "strikedTodo" : ""}>
                    {item.name}
                  </p>
                </Wrapper>
              </li>
            ))
        ) : todo.selectedTab === "Completed" ? (
          todo.todoList
            .filter((item) => item.status === true)
            .map((item, index) => (
              <li key={index}>
                <Wrapper>
                  <input
                    type="checkbox"
                    checked={item.status}
                    // onChange={() => dispatch(checkUncheck(index))}
                  />
                  <p className={item.status ? "strikedTodo" : ""}>
                    {item.name}
                  </p>
                </Wrapper>
                <BiTrashAlt
                  size={24}
                  className="deleteIcon"
                  onClick={() => dispatch(deleteTodos(index))}
                />
              </li>
            ))
        ) : (
          <></>
        )}
      </StyledUl>
   
  );
};

export default TodoList;
