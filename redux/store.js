import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    app: toggleReducer.reducer
  }
}); 