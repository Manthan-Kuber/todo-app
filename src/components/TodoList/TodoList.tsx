import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkUncheck } from "../../features/todo";
import { StyledUl } from "./TodoList.styles";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <StyledUl>
      {todo.todoList.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.isChecked[index]}
            onChange={() => dispatch(checkUncheck(index))}
          />
          <p>{item}</p>
        </li>
      ))}
    </StyledUl>
  );
};

export default TodoList;
