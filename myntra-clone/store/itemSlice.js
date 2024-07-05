import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addIntialItems: (store, action) => {
      return action.payload;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
