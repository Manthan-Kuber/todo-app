import { createSlice } from "@reduxjs/toolkit";

export const tabsList: Array<string> = ["All", "Active", "Completed"];

interface todoState {
  value: {
    selectedTab: string;
    todoList: {
      name: string;
      status: boolean;
    }[];
    todoInput: string;
  };
}

const initialState: todoState = {
  value: {
    selectedTab: tabsList[0],
    todoList: [
      { name: "Eat", status: false },
      { name: "Sleep", status: false },
      { name: "Code", status: true },
      { name: "Repeat", status: false },
    ],
    todoInput: "",
  },
};

const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    switchTab: (state, action) => {
      state.value.selectedTab = action.payload;
    },
    checkUncheck: (state, action) => {
      state.value.todoList[action.payload].status =
        !state.value.todoList[action.payload].status;
    },
    todoInputChangeHandler: (state, action) => {
      state.value.todoInput = action.payload;
    },
    addTodos: (state, action) => {
      state.value.todoInput &&
        state.value.todoList.push({
          name: action.payload,
          status: false,
        });
      state.value.todoInput = "";
    },
    deleteTodos: (state, action) => {
      state.value.todoList.splice(action.payload, 1);
    },
    deleteAllTodos :(state) => {state.value.todoList = []}
  },
});

export const {
  switchTab,
  checkUncheck,
  todoInputChangeHandler,
  addTodos,
  deleteTodos,
  deleteAllTodos,
} = todoSLice.actions;

export default todoSLice.reducer;
