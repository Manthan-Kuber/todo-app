import { Container, StyledButton, TodoInput } from "./AddTodo.styles";

const AddTodo = () => {
  return (
    <Container>
      <TodoInput placeholder="add details" />
      <StyledButton>Add</StyledButton>
    </Container>
  );
};

export default AddTodo;
