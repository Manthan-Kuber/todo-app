import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tabsList: Array<string> = ["All", "Active", "Completed"];

interface todoState {
  value: {
    selectedTab: string;
    todoList: {
      id: string;
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
      { id: uuidv4(), name: "Eat", status: false },
      { id: uuidv4(), name: "Sleep", status: false },
      { id: uuidv4(), name: "Code", status: true },
      { id: uuidv4(), name: "Repeat", status: false },
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
          id: uuidv4(),
          name: action.payload,
          status: false,
        });
      state.value.todoInput = "";
    },
    deleteTodos: (state, action) => {
      state.value.todoList = state.value.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteAllTodos: (state) => {
      state.value.todoList = [];
    },
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
