import { createSlice } from "@reduxjs/toolkit";

export const tabsList: Array<string> = ["All", "Active", "Completed"];

interface todoState {
  value: {
    selectedTab: string;
    isChecked: boolean;
    todoList: Array<string>;
    todoInput: string;
  };
}

const initialState: todoState = {
  value: {
    selectedTab: tabsList[0],
    isChecked: false,
    todoList: ["Eat", "Sleep", "Code", "Repeat"],
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
    checkUncheck: (state) => {
      state.value.isChecked = !state.value.isChecked;
    },
    todoInputChangeHandler: (state, action) => {
      state.value.todoInput = action.payload;
    },
    addTodos: (state, action) => {
      state.value.todoInput && state.value.todoList.push(action.payload);
      state.value.todoInput = "";
    },
  },
});

export const { switchTab, checkUncheck, todoInputChangeHandler, addTodos } =
  todoSLice.actions;

export default todoSLice.reducer;
