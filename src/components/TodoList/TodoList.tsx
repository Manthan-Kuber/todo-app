import { useAppSelector } from "../../app/hooks";
import { StyledUl } from "./TodoList.styles";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo.value);
  return (
    <StyledUl>
      {todo.todoList.map((item, index) => (
        <li key={index}>
          <input type="checkbox" />
          <p>{item}</p>
        </li>
      ))}
    </StyledUl>
  );
};

export default TodoList;
