import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {toggle:false}
};

export const toggleReducer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleAction: (state) => {
        state.value.toggle = !state.value.toggle
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleAction } = toggleReducer.actions;

export default toggleReducer.reducer;
