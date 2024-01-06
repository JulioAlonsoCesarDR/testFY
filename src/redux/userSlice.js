import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
};
export const nameSlice = createSlice({
  name: "Name",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;
