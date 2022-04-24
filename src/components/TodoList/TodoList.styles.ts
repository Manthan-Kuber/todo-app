import styled from "styled-components";

export const StyledUl = styled.ul`
  margin-top: 3.3rem;
  font: 500 1.8rem var(--ff-montserrat);
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  input {
    width: 24px;
    accent-color: var(--clr-primary);
  }
  .strikedTodo {
    text-decoration: line-through;
  }

  .deleteIcon {
    color: #bdbdbd;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
