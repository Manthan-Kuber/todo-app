import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkUncheck } from "../../features/todo";
import { StyledUl, Wrapper } from "./TodoList.styles";
import { BiTrashAlt } from "react-icons/bi";

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <StyledUl>
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
                  onChange={() => dispatch(checkUncheck(index))}
                />
                <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
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
                  onChange={() => dispatch(checkUncheck(index))}
                />
                <p className={item.status ? "strikedTodo" : ""}>{item.name}</p>
              </Wrapper>
              <BiTrashAlt size={24} className="deleteIcon" />
            </li>
          ))
      ) : (
        <></>
      )}
    </StyledUl>
  );
};

export default TodoList;
