import { StyledUl } from "./TodoList.styles";

const TodoList = () => {
  return (
    <StyledUl>
      <li>
        <input type="checkbox" />
        <p>Do Coding Challenges</p>
      </li>
      <li>
        <input type="checkbox" />
        <p>Do Coding Challenges</p>
      </li>
      <li>
        <input type="checkbox" />
        <p>Do Coding Challenges</p>
      </li>
    </StyledUl>
  );
};

export default TodoList;
