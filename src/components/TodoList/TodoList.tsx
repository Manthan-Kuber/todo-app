import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkUncheck } from "../../features/todo";
import { StyledUl } from "./TodoList.styles";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <StyledUl>
      {todo.selectedTab === "All" ? (
        todo.todoList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => dispatch(checkUncheck(index))}
            />
            <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
          </li>
        ))
      ) : todo.selectedTab === "Active" ? (
        todo.todoList
          .filter((item) => item.status === false)
          .map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => dispatch(checkUncheck(index))}
              />
              <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
            </li>
          ))
      ) : todo.selectedTab === "Completed" ? (
        todo.todoList
          .filter((item) => item.status === true)
          .map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => dispatch(checkUncheck(index))}
              />
              <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
            </li>
          ))
      ) : (
        <></>
      )}
    </StyledUl>
  );
};

export default TodoList;
