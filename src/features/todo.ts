import { createSlice } from "@reduxjs/toolkit";

const tabsList: Array<string> = ["All", "Active", "Completed"];

interface todoState {
  value: {
    selectedTab: string;
  };
}

const initialState: todoState = {
  value: {
    selectedTab: tabsList[0],
  },
};

const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    switchTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default todoSLice.reducer;
