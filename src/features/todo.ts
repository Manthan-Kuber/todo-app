import { createSlice } from "@reduxjs/toolkit";

export const tabsList: Array<string> = ["All", "Active", "Completed"];

interface todoState {
  value: {
    selectedTab: string;
    isChecked: boolean;
  };
}

const initialState: todoState = {
  value: {
    selectedTab: tabsList[0],
    isChecked: false,
  },
};

const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    switchTab: (state, action) => {
      state.value.selectedTab = action.payload;
    },
    checkAndUncheck: (state) => {
      state.value.isChecked = !state.value.isChecked;
    },
  },
});

export const { switchTab } = todoSLice.actions;

export default todoSLice.reducer;
